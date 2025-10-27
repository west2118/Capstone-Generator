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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ResearchGenerator() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-bold text-gray-900">
              Capstone Idea Generator
            </h1>
            <p className="text-lg text-gray-600">
              Discover your next project ideas here!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-200px)]">
            {/* Filters Sidebar */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 -mt-2">
                  {/* Industry */}
                  <div className="space-y-2">
                    <Label className="font-semibold">Industry</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Industries" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Industries</SelectItem>
                        <SelectItem value="ai">AI</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <Label className="font-semibold">Project Type</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Project Type</SelectItem>
                        <SelectItem value="web">Web App</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="desktop">Desktop App</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Difficulty */}
                  <div className="space-y-3">
                    <Label className="font-semibold text-gray-700">
                      Difficulty
                    </Label>
                    <div className="flex items-center justify-between bg-gray-100 rounded-md p-1">
                      <Button
                        variant="default"
                        className="text-white px-3 py-1 text-sm">
                        All
                      </Button>
                      <Button variant="ghost" className="text-gray-700 text-sm">
                        Beginner
                      </Button>
                      <Button variant="ghost" className="text-gray-700 text-sm">
                        Intermediate
                      </Button>
                      <Button variant="ghost" className="text-gray-700 text-sm">
                        Advanced
                      </Button>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <Button className="w-full text-white">
                    Generate Ideas ✨
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4">
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
                      Develop a decentralized platform for registering and
                      managing intellectual property rights using blockchain
                      technology, ensuring transparency and reducing disputes.
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
                        <h4 className="font-semibold mb-3">
                          Similar Projects:
                        </h4>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
