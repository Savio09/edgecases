import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";
import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request, Response },
  context: async ({ request }) => {
    const { userId } = getAuth(request as any);
    return { prisma, currentUserId: userId ?? null };
  },
});

export { yoga as GET, yoga as POST };
