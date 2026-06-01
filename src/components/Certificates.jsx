import { Award, ExternalLink } from "lucide-react";
import { TouchCard, TouchLink } from "./Touch";
import { certificates } from "../data/portfolioData";

export default function Certificates({ darkMode }) {
  return (
    <section
      id="certificates"
      className="py-16 sm:py-20 lg:py-24 animate-fadeUp"
    >
      <div className="mb-10 sm:mb-14">
        <p className="text-[#1D4ED8] text-xs font-black uppercase tracking-[0.35em] mb-3">
          Certificates
        </p>

        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {certificates.length}+ Certifications
        </h2>

        <p
          className={`mt-4 max-w-2xl text-sm sm:text-base leading-7 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Professional certifications and learning achievements completed
          through Coursera, Smart India Hackathon, and various technical
          learning platforms.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificates.map((cert) => (
          <TouchCard
            key={cert.title}
            className={`group rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-2 ${
              darkMode
                ? "bg-slate-900 border-slate-800 hover:bg-slate-800"
                : "bg-white border-slate-200 shadow-sm hover:shadow-xl"
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <Award className="w-6 h-6 text-[#1D4ED8]" />
            </div>

            <h3
              className={`text-lg font-black leading-snug mb-3 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {cert.title}
            </h3>

            <p className="text-sm font-bold text-slate-400 mb-6">{cert.org}</p>

            <TouchLink
              href={`/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-black text-[#1D4ED8] hover:gap-3 transition-all"
            >
              View Certificate
              <ExternalLink className="w-4 h-4" />
            </TouchLink>
          </TouchCard>
        ))}
      </div>
    </section>
  );
}
