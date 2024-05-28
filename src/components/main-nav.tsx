"use client"
import { useState, useEffect } from "react";
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

    useEffect(() => {
        if(subMenuOpen) {
            setSubMenuOpen(false);
        }
    }, [pathname]);
    
    const isMode = item.title === "Mode";
    if (isMode) {
        return <ThemeSwitch /> 
    } else {

    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button onClick={toggleSubMenu}
                        className={`flex flex-row items-center py-2 px-3 rounded-lg  w-full ${pathname.includes(item.path) ? "bg-secondary text-background" : "text-secondary hover:text-background hover:bg-secondary"}`}
                        >
                        <div className="flex flex-row space-x-3 items-center">
                            {item.icon}
                            <span className="font-semibold text-lg flex pr-1">{item.title}</span>
                        </div>
                        <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                            <FaChevronDown className="font-bold text-background" />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="ml-4 flex flex-col bg-background border-b border-border fixed shadow-md w-max rounded-sm">
                            {item.subMenuItems?.map((subItem, index) => {
                                
                                return (
                                    <Link
                                        onClick={toggleSubMenu}
                                        key={index}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? "font-semibold text-background bg-secondary" : "text-secondary hover:text-foreground hover:bg-secondary"} px-10 py-2 block w-full border-b border-border`}
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
                    className={`flex flex-row space-x-3 items-center p-2 rounded-lg ${item.path === pathname ? "bg-secondary text-background" : " text-secondary hover:text-background hover:bg-secondary"}`}
                >
                    {item.icon}
                    <span className="font-semibold text-lg flex">{item.title}</span>
                </Link>
                
            )}

        </div>
    )};
};