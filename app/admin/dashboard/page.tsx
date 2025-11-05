import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  FileText,
  TrendingUp,
  Users,
  Clock,
  BookOpen,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  Star,
  Calendar,
  Home,
  Folder,
  Settings,
  HelpCircle,
  BarChart3,
  Library,
} from "lucide-react";
import RecentResearch from "@/components/app/admin/dashboard/RecentResearch";
import QuickActions from "@/components/app/admin/dashboard/QuickActions";

export default function Dashboard() {
  // Static data for the dashboard
  const stats = [
    { label: "Generated Titles", value: "12", icon: FileText },
    { label: "Total Research Title", value: "5", icon: Clock },
    { label: "Total Categories", value: "7", icon: Brain },
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
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="relative overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">{stat.value}</div>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500"></div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecentResearch />

        <QuickActions />
      </div>
    </div>
  );
}
