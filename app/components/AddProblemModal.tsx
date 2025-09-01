import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "../hooks/use-toast";
import type { Problem, Example } from "../types/problem";

interface AddProblemDialogProps {
  onAddProblem: (problem: Omit<Problem, "id">) => void;
}

export function AddProblemDialog({ onAddProblem }: AddProblemDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState<Problem["difficulty"]>("easy");
  const [category, setCategory] = useState<Problem["category"]>("arrays");
  const [examples, setExamples] = useState<Example[]>([
    { input: "", output: "", explanation: "" },
  ]);
  const [constraints, setConstraints] = useState<string[]>([""]);

  const handleAddExample = () => {
    setExamples([...examples, { input: "", output: "", explanation: "" }]);
  };

  const handleRemoveExample = (index: number) => {
    setExamples(examples.filter((_, i) => i !== index));
  };

  const handleExampleChange = (
    index: number,
    field: keyof Example,
    value: string
  ) => {
    const newExamples = [...examples];
    newExamples[index] = { ...newExamples[index], [field]: value };
    setExamples(newExamples);
  };

  const handleAddConstraint = () => {
    setConstraints([...constraints, ""]);
  };

  const handleRemoveConstraint = (index: number) => {
    setConstraints(constraints.filter((_, i) => i !== index));
  };

  const handleConstraintChange = (index: number, value: string) => {
    const newConstraints = [...constraints];
    newConstraints[index] = value;
    setConstraints(newConstraints);
  };

  const handleSubmit = () => {
    if (!title || !description) {
      toast({
        title: "Error",
        description: "Please fill in title and description",
        variant: "destructive",
      });
      return;
    }

    const newProblem: Omit<Problem, "id"> = {
      title,
      description,
      difficulty,
      category,
      examples: examples.filter((e) => e.input && e.output),
      constraints: constraints.filter((c) => c),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    onAddProblem(newProblem);

    // Reset form
    setTitle("");
    setDescription("");
    setDifficulty("easy");
    setCategory("arrays");
    setExamples([{ input: "", output: "", explanation: "" }]);
    setConstraints([""]);
    setOpen(false);

    toast({
      title: "Success",
      description: "Problem added successfully",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Problem
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 p-10!">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Add New Problem
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2! my-[15px]!">
            <Label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Two Sum"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
            />
          </div>

          <div className="space-y-2!">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the problem..."
              rows={4}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2! my-[15px]!">
              <Label
                htmlFor="difficulty"
                className="text-sm font-medium text-gray-700"
              >
                Difficulty
              </Label>
              <Select
                value={difficulty}
                onValueChange={(v) => setDifficulty(v as Problem["difficulty"])}
              >
                <SelectTrigger
                  id="difficulty"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="easy" className="hover:bg-gray-100 p-2!">
                    Easy
                  </SelectItem>
                  <SelectItem value="medium" className="hover:bg-gray-100 p-2!">
                    Medium
                  </SelectItem>
                  <SelectItem value="hard" className="hover:bg-gray-100 p-2!">
                    Hard
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2! my-[15px]!">
              <Label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </Label>
              <Select
                value={category}
                onValueChange={(v) => setCategory(v as Problem["category"])}
              >
                <SelectTrigger
                  id="category"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="arrays" className="hover:bg-gray-100 p-2!">
                    Arrays
                  </SelectItem>
                  <SelectItem
                    value="strings"
                    className="hover:bg-gray-100 p-2!"
                  >
                    Strings
                  </SelectItem>
                  <SelectItem value="trees" className="hover:bg-gray-100 p-2!">
                    Trees
                  </SelectItem>
                  <SelectItem value="graphs" className="hover:bg-gray-100 p-2!">
                    Graphs
                  </SelectItem>
                  <SelectItem value="dp" className="hover:bg-gray-100 p-2!">
                    Dynamic Programming
                  </SelectItem>
                  <SelectItem
                    value="sorting"
                    className="hover:bg-gray-100 p-2!"
                  >
                    Sorting
                  </SelectItem>
                  <SelectItem
                    value="searching"
                    className="hover:bg-gray-100 p-2!"
                  >
                    Searching
                  </SelectItem>
                  <SelectItem value="math" className="hover:bg-gray-100 p-2!">
                    Math
                  </SelectItem>
                  <SelectItem value="other" className="hover:bg-gray-100 p-2!">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2! my-[15px]!">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-gray-700">
                Examples
              </Label>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleAddExample}
                className="border-gray-300 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {examples.map((example, index) => (
              <div
                key={index}
                className="space-y-2! p-4! border border-gray-200 rounded-lg"
              >
                <div className="flex justify-end">
                  {examples.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveExample(index)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <Input
                  placeholder="Input"
                  value={example.input}
                  onChange={(e) =>
                    handleExampleChange(index, "input", e.target.value)
                  }
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2! "
                />
                <Input
                  placeholder="Output"
                  value={example.output}
                  onChange={(e) =>
                    handleExampleChange(index, "output", e.target.value)
                  }
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
                />
                <Input
                  placeholder="Explanation (optional)"
                  value={example.explanation || ""}
                  onChange={(e) =>
                    handleExampleChange(index, "explanation", e.target.value)
                  }
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2! my-[15px]!">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-gray-700">
                Constraints
              </Label>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleAddConstraint}
                className="border-gray-300 hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {constraints.map((constraint, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  placeholder="e.g., 1 <= nums.length <= 10^4"
                  value={constraint}
                  onChange={(e) =>
                    handleConstraintChange(index, e.target.value)
                  }
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 pl-2!"
                />
                {constraints.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveConstraint(index)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-gray-300 hover:bg-gray-50 px-8!"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 px-8! text-white"
            >
              Add Problem
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
