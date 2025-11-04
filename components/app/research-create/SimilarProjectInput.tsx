import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ResearchType } from "@/lib/types";

type SimilarProjectInputProps = {
  projectValue: { title: string; link: string };
  setFormData: React.Dispatch<React.SetStateAction<ResearchType>>;
  index: number;
};

const SimilarProjectInput = ({
  projectValue,
  setFormData,
  index,
}: SimilarProjectInputProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;

    setFormData((prev) => ({
      ...prev,
      similarProjects: prev.similarProjects.map((proj, i) =>
        i === index ? { ...proj, title: newTitle } : proj
      ),
    }));
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLink = e.target.value;

    setFormData((prev) => ({
      ...prev,
      similarProjects: prev.similarProjects.map((proj, i) =>
        i === index ? { ...proj, link: newLink } : proj
      ),
    }));
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();

    setFormData((prev) => ({
      ...prev,
      similarProjects: prev.similarProjects.map((proj, i) =>
        i === index ? { ...proj, link: text } : proj
      ),
    }));
  };

  return (
    <div className="flex gap-2">
      {/* Project Title */}
      <Input
        value={projectValue.title}
        onChange={handleTitleChange}
        placeholder="Project Title"
        className="w-1/2"
      />

      {/* Project Link with Paste Button */}
      <div className="w-1/2 flex items-center gap-2">
        <Input
          value={projectValue.link}
          onChange={handleLinkChange}
          placeholder="Project Link"
          type="url"
          className="flex-1"
        />
        <Button
          onClick={handlePaste}
          type="button"
          variant="outline"
          className="text-sm">
          Paste
        </Button>
      </div>
    </div>
  );
};

export default SimilarProjectInput;
