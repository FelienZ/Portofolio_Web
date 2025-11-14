import { SidebarItem } from "@/utils/types/data/sidebarItem"
import { Home, PanelsTopLeft, SunMedium, User} from "lucide-react"
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
]

export const dropdownItems: Omit<SidebarItem, 'url'>[] = [
    {
        title: 'Theme',
        icon: SunMedium,
    },
]