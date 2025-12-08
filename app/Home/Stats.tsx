import { Button } from "@/components/ui/button";
import { statsData } from "@/utils/data/stats";
import { ChartLine, CircleArrowOutUpRight } from "lucide-react";
import { Reorder } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Statsection(){
    const [items, setItem] = useState(statsData)
    const router = useRouter()
    return (
        <section className="flex flex-col gap-3 bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-md drop-shadow-sm p-4">
            <h2 className="font-bold flex items-center gap-2"><ChartLine/> My Stats</h2>
            <Reorder.Group axis="x" values={items} onReorder={setItem} className="sm:grid hidden sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {items.map(i=> 
                <Reorder.Item value={i} key={i.title} className="flex flex-col justify-between h-[15vh] border p-3 bg-card text-card-foreground ease-in-out hover:cursor-grab hover:bg-neutral-700 hover:text-white transition-colors duration-200 rounded-md drop-shadow-sm">
                    <div className="flex items-center gap-3">
                        {i.icon}
                        <h3 className="font-bold">{i.title}</h3>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p>{i.description}</p>
                        <Button onClick={()=>router.push('/profile')} className="bg-neutral-400 border size-8 hover:bg-neutral-800 border-neutral-600"><CircleArrowOutUpRight/></Button>
                    </div>
                </Reorder.Item>
              )}  
            </Reorder.Group>
            <Reorder.Group axis="y" values={items} onReorder={setItem} className="sm:hidden grid gap-3">
              {items.map(i=> 
                <Reorder.Item value={i} key={i.title} className="flex flex-col justify-between h-[15vh] border p-3 bg-card text-card-foreground ease-in-out hover:cursor-grab hover:bg-neutral-700 hover:text-white transition-colors duration-200 rounded-md drop-shadow-sm">
                    <div className="flex items-center gap-3">
                        {i.icon}
                        <p className="font-bold">{i.title}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p>{i.description}</p>
                        <Button onClick={()=>router.push('/profile')} className="bg-neutral-400 border size-8 hover:bg-neutral-800 border-neutral-600"><CircleArrowOutUpRight/></Button>
                    </div>
                </Reorder.Item>
              )}  
            </Reorder.Group>
        </section>
    )
}