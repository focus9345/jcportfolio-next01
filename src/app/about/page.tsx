import { FaFish } from "react-icons/fa6";

export default function About() {
  return (
    <div className="flex flex-col p-6 w-full justify-evenly">
      
      <div className="mt-2 mb-4 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-full">
        <h1>Who am I?</h1>
        <p>A person who is always learning, growing and sharing what I learned with others. Its taken time to build my skills to get to a place where I can focus on making technology where humans come together in an intuative way. It takes teamwork from the stakeholders and really listening to the key features, planning, and talent to make great applications / websites. </p>
      </div>

<div className="mt-2 mb-4 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-full">
        <h2>Skillsets</h2>
        <div>
          <h2>Frontend</h2>
          <ul>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React / Nextjs</li>
            <li>Vue</li>
          </ul>
        </div>
        <div>
          <h2>Backend</h2>
          <ul>
            <li>Javascript</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>

      <div className="mt-2 mb-4 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-full">
        <h2>Work Experience</h2>
        <div>
          <h3>Sheregen Technologies</h3>
          <p>Senior RPA & UIUX Developer | Feb 2021-July 2023</p>
          <p>New Haven, CT, USA</p>
          <ul>
            <li>RPA, Developed complex RPA processes that connected to multiple different technologies like mainframe to salesforce.  Several processes have been noted to have benefits of over hundreds of hours of savings in manual labor, translating to thousands of dollars saved per month.</li>
            <li>RPA, Documentation, Project Estimation, Software Support, and System Updates and Upgrades.</li>
            <li>UI/UX, MS Hololense Software Documentation and improved user experience of AR application. Web Application Documentation and improved user experience, reducing the manual effort of users within a web application to complete certain tasks.</li>
          </ul>
        </div>

        <div>
          <h3>Southern Connecticut State University</h3>
          <p>Webmaster | Jan	2019 - Dec 2019</p>
          <ul>
            <li>College of Arts and Sciences 	New Haven, CT, USA</li>
            <li>CMS, Migration & restructuring of content to a new web app, facilitated restructuring the student and department’s intranet content. Results, every department from two colleges migrated into a new student/department web portal.</li>
          </ul>
        </div>
        
        <div>
          <h3>Market Hardware</h3>
          <p>Senior Front-End Developer | 2009 - 2016</p>
          <p>Bethesda, MD, USA</p>
          <ul>
            <li>Fullstack LAMP developer, created business-to-consumer marketing websites.</li>
            <li>Improved build and deployment best practices, SEO improvements to development practices.</li>
            <li>UI/UX designing new customizations.</li>
            <li>Highlights - built and deployed over 250 websites in one year</li>
          </ul>
        </div>

      </div>

      <div className="mt-2 mb-4 rounded-md border-zinc-500 border-dotted border-2 min-h-40 w-full">
        <h2>Education & Achievments</h2>
        <div>
          <div>southern logo</div>
          <p>Southern Conneticut State University<br />
            Masters of Science<br />
            Computer Science - Software Development<br />
            Spring 2020</p>
        </div>
        <div>
          <div>southern logo</div>
          <p>Southern Conneticut State University<br />
            Bachelor of Science<br />
            Studio Art - Graphic Design<br />
            Spring 2018</p>
        </div>
        <h3>Awards and Achievments</h3>
        <h4>Deans List</h4>
        <p>Southern Connecticut State University<br />
          Bachelors of Science<br />
          Fall 2016 & Spring 2017</p>

        <h4>Honor Society</h4>
        <p>Southern Connecticut State University,<br />
          Bachelors of Science<br />
          Tau Sigma Honor Society Member<br />
          Gold Key International Honor Society Member</p>

        <h4>4.0 GPA Cumulative</h4>
        <p>Southern Connecticut State University<br />
          Masters of Science</p>

      </div>
      
      
    </div>

  );
}
