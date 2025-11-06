import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const StatsCard = ({
  label,
  value,
  Icon,
}: {
  label: string;
  value: number;
  Icon: React.ElementType;
}) => {
  return (
    <Card className="relative overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-black">
          {label}
        </CardTitle>
        <Icon className="h-4 w-4 text-blue-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-black">{value}</div>
      </CardContent>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500"></div>
    </Card>
  );
};

export default StatsCard;
