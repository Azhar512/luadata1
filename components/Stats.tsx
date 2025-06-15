"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Lightbulb, CheckCircle, BarChart3, Zap } from "lucide-react"

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const counters = document.querySelectorAll(".stat-number[data-target]")
          const statFills = document.querySelectorAll(".stat-fill")

          counters.forEach((counter) => {
            const target = Number.parseInt(counter.getAttribute("data-target") || "0")
            const duration = 2000 // 2 seconds
            const start = performance.now()

            const animate = (currentTime: number) => {
              const elapsed = currentTime - start
              const progress = Math.min(elapsed / duration, 1)

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const current = Math.floor(target * easeOutQuart)

              counter.textContent = current + "+"

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                counter.textContent = target + "+"
              }
            }

            requestAnimationFrame(animate)
          })

          statFills.forEach((fill) => {
            const width = fill.getAttribute("data-width") || "100"
            fill.classList.add("animate-width")
            ;(fill as HTMLElement).style.width = `${width}%`
          })

          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-purple-600 to-accent-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stats-pattern.png')] opacity-10"></div>

      <div className="container relative z-10" ref={statsRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Proven Track Record</h2>
          <p className="text-xl opacity-90">Numbers that speak for our expertise and commitment to excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={<Lightbulb />} number="200" label="ML Models Deployed" fillWidth="90" />

          <StatCard icon={<CheckCircle />} number="95" label="Model Accuracy Rate" fillWidth="95" suffix="%" />

          <StatCard icon={<BarChart3 />} number="50" label="Data Science Projects" fillWidth="80" />

          <StatCard icon={<Zap />} number="24/7" label="AI Model Monitoring" fillWidth="100" noCounter />
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  number: string
  label: string
  fillWidth: string
  suffix?: string
  noCounter?: boolean
}

const StatCard = ({ icon, number, label, fillWidth, suffix = "+", noCounter = false }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="w-14 h-14 bg-white/20 rounded-md flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:bg-white/30">
        {icon}
      </div>

      <h3 className="text-5xl font-extrabold mb-2 text-white stat-number" data-target={noCounter ? "" : number}>
        {noCounter ? number : "0"}
        {noCounter ? "" : suffix}
      </h3>

      <p className="text-lg opacity-90 mb-4">{label}</p>

      <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          className="stat-fill h-full bg-white/80 rounded-full w-0 transition-all duration-[2s] ease-out"
          data-width={fillWidth}
          style={{ transitionDelay: "1s" }}
        ></div>
      </div>
    </div>
  )
}

export default Stats
