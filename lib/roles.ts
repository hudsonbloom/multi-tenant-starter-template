
const Camera = [
  { id: 1, title: "Director of Photography (DP)", department: "Camera", description: "Head of the camera department, responsible for the visual look and feel of the film in collaboration with the director." },
  { id: 2, title: "Camera Operator", department: "Camera", description: "Operates the camera under the DP's direction, framing and composing shots." },
  { id: 3, title: "1st Assistant Camera (1st AC)", department: "Camera", description: "Maintains focus during shots, manages camera settings, and handles lenses and other critical gear." },
  { id: 4, title: "2nd Assistant Camera (2nd AC)", department: "Camera", description: "Prepares camera setups, marks actors' positions, operates the clapperboard, and logs footage." },
  { id: 5, title: "Digital Imaging Technician (DIT)", department: "Camera", description: "Manages digital footage, ensures proper exposure and color, and works closely with post-production." },
  { id: 6, title: "Loader", department: "Camera", description: "Responsible for managing and loading film (for film shoots) or digital cards, ensuring footage is properly stored and logged." },
  { id: 7, title: "Steadicam Operator", department: "Camera", description: "Operates the Steadicam rig for smooth, stabilized shots and often coordinates with the DP and camera operator." },
  { id: 8, title: "Camera Trainee / Utility", department: "Camera", description: "Assists with general camera department duties, learning from the 2nd AC and helping with various tasks." },
  { id: 9, title: "Motion Control Operator", department: "Camera", description: "Controls robotic or motion-controlled rigs for precise, repeatable camera movements, often used in VFX-heavy projects." },
  { id: 10, title: "Aerial Cinematographer", department: "Camera", description: "Operates drones or other aerial rigs for capturing shots from the air, typically requiring a special license." },
  { id: 11, title: "Camera Car Operator", department: "Camera", description: "Manages the camera rig on vehicles, often for tracking shots, working closely with the stunt and camera teams." },
  { id: 12, title: "Video Assist Operator", department: "Camera", description: "Sets up monitors and playback systems, enabling instant review of shots for the director and DP." },
  { id: 13, title: "Underwater Camera Operator", department: "Camera", description: "Operates camera equipment in underwater environments, requiring specialized skills and gear." },
  { id: 14, title: "3D Rig Technician", department: "Camera", description: "Manages 3D camera setups and alignment, ensuring depth and parallax are correctly captured in stereoscopic films." },
  { id: 15, title: "Gimbal Operator", department: "Camera", description: "Operates gimbal stabilizers (e.g., Ronin, Movi) for smooth shots, often handheld or attached to various mounts." },
  { id: 16, title: "Crane / Jib Operator", department: "Camera", description: "Operates crane or jib arms to achieve dynamic, elevated shots, typically in close coordination with the DP." },
  { id: 17, title: "Digital Loader", department: "Camera", description: "Manages data workflow on digital sets, ensuring footage is transferred and backed up properly." },
  { id: 18, title: "Remote Head Technician", department: "Camera", description: "Manages remote-controlled camera heads, usually for cranes or other rigs requiring remote operation." },
  { id: 19, title: "Video Split Operator", department: "Camera", description: "Sets up systems for multi-camera shoots, allowing simultaneous feeds from each camera." },
  { id: 20, title: "Camera Prep Technician", department: "Camera", description: "Works in rental houses or studios to prep and maintain camera equipment before it goes on set." }
];



const Grip = [
  {
    id: 21,
    title: "Key Grip",
    department: "Grip",
    description:
      "Department head, responsible for coordinating the grip team, rigging setups, and supporting the DP’s vision.",
  },
  {
    id: 22,
    title: "Best Boy Grip",
    department: "Grip",
    description:
      "The Key Grip’s assistant, managing equipment orders, schedules, and labor for the department.",
  },
  {
    id: 23,
    title: "Dolly Grip",
    department: "Grip",
    description:
      "Operates and manages the camera dolly, ensuring smooth camera movement.",
  },
  {
    id: 24,
    title: "Rigging Grip",
    department: "Grip",
    description:
      "Specializes in rigging setups for lights, cameras, and safety measures for complex shots.",
  },
  {
    id: 25,
    title: "Grip",
    department: "Grip",
    description:
      "General crew member handling various rigging, setup, and maintenance tasks on set.",
  },
  {
    id: 26,
    title: "Swing Grip",
    department: "Grip",
    description:
      "A hybrid role that assists both grip and electric departments as needed.",
  },
  {
    id: 27,
    title: "Crane Operator",
    department: "Grip",
    description:
      "Operates cranes and larger rigging setups for elevated or moving shots.",
  },
  {
    id: 28,
    title: "Key Rigging Grip",
    department: "Grip",
    description:
      "Leads the rigging team, handling complex setups and pre-rigging for large or complicated scenes.",
  },
];



