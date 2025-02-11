"use client"
import AnimatedBackground from "@/components/AnimatedBackground";
import NoteInput from "@/components/NoteInput";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center md:justify-center flex-col z-40">
        <Title className="mt-4" />
        <div className="container w-full h-[350px] sm:h-[400px] lg:h-[500px] flex justify-center mt-6">
          <NoteInput />
        </div>
      </div>
    </>
  );
}
