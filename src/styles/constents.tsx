//import ThemeSwitch from "../components/themeSwitch";
import {
    FaBriefcase,
    FaFish,
    FaLaptopCode,
    FaLightbulb,
  } from "react-icons/fa6";
  import { NavItem } from "./types";

  export const NAV_ITEMS: NavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <FaBriefcase className="text-2xl" />
    },
    {
        title: "About",
        path: "/about",
        icon: <FaFish className="text-2xl" />
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <FaLaptopCode className="text-2xl" />,
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
        icon: <FaLightbulb className="text-2xl" />
    },
    
  ]