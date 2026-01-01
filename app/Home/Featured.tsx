import { featuredData } from "@/utils/data/featured";
import handleNavigateExternal from "@/utils/navigateExternal";
import { BookmarkCheck } from "lucide-react";
import Image from "next/image";

export default function Featuredsection() {
  return (
    <section
      className={`flex flex-col max-md:max-h-[50vh] gap-3 bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-md drop-shadow-sm p-4`}
    >
      <h2 className="font-bold flex items-center gap-2">
        <BookmarkCheck /> Highlight Project
      </h2>
      <div
        className="flex overflow-y-auto scrollbar-x-hide px-1 [&::-webkit-scrollbar]:w-1.5
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8 md:max-h-[30vh] min-w-screen p-3">
          {featuredData.map((i, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigateExternal(i.url)}
              className="h-[25vh] flex hover:cursor-pointer relative p-3 brightness-100 bg-white hover:brightness-75 transition-all duration-300 rounded-md drop-shadow-sm"
            >
              <Image
                sizes="100%"
                src={i.imgUrl}
                fill
                className="object-cover rounded-sm"
                alt={`project-${idx}`}
              />
              <div className="flex w-full items-center justify-between self-end z-20">
                <h3 className="font-bold text-neutral-100 bg-neutral-500 px-2 rounded-full">
                  {i.title}
                </h3>
                {i.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
