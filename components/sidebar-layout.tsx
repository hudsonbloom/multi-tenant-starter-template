"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { UserButton } from "@stackframe/stack";
import { LucideIcon, Menu, Ellipsis } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SearchButton } from "./search";
import { NewProjectButton } from "./new-project-button";

import { useSidebar } from "@/context/SidebarProvider";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";

import { useToast } from "@/hooks/use-toast";

function useSegment(basePath: string) {
  const path = usePathname();
  const result = path.slice(basePath.length, path.length);
  return result ? result : "/";
}

type Item = {
  id: string;
  name: React.ReactNode;
  href: string;
  icon: LucideIcon;
  type: "item";
};

type Sep = {
  type: "separator";
};

type Label = {
  name: React.ReactNode;
  type: "label";
};

type SearchButton = {
  name: React.ReactNode;
  icon: LucideIcon;
  type: "search";
};

type Project = {
  name: React.ReactNode;
  icon: LucideIcon;
  type: "project";
};

type NewProject = {
  type: "new-project";
};

export type SidebarItem =
  | Item
  | Sep
  | Label
  | SearchButton
  | NewProject
  | Project;

function NavItem(props: {
  item: Item;
  onClick?: () => void;
  basePath: string;
}) {
  const segment = useSegment(props.basePath);
  const selected = segment === props.item.href;

  return (
    <Link
      href={props.basePath + props.item.href}
      className={cn(
        buttonVariants({ variant: "ghost", size: "sm" }),
        selected && "bg-muted",
        "flex-grow justify-start text-sm text-zinc-800 dark:text-zinc-300 px-2"
      )}
      onClick={props.onClick}
      prefetch={true}
    >
      <props.item.icon className="mr-2 h-5 w-5" />
      {props.item.name}
    </Link>
  );
}

function ProjectItem(props: {
  item: Item;
  onClick?: () => void;
  basePath: string;
}) {
  const segment = useSegment(props.basePath);
  const selected = segment === props.item.href;
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const { handleDeleteProject } = useSidebar();


  return (
    <>
      <div
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          selected && "bg-muted",
          "flex-grow w-full justify-between text-sm text-zinc-800 dark:text-zinc-300 px-2 group"
        )}
      >
        <Link
          href={props.basePath + props.item.href}
          prefetch={true}
          onClick={props.onClick}
          className="flex items-center w-[80%]"
        >
          <props.item.icon className="mr-2 h-5 w-5" />
          <span className="truncate">{props.item.name}</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="text-muted-foreground hover:text-black"
          >
            <Button variant={"ghost"} className="h-[10px] w-[12px] m-0">
              <Ellipsis className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start">
            <DropdownMenuItem
              onSelect={() =>
                (window.location.href = props.basePath + props.item.href)
              }
            >
              {/* <Link href={props.basePath + props.item.href} prefetch={true} onClick={props.onClick}>View Project</Link> */}
              <span>View Project</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setOpen(true)}>
              <span>Delete Project</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={open} onOpenChange={setOpen}>
          {/* <AlertDialogTrigger>Delete Project</AlertDialogTrigger> */}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                onClick={() => {
                  handleDeleteProject(props.item.id)
                  setOpen(false);
                  toast({
                    title: "Project Deleted",
                    description: "Your project has been successfully deleted.",
                  });
                }}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}

function SidebarContent(props: {
  onNavigate?: () => void;
  sidebarTop?: React.ReactNode;
  basePath: string;
}) {
  const path = usePathname();
  const segment = useSegment(props.basePath);

  const { navItems } = useSidebar();
  const items = navItems;

  return (
    <div className="flex flex-col h-full items-stretch">
      <div className="h-14 flex items-center px-2 shrink-0 mr-10 md:mr-0 border-b">
        {props.sidebarTop}
      </div>

      <div className="flex flex-grow flex-col gap-2 pt-4 overflow-y-auto">
        {items.map((item: any, index: any) => {
          if (item.type === "separator") {
            return <Separator key={index} className="my-2" />;
          } else if (item.type === "item") {
            return (
              <div key={index} className="flex px-2">
                <NavItem
                  item={item}
                  onClick={props.onNavigate}
                  basePath={props.basePath}
                />
              </div>
            );
          } else if (item.type === "project") {
            return (
              <div key={index} className="flex px-2">
                <ProjectItem
                  item={item}
                  onClick={props.onNavigate}
                  basePath={props.basePath}
                />
              </div>
            );
          } else if (item.type === "search") {
            return (
              <div key={index}>
                <SearchButton />
              </div>
            );
          } else if (item.type === "new-project") {
            return (
              <div key={index}>
                <NewProjectButton />
              </div>
            );
          } else {
            return (
              <div key={index} className="flex my-2">
                <div className="flex-grow justify-start text-sm font-medium text-zinc-500 px-2">
                  {item.name}
                </div>
              </div>
            );
          }
        })}

        <div className="flex-grow" />
      </div>
    </div>
  );
}

export type HeaderBreadcrumbItem = { title: string; href: string };

function HeaderBreadcrumb(props: {
  items: SidebarItem[];
  baseBreadcrumb?: HeaderBreadcrumbItem[];
  basePath: string;
}) {
  const { navItems } = useSidebar();
  const items = navItems;

  const segment = useSegment(props.basePath);
  const item = items.find(
    (item: any) => item.type === "item" && item.href === segment
  );
  const title: string | undefined = (item as any)?.name;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {props.baseBreadcrumb?.map((item, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator key={`separator-${index}`} />
          </>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function SidebarLayout(props: {
  children?: React.ReactNode;
  baseBreadcrumb?: HeaderBreadcrumbItem[];
  sidebarTop?: React.ReactNode;
  basePath: string;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const { navItems } = useSidebar();
  const items = navItems;

  return (
    <div className="w-full flex">
      <div className="flex-col border-r w-[240px] h-screen sticky top-0 hidden md:flex">
        <SidebarContent
          items={items}
          sidebarTop={props.sidebarTop}
          basePath={props.basePath}
        />
      </div>
      <div className="flex flex-col flex-grow w-0">
        <div className="h-14 border-b flex items-center justify-between sticky top-0 bg-white dark:bg-black z-10 px-4 md:px-6">
          <div className="hidden md:flex">
            <HeaderBreadcrumb
              baseBreadcrumb={props.baseBreadcrumb}
              basePath={props.basePath}
              items={items}
            />
          </div>

          <div className="flex md:hidden items-center">
            <Sheet
              onOpenChange={(open) => setSidebarOpen(open)}
              open={sidebarOpen}
            >
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] p-0">
                <SidebarContent
                  onNavigate={() => setSidebarOpen(false)}
                  items={items}
                  sidebarTop={props.sidebarTop}
                  basePath={props.basePath}
                />
              </SheetContent>
            </Sheet>

            <div className="ml-4 flex md:hidden">
              <HeaderBreadcrumb
                baseBreadcrumb={props.baseBreadcrumb}
                basePath={props.basePath}
                items={items}
              />
            </div>
          </div>

          <UserButton
            colorModeToggle={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
          />
        </div>
        <div className="flex-grow">{props.children}</div>
      </div>
    </div>
  );
}
