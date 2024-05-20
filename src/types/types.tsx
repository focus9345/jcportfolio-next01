import { StaticImageData } from 'next/image';

export enum ProjectStack {
    APP = "Application",
    DESIGN = "Design",
    WEB = "Website",
    OTHER = "Other"
}

export type NavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: NavItem[];
}

export type MenuItemWithSubMenuProps = {
    item: NavItem;
    toggleOpen: () => void; 
};

export type WorkItem = {
    id: string;
    title: string;
    image: StaticImageData;
    icon?: JSX.Element;
    detail: string;
    type: ProjectStack;
    stack?: string[];
    repo?: string;
}

export type ProjectIcons = {
    id: string;
    name: string;
    icon: JSX.Element;
}