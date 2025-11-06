"use client";

import React, { useState, useTransition } from "react";
import FilterSidebar from "./FilterSidebar";
import PreviewCard from "./PreviewCard";
import { toast } from "react-toastify";
import { generateIdeas } from "@/app/actions/research";
import { generateIdea } from "@/app/actions/generate";

const DashboardContent = () => {
  const [filters, setFilters] = useState({
    industry: "all",
    type: "all",
    difficulty: "all",
  });
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentIdea, setCurrentIdea] = useState(null);
  const [researchData, setResearchData] = useState([]);
  const [isPending, startTransition] = useTransition();

  const updateFilters = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleGenerate = () => {
    startTransition(async () => {
      try {
        const result = await generateIdeas(
          filters.industry,
          filters.type,
          filters.difficulty
        );

        if (result.success) {
          await generateIdea();

          setResearchData(result.researches);
          setCurrentNumber(0);
          setCurrentIdea(result.researches[0]);
        } else {
          toast.error(result.message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  };

  const handleNextIdea = () => {
    if (!researchData || researchData?.length! === 0) return;

    const nextIdea =
      currentNumber + 1 < researchData?.length! ? currentNumber + 1 : 0;

    setCurrentNumber(nextIdea);
    setCurrentIdea(researchData[nextIdea]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Filters Sidebar */}
      <FilterSidebar
        filters={filters}
        updateFilters={updateFilters}
        handleGenerate={handleGenerate}
        isPending={isPending}
      />

      {/* Main Content */}
      <div className="lg:col-span-3 space-y-4">
        <PreviewCard
          researchData={currentIdea ?? null}
          handleNextIdea={handleNextIdea}
          isCreate={false}
        />
      </div>
    </div>
  );
};

export default DashboardContent;
