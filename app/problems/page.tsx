"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ProblemCard } from "../components/ProblemCard";
import { ProblemsFilter } from "../components/ProblemsFilter";
import type { Problem, Difficulty, Category } from "../types/problem";
// import ProblemsRelayList from "./ProblemsRelayList";

// Mock data - in a real app, this would come from an API
const mockProblems: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "easy",
    category: "arrays",
    isCompleted: true,
  },
  {
    id: "2",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers.",
    difficulty: "medium",
    category: "math",
    isCompleted: false,
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    category: "strings",
    isCompleted: true,
  },
  {
    id: "4",
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    difficulty: "hard",
    category: "arrays",
    isCompleted: false,
  },
  {
    id: "5",
    title: "Binary Tree Maximum Path Sum",
    description:
      "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.",
    difficulty: "hard",
    category: "trees",
    isCompleted: false,
  },
  {
    id: "6",
    title: "Valid Parentheses",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    difficulty: "easy",
    category: "strings",
    isCompleted: true,
  },
  {
    id: "7",
    title: "Merge k Sorted Lists",
    description:
      "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
    difficulty: "hard",
    category: "sorting",
    isCompleted: false,
  },
  {
    id: "8",
    title: "Search in Rotated Sorted Array",
    description:
      "There is an integer array nums sorted in ascending order (with distinct values).",
    difficulty: "medium",
    category: "searching",
    isCompleted: false,
  },
];

export default function Problems() {
  const router = useRouter();
  const [problems, setProblems] = useState<Problem[]>(mockProblems);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulties, setSelectedDifficulties] = useState<
    Difficulty[]
  >([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const handleDifficultyChange = (difficulty: Difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleAddProblem = (newProblem: Omit<Problem, "id">) => {
    const problemWithId: Problem = {
      ...newProblem,
      id: String(problems.length + 1),
      isCompleted: false,
    };
    setProblems([problemWithId, ...problems]);
  };

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch = problem.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesDifficulty =
        selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(problem.difficulty);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(problem.category);

      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [problems, searchQuery, selectedDifficulties, selectedCategories]);

  const handleNavigateToProblem = (id: string) => {
    router.push(`/problems/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-[90%] mx-auto problems-page">
      {/* Main Content */}
      <div className="mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 font-['Lato']">
            <div className="sticky top-8 bg-transparent p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Filters {/* <ProblemsRelayList /> */}
              </h2>
              <ProblemsFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedDifficulties={selectedDifficulties}
                onDifficultyChange={handleDifficultyChange}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </aside>

          {/* Problems Grid */}
          <main className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 font-['Lato']">
                All Problems
              </h2>
              <p className="text-gray-600 mt-3 text-lg font-['Lato']">
                {filteredProblems.length} problems found
              </p>
            </div>

            {filteredProblems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg font-['Lato']">
                  No problems found matching your filters.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProblems.map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    onClick={() => handleNavigateToProblem(problem.id)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
