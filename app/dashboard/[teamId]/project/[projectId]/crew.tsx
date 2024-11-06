import React from "react";
import { CircleUser } from "lucide-react";

import { Crew, columns } from "@/components/project/crew/crew-columns"

import { CrewTable } from "@/components/project/crew/crew-table-2";

// async function getData(): Promise<Crew[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

export default function CrewPage() {
  // const data = await getData()
  const crew = true;

  if (!crew) {
    return (
      <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <CircleUser className="h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">No crew added</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            You have not added any crew. Add one below.
          </p>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs relative"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r3s7:"
            data-state="closed"
          >
            Add Crew
          </button>
        </div>
      </div>
    );
  }

  return <div>
     <CrewTable columns={columns} data={[]} />
  </div>;
}
