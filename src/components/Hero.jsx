import {
  ArrowRight,
  Atom,
  Award,
  Braces,
  Code2,
  Flame,
  Globe,
  Layers,
  Palette,
  Rocket,
  Smartphone,
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#111c35_0%,#020817_48%,#000_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 38 }).map((_, i) => (
          <motion.span
            key={i}
            animate={
              lightsOn
                ? { opacity: [0.08, 0.8, 0.08], scale: [1, 1.6, 1] }
                : { opacity: 0.05 }
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

      {/* LED */}
      <div className="absolute left-1/2 top-20 z-50 -translate-x-1/2 sm:top-24">
        <motion.button
          onClick={() => setLightsOn(true)}
          whileTap={{ scale: 0.96 }}
          animate={{
            backgroundColor: lightsOn ? "#dbeafe" : "#0f172a",
            boxShadow: lightsOn
              ? "0 0 35px rgba(147,197,253,1), 0 0 100px rgba(37,99,235,.85)"
              : "0 0 10px rgba(255,255,255,.08)",
          }}
          transition={{ duration: 0.8 }}
          className="relative flex h-7 w-[170px] items-center justify-center rounded-full border border-blue-300/30 bg-slate-950 shadow-inner sm:h-8 sm:w-[300px] md:w-[360px]"
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
                transition={{ duration: 1.1 }}
                className="absolute left-1/2 top-7 h-[250px] w-[210px] origin-top -translate-x-1/2 bg-gradient-to-b from-blue-200/35 via-blue-500/10 to-transparent blur-2xl sm:top-8 sm:h-[420px] sm:w-[420px] lg:h-[480px]"
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
              className="mt-3 text-center text-[9px] font-black uppercase tracking-[0.3em] text-blue-300 sm:text-xs"
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
            className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center"
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

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 pt-24 sm:gap-12 sm:pt-28 md:pt-32 lg:grid-cols-[1fr_0.8fr] lg:gap-10 lg:pt-4">
        {/* PHOTO */}
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
            className="relative h-[210px] w-[210px] sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px] lg:h-[360px] lg:w-[360px] xl:h-[390px] xl:w-[390px]"
          >
            <motion.div
              animate={lightsOn ? { rotate: 360 } : {}}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-14px] rounded-full border border-dashed border-blue-400/50 sm:inset-[-34px] lg:inset-[-46px]"
            />

            <motion.div
              animate={lightsOn ? { rotate: -360 } : {}}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-blue-500/25 sm:inset-8"
            />

            <motion.div
              initial={{ scale: 0, borderRadius: "20px" }}
              animate={
                lightsOn
                  ? { scale: 1, borderRadius: "999px" }
                  : { scale: 0, borderRadius: "20px" }
              }
              transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-7 bg-blue-600 shadow-[0_0_90px_rgba(37,99,235,.9)] sm:inset-12"
            />

            <motion.img
              initial={{ opacity: 0, y: 70, scale: 0.92 }}
              animate={
                lightsOn
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 70, scale: 0.92 }
              }
              transition={{ delay: 1.35, duration: 0.8, ease: "easeOut" }}
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              className="absolute bottom-3 left-1/2 z-30 h-[250px] w-auto -translate-x-1/2 object-contain sm:bottom-8 sm:h-[380px] md:h-[420px] lg:h-[450px] xl:h-[480px]"
            />

            <motion.div
              animate={lightsOn ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-22px] z-10 rounded-full sm:inset-[-50px] lg:inset-[-62px]"
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
                    className={`absolute ${positions[index]} flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/40 bg-[#020817] shadow-[0_0_25px_rgba(37,99,235,.55)] sm:h-12 sm:w-12 md:h-13 md:w-13`}
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
            <Sparkles className="h-4 w-4" />
            Portfolio Activated
          </div>

          <h1 className="relative text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
            <span className="block bg-gradient-to-r from-blue-300 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]">
              Rabadiya
            </span>
            <span className="relative block text-white">
              Manav
              <span className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.8)] lg:left-0 lg:translate-x-0" />
            </span>
          </h1>

          <p className="mt-6 text-[9px] font-black uppercase tracking-[0.14em] text-blue-400 sm:text-sm">
            Frontend Developer • BCA Student
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg lg:mx-0">
            I create modern, responsive and user-friendly web experiences using
            React, Tailwind CSS and creative frontend animations.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={lightsOn ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="#profile"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group relative w-full overflow-hidden rounded-2xl bg-blue-600 px-5 py-3.5 shadow-[0_0_30px_rgba(37,99,235,.35)] sm:w-auto sm:px-6 sm:py-4"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
