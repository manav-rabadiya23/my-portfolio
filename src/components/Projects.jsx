import { ExternalLink, Code2, Rocket } from "lucide-react";
import { TouchCard, TouchLink } from "./Touch";
import { projects } from "../data/portfolioData";

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 animate-fadeUp">
      {" "}
      <div className="mb-10 sm:mb-14">
        <p className="text-[#1D4ED8] text-xs font-black uppercase tracking-[0.35em] mb-3">
          Projects
        </p>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          My Projects{" "}
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <TouchCard
            key={project.title}
            className={`group rounded-[2rem] border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
              darkMode
                ? "bg-slate-900 border-slate-800 hover:bg-slate-800"
                : "bg-white border-slate-200 shadow-sm hover:shadow-xl"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-[#1D4ED8] mb-2">
                  {project.type}
                </p>
                <h3 className="text-2xl sm:text-3xl font-black">
                  {project.title}
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-[#1D4ED8]" />
              </div>
            </div>

            <p
              className={`text-sm leading-7 mb-6 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-7">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black border ${
                    darkMode
                      ? "bg-slate-800 border-slate-700 text-slate-200"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <TouchLink
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D4ED8] text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </TouchLink>

              <TouchLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-xs font-black uppercase tracking-widest ${
                  darkMode
                    ? "border-slate-700 text-white hover:bg-slate-800"
                    : "border-slate-200 text-slate-900 hover:bg-slate-50"
                }`}
              >
                GitHub <Code2 className="w-4 h-4" />{" "}
              </TouchLink>
            </div>
          </TouchCard>
        ))}
      </div>
    </section>
  );
}
