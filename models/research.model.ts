import mongoose, { model, models } from "mongoose";

const ResearchSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    technologies: { type: [String], required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    researchScope: { type: String, required: true },
    suggestedRoles: { type: [String], required: true },
    similarProjects: [
      {
        title: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
    researchIndustry: { type: String, required: true },
    researchStudy: { type: String, required: true },
    researchType: { type: String, required: true },
    difficulty: { type: String, required: true },
  },
  { timestamps: true }
);

const Research = models.Research || model("Research", ResearchSchema);

export default Research;
