import type { Metadata } from "next"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Solutions from "../components/Solutions"
import Stats from "../components/Stats"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ProgressBar from "../components/ProgressBar"


export const metadata: Metadata = {
  title: "LuaData - AI, ML & Data Science Solutions",
  description:
    "Transform your business with cutting-edge AI and machine learning solutions. Custom ML models, data science consulting, and intelligent automation.",
  keywords: "AI, machine learning, data science, predictive analytics, automation, ML models",
  openGraph: {
    title: "LuaData - AI, ML & Data Science Solutions",
    description: "Transform your business with cutting-edge AI and machine learning solutions.",
    url: "https://luadata.net",
    siteName: "LuaData",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuaData - AI, ML & Data Science Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuaData - AI, ML & Data Science Solutions",
    description: "Transform your business with cutting-edge AI and machine learning solutions.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
