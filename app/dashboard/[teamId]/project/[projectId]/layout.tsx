"use client";
import React from "react";
import Title from "./title";
import { ProjectProvider } from "@/context/ProjectProvider";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import { Info, Users, CalendarCheck, FileStack, DollarSign, Notebook, Clapperboard } from "lucide-react";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navMenuItems = [
  { href: "/", name: "Info", icon: Info },
  { href: "/crew", name: "Crew", icon: Users  },
  { href: "/talent", name: "Talent", icon: Users  },
  { href: "/schedules", name: "Schedules", icon: CalendarCheck  },
  { href: "/shotlist", name: "Shot List", icon: Clapperboard  },
  { href: "/callsheets", name: "Callsheets", icon: FileStack  },
  // { href: "/budget", name: "Budget", icon: DollarSign  },
  { href: "/notes", name: "Notes", icon: Notebook  },
];

function useSegment(basePath: string) {
  const path = usePathname();
  const result = path.slice(basePath.length, path.length);
  return result ? result : "/";
}

function NavItem(props: { item: any; onClick?: () => void; basePath: string }) {
  const segment = useSegment(props.basePath);
  const selected = segment === props.item.href;

  console.log("is sleected", selected);
  return (
    <NavigationMenuItem>
      <div className="flex flex-col items-center">
        <Link href={props.basePath + props.item.href} legacyBehavior passHref>
          <NavigationMenuLink
            active={selected}
            className={cn(
              selected ? "text-indigo-700" : "text-muted-foreground",
              "text-sm  font-medium rounded-lg p-2 px-3  transition duration-100 flex items-center"
            )}
          >
            <props.item.icon className="mr-2 h-4 w-4" />
            {props.item.name}
          </NavigationMenuLink>
        </Link>
        <div className={cn(
          selected ? "bg-indigo-600" : "bg-transparent",
          "w-1/2 rounded-t-full h-[2.5px]"
        )}></div>
      </div>
    </NavigationMenuItem>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string; projectId: string }>();
  const user = useUser({ or: "redirect" });
  const team = user.useTeam(params.teamId);
  const project = params.projectId;

  return (
    <ProjectProvider>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Title />

          <div >
            <NavigationMenu>
              <NavigationMenuList>
                {navMenuItems.map((item, index) => (
                  <NavItem
                    key={index}
                    item={item}
                    basePath={`/dashboard/${team.id}/project/${project}`}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Separator />
          </div>


          <div>{children}</div>
        </div>
      </div>
    </ProjectProvider>
  );
}
