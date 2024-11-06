"use client"
import {useState, useEffect } from "react"
import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { createSupabaseClient } from "@/utils/supabase-client";
import { useUser } from "@stackframe/stack";

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { contactSchema } from "./data/schema"


export default function ContactsPageClient() {
  const supabase = createSupabaseClient();
  const user = useUser();
  const team = user?.selectedTeam;

  const [contacts, setContacts] = useState<any[]>([]);

  useEffect (() => {
    getContacts()
  }
  , [])

  const getContacts = async () => {
    const { data: contacts, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('team_id', team?.id)

    if (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
    setContacts(contacts);
  }

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={contacts} columns={columns} />
      </div>
    </>
  )
}