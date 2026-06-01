import { Award, Mail, Phone } from "lucide-react";
import { TouchCard, TouchLink } from "./Touch";
import {
  certificates,
  learning,
  skills,
  projects,
} from "../data/portfolioData";

export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20"
    >
      <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center w-full">
        <div className="animate-slideLeft order-2 lg:order-1 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-[#1D4ED8] text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-5 sm:mb-6 border border-blue-600/20 animate-pulse">
            BCA Student @ CHARUSAT
          </span>

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
            Frontend Developer • React Learner • BCA Student
          </p>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0">
            <TouchCard
              className={`group rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode ? "hover:bg-slate-900/50" : "hover:bg-white"
              }`}
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
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1 group-hover:text-[#1D4ED8]">
                    Official Email
                  </p>
                  <TouchLink
                    href="mailto:rabadiyamanav789@gmail.com"
                    className="text-sm sm:text-base font-black text-[#1D4ED8] lg:text-inherit group-hover:text-[#1D4ED8] break-all"
                  >
                    rabadiyamanav789@gmail.com
                  </TouchLink>
                </div>
              </div>
            </TouchCard>

            <TouchCard
              className={`group rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode ? "hover:bg-slate-900/50" : "hover:bg-white"
              }`}
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
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1 group-hover:text-[#1D4ED8]">
                    Contact Number
                  </p>
                  <TouchLink
                    href="tel:8200833181"
                    className="text-sm sm:text-base font-black text-[#1D4ED8] lg:text-inherit group-hover:text-[#1D4ED8]"
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
              <Award className="w-4 h-4" />
              View Certifications
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
                  src="/profilepic.jpeg"
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
                  { value: `${certificates.length}+`, label: "Certificates" },
                  { value: skills.length, label: "Skills" },
                  { value: learning.length, label: "Learning" },
                  { value: projects.length, label: "Projects" },
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
  );
}
