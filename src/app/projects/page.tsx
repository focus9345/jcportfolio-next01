import { PROJECT_ITEMS } from '@/styles/projects';
//import Link from 'next/link';
//import ProjectItem from '@/components/projects/project-item'; 
import ProjectGrid from '@/components/projects/project-grid'; 
import {
    FaLaptopCode,
} from "react-icons/fa6";

export default function Projects() {
    return (
        <>
            <div className="flex flex-col items-center justify-between">
                <div className="p-4 md:p-10 w-full mb-10 text-center">
                    <h1><FaLaptopCode className="inline-block pr-1" /> All Projects</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr p-10 md:p-14 border rounded-xl border-zinc-300/10 mb-10 w-full">
                {PROJECT_ITEMS.map((project) => {
                return (
                    <>
                    <ProjectGrid key={project.id} {...project} />
                    </>
                )})
            }
            </div>
                
            </div>
        </>
    )
}