'use client'
import {
  Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import GithubData from "@/utils/fetchContributions";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Githubcontributions = () => {
const [isLoading, setIsLoading] = useState<boolean>(false)
const contribution = GithubData({setIsLoading})
/* function filterCurrentYear(data: Activity[]): Activity[] {
  const thisYear = new Date().getFullYear().toString(); // mis. '2025'
  return data.filter(item => item.date.startsWith(thisYear));
} */
  return (
  isLoading ? (
    <Button variant="outline" disabled className="w-fit place-self-center">
        <Spinner className="text-green-500"/>
        Please wait
    </Button>
  ) : (
    <TooltipProvider>
    <ContributionGraph data={/* filterCurrentYear */(contribution)} /* blockMargin={6} blockSize={16} fontSize={14} */>
      <ContributionGraphCalendar className="py-3 [&::-webkit-scrollbar]:h-1.5
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  className={cn(
                    'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                    'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                    'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                    'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                    'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                )}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{activity.date}</p>
              <p>{activity.count} contributions</p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
         <ContributionGraphTotalCount>
        {({ totalCount, year }) => (
          <div className="flex items-center justify-end w-full gap-2">
            <span className="text-muted-foreground text-sm">Year {year}:</span>
            <Badge variant="secondary">
              {totalCount.toLocaleString()} contributions
            </Badge>
          </div>
        )}
      </ContributionGraphTotalCount>
      </ContributionGraphFooter>
    </ContributionGraph>
  </TooltipProvider>)
  )
};

export default Githubcontributions;
