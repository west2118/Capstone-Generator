import dbConnect from "@/lib/dbConnect";
import Research from "@/models/research.model";

export async function getResearches() {
  try {
    await dbConnect();

    const researches = await Research.find().lean();

    const serializedResearches = JSON.parse(JSON.stringify(researches));

    return {
      success: true,
      researches: serializedResearches,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch researches",
    };
  }
}
