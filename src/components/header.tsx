"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/user-scroll";
import MainNav from "./main-nav";
import { cn } from "@/lib/utils";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxanium",
});

export default function Header() {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-600`,
        {
          "border-b border-gray-600 bg-white/15 backdrop-blur-lg": scrolled,
          "border-b border-gray-600 bg-white/02": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex-row space-x-3 items-center justify-center"
          >
            <svg
              fill="none"
              stroke-linecap="square"
              stroke-miterlimit="10"
              className="fill-current h-6 w-6 mr-0 inline-block"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="a">
                <path d="m0 0h54v54h-54z" />
              </clipPath>
              <g clip-path="url(#a)">
                <path d="m0 0h54v54h-54z" fill="none" />
                <g fill-rule="evenodd">
                  <path d="m0 0h53.764v54.425h-53.764z" fill="transparent" />
                  <path
                    d="m0.0018399 42.57h54.115v11.92h-54.115z"
                    fill="#a25db5"
                  />
                  <path d="m0 0h54.115v11.92h-54.115z" fill="#a25db5" />
                  <path
                    d="m42.06 3.6877h12.055v45.001h-12.055z"
                    fill="#a25db5"
                  />
                  <path
                    d="m0.0018399 11.884h11.918v30.65h-11.918z"
                    fill="#c2d500"
                  />
                  <path
                    d="m10.375 11.885h31.78v11.906h-31.78z"
                    fill="#c2d500"
                  />
                  <path
                    d="m7.3124 30.614h34.835v11.937h-34.835z"
                    fill="#c2d500"
                  />
                </g>
              </g>
            </svg>
            <span className={`${oxanium.className} text-xl mt-1 text-lime-400 dark:text-lime-500`}>
              Joshua Connor
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
        
      </div>
    </div>
  );
}
