import React from 'react';

import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';

import airbnb from '@/public/airbnb.png';
import notion from '@/public/notion.png';
import discord from '@/public/discord.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Developer',
    location: 'HCM, VN',
    description: 'I leaned as a front-end developer for 1 year.',
    icon: React.createElement(FaReact),
    date: '2022 - 2023',
  },
  {
    title: 'Business Analysis Intern',
    location: 'HCM, VN',
    description: "I'm now a business analysis intern work in AVG",
    icon: React.createElement(CgWorkAlt),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Discord',
    description:
      'A public web app allow user to real-time messaging and send attachments as messages',
    tags: ['React', 'Socket.io', 'Prisma', 'Tailwind', 'MySQL'],
    imageUrl: discord,
    projectUrl: 'https://github.com/minhng-178/discord-clone',
  },
  {
    title: 'Notion',
    description:
      "I'm watching tutorial from AntonioErdeljac. Users can add new note and image.",
    tags: ['Next.js 13', 'React', 'Convex', 'Tailwind'],
    imageUrl: notion,
    projectUrl: 'https://github.com/minhng-178/notion-clone',
  },
  {
    title: 'Airbnb',
    description:
      "I'm watching tutorial from AntonioErdeljac. Users can add new destination and filters it.",
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma', 'NextAuth'],
    imageUrl: airbnb,
    projectUrl: 'https://github.com/minhng-178/airbnb-clone-app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
