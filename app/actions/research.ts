"use server";

import dbConnect from "@/lib/dbConnect";
import Research from "@/models/research.model";
import { revalidatePath } from "next/cache";

export async function getResearches(page = 1, limit = 9) {
  try {
    await dbConnect();

    const skip = (page - 1) * limit;

    const researches = await Research.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const serializedResearches = JSON.parse(JSON.stringify(researches));

    const total = await Research.countDocuments();
    const totalPages = Math.ceil(total / limit);

    return {
      success: true,
      researches: serializedResearches,
      total,
      totalPages,
      page,
      limit,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch researches",
    };
  }
}

export async function getResearch(id: string) {
  try {
    await dbConnect();

    const research = await Research.findById(id).lean();

    const serializedResearch = JSON.parse(JSON.stringify(research));

    if (!research) {
      return {
        success: false,
        message: "Research not found",
      };
    }

    return {
      success: true,
      research: serializedResearch,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch researches",
    };
  }
}

export async function deleteResearch(id: string) {
  try {
    await dbConnect();

    await Research.findByIdAndDelete(id);

    revalidatePath("/admin/researches");

    return {
      success: true,
      message: "Research Deleted Successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch researches",
    };
  }
}
