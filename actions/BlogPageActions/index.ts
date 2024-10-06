"use server"
import prisma from "@/lib/prisma";

// Fetch users with most views and earnings
export const fetchUserActionForBlogs = async () => {
  // Fetch top 3 users by views
  const topUsersByViews = await prisma.user.findMany({
    orderBy: {
      views: 'desc', // Sort by views in descending order
    },
    take: 3, // Limit to 3 users
    select: {
      name: true,
      views: true,
      id: true
    },
  });

  // Fetch top 3 users by total earnings
  const topUsersByEarnings = await prisma.user.findMany({
    select: {
      name: true,
      views: true, // Include views for additional info
      earnings: {
        select: {
          totalEarnings: true,
        },
      },
    },
    take: 3, // Limit to 3 users
  });

  // Calculate total earnings for each user
  const topUsersByEarningsWithTotal = topUsersByEarnings.map((user) => ({
    name: user.name,
    views: user.views,
    totalEarnings: user.earnings.reduce((acc, earning) => acc + (earning.totalEarnings || 0), 0), // Default to 0 if undefined
  }));

  if (!topUsersByViews || !topUsersByEarningsWithTotal) {
    return { success: false, message: "No users found" };
  }

  return {
    success: true,
    topUsersByViews,
    topUsersByEarnings: topUsersByEarningsWithTotal,
  };
};
