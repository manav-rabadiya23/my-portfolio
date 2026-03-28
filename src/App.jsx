import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink,
  Award,
  CheckCircle2,
} from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const personalData = {
    "Full Name": "Rabadiya Manavkumar Navinbhai",
    University: "CHARUSAT - CMPICA",
    Course: "BCA (Semester 4)",
    Location: "Vadodara, Gujarat",
    Language: "Gujarati, Hindi, English",
    Hobby: "Web Development",
    Email: "rabadiyamanav789@gmail.com",
    Contact: "8200833181",
  };

  const skills = ["HTML", "CSS", "JS-Basic", "C", "C++"];
  const learning = ["PHP", "JavaScript", "React", "UI Design"];

  const softSkills = [
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Team Collaboration",
    "Critical Thinking",
    "Effective Communication",
  ];

  const certificates = [
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

  return (
    <div
      className={`${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      } min-h-screen transition-all duration-500 font-sans scroll-smooth relative overflow-x-hidden text-left`}
    >
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        .animate-floatY {
          animation: floatY 4s ease-in-out infinite;
        }

        .animate-fadeUp {
          animation: fadeUp 0.9s ease forwards;
        }

        .animate-slideLeft {
          animation: slideLeft 0.9s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.9s ease forwards;
        }

        .animate-glowPulse {
          animation: glowPulse 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background Animated Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000 animate-glowPulse ${
            darkMode ? "bg-blue-900/20" : "bg-blue-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000 animate-glowPulse ${
            darkMode ? "bg-slate-800/30" : "bg-blue-100/30"
          }`}
        ></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 backdrop-blur-md border-b ${
          scrolled
            ? darkMode
              ? "bg-slate-950/90 border-slate-800 py-3 shadow-xl"
              : "bg-white/90 border-slate-200 py-3 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="group cursor-default">
            <h2 className="text-2xl font-black text-[#1D4ED8] tracking-tighter uppercase">
              MR.
            </h2>
            <p className="text-[8px] uppercase tracking-[0.4em] text-slate-400 font-bold">
              Portfolio
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {["Home", "Profile", "Certificates", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#1D4ED8] hover:scale-110 ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {item}
              </a>
            ))}
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:rotate-12"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <a
              href="Resume.pdf"
              download
              className="px-6 py-2.5 rounded-xl bg-[#1D4ED8] text-white font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
              <Menu
                className={`w-6 h-6 ${darkMode ? "text-white" : "text-slate-900"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="pt-24">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="3"
          className={`py-4 text-sm md:text-lg font-semibold ${
            darkMode ? "bg-slate-900 text-white" : "bg-[#1D4ED8] text-white"
          }`}
        >
          🚀 Welcome to my personal portfolio website, where I showcase my
          skills, certifications, and learning journey | I am a BCA student at
          CHARUSAT with a strong interest in web development and modern
          technologies | Currently learning React, PHP, JavaScript, and UI
          design to build better user experiences | Always open to learning new
          things and working on exciting projects 🚀
        </marquee>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[110] bg-slate-950/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-72 p-8 shadow-2xl transition-transform duration-500 ${
            darkMode ? "bg-slate-900 border-l border-slate-800" : "bg-white"
          } ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X
              className={`w-6 h-6 ${darkMode ? "text-white" : "text-slate-900"}`}
            />
          </button>
          <div className="mt-12 space-y-8">
            {["Home", "Profile", "Certificates", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-xl font-black uppercase tracking-tighter hover:text-[#1D4ED8] transition-colors border-b pb-2 ${
                  darkMode
                    ? "text-slate-100 border-slate-800"
                    : "text-slate-900 border-slate-100"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </aside>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <header
          id="home"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="animate-slideLeft">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-[#1D4ED8] text-[11px] font-black uppercase tracking-wider mb-6 border border-blue-600/20 hover:scale-105 transition-transform">
                BCA Student @ CHARUSAT
              </span>

              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-4 uppercase group cursor-default">
                <span
                  className={`transition-colors duration-500 ${
                    darkMode ? "text-white" : "text-slate-900"
                  } group-hover:text-[#1D4ED8]`}
                >
                  Rabadiya
                </span>
                <br />
                <span
                  className={`transition-colors duration-500 ${
                    darkMode ? "text-white" : "text-slate-900"
                  } group-hover:text-[#1D4ED8]`}
                >
                  Manavkumar
                </span>
              </h1>

              <p className="text-[#1D4ED8] font-black tracking-[0.25em] text-sm md:text-base mb-12 uppercase">
                BCA Student @ CHARUSAT
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${
                      darkMode
                        ? "bg-slate-800 border-slate-700"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <Mail className="w-5 h-5 text-[#1D4ED8] fill-blue-600/10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">
                      Official Email
                    </p>
                    <a
                      href="mailto:rabadiyamanav789@gmail.com"
                      className={`text-sm md:text-base font-black transition-colors hover:text-[#1D4ED8] ${
                        darkMode ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      rabadiyamanav789@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${
                      darkMode
                        ? "bg-slate-800 border-slate-700"
                        : "bg-white border-slate-100"
                    }`}
                  >
                    <Phone className="w-5 h-5 text-pink-600 fill-pink-600/10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">
                      Contact Number
                    </p>
                    <a
                      href="tel:8200833181"
                      className={`text-sm md:text-base font-black transition-colors hover:text-[#1D4ED8] ${
                        darkMode ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      8200833181
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#certificates"
                  className="px-8 py-4 rounded-2xl bg-[#1D4ED8] text-white font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-blue-700 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Award className="w-4 h-4" /> View Certifications
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slideRight">
              <div className="flex flex-col items-center lg:items-end gap-6 w-full max-w-[420px]">
                <div
                  className={`relative p-4 rounded-[3.5rem] border-2 transition-all duration-700 animate-floatY ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-white border-slate-100 shadow-2xl"
                  }`}
                >
                  <div className="absolute -top-4 -right-4 px-5 py-2 rounded-2xl bg-[#1D4ED8] text-white text-[10px] font-black uppercase tracking-widest shadow-xl z-10 animate-pulse">
                    Open to Learn
                  </div>

                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-700 shadow-inner group">
                    <img
                      src="profilepic.jpeg"
                      alt="Manav Rabadiya"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div
                  className={`w-full max-w-[340px] p-6 rounded-[2.5rem] border backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-fadeUp ${
                    darkMode
                      ? "bg-slate-900/70 border-slate-700"
                      : "bg-white/80 border-slate-200"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`p-5 rounded-2xl border text-center hover:scale-105 transition-all ${
                        darkMode
                          ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                          : "bg-slate-50 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <p className="text-2xl font-black text-[#1D4ED8]">
                        {certificates.length}+
                      </p>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        Certificates
                      </p>
                    </div>

                    <div
                      className={`p-5 rounded-2xl border text-center hover:scale-105 transition-all ${
                        darkMode
                          ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                          : "bg-slate-50 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <p className="text-2xl font-black text-[#1D4ED8]">
                        {skills.length}
                      </p>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        Skills
                      </p>
                    </div>

                    <div
                      className={`p-5 rounded-2xl border text-center hover:scale-105 transition-all ${
                        darkMode
                          ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                          : "bg-slate-50 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <p className="text-2xl font-black text-[#1D4ED8]">
                        {learning.length}
                      </p>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        Learning
                      </p>
                    </div>

                    <div
                      className={`p-5 rounded-2xl border text-center hover:scale-105 transition-all ${
                        darkMode
                          ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                          : "bg-slate-50 border-slate-200 hover:bg-white"
                      }`}
                    >
                      <p className="text-2xl font-black text-[#1D4ED8]">Soon</p>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section
          id="profile"
          className="py-24 border-t border-slate-200/20 text-left animate-fadeUp"
        >
          <div className="flex items-center gap-6 mb-16">
            <h2
              className={`text-4xl font-black tracking-tight uppercase italic ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Profile & <span className="text-[#1D4ED8]">Milestones.</span>
            </h2>
            <div className="h-[1px] flex-grow bg-blue-600/20"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div
              className={`lg:col-span-4 p-10 rounded-[2.5rem] border transition-all h-full hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-slate-100 shadow-xl"
              }`}
            >
              <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1D4ED8] mb-10 border-b border-blue-600/10 pb-4">
                Bio Data
              </h3>
              <div className="space-y-8">
                {Object.entries(personalData).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">
                      {key}
                    </p>
                    <p
                      className={`text-base font-black break-words ${
                        darkMode ? "text-slate-100" : "text-slate-800"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2.5rem] bg-[#1D4ED8] text-white shadow-2xl relative overflow-hidden min-h-[220px] flex flex-col justify-center hover:scale-[1.02] transition-transform">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h3 className="font-black uppercase tracking-widest text-[10px] mb-8 opacity-80">
                    Academic Wins
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-center bg-white/10 p-4 rounded-2xl border border-white/5">
                      <span className="text-xs font-black opacity-60">01.</span>
                      <p className="text-sm md:text-base font-black uppercase">
                        91.57 PR (SSC)
                      </p>
                    </div>
                    <div className="flex gap-4 items-center bg-white/10 p-4 rounded-2xl border border-white/5">
                      <span className="text-xs font-black opacity-60">02.</span>
                      <p className="text-sm md:text-base font-black uppercase">
                        84.90 PR (HSC)
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                      <p className="text-[9px] font-black uppercase opacity-60 mb-1">
                        BCA CGPA
                      </p>
                      <p className="text-xl font-black tracking-tight text-yellow-300">
                        7.6 / 10
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-8 rounded-[2.5rem] border transition-all hover:scale-[1.02] ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-100 shadow-xl"
                  }`}
                >
                  <h3 className="text-[12px] font-black uppercase tracking-[0.15em] text-[#1D4ED8] mb-8">
                    Technical Stack
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-5 py-2.5 rounded-xl font-black text-xs border uppercase tracking-tight transition-all duration-300 hover:scale-105 ${
                          darkMode
                            ? "bg-slate-800 border-slate-600 text-slate-100"
                            : "bg-[#F8FAFC] border-[#F1F5F9] text-[#0F172A]"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-5 tracking-widest">
                      Currently Learning
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {learning.map((item) => (
                        <span
                          key={item}
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-[11px] border transition-all duration-300 hover:scale-105 ${
                            darkMode
                              ? "bg-blue-950/40 text-blue-300 border-blue-900"
                              : "bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`p-10 rounded-[2.5rem] border transition-all hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-100 shadow-xl"
                }`}
              >
                <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1D4ED8] mb-10 border-b border-blue-600/5 pb-4">
                  Professional Attributes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {softSkills.map((skill) => (
                    <div
                      key={skill}
                      className={`flex items-center gap-4 p-5 rounded-2xl border transition-all hover:border-[#1D4ED8]/30 hover:translate-x-2 ${
                        darkMode
                          ? "border-slate-700 bg-slate-800/70"
                          : "border-[#F1F5F9] bg-[#F8FAFC]"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] shrink-0" />
                      <span
                        className={`text-xs md:text-sm font-black uppercase tracking-tight ${
                          darkMode ? "text-slate-100" : "text-slate-800"
                        }`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="https://linkedin.com/in/manav-rabadiya-006a99350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-8 rounded-[2.5rem] border group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-200 shadow-lg hover:shadow-2xl"
                  }`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="LinkedIn"
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-[9px] font-black text-[#1D4ED8] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase">
                      Verified
                    </span>
                  </div>
                  <h4
                    className={`font-black text-xl mb-1 uppercase tracking-tighter ${
                      darkMode ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    LinkedIn
                  </h4>
                  <p className="text-[11px] font-black text-[#1D4ED8] uppercase tracking-widest flex items-center gap-2 mt-2">
                    View Profile <ExternalLink className="w-3 h-3" />
                  </p>
                </a>

                <a
                  href="https://github.com/manav-rabadiya23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-8 rounded-[2.5rem] border group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-200 shadow-lg hover:shadow-2xl"
                  }`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="GitHub"
                      className={`w-10 h-10 object-contain ${darkMode ? "invert" : ""}`}
                    />
                    <span
                      className={`text-[9px] font-black border px-3 py-1 rounded-full uppercase ${
                        darkMode
                          ? "text-slate-300 border-slate-700"
                          : "text-slate-400 border-slate-200"
                      }`}
                    >
                      Source
                    </span>
                  </div>
                  <h4
                    className={`font-black text-xl mb-1 uppercase tracking-tighter ${
                      darkMode ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    GitHub
                  </h4>
                  <p className="text-[11px] font-black text-[#1D4ED8] uppercase tracking-widest flex items-center gap-2 mt-2">
                    Repositories <ExternalLink className="w-3 h-3" />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certificates"
          className="py-24 border-t border-slate-200/20 text-left animate-fadeUp"
        >
          <div className="flex items-center gap-6 mb-16">
            <h2
              className={`text-4xl font-black tracking-tight uppercase italic ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Certifications.
            </h2>
            <div className="h-[1px] flex-grow bg-blue-600/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`p-8 rounded-[2.5rem] border group transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-slate-100 text-slate-900 shadow-xl hover:shadow-2xl"
                }`}
              >
                <div className="text-[10px] font-black text-[#1D4ED8] uppercase tracking-[0.2em] mb-4 opacity-80">
                  {cert.org}
                </div>
                <h3 className="font-black text-lg mb-8 leading-tight min-h-[60px] uppercase tracking-tight">
                  {cert.title}
                </h3>
                <a
                  href={`/${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-4 bg-[#1D4ED8] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg group-hover:bg-blue-700 transition-colors"
                >
                  Verify Credentials ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-24 border-t border-slate-200/20 text-left animate-fadeUp"
        >
          <div className="flex items-center gap-6 mb-16">
            <h2
              className={`text-4xl font-black tracking-tight uppercase italic ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Featured <span className="text-[#1D4ED8]">Projects.</span>
            </h2>
            <div className="h-[1px] flex-grow bg-blue-600/20"></div>
          </div>

          <div
            className={`p-20 border-2 border-dashed rounded-[3.5rem] text-center transition-colors hover:scale-[1.01] ${
              darkMode
                ? "border-slate-700 bg-slate-900/70"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#1D4ED8] animate-floatY">
                <Award className="w-8 h-8" />
              </div>
              <h3
                className={`text-2xl font-black mb-4 uppercase tracking-tighter ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Projects Coming Soon
              </h3>
              <p
                className={`text-sm font-bold mb-8 uppercase tracking-widest leading-relaxed ${
                  darkMode ? "text-slate-300" : "text-slate-500"
                }`}
              >
                My digital works including college assignments and personal web
                apps are currently being curated for display.
              </p>
              <div className="flex justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-12 border-t text-[10px] font-bold uppercase tracking-[0.3em] flex flex-col md:flex-row justify-between items-center gap-8 text-center ${
            darkMode
              ? "border-slate-800 text-slate-300"
              : "border-slate-200/10 text-slate-500"
          }`}
        >
          <span>© 2026 RABADIYA MANAV</span>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <a
              href="https://instagram.com/_rabadiya_manav_23/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1D4ED8] transition flex items-center gap-2"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                className="w-4 h-4"
              />
              Instagram
            </a>
            <a
              href="mailto:rabadiyamanav789@gmail.com"
              className="hover:text-[#1D4ED8] transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#1D4ED8]" />
              rabadiyamanav789@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
