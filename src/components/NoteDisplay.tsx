import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Atkinson_Hyperlegible } from "next/font/google";

const atinkson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "400",
});
export default function NoteDisplay({
  author,
  children,
}: { author: string; children: ReactNode }) {
  return (
    <Card className="w-full motion-preset-fade m-3 sm:w-[400px] md:w-[600px] lg:w-[800px]">
      <CardHeader className="flex items-center justify-center">
        <CardTitle>Letter from {author}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-full text-center">
          <span className={`${atinkson.className} text-2xl`}>“{children}”</span>
        </div>
      </CardContent>
    </Card>
  );
}
