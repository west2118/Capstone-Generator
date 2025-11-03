"use client";

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

export default function Dashboard() {
  // Static data for the dashboard
  const stats = [
    { label: "Total Projects", value: "12", icon: FileText, trend: "+2" },
    { label: "In Progress", value: "5", icon: Clock, trend: "Active" },
    { label: "Completed", value: "7", icon: Brain, trend: "100%" },
    { label: "Team Members", value: "4", icon: Users, trend: "+1" },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "AI-Powered Research Analysis",
      description: "Machine learning approach to research paper analysis",
      status: "completed",
      progress: 100,
      lastUpdated: "2 hours ago",
      category: "Artificial Intelligence",
    },
    {
      id: 2,
      title: "Blockchain in Education",
      description: "Decentralized learning management system",
      status: "in-progress",
      progress: 75,
      lastUpdated: "1 day ago",
      category: "Blockchain",
    },
    {
      id: 3,
      title: "Sustainable Energy Solutions",
      description: "Renewable energy optimization using IoT",
      status: "in-progress",
      progress: 45,
      lastUpdated: "3 days ago",
      category: "IoT & Energy",
    },
  ];

  const quickActions = [
    {
      label: "New Research",
      icon: Plus,
      description: "Start a new research project",
    },
    {
      label: "Browse Templates",
      icon: Search,
      description: "Explore research templates",
    },
    {
      label: "Export Data",
      icon: Download,
      description: "Download research data",
    },
    {
      label: "Share Projects",
      icon: Share2,
      description: "Collaborate with team",
    },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
            </CardContent>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500"></div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Projects */}
        <div className="lg:col-span-2">
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-black">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Recent Research Projects
                </CardTitle>
                <CardDescription className="text-black/70">
                  Your ongoing and completed research work
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 text-black">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-black/70 mt-1">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge
                          variant={
                            project.status === "completed"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            project.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }>
                          {project.status === "completed"
                            ? "Completed"
                            : "In Progress"}
                        </Badge>
                        <span className="text-xs text-black/50 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.lastUpdated}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-black">
                        {project.category}
                      </span>
                    </div>
                    <div className="w-32 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span className="text-xs text-black/50 mt-1 block">
                      {project.progress}% complete
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Resources */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Quick Actions
              </CardTitle>
              <CardDescription className="text-black/70">
                Common tasks and operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto py-3 px-4 hover:bg-blue-50 hover:border-blue-200 transition-all group border-slate-300 text-black">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <action.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-black group-hover:text-blue-600">
                        {action.label}
                      </div>
                      <div className="text-xs text-black/70">
                        {action.description}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
