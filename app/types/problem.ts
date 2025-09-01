export type Difficulty = "easy" | "medium" | "hard";
export type Category =
  | "arrays"
  | "strings"
  | "trees"
  | "graphs"
  | "dp"
  | "sorting"
  | "searching"
  | "math"
  | "other";

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  category: Category;
  isCompleted?: boolean;
  examples?: Example[];
  constraints?: string[];
  testCases?: TestCase[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}
