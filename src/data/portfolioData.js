export const personalInfo = {
  firstName: "Rabadiya",
  lastName: "Manavkumar",
  fullName: "Rabadiya Manavkumar Navinbhai",
  role: "Frontend Developer • React Learner • BCA Student",
  tagline:
    "I build clean, responsive and modern web interfaces using React, Tailwind CSS, JavaScript and Firebase.",
  university: "CHARUSAT - CMPICA",
  course: "BCA Student",
  semester: "Semester 4",
  location: "Vadodara, Gujarat",
  email: "rabadiyamanav789@gmail.com",
  phone: "8200833181",
  whatsappNumber: "918200833181",
  languages: "Gujarati, Hindi, English",
  resume: "/Resume.pdf",
  profileImage: "/t.png",
  linkedin: "https://linkedin.com/in/manav-rabadiya-006a99350/",
  github: "https://github.com/manav-rabadiya23",
  instagram: "https://instagram.com/_rabadiya_manav_23/",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Firebase",
  "HTML",
  "CSS",
  "PHP Basics",
  "C",
  "C++",
  "GitHub",
  "Vercel",
  "UI Design",
];

export const softSkills = [
  "Problem Solving",
  "Time Management",
  "Team Collaboration",
  "Communication",
  "Adaptability",
  "Critical Thinking",
];

export const profileDetails = [
  ["Full Name", personalInfo.fullName],
  ["University", personalInfo.university],
  ["Course", `${personalInfo.course} (${personalInfo.semester})`],
  ["Location", personalInfo.location],
  ["Languages", personalInfo.languages],
  ["Email", personalInfo.email],
  ["Contact", personalInfo.phone],
];

export const experience = [
  {
    title: "Frontend Development Intern",
    company: "TechNova Solutions",
    period: "Current / Recent",
    type: "Internship",
    description:
      "Worked on modern responsive website sections, dark/light mode, mobile layouts, internship pages, team sections and UI improvements using React, TypeScript, Tailwind CSS and Framer Motion.",
    points: [
      "Built responsive sections for company website pages.",
      "Improved UI/UX, spacing, dark mode and mobile experience.",
      "Worked with GitHub, Vercel deployment and real project updates.",
    ],
  },
  {
    title: "Personal & Client-side Web Projects",
    company: "Self Learning / Practice Work",
    period: "2025 - 2026",
    type: "Working Data",
    description:
      "Created portfolio, restaurant, watch store and business website interfaces with focus on attractive UI, smooth animations and practical user flows.",
    points: [
      "Designed reusable React components and clean section layouts.",
      "Connected Firebase for auth, orders, bookings and feedback in projects.",
      "Practiced production deployment using Vercel and GitHub.",
    ],
  },
];

export const projects = [
  {
    title: "Gujarati Rasoi Restaurant Website",
    image: "/gujarati-rasoi.png",
    description:
      "A full restaurant website with menu, cart, booking, feedback, user profile and admin management flow using React, Tailwind CSS and Firebase.",
    tech: "React • Tailwind CSS • Firebase • Vercel",
    live: "https://restaurant-tau-brown.vercel.app/",
    code: "https://github.com/manav-rabadiya23",
  },
  {
    title: "Watch Store Website",
    image: "/watch-project.png",
    description:
      "A modern responsive watch store interface with premium product cards, smooth UI and clean shopping experience.",
    tech: "React • Vite • Tailwind CSS",
    live: "https://watch-store-three-ruddy.vercel.app/",
    code: "https://github.com/manav-rabadiya23",
  },
  {
    title: "Personal Portfolio Website",
    image: "/profilepic.jpeg",
    description:
      "A responsive personal portfolio to showcase skills, certificates, projects, internship data and contact details.",
    tech: "React • Tailwind CSS • Lucide Icons",
    live: "#home",
    code: "https://github.com/manav-rabadiya23",
  },
];

export const certificates = [
  {
    title: "Advanced Networking, Virtualization, and Security",
    org: "Coursera",
    file: "Advanced Networking, Virtualization, and Security.pdf",
  },
  {
    title: "Networking Fundamentals and Physical Networks",
    org: "Coursera",
    file: "Networking Fundamentals and Physical Networks.pdf",
  },
  { title: "Blogging Course", org: "Coursera", file: "Blogging Course.pdf" },
  {
    title: "Introduction to Social Media Marketing",
    org: "Coursera",
    file: "Introduction to Social Media Marketing.pdf",
  },
  {
    title: "Introduction to Systems Analysis",
    org: "Coursera",
    file: "Introduction to Systems Analysis.pdf",
  },
  {
    title: "Digital Product Management",
    org: "Coursera",
    file: "Digital Product Management -sad 2.pdf",
  },
  {
    title: "HTML & CSS Crash Course",
    org: "Coursera",
    file: "HTML & CSS Crash Course.pdf",
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    org: "Coursera",
    file: "Introduction to HTML, CSS, & JavaScript.pdf",
  },
  {
    title: "Building Web Applications in PHP",
    org: "Coursera",
    file: "Building Web Applications in PHP.pdf",
  },
  {
    title: "Building Database Applications in PHP",
    org: "Coursera",
    file: "Building Database Applications in PHP.pdf",
  },
  {
    title: "Excel for Beginners",
    org: "Coursera",
    file: "Excel for Beginners.pdf",
  },
  {
    title: "Generative AI for Everyone",
    org: "Coursera",
    file: "Generative AI for Everyone.pdf",
  },
  {
    title: "Smart India Hackathon-2025",
    org: "Smart India Hackathon",
    file: "sih.jpeg",
  },
];
