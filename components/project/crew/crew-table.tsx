import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { useProject } from "@/context/ProjectProvider";
import { AddCrewButton } from "./add-crew-from-contacts";



export function CrewTable() {

  const { crew } = useProject();
  const contactsByDepartment = crew.reduce((acc: any, contact: any) => {
    if (acc[contact.department]) {
      acc[contact.department].push(contact);
    } else {
      acc[contact.department] = [contact];
    }
    return acc;
  }, {});
  const departments = Object.keys(contactsByDepartment);

  return (
    <>
      <div>

        <div className="flex items-center mb-4">
          <AddCrewButton />
        </div>
      {departments.map((department) => (
        <div key={department}>
          <h2>{department}</h2>
          <Table>
            <TableCaption>
              A list of contacts in the {department} department.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="text-right">Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contactsByDepartment[department].map((contact: any) => (
                <TableRow key={contact.name}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.role}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      ))}
      </div>
    </>
  );
}
