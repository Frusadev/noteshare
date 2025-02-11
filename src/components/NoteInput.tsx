"use client";
import { Check, ClipboardCopy, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MouseEvent as ReactMouseEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import axios from "axios";
import { loadEnv } from "@/app/api/config";
import { genID } from "@/algo";

export default function NoteInput() {
  const [settingsSpin, setSettingsSpin] = useState(false);
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [name, setName] = useState("");

  const handleGenLink = (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!name || !noteContent) return;
    setSettingsSpin(true);

    const note = {
      id: genID(),
      authorName: name,
      content: noteContent,
    };

    const URL = loadEnv().URL;

    axios({
      method: "POST",
      url: `${URL}/api/notes/add`,
      data: { note: note },
    }).then((res) => {
      setLink(`${URL}/notes/${res.data.id}`);
    });

    setTimeout(() => {
      setSettingsSpin(false);
    }, 500);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full flex flex-col m-3 md:w-3/6 h-[350px]">
      <Input
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
        className="w-full my-3 bg-orange-200/45 focus-visible:ring-0 !text-lg"
      />
      <Textarea
        className="w-full h-full bg-orange-200/45 resize-none !text-xl outline-none ring-0 focus-visible:ring-0"
        placeholder="Type a note"
        value={noteContent}
        required
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-2 px-10 py-6 w-full mx-4 sm:w-auto" onClick={handleGenLink}>
              <Settings
                className={
                  settingsSpin ? `motion-preset-spin transition-all` : ``
                }
              />
              Share
            </Button>
          </DialogTrigger>
          <DialogContent className="w-10/12 rounded-lg md:w-full max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                <div className="flex justify-center gap-1">
                  <span>Send a note to someone special</span>
                </div>
              </DialogTitle>
              <DialogDescription>
                <div className="flex justify-center font-medium">
                  Copy the link below and share it with your friends!
                  {copied}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center">
              <div className="relative w-full p-5">
                <Textarea
                  className="w-full !select-all h-full bg-orange-200/45 resize-none !text-xl outline-none ring-0 px-5 focus-visible:ring-0"
                  readOnly
                  value={link}
                  onFocus={(e) => e.target.select()}
                />
                {copied ? (
                  <Check className="absolute right-7 top-7 stroke-green-700 motion-preset-fade" />
                ) : (
                  <ClipboardCopy
                    className="absolute right-7 top-7 cursor-pointer motion-preset-fade z-20"
                    onClick={copyLink}
                  />
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
