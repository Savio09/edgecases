import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import type { Difficulty, Category } from "../types/problem";

interface ProblemsFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDifficulties: Difficulty[];
  onDifficultyChange: (difficulty: Difficulty) => void;
  selectedCategories: Category[];
  onCategoryChange: (category: Category) => void;
}

const difficulties: { value: Difficulty; label: string; color: string }[] = [
  { value: "easy", label: "Easy", color: "text-green-600" },
  { value: "medium", label: "Medium", color: "text-orange-600" },
  { value: "hard", label: "Hard", color: "text-red-600" },
];

const categories: { value: Category; label: string }[] = [
  { value: "arrays", label: "Arrays" },
  { value: "strings", label: "Strings" },
  { value: "trees", label: "Trees" },
  { value: "graphs", label: "Graphs" },
  { value: "dp", label: "Dynamic Programming" },
  { value: "sorting", label: "Sorting" },
  { value: "searching", label: "Searching" },
  { value: "math", label: "Math" },
  { value: "other", label: "Other" },
];

export function ProblemsFilter({
  searchQuery,
  onSearchChange,
  selectedDifficulties,
  onDifficultyChange,
  selectedCategories,
  onCategoryChange,
}: ProblemsFilterProps) {
  return (
    <div className="space-y-8! my-[15px]!">
      <div className="relative">
        <Search className="absolute left-3! top-1/2! -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10! h-11! bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-6! my-[15px]!">
        <div>
          <Label className="text-base font-semibold text-gray-900 mb-4 block">
            Difficulty
          </Label>
          <div className="space-y-3! my-[15px]!">
            {difficulties.map((difficulty) => (
              <div
                key={difficulty.value}
                className="flex items-center space-x-3!"
              >
                <Checkbox
                  id={difficulty.value}
                  checked={selectedDifficulties.includes(difficulty.value)}
                  onCheckedChange={() => onDifficultyChange(difficulty.value)}
                  className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label
                  htmlFor={difficulty.value}
                  className={`text-sm font-medium cursor-pointer ${difficulty.color}`}
                >
                  {difficulty.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-semibold text-gray-900 mb-4 block">
            Category
          </Label>
          <div className="space-y-3! my-[15px]!">
            {categories.map((category) => (
              <div
                key={category.value}
                className="flex items-center space-x-3!"
              >
                <Checkbox
                  id={category.value}
                  checked={selectedCategories.includes(category.value)}
                  onCheckedChange={() => onCategoryChange(category.value)}
                  className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <label
                  htmlFor={category.value}
                  className="text-sm font-medium cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
