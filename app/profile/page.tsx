'use client'
import About from "./About";
import AchievementsCard from "./Achievements";
import ProfileCard from "./Profilecard";
import StackCard from "./Stackcard";

export default function Profilepage(){
    return(
        <section className="min-h-screen grid xl:grid-cols-[1fr_0.5fr] max-xl:w-screen gap-4">
            <div className="flex flex-col gap-10">
                <ProfileCard/>
                <About/>    
            </div>
            <div className="flex flex-col gap-5">
                <StackCard/>
                <AchievementsCard/>
            </div>
        </section>
    )
}