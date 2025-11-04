"use client";

import {
  Brain,
  Users,
  Home,
  Folder,
  Settings,
  HelpCircle,
  BarChart3,
  Library,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { label: "Dashboard", icon: Home, active: true, link: "/admin/dashboard" },
  { label: "Researches", icon: Folder, link: "/admin/researches" },
  {
    label: "Create Research",
    icon: PlusCircle,
    link: "/admin/research-create",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-slate-50 border-r border-slate-200 p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-black rounded-lg">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-black">ResearchGen</h1>
          <p className="text-sm text-black/70">Capstone Generator</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <Link
              href={item.link}
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-slate-200"
              }`}>
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
