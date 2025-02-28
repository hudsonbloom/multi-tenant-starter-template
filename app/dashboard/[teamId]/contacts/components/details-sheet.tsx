"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createSupabaseClient } from "@/utils/supabase-client";
import { formatPhoneNumber } from "@/lib/utils";

import { useToast } from "@/hooks/use-toast";

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

import { Building2, User, Mail, Phone } from "lucide-react";

import AllRoles from "@/lib/roles";
import { useContacts } from "@/context/ContactsProvider";

export function DetailsSheet({ crew }: { crew: any }) {
    const { toast } = useToast();
  const supabase = createSupabaseClient();
  const [data, setData] = useState(crew);
//   const { updateContactCrewDetails } = useProject();

  const { updateContactDetails } = useContacts();

  const rolesByDepartment = AllRoles.reduce((acc: any, role) => {
    const department = role.department;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(role);
    return acc;
  }, {});


    const handleSaveChanges = async () => {
      updateContactDetails(data);
      };

      const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setData({ ...data, phone: formattedPhoneNumber });
      };


  return (
    <Sheet>
      <SheetTrigger asChild>
       <div className=" flex items-center">
       <p className="hover:underline cursor-pointer">
          {crew.first_name} {crew.last_name}
          </p>
          {crew.pronouns && <span className="text-[11px] font-normal ml-2">({crew.pronouns})</span>}
       </div>
      </SheetTrigger>
      <SheetContent className="min-w-[500px]">
        <SheetHeader>
          <SheetTitle>
          <Input
              id="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
              className="col-span-3 border-0 shadow-none p-0 text-xl font-bold hover:border cursor-pointer"
            />
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">


          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
              className="col-span-3"
            />
          </div> */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left flex items-center">
            <Building2 size={18} className="mr-2" />
              Company
            </Label>
            <Input
              id="email"
              onChange={(e) => setData({ ...data, company: e.target.value })}
              value={data.company}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left flex items-center">
            <User size={18} className="mr-2" />
              Role
            </Label>
            <div className="col-span-3">
              <select className="border shadow-sm p-2 rounded-sm text-sm w-full" value={data.roles[0]} onChange={(e)=> setData({ ...data, roles: [Number(e.target.value)]})}>
                {Object.keys(rolesByDepartment).map((department) => (
                  <optgroup key={department} label={department + " Department"}>
                    {rolesByDepartment[department].map((role: any) => (
                      <option key={role.id} value={role.id}>
                        {role.title}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left flex items-center">
            <Mail size={18} className="mr-2" />
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
            <Label htmlFor="username" className="text-left flex items-center">
            <Phone size={18} className="mr-2" />
              Phone
            </Label>
            <Input
              id="phone"
              onChange={handlePhoneChange}
              value={data.phone}
              className="col-span-3"
            />
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
