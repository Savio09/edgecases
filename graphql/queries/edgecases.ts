import { builder } from "../builder";

// Get all edge cases in the database with pagination
builder.queryField("edgecases", (t) =>
  t.prismaConnection({
    type: "EdgeCase",
    cursor: "id",
    resolve: (query, _parent, _args, ctx) =>
      ctx.prisma.edgeCase.findMany({ ...query }),
  })
);
