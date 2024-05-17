import Link from 'next/link';
import Image from 'next/image'; 
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
    SiTypescript,
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
import React from 'react';
import ProjectImage from './project-image';


const ProjectItem: React.FC<WorkItem> = (props) => {
    return (
        <div className="p-4 md:p-10 border rounded-xl border-zinc-300/20 mb-10 w-full">
                    <article className="flex flex-row p-10 bg-zinc-500/20 rounded-lg">
                        <figure className="mr-10 basis-1/3">
                            <ProjectImage imagePrj={props.image} title={props.title} />
                        </figure>
                        <section className="flex flex-col px-5 gap-y-2 basis-2/3">
                            <header>
                                <h3 className="inline text-zinc-200">
                                    <span className="text-3xl inline-block pr-2">{props.icon}</span>
                                    {props.title}
                                </h3>
                            </header>
                            <section className="">
                                {/* will need to create a stack here */}
                                <ul className="flex flex-row text-2xl text-yellow-400">
                                    <li className="pr-4"><SiJavascript /></li>
                                    <li className="pr-4"><SiHtml5 /></li>
                                    <li className="pr-4"><SiCss3 /></li>
                                    <li className="pr-4"><SiReact /></li>
                                    <li className="pr-4"><SiSqlite /></li>
                                </ul>
                            </section>
                            <main className="h-98">
                                <p>{props.detail}</p>
                            </main>
                            <footer className="flex justify-end items-end">
                                <Link className="bg-blue-500 text-zinc-100 py-2 px-6 rounded-xl" href="https:github.com" >
                                    <FaGithub className="inline-block pr-1 text-2xl" /> Go To Repo
                                </Link>
                            </footer>
                        </section>
                    </article>
                </div>

    );
  }
  export default ProjectItem;