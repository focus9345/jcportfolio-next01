import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import { FaDesktop, FaServer } from "react-icons/fa6";
import RaceBicycle from '../../../public/bicycle.svg';
import TeamImage from '../../../public/pexels-fauxels-3183150.jpg';
import ModeImage from '@/components/modeImage';
import UiPath from '../../../public/uipath.png';
import SCSUdark from '../../../public/southernct_white.svg';
import SCSUlight from '../../../public/southernct_black.svg';

export const metadata: Metadata = {
  title: "Fullstack Developer Joshua Connor",
  description: "About the fullstack developer Joshua Connor, Ideas on software teams, and accomplishments",
};

export default function About() {

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1/2 md:min-h-full p-4 md:p-10">
          <div className="flex flex-col w-full mb-10">
            <div className="mb-5">
              <Image
                src={RaceBicycle}
                className="h-auto max-w-full rounded-xl"
                alt="Placeholder"
              />
            </div>
            <div className="">
              <h1 className="mb-4">Who am I?</h1>
              <p>Im a fullstack developer focusing on React to develop great apps that help people to be better team members. At the heart of every app there is a common goal from a business prespective. Take an input and share it with others or organize it, to help accomplish some task. </p>
              <Link 
              href="/projects"
              className="bg-button hover:bg-button/80 text-background my-3 px-5 py-3 transition duration-150 rounded ease-out hover:ease-in float-right"
              >
                Visit Portfolio
              </Link>
             </div>
          </div>

        </div>
        <div className="basis-1/2 md:min-h-full p-4 md:p-10">

          <div className="flex flex-col md:flex-row w-full mb-10">
            <div className=" mr-10 md:basis-1/3 hidden md:block">
              <Image
                src={TeamImage}
                className="shadow-xl rounded-xl object-cover h-52 w-full mt-1"
                alt="Placeholder"
              />
            </div>
            <div className="md:basis-2/3">
              <h2>Teamwork Quality Factors</h2>
              <p>Stakeholders and team members both are related to a teams performance. The factors that drive team performance and in turn output efficiency and preformance is the quality factors which are: Communication, Mutual Support, Cohesion, Trust, Value Div, Coordination of expert. In agile software development its important to make sure these factors of the team are supported during a project to ensure success.</p>

            </div>
          </div>

          <div className="flex flex-col w-full mb-10">
            <h2 className="block w-full">Skills</h2>
            <div className="flex flex-row w-full">
              <div className="basis-1/2">
                <h3 className="text-base text-bold">Frontend</h3>
                <ul className="text-sm">
                  <li><FaDesktop className="text-xl pr-2 inline-block" />Javascript</li>
                  <li><FaDesktop className="text-xl pr-2 inline-block" />CSS</li>
                  <li><FaDesktop className="text-xl pr-2 inline-block" />HTML</li>
                  <li><FaDesktop className="text-xl pr-2 inline-block" />React / Nextjs</li>
                  <li><FaDesktop className="text-xl pr-2 inline-block" />Vue</li>
                </ul>
              </div>
              <div className="basis-1/2">
                <h3 className="text-base text-bold">Backend</h3>
                <ul className="text-sm">
                  <li><FaServer className="text-xl pr-2 inline-block" />Javascript</li>
                  <li><FaServer className="text-xl pr-2 inline-block" />Node</li>
                  <li><FaServer className="text-xl pr-2 inline-block" />Express</li>
                  <li><FaServer className="text-xl pr-2 inline-block" />SQL</li>
                  <li><FaServer className="text-xl pr-2 inline-block" />Firebase</li>
                </ul>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full dark:bg-primary/20 bg-secondary/70 pb-6">
        <div className="basis-1/2 md:min-h-full p-4 md:p-10">
          <h2 className="my-8">Work Experience</h2>
          <div className="flex flex-col w-full border-b border-dashed border-border pb-5 mb-8">
            <h4 className="">Sheregen Technologies</h4>
            <p>Senior RPA & UIUX Developer | Feb 2021-July 2023</p>
            <p>New Haven, CT, USA</p>
            <ul className="list-disc text-sm my-1">
              <li>RPA, Developed complex RPA processes that connected to multiple different technologies like mainframe to salesforce.  Several processes have been noted to have benefits of over hundreds of hours of savings in manual labor, translating to thousands of dollars saved per month.</li>
              <li>RPA, Documentation, Project Estimation, Software Support, and System Updates and Upgrades.</li>
              <li>UI/UX, MS Hololense Software Documentation and improved user experience of AR application. Web Application Documentation and improved user experience, reducing the manual effort of users within a web application to complete certain tasks.</li>
            </ul>
          </div>

          <div className="flex flex-col w-full border-b border-dashed border-border pb-5 mb-8">
            <h4 className="">Southern Connecticut State University</h4>
            <p>Webmaster | Jan	2019 - Dec 2019</p>
            <p>New Haven, CT, USA</p>
            <ul className="list-disc text-sm my-1">
              <li>College of Arts and Sciences 	New Haven, CT, USA</li>
              <li>CMS, Migration & restructuring of content to a new web app, facilitated restructuring the student and department’s intranet content. Results, every department from two colleges migrated into a new student/department web portal.</li>
            </ul>
          </div>

          <div className="flex flex-col w-full pb-5 mb-8">
            <h4 className="">Market Hardware</h4>
            <p>Senior Front-End Developer | 2009 - 2016</p>
          <p>Bethesda, MD, USA</p>
            <ul className="list-disc text-sm my-1">
            <li>Fullstack LAMP developer, created business-to-consumer marketing websites.</li>
            <li>Improved build and deployment best practices, SEO improvements to development practices.</li>
            <li>UI/UX designing new customizations.</li>
            <li>Highlights - built and deployed over 250 websites in one year</li>
            </ul>
          </div>


        </div>
        <div className="basis-1/2 md:min-h-full p-4 md:p-10">
          <h2 className=" my-8">Education & Achievments</h2>
          <div className="flex flex-row w-full border-b border-dashed border-border pb-5 mb-8">
            <div className="basis-1/3 text-center">
              <ModeImage DefaultImage={SCSUlight} DarkImage={SCSUdark} AltDesc="Southern Conneticut State University" imgWidth={100} imgHeight={100} />
              </div>
            <div className="basis-2/3">
            <p>Southern Conneticut State University<br />
            <strong>Masters of Science</strong><br />
            Computer Science - Software Development<br />
            Spring 2020</p>
            </div>


          </div>
          <div className="flex flex-row w-full border-b border-dashed border-boarder pb-5 mb-8">
          <div className="basis-1/3 text-center">
          <ModeImage DefaultImage={SCSUlight} DarkImage={SCSUdark} AltDesc="Southern Conneticut State University" imgWidth={100} imgHeight={100} /></div>
              <div className="basis-2/3">
              <p>Southern Conneticut State University<br />
            <strong>Bachelor of Science</strong><br />
            Studio Art - Graphic Design<br />
            Spring 2018</p>
              </div>
          </div>
          <div className="flex flex-row w-full border-b border-dashed border-boarder pb-5 mb-8">
          <div className="basis-1/3 text-center">
              <Image 
              src={UiPath}
              alt="UIPATH"
              width={150}
              /></div>
              <div className="basis-2/3">
              <p>UiPath Certified Professional Advanced RPA Developer (UiARD)</p>
              </div>
          </div>

          <div className="flex flex-row w-full pb-5 mb-8">
          <div className="basis-1/3 text-center">
          <ModeImage DefaultImage={SCSUlight} DarkImage={SCSUdark} AltDesc="Southern Conneticut State University" imgWidth={100} imgHeight={100} /></div>
              <div className="basis-2/3">
              <h3 className=" my-1">Awards and Achievments</h3>
        <h4 className=" my-1">Deans List</h4>
        <p className="pb-4">Southern Connecticut State University<br />
          Bachelors of Science<br />
          Fall 2016 & Spring 2017</p>

        <h4 className=" my-1">Honor Society</h4>
        <p className="pb-4">Southern Connecticut State University,<br />
          Bachelors of Science<br />
          Tau Sigma Honor Society Member<br />
          Gold Key International Honor Society Member</p>

        <h4 className=" my-1">4.0 GPA Cumulative</h4>
        <p className="pb-4">Southern Connecticut State University<br />
          Masters of Science</p>
              </div>
          </div>

        </div>
      </div>
    </>
  );
}
