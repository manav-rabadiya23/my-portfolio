import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  FolderKanban,
  Rocket,
  Target,
  X,
} from "lucide-react";
import { projects } from "../data/portfolioData";
import { TouchCard, TouchLink } from "./Touch";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/10 bg-[#020817] px-4 py-12 text-white sm:scroll-mt-28 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="My work"
          title="Featured"
          highlight="Projects."
          darkMode={true}
        />

        {!selectedProject ? (
          <>
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
                          project.live?.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
                      >
                        Live
                        <ExternalLink className="h-4 w-4" />
                      </TouchLink>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-blue-500/40 hover:bg-blue-500/10"
                      >
                        Know More
                        <FolderKanban className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </TouchCard>
              ))}
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-xl">
              <Rocket className="h-5 w-5 text-blue-400" />
              More projects are coming soon
            </div>
          </>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr]">
            <TouchCard className="group flex h-fit flex-col overflow-hidden rounded-[1.5rem] border border-blue-400/30 bg-white/[0.04] text-white shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:rounded-[2rem]">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover object-left-top transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/30 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-100 backdrop-blur-xl">
                  Selected Project
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-black uppercase leading-tight tracking-tight text-white">
                  {selectedProject.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {selectedProject.description}
                </p>

                <p className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-blue-300">
                  {selectedProject.tech}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  <TouchLink
                    href={selectedProject.live}
                    target={
                      selectedProject.live?.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
                  >
                    View Live Project
                    <ExternalLink className="h-4 w-4" />
                  </TouchLink>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-blue-500/40 hover:bg-blue-500/10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                  </button>
                </div>
              </div>
            </TouchCard>

            <TouchCard className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:rounded-[2rem] sm:p-7 lg:p-8">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-w-4xl pr-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
                  <FolderKanban className="h-4 w-4" />
                  {selectedProject.type || "Project Case Study"}
                </span>

                <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {selectedProject.title.replace(" Website", "")}
                </h3>

                <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-blue-300">
                  {selectedProject.type}
                </p>

                <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base lg:text-lg">
                  {selectedProject.overview || selectedProject.description}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-2xl font-black text-blue-400">
                    {selectedProject.features?.length || 0}+
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Features
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-2xl font-black text-blue-400">4+</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Tech Used
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                  <p className="text-2xl font-black text-blue-400">100%</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Responsive
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 xl:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#020817]/70 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-white">
                      Core Features
                    </h4>
                  </div>

                  <div className="grid gap-3">
                    {(selectedProject.features || []).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-[#020817]/70 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Target className="h-5 w-5 text-blue-400" />
                    <h4 className="text-sm font-black uppercase tracking-[0.16em] text-white">
                      Development Highlights
                    </h4>
                  </div>

                  <div className="grid gap-3">
                    {(selectedProject.highlights || []).map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300"
                      >
                        <Rocket className="h-4 w-4 shrink-0 text-blue-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TouchCard>
          </div>
        )}
      </div>
    </section>
  );
}
