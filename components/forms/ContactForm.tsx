"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const form = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        company: form.get("company"),
        message: form.get("message"),
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSuccess("✅ Message sent successfully.");
      e.currentTarget.reset();
    } else {
      setSuccess("❌ Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 space-y-6 mt-10"
    >
      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
      />

      <input
        name="company"
        placeholder="Company"
        className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none"
      />

      <textarea
        name="message"
        required
        placeholder="Tell us about your project..."
        className="w-full h-40 p-4 rounded-xl bg-black/30 border border-white/10 outline-none resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 font-semibold hover:opacity-90 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-center text-green-400">
          {success}
        </p>
      )}
    </form>
  );
}