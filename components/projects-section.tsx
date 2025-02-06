"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./project-card"
import { Layers, Codepen } from "lucide-react"
import { projects } from "@/app/constants"
import { ThemeToggle } from "./theme-toggle"

type Tabs = "design" | "development"

const categories = {
  design: {
    label: "design",
    icon: <Layers height={16} width={16} />,
  },
  development: {
    label: "development",
    icon: <Codepen height={16} width={16} />,
  },
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Tabs>("design")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleHover = (id: string, rowIndex: number) => {
    if (isLargeScreen) {
      setExpandedCard(id)
    }
  }

  const getCardState = (id: string, index: number) => {
    if (!isLargeScreen || !expandedCard) return "None"
    const rowIndex = Math.floor(index / 3)
    const expandedRowIndex = Math.floor(projects[activeTab].findIndex((p) => p.id === expandedCard) / 3)
    if (rowIndex !== expandedRowIndex) return "None"
    return id === expandedCard ? "Expanded" : "Shrunk"
  }

  return (
    <section className="mx-auto max-w-full py-8">
      <div className="flex backdrop-blur-md w-fit ">
        {Object.entries(categories).map(([key, { label, icon }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(label as Tabs)}
            className={`px-4 py-2 text-sm font-medium transition-colors flex flex-row items-center gap-2
                ${
                  activeTab === label
                    ? "text-sky-800 bg-white/50"
                    : "bg-white/40 text-sky-700/60 hover:bg-white/40 hover:text-sky-600"
                }`}
          >
            {icon}
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </button>
        ))}

          <ThemeToggle/>
      </div>
      <div className="overflow-hidden bg-white/50 backdrop-blur-md">
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-wrap gap-4"
            >
              {projects[activeTab]?.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  state={getCardState(project.id, index)}
                  onHover={(id) => handleHover(id, index)}
                  index={index}
                  isLargeScreen={isLargeScreen}
                />
              )) || <div>No projects found for this category.</div>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

