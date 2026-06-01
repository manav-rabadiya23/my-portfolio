import { useState } from "react";
import { Sun, Moon, Menu, X, ChevronRight } from "lucide-react";
import { TouchButton, TouchLink } from "./Touch";
import { navItems } from "../data/portfolioData";

export default function Header({ darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 backdrop-blur-md border-b ${
          darkMode
            ? "bg-slate-950/90 border-slate-800 py-3 shadow-xl"
            : "bg-white/90 border-slate-200 py-3 shadow-lg"
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

            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2" />

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
              href="/Resume.pdf"
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
                className={`w-6 h-6 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              />
            </TouchButton>
          </div>
        </div>
      </header>

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
              className={`w-6 h-6 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
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
              href="/Resume.pdf"
              download
              className="block w-full text-center px-5 py-3 rounded-xl bg-[#1D4ED8] text-white font-black text-[11px] uppercase tracking-widest shadow-lg"
            >
              Download CV
            </TouchLink>
          </div>
        </aside>
      </div>
    </>
  );
}
