export interface Experience {
  id: number
  company: string
  title: string
  type: string
  date: string
  points: string[]
}

export const club_experience: Experience[] = [
  {
    id: 1,
    company: "BizTech",
    title: "Design Director",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "UBC Marketing Association",
    title: "Software Developer",
    type: "University Club",
    date: "May 2024 - Current",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "NSCC",
    title: "VP Marketing & Design",
    type: "University Club",
    date: "May 2023 - Dec 2023",
    points: ["Sample"],
  },
  {
    id: 4,
    company: "Commerce Undergraduate Society",
    title: "IT Director",
    type: "University Club",
    date: "Sept 2022 - May 2023",
    points: ["Sample"],
  },
]

export const work_experience: Experience[] = [
  {
    id: 1,
    company: "ICBC",
    title: "Design Engineer Intern",
    type: "Internship",
    date: "Jan 2025 - Present",
    points: ["Sample"],
  },
  {
    id: 2,
    company: "Moment Energy",
    title: "UI / UX Engineer Intern",
    type: "Internship",
    date: "Sept 2024 - Dec 2024",
    points: ["Sample"],
  },
  {
    id: 3,
    company: "Crown Agencies Secretariat (Government)",
    title: "UX & Digital Strategy Intern",
    type: "Internship",
    date: "Sept 2023 - Dec 2023",
    points: ["Sample"],
  },
  {
    id: 4,
    company: "Ibbaka",
    title: "Data Analytics Intern",
    type: "Internship",
    date: "May 2022 - Aug 2022",
    points: ["Sample"],
  },
]

export const projects = [
  {
    id: "1",
    title: "Blueprint NFC Companion App",
    tags: ["3D", "Branding", "Mobile", "Interface Design", "Prototyping"],
    image: "/projects/video/blueprint-video.webm",
    route: "/blueprint",
  },
  {
    id: "2",
    title: "BizTech Web v2",
    tags: ["Interface Design", "Prototyping"],
    image: "/projects/bt-web.png",
    route: "/bt-web",
  },
  {
    id: "3",
    title: "Vancouver Dwelling",
    tags: ["Web design", "Freelance"],
    image: "/projects/van-dwelling.png",
    route: "/van-dwelling",
  },

  {
    id: "4",
    title: "UBCMA Membership Portal",
    tags: ["React", "Nextjs", "Firebase"],
    image: "/projects/video/ma-mockup.webm",
    route: "/membership-portal",
  },
  {
    id: "5",
    title: "Nametag Generation Figma Plugin",
    tags: ["React", "Figma API", "Scripting"],
    image: "/projects/video/biztag-demo.webm",
    route: "/biztag",
  },
];

export const sandbox_projects = [
  {
    id: "1",
    title: "Rive Subscribe Animation",
    description: "Recreating YouTube's Lottie web animation in Rive. An uncompressed Lottie file is JSON formatted, which is versatile but bloated compared to Rive’s optimized binary files, leading to a ~1500% decrease in file size (240kb -> 16kb)",
    image: "/projects/video/subscribe-animation.webm",
  },
  {
    id: "2",
    title: "MIS Night",
    description: "Branding for BizTech's kick-off networking event, MIS Night, inviting 80+ attendees and delegates for a night of good eats and casual conversation.",
    image: "/projects/mis-night.png",
  },
  {
    id: "3",
    title: "BluePrint 3D Logo animation",
    description: "Spinning 3D animation for BluePrint's promotional material. Used in event advertisement and as a static logo asset.",
    image: "/projects/video/blueprint-logo.webm",
  },
];
