"use client";
import localFont from "next/font/local";

const Hugface = localFont({
  src: "../../public/fonts/Huglove.ttf",
  style: "normal",
});

const MilkyWeek = localFont({
  src: "../../public/fonts/Milky-Week.ttf",
  style: "normal",
})

export default function Title({ className }: { className?: string }) {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h1
        className={`${Hugface.className} hover:motion-ease-bounce select-none font-hugface text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl flex items-center flex-col justify-center ${className}}`}
      >
        {`<`}NOTESHARE{`>`}
      </h1>
      <h2
        className={`${MilkyWeek.className} text-2xl lg:text-4xl font-extrabold px-2 italic text-secondary-foreground text-center`}
      >
        Share notes with your friends and family!
      </h2>
    </div>
  );
}
