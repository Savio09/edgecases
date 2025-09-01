import { builder } from "../builder";

// Query to get a single user by their ID
builder.queryField("user", (t) =>
  t.prismaField({
    type: "User",
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (query, root, args, ctx) =>
      ctx.prisma.user.findUnique({
        ...query,
        where: { id: args.id },
      }),
  })
);

// Query to get the current logged-in user
builder.queryField("me", (t) =>
  t.prismaField({
    type: "User",
    resolve: async (query, _parent, _args, ctx, _info) => {
      const user = await ctx.prisma.user.findFirst({
        ...query,
        where: { id: "to be filled later" },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    },
  })
);
