import { NextResponse } from "next/server";
import type { INote } from "../../db/schemas/Note";
import { addNote } from "../../db/queries";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body.date);
  console.log(body);
  const note: INote = {
    id: body.note.id,
    authorName: body.note.authorName,
    content: body.note.content,
    date: new Date(Date.parse(body.note.date)),
  };
  addNote(note);
  return NextResponse.json({ id: note.id });
}
