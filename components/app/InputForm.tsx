"use client";

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
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Hash, Minus, Plus, X } from "lucide-react";
import { ResearchType } from "@/lib/types";
import { listTechnologies } from "@/lib/constants";

type InputFormProps = {
  formData: ResearchType;
  setFormData: React.Dispatch<React.SetStateAction<ResearchType>>;
};

const InputForm = ({ formData, setFormData }: InputFormProps) => {
  const [technologies, setTechnologies] = useState([]);
  const [technologiesAdd, setTechnologiesAdd] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
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
            value={formData.title}
            onChange={handleChange}
            name="title"
            placeholder="Enter your research title..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="technologies">Technologies *</Label>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {technologies.map((technologies) => (
                <Badge
                  key={technologies}
                  variant="secondary"
                  className="px-2 py-1 flex items-center space-x-2">
                  <span className="m-0">{technologies}</span>
                  <button
                    onClick={() =>
                      setTechnologies((prev) =>
                        prev.filter((item) => item !== technologies)
                      )
                    }
                    type="button"
                    className="flex items-center justify-center w-5 h-5">
                    <X className="w-3 h-3 text-gray-600" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <Input
              value={technologiesAdd}
              onChange={(e) => setTechnologiesAdd(e.target.value)}
              placeholder="Add technologies (e.g., Technology, Design)"
            />
            <Button type="button" variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {listTechnologies.map((technologies: string) => (
              <Button
                key={technologies}
                type="button"
                variant="outline"
                className="px-3 py-1 text-xs font-medium rounded-md">
                {technologies}
              </Button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <Label htmlFor="duration">Project Duration</Label>
          <Select>
            <SelectTrigger className="w-full">
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

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            placeholder="Describe your research description..."
            rows={3}
          />
        </div>

        {/* Project Scope */}
        <div className="space-y-2">
          <Label htmlFor="project Scope">Project Scope</Label>
          <Textarea
            name="project Scope"
            placeholder="Describe your research project Scope..."
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="suggested Roles">Suggested Roles *</Label>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {technologies.map((technologies) => (
                <Badge
                  key={technologies}
                  variant="secondary"
                  className="px-2 py-1 flex items-center space-x-2">
                  <span className="m-0">{technologies}</span>
                  <button
                    onClick={() =>
                      setTechnologies((prev) =>
                        prev.filter((item) => item !== technologies)
                      )
                    }
                    type="button"
                    className="flex items-center justify-center w-5 h-5">
                    <X className="w-3 h-3 text-gray-600" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <Input
              value={technologiesAdd}
              onChange={(e) => setTechnologiesAdd(e.target.value)}
              placeholder="Add technologies (e.g., Technology, Design)"
            />
            <Button type="button" variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {listTechnologies.map((technologies: string) => (
              <Button
                key={technologies}
                type="button"
                variant="outline"
                className="px-3 py-1 text-xs font-medium rounded-md">
                {technologies}
              </Button>
            ))}
          </div>
        </div>

        {/* Similar Project */}
        <div className="space-y-2">
          {/* Header with Add/Minus Icons */}
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Similar Project</Label>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="h-7 w-7 rounded-full">
                <Minus className="h-3 w-3" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="h-7 w-7 rounded-full">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Dynamic Inputs */}
          <div className="flex gap-4">
            {/* Project Title */}
            <Input placeholder="Project Title" className="w-1/2" />

            {/* Project Link with Paste Button */}
            <div className="w-1/2 flex items-center gap-2">
              <Input placeholder="Project Link" type="url" className="flex-1" />
              <Button type="button" variant="outline" className="text-sm">
                Paste
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="technologies">Research Field *</Label>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {technologies.map((technologies) => (
                <Badge
                  key={technologies}
                  variant="secondary"
                  className="px-2 py-1 flex items-center space-x-2">
                  <span className="m-0">{technologies}</span>
                  <button
                    onClick={() =>
                      setTechnologies((prev) =>
                        prev.filter((item) => item !== technologies)
                      )
                    }
                    type="button"
                    className="flex items-center justify-center w-5 h-5">
                    <X className="w-3 h-3 text-gray-600" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <Input
              value={technologiesAdd}
              onChange={(e) => setTechnologiesAdd(e.target.value)}
              placeholder="Add technologies (e.g., Technology, Design)"
            />
            <Button type="button" variant="outline">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {listTechnologies.map((technologies: string) => (
              <Button
                key={technologies}
                type="button"
                variant="outline"
                className="px-3 py-1 text-xs font-medium rounded-md">
                {technologies}
              </Button>
            ))}
          </div>
        </div>

        {/* Research Industry */}
        <div className="space-y-2">
          <Label htmlFor="researchIndustry">Research Industry</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select research industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quantitative">Quantitative</SelectItem>
              <SelectItem value="qualitative">Qualitative</SelectItem>
              <SelectItem value="mixed-methods">Mixed Methods</SelectItem>
              <SelectItem value="experimental">Experimental</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Research Study */}
        <div className="space-y-2">
          <Label htmlFor="researchStudy">Research Study</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select research study" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quantitative">Quantitative</SelectItem>
              <SelectItem value="qualitative">Qualitative</SelectItem>
              <SelectItem value="mixed-methods">Mixed Methods</SelectItem>
              <SelectItem value="experimental">Experimental</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="researchType">Research Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select research type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quantitative">Quantitative</SelectItem>
              <SelectItem value="qualitative">Qualitative</SelectItem>
              <SelectItem value="mixed-methods">Mixed Methods</SelectItem>
              <SelectItem value="experimental">Experimental</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="researchDifficulty">Research Difficulty</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select research difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quantitative">Quantitative</SelectItem>
              <SelectItem value="qualitative">Qualitative</SelectItem>
              <SelectItem value="mixed-methods">Mixed Methods</SelectItem>
              <SelectItem value="experimental">Experimental</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Generate Button */}
        <Button className="w-full text-white py-3">
          Generate Research Proposal
        </Button>
      </CardContent>
    </Card>
  );
};

export default InputForm;
