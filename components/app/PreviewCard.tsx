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
import { Clock } from "lucide-react";

const PreviewCard = () => {
  return (
    <Card className="shadow-lg h-full">
      <CardContent className="px-6 h-full flex flex-col">
        {/* Project Content */}
        <div className="flex-1">
          {/* Project Header */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Blockchain-based Intellectual Property Registry
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">Ethereum</Badge>
              <Badge variant="secondary">Safety</Badge>
              <Badge variant="secondary">IPFS</Badge>
              <Badge variant="secondary">React</Badge>
            </div>
          </div>

          <div className="text-md font-semibold text-gray-600 flex items-center space-x-2 mb-4">
            <Clock className="w-4 h-4" />
            <span>5-7 months</span>
          </div>

          {/* Project Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Develop a decentralized platform for registering and managing
            intellectual property rights using blockchain technology, ensuring
            transparency and reducing disputes.
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold mb-3">Suggested Roles:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>Blockchain Developer</li>
                <li>Full Stack Developer</li>
                <li>Legal Expert</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Similar Projects:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>Pwc of</li>
                <li>Brenskin of</li>
              </ul>
            </div>
          </div>

          {/* Project Tags */}
          <div className="border-t pt-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-3 py-1">
                Legal Tech
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Web Application
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                Advanced
              </Badge>
            </div>
          </div>
        </div>

        {/* Button at bottom-right */}
        <div className="flex justify-end items-center mt-auto">
          <Button>Next Idea</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreviewCard;