const Electric = [
  {
    id: 29,
    title: "Gaffer",
    department: "Electric",
    description:
      "Head of the electrical department, responsible for lighting setups and supporting the DP’s vision.",
  },
  {
    id: 30,
    title: "Best Boy Electric",
    department: "Electric",
    description:
      "The Gaffer’s assistant, managing equipment orders, schedules, and labor for the electrical department.",
  },
  {
    id: 31,
    title: "Electrician",
    department: "Electric",
    description:
      "Handles setup, operation, and maintenance of lighting equipment on set.",
  },
  {
    id: 32,
    title: "Generator Operator",
    department: "Electric",
    description:
      "Operates and maintains generators to provide power for lights and other electrical equipment on location.",
  },
  {
    id: 33,
    title: "Lighting Technician",
    department: "Electric",
    description:
      "Sets up, adjusts, and controls lighting equipment to achieve desired lighting effects.",
  },
  {
    id: 34,
    title: "Rigging Electric",
    department: "Electric",
    description:
      "Specializes in rigging power distribution setups for lights and equipment in complex scenes.",
  },
];

const Production = [
  { id: 35, title: "Producer", department: "Production", description: "Oversees the project from start to finish, including financing, hiring, and distribution." },
  { id: 36, title: "Executive Producer", department: "Production", description: "Involved in financing, securing funding, and overseeing higher-level production elements." },
  { id: 37, title: "Line Producer", department: "Production", description: "Manages the budget and day-to-day operations of the production." },
  { id: 38, title: "Co-Producer", department: "Production", description: "Assists the producer with various aspects of production, often focused on specific segments." },
  { id: 39, title: "Associate Producer", department: "Production", description: "Supports the producer, often handling administrative or logistical tasks." },
  { id: 40, title: "Production Manager (Unit Production Manager)", department: "Production", description: "Responsible for scheduling, budgeting, and overall production management on set." },
  { id: 41, title: "Production Coordinator", department: "Production", description: "Manages communication and logistics, coordinating between departments." },
  { id: 42, title: "Assistant Production Coordinator", department: "Production", description: "Assists the production coordinator with paperwork, communication, and logistics." },
  { id: 43, title: "Production Secretary", department: "Production", description: "Manages paperwork, call sheets, and other documentation in the production office." },
  { id: 44, title: "Travel Coordinator", department: "Production", description: "Manages travel arrangements for cast, crew, and production team." },
  { id: 45, title: "Production Accountant", department: "Production", description: "Manages the budget, expenses, and financial reports." },
  { id: 46, title: "Assistant Production Accountant", department: "Production", description: "Assists the production accountant with bookkeeping and budget tracking." },
  { id: 47, title: "1st Assistant Director (1st AD)", department: "Production", description: "Manages the shooting schedule and coordinates between the director and departments." },
  { id: 48, title: "2nd Assistant Director (2nd AD)", department: "Production", description: "Creates call sheets and oversees cast movement on set." },
  { id: 49, title: "2nd 2nd Assistant Director", department: "Production", description: "Assists the 2nd AD, often handling background actors and logistics." },
  { id: 50, title: "Trainee Assistant Director (TAD)", department: "Production", description: "Assists AD team, often learning and performing various tasks." },
  { id: 51, title: "Production Assistant (PA)", department: "Production", description: "Supports the ADs and other departments with general on-set tasks and logistics." },
  { id: 52, title: "Script Supervisor (Scripty)", department: "Production", description: "Tracks continuity, script changes, and takes notes for the director and editor." },
  { id: 53, title: "COVID Compliance Officer", department: "Production", description: "Ensures adherence to COVID-19 protocols and health guidelines." },
  { id: 54, title: "Set Medic", department: "Production", description: "Provides first aid and health services on set." },
  { id: 55, title: "Location Manager", department: "Production", description: "Finds, secures, and manages filming locations." },
  { id: 56, title: "Assistant Location Manager", department: "Production", description: "Assists the location manager with location-related logistics and management." },
  { id: 57, title: "Location Scout", department: "Production", description: "Searches for locations that meet the director’s vision." },
  { id: 58, title: "Transportation Coordinator", department: "Production", description: "Manages the transportation of cast, crew, and equipment." },
  { id: 59, title: "Driver", department: "Production", description: "Transports crew, cast, or equipment as needed." }
];

