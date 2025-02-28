import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  crew: any;
  title: string;
};

const CrewSection = (props: Props) => {

  return (
    <div className="border border-black">
      <div className="bg-black/50 text-center">
        <p className="uppercase text-white text-xs">{props.title}</p>
      </div>
      <Table className="text-black text-[10px]">
        <TableHeader className="px-0 ">
          <TableRow className="bg-black divide-x divide-white hover:bg-black text-[10px]">
            <TableHead className="text-white h-0 text-center">ID</TableHead>
            <TableHead className="text-white h-0 text-center">TITLE</TableHead>
            <TableHead className="text-white h-0">NAME</TableHead>
            <TableHead className="text-white h-0 text-center">CALL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.crew.map((crewMember: any) => (
            <TableRow key={crewMember.id}>
              <TableCell className="h-0 py-0">{crewMember.id}</TableCell>
              <TableCell className="h-0 py-0">{crewMember.role}</TableCell>
              <TableCell className="h-0 py-0">{crewMember.name}</TableCell>
              <TableCell className="h-0 py-0 text-center">{crewMember.call}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CrewSection;
