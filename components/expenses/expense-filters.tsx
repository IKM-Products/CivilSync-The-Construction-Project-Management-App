"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ExpenseFiltersProps {
  search: string;
  category: string;

  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClearFilters: () => void;
}

const categories = [
  "All",
  "Material",
  "Labor",
  "Equipment",
  "Transport",
  "Utilities",
  "Maintenance",
  "Miscellaneous",
];

export function ExpenseFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange,
  onClearFilters,
}: ExpenseFiltersProps) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-10 rounded-md border bg-background px-3 text-sm"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Clear */}
        <Button
          variant="outline"
          onClick={onClearFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}