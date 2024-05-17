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
        detail: 'Prototype for a agile retrospective tool using I Like, I wish, I Wonder, to allow stakeholders to share ideas in a positive and constructive way, the ideas shared via slack would be added to trello and voted by the team to be intergated into the project during bi weekly retrospectives.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'Node', 'Glitch'],
        repo: '',
    },
    {
        id: 'APP002',
        title: 'Mobile App to Remind Birthdays',
        image: GenericCode2,
        icon: <FaMobile className="text-2xl" />,
        detail: 'Mobile app for Android/iPhone to send a text message on friends and famlies birthdays. It helps not being a bad friend and constantly sending belated text messages to people we care about.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'HTML', 'CSS', 'Javascript', 'Cordova'],
        repo: '',
    },
    {
        id: 'APP003',
        title: 'Task Manager',
        image: GenericAppBuild,
        icon: <FaTablet className="text-2xl" />,
        detail: 'Application to post tasks to. Simple form to see tasks, mark them completed. Create to showcase React and management of user content.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'React', 'NextJS', 'Node', 'SQLlite'],
        repo: '',
    },
    {
        id: 'APP004',
        title: 'Food App',
        image: GenericCode,
        icon: <FaLaptop className="text-2xl" />,
        detail: 'Application make food orders. Sample of a web app that could take food orders for a resturant. Create to showcase React and management of user content.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'React', 'Redux', 'Node', 'SQLlite'],
        repo: '',
    },
    {
        id: 'DES001',
        title: 'Rebranding a company',
        image: NAFIboard,
        icon: <FaFigma className="text-2xl" />,
        detail: 'Branding a company example, North American Family Institute (NAFI) was a new take on the company and how they could potentally showcase who they are the services they provide to the communities they service. They are a non for profit that focuses on social services. The logo tells a story of people empowering clients to community support. The image shows samples of marketing materials like website, car details and billbords.',
        type: ProjectStack.DESIGN,
        stack: ['Indesign', 'Photoshop', 'Illustrator'],
        repo: '',
    },
    {
        id: 'DES002',
        title: 'User Interaction and Design Documention',
        image: GenericWireframe,
        icon: <FaEyeDropper className="text-2xl" />,
        detail: 'A web application dashboard needed to be updated to create a smoother user experience for student reading testing. This document outlined the places to specifically update as the user would approach updating the reading test for a student. The process prior to the change could take an testimated 15 to 20 minuets per student to change a reading test and post changes the time was sagnifitly dropped to 2 to 4 minuets per studnet. Document inclueded user flow diagram and wireframes of the new page designs',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'Photoshop', 'LucidChart'],
        repo: '',
    },
    {
        id: 'DES003',
        title: 'Software Requirements Specification (SRS)',
        image: GenericProject,
        icon: <FaFileLines className="text-2xl" />,
        detail: 'Created SRS for project for Spheregen outlining a admin dashboard and mobile site for constuction company. The document included details on Problem Statement / Product Value, Main Target Users, User Stories and Functionalities Description, System Architecture, and Non Fuctional Requirements with a estimate of time and cost.  ',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'Lucidchart'],
        repo: '',
    },
    {
        id: 'DES004',
        title: 'RPA Process Documentation (PDD)',
        image: GenericProjectPlan,
        icon: <FaCubes className="text-2xl" />,
        detail: 'Created Uipath Process Documents for Process Automation, the document inclued inputs, outputs, rules for condition handeling, internal and external outline of any software used, screen captures of human proccess "As-Is" & future robotic process "To-Be" of the end-to-end process to be automated, Processes Owners and Maintaince Detials',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'ScreenCapture'],
        repo: '',
    },
    {
        id: 'DES005',
        title: 'Wireframe Mobile App',
        image: GenericWireframe2,
        icon: <FaCubes className="text-2xl" />,
        detail: 'Created a wireframe for a Android/iPhone app that would take input of change orders during a work on a specific project for a service company. The wireframe included the flow a user could take and notation on fuctional requirements.',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'ScreenCapture'],
        repo: '',
    },
    {
        id: 'WEB001',
        title: 'RC VEST',
        image: RCVEST,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Wordpress website with custom created theme to highlight the ethical parts of emerging technologies, the logo was also created as part of the redesign. Visit: https://rcvest.southernct.edu/',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'LAMP Stack', 'Illustrator'],
        repo: '',
    },
    {
        id: 'WEB002',
        title: 'Valley Early Childhood Regional Council',
        image: Placeholder,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Wordpress website with custom created theme to highlight the resources avalabie to parents to help expose young children to resources to aid in their development, the logo and brand was also developed. Visit here: https://www.vecrc.org/ ',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'LAMP Stack', 'Illustrator'],
        repo: '',
    },
    {
        id: 'WEB003',
        title: 'Southern Connecticut State University',
        image: GenericWork,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Southern Connecticut State University had recently updated their website redefining the private student resources. Working with the marketing department and college of arts and science as well as health and human services I help each department to update their student recources to help support student in those majors.',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'LAMP Stack', 'Joomla'],
        repo: '',
    },
    {
        id: 'WEB004',
        title: 'This Website',
        image: GenericSprintPlan,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'This is the thrid generation portfolio, the prior website was created using vue and archived on github. I hope to showcase some of my skills as a front-end developer.',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'React', 'NextJS', 'Heruku'],
        repo: '',
    },
    {
        id: 'WEB005',
        title: 'Hundreds of Propriatory Websites',
        image: WebBuild,
        icon: <FaDesktop className="text-2xl" />,
        detail: 'During the time span of 2009 to 2016, I developed a custom boilerplate for a propriatory web CMS was developed which decreased development time to the point where over 250 custom websites were devivered to clients by a small development team of three people.',
        type: ProjectStack.WEB,
        stack: ['Brackets', 'HTML', 'CSS', 'Javascript', 'PHP', 'Illustrator', 'Photoshop', 'jQuery'],
        repo: '',
    },
]