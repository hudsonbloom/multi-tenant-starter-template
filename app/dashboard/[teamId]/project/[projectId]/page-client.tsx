"use client"
import React from 'react';


export default function ProjectClient() {

  return (
    <>
      {/* <ProjectProvider> */}
        <div className="flex-col">
          <div className="flex-1 space-y-4 p-8 pt-6">
          {/* <Title /> */}


            {/* <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="crew">Crew List</TabsTrigger>
                <TabsTrigger value="talent">Talent List</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="callsheets">Call Sheets</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="pt-4 pb-8">
                  <Separator />
                </div>
              </TabsContent>
              <TabsContent value="crew">
                <div className="pt-4 pb-8">
                  <Separator />
                </div>
                <Crew />
              </TabsContent>
              <TabsContent value="talent">
                <div className="pt-4 pb-8">
                  <Separator />
                </div>
                <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
                  <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <CircleUser className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-semibold">
                      No talent added
                    </h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                      You have not added any talent. Add one below.
                    </p>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs relative"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r3s7:"
                      data-state="closed"
                    >
                      Add Talent
                    </button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="schedule">
                <div className="pt-4 pb-8">
                  <Separator />
                </div>
              </TabsContent>
              <TabsContent value="callsheets">
                <div className="pt-4 pb-8">
                  <Separator />
                  <CallsheetsTable />
                </div>
              </TabsContent>
              <TabsContent value="budget">
                <div className="pt-4 pb-8">
                  <Separator />
                </div>
              </TabsContent>
              <TabsContent value="notes">
                <div className="pt-4 pb-8">
                  <Separator />
                </div>
              </TabsContent>
            </Tabs> */}
          </div>
        </div>
      {/* </ProjectProvider> */}
    </>
  );
}
