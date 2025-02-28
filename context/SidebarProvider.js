// Create a Context for the sidebar
import { createContext, useContext, useState, useEffect } from "react";
import { SidebarItem } from "@/components/sidebar-layout";
import {
  BadgePercent,
  BarChart4,
  Columns3,
  Globe,
  Locate,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  Users,
  FolderKanban,
  Search,
  Inbox,
  ListTodo,
  UsersRound,
} from "lucide-react";
import { createSupabaseClient } from "@/utils/supabase-client";
import { useUser } from "@stackframe/stack";
import { useParams, useRouter } from "next/navigation";


export const SidebarContext = createContext();

export const useSidebar = () => {
    return useContext(SidebarContext);
  };


const SidebarProvider = ({ children }) => {
    const params = useParams();
    const supabase = createSupabaseClient();
    const user = useUser({ or: "redirect" });
    const team = user.useTeam(params.teamId);
    const router = useRouter();

    const [newProjectClicked, setNewProjectClicked] = useState(false);
    const [newProjectLoading, setNewProjectLoading] = useState(false);

    const [projects, setProjects] = useState([]);

    const navigationItems = [
        {
          name: "Overview",
          href: "/",
          icon: Globe,
          type: "item",
        },
        {
          type: "label",
          name: "Management",
        },
        {
          name: "Search",
          icon: Search,
          type: "search",
        },
        {
          name: "Inbox",
          href: "/inbox",
          icon: Inbox,
          type: "item",
        },
        {
          name: "To Do",
          href: "/todo",
          icon: ListTodo,
          type: "item",
        },
        {
          name: "Contacts",
          href: "/contacts",
          icon: UsersRound,
          type: "item",
        },
        {
          type: "label",
          name: "Projects",
        },
      ];
  
    const [navItems, setNavItems] = useState([]);
  
    const getProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, title")
        .eq("team_id", team?.id);
  
      if (error) {
        console.error(error);
        return [];
      }
      return data;
    };
  
    useEffect(() => {
      if (!team) return;
  
      let projectsItems = [];
      getProjects().then((projects) => {
        setProjects(projects)
        projects.forEach((project) => {
          projectsItems.push({
            id: project.id,
            name: project.title,
            href: `/project/${project.id}`,
            icon: FolderKanban,
            type: "project",
          });
        });
  
        setNavItems([
          ...navigationItems,
          ...projectsItems,
          {
            type: "new-project",
          },
          {
            type: "label",
            name: "Settings",
          },
          {
            name: "Configuration",
            href: "/configuration",
            icon: Settings2,
            type: "item",
          },
        ]);
      });
    }, []);

    const handleCreateNewProject = async (projectName) => {
      setNewProjectLoading(true);
      setNewProjectClicked(false);
      if (!projectName) return;
      const { data, error } = await supabase.from("projects").insert({
        title: projectName,
        team_id: team?.id,
        user_id: user?.id,
      }).select("id, title");


      const { data: allProjects, error:allProjectsError } = await supabase
      .from("projects")
      .select("id, title")
      .eq("team_id", team?.id);

  
      if (error) {
        console.error(error);
        return;
      } else {
        console.log("Project created", data);
        setNewProjectLoading(false);
        setNavItems([
          ...navigationItems,
          ...allProjects.map((project) => {
            return {
              id: project.id,
              name: project.title,
              href: `/project/${project.id}`,
              icon: FolderKanban,
              type: "project",
            };
          }),
          {
            type: "new-project",
          },
          {
            type: "label",
            name: "Settings",
          },
          {
            name: "Configuration",
            href: "/configuration",
            icon: Settings2,
            type: "item",
          },
          
        ]);
      }
    };

    const handleDeleteProject = async (projectId) => {
      const { data, error } = await supabase
        .from("projects")
        .delete()
        .eq("id", projectId);
  
      if (error) {
        console.error(error);
        return;
      }
  
      const { data: allProjects, error:allProjectsError } = await supabase
      .from("projects")
      .select("id, title")
      .eq("team_id", team?.id);
  
      setNavItems([
        ...navigationItems,
        ...allProjects.map((project) => {
          return {
            id: project.id,
            name: project.title,
            href: `/project/${project.id}`,
            icon: FolderKanban,
            type: "project",
          };
        }),
        {
          type: "new-project",
        },
        {
          type: "label",
          name: "Settings",
        },
        {
          name: "Configuration",
          href: "/configuration",
          icon: Settings2,
          type: "item",
        },
      ]);
    }

    return (
        <SidebarContext.Provider value={{ navItems, handleCreateNewProject, newProjectClicked, setNewProjectClicked, newProjectLoading, handleDeleteProject }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;