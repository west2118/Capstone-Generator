"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "All Categories",
  "AI",
  "Web Development",
  "Blockchain",
  "IoT",
];
const statuses = ["All Status", "Beginner", "Intermediate", "Advanced"];

const SearchFilterCard = () => {
  return (
    <div className="mb-8">
      <Card className="border-0 shadow-sm">
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search research projects..."
                  className="pl-10 border-gray-300 text-gray-900 h-[42px] w-full"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <Select defaultValue="All Categories">
                <SelectTrigger className="w-full md:w-44 h-[42px] py-5 border-gray-300 text-gray-900">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="w-full md:w-auto">
              <Select defaultValue="All Status">
                <SelectTrigger className="w-full md:w-44 h-[42px] py-5 border-gray-300 text-gray-900">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* More Filters Button */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 h-[42px] w-full md:w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchFilterCard;
