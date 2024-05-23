import { PROJECT_ITEMS } from '@/styles/projects';
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr p-10 md:p-14 border rounded-xl border-border mb-10 w-full bg-foreground/05">
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