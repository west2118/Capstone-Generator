import { NextResponse } from "next/server";
import Research from "@/models/research.model";
import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function PUT(
  req: Request,
  segmentData: { params: Promise<{ id: string }> }
) {
  const { id } = await segmentData.params;

  try {
    await dbConnect();

    const data = await req.json();
    const research = await Research.findByIdAndUpdate(id, data, { new: true });

    revalidatePath("/admin/researches");

    return NextResponse.json({
      research,
      success: true,
      message: "Research updated successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error updating research",
    });
  }
}
