"use client";
import NoteDisplay from "@/components/NoteDisplay";
import axios from "axios";
import type { INote } from "../../api/db/interfaces";
import { useEffect, useState } from "react";
import { loadEnv } from "@/app/api/config";
import { Settings, Timer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotePage({
  params,
}: { params: Promise<{ note: string }> }) {
  const [authorName, setAuthorName] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [loading, setLoading] = useState(true);
  let noteID: string;
  params.then((res) => {
    noteID = res.note;
    axios({
      method: "GET",
      url: `${loadEnv().URL}/api/notes/${noteID}`,
    }).then((res) => {
      console.log(res.data);
      const { authorName, content } = res.data;
      setAuthorName(authorName);
      setNoteContent(content);
      setLoading(false);
    });
  });
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {loading ? (
        <Card className="w-full m-3 sm:w-[400px] md:w-[600px] lg:w-[800px]">
          <CardHeader className="flex items-center justify-center">
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-full flex items-center justify-center">
              <Timer className="motion-preset-spin" size={60} />
            </div>
          </CardContent>
        </Card>
      ) : (
        <NoteDisplay author={authorName}>{noteContent}</NoteDisplay>
      )}
      <Button asChild className="w-full mx-3 sm:w-auto">
        <Link href="/">Create your own</Link>
      </Button>
    </div>
  );
}
