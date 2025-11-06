"use server";

import dbConnect from "@/lib/dbConnect";
import Generate from "@/models/generate.model";

export async function generateIdea() {
  try {
    await dbConnect();

    const generate = await Generate.findOne();

    if (!generate) {
      return { success: false, message: "No generate record found" };
    }

    generate.totalGenerate += 1;
    await generate.save();

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch researches",
    };
  }
}
