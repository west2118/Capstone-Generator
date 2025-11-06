import mongoose, { model, models } from "mongoose";

const GenerateSchema = new mongoose.Schema(
  {
    totalGenerate: { type: Number },
  },
  { timestamps: true }
);

const Generate = models.Generate || model("Generate", GenerateSchema);

export default Generate;
