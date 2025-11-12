import { SidebarItem } from "@/utils/types/sidebarItem"
import {Contact, Home, PanelsTopLeft, Settings, User} from "lucide-react"
// Menu items.
export const groupItems: SidebarItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "My Projects",
    url: "/projects",
    icon: PanelsTopLeft,
  },
  {
    title: "Contact Me",
    url: "/contact",
    icon: Contact,
  },
]

export const dropdownItems: SidebarItem[] = [
    {
        title: 'My Account',
        icon: User,
        url: '/account'
    },
    {
        title: 'Settings',
        icon: Settings,
        url: '/settings'
    },
]