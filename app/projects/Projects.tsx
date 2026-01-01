import { Badge } from "@/components/ui/badge";
import { projectData } from "@/utils/data/project";
import handleNavigateExternal from "@/utils/navigateExternal";
import { Book, FolderOpen } from "lucide-react";

export default function MyProjects() {
  return (
    <section className="flex flex-col gap-3  bg-card text-card-foreground transition-colors ease-in-out duration-200 rounded-md drop-shadow-sm p-4">
      <h2 className="font-bold flex items-center gap-2">
        <FolderOpen /> My Projects
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 p-3 inset-shadow-sm rounded-md max-md:h-[50vh] md:max-h-[30vh] scrollbar-hide overflow-y-auto">
        {projectData.map((i, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigateExternal(i.url)}
            className="flex gap-3 border bg-card text-card-foreground ease-in-out hover:cursor-pointer hover:bg-neutral-700 hover:text-white transition-colors duration-200 drop-shadow-sm rounded-md p-3 items-center"
          >
            <Book />
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="font-bold">{i.title}</p>
                <Badge
                  variant={"secondary"}
                  className={`${
                    i.visibility === "public"
                      ? "bg-green-900/70 text-white "
                      : ""
                  }`}
                >
                  {i.visibility}
                </Badge>
              </div>
              <p>{i.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
