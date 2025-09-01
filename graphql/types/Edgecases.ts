import prisma from "@/lib/prisma";
import { builder } from "../builder";

builder.prismaObject("EdgeCase", {
  fields: (t) => ({
    id: t.exposeID("id"),
    description: t.exposeString("description", { nullable: true }),
    testCase: t.exposeString("testCase"),
    author: t.relation("author"),
    userId: t.exposeID("authorId"),
    createdAt: t.expose("createdAt", { type: "Date" }),
    updatedAt: t.expose("updatedAt", { type: "Date" }),
    problem: t.relation("problem"),
    problemId: t.exposeID("problemId"),
    isAiGenerated: t.exposeBoolean("isAiGenerated"),
  }),
});

builder.queryField("edgeCases", (t) =>
  t.prismaField({
    type: ["EdgeCase"],
    resolve: async (query, _parent, _args, _ctx, _info) => {
      return prisma.edgeCase.findMany({
        ...query,
      });
    },
  })
);
