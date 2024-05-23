import {
    FaEyeDropper,
    FaMobile,
    FaTablet,
    FaLaptop,
    FaDesktop,
    FaDatabase,
    FaFigma,
    FaFileCode,
    FaFileLines,
    FaCube,
    FaCubes,
} from "react-icons/fa6";
import Placeholder from '@/assets/placeholder.jpg';
import GenericSprintPlan from '@/assets/pexels-startup-stock-photos-7376.jpg';
import GenericCode from '@/assets/pexels-rsantos1232-3888151.jpg';
import GenericProject from '@/assets/pexels-pixabay-265152.jpg';
import GenericWireframe from '@/assets/pexels-picjumbo-com-55570-196645.jpg';
import GenericWireframe2 from '@/assets/pexels-picjumbo-com-55570-196644.jpg';
import GenericAppBuild from '@/assets/pexels-kevin-ku-92347-577585.jpg';
import GenericTeamBuild from '@/assets/pexels-hillaryfox-1595385.jpg';
import GenericCode2 from '@/assets/pexels-godiatima-4976710.jpg';
import GenericProjectPlan from '@/assets/pexels-fauxels-3184339.jpg';
import GenericRetrospective from '@/assets/pexels-fauxels-3183150.jpg';
import GenericWork from '@/assets/pexels-divinetechygirl-1181307.jpg';
import RCVEST from '@/assets/logo_rcvest.png';
import NAFI from '@/assets/logo_nafi.png';
import SlackTrello from '@/assets/background-portfolio-3.jpg';
import NAFIboard from '@/assets/background-portfolio-2.jpg';
import WebBuild from '@/assets/background-portfolio-1.jpg';

import { WorkItem, ProjectStack } from "../types/types";

