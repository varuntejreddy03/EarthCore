/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#080B08",
        "bg-surface": "#0F1410",
        "bg-elevated": "#161D17",
        "bg-section-alt": "#0C1309",
        "accent-primary": "#D4882A",
        "accent-hover": "#E8A030",
        "accent-secondary": "#4CAF7D",
        "accent-steel": "#7EB8C9",
        "text-primary": "#EEE8DC",
        "text-secondary": "#9EA898",
        "text-muted": "#5A6057",
        "border-subtle": "rgba(212,136,42,0.08)",
        "border-accent": "rgba(212,136,42,0.35)",
        "glass-bg": "rgba(8,11,8,0.85)"
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
