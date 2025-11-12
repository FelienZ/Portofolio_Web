import { Button } from "@/components/ui/button";
import { FeaturedItem } from "../types/data/featuredItem";
import Image from "next/image";

export const featuredData:FeaturedItem[] = [
    {
        url: 'https://kuchi-store.vercel.app/',
        title: 'E-commerce Gadget Web',
        imgUrl: '/images/kuchistore.png',
        icon: <Button className="size-8 rounded-full relative bg-white hover:bg-neutral-100 hover:ring hover:ring-blue-400"><Image src={'/images/tools/react.png'} fill className="p-1" alt=""/></Button>
    },
    {
        url: 'http://localhost:8000',
        title: 'Hotel Booking Web',
        imgUrl: '/images/hotel.png',
        icon: <Button className="size-8 rounded-full relative bg-white hover:bg-neutral-100 hover:ring hover:ring-red-500"><Image src={'/images/tools/laravel.png'} fill className="p-1" alt=""/></Button>
    },
    {
        url: 'http://localhost:3000',
        title: 'Portofolio Web',
        imgUrl: '/images/portofolio.png',
        icon: <Button className="size-8 rounded-full relative bg-white hover:bg-neutral-100 hover:ring hover:ring-neutral-900"><Image src={'/images/tools/next-js.png'} fill className="p-1" alt=""/></Button>
    },
    {
        url: 'https://felienz-resto-app.onrender.com/',
        title: 'Restaurant Booking Web',
        imgUrl: '/images/restoapp.png',
        icon: <Button className="size-8 rounded-full relative bg-white hover:bg-neutral-100 hover:ring hover:ring-neutral-900"><Image src={'/images/tools/expressjs.svg'} fill className="p-1" alt=""/></Button>
    },
]