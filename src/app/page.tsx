import type { Metadata } from "next";
import Image from "next/image";
import DevImage from '../../public/pexels-pixabay-265152.jpg';
import TeamImage from '../../public/pexels-fauxels-3183150.jpg';
import SolveImage from '../../public/pexels-hillaryfox-1595385.jpg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fullstack Developer for Hire",
  description: "I'm Joshua Connor, a full-stack developer available for hire. My focus is on delivering excellent software that is user-friendly and easy to maintain.",
};

export default function Home() {
  return (
    <>
 
      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1/2 md:min-h-full p-4 md:p-10">
          <div className="flex flex-col w-full mb-10">
            <div className=" mb-5">
              <Image
                src={DevImage}
                className="shadow-xl h-auto max-w-full rounded-xl"
                alt="Placeholder"
                priority
              />
            </div>
            <div className="">
              <h1 className="mb-4">Hi, Im Joshua Connor</h1>
              <p>I am a Front-End/Full-Stack Developer. I&rsquo;m currently seeking my next opportunity to learn, grow, share my knowledge, and create something great.</p>
              <Link 
                href="/projects"
                className="bg-button hover:bg-button/80 text-background my-3 px-5 py-3 transition duration-150 rounded ease-out hover:ease-in float-right"> Visit Portfolio </Link>
            </div>
          </div>

        </div>
        <div className=" basis-1/2 md:min-h-full p-4 md:p-10
    ">

          <div className="flex flex-col md:flex-row w-full mb-10">
            <div className=" mr-10 md:basis-1/3 hidden md:block">
              <Image
                src={TeamImage}
                className="shadow-xl rounded-xl object-cover h-52 w-full"
                alt="Placeholder"
                priority
              />
            </div>
            <div className=" md:basis-2/3">
              <h2>Software Development Teams</h2>
              <p>Trust lies at the core of team quality and performance. It is earned through communication, unity, mutual support, and shared values. </p>
              <Link
                href="/about"
                className="bg-button hover:bg-button/80 text-background my-3 px-5 py-3 transition duration-150 rounded ease-out hover:ease-in float-right"> More On Me </Link>

            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full mb-10">
            <div className="mr-10 md:basis-1/3 hidden md:block">
              <Image
                src={SolveImage}
                className="shadow-xl object-cover h-52 w-full rounded-xl"
                alt="Placeholder"
                priority
              />
            </div>
            <div className=" md:basis-2/3">
              <h2>Listen Before Solving</h2>
              <p>One thing experience has taught me is that when software tries to address business problems, it&rsquo;s crucial to truly understand the users and their goals, with the aim of simplifying their processes.</p>
              <Link 
                href="https://www.linkedin.com/in/connorjoshua/"
                className="bg-button hover:bg-button/80 text-background my-3 px-5 py-3 transition duration-150 rounded ease-out hover:ease-in float-right"> Contact Me </Link>

            </div>
          </div>


        </div>
      </div>
    </>
  );
}
