import { ProjectIcons } from "../types/types";
import {
    FaEyeDropper,
    FaMobile,
    FaTablet,
    FaLaptop,
    FaDesktop,
    FaDatabase,
    FaFileCode,
    FaFileLines,
    FaCube,
    FaCubes,
    FaLaptopCode,
    FaNodeJs,
    FaVuejs,
    FaWordpress,
    FaJoomla,
    FaBriefcase,
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
    SiDocker,
    SiGithub,
    SiPhp,
} from "react-icons/si";
import {
    BsFiletypeDoc,
} from "react-icons/bs";
import {
    GrDocumentImage,
    GrDocumentTest,
    GrDocument
} from "react-icons/gr";
import {
    VscCode
} from "react-icons/vsc";

export const IconsList: ProjectIcons[] = [
    {
        id: 'indev',
        name: 'Work In Progress',
        icon: <FaBriefcase className="text-xl" />
    },
    {
        id: 'document',
        name: 'Generic Document',
        icon: <GrDocument className="text-xl" />
    },
    {
        id: 'testing',
        name: 'Software Testing',
        icon: <GrDocumentTest className="text-xl" />
    },
    {
        id: 'docType',
        name: 'Document File Type',
        icon: <BsFiletypeDoc className="text-xl" />
    },
    {
        id: 'docCode',
        name: 'Document Code',
        icon: <FaFileCode className="text-xl" />
    },
    {
        id: 'docContent',
        name: 'Document Content',
        icon: <FaFileLines className="text-xl" />
    },
    {
        id: 'image',
        name: 'Document Image',
        icon: <GrDocumentImage className="text-xl" />
    },
    {
        id: 'graphicDesign',
        name: 'Eye Dropper',
        icon: <FaEyeDropper className="text-xl" />
    },
    {
        id: 'mobile',
        name: 'Mobile Device',
        icon: <FaMobile className="text-xl" />
    },
    {
        id: 'tablet',
        name: 'Tablet Device',
        icon: <FaTablet className="text-xl" />
    },
    {
        id: 'laptop',
        name: 'Laptop Device',
        icon: <FaLaptop className="text-xl" />
    },
    {
        id: 'desktop',
        name: 'Desktop Device',
        icon: <FaDesktop className="text-xl" />
    },
    {
        id: 'database',
        name: 'Database',
        icon: <FaDatabase className="text-xl" />
    },
    {
        id: 'code',
        name: 'Coding Application',
        icon: <FaLaptopCode className="text-xl" />
    },
    {
        id: 'packageManager',
        name: 'Package Manager',
        icon: <FaCube className="text-xl" />
    },
    {
        id: 'multiplePackages',
        name: 'Multiple Packages',
        icon: <FaCubes className="text-xl" />
    },
    {
        id: 'js',
        name: 'Javascript',
        icon: <SiJavascript className="text-xl" />
    },
    {
        id: 'css',
        name: 'Cascading Style Sheets',
        icon: <SiCss3 className="text-xl" />
    },
    {
        id: 'html',
        name: 'HyperText Markup Language',
        icon: <SiHtml5 className="text-xl" />
    },
    {
        id: 'ts',
        name: 'TypeScript',
        icon: <SiTypescript className="text-xl" />
    },
    {
        id: 'sqlLite',
        name: 'Structured Query Language Lite',
        icon: <SiSqlite className="text-xl" />
    },
    {
        id: 'mySQL',
        name: 'My Structured Query Language',
        icon: <SiMysql className="text-xl" />
    },
    {
        id: 'react',
        name: 'React',
        icon: <SiReact className="text-xl" />
    },
    {
        id: 'vue',
        name: 'Vue',
        icon: <FaVuejs className="text-xl" />
    },
    {
        id: 'node',
        name: 'Node JS',
        icon: <FaNodeJs className="text-xl" />
    },
    {
        id: 'python',
        name: 'Python',
        icon: <SiPython className="text-xl" />
    },
    {
        id: 'php',
        name: 'PHP',
        icon: <SiPhp className="text-xl" />
    },
    {
        id: 'glitch',
        name: 'Glitch Server',
        icon: <SiGlitch className="text-xl" />
    },
    {
        id: 'wordpress',
        name: 'Wordpress',
        icon: <FaWordpress className="text-xl" />
    },
    {
        id: 'joomla',
        name: 'Joomla',
        icon: <FaJoomla className="text-xl" />
    },
    {
        id: 'figma',
        name: 'Figma',
        icon: <SiFigma className="text-xl" />
    },
    {
        id: 'lucid',
        name: 'Lucid Apps',
        icon: <SiLucid className="text-xl" />
    },
    {
        id: 'vsCode',
        name: 'Visual Studio Code',
        icon: <VscCode className="text-xl" />
    },
    {
        id: 'cordova',
        name: 'Apache Cordova',
        icon: <SiApachecordova className="text-xl" />
    },
    {
        id: 'docker',
        name: 'Docker',
        icon: <SiDocker className="text-xl" />
    },
    {
        id: 'github',
        name: 'Github',
        icon: <SiGithub className="text-xl" />
    },
    {
        id: 'adobe',
        name: 'Adobe',
        icon: <SiAdobe className="text-xl" />
    },
    {
        id: 'adobePhotoshop',
        name: 'Adobe Photoshop',
        icon: <SiAdobephotoshop className="text-xl" />
    },
    {
        id: 'adobeIndesign',
        name: 'Adobe Indesign',
        icon: <SiAdobeindesign className="text-xl" />
    },
    {
        id: 'adobeIllustrator',
        name: 'AdobeIllustrator',
        icon: <SiAdobeillustrator className="text-xl" />
    },
    

]