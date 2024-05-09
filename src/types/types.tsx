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

export type ProjectItem ={
    id: string;
    title: string;
    image: string;
    icon?: JSX.Element;
    detail: string;
    type: ProjectStack;
    stack?: string[];
}