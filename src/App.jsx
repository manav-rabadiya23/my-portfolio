import { useState, useEffect } from "react";
import { X } from "lucide-react";

import Header from "./components/Header";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#050816] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-md">
          <div
            className={`relative w-full max-w-lg rounded-[2rem] border p-8 text-center shadow-2xl ${
              darkMode
                ? "border-slate-800 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-4xl">
              🚧
            </div>

            <h2 className="mb-4 text-3xl font-black">
              Website Under Development
            </h2>

            <p
              className={`mx-auto max-w-md text-sm leading-7 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Thank you for visiting my portfolio. I am currently improving the
              design, projects, and user experience. Some sections may be
              incomplete while updates are in progress.
            </p>

            <div
              className={`mt-6 rounded-2xl border p-4 text-sm ${
                darkMode
                  ? "border-slate-700 bg-slate-800/50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              ✨ New features and improvements are coming soon.
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 w-full rounded-2xl bg-[#1D4ED8] px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-blue-700"
            >
              Continue to Portfolio
            </button>
          </div>
        </div>
      )}

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-20">
        <Ticker darkMode={darkMode} />
      </div>

      <main className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Hero darkMode={darkMode} />
        <Profile darkMode={darkMode} />
        <Certificates darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </main>

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
