/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#FEF3E2",
        "bg-surface": "#FEF3E2",
        "bg-elevated": "#F7E8D4",
        "bg-section-alt": "#FEF3E2",
        "accent-primary": "#C9862A",
        "accent-hover": "#D4882A",
        "accent-secondary": "#4CAF7D",
        "accent-steel": "#7EB8C9",
        "text-primary": "#1B2A3B",
        "text-secondary": "#3A4A5B",
        "text-muted": "#64748B",
        "border-subtle": "rgba(201,134,42,0.15)",
        "border-accent": "rgba(201,134,42,0.4)",
        "glass-bg": "rgba(254,243,226,0.85)"
      },
      fontFamily: {
        heading: ["'Outfit'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"]
      },
      letterSpacing: {
        tighter: "-0.03em",
      }
    }
  },
  plugins: []
};
