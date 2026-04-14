"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FORMSPREE_ID } from "@/lib/constants";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID || "placeholder");

  if (state.succeeded) {
    return (
      <div className="p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-3 text-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
          <FaCircleCheck className="w-5 h-5" style={{ color: "var(--accent)" }} />
        </div>
        <div>
          <p className="font-semibold text-sm">Message sent!</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  const isDisabled = state.submitting;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-3 py-2 text-sm rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-3 py-2 text-sm rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="w-full px-3 py-2 text-sm rounded-md border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="px-5 py-2 text-sm font-medium rounded-md bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
      >
        {state.submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
