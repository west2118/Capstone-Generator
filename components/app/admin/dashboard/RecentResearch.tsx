import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Filter, Star, Calendar, File } from "lucide-react";
import { getResearches } from "@/app/actions/research";
import { ResearchType } from "@/lib/types";
import Link from "next/link";

const RecentResearch = async () => {
  const { researches } = await getResearches(1, 3);

  return (
    <div className="lg:col-span-2">
      <Card className="border border-slate-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-black">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Recent Research Projects
            </CardTitle>
          </div>
          <Link href="/admin/researches">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 text-black">
              <File className="h-4 w-4 mr-2" />
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          {researches.map((research: ResearchType) => (
            <div
              key={research._id}
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black group-hover:text-blue-600 transition-colors">
                    {research.title}
                  </h3>
                  <p className="text-sm text-black/70 mt-1">
                    {research.description.length > 100
                      ? research.description.slice(0, 100) + "..."
                      : research.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {research.technologies.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentResearch;
