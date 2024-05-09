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
import { ProjectItem, ProjectStack } from "../types/types";

export const PROJECT_ITEMS: ProjectItem[] = [
    {
        id: 'APP001',
        title: 'Slack & Trello Intergration',
        image: 'url placeholder',
        icon: <FaLaptop className="text-2xl" />,
        detail: 'Prototype for a agile retrospective tool using I Like, I wish, I Wonder, to allow stakeholders to share ideas in a positive and constructive way, the ideas shared via slack would be added to trello and voted by the team to be intergated into the project during bi weekly retrospectives.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'Node', 'Glitch']
    },
    {
        id: 'APP002',
        title: 'Mobile App to Remind Birthdays',
        image: 'url placeholder',
        icon: <FaMobile className="text-2xl" />,
        detail: 'Mobile app for Android/iPhone to send a text message on friends and famlies birthdays. It helps not being a bad friend and constantly sending belated text messages to people we care about.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'HTML', 'CSS', 'Javascript', 'Cordova']
    },
    {
        id: 'APP003',
        title: 'Task Manager',
        image: 'url placeholder',
        icon: <FaTablet className="text-2xl" />,
        detail: 'Application to post tasks to. Simple form to see tasks, mark them completed. Create to showcase React and management of user content.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'React', 'NextJS', 'Node', 'SQLlite']
    },
    {
        id: 'APP004',
        title: 'Food App',
        image: 'url placeholder',
        icon: <FaLaptop className="text-2xl" />,
        detail: 'Application make food orders. Sample of a web app that could take food orders for a resturant. Create to showcase React and management of user content.',
        type: ProjectStack.APP,
        stack: ['VSCode', 'React', 'Redux', 'Node', 'SQLlite']
    },
    {
        id: 'DES001',
        title: 'Rebranding a company',
        image: 'url placeholder',
        icon: <FaFigma className="text-2xl" />,
        detail: 'Branding a company example, North American Family Institute (NAFI) was a new take on the company and how they could potentally showcase who they are the services they provide to the communities they service. They are a non for profit that focuses on social services. The logo tells a story of people empowering clients to community support. The image shows samples of marketing materials like website, car details and billbords.',
        type: ProjectStack.DESIGN,
        stack: ['Indesign', 'Photoshop', 'Illustrator']
    },
    {
        id: 'DES002',
        title: 'User Interaction and Design Documention',
        image: 'url placeholder',
        icon: <FaEyeDropper className="text-2xl" />,
        detail: 'A web application dashboard needed to be updated to create a smoother user experience for student reading testing. This document outlined the places to specifically update as the user would approach updating the reading test for a student. The process prior to the change could take an testimated 15 to 20 minuets per student to change a reading test and post changes the time was sagnifitly dropped to 2 to 4 minuets per studnet. Document inclueded user flow diagram and wireframes of the new page designs',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'Photoshop', 'LucidChart']
    },
    {
        id: 'DES003',
        title: 'Software Requirements Specification (SRS)',
        image: 'url placeholder use stock image',
        icon: <FaFileLines className="text-2xl" />,
        detail: 'Created SRS for project for Spheregen outlining a a Admin Dashboard and mobile site for constuction company. Document included details on Problem Statement / Product Value, Main Target Users, User Stories and Functionalities Description, System Architecture, and Non Fuctional Requirements with a estimate of time and cost.  ',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'Lucidchart']
    },
    {
        id: 'DES004',
        title: 'RPA Process Documentation (PDD)',
        image: 'url placeholder',
        icon: <FaCubes className="text-2xl" />,
        detail: 'Created Uipath Process Documents for Process Automation, the document inclued inputs, outputs, rules for condition handeling, internal and external outline of any software used, screen captures of human proccess "As-Is" & future robotic process "To-Be" of the end-to-end process to be automated, Processes Owners and Maintaince Detials',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'ScreenCapture']
    },
    {
        id: 'DES005',
        title: 'Wireframe Mobile App',
        image: 'url placeholder',
        icon: <FaCubes className="text-2xl" />,
        detail: 'Created a wireframe for a Android/iPhone app that would take input of change orders during a work on a specific project for a service company. The wireframe included the flow a user could take and notation on fuctional requirements.',
        type: ProjectStack.DESIGN,
        stack: ['Word', 'ScreenCapture']
    },
    {
        id: 'WEB001',
        title: 'RC VEST',
        image: 'url placeholder',
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Wordpress website with custom created theme to highlight the ethical parts of emerging technologies, the logo was also created as part of the redesign. Visit: https://rcvest.southernct.edu/',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'LAMP Stack', 'Illustrator']
    },
    {
        id: 'WEB002',
        title: 'Valley Early Childhood Regional Council',
        image: 'url placeholder',
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Wordpress website with custom created theme to highlight the resources avalabie to parents to help expose young children to resources to aid in their development, the logo and brand was also developed. Visit here: https://www.vecrc.org/ ',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'LAMP Stack', 'Illustrator']
    },
    {
        id: 'WEB003',
        title: 'Southern Connecticut State University',
        image: 'url placeholder',
        icon: <FaDesktop className="text-2xl" />,
        detail: 'Southern Connecticut State University had recently updated their website redefining the private student resources. Working with the marketing department and college of arts and science as well as health and human services I help each department to update their student recources to help support student in those majors.',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'LAMP Stack', 'Joomla']
    },
    {
        id: 'WEB004',
        title: 'This Website',
        image: 'url placeholder',
        icon: <FaDesktop className="text-2xl" />,
        detail: 'This is the thrid generation portfolio, the prior website was created using vue and archived on github. I hope to showcase some of my skills as a front-end developer.',
        type: ProjectStack.WEB,
        stack: ['VSCode', 'React', 'NextJS', 'Heruku']
    },
    {
        id: 'WEB005',
        title: 'Hundreds of Propriatory Websites',
        image: 'url placeholder',
        icon: <FaDesktop className="text-2xl" />,
        detail: 'During the time span of 2009 to 2016, I developed a custom boilerplate for a propriatory web CMS was developed which decreased development time to the point where over 250 custom websites were devivered to clients by a small development team of three people.',
        type: ProjectStack.WEB,
        stack: ['Brackets', 'HTML', 'CSS', 'Javascript', 'PHP', 'Illustrator', 'Photoshop', 'jQuery']
    },
]