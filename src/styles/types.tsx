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