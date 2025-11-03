import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Clock, FileSearch } from "lucide-react";
import { ResearchType } from "@/lib/types";
import Link from "next/link";
import NoDataCard from "./research-create/NoDataCard";

type PreviewDataProps = {
  researchData: ResearchType | null;
  isCreate?: boolean;
};

const PreviewCard = ({ researchData, isCreate = false }: PreviewDataProps) => {
  const validProjects =
    researchData?.similarProjects?.filter((item) => item.title || item.link) ||
    [];

  const isEmptyData =
    !researchData?.title?.trim() &&
    !researchData?.description?.trim() &&
    !researchData?.duration?.trim() &&
    !researchData?.difficulty?.trim() &&
    !researchData?.researchIndustry?.trim() &&
    !researchData?.researchScope?.trim() &&
    !researchData?.researchStudy?.trim() &&
    !researchData?.researchType?.trim() &&
    (!researchData?.technologies || researchData.technologies.length === 0) &&
    (!researchData?.suggestedRoles ||
      researchData.suggestedRoles.length === 0) &&
    (!researchData?.similarProjects ||
      researchData.similarProjects.every(
        (p) => !p.title?.trim() && !p.link?.trim()
      ));

  if (isEmptyData) {
    return (
      <Card className="shadow-lg h-full">
        <CardContent className="flex items-center justify-center h-full">
          <NoDataCard />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg h-full">
      <CardContent className="px-6 h-full flex flex-col">
        {/* Project Content */}
        <div className="flex-1">
          {/* Project Header */}
          {(researchData?.title || researchData?.technologies) && (
            <div className="mb-4">
              {researchData?.title && (
                <h2 className="text-2xl font-bold text-gray-900">
                  {researchData?.title}
                </h2>
              )}
              {researchData?.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {researchData?.technologies.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}

          {researchData?.duration && (
            <div className="text-md font-semibold text-gray-600 flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>{researchData?.duration}</span>
            </div>
          )}

          {researchData?.description && (
            <p className="text-gray-600 mb-2 leading-relaxed">
              {researchData?.description}
            </p>
          )}

          {researchData?.researchScope && (
            <p className="text-gray-600 mb-6 leading-relaxed">
              {researchData?.researchScope}
            </p>
          )}

          {/* Project Details */}
          {(researchData?.suggestedRoles || researchData?.similarProjects) && (
            <div className="grid grid-cols-2 gap-8 mb-6">
              {researchData?.suggestedRoles.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Suggested Roles:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {researchData?.suggestedRoles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {validProjects.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Similar Projects:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {researchData?.similarProjects.map((item) => (
                      <li key={item.title}>
                        <Link href={item.link} className="underline">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Project Tags */}
          {(researchData?.researchIndustry ||
            researchData?.researchStudy ||
            researchData?.researchType ||
            researchData?.difficulty) && (
            <div className="border-t pt-4">
              <div className="flex flex-wrap gap-2">
                {researchData?.researchIndustry && (
                  <Badge variant="outline" className="px-3 py-1">
                    {researchData?.researchIndustry}
                  </Badge>
                )}
                {researchData?.researchStudy && (
                  <Badge variant="outline" className="px-3 py-1">
                    {researchData?.researchStudy}
                  </Badge>
                )}
                {researchData?.researchType && (
                  <Badge variant="outline" className="px-3 py-1">
                    {researchData?.researchType}
                  </Badge>
                )}
                {researchData?.difficulty && (
                  <Badge variant="outline" className="px-3 py-1">
                    {researchData?.difficulty}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>

        {!isCreate && (
          <div className="flex justify-end items-center mt-auto">
            <Button>Next Idea</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
