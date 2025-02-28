import React from "react";
import { useProject } from "@/context/ProjectProvider";
import { FolderKanban } from "lucide-react";

type Props = {};

const Title = (props: Props) => {
  const { project } = useProject();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <FolderKanban size={24} className="text-muted-foreground" />
        <h2 className="text-2xl font-bold tracking-tight">{project?.title}</h2>
      </div>
    </div>
  );
};

export default Title;
