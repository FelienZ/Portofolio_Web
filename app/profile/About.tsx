import { User } from "lucide-react";

export default function About(){
    return(
        <section className="flex flex-col gap-3 bg-white rounded-md drop-shadow-sm py-5 px-8">
            <p className="font-bold flex items-center gap-2"><User/> About Me</p>
            <div className="flex flex-col gap-3">
                <p>Hello! I am Rajab, an Informatics Student and Currently Passionate About Exploring Web Development.</p>
                <ul className="flex flex-col gap-1">
                    <li>📚 I am currently learning React, TypeScript and eager to explore more NodeJs Ecosystem Tools</li>
                    <li>⚡ In my free time i express my feelings through things related to visuals and flow.</li>
                    <li>🌱 Soon, i interested to Learn Go, Mobile Development, etc.</li>
                </ul>
            </div>
        </section>
    )
}