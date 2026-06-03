import {
  Award,
  Briefcase,
  Contact,
  Download,
  FolderKanban,
  Home,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home", icon: Home },
    { label: "Profile", href: "#profile", id: "profile", icon: UserRound },
    {
      label: "Experience",
      href: "#experience",
      id: "experience",
      icon: Briefcase,
    },
    {
      label: "Certificates",
      href: "#certificates",
      id: "certificates",
      icon: Award,
    },
    {
      label: "Projects",
      href: "#projects",
      id: "projects",
      icon: FolderKanban,
    },
    { label: "Contact", href: "#contact", id: "contact", icon: Contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - 140;
          if (window.scrollY >= sectionTop) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-blue-500/20 bg-[#020817]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/10 bg-[#020817]/80 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between gap-5 px-4 sm:h-18 sm:px-6 lg:px-10 xl:px-14">
          {" "}
          <a href="#home" className="group shrink-0">
            <div className="leading-none">
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                {" "}
                <span className="text-white">M</span>
                <span className="text-blue-500 transition group-hover:text-blue-400">
                  R
                </span>
              </h1>

              <p className="mt-1 text-[8px] font-black uppercase tracking-[0.35em] text-slate-500 sm:text-[10px]">
                Portfolio
              </p>
            </div>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-full  px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] transition-all duration-300 xl:text-sm ${
                    isActive
                      ? "bg-blue-500/15 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-1 h-[2px] rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
                  )}
                </a>
              );
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={personalInfo.resume}
              download
              className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-blue-600/90 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] xl:flex"
            >
              <Download size={17} />
              Download CV
            </a>

            <button
              onClick={() => setMobileMenu(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-blue-500 hover:bg-blue-500/10 lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-white/10 bg-[#020817] p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="leading-none">
                <h2 className="text-4xl font-black tracking-tight">
                  <span className="text-white">M</span>
                  <span className="text-blue-500">R</span>
                </h2>

                <p className="mt-1 text-[8px] font-black uppercase tracking-[0.35em] text-slate-500">
                  Portfolio
                </p>
              </div>

              <button
                onClick={() => setMobileMenu(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className={`flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 text-center text-[10px] font-black uppercase tracking-[0.12em] transition active:scale-95 ${
                      isActive
                        ? "border-blue-500/40 bg-blue-500/15 text-blue-300"
                        : "border-white/10 bg-white/[0.04] text-white"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-blue-500/15 text-blue-400"
                      }`}
                    >
                      <Icon size={18} />
                    </span>

                    {item.label}
                  </a>
                );
              })}
            </div>

            <a
              href={personalInfo.resume}
              download
              className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-5 py-4 text-xs font-black uppercase tracking-wider text-white"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}
