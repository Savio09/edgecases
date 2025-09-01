import { builder } from "../builder";

export const DifficultyEnum = builder.enumType("Difficulty", {
  values: ["easy", "medium", "hard"] as const,
});

export const CategoryEnum = builder.enumType("Category", {
  values: [
    "arrays",
    "strings",
    "trees",
    "graphs",
    "dynamic_programming",
    "sorting",
    "searching",
    "math",
    "other",
  ] as const,
});
