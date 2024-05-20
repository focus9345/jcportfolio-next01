import Link from 'next/link'; 
import { WorkItem, ProjectStack } from '@/types/types';
import React from 'react';
import ProjectImage from './project-image';
let projectLink: string;

const ProjectGrid: React.FC<WorkItem> = (props) => {
    
    if(props.type === ProjectStack.APP) {
        projectLink = 'apps';
    } else if (props.type === ProjectStack.DESIGN) {
        projectLink = 'design'
    } else if (props.type === ProjectStack.WEB) {
        projectLink = 'web'
    } else {
        throw new Error("Project Type Not Defined!");
    }
    return (
    

        <article className="flex flex-col bg-slate-900 rounded-lg w-full border border-zinc:300">
            <figure>
                <ProjectImage imagePrj={props.image} title={props.title} />
            </figure>
            <main className="my-5 px-5 text-center font-semibold">
            {props.title}
            </main>
            <footer className="text-center border border-zinc-100 block min-h-10">
                <Link className="bg-blue-500 text-zinc-100 py-2 px-10 rounded-xl" href={`/projects/${projectLink}#${props.id}`} >
                    Details
                </Link>
            </footer> 
        </article>

    
    )
}

export default ProjectGrid;