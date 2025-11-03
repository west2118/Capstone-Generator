"use client";

import { useState } from "react";
import InputForm from "@/components/app/research-create/InputForm";
import PreviewCard from "@/components/app/PreviewCard";
import { ResearchType } from "@/lib/types";

export default function InputPreviewClient() {
  const [formData, setFormData] = useState<ResearchType>({
    title: "",
    technologies: [],
    duration: "",
    description: "",
    researchScope: "",
    suggestedRoles: [],
    similarProjects: [{ title: "", link: "" }],
    researchIndustry: "",
    researchStudy: "",
    researchType: "",
    difficulty: "",
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Input Form */}
      <div className="lg:col-span-2 space-y-4">
        <InputForm formData={formData} setFormData={setFormData} />
      </div>

      {/* Output Preview */}
      <div className="lg:col-span-3 space-y-4 h-fit">
        <PreviewCard researchData={formData} isCreate={true} />
      </div>
    </div>
  );
}
