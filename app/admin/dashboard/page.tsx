import RecentResearch from "@/components/app/admin/dashboard/RecentResearch";
import QuickActions from "@/components/app/admin/dashboard/QuickActions";
import StatsCard from "@/components/app/admin/dashboard/StatsCard";
import { File } from "lucide-react";
import { researchDashboard } from "@/app/actions/research";

export default async function Dashboard() {
  const { totalGenerate = 0, researchCount = 0 } = await researchDashboard();

  const stats = [
    { label: "Total Generates", value: totalGenerate, Icon: File },
    { label: "Total Researches", value: researchCount, Icon: File },
    { label: "Total Industries", value: 10, Icon: File },
  ];

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-black">
              Research Dashboard
            </h1>
            <p className="text-black/70 mt-2">
              Transform your ideas into comprehensive research projects
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecentResearch />

        <QuickActions />
      </div>
    </div>
  );
}
