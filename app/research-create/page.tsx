"use client";

import InputForm from "@/components/app/InputForm";
import PreviewCard from "@/components/app/PreviewCard";
import { ResearchType } from "@/lib/types";
import { useState } from "react";

export default function ResearchCreateGenerator() {
  const [formData, setFormData] = useState<ResearchType>({
    title: "",
    technologies: [],
    duration: "",
    description: "",
    researchScope: "",
    suggestedRoles: [],
    similarProjects: [],
    researchIndustry: "",
    researchStudy: "",
    researchType: "",
    difficulty: "",
  });

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Research & Capstone Project Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate comprehensive research proposals and capstone project
              ideas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Input Form */}
            <div className="lg:col-span-2 space-y-4">
              <InputForm formData={formData} setFormData={setFormData} />
            </div>

            {/* Output Preview */}
            <div className="lg:col-span-3 space-y-4 h-fit">
              <PreviewCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
