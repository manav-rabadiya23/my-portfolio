import {
  BookOpen,
  Code2,
  GraduationCap,
  Heart,
  Languages,
  MapPin,
  Sparkles,
  User,
} from "lucide-react";
import { TouchCard } from "./Touch";
import {
  learning,
  personalData,
  skills,
  softSkills,
} from "../data/portfolioData";

export default function Profile({ darkMode }) {
  return (
    <section id="profile" className="py-16 sm:py-20 lg:py-24 animate-fadeUp">
      {" "}
      <div className="mb-10 sm:mb-14">
        <p className="text-[#1D4ED8] text-xs font-black uppercase tracking-[0.35em] mb-3">
          Profile
        </p>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          About Me
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        <TouchCard
          className={`lg:col-span-1 rounded-[2rem] border p-6 sm:p-8 ${
            darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200 shadow-sm"
          }`}
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6">
            <User className="w-7 h-7 text-[#1D4ED8]" />
          </div>

          <h3 className="text-2xl font-black mb-4">Personal Details</h3>

          <div className="space-y-4">
            {Object.entries(personalData).map(([key, value]) => (
              <div key={key}>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {key}
                </p>
                <p
                  className={`mt-1 text-sm font-bold break-words ${
                    darkMode ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </TouchCard>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <InfoCard
            darkMode={darkMode}
            icon={GraduationCap}
            title="Education"
            text="Currently pursuing BCA at CHARUSAT - CMPICA. Passionate about React.js, modern frontend development, UI/UX design, and building production-level web applications."
          />

          <InfoCard
            darkMode={darkMode}
            icon={MapPin}
            title="Location"
            text="Based in Vadodara, Gujarat. Focused on creating responsive, modern, and user-friendly digital experiences."
          />

          <InfoCard
            darkMode={darkMode}
            icon={Languages}
            title="Languages"
            text="Comfortable communicating in Gujarati, Hindi, and English."
          />

          <InfoCard
            darkMode={darkMode}
            icon={Heart}
            title="Interest"
            text="Passionate about web development, UI design, React, and learning new technologies step by step."
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
        <SkillBox
          darkMode={darkMode}
          icon={Code2}
          title="Current Skills"
          items={skills}
        />

        <SkillBox
          darkMode={darkMode}
          icon={BookOpen}
          title="Currently Learning"
          items={learning}
        />

        <SkillBox
          darkMode={darkMode}
          icon={Sparkles}
          title="Soft Skills"
          items={softSkills}
        />
      </div>
    </section>
  );
}

function InfoCard({ darkMode, icon: Icon, title, text }) {
  return (
    <TouchCard
      className={`rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-1 ${
        darkMode
          ? "bg-slate-900 border-slate-800 hover:bg-slate-800"
          : "bg-white border-slate-200 shadow-sm hover:shadow-lg"
      }`}
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-[#1D4ED8]" />
      </div>

      <h3 className="text-xl font-black mb-3">{title}</h3>

      <p
        className={`text-sm leading-7 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </TouchCard>
  );
}

function SkillBox({ darkMode, icon: Icon, title, items }) {
  return (
    <TouchCard
      className={`rounded-[2rem] border p-6 sm:p-7 ${
        darkMode
          ? "bg-slate-900 border-slate-800"
          : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-blue-600/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#1D4ED8]" />
        </div>
        <h3 className="text-lg font-black">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className={`px-4 py-2 rounded-full text-xs font-black border ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-slate-200"
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </TouchCard>
  );
}
