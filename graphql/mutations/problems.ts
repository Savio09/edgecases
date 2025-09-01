import { builder } from "../builder";

// Create a new problem
builder.mutationField("createProblem", (t) =>
  t.prismaField({
    type: "Problem",
    args: {
      title: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, description } = args;
      const { currentUserId } = ctx;

      if (!currentUserId) {
        throw new Error("User not authenticated");
      }

      return ctx.prisma.problem.create({
        ...query,
        data: {
          title,
          description,
          author: { connect: { id: currentUserId } },
        },
      });
    },
  })
);

// Update an existing problem
builder.mutationField("updateProblem", (t) =>
  t.prismaField({
    type: "Problem",
    args: {
      id: t.arg.string({ required: true }),
      title: t.arg.string(),
      description: t.arg.string(),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, title, description } = args;
      const currentUserId = "some-user-id";

      const problem = await ctx.prisma.problem.findUnique({
        where: { id },
      });

      if (problem?.authorId !== currentUserId) {
        throw new Error("You are not authorized to perform this action.");
      }

      return ctx.prisma.problem.update({
        ...query,
        where: { id },
        data: {
          title: title ?? undefined,
          description: description ?? undefined,
        },
      });
    },
  })
);

// Delete a problem by ID
builder.mutationField("deleteProblem", (t) =>
  t.prismaField({
    type: "Problem",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;
      const currentUserId = "some-user-id";

      const problem = await ctx.prisma.problem.findUnique({
        where: { id },
      });

      if (problem?.authorId !== currentUserId) {
        throw new Error("You are not authorized to perform this action.");
      }

      return ctx.prisma.problem.delete({
        ...query,
        where: { id },
      });
    },
  })
);
