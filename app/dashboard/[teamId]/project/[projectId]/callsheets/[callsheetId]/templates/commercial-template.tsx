import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import { Navigation } from "lucide-react";
import Link from "next/link";
import { Sun } from "lucide-react";

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
import { Input } from "@/components/ui/input";

import EditableText from "../components/editable-text";
import ProductionSection from "../crew-sections/production-section";
import CameraSection from "../crew-sections/camera-section";
import CrewSection from "../crew-sections/crew-section";

type Props = {};

const topLeftProdCrew = [
  {
    role: "Producer",
    name: "Keith Forney",
  },
  {
    role: "Director",
    name: "Hudson Bloom",
  },
  {
    role: "1st AD",
    name: "Ryan Frazee",
  },
  {
    role: "DP",
    name: "Ben Ward",
  },
];

const topRightDetails = [
  {
    label: "Date",
    value: "October 23, 2024",
  },
  {
    label: "Location",
    value: "Basketball Court",
  },
  {
    label: "Address",
    value: "510 Whedbee Street, Fort Collins, CO 80524",
  },
];

const schedule = [
  {
    type: "scene",
    scene: "102",
    pages: "1",
    set: "EXT. ROCK BOTTOM",
    description: "Dialogue Section - Fiat Pulling Out",
    d_n: "D4",
    cast: "1, 2, 3",
    est_timing: "8:30AM - 10:00AM",
    location: "#1 Basketball Court",
  },
  {
    type: "scene",
    scene: "103",
    pages: "1",
    set: "EXT. ROCK BOTTOM",
    description: "Dialogue Section - Fiat Pulling Out",
    d_n: "D4",
    cast: "1, 2, 3",
    est_timing: "8:30AM - 10:00AM",
    location: "#1 Basketball Court",
  },
  {
    type: "scene",
    scene: "104",
    pages: "1",
    set: "EXT. ROCK BOTTOM",
    description: "Dialogue Section - Fiat Pulling Out",
    d_n: "D4",
    cast: "1, 2, 3",
    est_timing: "8:30AM - 10:00AM",
    location: "#1 Basketball Court",
  },
  {
    type: "lunch",
    est_timing: "12:00PM - 1:00PM",
  },
  {
    type: "scene",
    scene: "105",
    pages: "1",
    set: "EXT. ROCK BOTTOM",
    description: "Dialogue Section - Fiat Pulling Out",
    d_n: "D4",
    cast: "1, 2, 3",
    est_timing: "8:30AM - 10:00AM",
    location: "#1 Basketball Court",
  },
  {
    type: "scene",
    scene: "106",
    pages: "1",
    set: "EXT. ROCK BOTTOM",
    description: "Dialogue Section - Fiat Pulling Out",
    d_n: "D4",
    cast: "1, 2, 3",
    est_timing: "8:30AM - 10:00AM",
    location: "#1 Basketball Court",
  },
  {
    type: "scene",
    scene: "107",
    pages: "1",
    set: "EXT. ROCK BOTTOM",
    description: "Dialogue Section - Fiat Pulling Out",
    d_n: "D4",
    cast: "1, 2, 3",
    est_timing: "8:30AM - 10:00AM",
    location: "#1 Basketball Court",
  },
  {
    type: "wrap",
    est_timing: "8:00PM",
  },
];

const cast = [
  {
    id: "1",
    character: "John Doe",
    cast: "John Doe",
    status: "PRINCIPAL",
    pu_sd: "6:15AM",
    hmu_cos: "N/A",
    blk_heh: "N/A",
    set: "8:30AM",
    lose_at: "8:00PM",
    special_instructions: "N/A",
  },
  {
    id: "2",
    character: "Jane Doe",
    cast: "Jane Doe",
    status: "PRINCIPAL",
    pu_sd: "7:30AM",
    hmu_cos: "N/A",
    blk_heh: "N/A",
    set: "8:30AM",
    lose_at: "8:00PM",
    special_instructions: "N/A",
  },
  {
    id: "3",
    character: "John Doe",
    cast: "John Doe",
    status: "PRINCIPAL",
    pu_sd: "SD",
    hmu_cos: "N/A",
    blk_heh: "N/A",
    set: "8:30AM",
    lose_at: "8:00PM",
    special_instructions: "N/A",
  },
];

