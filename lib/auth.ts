import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const getCurrentUserId = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });
  return user?.id;
};
