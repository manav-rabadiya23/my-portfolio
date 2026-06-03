import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const text = `Hello Manav,%0A%0AName: ${encodeURIComponent(
      formData.name,
    )}%0AEmail: ${encodeURIComponent(
      formData.email,
    )}%0AMessage: ${encodeURIComponent(
      formData.message,
    )}%0A%0ASent from your portfolio website.`;

    window.open(
      `https://wa.me/${personalInfo.whatsappNumber}?text=${text}`,
      "_blank",
    );

    setFormData({ name: "", email: "", message: "" });
  };

  const getInputClass = (field) =>
    `w-full rounded-2xl border px-4 py-4 text-sm font-semibold outline-none transition-all duration-300 ${
      errors[field]
        ? "border-red-500 bg-red-500/10 text-white placeholder:text-red-300"
        : "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
    }`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-[#020817] px-4 py-14 text-white sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's"
          highlight="Connect."
          darkMode={true}
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Have a project or opportunity?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Feel free to contact me for frontend projects, internships,
              collaboration, or learning opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-300 transition hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-300">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400" />
                <span>{personalInfo.location || "Vadodara, Gujarat"}</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClass("name")}
                />
                {errors.name && (
                  <p className="mt-2 text-xs font-bold text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClass("email")}
                />
                {errors.email && (
                  <p className="mt-2 text-xs font-bold text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="7"
                value={formData.message}
                onChange={handleChange}
                className={`${getInputClass("message")} resize-none`}
              />
              {errors.message && (
                <p className="mt-2 text-xs font-bold text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
            >
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
