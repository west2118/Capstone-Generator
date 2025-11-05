import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    label: "New Research",
    icon: Plus,
    description: "Start a new research project",
    link: "/admin/research-create",
  },
  {
    label: "Browse Researches",
    icon: Search,
    description: "Explore researches",
    link: "/admin/researches",
  },
];

const QuickActions = () => {
  return (
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
        <CardContent className="-mt-3">
          {quickActions.map((action, index) => (
            <Link key={index} href={action.link}>
              <Button
                variant="outline"
                className="w-full mt-3 justify-start h-auto py-3 px-4 hover:bg-blue-50 hover:border-blue-200 transition-all group border-slate-300 text-black">
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
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
