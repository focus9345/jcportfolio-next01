"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/styles/constents";
import { NavItem } from "@/types/types";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import { Oxanium } from "next/font/google";
import ThemeSwitch from "./themeSwitch";

const oxanium = Oxanium({
    weight: ['600'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oxanium',
});


export default function MainNav() {
    return (
        <div className="hidden md:flex ">
            <div className="flex flex-col w-full">
                {/* 
                <Link
                    href="/"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-400"
                >
                    <svg
                        fill="none"
                        stroke-linecap="square"
                        stroke-miterlimit="10"
                        className="fill-current h-7 w-7 mr-0 inline-block"
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
                    <span className={`${oxanium.className} text-lg hidden md:flex text-lime-300`}>Joshua Connor</span>
                </Link>
                */}
                <div className="flex flex-row md:px-6">
                    {NAV_ITEMS.map((item, index) => {
                        const isLastItem = index === NAV_ITEMS.length -1;
                        return (
                            <>
                                <MenuItem key={index} item={item} />

                            </>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

const MenuItem = ({ item }: { item: NavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    const isMode = item.title === "Mode";
    console.log(item.title + " : " + isMode);
    if (isMode) {
        return <ThemeSwitch /> 
    } else {

    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button onClick={toggleSubMenu}
                        className={`flex flex-row items-center py-2 px-3 rounded-lg hover-bg-lime-300 text-lime-500 w-full ${pathname.includes(item.path) ? "bg-lime-300 text-slate-800" : "text-lime-500"}`}
                        >
                        <div className="flex flex-row space-x-3 items-center">
                            {item.icon}
                            <span className="font-semibold text-lg flex pr-1">{item.title}</span>
                        </div>
                        <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                            <FaChevronDown className="font-bold text-zinc-400" />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-3 bg-slate-900/80 border-b border-slate-800 fixed shadow-md w-max p-2 rounded-sm">
                            {item.subMenuItems?.map((subItem, index) => {
                                
                                return (
                                    <Link
                                        key={index}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? "font-semibold text-lime-500" : "text-fushia-500"} px-6 block w-full border-b border-zinc-500`}
                                    >
                                        <span>{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                
                <Link
                    href={item.path}
                    className={`flex flex-row space-x-3 items-center p-2 rounded-lg hover:bg-lime-300 ${item.path === pathname ? "bg-lime-300 text-slate-800" : "text-lime-500"}`}
                >
                    {item.icon}
                    <span className="font-semibold text-lg flex">{item.title}</span>
                </Link>
                
            )}

        </div>
    )};
};