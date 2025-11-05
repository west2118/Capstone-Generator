import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  BookOpen,
  Calendar,
  Users,
  BarChart3,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ResearchType } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResearchCard = ({
  research,
  handleOpenModal,
  handleDeleteModal,
}: {
  research: any;
  handleOpenModal: (researchData: ResearchType) => void;
  handleDeleteModal: (researchId: string) => void;
}) => {
  const router = useRouter();

  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <CardHeader className="pb-4 flex justify-between items-start">
        <div>
          <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
            {research.title}
          </CardTitle>
          <CardDescription className="text-gray-600 line-clamp-2">
            {research.description}
          </CardDescription>
        </div>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem
              onClick={() =>
                router.push(`/admin/research-edit/${research._id}`)
              }
              className="cursor-pointer">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDeleteModal(research._id)}
              className="cursor-pointer">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="mt-auto">
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {research.technologies
              ?.slice(0, 3)
              .map((tech: string, index: number) => (
                <Badge key={index} className="text-xs font-medium px-2 py-0.5">
                  {tech}
                </Badge>
              ))}

            {research.technologies?.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs font-medium px-2 py-0.5">
                +{research.technologies.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Meta Information */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Duration:</span>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="font-medium text-gray-900">
                  {research.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Type:</span>
            <span className="font-medium text-gray-900">Quantitative</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Industry:</span>
            <span className="font-medium text-gray-900">
              {research.researchIndustry}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Difficulty:</span>
            <Badge variant="outline">{research.difficulty}</Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex">
          <Button
            onClick={() => handleOpenModal(research)}
            className="flex-1 text-white text-sm">
            View Details
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
