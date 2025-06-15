"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Lightbulb, CheckCircle, BarChart3, Box, Smartphone, Zap } from "lucide-react"

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll(".service-card")
      cards.forEach((card) => {
        observer.observe(card)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      const cards = document.querySelectorAll(".service-card")
      cards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="services" className="py-20 md:py-32 bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge">Our Expertise</div>
          <h2 className="section-title">AI & Data Science Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions that drive innovation and growth through intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Lightbulb />}
            title="Machine Learning Models"
            description="Custom ML algorithms and predictive models that learn from your data to automate decisions and forecast trends with precision."
            metrics={[
              { value: "95%", label: "Accuracy" },
              { value: "Real-time", label: "Processing" },
            ]}
            delay={0}
          />

          <ServiceCard
            icon={<CheckCircle />}
            title="AI Integration"
            description="Seamlessly integrate artificial intelligence into your existing workflows to enhance productivity and unlock new capabilities."
            metrics={[
              { value: "60%", label: "Efficiency" },
              { value: "24/7", label: "Automation" },
            ]}
            delay={0.1}
          />

          <ServiceCard
            icon={<BarChart3 />}
            title="Data Science Consulting"
            description="Transform raw data into actionable insights with advanced analytics, statistical modeling, and data visualization."
            metrics={[
              { value: "10x", label: "Insights" },
              { value: "Custom", label: "Solutions" },
            ]}
            delay={0.2}
          />

          <ServiceCard
            icon={<Box />}
            title="AI-Powered Web Apps"
            description="Interactive web applications that leverage machine learning to deliver intelligent user experiences and real-time insights."
            metrics={[
              { value: "Lightning", label: "Fast" },
              { value: "Smart", label: "UI/UX" },
            ]}
            delay={0.3}
          />

          <ServiceCard
            icon={<Smartphone />}
            title="Smart Mobile Apps"
            description="Mobile applications enhanced with AI capabilities like computer vision, natural language processing, and predictive analytics."
            metrics={[
              { value: "Native", label: "Performance" },
              { value: "AI-First", label: "Design" },
            ]}
            delay={0.4}
          />

          <ServiceCard
            icon={<Zap />}
            title="Data Pipeline & MLOps"
            description="Scalable data pipelines and ML operations infrastructure to automate model deployment and monitoring at scale."
            metrics={[
              { value: "Auto", label: "Deploy" },
              { value: "Scale", label: "Ready" },
            ]}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  metrics: { value: string; label: string }[]
  delay: number
}

const ServiceCard = ({ icon, title, description, metrics, delay }: ServiceCardProps) => {
  return (
    <div
      className="service-card"
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
      <div className="flex gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <span className="font-bold text-lg text-primary">{metric.value}</span>
            <span className="text-xs text-text-light text-center">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
