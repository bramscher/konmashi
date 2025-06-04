-- AlterTable
ALTER TABLE "brand_identities" ADD COLUMN     "teamId" TEXT;

-- AlterTable
ALTER TABLE "content_requests" ADD COLUMN     "teamId" TEXT;

-- AlterTable
ALTER TABLE "generated_content" ADD COLUMN     "teamId" TEXT;

-- AlterTable
ALTER TABLE "ideabank_entries" ADD COLUMN     "teamId" TEXT;

-- AlterTable
ALTER TABLE "social_connections" ADD COLUMN     "teamId" TEXT;

-- AddForeignKey
ALTER TABLE "brand_identities" ADD CONSTRAINT "brand_identities_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideabank_entries" ADD CONSTRAINT "ideabank_entries_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_requests" ADD CONSTRAINT "content_requests_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generated_content" ADD CONSTRAINT "generated_content_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_connections" ADD CONSTRAINT "social_connections_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
