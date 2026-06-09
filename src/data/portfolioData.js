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
  profileImage: "/manav-developer.png",
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
    year: "2026",
    status: "Current",
    tag: "Internship",
    title: "AI-Powered Web Development",
    company: "TechNova Solutions",
    date: "2026 – Present",
    description:
      "Working on modern responsive website sections, UI improvements and deployment workflows.",
    points: [
      "Working on modern responsive website sections and UI improvements.",
      "Using React, TypeScript, Tailwind CSS and Framer Motion.",
      "Collaborating with team and deploying projects using GitHub & Vercel.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub",
      "Vercel",
    ],
    color: "yellow",
    certificate: {
      title: "Internship Completion Certificate",
      description:
        "Successfully completed AI-Powered Web Development Internship at TechNova Solutions.",
      file: "/tns-certi.png",
    },
  },
  {
    year: "2026",
    status: "Projects",
    tag: "Project",
    title: "Personal Projects",
    company: "Self Learning / Practice Work",
    date: "2025 – 2026",
    description:
      "Created portfolio, restaurant, watch store and business website interfaces with focus on clean UI, smooth animations and practical user flows.",
    points: [
      "Built portfolio, restaurant, watch store and business website interfaces.",
      "Focused on clean UI, smooth animations and great user experience.",
      "Integrated Firebase for auth, orders, bookings and feedback.",
      "Deployed projects using Vercel and maintained on GitHub.",
    ],
    skills: [
      "React",
      "Firebase",
      "Vercel",
      "GitHub",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "purple",
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

    type: "Restaurant Management System",

    overview:
      "A complete restaurant management website with customer and admin functionality. Users can browse menus, place orders, book tables, submit feedback and manage profiles. Admins can manage orders, menu items and customers.",

    features: [
      "Menu & Category System",
      "Cart & Checkout Flow",
      "Table Booking System",
      "User Profile Section",
      "Feedback System",
      "Admin Dashboard",
    ],

    highlights: [
      "Built complete customer journey flow",
      "Integrated Firebase database",
      "Fully responsive on all devices",
    ],
  },

  {
    title: "Watch Store Website",
    image: "/watch-project.png",
    description:
      "A modern responsive watch store interface with premium product cards, smooth UI and clean shopping experience.",
    tech: "React • Vite • Tailwind CSS",
    live: "https://watch-store-three-ruddy.vercel.app/",
    code: "https://github.com/manav-rabadiya23",

    type: "E-Commerce UI Project",

    overview:
      "A premium watch showcase website focused on elegant product presentation, responsive layouts and smooth browsing experience.",

    features: [
      "Premium Product Cards",
      "Modern Landing Page",
      "Responsive Layout",
      "Clean Product Showcase",
    ],

    highlights: [
      "Focused on premium design aesthetics",
      "Improved mobile shopping experience",
      "Created reusable UI components",
    ],
  },

  {
    title: "Personal Portfolio Website",
    image: "/profilepic.jpeg",
    description:
      "A responsive personal portfolio to showcase skills, certificates, projects, internship data and contact details.",
    tech: "React • Tailwind CSS • Lucide Icons",
    live: "#home",
    code: "https://github.com/manav-rabadiya23",

    type: "Personal Branding Website",

    overview:
      "A personal portfolio designed to present skills, projects, certificates and experience in a professional and interactive way.",

    features: [
      "Interactive Hero Section",
      "Project Showcase",
      "Certificate Gallery",
      "Contact Integration",
    ],

    highlights: [
      "Custom UI design",
      "Fully responsive layout",
      "Modern animations and effects",
    ],
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
