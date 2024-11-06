"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import AllRoles from "@/lib/roles";

import { useProject } from "@/context/ProjectProvider";

export function RolesCombobox({ crew, forNew }: { crew: any, forNew: boolean }) {
  const { updateCrewRole } = useProject();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState({
    title: "",
    id: 0,
    description: "",
    department: ""
  });

  React.useEffect(() => {
    const foundRole = AllRoles.find((role) => role.id === crew.role_id);
    const foundDescription = foundRole?.description;
    setValue({
      title: foundRole ? foundRole.title : "",
      id: crew.role_id,
      description: foundDescription ? foundDescription : "",
      department: foundRole ? foundRole.department : "",
    })
  }
    , [])

  const updateRole = (role: any) => {
    if (forNew) {
      setValue(role);
    } else {
      updateCrewRole(crew.id, role.title, role.id);
      setValue(role);
    }
  }


    const rolesByDepartment = AllRoles.reduce((acc:any, role) => {
        const department = role.department;
        if (!acc[department]) {
            acc[department] = [];
        }
        acc[department].push(role);
        return acc;
    }, {});





  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[300px] truncate border-white shadow-none hover:border-[#e4e4e7] hover:bg-white"
        >
          {value.title
            ? value.title
            : "Select role..."}

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search roles..." />
          <CommandList>
            <CommandEmpty>No role found.</CommandEmpty>
            {Object.keys(rolesByDepartment).map((department) => (
                <CommandGroup key={department} heading={department + " Department"}>
                    {rolesByDepartment[department].map((role: any) => (
                        <CommandItem
                            key={role.id}
                            value={role.title}
                            onSelect={(currentValue) => {
                                // setValue(currentValue === value ? "" : currentValue);
                                updateRole(role)
                                setOpen(false);
                            }}
                        >
                            <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    value === role ? "opacity-100" : "opacity-0"
                                )}
                            />
                            <div>
                            <p className="font-medium">{role.title}</p>
                            <p className="text-[10px] text-muted-foreground">{department} Department</p>
                            </div>
                        </CommandItem>
                    ))}
                </CommandGroup>
            ))}
            {/* <CommandGroup heading="Suggestions">
              {AllRoles.map((role) => (
                <CommandItem
                  key={role.id}
                  value={role.title}
                  onSelect={(currentValue) => {
                    // setValue(currentValue === value ? "" : currentValue);
                    setValue(role)
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === role ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {role.title}
                </CommandItem>
              ))}
            </CommandGroup> */}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
