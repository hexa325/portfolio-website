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

    // Replace with your form submission logic
    // Example: Formspree, Netlify Forms, or your own API
    try {
      // Simulating form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 focus:outline-none focus:border-blue-400 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 focus:outline-none focus:border-blue-400 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 focus:outline-none focus:border-blue-400 transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 bg-white text-black dark:bg-white dark:text-black bg-black text-white dark:bg-black dark:text-white rounded-full hover:opacity-90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
