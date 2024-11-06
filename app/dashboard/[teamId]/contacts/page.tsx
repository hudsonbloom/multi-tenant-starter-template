import { Metadata } from "next"
import ContactsPageClient from "./page-client"

export const metadata: Metadata = {
  title: "Contacts",
  description: "A task and issue tracker build using Tanstack Table.",
}

export default async function ContactsPage() {

  return (
    <>
      <ContactsPageClient />
    </>
  )
}