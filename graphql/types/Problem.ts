import prisma from "@/lib/prisma";
import { builder } from "../builder";
import { DifficultyEnum, CategoryEnum } from "./Enums";

builder.prismaObject("Problem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    description: t.exposeString("description", { nullable: true }),
    createdAt: t.expose("createdAt", { type: "Date" }),
    author: t.relation("author"),
    difficulty: t.expose("difficulty", { type: DifficultyEnum }),
    category: t.expose("category", { type: CategoryEnum }),
    authorId: t.exposeID("authorId"),
    edgeCases: t.relation("edgeCases"),
  }),
});
