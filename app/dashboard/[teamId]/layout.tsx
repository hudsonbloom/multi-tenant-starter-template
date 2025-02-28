"use client";
import SidebarProvider from "../../../context/SidebarProvider";

import SidebarLayout, { SidebarItem } from "../../../components/sidebar-layout";
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
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
import { useParams, useRouter } from "next/navigation";

const navigationItems: SidebarItem[] = [
  {
    id: "overview",
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
    id: "inbox",
    name: "Inbox",
    href: "/inbox",
    icon: Inbox,
    type: "item",
  },
  {
    id: "todo",
    name: "To Do",
    href: "/todo",
    icon: ListTodo,
    type: "item",
  },
  {
    id: "contacts",
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

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: "redirect" });
  const team = user.useTeam(params.teamId);
  const router = useRouter();


  if (!team) {
    router.push("/dashboard");
    return null;
  }

  return (
    <SidebarProvider>
      <SidebarLayout
        basePath={`/dashboard/${team.id}`}
        sidebarTop={
          <SelectedTeamSwitcher
            selectedTeam={team}
            urlMap={(team) => `/dashboard/${team.id}`}
          />
        }
        baseBreadcrumb={[
          {
            title: team.displayName,
            href: `/dashboard/${team.id}`,
          },
        ]}
      >
        {props.children}
      </SidebarLayout>
    </SidebarProvider>
  );
}
