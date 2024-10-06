-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "bountyAmount" INTEGER,
ADD COLUMN     "fee" INTEGER,
ADD COLUMN     "isContest" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPremium" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalFee" INTEGER;
