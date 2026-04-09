import React, { useEffect, useState } from "react";
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
  ChevronRight,
} from "lucide-react";

const TouchCard = ({ children, className = "" }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      className={`transition-all duration-200 ${
        pressed ? "scale-[0.98] brightness-95" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

const TouchLink = ({ children, className = "", ...props }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <a
      {...props}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      className={`transition-all duration-200 ${
        pressed ? "scale-95 opacity-90" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
};

const TouchButton = ({ children, className = "", ...props }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      {...props}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      className={`transition-all duration-200 ${
        pressed ? "scale-95 opacity-90" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const navItems = ["Home", "Profile", "Certificates", "Projects"];

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

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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

        .marquee-track {
          width: max-content;
          animation: marqueeScroll 60s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full blur-[100px] lg:blur-[120px] transition-colors duration-1000 animate-glowPulse ${
            darkMode ? "bg-blue-900/20" : "bg-blue-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full blur-[100px] lg:blur-[120px] transition-colors duration-1000 animate-glowPulse ${
            darkMode ? "bg-slate-800/30" : "bg-blue-100/30"
          }`}
        ></div>
      </div>

      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 backdrop-blur-md border-b ${
          scrolled
            ? darkMode
              ? "bg-slate-950/90 border-slate-800 py-3 shadow-xl"
              : "bg-white/90 border-slate-200 py-3 shadow-lg"
            : "bg-transparent border-transparent py-3 sm:py-4 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center gap-3">
          <div className="group cursor-default shrink-0">
            <h2 className="text-xl sm:text-2xl font-black text-[#1D4ED8] tracking-tighter uppercase">
              MR.
            </h2>
            <p className="text-[8px] uppercase tracking-[0.35em] text-slate-400 font-bold">
              Portfolio
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
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

            <TouchButton
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </TouchButton>

            <TouchLink
              href="Resume.pdf"
              download
              className="px-6 py-2.5 rounded-xl bg-[#1D4ED8] text-white font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-blue-700 hover:scale-105"
            >
              Download CV
            </TouchLink>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3 lg:hidden">
            <TouchButton
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </TouchButton>

            <TouchButton
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg"
              aria-label="Open menu"
            >
              <Menu
                className={`w-6 h-6 ${darkMode ? "text-white" : "text-slate-900"}`}
              />
            </TouchButton>
          </div>
        </div>
      </header>

      <div className="pt-[72px] sm:pt-[84px] lg:pt-24 overflow-hidden">
        <div
          className={`py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold overflow-hidden whitespace-nowrap ${
            darkMode ? "bg-slate-900 text-white" : "bg-[#1D4ED8] text-white"
          }`}
        >
          <div className="marquee-track inline-flex">
            <span className="px-6">
              🚀 Welcome to my personal portfolio website, where I showcase my
              skills, certifications, and learning journey.
            </span>
            <span className="px-6">
              I am a BCA student at CHARUSAT with a strong interest in web
              development and modern technologies.
            </span>
            <span className="px-6">
              Currently learning React, PHP, JavaScript, and UI design to build
              better user experiences.
            </span>
            <span className="px-6">
              Always open to learning new things and working on exciting
              projects. 🚀
            </span>
            <span className="px-6">
              🚀 Welcome to my personal portfolio website, where I showcase my
              skills, certifications, and learning journey.
            </span>
            <span className="px-6">
              I am a BCA student at CHARUSAT with a strong interest in web
              development and modern technologies.
            </span>
            <span className="px-6">
              Currently learning React, PHP, JavaScript, and UI design to build
              better user experiences.
            </span>
            <span className="px-6">
              Always open to learning new things and working on exciting
              projects. 🚀
            </span>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[110] bg-slate-950/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-[84%] max-w-80 p-6 sm:p-8 shadow-2xl transition-transform duration-500 ${
            darkMode ? "bg-slate-900 border-l border-slate-800" : "bg-white"
          } ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <TouchButton
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <X
              className={`w-6 h-6 ${darkMode ? "text-white" : "text-slate-900"}`}
            />
          </TouchButton>

          <div className="mt-14 space-y-6">
            {navItems.map((item) => (
              <TouchLink
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between text-lg sm:text-xl font-black uppercase tracking-tight transition-all border-b pb-3 ${
                  darkMode
                    ? "text-slate-100 border-slate-800"
                    : "text-slate-900 border-slate-100"
                }`}
              >
                <span>{item}</span>
                <ChevronRight className="w-5 h-5 text-[#1D4ED8]" />
              </TouchLink>
            ))}

            <TouchLink
              href="Resume.pdf"
              download
              className="block w-full text-center px-5 py-3 rounded-xl bg-[#1D4ED8] text-white font-black text-[11px] uppercase tracking-widest shadow-lg"
            >
              Download CV
            </TouchLink>
          </div>
        </aside>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center w-full">
            <div className="animate-slideLeft order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-[#1D4ED8] text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-5 sm:mb-6 border border-blue-600/20 animate-pulse">
                BCA Student @ CHARUSAT
              </span>

              {/* UPDATED: NAME HOVER EFFECT */}
              <h1 className="group cursor-default text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[1] tracking-tight mb-4 uppercase text-center lg:text-left">
                <span
                  className={`block transition-all duration-500 group-hover:text-[#1D4ED8] group-hover:translate-x-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Rabadiya
                </span>
                <span
                  className={`block transition-all duration-500 delay-75 group-hover:text-[#1D4ED8] group-hover:translate-x-4 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  Manavkumar
                </span>
              </h1>

              <p className="text-[#1D4ED8] font-black tracking-[0.18em] sm:tracking-[0.25em] text-xs sm:text-sm md:text-base mb-8 sm:mb-10 lg:mb-12 uppercase">
                BCA Student @ CHARUSAT
              </p>

              {/* UPDATED: CONTACT HOVER EFFECTS */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0">
                <TouchCard
                  className={`group rounded-2xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? "hover:bg-slate-900/50" : "hover:bg-white"}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 text-left p-1">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        darkMode
                          ? "bg-slate-800 border-slate-700"
                          : "bg-white border-slate-100"
                      }`}
                    >
                      <Mail className="w-5 h-5 text-[#1D4ED8]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1 transition-colors group-hover:text-[#1D4ED8]">
                        Official Email
                      </p>
                      <TouchLink
                        href="mailto:rabadiyamanav789@gmail.com"
                        className="text-sm sm:text-base font-black transition-colors text-[#1D4ED8] lg:text-inherit group-hover:text-[#1D4ED8] break-all"
                      >
                        rabadiyamanav789@gmail.com
                      </TouchLink>
                    </div>
                  </div>
                </TouchCard>

                <TouchCard
                  className={`group rounded-2xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? "hover:bg-slate-900/50" : "hover:bg-white"}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 text-left p-1">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        darkMode
                          ? "bg-slate-800 border-slate-700"
                          : "bg-white border-slate-100"
                      }`}
                    >
                      <Phone className="w-5 h-5 text-[#1D4ED8]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1 transition-colors group-hover:text-[#1D4ED8]">
                        Contact Number
                      </p>
                      <TouchLink
                        href="tel:8200833181"
                        className="text-sm sm:text-base font-black transition-colors text-[#1D4ED8] lg:text-inherit group-hover:text-[#1D4ED8]"
                      >
                        8200833181
                      </TouchLink>
                    </div>
                  </div>
                </TouchCard>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <TouchLink
                  href="#certificates"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#1D4ED8] text-white font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-blue-700 hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
                >
                  <Award className="w-4 h-4" /> View Certifications
                </TouchLink>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slideRight order-1 lg:order-2">
              <div className="flex flex-col items-center lg:items-end gap-5 sm:gap-6 w-full max-w-[420px]">
                <TouchCard
                  className={`relative p-3 sm:p-4 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[3.5rem] border-2 transition-all duration-700 animate-floatY ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-white border-slate-100 shadow-2xl"
                  }`}
                >
                  <div className="absolute -top-3 sm:-top-4 right-3 sm:-right-4 px-3 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-[#1D4ED8] text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-xl z-10 animate-pulse">
                    Open to Learn
                  </div>

                  <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-700 shadow-inner group">
                    <img
                      src="profilepic.jpeg"
                      alt="Manav Rabadiya"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </TouchCard>

                <div
                  className={`w-full max-w-[340px] p-4 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] border backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] animate-fadeUp ${
                    darkMode
                      ? "bg-slate-900/70 border-slate-700"
                      : "bg-white/80 border-slate-200"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      {
                        value: `${certificates.length}+`,
                        label: "Certificates",
                      },
                      { value: skills.length, label: "Skills" },
                      { value: learning.length, label: "Learning" },
                      { value: "1", label: "Projects" },
                    ].map((item) => (
                      <TouchCard
                        key={item.label}
                        className={`p-4 sm:p-5 rounded-2xl border text-center ${
                          darkMode
                            ? "bg-slate-800 border-slate-700 lg:hover:bg-slate-700"
                            : "bg-slate-50 border-slate-200 lg:hover:bg-white"
                        }`}
                      >
                        <p className="text-xl sm:text-2xl font-black text-[#1D4ED8]">
                          {item.value}
                        </p>
                        <p className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 tracking-widest">
                          {item.label}
                        </p>
                      </TouchCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="profile"
          className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/20 text-left animate-fadeUp scroll-mt-28"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase italic ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Profile & <span className="text-[#1D4ED8]">Milestones.</span>
            </h2>
            <div className="h-[1px] flex-grow bg-blue-600/20"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
            <TouchCard
              className={`lg:col-span-4 p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all lg:hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-slate-100 shadow-xl"
              }`}
            >
              <h3 className="text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] text-[#1D4ED8] mb-8 sm:mb-10 border-b border-blue-600/10 pb-4">
                Bio Data
              </h3>
              <div className="space-y-6 sm:space-y-8">
                {Object.entries(personalData).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">
                      {key}
                    </p>
                    <p
                      className={`text-sm sm:text-base font-black break-words ${
                        darkMode ? "text-slate-100" : "text-slate-800"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </TouchCard>

            <div className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <TouchCard className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#1D4ED8] text-white shadow-2xl relative overflow-hidden min-h-[220px] flex flex-col justify-center lg:hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h3 className="font-black uppercase tracking-widest text-[10px] mb-6 sm:mb-8 opacity-80">
                    Academic Wins
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
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
                      <p className="text-lg sm:text-xl font-black tracking-tight text-yellow-300">
                        7.6 / 10
                      </p>
                    </div>
                  </div>
                </TouchCard>

                <TouchCard
                  className={`p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border transition-all lg:hover:scale-[1.02] ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-100 shadow-xl"
                  }`}
                >
                  <h3 className="text-[11px] sm:text-[12px] font-black uppercase tracking-[0.15em] text-[#1D4ED8] mb-6 sm:mb-8">
                    Technical Stack
                  </h3>

                  <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                    {skills.map((skill) => (
                      <TouchCard
                        key={skill}
                        className={`px-4 sm:px-5 py-2.5 rounded-xl font-black text-[11px] sm:text-xs border uppercase tracking-tight ${
                          darkMode
                            ? "bg-slate-800 border-slate-600 text-slate-100"
                            : "bg-[#F8FAFC] border-[#F1F5F9] text-[#0F172A]"
                        }`}
                      >
                        {skill}
                      </TouchCard>
                    ))}
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-[10px] font-black uppercase text-slate-400 mb-4 sm:mb-5 tracking-widest">
                      Currently Learning
                    </p>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {learning.map((item) => (
                        <TouchCard
                          key={item}
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-[11px] border ${
                            darkMode
                              ? "bg-blue-950/40 text-blue-300 border-blue-900"
                              : "bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
                          {item}
                        </TouchCard>
                      ))}
                    </div>
                  </div>
                </TouchCard>
              </div>

              <TouchCard
                className={`p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all lg:hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-100 shadow-xl"
                }`}
              >
                <h3 className="text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] text-[#1D4ED8] mb-8 sm:mb-10 border-b border-blue-600/5 pb-4">
                  Professional Attributes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {softSkills.map((skill) => (
                    <TouchCard
                      key={skill}
                      className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border transition-all lg:hover:border-[#1D4ED8]/30 lg:hover:translate-x-2 ${
                        darkMode
                          ? "border-slate-700 bg-slate-800/70"
                          : "border-[#F1F5F9] bg-[#F8FAFC]"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] shrink-0" />
                      <span
                        className={`text-xs sm:text-sm font-black uppercase tracking-tight ${
                          darkMode ? "text-slate-100" : "text-slate-800"
                        }`}
                      >
                        {skill}
                      </span>
                    </TouchCard>
                  ))}
                </div>
              </TouchCard>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <TouchLink
                  href="https://linkedin.com/in/manav-rabadiya-006a99350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border group transition-all duration-300 lg:hover:scale-[1.03] lg:hover:-translate-y-1 block ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-200 shadow-lg lg:hover:shadow-2xl"
                  }`}
                >
                  <div className="flex justify-between items-center mb-6 gap-3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      alt="LinkedIn"
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-[9px] font-black text-[#1D4ED8] bg-[#EFF6FF] px-3 py-1 rounded-full uppercase text-center animate-pulse">
                      Verified
                    </span>
                  </div>
                  <h4
                    className={`font-black text-lg sm:text-xl mb-1 uppercase tracking-tighter ${
                      darkMode ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    LinkedIn
                  </h4>
                  <p className="text-[11px] font-black text-[#1D4ED8] uppercase tracking-widest flex items-center gap-2 mt-2">
                    View Profile <ExternalLink className="w-3 h-3" />
                  </p>
                </TouchLink>

                <TouchLink
                  href="https://github.com/manav-rabadiya23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border group transition-all duration-300 lg:hover:scale-[1.03] lg:hover:-translate-y-1 block ${
                    darkMode
                      ? "bg-slate-900 border-slate-700"
                      : "bg-white border-slate-200 shadow-lg lg:hover:shadow-2xl"
                  }`}
                >
                  <div className="flex justify-between items-center mb-6 gap-3">
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
                    className={`font-black text-lg sm:text-xl mb-1 uppercase tracking-tighter ${
                      darkMode ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    GitHub
                  </h4>
                  <p className="text-[11px] font-black text-[#1D4ED8] uppercase tracking-widest flex items-center gap-2 mt-2">
                    Repositories <ExternalLink className="w-3 h-3" />
                  </p>
                </TouchLink>
              </div>
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/20 text-left animate-fadeUp scroll-mt-28"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase italic ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Certifications.
            </h2>
            <div className="h-[1px] flex-grow bg-blue-600/20"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {certificates.map((cert, index) => (
              <TouchCard
                key={index}
                className={`p-6 sm:p-7 lg:p-8 rounded-[2rem] sm:rounded-[2.5rem] border group transition-all duration-300 lg:hover:-translate-y-2 lg:hover:scale-[1.02] ${
                  darkMode
                    ? "bg-slate-900 border-slate-700 text-white"
                    : "bg-white border-slate-100 text-slate-900 shadow-xl lg:hover:shadow-2xl"
                }`}
              >
                <div className="text-[10px] font-black text-[#1D4ED8] uppercase tracking-[0.2em] mb-4 opacity-80">
                  {cert.org}
                </div>

                <h3 className="font-black text-base sm:text-lg mb-8 leading-tight min-h-[48px] sm:min-h-[60px] uppercase tracking-tight">
                  {cert.title}
                </h3>

                <TouchLink
                  href={`/${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-center py-3.5 sm:py-4 bg-[#1D4ED8] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg lg:group-hover:bg-blue-700"
                >
                  Verify Credentials <ChevronRight className="w-4 h-4" />
                </TouchLink>
              </TouchCard>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/20 text-left animate-fadeUp scroll-mt-28"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase italic ${
                darkMode ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Featured <span className="text-[#1D4ED8]">Projects.</span>
            </h2>
            <div className="h-[1px] flex-grow bg-blue-600/20"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* PROJECT CARD */}
            <TouchCard
              className={`p-6 rounded-[2rem] border transition-all duration-300 lg:hover:-translate-y-2 lg:hover:scale-[1.02] ${
                darkMode
                  ? "bg-slate-900 border-slate-700 text-white"
                  : "bg-white border-slate-100 text-slate-900 shadow-xl lg:hover:shadow-2xl"
              }`}
            >
              <img
                src="/watch-project.png"
                alt="Watch Store"
                className="w-full h-48 object-cover rounded-xl mb-5"
              />

              <h3 className="font-black text-lg mb-3 uppercase tracking-tight">
                Watch Store Website
              </h3>

              <p className="text-sm mb-5 leading-relaxed">
                A modern and responsive watch store web application built with
                React, Vite, and Firebase. It allows users to explore watch
                collections with a clean UI and smooth user experience.
              </p>

              <p className="text-xs font-bold text-[#1D4ED8] mb-5 uppercase">
                Tech: Firebase, Vite, React,Tailwind CSS
              </p>

              <div className="flex gap-3">
                <TouchLink
                  href="https://watch-store-three-ruddy.vercel.app/"
                  target="_blank"
                  className="flex-1 text-center py-2.5 bg-[#1D4ED8] text-white rounded-xl text-xs font-bold uppercase hover:bg-blue-700"
                >
                  🚀 Try Live
                </TouchLink>

                <TouchLink
                  href="https://github.com/YOUR_USERNAME/YOUR_REPO"
                  target="_blank"
                  className="flex-1 text-center py-2.5 border border-[#1D4ED8] text-[#1D4ED8] rounded-xl text-xs font-bold uppercase hover:bg-[#1D4ED8] hover:text-white"
                >
                  💻 Code
                </TouchLink>
              </div>
            </TouchCard>
          </div>
        </section>

        <footer
          className={`py-10 sm:py-12 border-t text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center ${
            darkMode
              ? "border-slate-800 text-slate-300"
              : "border-slate-200/10 text-slate-500"
          }`}
        >
          <span>© 2026 RABADIYA MANAV</span>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-10 items-center break-all">
            <TouchLink
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
            </TouchLink>

            <TouchLink
              href="mailto:rabadiyamanav789@gmail.com"
              className="hover:text-[#1D4ED8] transition flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#1D4ED8]" />
              rabadiyamanav789@gmail.com
            </TouchLink>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
