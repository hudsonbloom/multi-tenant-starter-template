import {
    ArrowDown,
    ArrowRight,
    ArrowUp,
    CheckCircle,
    Circle,
    CircleOff,
    HelpCircle,
    Timer,
  } from "lucide-react"
  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "Production",
      label: "Production",
      icon: HelpCircle,
    },
    {
      value: "Camera",
      label: "Camera",
      icon: HelpCircle,
    },
    {
      value: "electric",
      label: "Electric",
      icon: Circle,
    },
    {
      value: "grip",
      label: "Grip",
      icon: Timer,
    },
    {
      value: "art",
      label: "Art",
      icon: Timer,
    },
    {
      value: "costume",
      label: "Costume",
      icon: Timer,
    }
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDown,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRight,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUp,
    },
  ]