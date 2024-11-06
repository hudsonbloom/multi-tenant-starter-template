"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

import { RolesCombobox } from "./combobox";
import { CrewDetailsSheet } from "./crew-details-sheet";

import AllRoles from "@/lib/roles";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Crew = {
  id: string;
  name: string;
  role: string;
  role_id: number;
  rate: string;
  currency: string;
  email: string;
  phone: string;
  department: string;
};

export const columns: ColumnDef<Crew>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const crew = row.original;
      const initials = crew && crew.name ? crew.name
        .split(" ")
        .map((name) => name.charAt(0))
        .join("") : ""


      return (
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
          </Avatar>
          {/* <Link href="#" className="font-normal hover:underline">{crew.name}</Link> */}
          <CrewDetailsSheet crew={crew} />
        </div>
      );
    },
  },
  // {
  //   accessorKey: "role_id",
  //   header: "Role ID",
  // },
  {
    accessorKey: "role",
    header: "Role",
    id: "role",
    cell: ({ row }) => {
      const crew = row.original;

      return <RolesCombobox crew={crew} forNew={false} />;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const crew = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(crew.id)}
            >
              Edit Contact
            </DropdownMenuItem>
            <DropdownMenuItem>Change Rate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Remove from project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