const Art = [
  { id: 60, title: "Production Designer", department: "Art", description: "Leads the art department, conceptualizes and oversees the visual style of the film, including sets, locations, and overall aesthetic." },
  { id: 61, title: "Art Director", department: "Art", description: "Works closely with the production designer to bring their vision to life, manages the art department's daily operations, and coordinates with other departments." },
  { id: 62, title: "Assistant Art Director", department: "Art", description: "Assists the art director with administrative tasks, tracking budgets, schedules, and coordinating set construction and dressing." },
  { id: 63, title: "Set Designer", department: "Art", description: "Creates detailed drawings and plans for sets, often working closely with the art director and set decorators to ensure accuracy and aesthetic consistency." },
  { id: 64, title: "Concept Artist", department: "Art", description: "Creates preliminary sketches and illustrations based on the production designer's vision to help visualize key scenes, characters, and locations." },
  { id: 65, title: "Storyboard Artist", department: "Art", description: "Draws sequential panels to represent the director’s shot list and visualize scenes, action sequences, and camera movements." },
  { id: 66, title: "Set Decorator", department: "Art", description: "Sources and selects set dressing elements (furniture, drapery, decor) that bring the set to life, working closely with the production designer." },
  { id: 67, title: "Assistant Set Decorator", department: "Art", description: "Assists the set decorator by researching, sourcing, and organizing set dressing elements." },
  { id: 68, title: "Set Dresser", department: "Art", description: "Works on-set to arrange and maintain set dressing elements before and during filming, ensuring continuity and alignment with the designer’s vision." },
  { id: 69, title: "Leadman", department: "Art", description: "Oversees the set dressers and assists the set decorator in coordinating logistics, schedules, and inventory for set dressing items." },
  { id: 70, title: "Props Master", department: "Art", description: "Responsible for managing all hand props (items handled by actors), ensuring they fit the visual style and are properly prepped for scenes." },
  { id: 71, title: "Props Assistant", department: "Art", description: "Supports the props master in sourcing, creating, and maintaining props, as well as tracking props on set." },
  { id: 72, title: "Construction Coordinator", department: "Art", description: "Oversees the construction crew and handles logistics, timelines, and budgets for set building." },
  { id: 73, title: "Carpenter", department: "Art", description: "Builds and assembles sets, structures, and other scenic elements according to the set designer’s blueprints." },
  { id: 74, title: "Scenic Artist", department: "Art", description: "Paints and textures sets to create realistic environments, often adding details such as murals, faux textures, and aging effects." },
  { id: 75, title: "Plasterer", department: "Art", description: "Specializes in creating plaster elements for sets, such as faux stone walls, statues, and decorative architectural features." },
  { id: 76, title: "Greensman", department: "Art", description: "Responsible for all plant-based set dressing, including sourcing and arranging plants, trees, and outdoor elements." },
  { id: 77, title: "Graphic Designer", department: "Art", description: "Designs printed elements such as signage, newspapers, and branding seen on props and in the environment." },
  { id: 78, title: "Illustrator", department: "Art", description: "Creates artwork that may appear on-screen as part of set decoration or as visual elements within the story." },
  { id: 79, title: "Draughtsman", department: "Art", description: "Develops technical drawings and plans used in the construction of sets and scenery." },
  { id: 80, title: "Sign Writer", department: "Art", description: "Paints or crafts any written signage needed on set, particularly for period pieces requiring authentic-looking signs." },
  { id: 81, title: "Art Department Coordinator", department: "Art", description: "Manages schedules, budget tracking, communication, and paperwork, serving as an organizational hub for the department." },
  { id: 82, title: "Art Department Assistant", department: "Art", description: "Provides general support, including errands, research, and assisting other roles as needed in the department." },
  { id: 83, title: "Runner/Production Assistant (Art Department)", department: "Art", description: "Runs errands, helps with setup and tear down, and assists the art department in any task required on set or in the office." }
];

