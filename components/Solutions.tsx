"use client"

import type React from "react"

import { useState } from "react"
import { PieChart, FileText, BarChart3, Code, Database, Shield } from "lucide-react"

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("predictive")

  return (
    <section id="solutions" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge">Advanced Solutions</div>
          <h2 className="section-title">Machine Learning Excellence</h2>
          <p className="section-subtitle">
            Harness the power of AI to transform your business operations and drive intelligent decision-making
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12 bg-white p-2 rounded-lg shadow-lg overflow-x-auto">
            <TabButton
              icon={<PieChart className="w-5 h-5" />}
              label="Predictive Analytics"
              id="predictive"
              active={activeTab === "predictive"}
              onClick={() => setActiveTab("predictive")}
            />
            <TabButton
              icon={<FileText className="w-5 h-5" />}
              label="Automation"
              id="automation"
              active={activeTab === "automation"}
              onClick={() => setActiveTab("automation")}
            />
            <TabButton
              icon={<BarChart3 className="w-5 h-5" />}
              label="Advanced Analytics"
              id="analytics"
              active={activeTab === "analytics"}
              onClick={() => setActiveTab("analytics")}
            />
          </div>

          <div className="tab-content">
            {activeTab === "predictive" && (
              <SolutionPanel
                icon={<PieChart />}
                title="Predictive Analytics Solutions"
                features={[
                  {
                    title: "Sales Forecasting",
                    description:
                      "Predict future sales trends with 95%+ accuracy using advanced time series analysis and ensemble methods.",
                    tags: ["95% Accuracy", "Real-time"],
                  },
                  {
                    title: "Customer Behavior Analysis",
                    description:
                      "Identify at-risk customers before they leave with machine learning models that analyze behavior patterns.",
                    tags: ["Early Detection", "Behavioral AI"],
                  },
                  {
                    title: "Demand Planning",
                    description: "Optimize inventory and supply chain with intelligent demand forecasting models.",
                    tags: ["Supply Chain", "Optimization"],
                  },
                ]}
              />
            )}

            {activeTab === "automation" && (
              <SolutionPanel
                icon={<FileText />}
                title="Intelligent Automation"
                features={[
                  {
                    title: "Document Processing",
                    description:
                      "Automate document classification and data extraction using computer vision and NLP techniques.",
                    tags: ["Computer Vision", "NLP"],
                  },
                  {
                    title: "Quality Control",
                    description:
                      "Implement automated quality inspection systems using image recognition and anomaly detection.",
                    tags: ["Image Recognition", "Anomaly Detection"],
                  },
                  {
                    title: "Process Optimization",
                    description:
                      "Optimize business processes with reinforcement learning and intelligent workflow automation.",
                    tags: ["Workflow AI", "Process Mining"],
                  },
                ]}
              />
            )}

            {activeTab === "analytics" && (
              <SolutionPanel
                icon={<BarChart3 />}
                title="Advanced Analytics"
                features={[
                  {
                    title: "Customer Segmentation",
                    description:
                      "Discover hidden customer segments using unsupervised learning and clustering algorithms.",
                    tags: ["Clustering", "Unsupervised ML"],
                  },
                  {
                    title: "Recommendation Systems",
                    description: "Build personalized recommendation engines that increase engagement and sales.",
                    tags: ["Personalization", "Deep Learning"],
                  },
                  {
                    title: "Real-time Analytics",
                    description:
                      "Process millions of data points in real-time to provide instant business insights and decision support.",
                    tags: ["Real-time", "Big Data"],
                  },
                ]}
              />
            )}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 text-text-primary">Technologies We Master</h3>
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-tech-scroll">
              <TechItem icon={<Code />} name="Python" desc="TensorFlow, PyTorch, scikit-learn" />
              <TechItem icon={<Shield />} name="Cloud ML" desc="AWS SageMaker, Google AI Platform" />
              <TechItem icon={<PieChart />} name="MLOps" desc="Docker, Kubernetes, MLflow" />
              <TechItem icon={<Database />} name="Big Data" desc="Spark, Hadoop, Kafka" />
              <TechItem icon={<Code />} name="React" desc="Next.js, TypeScript, Node.js" />
              <TechItem icon={<Database />} name="Database" desc="PostgreSQL, MongoDB, Redis" />

              {/* Duplicate for infinite scroll */}
              <TechItem icon={<Code />} name="Python" desc="TensorFlow, PyTorch, scikit-learn" />
              <TechItem icon={<Shield />} name="Cloud ML" desc="AWS SageMaker, Google AI Platform" />
              <TechItem icon={<PieChart />} name="MLOps" desc="Docker, Kubernetes, MLflow" />
              <TechItem icon={<Database />} name="Big Data" desc="Spark, Hadoop, Kafka" />
              <TechItem icon={<Code />} name="React" desc="Next.js, TypeScript, Node.js" />
              <TechItem icon={<Database />} name="Database" desc="PostgreSQL, MongoDB, Redis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TabButtonProps {
  icon: React.ReactNode
  label: string
  id: string
  active: boolean
  onClick: () => void
}

const TabButton = ({ icon, label, id, active, onClick }: TabButtonProps) => {
  return (
    <button
      className={`flex-1 flex items-center gap-2 py-4 px-6 rounded-md font-semibold whitespace-nowrap transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
          : "text-text-secondary hover:bg-gray-100 hover:text-text-primary"
      }`}
      onClick={onClick}
      role="tab"
      aria-selected={active}
      aria-controls={id}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}

interface SolutionPanelProps {
  icon: React.ReactNode
  title: string
  features: {
    title: string
    description: string
    tags: string[]
  }[]
}

const SolutionPanel = ({ icon, title, features }: SolutionPanelProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in">
      <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
        <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
      </div>
      <div className="flex flex-col gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-primary transition-all duration-300 hover:translate-x-1 hover:shadow-md"
          >
            <h4 className="text-xl font-semibold mb-2 text-text-primary">{feature.title}</h4>
            <p className="text-text-secondary mb-4">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              {feature.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface TechItemProps {
  icon: React.ReactNode
  name: string
  desc: string
}

const TechItem = ({ icon, name, desc }: TechItemProps) => {
  return (
    <div className="flex-shrink-0 p-6 bg-white rounded-lg shadow-md text-center min-w-[200px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-200">
      <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-center mx-auto mb-4 text-white">
        {icon}
      </div>
      <span className="font-bold text-lg block mb-1 text-text-primary">{name}</span>
      <span className="text-sm text-text-secondary">{desc}</span>
    </div>
  )
}

export default Solutions
