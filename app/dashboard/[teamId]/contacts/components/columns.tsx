"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "../data/data";
import { Contact } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Building2, User, Phone, Mail, Link, Cog } from "lucide-react";
import {cn} from "@/lib/utils";

import { DetailsSheet } from "./details-sheet";
import { useContacts } from "@/context/ContactsProvider";

import AllRoles from "@/lib/roles";



export const columns: ColumnDef<Contact>[] = [
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
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    enableGlobalFilter: true, // disable global filtering for this column
    accessorFn: row => `${row.first_name} ${row.last_name}`,
    // sortingFn: (rowA: any, rowB: any, columnId) => {
    //   return rowA.original.first_name - rowB.original.first_name
    // },
    sortDescFirst: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const crew = row.original;
      const fullName = `${crew.first_name} ${crew.last_name}`;
      const initials =
        crew && crew.first_name
          ? fullName
              .split(" ")
              .map((name) => name.charAt(0))
              .join("")
          : "";

  

      return (
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex items-center space-x-4">
              <Avatar className="w-8 h-8">
                {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                <AvatarFallback className="text-[10px]">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <span className="max-w-[300px] truncate font-medium">
                  <DetailsSheet crew={row.original} />
                </span>
                <p className="text-xs">{row.original.phone}</p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-[300px]">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="text-[12px]">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div>
                <span className="max-w-[300px] truncate font-medium">
                  {fullName}
                </span>
                <p className="text-xs">{row.original.phone}</p>
              </div>

              <div>
                <p className="text-muted-foreground text-xs pb-2">Details</p>
                <div className="grid grid-cols-2 gap-y-4">
                  <span className="text-xs font-medium col-span-1 flex items-center">
                    <Building2 size={14} className="mr-2" /> Company:
                  </span>
                  <span className="text-xs col-span-1">
                    {row.original.company}
                  </span>

                  <span className="text-xs font-medium col-span-1 flex items-center">
                    <User size={14} className="mr-2" /> Role:
                  </span>
                  <span className="text-xs col-span-1">
                    {
                      AllRoles.find((role) =>
                        row.original.roles.includes(role.id)
                      )?.title
                    }
                  </span>

                  <span className="text-xs font-medium col-span-1 flex items-center">
                    <Phone size={14} className="mr-2" /> Phone:
                  </span>
                  <span className="text-xs col-span-1">
                    {row.original.phone}
                  </span>

                  <span className="text-xs font-medium col-span-1 flex items-center truncate">
                    <Mail size={14} className="mr-2" /> Email:
                  </span>
                  <span className="text-xs col-span-1">
                    {row.original.email}
                  </span>

                  <span className="text-xs font-medium col-span-1 flex items-center truncate">
                    <Link size={14} className="mr-2" /> Website:
                  </span>
                  <span className="text-xs col-span-1">
                    {row.original.website}
                  </span>

                  <span className="text-xs font-medium col-span-1 flex items-center truncate">
                    <Cog size={14} className="mr-2" /> Department:
                  </span>
                  <span className="text-xs col-span-1">
                    {
                      AllRoles.find((role) =>
                        row.original.roles.includes(role.id)
                      )?.department
                    }
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
    cell: ({ row }) => {


      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-muted-foreground">{row.original.company}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "role",
    enableGlobalFilter: true, // disable global filtering for this column
    accessorFn: row => {
      const role = AllRoles.find((role) =>
        row.roles.includes(role.id)
      );
      const role_title = role ? role.title : "N/A";
      return role_title
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = AllRoles.find((role) =>
        row.original.roles.includes(role.id)
      );
      const role_title = role ? role.title : "N/A";

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-muted-foreground">{role_title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {

      const getColor = (type: string) => {
        switch (type) {
          case "personal":
            return "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-100";
          case "talent":
            return "bg-emerald-100 border border-emerald-300 text-emerald-700 hover:bg-emerald-100";
          case "crew":
            return "bg-indigo-100 border border-indigo-300 text-indigo-700 hover:bg-indigo-100";
            case "customer":
            return "bg-yellow-100 border border-yellow-300 text-yellow-700 hover:bg-yellow-100";
          default:
            return "bg-indigo-100 border border-indigo-300 text-indigo-700 hover:bg-indigo-100";
        }
      }


      return (
        <div className="flex space-x-2">
          <Badge className={cn(
            getColor(row.original.type),
            "capitalize shadow-none rounded-full"
          )}>{row.original.type}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate text-muted-foreground">{row.original.email}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "department",
    accessorFn: row => {
      const role = AllRoles.find((role) =>
        row.roles.includes(role.id)
      );
      const department = role ? role.department : "Unknown";
      return department
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
    cell: ({ row }) => {
      const role = AllRoles.find((role) =>
        row.original.roles.includes(role.id)
      );
      const department = role ? role.department : "Unknown";

      return (
        <div className="flex space-x-2">
          <Badge variant={"outline"} className="rounded-full">{department}</Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
