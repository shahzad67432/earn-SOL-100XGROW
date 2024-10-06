/*
  Warnings:

  - You are about to drop the `LearnImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LearnImages" DROP CONSTRAINT "LearnImages_learnId_fkey";

-- AlterTable
ALTER TABLE "Learn" ADD COLUMN     "learnImage" TEXT[];

-- DropTable
DROP TABLE "LearnImages";
