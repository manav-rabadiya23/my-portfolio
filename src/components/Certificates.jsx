import { useState } from "react";
import { Award, ChevronRight, ShieldCheck, Trophy } from "lucide-react";
import { certificates } from "../data/portfolioData";

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const openCertificate = (file) => {
    window.open(
      `/${file}#toolbar=0&navpanes=0&scrollbar=0`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="certificates"
      onContextMenu={(e) => e.preventDefault()}
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#020817] px-4 py-16 text-white sm:scroll-mt-24 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.16),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.28em] text-blue-300">
            <Trophy className="h-4 w-4" />
            Learning Proof
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Certifications<span className="text-blue-500">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My verified certificates and learning achievements.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <Award className="mx-auto mb-3 h-6 w-6 text-blue-400" />
            <p className="text-2xl font-black">{certificates.length}+</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Certificates
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <ShieldCheck className="mx-auto mb-3 h-6 w-6 text-blue-400" />
            <p className="text-2xl font-black">Verified</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Learning
            </p>
          </div>

          <div className="col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl sm:col-span-1">
            <Trophy className="mx-auto mb-3 h-6 w-6 text-yellow-400" />
            <p className="text-2xl font-black">10+</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Achievements
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates
            .slice(0, showAll ? certificates.length : 6)
            .map((cert, index) => (
              <div
                key={cert.title}
                className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 sm:p-6"
              >
                <div className="absolute right-4 top-4 text-5xl font-black text-white/[0.03]">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/15 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.18)]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-blue-300">
                    {cert.org}
                  </span>
                </div>

                <h3 className="flex-1 text-base font-black uppercase leading-7 text-white sm:text-lg">
                  {cert.title}
                </h3>

                <button
                  type="button"
                  onClick={() => openCertificate(cert.file)}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]"
                >
                  Verify Certificate
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            ))}
        </div>

        {certificates.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="rounded-2xl border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-blue-300 transition hover:bg-blue-600 hover:text-white"
            >
              {showAll ? "Show Less" : "View More Certificates"}
            </button>
          </div>
        )}

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-slate-500">
          Certificates are displayed for verification purpose only.
        </p>
      </div>
    </section>
  );
}
