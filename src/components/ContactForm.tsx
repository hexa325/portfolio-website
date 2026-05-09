"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mqegdndp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form action="https://formspree.io/f/mqegdndp" method="POST" onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/60 mb-3 ml-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-6 py-4 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:border-black/20 dark:focus:border-white/30"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/60 mb-3 ml-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-6 py-4 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:border-black/20 dark:focus:border-white/30"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-black/40 dark:text-white/60 mb-3 ml-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-6 py-4 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:border-black/20 dark:focus:border-white/30 resize-none"
          placeholder="How can I help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative w-full px-8 py-5 bg-black text-white dark:bg-white dark:text-black rounded-2xl overflow-hidden md:hover:scale-[1.02] font-bold text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-black/5 dark:shadow-white/10 transition-colors duration-500"
      >
        <span className="relative z-10 md:group-hover:text-white dark:md:group-hover:text-black transition-colors duration-500">
          {status === "sending" ? "Sending..." : "Submit Inquiry"}
        </span>
        <div className="absolute inset-0 bg-blue-600 translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl" />
      </button>

      {status === "success" && (
        <p className="text-sm font-bold text-green-500 text-center animate-fade-in">
          Message sent successfully! I&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-bold text-red-500 text-center animate-fade-in">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
