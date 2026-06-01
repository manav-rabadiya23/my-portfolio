import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { socialLinks } from "../data/portfolioData";

export default function Footer({ darkMode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const whatsappNumber = "918200833181";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setStatus(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit Indian number";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    if (!navigator.onLine) {
      setStatus({
        type: "error",
        message: "No internet connection detected.",
      });
      return;
    }

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields.",
      });
      return;
    }

    try {
      const text = `Hello Manav,

New Portfolio Contact Request

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        text,
      )}`;

      const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      if (!opened) {
        setStatus({
          type: "error",
          message: "Popup blocked. Please allow popups and try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "WhatsApp opened successfully. Please press Send in WhatsApp.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to open WhatsApp. Please try again later.",
      });
    }
  };

  return (
    <footer
      id="contact"
      className={`mt-16 border-t py-14 sm:py-16 ${
        darkMode ? "border-slate-800" : "border-slate-200"
      }`}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#1D4ED8]">
            Contact
          </p>

          <h2
            className={`mb-5 text-4xl font-black tracking-tight sm:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Let&apos;s Connect
          </h2>

          <p
            className={`mb-8 max-w-xl text-base leading-8 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Have an internship opportunity, frontend project, or collaboration
            idea? Send me your message directly on WhatsApp.
          </p>

          <div className="space-y-4">
            <ContactInfo
              darkMode={darkMode}
              icon={Mail}
              label="Email"
              value={socialLinks.email}
              href={`mailto:${socialLinks.email}`}
            />

            <ContactInfo
              darkMode={darkMode}
              icon={Phone}
              label="Phone"
              value="+91 8200833181"
              href={`tel:${socialLinks.phone}`}
            />

            <ContactInfo
              darkMode={darkMode}
              icon={MapPin}
              label="Location"
              value="Vadodara, Gujarat, India"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`rounded-[2rem] border p-5 shadow-xl sm:p-8 ${
            darkMode
              ? "border-slate-800 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
              darkMode={darkMode}
            />

            <InputField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="10 digit number"
              darkMode={darkMode}
              inputMode="numeric"
              maxLength={10}
            />
          </div>

          <div className="mt-4">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="your@email.com"
              darkMode={darkMode}
            />
          </div>

          <div className="mt-4">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`mt-2 w-full resize-none rounded-2xl border px-4 py-3 text-sm font-semibold outline-none transition-all ${
                errors.message
                  ? "border-red-500"
                  : darkMode
                    ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus:border-blue-500"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500"
              }`}
            />

            {errors.message && (
              <p className="mt-1 text-xs font-bold text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          {status && (
            <div
              className={`mt-4 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm font-bold ${
                status.type === "success"
                  ? "border-green-300 bg-green-50 text-green-700"
                  : "border-red-300 bg-red-50 text-red-700"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-6 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/25"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>

      <div
        className={`mt-12 flex flex-col gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between ${
          darkMode
            ? "border-slate-800 text-slate-400"
            : "border-slate-200 text-slate-500"
        }`}
      >
        <p>© {new Date().getFullYear()} Manav Rabadiya. All rights reserved.</p>
        <p>Built with React, Tailwind CSS and Vite.</p>
      </div>
    </footer>
  );
}

function ContactInfo({ darkMode, icon: Icon, label, value, href }) {
  const content = (
    <div
      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
        darkMode
          ? "border-slate-800 bg-slate-900 hover:border-blue-500/40"
          : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5 text-[#1D4ED8]" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
          {label}
        </p>
        <p
          className={`break-words font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  darkMode,
  type = "text",
  inputMode,
  maxLength,
}) {
  return (
    <div>
      <label className="text-xs font-black uppercase tracking-widest text-slate-400">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className={`mt-2 w-full rounded-2xl border px-4 py-3 text-sm font-semibold outline-none transition-all ${
          error
            ? "border-red-500"
            : darkMode
              ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus:border-blue-500"
              : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500"
        }`}
      />

      {error && <p className="mt-1 text-xs font-bold text-red-500">{error}</p>}
    </div>
  );
}
