import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Languages,
  Layers,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaUserGraduate,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import {
  personalInfo,
  profileDetails,
  skills,
  softSkills,
} from "../data/portfolioData";

const skillIcons = {
  "React.js": { icon: FaReact, color: "text-cyan-400" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-400" },
  Firebase: { icon: SiFirebase, color: "text-orange-400" },
  HTML: { icon: FaHtml5, color: "text-orange-500" },
  CSS: { icon: FaCss3Alt, color: "text-blue-500" },
  GitHub: { icon: FaGithub, color: "text-white" },
  Vercel: { icon: SiVercel, color: "text-white" },
};

const detailIcons = {
  "Full Name": UserRound,
  University: GraduationCap,
  Course: FaUserGraduate,
  Location: MapPin,
  Languages: Languages,
  Email: Mail,
  Contact: UserRound,
};

export default function Profile() {
  const mainDetails = profileDetails.filter(([label]) =>
    ["University", "Course", "Location"].includes(label),
  );

  const contactDetails = profileDetails.filter(([label]) =>
    ["Languages", "Email"].includes(label),
  );

  return (
    <section
      id="profile"
      className="relative overflow-hidden border-t border-white/10 bg-[#020817] px-4 py-12 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_55%_90%,rgba(34,197,94,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.26em] text-cyan-300 sm:text-xs">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Who I{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent">
              Am.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:rounded-[2rem] sm:p-7"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-40 w-40 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
                />

                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-[0_0_80px_rgba(59,130,246,.65)]" />
                <div className="absolute inset-2 rounded-full border border-purple-400/40" />

                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="relative z-10 h-[205px] w-auto object-contain sm:h-[285px] lg:h-[325px]"
                />
              </div>

              <h3 className="mt-6 text-xl font-black uppercase tracking-tight sm:text-3xl">
                {personalInfo.fullName}
              </h3>

              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                {personalInfo.role}
              </p>

              <div className="mt-6 grid w-full gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {mainDetails.map(([label, value], index) => {
                  const Icon = detailIcons[label] || UserRound;
                  const styles = [
                    "border-blue-400/25 bg-blue-500/10 text-blue-300",
                    "border-orange-400/25 bg-orange-500/10 text-orange-300",
                    "border-pink-400/25 bg-pink-500/10 text-pink-300",
                  ];

                  return (
                    <div
                      key={label}
                      className={`rounded-2xl border p-4 text-left ${styles[index]}`}
                    >
                      <Icon className="mb-3 h-5 w-5" />
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] opacity-80">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-black text-white">
                        {value}
                      </p>
                    </div>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(6,182,212,.35)] sm:text-sm"
              >
                Let&apos;s Connect
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: UserRound,
                  title: "Who I Am",
                  text: `${personalInfo.course} at ${personalInfo.university}.`,
                  style: "border-cyan-400/25 bg-cyan-500/10 text-cyan-300",
                },
                {
                  icon: Code2,
                  title: "What I Build",
                  text: personalInfo.tagline,
                  style:
                    "border-purple-400/25 bg-purple-500/10 text-purple-300",
                },
                {
                  icon: Rocket,
                  title: "Current Focus",
                  text: "Improving React, UI design, animations and responsive layouts.",
                  style:
                    "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`rounded-[1.4rem] border p-5 backdrop-blur-xl transition hover:-translate-y-1 sm:rounded-[1.7rem] sm:p-6 ${item.style}`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-base font-black uppercase tracking-tight text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[1.6rem] border border-purple-400/20 bg-purple-500/10 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-7"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 sm:h-14 sm:w-14">
                  <Layers className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                    Tech Stack
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Tools I use while building projects.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {skills.map((skill) => {
                  const data = skillIcons[skill] || {
                    icon: Code2,
                    color: "text-slate-300",
                  };
                  const Icon = data.icon;

                  return (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020817]/45 px-3 py-3 text-xs font-bold text-slate-200 transition hover:border-purple-400/40 hover:bg-purple-500/10 sm:px-4 sm:text-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <Icon className={`h-5 w-5 ${data.color}`} />
                      </span>
                      {skill}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="rounded-[1.6rem] border border-emerald-400/20 bg-emerald-500/10 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
                  <BookOpen className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                  Soft Skills
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-emerald-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="rounded-[1.6rem] border border-cyan-400/20 bg-cyan-500/10 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-7"
              >
                <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                  Contact Details
                </h3>

                <div className="mt-4 space-y-3">
                  {contactDetails.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-[#020817]/40 px-4 py-3"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-1 break-all text-sm font-bold text-slate-200">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-emerald-500 sm:w-fit"
            >
              <Rocket className="h-5 w-5" />
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
