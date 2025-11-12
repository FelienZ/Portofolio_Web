'use client'

import Featuredsection from "./Featured";
import Herosection from "./Hero";
import Statsection from "./Stats";
export default function Mainpage(){
    return(
        <section className="min-h-screen flex flex-col gap-10">
            <Herosection/>
            <Statsection/>
            <Featuredsection/>
        </section>
    )
}