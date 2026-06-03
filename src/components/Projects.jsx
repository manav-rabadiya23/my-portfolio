import { Code2, ExternalLink, FolderKanban, Rocket } from "lucide-react";
import { projects } from "../data/portfolioData";
import { TouchCard, TouchLink } from "./Touch";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/10 bg-[#020817] px-4 py-14 text-white sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="My work"
          title="Featured"
          highlight="Projects."
          darkMode={true}
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <TouchCard
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 sm:rounded-[2rem]"
            >
              <div className="relative h-48 overflow-hidden sm:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/35 to-transparent" />

                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#020817]/70 text-blue-400 backdrop-blur-xl">
                  <FolderKanban className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-black uppercase leading-tight tracking-tight sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <p className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-300">
                  {project.tech}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <TouchLink
                    href={project.live}
                    target={
                      project.live?.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
                  >
                    Live
                    <ExternalLink className="h-4 w-4" />
                  </TouchLink>

                  <TouchLink
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-blue-500/40 hover:bg-blue-500/10"
                  >
                    Code
                    <Code2 className="h-4 w-4" />
                  </TouchLink>
                </div>
              </div>
            </TouchCard>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl">
          <Rocket className="h-5 w-5 text-blue-400" />
          More projects are coming soon
        </div>
      </div>
    </section>
  );
}
