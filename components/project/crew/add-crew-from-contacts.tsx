import { useState, useEffect } from "react";
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

import { Separator } from "@/components/ui/separator";

import { useProject } from "@/context/ProjectProvider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AllRoles from "@/lib/roles";

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
  roles: number[];
};

export function AddCrewFromContactsButton() {
  const { contacts, addCrewMember, crew } = useProject();
  const [selectedCrew, setSelectedCrew] = useState<string | null>(null);
  const [customCrew, setCustomCrew] = useState({
    name: "",
    role_id: "",
  });

  const [open, setOpen] = useState(false);

  const crewContacts: Contact[] = contacts.filter(
    (contact: Contact) => contact.type === "crew"
  );
  const groupedContacts = crewContacts.reduce(
    (acc: Record<string, Contact[]>, contact: Contact) => {
      const role = AllRoles.find((r) => r.id === contact.roles[0]);
      const department = role ? role.department : "Unknown";

      console.log('role', contact)

      if (!acc[department]) {
        acc[department] = [];
      }
      acc[department].push(contact);
      return acc;
    },
    {}
  );

  const handleAddCrew = () => {
    if (selectedCrew) {
      addCrewMember("from-contact", selectedCrew);
      setCustomCrew({
        name: "",
        role_id: "",
      })
    } else {
      addCrewMember("new-crew", customCrew);
      setCustomCrew({
        name: "",
        role_id: "",
      })
    }
  };

  console.log(customCrew);

  const rolesByDepartment = AllRoles.reduce((acc: any, role) => {
    const department = role.department;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(role);
    return acc;
  }, {});

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Crew</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Add Crew</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
              <p className="text-sm font-medium mb-2">Add from contacts</p>
              <div className="col-span-2">
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
                            (crewMember: Contact) =>
                              crewMember.id === contact.id
                          );

                          return (
                            <SelectItem
                              key={contact.id}
                              value={contact.id}
                              disabled={isContactInCrew}
                            >
                              <span className="mr-2">{contact.name}</span>
                              <span>({AllRoles.find(role => role.id === contact.roles[0])?.title || "Unknown Role"})</span>
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    );
                  })}
                </SelectContent>
              </Select>
              
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Name
              </Label>
              <Input
                id="name"
                onChange={(e) => {setCustomCrew({...customCrew, name: e.target.value})}}
                value={customCrew.name}
                className="col-span-2"
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Role
              </Label>
              {/* <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(rolesByDepartment).map((department: string) => {
                    return (
                      <SelectGroup key={department}>
                        <SelectLabel>{department} Department</SelectLabel>
                        {rolesByDepartment[department].map((role: any) => {
                          return (
                            <SelectItem key={role.id} value={role.id}>
                              <div>
                                <p>{role.title}</p>
                                <p className="text-muted-foreground text-xs">
                                  {role.department} Department
                                </p>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    );
                  })}
                </SelectContent>
              </Select> */}


                  <select onChange={(e)=> setCustomCrew({...customCrew, role_id: e.target.value })} className="text-sm p-2 shadow-sm rounded-md border border-[#e4e4e7] col-span-2">
                    {Object.keys(rolesByDepartment).map((department: string) => {
                      return (
                        <optgroup key={department} label={department}>
                          {rolesByDepartment[department].map((role: any) => {
                            return (
                              <option key={role.id} value={role.id}>
                                {role.title}
                              </option>
                            );
                          })}
                        </optgroup>
                      );  
                    })}
                  </select>


            </div>




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
