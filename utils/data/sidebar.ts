import { SidebarItem } from "@/utils/types/data/sidebarItem"
import {Contact, Home, PanelsTopLeft, SunMedium, User} from "lucide-react"
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

export const dropdownItems: Omit<SidebarItem, 'url'>[] = [
    {
        title: 'My Account',
        icon: SunMedium,
    },
]