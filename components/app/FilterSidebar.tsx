import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../ui/badge";
import {
  listResearchDifficulty,
  listResearchIndustries,
  listResearchTypes,
} from "@/lib/constants";
import { Loader } from "lucide-react";

type FilterSidebarProps = {
  filters: {
    industry: string;
    type: string;
    difficulty: string;
  };
  updateFilters: (key: string, value: string) => void;
  handleGenerate: () => void;
  isPending: boolean;
};

const FilterSidebar = ({
  filters,
  updateFilters,
  handleGenerate,
  isPending,
}: FilterSidebarProps) => {
  return (
    <div className="lg:col-span-2">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 -mt-2">
          {/* Industry */}
          <div className="space-y-2">
            <Label className="font-semibold">Industry</Label>
            <Select
              value={filters.industry}
              onValueChange={(value) => updateFilters("industry", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {listResearchIndustries.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <Label className="font-semibold">Project Type</Label>
            <Select
              value={filters.type}
              onValueChange={(value) => updateFilters("type", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Project Type</SelectItem>
                {listResearchTypes.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Difficulty */}
          <div className="space-y-3">
            <Label className="font-semibold text-gray-700">Difficulty</Label>
            <div className="flex items-center justify-between bg-gray-100 rounded-md p-1">
              <Button
                onClick={() => updateFilters("difficulty", "all")}
                variant={`${
                  filters.difficulty === "all" ? "default" : "ghost"
                }`}
                className={`text-sm px-3 py-1 ${
                  filters.difficulty === "all" ? "text-white" : "text-gray-700"
                }`}>
                All
              </Button>
              {listResearchDifficulty.map((item) => (
                <Button
                  onClick={() => updateFilters("difficulty", item)}
                  key={item}
                  variant={`${
                    filters.difficulty === item ? "default" : "ghost"
                  }`}
                  className={`text-sm ${
                    filters.difficulty === item ? "text-white" : "text-gray-700"
                  }`}>
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button
            disabled={isPending}
            onClick={handleGenerate}
            className="w-full text-white">
            {isPending ? <Loader className="animate-spin h-5 w-5" /> : ""}
            Generate Ideas ✨
          </Button>
        </CardContent>
      </Card>

      <Card className="mt-6 border-none shadow-none p-0">
        <CardHeader className="p-0">
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <p className="text-gray-500">
              Got suggestions or recommendations? Feel free to email me at
              johntapang18@gmail.com
            </p>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-0 -mt-4">
          <div>
            <h3 className="text-sm mb-2 text-gray-500">Built With:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">ShadCN UI</Badge>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 text-sm text-gray-500 space-y-1">
            <p>
              Website inspired by <span className="font-medium">Bryl Lim</span>
            </p>
            <p>
              Developed by <span className="font-medium">John Tapang</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;
