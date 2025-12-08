import Githubcontributions from "@/components/app-github";
import { Github } from "lucide-react";

export default function Githubsection(){
    return(
        <section className="flex flex-col gap-5 bg-card text-card-foreground transition-colors ease-in-out duration-200 drop-shadow-sm rounded-md p-4">
            <div className="flex gap-3 items-center font-bold">
                <Github className="bg-black text-white rounded-full size-8 p-1.5"/>
                <h2>My Github Contributions</h2>
            </div>
            <div className="h-[28vh] flex items-center justify-center">
                <Githubcontributions/>
            </div>
        </section>
    )
}