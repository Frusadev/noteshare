import { NextResponse } from "next/server";
import { addNote } from "../../db/queries";
import type { INote } from "../../db/interfaces";

export async function POST(req: Request) {
  const body = await req.json();
  const note: INote = body.note
  addNote(note);
  return NextResponse.json({ id: note.id });
}
