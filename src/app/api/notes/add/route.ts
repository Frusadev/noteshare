import { NextResponse } from "next/server";
import type { INote } from "../../db/schemas/Note";
import { addNote } from "../../db/queries";

export async function POST(
  req: Request,
  { body }: { body: Promise<{ note: INote }> },
) {
  const bod = await req.json();
  console.log(bod.date)
  console.log(bod)
  const note: INote = {
    id: bod.note.id,
    authorName: bod.note.authorName,
    content: bod.note.content,
    date: new Date(Date.parse(bod.note.date)),
  }
  addNote(note)
  return NextResponse.json({id: note.id})
}
