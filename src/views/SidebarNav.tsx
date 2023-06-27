import {Sidebar, SidebarItem} from "../components/Sidebar/Sidebar.tsx";
import React from "react";

const sidebarItems: SidebarItem[] = [
  { title: 'Card', onClick: () => {} },
  { title: 'Sidebar', onClick: () => {} },
  { title: 'List', onClick: () => {} },
  { title: 'Link', onClick: () => {} },
  { title: 'Button', onClick: () => {} },
  { title: 'Toolbar', onClick: () => {} },
  { title: 'Avatar', onClick: () => {} },
  { title: 'Icon', onClick: () => {} },
  { title: 'Input', onClick: () => {} },
  { title: 'Navbar', onClick: () => {} },
  { title: 'Alert', onClick: () => {} },
  { title: 'Dropdown', onClick: () => {} },
  { title: 'Text', onClick: () => {} },
  { title: 'Collapsible', onClick: () => {} },
  { title: 'Tooltip', onClick: () => {} },
];

export const SidebarNav: React.FC = () => {
  return <>
    <Sidebar items={sidebarItems}/>
  </>
}