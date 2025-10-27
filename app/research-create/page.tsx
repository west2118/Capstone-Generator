import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Research & Capstone Project Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generate comprehensive research proposals and capstone project
              ideas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription>
                  Fill in the details below to generate your research proposal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Research Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Research Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your research title..."
                  />
                </div>

                {/* Research Field */}
                <div className="space-y-2">
                  <Label htmlFor="field">Research Field</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select research field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="health-sciences">
                        Health Sciences
                      </SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="social-sciences">
                        Social Sciences
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Research Type */}
                <div className="space-y-2">
                  <Label htmlFor="researchType">Research Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select research type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quantitative">Quantitative</SelectItem>
                      <SelectItem value="qualitative">Qualitative</SelectItem>
                      <SelectItem value="mixed-methods">
                        Mixed Methods
                      </SelectItem>
                      <SelectItem value="experimental">Experimental</SelectItem>
                      <SelectItem value="case-study">Case Study</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Methodology */}
                <div className="space-y-2">
                  <Label htmlFor="methodology">Methodology</Label>
                  <Textarea
                    id="methodology"
                    placeholder="Describe your research methodology..."
                    rows={3}
                  />
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="duration">Project Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-months">3 Months</SelectItem>
                      <SelectItem value="6-months">6 Months</SelectItem>
                      <SelectItem value="1-year">1 Year</SelectItem>
                      <SelectItem value="2-years">2 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    placeholder="Enter keywords separated by commas..."
                  />
                </div>

                {/* Scope */}
                <div className="space-y-2">
                  <Label htmlFor="scope">Project Scope</Label>
                  <Textarea
                    id="scope"
                    placeholder="Describe the scope of your research..."
                    rows={3}
                  />
                </div>

                {/* Generate Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Generate Research Proposal
                </Button>
              </CardContent>
            </Card>

            {/* Output Preview */}
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Generated Proposal</CardTitle>
                  <CardDescription>
                    Your research proposal will appear here
                  </CardDescription>
                </div>
                <Button variant="outline" className="shrink-0">
                  Download PDF
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg border p-6 min-h-[500px]">
                  <div className="flex items-center justify-center h-64 text-gray-500">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📝</div>
                      <p className="text-lg">
                        Fill out the form and generate your research proposal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" className="flex-1">
                    Save Draft
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Copy to Clipboard
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    Generate Another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
