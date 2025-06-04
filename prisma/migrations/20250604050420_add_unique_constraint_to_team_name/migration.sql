/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `teams` will be added. If there are existing duplicate values, this will fail.
  - Made the column `teamId` on table `brand_identities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `content_requests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `generated_content` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `ideabank_entries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `social_connections` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "brand_identities" DROP CONSTRAINT "brand_identities_teamId_fkey";

-- DropForeignKey
ALTER TABLE "content_requests" DROP CONSTRAINT "content_requests_teamId_fkey";

-- DropForeignKey
ALTER TABLE "generated_content" DROP CONSTRAINT "generated_content_teamId_fkey";

-- DropForeignKey
ALTER TABLE "ideabank_entries" DROP CONSTRAINT "ideabank_entries_teamId_fkey";

-- DropForeignKey
ALTER TABLE "social_connections" DROP CONSTRAINT "social_connections_teamId_fkey";

-- AlterTable
ALTER TABLE "brand_identities" ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "content_requests" ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "generated_content" ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ideabank_entries" ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "social_connections" ALTER COLUMN "teamId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");

-- AddForeignKey
ALTER TABLE "brand_identities" ADD CONSTRAINT "brand_identities_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ideabank_entries" ADD CONSTRAINT "ideabank_entries_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_requests" ADD CONSTRAINT "content_requests_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generated_content" ADD CONSTRAINT "generated_content_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_connections" ADD CONSTRAINT "social_connections_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
