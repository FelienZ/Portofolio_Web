import { Cpu, GraduationCap, PanelsTopLeft, ShieldCheck } from "lucide-react";
import { StatsItem } from "../types/statsItem";
import { AchievementData } from "./achievement";
import { ToolsData } from "./tools";

export const statsData: StatsItem[] = [
    {
        title:'5th Grade',
        description: 'Undergraduate Student',
        icon: <GraduationCap className="bg-neutral-400 size-8 rounded-md p-1 text-white"/>
    },
    {
        title:AchievementData.length.toString(),
        description: 'Certifications',
        icon: <ShieldCheck className="bg-emerald-400 size-8 rounded-md p-1 text-white"/>
    },
    {
        title:'4',
        description: 'Highlight Projects',
        icon: <PanelsTopLeft className="bg-yellow-400 size-8 rounded-md p-1 text-white"/>
    },
    {
        title:ToolsData.length.toString(),
        description: 'Tech Stack',
        icon: <Cpu className="bg-purple-800 size-8 rounded-md p-1 text-white"/>
    },
]