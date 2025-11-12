import { featuredData } from "@/utils/data/featured";
import handleNavigateExternal from "@/utils/navigateExternal";
import { BookmarkCheck } from "lucide-react";
import Image from "next/image";

export default function Featuredsection(){
    return(
        <section className="flex flex-col gap-3  bg-white rounded-md drop-shadow-sm p-4 overflow-x-scroll">
            <p className="font-bold flex items-center gap-2"><BookmarkCheck/> Highlight Project</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 min-w-screen">
              {featuredData.map((i, idx)=> 
                <div key={idx} onClick={()=>handleNavigateExternal(i.url)} className="h-[25vh] flex hover:cursor-pointer relative p-3 brightness-100 bg-white hover:brightness-75 transition-all duration-300 rounded-md drop-shadow-sm">
                    <Image src={i.imgUrl} fill  className="object-cover rounded-sm" alt=""/>
                    <div className="flex w-full items-center justify-between self-end z-20">
                        <p className="font-bold text-neutral-100 bg-neutral-500 px-2 rounded-full">{i.title}</p>
                        {i.icon}
                    </div>
                </div>
              )}  
            </div>
        </section>
    )
}