const productionCrew = [
  {
    id: "1",
    name: "Hudson Bloom",
    role: "Producer",
    call: "7:00AM",
  },
  {
    id: "2",
    name: "Keith Forney",
    role: "Director",
    call: "7:00AM",
  },
];

const cameraCrew = [
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

const soundCrew = [
  {
    id: "1",
    name: "John Doe",
    role: "Sound Mixer",
    call: "7:00AM",
  },
  {
    id: "2",
    name: "Jane Doe",
    role: "Boom Operator",
    call: "7:00AM",
  },
];

const CommercialTemplate = (props: Props) => {
  return (
    // Main Callsheet
    <div className="border border-black h-full bg-white">
      {/* Top Section */}
      <div className="grid grid-cols-8 divide-x divide-black w-full border-b border-black">
        <div className="col-span-2 divide-y divide-black">
          <div className="text-center p-2 space-y-2">
            <h3>LOGO GOES HERE</h3>
            <div className="text-left text-xs">
              <p className="font-bold">Jetblack Film Co.</p>
              <p>2057 Ballyneal Drive</p>
              <p>Fort Collins, CO 80524</p>
            </div>
          </div>

          <div className="py-2">
            <Table>
              <TableBody className="divide-y-0 text-xs">
                {topLeftProdCrew.map((crew, index) => (
                  <TableRow key={index} className="divide-y-0 border-0">
                    <TableCell className="font-bold p-0 uppercase px-1 pr-2">
                      <EditableText initialText={crew.role} />
                    </TableCell>
                    <TableCell className="p-0 w-full">
                      <EditableText initialText={crew.name} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="col-span-4 p-2 text-center space-y-4 content-center">
          <div>
            <h1 className="font-bold text-lg">Untitled Call Sheet</h1>
          </div>

          <div>
            <p className="text-sm">GENERAL CREW CALL</p>
            <p className="text-5xl font-black">7:00 AM</p>
            <p className="text-xs">Please check invidiual call times below</p>
          </div>

          {/* <div className="flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center space-x-2">
              <Navigation size={14} />
              <p className="text-sm font-bold">Basketball Court</p>
            </div>
            <p className="text-sm">
              510 Whedbee Street, Fort Collins, CO 80524
            </p>
          </div> */}
        </div>

        <div className="col-span-2 p-2 space-y-4 text-center">
          <div className="border border-black">
            <p className="font-bold">Tuesday, June 1, 2021</p>
            <p className="font-bold">Day 1 of 2</p>
          </div>

          <div className="space-y-2">
            <Table>
              <TableBody className="text-sm">
                <TableRow>
                  <TableCell className="font-bold p-0 uppercase px-1 pr-2 text-left">
                    BREAKFAST:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    7:30 AM
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold p-0 uppercase px-1 pr-2 text-left">
                    FIRST SHOT:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    9:00 AM
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold p-0 uppercase px-1 pr-2 text-left">
                    LUNCH:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    12:00 PM
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table>
              <TableBody className="text-xs">
                <TableRow>
                  <TableCell className="p-0 uppercase px-1 text-left w-full">
                    SCRIPT COLOR:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right text-emerald-700 font-bold">
                    Green
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="p-0 uppercase px-1 pr-2 text-left w-full">
                    SCHEDULE COLOR:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right text-indigo-700 font-bold">
                    Blue
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Weather Table */}
          {/* <div>
            <Table>
              <TableBody className="divide-y-0 text-xs">
                <TableRow className="divide-y-0 border-0">
                  <TableCell className="font-bold p-0 uppercase px-1 pr-2 text-left">
                    SUNRISE:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    6:00 AM
                  </TableCell>
                </TableRow>
                <TableRow className="divide-y-0 border-0">
                  <TableCell className="font-bold p-0 uppercase px-1 pr-2 text-left">
                    SUNSET:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    8:33 PM
                  </TableCell>
                </TableRow>
                <TableRow className="divide-y-0 border-0">
                  <TableCell className="font-bold p-0 uppercase px-1 pr-2 text-left">
                    TEMP:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    62°- 89°
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-xs">
            Hazy sunshine. High 89F. Winds WSW at 5 to 10 mph.
          </p> */}
        </div>
      </div>

      {/* Call times and notes Section */}
      <div className="grid grid-cols-8 divide-x divide-black w-full border-b border-black">
        {/* <div className="col-span-6 p-2">
          <div>
            <p className="text-2xl">
              <span className="font-bold">GENERAL CREW CALL:</span> 7:00AM
            </p>
            <p className="text-sm">FIRST SHOT: 9:00AM</p>
            <p className="text-sm">WRAP: 6:00PM</p>
            <p className="text-sm">TAIL LIGHTS: 7:00PM</p>
          </div>
        </div> */}

        <div className="col-span-2 p-2 text-xs">
          <p className="font-bold">NEAREST HOSPITAL:</p>
          <Link href="#" className="text-xs underline text-indigo-700">
            510 Whedbee Street, Fort Collins, CO 80524
          </Link>
        </div>

        <div className="col-span-2 space-y-2 divide-y divide-black text-xs">
          <div className="p-2">
            <p className="font-bold">BASE CAMP PARKING:</p>
            <Link href="#" className="text-xs underline text-indigo-700">
              510 Whedbee Street, Fort Collins, CO 80524
            </Link>
          </div>
          <div className="p-2">
            <p className="font-bold">CREW PARKING:</p>
            <Link href="#" className="text-xs underline text-indigo-700">
              510 Whedbee Street, Fort Collins, CO 80524
            </Link>
          </div>
        </div>

        <div className="col-span-2 p-2 space-y-1 text-xs">
          <p className="font-bold">NOTES:</p>
          <p className="text-xs">
            One location all day. Capturing Photo & Video. It will be HOT! Dress
            appropriately for heat & sun all day.{" "}
          </p>
        </div>

        <div className="col-span-2 p-2 space-y-2 text-xs">
          <p className="font-bold">WEATHER:</p>
          <div className="flex space-x-2 items-start">
            <Sun size={32} className="text-yellow-500" />
            <p className="text-xs">
              Hazy sunshine. High 89F. Winds WSW at 5 to 10 mph.
            </p>
          </div>
          <div>
            <Table>
              <TableBody className="divide-y-0 text-xs">
                <TableRow className="divide-y-0 border-0">
                  <TableCell className="font-bold p-0 uppercase pr-2 text-left">
                    SUNRISE:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    6:00 AM
                  </TableCell>
                </TableRow>
                <TableRow className="divide-y-0 border-0">
                  <TableCell className="font-bold p-0 uppercase pr-2 text-left">
                    SUNSET:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    8:33 PM
                  </TableCell>
                </TableRow>
                <TableRow className="divide-y-0 border-0">
                  <TableCell className="font-bold p-0 uppercase pr-2 text-left">
                    TEMP:
                  </TableCell>
                  <TableCell className="p-0 w-full text-right">
                    62°- 89°
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Important Notees Section */}
      <div className="divide-x divide-black w-full text-center flex items-center space-x-4 justify-around font-bold border-b border-black">
        <div className="px-2 text-center flex-auto">
          <p className="text-xs">NO VISITORS WITHOUT PRIOR APPROVAL OF UPM</p>
        </div>

        <div className="px-2 text-center flex-auto">
          <p className="text-xs">SAFETY FIRST</p>
        </div>

        <div className="px-2 text-center flex-auto">
          <p className="text-xs">NO SMOKING ON SET</p>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="divide-x divide-black px-4 py-4  w-full text-center flex items-center space-x-4 justify-around font-bold">
        <div className="w-full text-xs border border-black">
          <Table className="text-black">
            <TableHeader className="px-0">
              <TableRow className="text-xs bg-black divide-x divide-white hover:bg-black">
                <TableHead className="text-white h-0 text-center">
                  SCENE
                </TableHead>
                <TableHead className="text-white h-0 text-center">
                  PAGES
                </TableHead>
                <TableHead className="text-white h-0">
                  SET & DESCRIPTION
                </TableHead>
                <TableHead className="text-white h-0 text-center">
                  D/N
                </TableHead>
                <TableHead className="text-white h-0 text-center">
                  CAST
                </TableHead>
                <TableHead className="text-white h-0">EST. TIMING</TableHead>
                <TableHead className="text-white h-0">LOCATION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((scene, index) => {
                if (scene.type === "scene") {
                  return (
                    <TableRow
                      key={index}
                      className="text-xs font-normal h-0 py-0 "
                    >
                      <TableCell className="font-medium h-0 py-0">
                        {scene.scene}
                      </TableCell>
                      <TableCell className="h-0 py-0">{scene.pages}</TableCell>
                      <TableCell className="text-left h-0 py-0">
                        <div>
                          <p>{scene.set}</p>
                          <p>{scene.description}</p>
                        </div>
                      </TableCell>
                      <TableCell className="h-0 py-0">{scene.d_n}</TableCell>
                      <TableCell className="h-0 py-0">{scene.cast}</TableCell>
                      <TableCell className="h-0 py-0">
                        {scene.est_timing}
                      </TableCell>
                      <TableCell className="h-0 py-0">
                        {scene.location}
                      </TableCell>
                    </TableRow>
                  );
                }

                if (scene.type === "lunch") {
                  return (
                    <TableRow
                      key={index}
                      className="text-xs font-normal h-0 py-0 bg-black/20"
                    >
                      <TableCell colSpan={7} className="font-bold h-0 py-0">
                        LUNCH - {scene.est_timing}
                      </TableCell>
                    </TableRow>
                  );
                }

                if (scene.type === "wrap") {
                  return (
                    <TableRow
                      key={index}
                      className="text-xs font-normal h-0 py-0 bg-black/20"
                    >
                      <TableCell colSpan={7} className="font-bold h-0 py-0">
                        WRAP - {scene.est_timing}
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>

            <TableFooter>
              <TableRow className="bg-white hover:bg-white">
                <TableCell className="text-xs py-1">Total Pages</TableCell>
                <TableCell className="text-xs py-1">4</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>

      {/* Cast Section */}
      <div className="px-4 py-4 w-full">
        <p className="text-[10px] text-right font-normal">
        PU/SD = Pickup/Self Drive | BLK/REH = Blocking/Rehersal
        </p>
        <div className="w-full ml-0 text-xs border border-black">
          <Table className="text-black">
            <TableHeader className="px-0">
              <TableRow className="text-xs bg-black divide-x divide-white hover:bg-black">
                <TableHead className="text-white h-0 text-center">ID</TableHead>
                <TableHead className="text-white h-0 text-center">
                  CHARACTER
                </TableHead>
                <TableHead className="text-white h-0">CAST</TableHead>
                <TableHead className="text-white h-0 text-center">
                  PU/SD
                </TableHead>
                <TableHead className="text-white h-0">HMU/COS</TableHead>
                <TableHead className="text-white h-0">BLK/REH</TableHead>
                <TableHead className="text-white h-0 text-center">
                  SET
                </TableHead>
                <TableHead className="text-white h-0">LOSE @</TableHead>
                <TableHead className="text-white h-0">
                  SPECIAL INSTUCTIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cast.map((scene, index) => {
                return (
                  <TableRow
                    key={index}
                    className="text-xs font-normal h-0 py-0 "
                  >
                    <TableCell className="font-medium h-0 py-0 w-[50px] bg-black/5">
                      {scene.id}
                    </TableCell>
                    <TableCell className="h-0 py-0 text-left">
                      {scene.character}
                    </TableCell>
                    <TableCell className="h-0 py-0 text-left">
                      {scene.cast}
                    </TableCell>

                    <TableCell className="h-0 py-0 w-[70px] text-center bg-black/5">
                      {scene.pu_sd}
                    </TableCell>
                    <TableCell className="h-0 py-0 w-[70px] text-center bg-black/5">
                      {scene.hmu_cos}
                    </TableCell>
                    <TableCell className="h-0 py-0 w-[70px] text-center bg-black/5">
                      {scene.blk_heh}
                    </TableCell>
                    <TableCell className="h-0 py-0 w-[70px] text-center bg-black/5">
                      {scene.set}
                    </TableCell>
                    <TableCell className="h-0 py-0 w-[70px] text-center bg-black/5">
                      {scene.lose_at}
                    </TableCell>
                    <TableCell className="h-0 py-0 text-left w-[250px] bg-black/5">
                      {scene.special_instructions}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Background and Speical Instructions by Department */}
      <div className="px-4 py-4 w-full text-center flex items-center space-x-4 justify-around font-bold">
        <div className="grid grid-cols-2 gap-2 w-full">
          {/* Background Quantity */}
          <div className="border border-black">
            <Table className="text-black">
              <TableHeader className="px-0">
                <TableRow className="text-xs bg-black divide-x divide-white hover:bg-black">
                  <TableHead className="text-white h-0 text-center">
                    QTY
                  </TableHead>
                  <TableHead className="text-white h-0 text-center">
                    BACKGROUND
                  </TableHead>
                  <TableHead className="text-white h-0">CALL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-xs font-normal h-0 py-0 ">
                  <TableCell className="font-medium h-0 py-0 w-[50px] bg-black/5"></TableCell>
                  <TableCell className="h-0 py-0 text-left"></TableCell>
                  <TableCell className="h-0 py-0 text-left"></TableCell>
                </TableRow>
              </TableBody>

              <TableFooter>
                <TableRow className="bg-white hover:bg-white">
                  <TableCell className="text-xs py-1">0</TableCell>
                  <TableCell className="text-xs py-1 text-left">
                    Total Background
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          {/* Special Instructions by Department */}
          <div className="border border-black">
            <Table className="text-black">
              <TableHeader className="px-0">
                <TableRow className="text-xs bg-black divide-x divide-white hover:bg-black">
                  <TableHead colSpan={2} className="text-white h-0 text-left">
                    SPECIAL INSTRUCTIONS BY DEPARTMENT
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-xs font-normal h-0 py-0 ">
                  <TableCell className="h-0 py-1 text-left font-bold">
                    PROPS
                  </TableCell>
                  <TableCell className="h-0 py-1 text-left">
                    Sc 98: books, Elizabeth's Manuscript, Elizabeth's pen,
                    Elizabeth's Shoes, Papers spread out.
                  </TableCell>
                </TableRow>
                <TableRow className="text-xs font-normal h-0 py-0 ">
                  <TableCell className="h-0 py-1 text-left font-bold">
                    COSTUME
                  </TableCell>
                  <TableCell className="h-0 py-1 text-left">
                    Sc 95: Storms Hotel Bathrobe.
                  </TableCell>
                </TableRow>
                <TableRow className="text-xs font-normal h-0 py-0 ">
                  <TableCell className="h-0 py-1 text-left font-bold">
                    SPFX
                  </TableCell>
                  <TableCell className="h-0 py-1 text-left">
                    Sc 97: Fireplace. Sc 98: Fireplace. Sc 99: Fireplace. Sc
                    99A: Fireplace.
                  </TableCell>
                </TableRow>
                <TableRow className="text-xs font-normal h-0 py-0 ">
                  <TableCell className="h-0 py-1 text-left font-bold">
                    PIC VEH
                  </TableCell>
                  <TableCell className="h-0 py-1 text-left">
                    Sc 103: Fiat, Peter's SUV.{" "}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Crew Section */}
      <div className="divide-x divide-white/60 px-4 space-x-4 w-full py-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col space-y-2">
            <CrewSection title="Production" crew={productionCrew} />
            <CrewSection title="Camera" crew={cameraCrew} />
            <CrewSection title="Sound" crew={soundCrew} />
          </div>

          <div className="flex flex-col space-y-2">
            <CrewSection title="Hair and Makeup" crew={productionCrew} />
          </div>

          <div className="flex flex-col space-y-2">
            <CrewSection title="Production Office" crew={productionCrew} />
          </div>
        </div>
      </div>

      {/* Walkies Section */}
      <div className="divide-x divide-white/60 w-full text-center flex items-center space-x-4 justify-around font-medium bg-black/60 text-white">
        <div className="text-center flex-auto">
          <p className="text-xs">WALKIE CHANNELS:</p>
        </div>

        <div className=" text-center flex-auto">
          <p className="text-xs">1 - Production</p>
        </div>

        <div className="text-center flex-auto">
          <p className="text-xs">2 - Open</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">3 - Transpo</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">4 - Open</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">5 - Art</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">6 - Camera</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">7 - Electric</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">8 - Grip</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">9 - Open</p>
        </div>
        <div className="text-center flex-auto">
          <p className="text-xs">10 - Open</p>
        </div>
      </div>
    </div>
  );
};

export default CommercialTemplate;
