/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#1a202c",
        },
        accent: {
          DEFAULT: "#a78bfa",
          dark: "#6d28d9",
          foreground: "#ffffff",
        },
        text: {
          primary: "#1a202c",
          secondary: "#4a5568",
          light: "#718096",
          white: "#ffffff",
        },
        bg: {
          primary: "#ffffff",
          secondary: "#f7fafc",
          dark: "#1a202c",
        },
        border: {
          light: "rgba(255, 255, 255, 0.2)",
          dark: "rgba(0, 0, 0, 0.1)",
          DEFAULT: "hsl(var(--border))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 25px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 40px rgba(0, 0, 0, 0.1)",
        glow: "0 0 40px rgba(139, 92, 246, 0.3)",
      },
      animation: {
        "slide-up": "slideInUp 0.8s ease both",
        "fade-in": "fadeIn 0.6s ease both",
        "scale-in": "scaleIn 0.6s ease both",
        float: "cardFloat 8s ease-in-out infinite",
        "pulse-dot": "pulse 2s infinite",
        "tech-scroll": "techScroll 30s linear infinite",
      },
      keyframes: {
        slideInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        cardFloat: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "25%": {
            transform: "translateY(-20px) rotate(2deg)",
          },
          "50%": {
            transform: "translateY(-40px) rotate(0deg)",
          },
          "75%": {
            transform: "translateY(-20px) rotate(-2deg)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "translateY(-50%) scale(1)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-50%) scale(1.3)",
          },
        },
        techScroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
}
