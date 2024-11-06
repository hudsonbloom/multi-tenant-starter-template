import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSupabaseClient } from "@/utils/supabase-client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import AllRoles from "@/lib/roles";
import { useProject } from "@/context/ProjectProvider";

export function CrewDetailsSheet({ crew }: { crew: any }) {
  const supabase = createSupabaseClient();
  const [data, setData] = useState(crew);
  const { updateContactCrewDetails } = useProject();

  const rolesByDepartment = AllRoles.reduce((acc: any, role) => {
    const department = role.department;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(role);
    return acc;
  }, {});

  const handleSaveChanges = async () => {
    updateContactCrewDetails(data);
  };


  return (
    <Sheet>
      <SheetTrigger asChild>
        <p className="hover:underline cursor-pointer">{crew.name}</p>
      </SheetTrigger>
      <SheetContent className="min-w-[500px]">
        <SheetHeader>
          <SheetTitle>{crew.name}</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">


          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Email
            </Label>
            <Input
              id="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Phone
            </Label>
            <Input
              id="phone"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              value={data.phone}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Role
            </Label>
            <div>
              <Select>
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
              </Select>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => handleSaveChanges()}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
