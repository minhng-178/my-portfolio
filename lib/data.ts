import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airbnb from "@/public/airbnb.png";
import spotify from "@/public/spotify.png";
import yoga from "@/public/yoga.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Business Analysis Intern",
    location: "Ho Chi Minh, VN",
    description:
      "I'm now a business analysis intern work in AVG",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb",
    description:
      "I'm watching tutorial from AntonioErdeljac. Users can add new destination and filters it.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    imageUrl: airbnb,
  },
  {
    title: "Spotify",
    description:
      "I'm watching tutorial from AntonioErdeljac. Users can add new song and listen it.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: spotify,
  },
  {
    title: "Yoga app",
    description:
      "A public web app allow user to find their favorite yoga course",
    tags: ["React", "Node.js", "MUI", "mongoDB", "AWS"],
    imageUrl: yoga,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;