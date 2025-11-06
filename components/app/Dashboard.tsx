import DashboardContent from "./DashboardContent";

export default function ResearchGenerator() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-bold text-gray-900">
              Capstone Idea Generator
            </h1>
            <p className="text-lg text-gray-600">
              Discover your next project ideas here!
            </p>
          </div>

          <DashboardContent />
        </div>
      </div>
    </main>
  );
}
