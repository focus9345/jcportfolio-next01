import { FaDesktop } from "react-icons/fa6";
import { PROJECT_ITEMS } from '@/styles/projects';
//import Link from 'next/link';
import ProjectItem from '@/components/projects/project-item';
import { ProjectStack } from "@/types/types";

const WEB_ITEMS = PROJECT_ITEMS.filter( (item) => item.type == ProjectStack.WEB);
export default function ProjectsDesigns() {
    return (
<>
<div className="flex flex-col items-center justify-between">

                <div className="p-10 md:p-14 w-full mb-10 text-center">
                    <h1><FaDesktop className="inline-block pr-1" /> Website Projects</h1>
                </div>

                {WEB_ITEMS.map((project) => {

                    return (
                        <>
                            <ProjectItem key={project.id} {...project} />
                        </>
                    )
                })
                }
            </div>
</>
    )
}