'use client';

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import { BadgePercent, BarChart4, Columns3, Globe, Locate, Settings2, ShoppingBag, ShoppingCart, Users, FolderKanban, Search, Inbox, ListTodo, UsersRound } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const navigationItems: SidebarItem[] = [
  {
    name: "Overview",
    href: "/",
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Management',
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
    type: 'label',
    name: 'Projects',
  },
  {
    name: "CSU FYE 2.0",
    href: "/project/123",
    icon: FolderKanban,
    type: "item",
  },
  {
    name: "W21 Blue Credit Union",
    href: "/orders",
    icon: FolderKanban,
    type: "item",
  },
  {
    type: 'label',
    name: 'Settings',
  },
  {
    name: "Configuration",
    href: "/configuration",
    icon: Settings2,
    type: "item",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: 'redirect' });
  const team = user.useTeam(params.teamId);
  const router = useRouter();

  if (!team) {
    router.push('/dashboard');
    return null;
  }

  return (
    <SidebarLayout 
      items={navigationItems}
      basePath={`/dashboard/${team.id}`}
      sidebarTop={<SelectedTeamSwitcher 
        selectedTeam={team}
        urlMap={(team) => `/dashboard/${team.id}`}
      />}
      baseBreadcrumb={[{
        title: team.displayName,
        href: `/dashboard/${team.id}`,
      }]}
    >
      {props.children}
    </SidebarLayout>
  );
}