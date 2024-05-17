import { PROJECT_ITEMS } from '@/styles/projects';
//import Link from 'next/link';
import ProjectItem from '@/components/projects/project-item'; 
import {
    FaLaptopCode,
    FaNodeJs,
    FaGithub
} from "react-icons/fa6";

import {
    SiGlitch,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiSqlite,
    SiPython,
    SiApachecordova,
    SiReact,
    SiLucid,
    SiFigma,
    SiAdobe,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeindesign,
} from "react-icons/si";

import {
    BsFiletypeDoc,
} from "react-icons/bs";
import {
    GrDocumentImage,
    GrDocument
} from "react-icons/gr";
import {
    VscCode
} from "react-icons/vsc";
import { WorkItem } from '@/types/types';


export default function Projects() {
    return (
        <>
            <div className="flex flex-col items-center justify-between">

                <div className="p-4 md:p-10 w-full mb-10 text-center">
                    <h1><FaLaptopCode className="inline-block pr-1" /> All Projects</h1>
                </div>

                {PROJECT_ITEMS.map((project) => {
                
                return (
                    <>
                    <ProjectItem key={project.id} {...project} />
                    </>
                )})
                }
                
            </div>
        </>
    )
}