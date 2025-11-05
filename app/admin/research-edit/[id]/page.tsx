import { getResearch } from "@/app/actions/research";
import InputPreviewClient from "@/components/app/research-create/InputPreviewClient";
import { Suspense } from "react";

export default async function ResearchEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { research } = await getResearch(id);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Research & Capstone Edit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate comprehensive research proposals and capstone project ideas
          </p>
        </div>

        <InputPreviewClient research={research} isEdit={true} />
      </div>
    </div>
  );
}
