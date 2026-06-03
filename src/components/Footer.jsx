import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import { TouchLink } from "./Touch";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020817] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <a href="#home" className="inline-block leading-none">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                <span className="text-white">M</span>
                <span className="text-blue-500">R</span>
              </h2>

              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.35em] text-slate-500">
                Portfolio
              </p>
            </a>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Frontend Developer focused on building clean, responsive and
              modern web experiences using React, Tailwind CSS and creative UI.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <MapPin className="h-4 w-4 shrink-0 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="flex items-center gap-3">
              <TouchLink
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#0A66C2] transition hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </TouchLink>

              <TouchLink
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                <FaGithub className="h-5 w-5" />
              </TouchLink>

              <TouchLink
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-pink-500 transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram className="h-5 w-5" />
              </TouchLink>

              <TouchLink
                href={`mailto:${personalInfo.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-400 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </TouchLink>
            </div>

            <a
              href="#home"
              className="flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-blue-300 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
            >
              Back To Top
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs font-bold text-slate-500 sm:flex-row">
          <p>© {year} Rabadiya Manavkumar. All rights reserved.</p>
          <p>Built with React • Tailwind CSS • Vite</p>
        </div>
      </div>
    </footer>
  );
}
