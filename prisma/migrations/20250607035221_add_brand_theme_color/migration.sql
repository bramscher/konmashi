-- CreateEnum
CREATE TYPE "BrandThemeColor" AS ENUM ('RED', 'ROSE', 'ORANGE', 'GREEN', 'BLUE', 'YELLOW', 'VIOLET', 'NEUTRAL', 'STONE', 'ZINC', 'SLATE', 'GRAY', 'AMBER', 'LIME', 'EMERALD', 'TEAL', 'CYAN', 'SKY', 'INDIGO', 'PURPLE', 'FUCHSIA', 'PINK');

-- AlterTable
ALTER TABLE "brands" ADD COLUMN     "themeColor" "BrandThemeColor" NOT NULL DEFAULT 'RED';
