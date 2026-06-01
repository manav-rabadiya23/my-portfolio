export default function Ticker({ darkMode }) {
  return (
    <div className="pt-[72px] sm:pt-[84px] lg:pt-24 overflow-hidden">
      <div
        className={`py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold overflow-hidden whitespace-nowrap ${
          darkMode ? "bg-slate-900 text-white" : "bg-[#1D4ED8] text-white"
        }`}
      >
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="inline-flex shrink-0" key={index}>
              <span className="px-6">
                🚀 Welcome to my personal portfolio website, where I showcase my
                skills, certifications, and learning journey.
              </span>
              <span className="px-6">
                I am a BCA student at CHARUSAT with a strong interest in web
                development and modern technologies.
              </span>
              <span className="px-6">
                Currently learning React, PHP, JavaScript, and UI design to
                build better user experiences.
              </span>
              <span className="px-6">
                Always open to learning new things and working on exciting
                projects. 🚀
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
