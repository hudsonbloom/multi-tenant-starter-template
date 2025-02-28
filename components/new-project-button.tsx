"use client";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { createSupabaseClient } from "@/utils/supabase-client";
import { useUser } from "@stackframe/stack";
import { useSidebar } from "@/context/SidebarProvider";

import { Loader2 } from "lucide-react";

export function NewProjectButton() {
  const {
    handleCreateNewProject,
    newProjectClicked,
    setNewProjectClicked,
    newProjectLoading,
  } = useSidebar();
  const supabase = createSupabaseClient();
  const user = useUser();
  const team = user?.selectedTeam;

  const [projectName, setProjectName] = useState<String>("");

  const createNewProject = async () => {
    handleCreateNewProject(projectName);
    setProjectName("");
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      createNewProject();
    }
  };

  return (
    <div className="flex px-2">
      <button
        disabled={newProjectLoading}
        onClick={() => setNewProjectClicked(true)}
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "flex-grow justify-between text-sm text-zinc-800 dark:text-zinc-300 px-2",
          newProjectClicked && "hidden"
        )}
      >
        {!newProjectLoading ? (
          <div className="flex items-center font-normal text-muted-foreground hover:text-black">
            <Plus className="mr-2 h-5 w-5" />
            Project
          </div>
        ) : (
          <div className="flex items-center font-normal text-muted-foreground hover:text-black">
            <Loader2 className="mr-2 h-5 w-5" />
            Creating
          </div>
        )}
      </button>

      {newProjectClicked && (
        <input
          placeholder="Enter Name"
          autoFocus
          onChange={(e) => setProjectName(e.target.value)}
          onKeyDown={handleKeyDown}
          value={projectName}
          onBlur={() =>
            !projectName
              ? setNewProjectClicked(false)
              : handleCreateNewProject()
          }
          className="flex-grow px-2 py-1 border rounded text-sm"
        />
      )}
    </div>
  );
}
