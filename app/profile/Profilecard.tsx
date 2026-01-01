import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import handleNavigateExternal from "@/utils/navigateExternal";
import {
  CodeXml,
  Github,
  GraduationCap,
  Instagram,
  Laptop,
  Linkedin,
  Send,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function ProfileCard() {
  return (
    <div className="grid relative bg-card text-card-foreground transition-colors ease-in-out duration-200 drop-shadow-sm rounded-md">
      <div className="upper flex relative h-[35vh] p-3 drop-shadow-sm">
        <Image
          sizes="100%"
          src="/images/my.jpg"
          loading="eager"
          fill
          className="object-cover rounded-t-sm brightness-75"
          alt="waifu-pic-2"
        />
      </div>
      <div className="lower md:px-10 rounded-b-sm">
        <div className="flex max-sm:flex-col items-center gap-4 h-full">
          <Image
            onClick={() => toast.warning("Ini My Gweh Woi")}
            sizes="100%"
            src="/images/takina3.jpg"
            width={200}
            height={200}
            className="object-cover hover:cursor-pointer relative max-sm:absolute sm:left-6 bottom-30 max-sm:bottom-45 p-3 bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-full"
            alt="waifu-pic-3"
          />
          <div className="flex flex-col h-full justify-evenly max-sm:pt-20 p-6 gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold md:text-xl max-md:text-center tracking-[3px]">
                M. Rajab Fadhly Hartawibawa
              </h2>
              <div className="flex max-2xl:grid grid-cols-2 place-items-center sm:items-center gap-1">
                <Badge className="bg-neutral-500 text-white">
                  <CodeXml />
                  Web Developer
                </Badge>
                <Badge className="bg-emerald-500 text-white">
                  <GraduationCap />
                  Undergraduate Student
                </Badge>
                <Badge className="bg-blue-500 text-white">
                  <Laptop />
                  Frontend Developer
                </Badge>
                <Badge className="bg-yellow-500 text-white">
                  <Settings />
                  Backend Developer
                </Badge>
              </div>
            </div>
            <div className="flex items-center w-full justify-between">
              <div className="flex gap-6 items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() =>
                        handleNavigateExternal(
                          "https://www.instagram.com/rajabfadh/"
                        )
                      }
                      variant={"outline"}
                      className="size-8 hover:cursor-pointer bg-white transition-colors duration-200 hover:border-none hover:bg-linear-to-bl hover:text-white hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] rounded-md border-black"
                    >
                      <Instagram />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My Instagram</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() =>
                        handleNavigateExternal("https://github.com/FelienZ")
                      }
                      variant={"outline"}
                      className="size-8 hover:cursor-pointer bg-white transition-colors duration-200 hover:border-none rounded-md hover:bg-neutral-900 hover:text-white border-black"
                    >
                      <Github />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My Github</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() =>
                        handleNavigateExternal(
                          "https://www.linkedin.com/in/muhammad-rajab-fadhly/"
                        )
                      }
                      variant={"outline"}
                      className="size-8 hover:cursor-pointer bg-white transition-colors duration-200 hover:border-none rounded-md dark:hover:bg-blue-800 hover:bg-blue-800 hover:text-white border-black"
                    >
                      <Linkedin />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() =>
                      handleNavigateExternal("https://wa.me/6281229564138")
                    }
                    variant={"outline"}
                    className="w-fit hover:cursor-pointer hover:bg-neutral-900 hover:text-white border-black"
                  >
                    <Send /> Message
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Mail me!</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
