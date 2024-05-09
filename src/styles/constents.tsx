
import {
    FaBriefcase,
    FaFish,
    FaLaptopCode,
    FaLightbulb,
  } from "react-icons/fa6";
  import { NavItem } from "../types/types";

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
                title: 'Apps',
                path: "/projects/apps"
            },
            {
                title: 'Design',
                path: "/projects/design"
            },
            {
                title: 'Web',
                path: "/projects/web"
            },
        ]
    },
    {
        title: "Mode",
        path: "#",
        icon: <FaLightbulb className="text-2xl" />
    },
    
  ]