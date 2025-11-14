'use client'
import Featuredsection from "../Home/Featured";
import Githubsection from "./Github";
import MyProjects from "./Projects";

export default function Projectpage(){
    return(
        <section className="min-h-screen flex flex-col gap-10">
            <Githubsection/>
            <MyProjects/>
            <Featuredsection/>
        </section>
    )
}