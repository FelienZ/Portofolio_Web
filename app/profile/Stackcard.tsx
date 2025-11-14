import { ToolsData } from "@/utils/data/tools";
import { Layers } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react"
import { useState } from "react";
export default function StackCard(){
    const [loaded, setLoaded] = useState(false);
    return(
        <section className="flex flex-col gap-3 bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-md drop-shadow-sm p-4">
            <p className="font-bold flex items-center gap-3"><Layers/> Dev&apos;s Tools (Technologiaa)</p>
                <div className="inset-shadow-sm bg-card text-card-foreground transition-colors ease-in-out duration-200 border rounded-md p-1 relative overflow-hidden">
                    <motion.div className="flex w-full justify-evenly items-center" animate={{x:['100%', '-100%']}} transition={{duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}>
                        {ToolsData.map((i, idx) => idx < 7 ? (
                            <div key={idx} className="relative stack-marquee size-10">
                                <Image sizes="100%" loading="lazy" onLoad={()=>setLoaded(true)} src={i.url} alt="" className={`p-1 transition-opacity duration-200 ${loaded? 'opacity-100' : 'opacity-0'}`} fill/>
                            </div>
                        ): '')}
                    </motion.div>
                </div>
                <div className="inset-shadow-sm bg-card text-card-foreground transition-colors ease-in-out duration-200 border rounded-md p-1 relative overflow-hidden">
                    <motion.div className="flex w-full justify-evenly items-center" animate={{x:['-100%', '100%']}} transition={{duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse'}}>
                        {ToolsData.map((i, idx) => idx >= 7 ? (
                            <div key={idx} className="relative stack-marquee size-10">
                                <Image sizes="100%" loading="lazy" onLoad={()=>setLoaded(true)} src={i.url} alt="" className={`p-1 transition-opacity duration-200 ${loaded? 'opacity-100' : 'opacity-0'}`} fill/>
                            </div>
                        ): '')}
                    </motion.div>
                </div>
        </section>
    )
}