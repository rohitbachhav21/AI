import { ThemeToggle } from "@/components/theme-toggle";
import { ModelIcon } from "@/components/icons/model-icon";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { SiSketchup } from "react-icons/si";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export function Nav() {
  return (
    <div className="h-14 py-2 px-2 md:px-8 border-b flex items-center">
      <div className="flex flex-1 items-center justify-between">
        <Link href="/">
          <h1 className={cn("font-light text-xl", spaceMono.className)}>
            <div className="flex flex-row justify-between">
            <span className="text-pink-700">ai</span>
            <span className="w-10"><SiSketchup /></span>
            <span>quickSketch</span>
            </div>
          </h1>
        </Link>
      </div>
      <div className="flex flex-none items-center space-x-4">
        <ThemeToggle />
        
      </div>
    </div>
  );
}


{/* <Button size="sm" asChild>
          <Link
            href="https://github.com/ChatTeach/Fastest-Text-to-Image-Generator"
            className="flex flex-row space-x-2 items-center"
            target="_blank"
          >
            <GithubIcon className="h-5 w-5" />
            <span>
              <span className="hidden md:inline-block">Fork on</span> GitHub
            </span>
          </Link>
        </Button> */}