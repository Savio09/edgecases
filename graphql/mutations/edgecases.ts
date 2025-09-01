import { builder } from "../builder";

// post new edge case to a specific problem
builder.mutationField("createEdgeCase", (t) =>
  t.prismaField({
    type: "EdgeCase",
    args: {
      description: t.arg.string({ required: true }),
      testCase: t.arg.string({ required: true }),
      problemId: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { description, testCase, problemId } = args;
      const { currentUserId } = ctx;

      if (!currentUserId) {
        throw new Error("User not authenticated");
      }
      const authorId = currentUserId;

      return ctx.prisma.edgeCase.create({
        ...query,
        data: {
          description,
          testCase,
          problem: {
            connect: { id: problemId },
          },
          author: {
            connect: { id: authorId },
          },
        },
      });
    },
  })
);

// Update an existing edge case
builder.mutationField("updateEdgeCase", (t) =>
  t.prismaField({
    type: "EdgeCase",
    args: {
      id: t.arg.string({ required: true }),
      description: t.arg.string(),
      testCase: t.arg.string(),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, description, testCase } = args;

      return ctx.prisma.edgeCase.update({
        ...query,
        where: { id },
        data: {
          description: description ?? undefined,
          testCase: testCase ?? undefined,
        },
      });
    },
  })
);

// Delete an edge case by ID
builder.mutationField("deleteEdgeCase", (t) =>
  t.prismaField({
    type: "EdgeCase",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      return ctx.prisma.edgeCase.delete({
        ...query,
        where: { id },
      });
    },
  })
);
