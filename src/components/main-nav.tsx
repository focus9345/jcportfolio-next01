"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/styles/constents";
import { NavItem } from "@/styles/types";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ 
    weight: ['600'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oxanium', 
  });


export default function MainNav() {
    return (
        <div className="md:w-60 h-screen flex-1 fixed border-r border-zinc-400 hidden md:flex bg-slate-900">
            <div className="flex flex-col space-y-6 w-full">
                <Link
                    href="/"
                    className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-400"
                >
                    <span className="h-7 w-7 bg-zinc-400 rounded-lg" />
                    <span className={`${oxanium.variable} font-semibold text-xl hidden md:flex`}>Joshua Connor</span>
                </Link>
                <div className="flex flex-col space-y-2 md:px-6">
                    {NAV_ITEMS.map((item, index) => {
                        return <MenuItem key={index} item={item} />;
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
    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button onClick={toggleSubMenu}
                    className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full `}>
                        <div className="flex flex-row space-x-4 items-center">
                            {item.icon}
                            <span className="font-semibold text-xl flex">{ item.title }</span>
                        </div>
                        <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                            <FaChevronDown className="text-slate-600" />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="my-2 ml-12 flex flex-col space-y-4">
                            {item.subMenuItems?.map((subItem, index) => {
                                return (
                                    <Link   
                                        key={index}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? "font-bold text-lime-500" : "text-fushia-500"}`}
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
    className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? "bg-zinc-100" : ""}`}
    >
        {item.icon}
        <span className="font-semibold text-xl flex">{item.title}</span>
    </Link>
    )}
    </div>
    );
};