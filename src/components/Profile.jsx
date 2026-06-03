import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Rocket,
  Target,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

export default function Profile() {
  const infoCards = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "BCA Student @ CHARUSAT",
    },
    {
      icon: Briefcase,
      title: "Experience",
      value: "Frontend Development Intern",
    },
    {
      icon: Rocket,
      title: "Projects",
      value: "3+ Major Projects",
    },
  ];

  const skills = [
    { icon: FaReact, label: "React.js", color: "text-cyan-400" },
    { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
    { icon: SiFirebase, label: "Firebase", color: "text-orange-400" },
    { icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
    { icon: FaCss3Alt, label: "CSS3", color: "text-blue-500" },
    { icon: FaGitAlt, label: "Git", color: "text-red-500" },
    { icon: SiVercel, label: "Vercel", color: "text-white" },
  ];

  return (
    <section
      id="profile"
      className="relative overflow-hidden border-t border-white/10 bg-[#020817] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-6 py-3 text-xs font-black uppercase tracking-[0.3em] text-blue-300">
            <UserRound className="h-5 w-5" />
            About Me
          </div>

          <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            Frontend Developer • BCA Student
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72">
                <div className="absolute inset-8 rounded-full bg-blue-600 shadow-[0_0_90px_rgba(37,99,235,.75)]" />
                <div className="absolute inset-2 rounded-full border border-blue-400/40" />
                <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/40" />

                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="relative z-10 h-[260px] w-auto object-contain sm:h-[340px]"
                />
              </div>

              <h3 className="mt-8 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                {personalInfo.fullName || "Rabadiya Manav"}
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                I am a BCA student at CHARUSAT with a strong interest in
                frontend development, modern UI design, and building responsive
                web applications. My goal is to improve every day as a frontend
                developer and create websites that look professional, work
                smoothly, and feel easy to use on every device.
              </p>

              <a
                href="#contact"
                className="group mt-8 flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl border border-blue-400/25 bg-blue-500/10 px-5 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-blue-600/80"
              >
                <UserRound className="h-5 w-5 text-blue-300" />
                Let&apos;s Connect
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-400/80">
                      {item.title}
                    </p>

                    <h4 className="mt-4 text-base font-black leading-7 text-white">
                      {item.value}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                  <Target className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight">
                  Skills I Use
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-blue-500/40 hover:bg-blue-500/10"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                        <Icon className={`h-5 w-5 ${skill.color}`} />
                      </span>
                      {skill.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-blue-500 sm:w-fit"
            >
              <Rocket className="h-5 w-5" />
              View My Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
