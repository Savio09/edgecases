import { Check } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import type { Problem } from "../types/problem";

interface ProblemCardProps {
  problem: Problem;
  onClick?: () => void;
}

const difficultyConfig = {
  easy: {
    className: "bg-green-100 text-green-600 border-green-200",
  },
  medium: {
    className: "bg-orange-100 text-orange-600 border-orange-200",
  },
  hard: {
    className: "bg-red-100 text-red-600 border-red-200",
  },
};

const categoryDisplay = {
  arrays: "Arrays",
  strings: "Strings",
  trees: "Trees",
  graphs: "Graphs",
  dp: "Dynamic Programming",
  sorting: "Sorting",
  searching: "Searching",
  math: "Math",
  other: "Other",
};

export function ProblemCard({ problem, onClick }: ProblemCardProps) {
  return (
    <Card
      className={cn(
        "p-8 cursor-pointer transition-all duration-200 min-h-[120px]",
        "border border-gray-200 hover:border-gray-300",
        "bg-white shadow-md hover:shadow-lg",
        "hover:-translate-y-0.5",
        "flex flex-col justify-center",
        "px-10!"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors font-['Lato'] mb-2!">
          {problem.title}
        </h3>
        {problem.isCompleted && (
          <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-sm flex-shrink-0">
            <Check className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Badge
          className={cn(
            "px-2! text-sm font-medium rounded-full border font-['Lato']",
            difficultyConfig[problem.difficulty].className
          )}
        >
          {problem.difficulty}
        </Badge>
        <Badge className="px-2! text-sm font-medium rounded-full bg-gray-100 text-gray-700 border-gray-200 font-['Lato']">
          {categoryDisplay[problem.category]}
        </Badge>
      </div>
    </Card>
  );
}