const PostProduction = [
  { id: 84, title: "Post-Production Supervisor", department: "Post Production", description: "Oversees all post-production stages, managing schedules, budgets, and the entire post team to ensure project completion." },
  { id: 85, title: "Editor", department: "Post Production", description: "Cuts and assembles the footage to craft the film's narrative, pace, and flow." },
  { id: 86, title: "Assistant Editor", department: "Post Production", description: "Organizes footage, syncs dailies, manages media, and provides support to the editor." },
  { id: 87, title: "Additional Editor", department: "Post Production", description: "Often brought in to help during tight deadlines or for specialized sequences." },
  { id: 88, title: "Post-Production Coordinator", department: "Post Production", description: "Assists with scheduling, managing deliverables, and tracking the post-production workflow." },
  { id: 89, title: "Colorist", department: "Post Production", description: "Adjusts and enhances the film’s colors, tones, and hues to achieve the desired visual style and consistency." },
  { id: 90, title: "VFX Supervisor", department: "Post Production", description: "Manages the visual effects team, coordinating effects shots, and overseeing VFX production." },
  { id: 91, title: "VFX Artist", department: "Post Production", description: "Creates and integrates CGI and other visual effects as needed." },
  { id: 92, title: "Sound Designer", department: "Post Production", description: "Designs and creates the unique audio landscape, including effects, ambiance, and Foley sounds." },
  { id: 93, title: "Sound Editor", department: "Post Production", description: "Edits dialogue, sound effects, and other audio elements to fit seamlessly with the visuals." },
  { id: 94, title: "Foley Artist", department: "Post Production", description: "Records sounds to match the film’s actions, like footsteps or door creaks." },
  { id: 95, title: "ADR (Automated Dialogue Replacement) Editor", department: "Post Production", description: "Oversees recording and syncing of any re-recorded dialogue for clarity or performance." },
  { id: 96, title: "Music Supervisor", department: "Post Production", description: "Sources and licenses music for the film, collaborating with the director to fit the soundtrack to the story." },
  { id: 97, title: "Composer", department: "Post Production", description: "Writes and records the film's original score." },
  { id: 98, title: "Music Editor", department: "Post Production", description: "Edits the score and soundtrack to fit the film’s timing and emotional beats." },
  { id: 99, title: "Sound Mixer / Re-Recording Mixer", department: "Post Production", description: "Balances and mixes the dialogue, music, and effects for a cohesive sound experience in the final soundtrack." },
  { id: 100, title: "Dialogue Editor", department: "Post Production", description: "Edits all recorded dialogue to ensure clarity and quality, sometimes cleaning up any background noise or inconsistencies." },
  { id: 101, title: "SFX (Special Effects) Supervisor", department: "Post Production", description: "Handles any real-world physical effects (like explosions or practical effects) that require integration in post." },
  { id: 102, title: "Title Designer", department: "Post Production", description: "Designs and creates the film’s title sequence, as well as any text-based graphics within the film." },
  { id: 103, title: "Graphics Designer / Motion Graphics Artist", department: "Post Production", description: "Creates any additional graphics or visual elements, such as screen inserts, animated text, or other in-film graphics." },
  { id: 104, title: "Post-Production Accountant", department: "Post Production", description: "Manages and tracks post-production expenses, working with the post supervisor to maintain budget control." },
  { id: 105, title: "Delivery Manager", department: "Post Production", description: "Oversees the creation and distribution of final film versions for theatrical, streaming, or physical releases." },
  { id: 106, title: "D.I. (Digital Intermediate) Technician", department: "Post Production", description: "Works with colorists and editors to ensure the final digital image maintains quality during transfers and edits." },
  { id: 107, title: "Data Wrangler", department: "Post Production", description: "Manages and organizes the film’s digital data, ensuring that files are safe, accessible, and properly backed up." },
  { id: 108, title: "Conform Artist", department: "Post Production", description: "Ensures the final edit matches the highest-resolution footage, aligning it with color grading and VFX." }
];

// const AllRoles = [
//     {
//         department: "Camera",
//         roles: Camera,
//     },
//     {
//         department: "Grip",
//         roles: Grip,
//     },
//     {
//         department: "Electric",
//         roles: Electric,
//     },
//     ];

const AllRoles = [
  ...Production,
  ...Camera,
  ...Grip,
  ...Electric,
  ... Art,
  ...PostProduction
]

export default AllRoles;
