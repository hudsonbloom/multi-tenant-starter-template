
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
  ...Camera,
  ...Grip,
  ...Electric,
]

export default AllRoles;
