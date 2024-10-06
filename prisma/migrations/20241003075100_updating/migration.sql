/*
  Warnings:

  - You are about to drop the column `url` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "url",
ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "postUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "urlToFetchViews" TEXT NOT NULL DEFAULT '';
