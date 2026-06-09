import {
  ArrowRight,
  Atom,
  Award,
  Braces,
  Code2,
  Layers,
  Palette,
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0e1d3b_0%,#020817_48%,#000_100%)]" />

      {/* DARK SHADE WHEN LIGHT ON */}
      {lightsOn && (
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_20%,transparent_0%,transparent_18%,rgba(0,0,0,0.45)_38%,rgba(0,0,0,0.9)_100%)]" />
      )}

      {/* STARS */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        {Array.from({ length: 45 }).map((_, i) => (
          <motion.span
            key={i}
            animate={
              lightsOn
                ? { opacity: [0.08, 0.65, 0.08], scale: [1, 1.6, 1] }
                : { opacity: 0.04 }
            }
            transition={{
              duration: 2 + (i % 5) * 0.35,
              repeat: Infinity,
              delay: i * 0.08,
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-300"
            style={{
              left: `${7 + ((i * 31) % 86)}%`,
              top: `${12 + ((i * 27) % 76)}%`,
            }}
          />
        ))}
      </div>

      {/* LED LIGHT */}
      <div className="absolute left-1/2 top-[74px] z-50 -translate-x-1/2">
        <motion.button
          onClick={() => setLightsOn(true)}
          whileTap={{ scale: 0.96 }}
          animate={{
            boxShadow: lightsOn
              ? "0 0 35px rgba(147,197,253,1), 0 0 130px rgba(37,99,235,.95)"
              : "0 0 14px rgba(255,255,255,.12)",
          }}
          transition={{ duration: 0.8 }}
          className="relative h-10 w-[200px] overflow-visible rounded-full border border-blue-200/50 bg-gradient-to-b from-white via-blue-100 to-blue-500 shadow-[0_0_45px_rgba(147,197,253,.75)] sm:w-[360px] md:w-[520px]"
        >
          <span className="absolute inset-x-8 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-blue-300/70" />

          {["left-6", "left-[24%]", "left-[43%]", "right-[24%]", "right-6"].map(
            (pos, i) => (
              <span
                key={i}
                className={`absolute ${pos} top-1/2 h-2 w-12 -translate-y-1/2 rounded-full bg-white blur-[2px]`}
              />
            ),
          )}

          {lightsOn && (
            <>
              <span className="absolute inset-x-5 top-1/2 h-3 -translate-y-1/2 rounded-full bg-white blur-md" />

              {/* REAL DOWN SPOTLIGHT */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1 }}
                className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[620px] w-[520px] origin-top -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(255,255,255,0.16)_45deg,rgba(96,165,250,0.28)_90deg,rgba(255,255,255,0.16)_135deg,transparent_180deg)] blur-3xl"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[560px] w-[260px] -translate-x-1/2 bg-gradient-to-b from-white/30 via-blue-300/20 to-transparent blur-2xl"
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
              className="mt-3 text-center text-[9px] font-black uppercase tracking-[0.35em] text-blue-300 sm:text-xs"
            >
              Tap LED Panel
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {!lightsOn && (
          <motion.div
            exit={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-40 flex items-center justify-center text-center"
          >
            <motion.h1
              animate={{ opacity: [0.035, 0.09, 0.035] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="select-none text-5xl font-black uppercase leading-[0.85] tracking-tight text-white sm:text-8xl lg:text-[140px]"
            >
              Rabadiya
              <br />
              Manav
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-8 pt-32 sm:pt-36 md:pt-40 lg:grid-cols-[1.05fr_0.78fr] lg:gap-8 lg:pt-16">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2, y: 120 }}
          animate={
            lightsOn
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.2, y: 120 }
          }
          transition={{
            delay: 1.2,
            duration: 1,
            type: "spring",
            stiffness: 80,
          }}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            animate={lightsOn ? { y: [0, -8, 0] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[260px] w-[260px] sm:h-[330px] sm:w-[330px] md:h-[380px] md:w-[380px] lg:h-[410px] lg:w-[410px]"
          >
            <motion.div
              animate={lightsOn ? { rotate: 360 } : {}}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-26px] rounded-full border border-dashed border-blue-400/45 sm:inset-[-44px] lg:inset-[-58px]"
            />

            <motion.div
              animate={lightsOn ? { rotate: -360 } : {}}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-5 rounded-full border border-blue-500/25 sm:inset-9"
            />

            <div className="absolute inset-10 rounded-full bg-blue-600/80 shadow-[0_0_115px_rgba(37,99,235,.95)] sm:inset-14" />

            <motion.div
              initial={{ opacity: 0, y: 70, scale: 0.92 }}
              animate={
                lightsOn
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 70, scale: 0.92 }
              }
              transition={{ delay: 1.35, duration: 0.8, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 z-30 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-blue-300/70 bg-slate-900 shadow-[0_0_38px_rgba(96,165,250,.9),inset_0_0_35px_rgba(37,99,235,.35)] sm:h-[295px] sm:w-[295px] md:h-[340px] md:w-[340px] lg:h-[365px] lg:w-[365px]"
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                className="h-full w-full object-cover object-[center_38%]"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
            </motion.div>

            <motion.div
              animate={lightsOn ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-26px] z-20 rounded-full sm:inset-[-56px] lg:inset-[-70px]"
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
                    transition={{ delay: 1.9 + index * 0.1, duration: 0.45 }}
                    className={`absolute ${positions[index]} flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/45 bg-[#020817] shadow-[0_0_25px_rgba(37,99,235,.65)] sm:h-12 sm:w-12`}
                  >
                    <motion.span
                      animate={lightsOn ? { rotate: -360 } : { rotate: 0 }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon className={`h-5 w-5 ${skill.color}`} />
                    </motion.span>
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80, filter: "blur(18px)" }}
          animate={
            lightsOn
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -80, filter: "blur(18px)" }
          }
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
          className="order-2 pb-10 text-center lg:order-1 lg:pb-0 lg:text-left"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-blue-300 shadow-[0_0_25px_rgba(37,99,235,.25)] sm:text-xs">
            <Sparkles className="h-4 w-4" />
            Portfolio Activated
          </div>

          <h1 className="relative text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
            <span className="block bg-gradient-to-r from-blue-300 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.65)]">
              Rabadiya
            </span>
            <span className="relative block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              Manav
              <span className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.9)] lg:left-0 lg:translate-x-0" />
            </span>
          </h1>

          <p className="mt-6 text-[9px] font-black uppercase tracking-[0.14em] text-blue-400 sm:text-sm">
            Frontend Developer • BCA Student
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 md:text-lg lg:mx-0">
            I create modern, responsive and user-friendly web experiences using
            React, Tailwind CSS and creative frontend animations.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:justify-start">
            <motion.a
              href="#profile"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group relative w-full overflow-hidden rounded-2xl bg-blue-600 px-5 py-3.5 shadow-[0_0_35px_rgba(37,99,235,.55)] sm:w-auto sm:px-6 sm:py-4"
            >
              <span className="relative flex items-center justify-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                  <User className="h-5 w-5 text-white" />
                </span>
                <span className="text-left">
                  <span className="block text-[9px] font-black uppercase tracking-[0.25em] text-blue-100">
                    Explore
                  </span>
                  <span className="block text-sm font-black uppercase tracking-wider text-white">
                    About Me
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href="#certificates"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group relative w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 backdrop-blur-xl transition hover:bg-white/10 sm:w-auto sm:px-6 sm:py-4"
            >
              <span className="relative flex items-center justify-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-500/10">
                  <Award className="h-5 w-5 text-yellow-400" />
                </span>
                <span className="text-left">
                  <span className="block text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
                    View
                  </span>
                  <span className="block text-sm font-black uppercase tracking-wider text-white">
                    Achievements
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
