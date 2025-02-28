import React, { createContext, useState, useContext, useEffect } from "react";
import { createSupabaseClient } from "@/utils/supabase-client";
import { useStackApp, useUser } from "@stackframe/stack";
import { useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { useToast } from "@/hooks/use-toast";

import { LoaderCircle } from "lucide-react";

// Create a new context
export const ProjectContext = createContext();

export const useProject = () => {
  return useContext(ProjectContext);
};

// Create a provider component
export const ProjectProvider = ({ children }) => {
  const { toast } = useToast();
  const params = useParams();
  const app = useStackApp();
  const user = useUser();
  const team = user.selectedTeam;

  const supabase = createSupabaseClient();
  const [loading, setLoading] = useState(true);

  const [project, setProject] = useState({
    title: "",
  });

  const [crew, setCrew] = useState([]);
  const [contacts, setContacts] = useState([]);

  const fetchProjectData = async () => {
    const projectId = params.projectId;
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", projectId);

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setProject(data[0]);
    }
  };

  const fetchCrewData = async () => {
    const projectId = params.projectId;

    const { data, error } = await supabase
      .from("project_crew_list")
      .select("*")
      .eq("project_id", projectId);

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setCrew(data);
    }
  };

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("team_id", team.id);

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setContacts(data);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchProjectData();
    fetchCrewData();
    fetchContacts();

  }, []);

  useEffect(() => {
    if (project.title) {
      setLoading(false);
    }
  }
  , [project]);


  // Crew Database Changes
  const addCrewMember = async (type, crewData) => {
    let crewMember;
    if (type === "from-contact") {
      crewMember = contacts.find((contact) => contact.id === crewData);
    } else {
      crewMember = crewData;
    }

    const { data: contacts_data, error: contacts_error } = await supabase
    .from("contacts")
    .insert([
      {
        name: crewMember.name,
        roles: [crewMember.role_id],
        team_id: team.id,
        type: "crew",
      },
    ]).select()


    const { data: project_crew_list_data, error: project_crew_list_error } =
      await supabase.from("project_crew_list").insert([
        {
          project_id: params.projectId,
          name: crewMember.name,
          role_id: crewData ? crewMember.role_id : null,
          contact_id: contacts_data[0].id
        },
      ]).select();




    if (project_crew_list_error || contacts_error) {
      if (project_crew_list_error) {
        console.error("Error adding crew member:", project_crew_list_error);
      }
      if (contacts_error) {
        console.error("Error adding crew member:", contacts_error);
      }
    } else {

      setCrew([...crew, project_crew_list_data[0]]);
      setContacts([...contacts, contacts_data[0]]);
      toast({
        description: "Crew member added successfully.",
      });
    }
  };

  // Update Crew Role
  const updateCrewRole = async (crewMemberID, newRole, role_id) => {
    console.log(crewMemberID, newRole, role_id);
    const { data, error } = await supabase
      .from("project_crew_list")
      .update({ role: newRole, role_id: role_id })
      .eq("id", crewMemberID)
      .select();

    if (error) {
      console.error("Error updating crew role:", error);
    } else {
      console.log("Crew role updated:", data);
      setCrew((prevCrew) =>
        prevCrew.map((member) =>
          member.id === crewMemberID
            ? { ...member, role: newRole, role_id: role_id }
            : member
        )
      );
      toast({
        description: "Crew role updated successfully.",
      });
    }
  };

  // Update Contact & Crew Details
  const updateContactCrewDetails = async (data) => {
    const { error: contact_error } = await supabase
    .from("contacts")
    .update({
      name: data.name,
      email: data.email,
      phone: data.phone,
    })
    .eq("id", data.contact_id);

  const { error: crew_list_error } = await supabase
    .from("project_crew_list")
    .update({
      name: data.name,
      email: data.email,
      phone: data.phone,
    })
    .eq("contact_id", data.contact_id);

  if (contact_error || crew_list_error) {
    console.error("Error updating crew details:", contact_error);
  } else {
    console.log("Crew details updated successfully");
    setCrew((prevCrew) =>
      prevCrew.map((member) =>
        member.contact_id === data.contact_id
          ? { ...member, name: data.name, email: data.email, phone: data.phone }
          : member
      )
    );
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === data.contact_id
          ? { ...contact, name: data.name, email: data.email, phone: data.phone }
          : contact
      )
    );
    toast({
      description: "Crew details updated successfully.",
    });
  }
    }

  

  return (
    <ProjectContext.Provider
      value={{
        project,
        setProject,
        crew,
        setCrew,
        addCrewMember,
        updateCrewRole,
        contacts,
        updateContactCrewDetails
      }}
    >
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <LoaderCircle size={40} className="animate-spin" />
          <p className="font-bold">Getting the page ready</p>
          </div>
        </div>
        
        ) : <div>{children}</div>}
    </ProjectContext.Provider>
  );
};
