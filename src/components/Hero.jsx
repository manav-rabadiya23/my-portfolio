import {
  ArrowRight,
  Atom,
  Award,
  Braces,
  Code2,
  Layers,
  Palette,
  Rocket,
  Sparkles,
  User,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const [lightsOn, setLightsOn] = useState(false);

  const orbitSkills = [
    { icon: Atom, color: "text-cyan-400" },
    { icon: Braces, color: "text-yellow-400" },
    { icon: Palette, color: "text-pink-400" },
    { icon: Code2, color: "text-blue-400" },
    { icon: Layers, color: "text-purple-400" },
    { icon: Zap, color: "text-orange-400" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020817] px-4 pt-24 text-white sm:px-6 sm:pt-28 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#122142_0%,#020817_48%,#000_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        {Array.from({ length: 45 }).map((_, i) => (
          <motion.span
            key={i}
            animate={
              lightsOn
                ? { opacity: [0.08, 0.8, 0.08], scale: [1, 1.7, 1] }
                : { opacity: [0.03, 0.12, 0.03] }
            }
            transition={{
              duration: 2 + (i % 5) * 0.35,
              repeat: Infinity,
              delay: i * 0.06,
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-300"
            style={{
              left: `${6 + ((i * 29) % 88)}%`,
              top: `${12 + ((i * 31) % 78)}%`,
            }}
          />
        ))}
      </div>

      {/* LED PANEL */}
      <div className="absolute left-1/2 top-20 z-50 -translate-x-1/2 sm:top-24">
        <motion.button
          type="button"
          onClick={() => setLightsOn(true)}
          whileTap={{ scale: 0.96 }}
          animate={{
            backgroundColor: lightsOn ? "#dbeafe" : "#0f172a",
            boxShadow: lightsOn
              ? "0 0 40px rgba(147,197,253,1), 0 0 120px rgba(37,99,235,.85)"
              : "0 0 14px rgba(255,255,255,.08)",
          }}
          transition={{ duration: 0.8 }}
          className="relative flex h-8 w-[210px] items-center justify-center rounded-full border border-blue-300/30 bg-slate-950 shadow-inner sm:h-9 sm:w-[330px] md:w-[390px]"
        >
          <span className="absolute inset-x-5 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-blue-300/40" />

          {lightsOn && (
            <>
              <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-x-4 top-1/2 h-2 -translate-y-1/2 rounded-full bg-blue-200 blur-sm"
              />

              <motion.span
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1 }}
                className="absolute left-1/2 top-8 h-[300px] w-[260px] origin-top -translate-x-1/2 bg-gradient-to-b from-blue-200/35 via-blue-500/10 to-transparent blur-2xl sm:h-[440px] sm:w-[480px]"
              />
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {!lightsOn && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 text-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 sm:text-xs"
            >
              Tap to turn on my journey
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {!lightsOn && (
        <motion.div
          exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center"
        >
          <motion.h1
            animate={{ opacity: [0.04, 0.11, 0.04] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="select-none text-5xl font-black uppercase leading-[0.85] tracking-tight text-white sm:text-8xl lg:text-[140px]"
          >
            Rabadiya
            <br />
            Manav
          </motion.h1>
        </motion.div>
      )}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 pt-28 sm:pt-32 lg:grid-cols-[1fr_0.85fr] lg:gap-12 lg:pt-8">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -70, filter: "blur(18px)" }}
          animate={
            lightsOn
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -70, filter: "blur(18px)" }
          }
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="order-2 pb-10 text-center lg:order-1 lg:pb-0 lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-blue-300 sm:text-xs">
            <Rocket className="h-4 w-4" />
            Frontend Portfolio
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            <span className="block bg-gradient-to-r from-blue-300 via-white to-blue-500 bg-clip-text text-transparent">
              Rabadiya
            </span>
            <span className="relative block text-white">
              Manav
              <span className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.8)] lg:left-0 lg:translate-x-0" />
            </span>
          </h1>

          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.16em] text-blue-400 sm:text-sm">
            Frontend Developer • React Learner • BCA Student
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg lg:mx-0">
            I build clean, responsive and modern web interfaces using React,
            Tailwind CSS, JavaScript and Firebase.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["React", "Tailwind", "Firebase", "JavaScript"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={lightsOn ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group w-full rounded-2xl bg-blue-600 px-5 py-4 shadow-[0_0_30px_rgba(37,99,235,.35)] transition hover:bg-blue-700 sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <User className="h-5 w-5" />
                <span className="text-sm font-black uppercase tracking-wider">
                  View Projects
                </span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href="#certificates"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-xl transition hover:bg-white/10 sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-black uppercase tracking-wider">
                  Achievements
                </span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 100 }}
          animate={
            lightsOn
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.3, y: 100 }
          }
          transition={{
            delay: 0.9,
            duration: 1,
            type: "spring",
            stiffness: 80,
          }}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            animate={lightsOn ? { y: [0, -8, 0] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[230px] w-[230px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px] xl:h-[410px] xl:w-[410px]"
          >
            <motion.div
              animate={lightsOn ? { rotate: 360 } : {}}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-18px] rounded-full border border-dashed border-blue-400/50 sm:inset-[-38px]"
            />

            <motion.div
              animate={lightsOn ? { rotate: -360 } : {}}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-5 rounded-full border border-blue-500/25 sm:inset-9"
            />

            <div className="absolute inset-8 rounded-full bg-blue-600 shadow-[0_0_90px_rgba(37,99,235,.9)] sm:inset-12" />

            <motion.img
              initial={{ opacity: 0, y: 70, scale: 0.92 }}
              animate={
                lightsOn
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 70, scale: 0.92 }
              }
              transition={{ delay: 1.15, duration: 0.8, ease: "easeOut" }}
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              className="absolute bottom-3 left-1/2 z-30 h-[270px] w-auto -translate-x-1/2 object-contain sm:bottom-8 sm:h-[400px] md:h-[440px] xl:h-[500px]"
            />

            <motion.div
              animate={lightsOn ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-26px] z-10 rounded-full sm:inset-[-56px]"
            >
              {orbitSkills.map((skill, index) => {
                const Icon = skill.icon;
                const positions = [
                  "left-1/2 top-0 -translate-x-1/2",
                  "right-0 top-[22%]",
                  "right-0 bottom-[22%]",
                  "left-1/2 bottom-0 -translate-x-1/2",
                  "left-0 bottom-[22%]",
                  "left-0 top-[22%]",
                ];

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      lightsOn
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: 1.5 + index * 0.08, duration: 0.45 }}
                    className={`absolute ${positions[index]} flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/40 bg-[#020817] shadow-[0_0_25px_rgba(37,99,235,.55)] sm:h-12 sm:w-12 md:h-14 md:w-14`}
                  >
                    <motion.span
                      animate={lightsOn ? { rotate: -360 } : { rotate: 0 }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${skill.color}`}
                      />
                    </motion.span>
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
