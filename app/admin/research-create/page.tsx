import InputPreviewClient from "@/components/app/research-create/InputPreviewClient";

export default function ResearchCreateGenerator() {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Research & Capstone Project Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate comprehensive research proposals and capstone project ideas
          </p>
        </div>

        <InputPreviewClient />
      </div>
    </div>
  );
}
