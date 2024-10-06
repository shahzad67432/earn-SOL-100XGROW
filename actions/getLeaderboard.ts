"use server"
import prisma from "@/lib/prisma";

export async function getLeaderboard(testId: number) {
    try {
      // Fetch leaderboard entries from the database
      const leaderboard = await prisma.leaderboard.findMany({
        where: { testId },
        include: { user: true, test: true }, // Include user details
        orderBy: { highestScore: 'desc' }, // Order by highest score
      });
  
      return leaderboard;
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
      throw new Error('Failed to fetch leaderboard');
    }
  }