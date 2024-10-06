-- CreateTable
CREATE TABLE "Learn" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Learn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LearnImages" (
    "id" SERIAL NOT NULL,
    "learnId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "LearnImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LearnImages" ADD CONSTRAINT "LearnImages_learnId_fkey" FOREIGN KEY ("learnId") REFERENCES "Learn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
