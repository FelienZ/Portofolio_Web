'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { dropdownItems, groupItems } from "@/utils/data/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "motion/react"
import useTheme from "@/utils/customTheme"
import { Moon, SunMedium } from "lucide-react"


export function AppSidebar() {
  const location = usePathname()
  const {theme, setTheme} = useTheme()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="font-bold text-sm"><h1>{`Muhammad Rajab Portofolio`.toUpperCase()}</h1></SidebarGroupLabel>
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="mt-5 gap-4 divide-y">
                {groupItems.map((item) => (
                <SidebarMenuItem key={item.title} className="pb-2">
                  <SidebarMenuButton className={`${item.url === location ? 'bg-neutral-900/50 text-white hover:bg-neutral-400' : ''}`} asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              {dropdownItems.map(i => (
                <div key={i.title} className="flex items-center justify-between p-3 rounded-lg bg-card text-card-foreground transition-colors ease-in-out duration-200 inset-shadow-sm w-full">
                    <div className="flex items-center gap-3">
                      <i.icon/>
                      <p>{i.title}</p>
                    </div>
                    <Button onClick={()=>setTheme()} className={`rounded-full transition-colors ease-in-out duration-300 flex w-15 px-1 ${theme === 'dark' ? 'justify-end bg-neutral-700 hover:bg-neutral-800' : 'justify-start bg-neutral-200 hover:bg-neutral-300'}`}>
                    <motion.div
                        className={`size-7 rounded-full transition-colors duration-200 ease-in-out ${theme === 'light' ? 'bg-neutral-300 text-neutral-600' : 'bg-neutral-800 text-white'} items-center justify-center flex my-0`}
                        layout
                        transition={{
                            type: "spring",
                            visualDuration: 0.2,
                            bounce: 0.2,
                        }}
                    >
                      {theme === 'light' ? <SunMedium/> : <Moon/>}
                      </motion.div>
                    </Button>
                </div>
              ))}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}