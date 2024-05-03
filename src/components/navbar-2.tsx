import ThemeSwitch from "./themeSwitch";
import { Oxanium } from "next/font/google";
import {
  FaBriefcase,
  FaFish,
  FaLaptopCode,
} from "react-icons/fa6";
import Link from "next/link";

const oxanium = Oxanium({ 
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap' 
});

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-slate-900 dark:bg-gray-100 p-5">
        <div className="flex items-center flex-shrink-0 text-white dark:text-slate-900 mr-6">
          <Link href="/" className={oxanium.className}>
            <svg
              fill="none"
              stroke-linecap="square"
              stroke-miterlimit="10"
              className="fill-current h-8 w-8 mr-2 inline-block"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="a">
                <path d="m0 0h54v54h-54z" />
              </clipPath>
              <g clip-path="url(#a)">
                <path d="m0 0h54v54h-54z" fill="none" />
                <g fill-rule="evenodd">
                  <path
                    d="m0 0h53.76378v54.425198h-53.76378z"
                    fill="transparent"
                  />
                  <path
                    d="m.0018399 42.57h54.114994v11.919601h-54.114994z"
                    fill="#a25db5"
                  />
                  <path d="m0 0h54.11499v11.9196h-54.11499z" fill="#a25db5" />
                  <path
                    d="m42.060368 3.6876767h12.054993v45.001297h-12.054993z"
                    fill="#a25db5"
                  />
                  <path
                    d="m.0018399 11.883845h11.918104v30.650398h-11.918104z"
                    fill="#c2d500"
                  />
                  <path
                    d="m10.375371 11.884515h31.77953v11.905511h-31.77953z"
                    fill="#c2d500"
                  />
                  <path
                    d="m7.312404 30.614174h34.834644v11.937008h-34.834644z"
                    fill="#c2d500"
                  />
                </g>
              </g>
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Joshua Connor
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-lime-200 border-lime-400 hover:text-white hover:border-white dark:text-fuchsia-900 dark:border-fuchsia-900 dark:hover:text-black dark:hover:border-black" >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-5 lg:inline-block lg:mt-0 text-lime-200 hover:text-white dark:text-fuchsia-900 dark:hover:text-black mr-4" 
            >
              <FaBriefcase className="inline-block pr-1" /> Home
            </Link>
            <Link
              href="/about"
              className="block mt-5 lg:inline-block lg:mt-0 text-lime-200 hover:text-white dark:text-fuchsia-900 dark:hover:text-black mr-4"
            >
              <FaFish className="inline-block pr-1" /> About 
            </Link>
            <Link
              href="/projects"
              className="block mt-5 lg:inline-block lg:mt-0 text-lime-200 hover:text-white dark:text-fuchsia-900 dark:hover:text-black mr-4"
            >
              <FaLaptopCode className="inline-block pr-1" /> 
              Projects
            </Link>
            <span className="block mt-5 lg:inline-block lg:mt-0 text-lime-200 hover:text-white dark:text-fuchsia-900 dark:hover:text-black mr-4">
               
            </span>
          </div>
          {/* 
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-lime-200 border-lime-200 hover:border-transparent hover:text-lime-500 hover:bg-white  dark:text-fuchsia-900 dark:border-fuchsia-900 dark:hover:text-fuchsia-600 dark:hover:bg-black mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
          */}
        </div>
      </nav>
    </>
  );
}