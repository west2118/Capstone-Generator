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
import { Loader, Minus, Plus, X } from "lucide-react";
import { ResearchType } from "@/lib/types";
import {
  durations,
  listResearchDifficulty,
  listResearchIndustries,
  listResearchStudy,
  listResearchTypes,
  listSuggestedRoles,
  listTechnologies,
} from "@/lib/constants";
import TagSelector from "./TagSelector";
import SimilarProjectInput from "./SimilarProjectInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

type InputFormProps = {
  formData: ResearchType;
  setFormData: React.Dispatch<React.SetStateAction<ResearchType>>;
};

const InputForm = ({ formData, setFormData }: InputFormProps) => {
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSimilarProject = () => {
    if (formData.similarProjects.length >= 5) return;

    setFormData((prev) => ({
      ...prev,
      similarProjects: [...prev.similarProjects, { title: "", link: "" }],
    }));
  };

  const handleMinusSimilarProject = () => {
    if (formData.similarProjects.length === 1) return;

    setFormData((prev) => ({
      ...prev,
      similarProjects: prev.similarProjects.slice(0, -1),
    }));
  };

  const mutation = useMutation({
    mutationFn: async (formData: ResearchType) => {
      const res = await axios.post("/api/research/postResearch", formData);
      return res.data;
    },
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message);

        setFormData({
          title: "",
          technologies: [],
          duration: "",
          description: "",
          researchScope: "",
          suggestedRoles: [],
          similarProjects: [
            {
              title: "",
              link: "",
            },
          ],
          researchIndustry: "",
          researchStudy: "",
          researchType: "",
          difficulty: "",
        });

        router.push("/");
      } else {
        toast.error(result.message);
      }
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutation.mutate(formData);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Project Details</CardTitle>
        <CardDescription>
          Fill in the details below to generate your research proposal
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {/* Research Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Research Title</Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your research title..."
            />
          </div>

          {/* Technologies */}
          <TagSelector
            label="Technologies"
            name="technologies"
            items={listTechnologies}
            selected={formData.technologies}
            maxItems={5}
            onChange={(name, values) =>
              setFormData({ ...formData, [name]: values })
            }
          />

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration">Project Duration</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, duration: value }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>
                    {duration}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your research description..."
              rows={3}
            />
          </div>

          {/* Project Scope */}
          <div className="space-y-2">
            <Label htmlFor="project Scope">Project Scope</Label>
            <Textarea
              name="researchScope"
              value={formData.researchScope}
              onChange={handleChange}
              placeholder="Describe your research project Scope..."
              rows={3}
            />
          </div>

          {/* Suggested Role */}
          <TagSelector
            label="Suggested Roles"
            name="suggestedRoles"
            items={listSuggestedRoles}
            selected={formData.suggestedRoles}
            maxItems={5}
            onChange={(name, values) =>
              setFormData({ ...formData, [name]: values })
            }
          />

          {/* Similar Project */}
          <div className="space-y-2">
            {/* Header with Add/Minus Icons */}
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Similar Project</Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  onClick={handleMinusSimilarProject}
                  size="icon"
                  variant="outline"
                  className="h-7 w-7 rounded-full">
                  <Minus className="h-3 w-3" />
                </Button>
                <Button
                  type="button"
                  onClick={handleAddSimilarProject}
                  size="icon"
                  variant="outline"
                  className="h-7 w-7 rounded-full">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Dynamic Inputs */}
            <div className="space-y-2">
              {formData.similarProjects.map((item, index) => (
                <SimilarProjectInput
                  projectValue={item}
                  setFormData={setFormData}
                  index={index}
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* Research Industry */}
          <div className="space-y-2">
            <Label htmlFor="researchIndustry">Research Industry</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, researchIndustry: value }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select research industry" />
              </SelectTrigger>
              <SelectContent>
                {listResearchIndustries.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Research Study */}
          <div className="space-y-2">
            <Label htmlFor="researchStudy">Research Study</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, researchStudy: value }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select research study" />
              </SelectTrigger>
              <SelectContent>
                {listResearchStudy.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="researchType">Research Type</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, researchType: value }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select research type" />
              </SelectTrigger>
              <SelectContent>
                {listResearchTypes.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="researchDifficulty">Research Difficulty</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, difficulty: value }))
              }>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select research difficulty" />
              </SelectTrigger>
              <SelectContent>
                {listResearchDifficulty.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Generate Button */}
          <Button
            disabled={mutation.isPending}
            className="w-full text-white py-3">
            {mutation.isPending ? (
              <>
                <Loader className="animate-spin h-5 w-5" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default InputForm;
