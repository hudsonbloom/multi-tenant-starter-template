"use client";

import { useState } from "react";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { formatPhoneNumber } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


import { ChevronsUpDown } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import AllRoles from "@/lib/roles";

import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

import { useContacts } from "@/context/ContactsProvider";
import { DialogClose } from "@radix-ui/react-dialog";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const {addContact } = useContacts();
  const [newContact, setNewContact] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone: "",
    roles: [],
    website: "",
    type: "personal",
    pronouns: "",
  });

  const rolesByDepartment = AllRoles.reduce((acc: any, role) => {
    const department = role.department;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(role);
    return acc;
  }, {});

  const handleCreateContact = async () => {
    if (!newContact.first_name || !newContact.last_name) return
    addContact(newContact);
    setTimeout(() => {
      setNewContact({
        first_name: "",
        last_name: "",
        company: "",
        email: "",
        phone: "",
        roles: [],
        website: "",
        type: "personal",
        pronouns: "",
      });
    }, 2000);
  }


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewContact({ ...newContact, phone: formattedPhoneNumber });
  };


  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          // value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={e => table.setGlobalFilter(e.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("department") && (
          <DataTableFacetedFilter
            column={table.getColumn("department")}
            title="Department"
            options={statuses}
          />
        )}
        {/* {table.getColumn("roles") && (
          <DataTableFacetedFilter
            column={table.getColumn("roles")}
            title="Priority"
            options={priorities}
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className="mr-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto hidden h-8 lg:flex"
            >
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Create New Contact</DialogTitle>
              {/* <DialogDescription>
                Create a new contact for your team.
              </DialogDescription> */}
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="items-center gap-4">
                <Label htmlFor="first_name" className="text-right">
                  First Name
                </Label>
                <Input
                  id="first_name"
                  placeholder="Type the person's first name"
                  value={newContact.first_name}
                  onChange={(e) =>
                    setNewContact({ ...newContact, first_name: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="items-center gap-4">
                <Label htmlFor="last_name" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="last_name"
                  placeholder="Type the person's last name"
                  value={newContact.last_name}
                  onChange={(e) =>
                    setNewContact({ ...newContact, last_name: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="tems-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Type their email address"
                  value={newContact.email}
                  onChange={(e) =>
                    setNewContact({ ...newContact, email: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>

              <div className="tems-center gap-4">
                <Label htmlFor="website" className="text-right">
                  Contact Type
                </Label>
                <select
                  className="border shadow-sm p-2 rounded-sm text-sm w-full"
                  onChange={(e) =>
                    setNewContact({ ...newContact, type: e.target.value })
                  }
                >
                  <option value="personal">Personal</option>
                  <option value="crew">Crew</option>
                  <option value="talent">Talent</option>
                  <option value="customer">Customer</option>
                </select>
              </div>

              <div className="tems-center gap-4 col-span-2">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <select
                  className="border shadow-sm p-2 rounded-sm text-sm w-full"
                  value={newContact.roles[0]}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      roles: [Number(e.target.value)],
                    })
                  }
                >
                  <option>Select a role</option>
                  {Object.keys(rolesByDepartment).map((department) => (
                    <optgroup
                      key={department}
                      label={department + " Department"}
                    >
                      {rolesByDepartment[department].map((role: any) => (
                        <option key={role.id} value={role.id}>
                          {role.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="tems-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Company name"
                  value={newContact.company}
                  onChange={(e) =>
                    setNewContact({ ...newContact, company: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>

              <div className="tems-center gap-4">
                <Label htmlFor="website" className="text-right">
                  Website
                </Label>
                <Input
                  id="website"
                  placeholder="example.com"
                  value={newContact.website}
                  onChange={(e) =>
                    setNewContact({ ...newContact, website: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>

              <div className="items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="123-456-7890"
                  value={newContact.phone}
                  onChange={handlePhoneChange}
                  className="col-span-3"
                />
                
              </div>
            </div>

            <Separator />
            <Collapsible>
              <CollapsibleTrigger>
                <div className="flex items-center space-x-4 hover:bg-black/5 transition duration-150 rounded-sm px-2 py-2">
                <p className="font-medium">Additional Information</p>
                <ChevronsUpDown className="h-4 w-4" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="items-center gap-4 col-span-2">
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="message-2">Notes</Label>
                      <Textarea
                        placeholder="Type your message here."
                        id="message-2"
                      />
                    </div>
                  </div>

                  <div className="items-center gap-4 col-span-2">
                    <Label htmlFor="pronouns" className="text-right">
                      Pronouns
                    </Label>
                    <Input
                      id="pronouns"
                      placeholder="They/Them, She/Her, He/Him"
                      value={newContact.pronouns}
                      onChange={(e) =>
                        setNewContact({
                          ...newContact,
                          pronouns: e.target.value,
                        })
                      }
                      className="col-span-3"
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <DialogFooter>
             <DialogClose asChild>
             <Button onClick={()=> handleCreateContact()} disabled={
                !newContact.first_name ||
                !newContact.last_name 
              }>Save changes</Button>
             </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
