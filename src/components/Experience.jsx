import { Award, Briefcase, CalendarDays, Check, Code2 } from "lucide-react";
import { experience } from "../data/portfolioData";

const themeMap = {
  yellow: {
    text: "text-yellow-400",
    border: "border-yellow-500/35",
    bg: "bg-yellow-500/10",
    glow: "shadow-yellow-500/20",
    icon: Briefcase,
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-500/35",
    bg: "bg-purple-500/10",
    glow: "shadow-purple-500/20",
    icon: Code2,
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-500/35",
    bg: "bg-cyan-500/10",
    glow: "shadow-cyan-500/20",
    icon: Code2,
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-[#020817] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.16),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:text-left">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-blue-400">
            Experience
          </p>

          <div className="flex items-center justify-center gap-6 lg:justify-start">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              My{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Journey.
              </span>
            </h2>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent lg:block" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
            A timeline of my internship, projects and learning journey that
            shaped my frontend skills.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[34px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400 md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((item, index) => {
              const theme = themeMap[item.color] || themeMap.cyan;
              const Icon = theme.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="grid gap-5 md:grid-cols-[120px_1fr] md:gap-8 lg:grid-cols-[140px_1fr]"
                >
                  <div className="relative hidden md:block">
                    <div className={`pt-9 text-right font-black ${theme.text}`}>
                      <p className="text-lg">{item.year}</p>
                      <p className="text-sm text-slate-400">{item.status}</p>
                    </div>

                    <div
                      className={`absolute left-[1px] top-8 z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border ${theme.border} ${theme.bg} shadow-2xl ${theme.glow} backdrop-blur-xl`}
                    >
                      <Icon size={28} className={theme.text} />
                    </div>
                  </div>

                  <article className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 sm:rounded-[28px] sm:p-8">
                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span
                          className={`mb-4 inline-flex rounded-full border px-4 py-1 text-[10px] font-black uppercase tracking-wide sm:text-xs ${theme.border} ${theme.bg} ${theme.text}`}
                        >
                          {item.tag}
                        </span>

                        <h3 className="text-xl font-black leading-tight sm:text-3xl">
                          {item.title}
                        </h3>

                        <p
                          className={`mt-2 text-sm font-bold sm:text-lg ${theme.text}`}
                        >
                          {item.company}
                        </p>
                      </div>

                      <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300 sm:text-sm">
                        <CalendarDays size={16} />
                        {item.date}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                        >
                          <Check
                            className={`mt-1 shrink-0 ${theme.text}`}
                            size={18}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-xl border px-3 py-2 text-[10px] font-black uppercase tracking-wider sm:px-4 sm:text-sm ${theme.border} ${theme.bg} ${theme.text}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.certificate && (
                      <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-400">
                              <Award className="h-6 w-6" />
                            </div>

                            <div>
                              <h4 className="text-base font-black text-yellow-400 sm:text-lg">
                                {item.certificate.title}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-slate-300">
                                {item.certificate.description}
                              </p>
                            </div>
                          </div>

                          <a
                            href={item.certificate.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex shrink-0 items-center justify-center rounded-xl bg-yellow-500 px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-yellow-400"
                          >
                            View Certificate
                          </a>
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-slate-400 sm:text-base">
          🚀 Always learning. Always building. Always improving.
        </p>
      </div>
    </section>
  );
}
