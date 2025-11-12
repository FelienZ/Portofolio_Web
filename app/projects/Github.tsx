import Githubcontributions from "@/components/app-github";
import { Github } from "lucide-react";

export default function Githubsection(){
    return(
        <section className="flex flex-col gap-5 bg-white drop-shadow-sm rounded-md p-4">
            <div className="flex gap-3 items-center font-bold">
                <Github className="bg-black text-white rounded-full size-8 p-1.5"/>
                <p>My Github Contributions</p>
            </div>
            <div className="h-[22vh] flex items-center justify-center">
                <Githubcontributions/>
            </div>
        </section>
    )
}