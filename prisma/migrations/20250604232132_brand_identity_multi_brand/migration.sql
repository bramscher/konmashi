/*
  Warnings:

  - A unique constraint covering the columns `[userId,brandId]` on the table `brand_identities` will be added. If there are existing duplicate values, this will fail.
  - Made the column `brandId` on table `brand_identities` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "brand_identities" DROP CONSTRAINT "brand_identities_brandId_fkey";

-- DropIndex
DROP INDEX "brand_identities_userId_key";

-- AlterTable
ALTER TABLE "brand_identities" ALTER COLUMN "brandId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "brand_identities_userId_brandId_key" ON "brand_identities"("userId", "brandId");

-- AddForeignKey
ALTER TABLE "brand_identities" ADD CONSTRAINT "brand_identities_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
