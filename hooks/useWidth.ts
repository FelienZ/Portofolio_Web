"use client"
import { useEffect, useState } from "react";

export default function useWidth(){
    const [width, setWidth] = useState(0)
    useEffect(()=> {
        function changeWidth(){
        if(typeof window !== undefined){
            setWidth(window.innerWidth)
        }
        }
        changeWidth()
        window.addEventListener("resize", changeWidth)
        return(()=>window.removeEventListener("resize", changeWidth))
    }, [])
    return width
}