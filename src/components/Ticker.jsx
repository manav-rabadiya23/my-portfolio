export default function Ticker({ darkMode }) {
  const text = [
    "🚀 React & Tailwind Portfolio",
    "BCA Student @ CHARUSAT",
    "Frontend Developer • UI Design Learner",
    "Open to internships and project work",
  ];
  return (
    <div className="overflow-hidden pt-[72px] sm:pt-[78px] lg:pt-20">
      <div className={`overflow-hidden whitespace-nowrap py-3 text-sm font-semibold sm:text-base ${darkMode ? "bg-slate-900 text-white" : "bg-blue-600 text-white"}`}>
        <div className="marquee-track inline-flex">
          {[...text, ...text, ...text].map((item, index) => <span className="px-6" key={index}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}
