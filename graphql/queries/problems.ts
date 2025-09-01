import { builder } from "../builder";

// Get a list of all problems with pagination
builder.queryField("problems", (t) =>
  t.prismaConnection({
    type: "Problem",
    cursor: "id",
    resolve: (query, _parent, _args, ctx) =>
      ctx.prisma.problem.findMany({ ...query }),
  })
);

// Get a single problem by its ID
builder.queryField("problem", (t) =>
  t.prismaField({
    type: "Problem",
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, args, ctx) =>
      ctx.prisma.problem.findUnique({
        ...query,
        where: { id: args.id },
      }),
  })
);
