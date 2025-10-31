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

const FilterSidebar = () => {
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
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="health">Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <Label className="font-semibold">Project Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Project Type</SelectItem>
                <SelectItem value="web">Web App</SelectItem>
                <SelectItem value="mobile">Mobile App</SelectItem>
                <SelectItem value="desktop">Desktop App</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Difficulty */}
          <div className="space-y-3">
            <Label className="font-semibold text-gray-700">Difficulty</Label>
            <div className="flex items-center justify-between bg-gray-100 rounded-md p-1">
              <Button
                variant="default"
                className="text-white px-3 py-1 text-sm">
                All
              </Button>
              <Button variant="ghost" className="text-gray-700 text-sm">
                Beginner
              </Button>
              <Button variant="ghost" className="text-gray-700 text-sm">
                Intermediate
              </Button>
              <Button variant="ghost" className="text-gray-700 text-sm">
                Advanced
              </Button>
            </div>
          </div>

          {/* Generate Button */}
          <Button className="w-full text-white">Generate Ideas ✨</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;
