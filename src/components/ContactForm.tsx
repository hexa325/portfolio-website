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
    <form action="https://formspree.io/f/mqegdndp" method="POST" onSubmit={handleSubmit} className="space-y-8">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-black dark:text-white mb-3">
          [ Full Name ]
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-6 py-4 bg-transparent border-4 border-black dark:border-white focus:bg-blue-600/10 outline-none transition-colors font-mono font-bold"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-black dark:text-white mb-3">
          [ Email Address ]
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-6 py-4 bg-transparent border-4 border-black dark:border-white focus:bg-blue-600/10 outline-none transition-colors font-mono font-bold"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-black dark:text-white mb-3">
          [ Your Message ]
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-6 py-4 bg-transparent border-4 border-black dark:border-white focus:bg-blue-600/10 outline-none transition-colors font-mono font-bold resize-none"
          placeholder="How can I help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="sync-inv w-full"
      >
        {status === "sending" ? "Sending..." : "Submit Inquiry"}
      </button>

      {status === "success" && (
        <p className="text-sm font-bold text-green-600 dark:text-green-400 text-center uppercase tracking-tighter">
          &gt;&gt; Message sent successfully! &lt;&lt;
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-bold text-red-600 dark:text-red-400 text-center uppercase tracking-tighter">
          !! Something went wrong. Retry !!
        </p>
      )}
    </form>
  );
}
