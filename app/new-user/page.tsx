import prisma from "@/lib/prisma";
import { ClerkLoading } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const createNewUSer = async () => {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    redirect("/sign-in");
  }

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }
  redirect("/problems");
};
const NewUser = async () => {
  await createNewUSer();
  return <ClerkLoading />;
};

export default NewUser;
