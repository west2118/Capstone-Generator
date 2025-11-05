import { NextResponse } from "next/server";
import Research from "@/models/research.model";
import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const data = await req.json();
    const research = await Research.create(data);

    revalidatePath("/admin/researches");

    return NextResponse.json({
      research,
      success: true,
      message: "Research created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error creating research",
    });
  }
}
