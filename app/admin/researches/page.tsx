import { getResearches } from "@/app/actions/research";
import ResearchContent from "@/components/app/admin/researches/ResearchContent";

export default async function ResearchPage() {
  const data = await getResearches();

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research & Capstone Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore innovative research projects and capstone ideas from
            students and researchers worldwide
          </p>
        </div>
      </div>

      {/* Main Content */}
      <ResearchContent researches={data?.researches} />
    </div>
  );
}
