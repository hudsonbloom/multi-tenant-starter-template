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
};

const CameraSection = (props: Props) => {
  const crew = [
    {
      id: "1",
      name: "Ben Ward",
      role: "Director of Photography",
      call: "7:00AM",
    },
    {
      id: "2",
      name: "Gabby Jagoras",
      role: "1st AC",
      call: "7:00AM",
    },
  ];

  return (
    <div className="border border-black">
      <div className="bg-black/50 text-center">
        <p className="uppercase text-white text-xs">Camera</p>
      </div>
      <Table className="text-black text-[10px]">
        <TableHeader className="px-0">
          <TableRow className="text-xs bg-black divide-x divide-white hover:bg-black">
            <TableHead className="text-white h-0 text-center">ID</TableHead>
            <TableHead className="text-white h-0 text-center">TITLE</TableHead>
            <TableHead className="text-white h-0">NAME</TableHead>
            <TableHead className="text-white h-0 text-center">CALL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crew.map((crewMember) => (
            <TableRow key={crewMember.id}>
              <TableCell className="h-0 py-0">{crewMember.id}</TableCell>
              <TableCell className="h-0 py-0">{crewMember.role}</TableCell>
              <TableCell className="h-0 py-0">{crewMember.name}</TableCell>
              <TableCell className="h-0 py-0">{crewMember.call}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CameraSection;
