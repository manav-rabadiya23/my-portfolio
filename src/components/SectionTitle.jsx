export default function SectionTitle({ eyebrow, title, highlight, darkMode }) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-14">
      <div>
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-blue-600">{eyebrow}</p>
        <h2 className={`text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl ${darkMode ? "text-white" : "text-slate-950"}`}>
          {title} {highlight && <span className="text-blue-600">{highlight}</span>}
        </h2>
      </div>
      <div className="hidden h-px flex-1 bg-blue-600/20 sm:block" />
    </div>
  );
}
