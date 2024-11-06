import React from "react";
import { useProject } from "@/context/ProjectProvider";

type Props = {};

const Title = (props: Props) => {
  const { project } = useProject();
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-2xl font-bold tracking-tight">{project?.title}</h2>
    </div>
  );
};

export default Title;
