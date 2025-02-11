import { NextResponse } from "next/server";
import { getNoteById } from "../../db/queries";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ note: string }> },
) {
  const noteId = (await params).note;
  const note = await getNoteById(noteId)
  return NextResponse.json(note);
}
