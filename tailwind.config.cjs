/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#F9F7F2",
        "bg-surface": "#F0EBE1",
        "bg-elevated": "#EBE4D5",
        "bg-section-alt": "#FFFFFF",
        "accent-primary": "#C9862A",
        "accent-hover": "#D4882A",
        "accent-secondary": "#4CAF7D",
        "accent-steel": "#7EB8C9",
        "text-primary": "#1B2A3B",
        "text-secondary": "#3A4A5B",
        "text-muted": "#64748B",
        "border-subtle": "rgba(201,134,42,0.15)",
        "border-accent": "rgba(201,134,42,0.4)",
        "glass-bg": "rgba(249,247,242,0.85)"
      },
      fontFamily: {
        heading: ["'Fraunces'", "Georgia", "serif"],
        body: ["'Cabinet Grotesk'", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "monospace"]
      },
      letterSpacing: {
        tighter: "-0.03em",
      }
    }
  },
  plugins: []
};
