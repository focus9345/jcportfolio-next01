import { FaEyeDropper } from "react-icons/fa6";
import { PROJECT_ITEMS } from '@/styles/projects';
//import Link from 'next/link';
import ProjectItem from '@/components/projects/project-item';
import { ProjectStack } from "@/types/types";

const DESIGN_ITEMS = PROJECT_ITEMS.filter( (item) => item.type == ProjectStack.DESIGN);
export default function ProjectsDesigns() {
    return (
<>
<div className="flex flex-col items-center justify-between">

                <div className="p-4 md:p-10 w-full mb-10 text-center">
                    <h1><FaEyeDropper className="inline-block pr-1" /> Graphic Design Projects</h1>
                </div>

                {DESIGN_ITEMS.map((project) => {

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