import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. For each Team, create a default Brand
  const teams = await prisma.team.findMany();
  const teamIdToBrandId: Record<string, string> = {};
  for (const team of teams) {
    const brand = await prisma.brand.create({
      data: {
        name: `${team.name} Default Brand`,
        teamId: team.id,
      },
    });
    teamIdToBrandId[team.id] = brand.id;
    console.log(`Created default Brand '${brand.name}' for Team '${team.name}'`);
  }

  // 2. Assign brandId to all brand-specific records with teamId but no brandId
  const models = [
    { name: 'brandIdentity', plural: 'brandIdentities' },
    { name: 'socialConnection', plural: 'socialConnections' },
    { name: 'contentRequest', plural: 'contentRequests' },
    { name: 'generatedContent', plural: 'generatedContents' },
    { name: 'ideabankEntry', plural: 'ideabankEntries' },
  ];
  for (const model of models) {
    // @ts-ignore
    const records = await prisma[model.plural].findMany({ where: { brandId: null } });
    for (const rec of records) {
      if (rec.teamId && teamIdToBrandId[rec.teamId]) {
        // @ts-ignore
        await prisma[model.name].update({
          where: { id: rec.id },
          data: { brandId: teamIdToBrandId[rec.teamId] },
        });
        console.log(`Updated ${model.name} ${rec.id} with brandId ${teamIdToBrandId[rec.teamId]}`);
      }
    }
  }

  // 3. For each TeamMember, create BrandMembership for the default Brand
  const teamMembers = await prisma.teamMember.findMany();
  for (const tm of teamMembers) {
    const brandId = teamIdToBrandId[tm.teamId];
    if (brandId) {
      // Check if already exists
      const exists = await prisma.brandMembership.findFirst({ where: { userId: tm.userId, brandId } });
      if (!exists) {
        await prisma.brandMembership.create({
          data: {
            userId: tm.userId,
            brandId,
            role: tm.role,
          },
        });
        console.log(`Created BrandMembership for user ${tm.userId} on brand ${brandId}`);
      }
    }
  }

  // 4. Add craig@bramscher.com as SuperAdmin if not present
  const craig = await prisma.user.findUnique({ where: { email: 'craig@bramscher.com' } });
  if (craig) {
    const superAdmin = await prisma.superAdmin.findUnique({ where: { userId: craig.id } });
    if (!superAdmin) {
      await prisma.superAdmin.create({ data: { userId: craig.id } });
      console.log('Added craig@bramscher.com as SuperAdmin');
    } else {
      console.log('craig@bramscher.com is already SuperAdmin');
    }
  } else {
    console.log('User craig@bramscher.com not found');
  }

  console.log('Backfill complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 