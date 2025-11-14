import { Button } from "@/components/ui/button";
import { AchievementData } from "@/utils/data/achievement";
import handleNavigateExternal from "@/utils/navigateExternal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar, SquareArrowOutUpRight, Trophy } from "lucide-react";
import Image from "next/image";
import { Reorder } from "motion/react";
import { useState } from "react";

export default function AchievementsCard(){
    const [items, setItem] = useState(AchievementData)
    return(
        <section className="flex flex-col gap-3 bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-md drop-shadow-sm p-4">
            <p className="font-bold flex items-center gap-3"><Trophy/> My Achievements</p>
            <Reorder.Group axis="y" values={items} onReorder={setItem} className="flex flex-col gap-5 h-[59vh] overflow-y-scroll">
                {items.map((i)=> (
                    <Reorder.Item value={i} key={i.title} className="grid grid-cols-[auto_1fr_auto] hover:cursor-grab bg-card text-card-foreground transition-colors ease-in-out duration-200 place-items-center rounded-md border inset-shadow-sm gap-4 p-3">
                        <div className="relative size-12 rounded-md">
                            <Image src={i.imageUrl} fill alt="" className="p-1 rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 place-self-start">
                            <p className="font-bold text-sm">{i.title}</p>
                            <p className="font-medium text-xs">{i.description}</p>
                            <p className="text-[10px] flex items-center gap-2">
                                <Calendar/> {i.issuedDate}
                            </p>
                        </div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={()=>handleNavigateExternal(i.url)}>View <SquareArrowOutUpRight/></Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p>View Credentials</p>
                            </TooltipContent>
                        </Tooltip>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </section>
    )
}