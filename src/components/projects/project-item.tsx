import Link from 'next/link'; 
import {
    FaGithub
} from "react-icons/fa6";
import { WorkItem } from '@/types/types';
import React from 'react';
import ProjectImage from './project-image';
import ProjectStack from './project-stack';

const ProjectItem: React.FC<WorkItem> = (props) => {
    return (
        <div className="p-4 md:p-10 border border-border/50 rounded-lg mb-10 w-full" id={props.id}>
                    <article className="flex flex-col md:flex-row p-10">
                        <figure className="mr-10 basis-1/3 mb-5">
                            <ProjectImage imagePrj={props.image} title={props.title} imgWidth={600} />
                        </figure>
                        <section className="flex flex-col px-5 gap-y-2 basis-2/3">
                            <header>
                                <h3 className="inline">
                                    <span className="text-3xl inline-block pr-2">{props.icon}</span>
                                    {props.title}
                                </h3>
                            </header>
                            <section className="">
                                <ProjectStack stack={props.stack} />
                            </section>
                            <main className="h-98">
                                <p>{props.detail}</p>
                            </main>
                            <footer className="flex justify-end items-end">
                                {props.repo && 
                                <Link className="bg-button hover:bg-button/80 text-background my-3 px-5 py-3 transition duration-150 rounded ease-out hover:ease-in" href={props.repo} >
                                    <FaGithub className="inline-block pr-1 text-2xl" /> Go To Repo
                                </Link>
                                }
                            </footer>
                        </section>
                    </article>
                </div>

    );
  }
  export default ProjectItem;