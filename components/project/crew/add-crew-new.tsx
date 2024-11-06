import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useProject } from "@/context/ProjectProvider";
import { AddCrewSheet } from "./crew-details-sheet";

type Contact = {
  id: string;
  name: string;
  role: string;
  rate: string;
  currency: string;
  email: string;
  phone: string;
  department: string;
  type: string;
};

export function AddCrewButton() {
  const { contacts, addCrewMember, crew } = useProject();
  const [selectedCrew, setSelectedCrew] = useState<string | null>(null);

  const [open, setOpen] = useState(false);

  const crewContacts: Contact[] = contacts.filter(
    (contact: Contact) => contact.type === "crew"
  );
  const groupedContacts = crewContacts.reduce(
    (acc: Record<string, Contact[]>, contact: Contact) => {
      if (!acc[contact.department]) {
        acc[contact.department] = [];
      }
      acc[contact.department].push(contact);
      return acc;
    },
    {}
  );

  const handleAddCrew = () => {
    if (selectedCrew) {
      addCrewMember(selectedCrew);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Crew from Contacts</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Crew from Contacts</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Select onValueChange={(e) => setSelectedCrew(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select crew" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(groupedContacts).map((department: string) => {
                  return (
                    <SelectGroup key={department}>
                      <SelectLabel>{department} Department</SelectLabel>
                      {groupedContacts[department].map((contact: Contact) => {
                        const isContactInCrew = crew.some(
                          (crewMember: Contact) => crewMember.id === contact.id
                        );

                        return (
                          <SelectItem
                            key={contact.id}
                            value={contact.id}
                            disabled={isContactInCrew}
                          >
                            <span className="mr-2">{contact.name}</span>
                            <span>({contact.role})</span>
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogTrigger>
              <Button onClick={handleAddCrew}>Add to project</Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* 
    <DropdownMenu>
      <DropdownMenuTrigger>Add Crew</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
        <DropdownMenuItem onClick={()=> setOpen(true)}>
          <div>
            <p className="font-medium">Add From Contacts</p>
            <p className="text-xs">
              Quickly import a crew member from you contacts.
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div>
            <p className="font-medium">Add New</p>
            <p className="text-xs">
              Create a new crew member and add them to the project.
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div>
            <p className="font-medium">Import from CSV</p>
            <p className="text-xs">Import data from CSV.</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}
    </div>
  );
}
