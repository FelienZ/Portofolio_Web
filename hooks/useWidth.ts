import { useEffect, useState } from "react";

export default function useWidth(){
    const [width, setWidth] = useState(0)
    useEffect(()=> {
        function changeWidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", changeWidth)
        return(()=>window.removeEventListener("resize", changeWidth))
    }, [])
    return width
}