export const PROJECT_ITEMS: WorkItem[] = [
    {
        id: 'APP001',
        title: 'Slack & Trello Intergration',
        image: SlackTrello,
        icon: <FaCubes className="text-2xl" />,
        detail: 'Prototype for an agile retrospective tool using \'I Like, I Wish, I Wonder\' to allow stakeholders to share ideas in a positive and constructive way. The ideas shared via Slack would be added to Trello and voted on by the team to be integrated into the project during bi-weekly retrospectives.',
        type: ProjectStack.APP,
        stack: ['vsCode', 'node', 'glitch', 'js'],
        repo: 'https://github.com/focus9345/ifeedback-slack',
    },
    {
        id: 'APP002',
        title: 'Mobile App to Remind Birthdays',
        image: GenericCode2,
        icon: <FaMobile className="text-2xl" />,
        detail: 'A mobile application designed for Android and iPhone platforms enables users to automate the sending of birthday messages to friends and family. By utilizing this app, individuals can avoid the inconvenience of forgetting or consistently sending belated birthday wishes to those close to them.famlies birthdays. It helps not being a bad friend and constantly sending belated text messages to people we care about.',
        type: ProjectStack.APP,
        stack: ['vsCode', 'html', 'css', 'js', 'cordova'],
        repo: '',
    },
    {
        id: 'APP003',
        title: 'Task Manager',
        image: GenericAppBuild,
        icon: <FaTablet className="text-2xl" />,
        detail: 'Application to post tasks to. Simple form to see tasks, mark them completed. Create to showcase React and management of user content.',
        type: ProjectStack.APP,
        stack: ['vsCode', 'react', 'js', 'html', 'css', 'node', 'sqlLite'],
        repo: '',
    },
    {
        id: 'APP004',
        title: 'Food App',
        image: GenericCode,
        icon: <FaLaptop className="text-2xl" />,
        detail: 'Application make food orders. Sample of a web app that could take food orders for a resturant. Create to showcase React and management of user content.',
        type: ProjectStack.APP,
        stack: ['vsCode', 'react', 'js', 'html', 'css', 'node', 'sqlLite'],
        repo: '',
    },
    {
        id: 'DES001',
        title: 'Rebranding a company',
        image: NAFIboard,
        icon: <FaFigma className="text-2xl" />,
        detail: 'North American Family Institute (NAFI) is a non-profit organization that focuses on providing social services to communities. When branding the company, they aimed to showcase their services and values. The logo reflects their commitment to empowering clients and providing community support. Additionally, they created marketing materials such as websites, car details, and billboards to convey their message effectively.potentally showcase who they are the services they provide to the communities they service. They are a non for profit that focuses on social services. The logo tells a story of people empowering clients to community support. The image shows samples of marketing materials like website, car details and billbords.',
        type: ProjectStack.DESIGN,
        stack: ['adobeIndesign', 'adobePhotoshop', 'adobeIllustrator'],
        repo: '',
    },
    {
        id: 'DES002',
        title: 'User Interaction and Design Documention',
        image: GenericWireframe,
        icon: <FaEyeDropper className="text-2xl" />,
        detail: 'A web application dashboard needed to be updated to create a smoother user experience for student reading testing. This document outlined the specific places that needed updating as the user approached updating the reading test for a student. Prior to the change, the process could take an estimated 15 to 20 minutes per student to change a reading test. After the changes were implemented, the time was significantly reduced to 2 to 4 minutes per student. The document included a user flow diagram and wireframes of the new page designs',
        type: ProjectStack.DESIGN,
        stack: ['docCode', 'adobePhotoshop', 'lucid'],
        repo: '',
    },
    {
        id: 'DES003',
        title: 'Software Requirements Specification (SRS)',
        image: GenericProject,
        icon: <FaFileLines className="text-2xl" />,
        detail: ' I\'ve taken note of the following: Created SRS for a project for Spheregen, outlining an admin dashboard and mobile site for a construction company. The document included details on the Problem Statement/Product Value, Main Target Users, User Stories and Functionalities Description, System Architecture, and Non-Functional Requirements with an estimate of time and cost.',
        type: ProjectStack.DESIGN,
        stack: ['docContent', 'lucid'],
        repo: '',
    },
    {
        id: 'DES004',
        title: 'RPA Process Documentation (PDD)',
        image: GenericProjectPlan,
        icon: <FaCubes className="text-2xl" />,
        detail: 'I have created UiPath process documents for process automation. The document includes inputs, outputs, rules for condition handling, internal and external outlines of any software used, screen captures of the current human process "As-Is" and the future robotic process "To-Be" of the end-to-end process to be automated, process owners, and maintenance details.',
        type: ProjectStack.DESIGN,
        stack: ['docContent', 'lucid'],
        repo: '',
    },
    {
        id: 'DES005',
        title: 'Wireframe Mobile App',
        image: GenericWireframe2,
        icon: <FaCubes className="text-2xl" />,
        detail: 'Created a wireframe for an Android/iPhone app to input change orders during a specific project for a service company. The wireframe included user flow and functional requirements notation.',
        type: ProjectStack.DESIGN,
        stack: ['docContent', 'lucid'],
        repo: '',
    },
    {
        id: 'WEB001',
        title: 'RC VEST',
        image: RCVEST,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'I\'ve created a WordPress website with a custom theme designed to showcase the ethical aspects of emerging technologies. Additionally, I\'ve developed a new logo as part of the redesign. Check it out at https://rcvest.southernct.edu/.',
        type: ProjectStack.WEB,
        stack: ['vsCode', 'wordpress', 'html', 'css', 'js', 'mySQL', 'adobeIllustrator'],
        repo: '',
    },
    {
        id: 'WEB002',
        title: 'Valley Early Childhood Regional Council',
        image: Placeholder,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'I have designed a custom Wordpress website with a unique theme to showcase resources available to parents for aiding in their children\'s development. Additionally, I have personally developed the logo and brand. Visit the website here: https://www.vecrc.org/',
        type: ProjectStack.WEB,
        stack: ['vsCode', 'wordpress', 'html', 'css', 'js', 'mySQL', 'adobeIllustrator'],
        repo: 'https://github.com/focus9345/vecrc-theme',
    },
    {
        id: 'WEB003',
        title: 'Southern Connecticut State University',
        image: GenericWork,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Southern Connecticut State University has recently revamped its website to redefine the private student resources. I took the lead in collaborating with the marketing department and the colleges of arts and sciences, as well as health and human services, to spearhead the update of their student resources, ensuring better support for students in those majors.',
        type: ProjectStack.WEB,
        stack: ['vsCode', 'joomla', 'html', 'css', 'js', 'mySQL', 'adobeIllustrator'],
        repo: '',
    },
    {
        id: 'WEB004',
        title: 'This Website',
        image: GenericSprintPlan,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'This is the next generation portfolio website, the prior website was created using Vue and archived on GitHub. My refactoring to React was to implement a React-based portfolio and add new features that would allow me to easily add new projects as they became examples to show.',
        type: ProjectStack.WEB,
        stack: ['vsCode', 'react', 'html', 'css', 'js', 'mySQL', 'node'],
        repo: 'https://github.com/focus9345/jcportfolio-next01',
    },
    {
        id: 'WEB005',
        title: 'Hundreds of Propriatory Websites',
        image: WebBuild,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'From 2009 to 2016, I spearheaded the development of a tailored boilerplate for our proprietary web CMS. This initiative substantially reduced our development timeline, facilitating the delivery of over 250 custom websites to our clients within a year, achieved by a compact team of three individuals. The boilerplate boasted SEO advantages and incorporated an array of features, including image galleries, carousels, and various other enhancements.',
        type: ProjectStack.WEB,
        stack: ['docCode', 'html', 'css', 'js', 'mySQL', 'php', 'adobePhotoshop', 'adobeIllustrator'],
        repo: '',
    },
]