import { useEffect, useState } from "react";
import {
  Code2,
  Download,
  ExternalLink,
  FolderKanban,
  Mail,
  User,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo, projects } from "../data/portfolioData";

const skills = [
  ["React", 88],
  ["JavaScript", 84],
  ["Tailwind", 90],
  ["Firebase", 80],
];

export default function ManavOS() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("profile");
  const [typedText, setTypedText] = useState("");

  const intro =
    "Frontend Developer crafting modern, responsive and user-friendly websites.";

  useEffect(() => {
    if (!open || active !== "profile") return;

    setTypedText("");
    let index = 0;

    const timer = setInterval(() => {
      setTypedText(intro.slice(0, index));
      index += 1;

      if (index > intro.length) clearInterval(timer);
    }, 25);

    return () => clearInterval(timer);
  }, [open, active]);

  const goTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const tabs = [
    { id: "profile", label: "Profile Scan", icon: User },
    { id: "skills", label: "Skill Scan", icon: Code2 },
    { id: "projects", label: "Project Launch", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "resume", label: "Resume", icon: Download },
  ];

  const renderContent = () => {
    if (active === "profile") {
      return (
        <motion.div
          key="profile"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.8fr]"
        >
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-300">
              // Profile Scan
            </p>

            <h3 className="mt-5 text-4xl font-black text-white sm:text-5xl">
              Hello,{" "}
              <span className="bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent">
                I'm Manav
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-9 text-slate-300">
              {typedText}
              <span className="animate-pulse text-blue-300">|</span>
            </p>

            <button
              type="button"
              onClick={() => goTo("#profile")}
              className="mt-8 w-fit rounded-2xl border border-purple-400/50 bg-purple-500/10 px-6 py-4 text-xs font-black uppercase tracking-wider text-white shadow-[0_0_30px_rgba(168,85,247,.25)] transition hover:bg-purple-500/20"
            >
              Go To Profile →
            </button>
          </div>

          <Hologram icon={User} />
        </motion.div>
      );
    }

    if (active === "skills") {
      return (
        <motion.div
          key="skills"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-300">
            // Skill Scanner
          </p>

          <h3 className="mt-5 text-4xl font-black text-white">Core Skills</h3>

          <div className="mt-8 grid gap-5">
            {skills.map(([skill, level]) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="mb-3 flex justify-between text-sm font-bold">
                  <span>{skill}</span>
                  <span className="text-blue-300">{level}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo("#profile")}
            className="mt-8 rounded-2xl bg-blue-600 px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
          >
            View Full Skills →
          </button>
        </motion.div>
      );
    }

    if (active === "projects") {
      return (
        <motion.div
          key="projects"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-300">
            // Project Launcher
          </p>

          <h3 className="mt-5 text-4xl font-black text-white">
            Projects Detected
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => goTo("#projects")}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                <FolderKanban className="mb-4 h-6 w-6 text-blue-300" />
                <h4 className="font-black text-white">{project.title}</h4>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                  Launch Section →
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      );
    }

    if (active === "contact") {
      return (
        <motion.div
          key="contact"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-300">
            // Contact Signal
          </p>

          <h3 className="mt-5 text-4xl font-black text-white">Let's Connect</h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ContactBox
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactBox
              label="GitHub"
              value="GitHub Profile"
              href={personalInfo.github}
            />
            <ContactBox
              label="LinkedIn"
              value="LinkedIn Profile"
              href={personalInfo.linkedin}
            />
          </div>

          <button
            type="button"
            onClick={() => goTo("#contact")}
            className="mt-8 rounded-2xl bg-blue-600 px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
          >
            Open Contact Form →
          </button>
        </motion.div>
      );
    }

    return (
      <motion.div
        key="resume"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        className="flex min-h-[360px] flex-col items-center justify-center text-center"
      >
        <Download className="h-14 w-14 text-blue-300" />

        <h3 className="mt-6 text-4xl font-black text-white">Resume Access</h3>

        <p className="mt-4 max-w-xl text-slate-300">
          Open my resume to view education, skills, projects and achievements.
        </p>

        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-blue-700"
        >
          Open Resume
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>
    );
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-[#020817] text-blue-300 shadow-[0_0_45px_rgba(37,99,235,.65)] transition hover:scale-110 hover:bg-blue-600 hover:text-white"
        aria-label="Open Manav OS"
      >
        <Zap className="h-7 w-7" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] overflow-y-auto bg-black/90 p-4 text-white backdrop-blur-xl sm:p-6"
          >
            <div className="pointer-events-none fixed inset-0 opacity-25">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.12)_1px,transparent_1px)] bg-[size:44px_44px]" />
            </div>

            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 40 }}
              className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/30 bg-[#020817] shadow-2xl shadow-blue-950/60"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Code2 className="h-7 w-7 text-blue-300" />

                <div className="text-center">
                  <h2 className="text-4xl font-black tracking-[0.2em] text-blue-200">
                    MANAV OS
                  </h2>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-slate-500">
                    Portfolio Command Center
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-6 p-5 lg:grid-cols-[300px_1fr] lg:p-8">
                <aside className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 text-center">
                  <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border border-purple-400/60 bg-purple-500/10 shadow-[0_0_45px_rgba(168,85,247,.35)]">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.fullName}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase text-white">
                    Manav Rabadiya
                  </h3>

                  <p className="mt-2 text-sm font-bold text-blue-300">
                    Frontend Developer
                  </p>

                  <div className="mx-auto mt-8 max-w-[220px] rounded-2xl border border-green-400/20 bg-green-500/10 p-4">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                      <span className="text-xs font-black uppercase tracking-wider text-green-300">
                        System Status
                      </span>
                    </div>
                    <p className="text-2xl font-black text-green-300">ACTIVE</p>
                  </div>
                </aside>

                <main className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    {renderContent()}
                  </AnimatePresence>
                </main>
              </div>

              <div className="grid gap-4 border-t border-white/10 p-5 sm:grid-cols-5 lg:p-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActive(tab.id)}
                      className={`rounded-2xl border p-5 transition ${
                        active === tab.id
                          ? "border-purple-400 bg-purple-500/15 text-purple-200 shadow-[0_0_30px_rgba(168,85,247,.25)]"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-blue-400/40 hover:bg-blue-500/10"
                      }`}
                    >
                      <Icon className="mx-auto mb-3 h-7 w-7" />
                      <span className="text-xs font-black uppercase tracking-wider">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hologram({ icon: Icon }) {
  return (
    <div className="relative hidden items-center justify-center lg:flex">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute h-72 w-72 rounded-full border border-dashed border-blue-400/40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute h-52 w-52 rounded-full border border-purple-400/30"
      />
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_70px_rgba(59,130,246,.65)]">
        <Icon className="h-16 w-16 text-white" />
      </div>
    </div>
  );
}

function ContactBox({ label, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-blue-400/50 hover:bg-blue-500/10"
    >
      <Mail className="mb-4 h-6 w-6 text-blue-300" />
      <p className="text-xs font-black uppercase tracking-wider text-blue-300">
        {label}
      </p>
      <p className="mt-2 break-all text-sm font-bold text-slate-300">{value}</p>
    </a>
  );
}
