import { Button } from "@/components/ui/button";
import { AchievementData } from "@/utils/data/achievement";
import handleNavigateExternal from "@/utils/navigateExternal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar, SquareArrowOutUpRight, Trophy } from "lucide-react";
import Image from "next/image";
import { Reorder } from "motion/react";
import { useState } from "react";

export default function AchievementsCard() {
  const [items, setItem] = useState(AchievementData);
  return (
    <section className="flex flex-col gap-3 bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-md drop-shadow-sm p-4">
      <h2 className="font-bold flex items-center gap-3">
        <Trophy /> My Achievements
      </h2>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItem}
        className="flex flex-col gap-5 h-[58.5vh] overflow-y-scroll p-3 scrollbar-x-hide [&::-webkit-scrollbar]:w-1.5
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {items.map((i, idx) => (
          <Reorder.Item
            value={i}
            key={i.title}
            className="grid grid-cols-[auto_1fr_auto] max-sm:min-h-40 max-sm:overflow-y-auto [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 max-sm:max-h-40 hover:cursor-grab bg-card hover:bg-neutral-700 hover:text-white text-card-foreground transition-colors ease-in-out duration-200 place-items-center rounded-md border inset-shadow-sm gap-4 p-3"
          >
            <div className="relative size-15 rounded-md">
              <Image
                sizes="100%"
                src={i.imageUrl}
                fill
                alt={`achievement-${idx}`}
                className="p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 max-sm:place-items-start w-full">
              <p className="font-bold text-xs sm:text-sm">{i.title}</p>
              <p className="font-medium text-xs">{i.description}</p>
              <p className="text-[10px] flex items-center gap-2">
                <Calendar /> {i.issuedDate}
              </p>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => handleNavigateExternal(i.url)}
                  className="hover:cursor-pointer"
                >
                  View <SquareArrowOutUpRight />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>View Credentials</p>
              </TooltipContent>
            </Tooltip>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
}
