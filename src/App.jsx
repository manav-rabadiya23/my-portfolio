import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Your detailed personal data
  const personalData = {
    "Full Name": "Rabadiya Manavkumar Navinbhai",
    University: "CHARUSAT - CMPICA",
    Course: "BCA (Semester 4)",
    Location: "Vadodara, Gujarat",
    Language: "Gujarati, Hindi, English",
    Hobby: "Web Development",
  };

  const skills = ["HTML", "CSS", "JS-Basic", "C", "C++"];
  const learning = ["PHP", "JavaScript"];

  // 11 Coursera
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
    {
      title: "Blogging Course",
      org: "Coursera",
      file: "Blogging Course.pdf",
    },
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
      title: "Technical Support Fundamentals",
      org: "Coursera",
      file: "/coursera9.pdf",
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
  ];

  return (
    <div
      className={`${darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"} min-h-screen flex transition-colors duration-500 font-sans scroll-smooth`}
    >
      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-6 right-6 z-[100] p-3 rounded-2xl bg-blue-600 text-white shadow-xl active:scale-90 transition-transform"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* --- LEFT SIDEBAR NAVIGATION --- */}
      <aside
        className={`w-72 fixed h-full border-r flex flex-col justify-between p-8 z-50 transition-all duration-500 
        ${darkMode ? "bg-slate-800 border-slate-700 shadow-none" : "bg-white border-slate-200 shadow-2xl"}
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-black text-blue-600 tracking-tighter">
              MR.
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden text-slate-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-6">
            {["Home", "Profile", "Certificates", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center gap-3 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition"
              >
                <span className="w-6 h-[2px] bg-blue-600 transition-all group-hover:w-10"></span>
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <a
            href="Resume.pdf"
            download="Resume.pdf"
            className="w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-95"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-lg ${darkMode ? "bg-yellow-400 text-slate-900" : "bg-slate-900 text-white"}`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 lg:ml-72 p-6 md:p-16">
        {/* HERO SECTION */}
        <header id="home" className="min-h-[70vh] flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative group">
              <div className="w-48 h-48 rounded-[3rem] overflow-hidden border-4 border-blue-600 shadow-2xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 bg-slate-200">
                <img
                  src="profilepic.jpeg"
                  alt="Manav Rabadiya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-none hover:text-blue-600 transition-colors duration-300 cursor-default">
                Rabadiya <br /> Manavkumar
              </h1>
              <p className="text-xl font-bold text-blue-600 uppercase tracking-widest opacity-80 mb-8">
                BCA Student @ CHARUSAT
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">
                      Official Email
                    </p>
                    <a
                      href="mailto:rabadiyamanav789@gmail.com"
                      className="font-bold hover:text-blue-600 transition-colors duration-300"
                    >
                      rabadiyamanav789@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">
                      Contact Number
                    </p>
                    <a
                      href="tel:8200833181"
                      className="font-bold hover:text-blue-600 transition-colors duration-300"
                    >
                      8200833181
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* --- PROFILE & SKILLS SECTION --- */}
        <section
          id="profile"
          className="py-20 my-10 border-t border-slate-200/20"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-black tracking-tight">
              Profile & <span className="text-blue-600">Milestones.</span>
            </h2>
            <div className="h-[2px] flex-grow bg-slate-100/20"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              className={`p-8 rounded-[2.5rem] border ${darkMode ? "bg-slate-800 border-slate-700 shadow-none" : "bg-white border-slate-100 shadow-xl"}`}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-8">
                Bio Data
              </h3>
              <div className="space-y-6">
                {Object.entries(personalData).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-[10px] font-black uppercase opacity-40 mb-1">
                      {key}
                    </p>
                    <p className="text-md font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div
                className={`p-8 rounded-[2.5rem] border ${darkMode ? "bg-slate-800 border-slate-700" : "bg-blue-600 text-white shadow-2xl"}`}
              >
                <h3 className="font-black uppercase tracking-widest text-[10px] mb-6 opacity-70">
                  Academic Wins
                </h3>
                <ul className="space-y-4 font-bold text-lg">
                  <li className="flex gap-3">
                    <span>01.</span>
                    <span>Secured 91.57 PR in SSC Board.</span>
                  </li>
                  <li className="flex gap-3">
                    <span>02.</span>
                    <span>Secured 84.90 PR in HSC Board.</span>
                  </li>
                </ul>
              </div>

              <div
                className={`p-8 rounded-[2.5rem] border ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-xl"}`}
              >
                <h3 className="text-xs font-black uppercase text-blue-600 mb-6 tracking-widest">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-xl font-bold text-sm ${darkMode ? "bg-slate-700 text-slate-100" : "bg-slate-50 text-slate-800 border border-slate-100"}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100/10">
                  <p className="text-[10px] font-black uppercase opacity-40 mb-3">
                    Currently Learning
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {learning.map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm bg-blue-600/10 text-blue-600 animate-pulse"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RESTORED SOCIAL BLOCKS */}
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-3xl border ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-lg"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                      className="w-8 h-8"
                      alt="LinkedIn"
                    />
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">
                      Verified
                    </span>
                  </div>
                  <h4 className="font-black text-lg mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/manav-rabadiya-006a99350/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-blue-600 hover:underline"
                  >
                    VIEW PROFILE ↗
                  </a>
                </div>

                <div
                  className={`p-6 rounded-3xl border ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-lg"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? "bg-white text-slate-900" : "bg-slate-900 text-white"}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 border border-slate-200 px-2 py-1 rounded-md uppercase">
                      Source
                    </span>
                  </div>
                  <h4 className="font-black text-lg mb-1">GitHub</h4>
                  <a
                    href="https://github.com/manav-rabadiya23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-600 transition"
                  >
                    VISIT REPOS ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CERTIFICATES SECTION --- */}
        <section
          id="certificates"
          className="py-20 border-t border-slate-200/20"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-black tracking-tight">
              Certifications.
            </h2>
            <div className="h-[2px] flex-grow bg-slate-100/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-[2rem] border transition-all hover:-translate-y-2 ${darkMode ? "bg-slate-800 border-slate-700 shadow-none" : "bg-white border-slate-100 shadow-lg"}`}
              >
                <div className="mb-4 text-blue-600 font-black text-[10px] uppercase tracking-widest">
                  {cert.org}
                </div>
                <h3 className="font-bold text-lg mb-6 leading-tight h-12 overflow-hidden">
                  {cert.title}
                </h3>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all"
                >
                  View Certificate ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-slate-200/20">
          <h2 className="text-4xl font-black mb-10 tracking-tight">
            Projects.
          </h2>
          <div className="p-16 border-2 border-dashed border-slate-200 rounded-[3rem] text-center opacity-30 font-black italic">
            Development In Progress
          </div>
        </section>

        <footer className="mt-40 py-10 border-t opacity-40 text-[10px] font-black uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span>© 2026 Rabadiya Manav</span>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/_rabadiya_manav_23/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Instagram
            </a>
            <a href="mailto:rabadiyamanav789@gmail.com">Email</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
