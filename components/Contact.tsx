"use client"

import type React from "react"

import { useState } from "react"
import { Zap, CheckCircle, PieChart, ArrowRight, Loader2 } from "lucide-react"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Track conversion with Google Ads
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "conversion", {
          send_to: "AW-17153791006/5c18CMjFoNcaEJ6oyPM_",
          value: 50.0,
          currency: "USD",
          transaction_id: Date.now().toString(),
        })
        ;(window as any).gtag("event", "form_submit_success", {
          event_category: "Lead Generation",
          event_label: "Contact Form Completed",
          value: 50,
        })
      }

      setSubmitStatus("success")
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-bg-dark text-white relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-badge">Get Started</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg opacity-90 mb-12 leading-relaxed">
              Let's build intelligent solutions that drive real results. Get started with a free consultation and
              discover the potential of your data.
            </p>

            <div className="flex flex-col gap-8">
              <ContactFeature icon={<Zap />} title="Quick Response" description="Get a response within 24 hours" />
              <ContactFeature
                icon={<CheckCircle />}
                title="Custom Solutions"
                description="Tailored to your specific needs"
              />
              <ContactFeature
                icon={<PieChart />}
                title="Proven Results"
                description="Track record of successful projects"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="floating-label">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Your Name *</label>
              </div>

              <div className="floating-label">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Your Email *</label>
              </div>

              <div className="floating-label">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder=" "
                />
                <label htmlFor="company">Company Name</label>
              </div>

              <div className="floating-label">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">Tell us about your project... *</label>
              </div>

              <button
                type="submit"
                className={`relative flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isSubmitting ? "opacity-80" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-200 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll be in touch soon.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-md text-red-200 flex items-center gap-2">
                  <span>There was an error sending your message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ContactFeature = ({ icon, title, description }: ContactFeatureProps) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1 text-white">{title}</h4>
        <p className="opacity-80">{description}</p>
      </div>
    </div>
  )
}

export default Contact
