import { PrismaClient } from '../../src/generated/prisma';

const prisma = new PrismaClient();

// Default theme colors for brands 1-9 (matching theme-config.ts)
const DEFAULT_BRAND_COLORS = [
  'RED',     // Brand 1
  'ROSE',    // Brand 2  
  'ORANGE',  // Brand 3
  'GREEN',   // Brand 4
  'BLUE',    // Brand 5
  'YELLOW',  // Brand 6
  'VIOLET',  // Brand 7
  'RED',     // Brand 8 (cycles back)
  'ROSE',    // Brand 9 (cycles back)
];

async function main() {
  console.log('Updating existing brands with default theme colors...');
  
  // Get all teams and their brands ordered by creation date
  const teams = await prisma.team.findMany({
    include: {
      brands: {
        orderBy: { createdAt: 'asc' },
      },
    },
  });
  
  let totalUpdated = 0;
  
  for (const team of teams) {
    console.log(`\nProcessing team: ${team.name} (${team.brands.length} brands)`);
    
    for (let i = 0; i < team.brands.length; i++) {
      const brand = team.brands[i];
      const colorIndex = i % DEFAULT_BRAND_COLORS.length;
      const themeColor = DEFAULT_BRAND_COLORS[colorIndex];
      
      await prisma.brand.update({
        where: { id: brand.id },
        data: { themeColor: themeColor as any },
      });
      
      console.log(`  ✓ Updated "${brand.name}" with theme color: ${themeColor}`);
      totalUpdated++;
    }
  }
  
  console.log(`\n✅ Successfully updated ${totalUpdated} brands with theme colors.`);
}

main()
  .catch((e) => {
    console.error('❌ Error updating brands:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 