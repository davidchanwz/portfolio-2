// Personal Information
export const PERSONAL_INFO = {
  name: "David",
  fullName: "David Chan Weizhi",
  displayName: "David Chan",
  title: "Software Engineer",
  degree: "BSc Business Analytics",
  university: "NUS",
  initials: "DC",
  profileImage: "/david.jpg",
  profileImageAlt: "David Chan",
  startYear: 2023, // Year started gaining experience
};

// Contact Information
export const CONTACT_INFO = {
  email: "david.chan@u.nus.edu",
  linkedin: {
    url: "https://linkedin.com/in/davidchanwz",
    display: "linkedin.com/in/davidchanwz",
  },
  github: {
    url: "https://github.com/davidchanwz",
    display: "github.com/davidchanwz",
  },
};

// CV/Resume Information
export const CV_INFO = {
  googleDriveId: "15XNoAghjm9LAWJTmCOWzbv5dYPdsuHqn",
  filename: "David-Chan-CV.pdf",
  get downloadUrl() {
    return `https://drive.google.com/uc?export=download&id=${this.googleDriveId}`;
  },
};

// Navigation Items
export const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Work Experience Data
export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Synapxe",
    duration: "May 2025 - Dec 2025",
    description: [
      "Vibed some python and dart",
      "Got pissed at angular"
    ],
    technologies: ["Angular", "Flutter.js"]
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "China CITIC Bank International",
    duration: "May 2024 - Aug 2024",
    description: [
      "Wrote some VBA",
      "Fries"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
  },
];

// Projects Data
export interface Project {
  id: number;
  name: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "CoconutSplit",
    description: "Expense tracker. 2500+ users. 7000+ transactions. SGD1.5mil.",
    liveUrl: "https://t.me/coconutsplit_bot",
    githubUrl: "https://github.com/lvl8studios/coconutsplit"
  },
  {
    id: 2,
    name: "Gyatword",
    description: "Won at NUS Hack&Roll 2025 using PyGyat",
    liveUrl: "https://gyatword.com",
    githubUrl: "https://github.com/lvl8studios/gyatword"
  },
  {
    id: 3,
    name: "TicketChain",
    description: "Tickets but NFTed and on Ethereum",
    githubUrl: "https://github.com/lionsee77/ticketchain"
  },
];

// Utility Functions
export const getCurrentYear = () => new Date().getFullYear();

export const getYearsOfExperience = () => {
  const currentYear = getCurrentYear();
  return currentYear - PERSONAL_INFO.startYear;
};

// Section IDs (for smooth scrolling)
export const SECTION_IDS = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;