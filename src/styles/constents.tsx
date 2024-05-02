
import {
    FaBriefcase,
    FaFish,
    FaLaptopCode,
  } from "react-icons/fa6";
  import { NavItem } from "./types";

  export const NAV_ITEMS: NavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <FaBriefcase className="inline-block pr-1 text-2xl" />
    },
    {
        title: "About",
        path: "/about",
        icon: <FaFish className="inline-block pr-1 text-2xl" />
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <FaLaptopCode className="inline-block pr-1 text-2xl" />,
        submenu: true,
        subMenuItems: [
            {
                title: 'All',
                path: "/projects"
            },
            {
                title: 'design',
                path: "/projects/design"
            },
            {
                title: 'Apps',
                path: "/projects/apps"
            },
        ]
    },
    {
        title: "Mode",
        path: "#",
        icon: <FaFish className="inline-block pr-1 text-3xl" />
    },
  ]