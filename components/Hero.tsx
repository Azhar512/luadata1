"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Lightbulb, BarChart3, Zap, Box, Smartphone, PieChart } from "lucide-react"

const Hero = () => {
  useEffect(() => {
    const particleContainer = document.getElementById("hero-particles")
    if (!particleContainer) return

    const particleCount = 50
    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      speed: number
      size: number
      opacity: number

      constructor() {
        this.reset()
        this.y = Math.random() * window.innerHeight
      }

      reset() {
        this.x = Math.random() * window.innerWidth
        this.y = -10
        this.speed = 0.5 + Math.random() * 2
        this.size = 1 + Math.random() * 3
        this.opacity = 0.3 + Math.random() * 0.7
      }

      update() {
        this.y += this.speed
        if (this.y > window.innerHeight) {
          this.reset()
        }
      }

      render() {
        return `<div style="
          position: absolute;
          left: ${this.x}px;
          top: ${this.y}px;
          width: ${this.size}px;
          height: ${this.size}px;
          background: rgba(255, 255, 255, ${this.opacity});
          border-radius: 50%;
          pointer-events: none;
        "></div>`
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animateParticles = () => {
      particles.forEach((particle) => particle.update())
      particleContainer.innerHTML = particles.map((particle) => particle.render()).join("")
      requestAnimationFrame(animateParticles)
    }

    animateParticles()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-purple-600 to-accent-dark text-white overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
      <div id="hero-particles" className="absolute inset-0 pointer-events-none"></div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
              <span className="block">Transform Your</span>
              <span className="block">Business</span>
              <span className="block text-white">with Intelligent AI Solutions</span>
            </h1>

            <p
              className="text-xl opacity-90 mb-8 max-w-lg mx-auto md:mx-0 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              We build cutting-edge AI and machine learning systems that drive real business results. From predictive
              analytics to automated workflows, unlock the power of your data.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="#contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="#services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="floating-cards">
              <div className="card-3d">
                <div className="text-center z-10">
                  <Lightbulb className="w-12 h-12 mb-4 mx-auto text-white opacity-90" />
                  <div className="font-semibold text-white opacity-90">AI Models</div>
                </div>
              </div>
              <div className="card-3d">
                <div className="text-center z-10">
                  <BarChart3 className="w-12 h-12 mb-4 mx-auto text-white opacity-90" />
                  <div className="font-semibold text-white opacity-90">Analytics</div>
                </div>
              </div>
              <div className="card-3d">
                <div className="text-center z-10">
                  <Zap className="w-12 h-12 mb-4 mx-auto text-white opacity-90" />
                  <div className="font-semibold text-white opacity-90">Automation</div>
                </div>
              </div>
              <div className="card-3d">
                <div className="text-center z-10">
                  <Box className="w-12 h-12 mb-4 mx-auto text-white opacity-90" />
                  <div className="font-semibold text-white opacity-90">Smart Apps</div>
                </div>
              </div>
              <div className="card-3d">
                <div className="text-center z-10">
                  <Smartphone className="w-12 h-12 mb-4 mx-auto text-white opacity-90" />
                  <div className="font-semibold text-white opacity-90">Mobile AI</div>
                </div>
              </div>
              <div className="card-3d">
                <div className="text-center z-10">
                  <PieChart className="w-12 h-12 mb-4 mx-auto text-white opacity-90" />
                  <div className="font-semibold text-white opacity-90">Predictions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-icon"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
