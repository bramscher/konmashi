import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Update BrandIdentity
  const brandIdentities = await prisma.brandIdentity.findMany({ where: { teamId: null } });
  for (const bi of brandIdentities) {
    const membership = await prisma.teamMember.findFirst({ where: { userId: bi.userId } });
    if (membership) {
      await prisma.brandIdentity.update({
        where: { id: bi.id },
        data: { teamId: membership.teamId },
      });
      console.log(`Updated BrandIdentity ${bi.id} with teamId ${membership.teamId}`);
    }
  }

  // 2. Update IdeabankEntry
  const ideabankEntries = await prisma.ideabankEntry.findMany({ where: { teamId: null } });
  for (const entry of ideabankEntries) {
    const membership = await prisma.teamMember.findFirst({ where: { userId: entry.userId } });
    if (membership) {
      await prisma.ideabankEntry.update({
        where: { id: entry.id },
        data: { teamId: membership.teamId },
      });
      console.log(`Updated IdeabankEntry ${entry.id} with teamId ${membership.teamId}`);
    }
  }

  // 3. Update ContentRequest
  const contentRequests = await prisma.contentRequest.findMany({ where: { teamId: null } });
  for (const req of contentRequests) {
    const membership = await prisma.teamMember.findFirst({ where: { userId: req.userId } });
    if (membership) {
      await prisma.contentRequest.update({
        where: { id: req.id },
        data: { teamId: membership.teamId },
      });
      console.log(`Updated ContentRequest ${req.id} with teamId ${membership.teamId}`);
    }
  }

  // 4. Update GeneratedContent
  const generatedContents = await prisma.generatedContent.findMany({ where: { teamId: null } });
  for (const gc of generatedContents) {
    const req = await prisma.contentRequest.findUnique({ where: { id: gc.requestId } });
    if (req && req.teamId) {
      await prisma.generatedContent.update({
        where: { id: gc.id },
        data: { teamId: req.teamId },
      });
      console.log(`Updated GeneratedContent ${gc.id} with teamId ${req.teamId}`);
    }
  }

  // 5. Update SocialConnection
  const socialConnections = await prisma.socialConnection.findMany({ where: { teamId: null } });
  for (const sc of socialConnections) {
    const membership = await prisma.teamMember.findFirst({ where: { userId: sc.userId } });
    if (membership) {
      await prisma.socialConnection.update({
        where: { id: sc.id },
        data: { teamId: membership.teamId },
      });
      console.log(`Updated SocialConnection ${sc.id} with teamId ${membership.teamId}`);
    }
  }

  // 6. Update ContentFeedback
  const feedbacks = await prisma.contentFeedback.findMany({ where: { teamId: null } });
  for (const fb of feedbacks) {
    const req = await prisma.contentRequest.findUnique({ where: { id: fb.requestId } });
    if (req && req.teamId) {
      await prisma.contentFeedback.update({
        where: { id: fb.id },
        data: { teamId: req.teamId },
      });
      console.log(`Updated ContentFeedback ${fb.id} with teamId ${req.teamId}`);
    }
  }

  // 7. Update ScheduledPost
  const scheduledPosts = await prisma.scheduledPost.findMany({ where: { teamId: null } });
  for (const sp of scheduledPosts) {
    const gc = await prisma.generatedContent.findUnique({ where: { id: sp.contentId } });
    if (gc && gc.teamId) {
      await prisma.scheduledPost.update({
        where: { id: sp.id },
        data: { teamId: gc.teamId },
      });
      console.log(`Updated ScheduledPost ${sp.id} with teamId ${gc.teamId}`);
    }
  }

  console.log('Migration complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 