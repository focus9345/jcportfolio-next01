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
    

        <article className="flex flex-col bg-primary/10 rounded-lg w-full border border-border">
            <figure>
                <ProjectImage imagePrj={props.image} title={props.title} imgWidth={300} />
            </figure>
            <main className="my-5 px-5 text-center font-semibold min-h-16 grid place-content-center">
                <h4 className="block">{props.title}</h4>
            </main>
            <footer className="text-center">
                <Link className="bg-button hover:bg-button/80 text-background my-3 px-5 py-3 transition duration-150 rounded ease-out hover:ease-in" href={`/projects/${projectLink}#${props.id}`} >
                    Details
                </Link>
            </footer> 
        </article>

    
    )
}

export default ProjectGrid;