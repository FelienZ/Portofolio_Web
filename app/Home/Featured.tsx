import { Button } from "@/components/ui/button";
import { featuredData } from "@/utils/data/featured";
import handleNavigateExternal from "@/utils/navigateExternal";
import { BookmarkCheck, CalendarFold, Link } from "lucide-react";
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
        className="flex items-center gap-3 md:max-h-[40vh] py-2 overflow-x-auto [&::-webkit-scrollbar]:h-1.5
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {featuredData.map((i, idx) => (
          <div key={idx} className="w-full grid">
            <div className="flex flex-col gap-3 border rounded-sm max-sm:h-[26vh] h-[30vh] max-md:w-[50vw] w-[30vw] xl:w-[20vw] p-2 drop-shadow-sm bg-card">
              <Image
                sizes="100vw"
                width={0}
                height={0}
                src={i.imgUrl}
                alt={`featured-${idx}`}
                className="rounded-sm w-full max-sm:h-[15vh] h-[18vh] border"
              />
              <div className="flex flex-col px-2 gap-2">
                <h3 className="text-sm font-semibold">{i.title}</h3>
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center text-xs gap-3">
                    <CalendarFold className="size-4" />
                    {i.createdAt}
                  </div>
                  <Button
                    variant={"outline"}
                    className="rounded-full size-6"
                    onClick={() => handleNavigateExternal(i.url)}
                  >
                    <Link className="p-0.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
