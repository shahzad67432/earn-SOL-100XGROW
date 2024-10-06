"use server"
// Assuming you have prisma setup
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function submitTest({ userId, testId, answers }: { userId: number, testId: number, answers: number[] }) {
  // Find the test
  const test = await prisma.test.findUnique({
    where: { id: testId },
  });

  if (!test) {
    return;
  }
  // Calculate the score
  // @ts-ignore
  const correctAnswers = test.questions.map((q: any) => q.correctAnswer);
  const score = answers.reduce((acc, answer, idx) => {
    if (answer === correctAnswers[idx]) acc += 1;
    return acc;
  }, 0);

  // Create a submission
  const submission = await prisma.submission.create({
    data: {
      userId,
      testId,
      answers,
      score,
    },
  });

  await prisma.user.update({
    where:{
      id: userId,
    },
    data:{
      premiumAccess: false,
    }
  })
  // Update the leaderboard
  const existingLeaderboard = await prisma.leaderboard.findFirst({
    where: { userId, testId },
  });

  if (existingLeaderboard) {
    if (score > existingLeaderboard.highestScore) {
      await prisma.leaderboard.update({
        where: { id: existingLeaderboard.id },
        data: { highestScore: score },
      });
    }
  } else {
    await prisma.leaderboard.create({
      data: {
        userId,
        testId,
        highestScore: score,
      },
    });
  }

  return {
    submission,
    score
  };
}
