// Create a Context for the sidebar
import { createContext, useContext, useState, useEffect } from "react";
import { createSupabaseClient } from "@/utils/supabase-client";
import { useUser } from "@stackframe/stack";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export const ContactsContext = createContext();

export const useContacts = () => {
  return useContext(ContactsContext);
};

const ContactsProvider = ({ children }) => {
  const params = useParams();
  const supabase = createSupabaseClient();
  const user = useUser({ or: "redirect" });
  const team = user.useTeam(params.teamId);
  const router = useRouter();
  const { toast } = useToast();

  const [contacts, setContacts] = useState([]);
  const [openDetailsSheet, setOpenDetailsSheet] = useState(false);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const { data: contacts, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("team_id", team?.id);

    if (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
    setContacts(contacts);
  };

  // Update Contact & Crew Details
  const updateContactDetails = async (data) => {
    const { error: contact_error } = await supabase
      .from("contacts")
      .update({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        roles: data.roles,
      })
      .eq("id", data.id);

    if (contact_error) {
      console.error("Error updating crew details:", contact_error);
    } else {
      console.log("Crew details updated successfully");
      const { data: contacts, error } = await supabase
        .from("contacts")
        .select("*")
        .eq("team_id", team?.id);

      if (error) {
        console.error("Error fetching contacts:", error);
        return [];
      }
      setContacts(contacts);
      toast({
        description: "Contact details updated successfully.",
      });
    }
  };

  const deleteContacts = async (ids) => {
    console.log('ids', ids) 
    const { error } = await supabase.from("contacts").delete().in("id", ids)

    if (error) {
      console.error("Error deleting contact:", error);
      toast({
        description: "Error deleting contact.",
        status: "error",
      });
    } else {
      console.log("Contact deleted successfully");
      const { data: contacts, error } = await supabase
        .from("contacts")
        .select("*")
        .eq("team_id", team?.id);

      if (error) {
        console.error("Error fetching contacts:", error);
        return [];
      }
      setContacts(contacts);
      toast({
        description: "Contacts deleted successfully.",
      });
    }
}

const addContact = async (data) => {
  const { error } = await supabase.from("contacts").insert([
    {
     ...data,
      team_id: team?.id,
    },
  ]);

  if (error) {
    console.error("Error deleting contact:", error);
    toast({
      description: "Error creating contact.",
      status: "error",
    });
  } else {
    console.log("Contact deleted successfully");
    const { data: contacts, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("team_id", team?.id);

    if (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
    setContacts(contacts);
    toast({
      title: "New Contact: " + data.first_name + " " + data.last_name + " created",
      description: "Contact created successfully.",
    });
  }
}


  return (
    <ContactsContext.Provider value={{ contacts, updateContactDetails, deleteContacts, addContact, openDetailsSheet, setOpenDetailsSheet }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
