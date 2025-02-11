import { NextResponse } from "next/server";
import { getNoteById } from "../../db/queries";
import type { INote } from "@/app/api/db/schemas/Note";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ note: string }> },
) {
  const noteId = (await params).note;
  const note: INote = (await getNoteById(noteId)) as INote;
  return NextResponse.json(note);
}
