"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypewriterComponent from "typewriter-effect"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16" ref={ref}>
      <motion.div
        className="flex flex-col space-y-8 max-w-3xl text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 className="text-lg font-medium text-primary">Full Stack Developer</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Raghvendra Kumar</h1>
          <div className="h-16 md:h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold flex flex-wrap justify-center">
              <span className="mr-2">I build</span>
              <TypewriterComponent
                options={{
                  strings: ["AI-powered applications", "scalable web solutions", "secure backends", "interactive UIs"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "text-primary",
                }}
              />
            </h2>
          </div>
        </motion.div>

        <motion.p className="text-muted-foreground text-lg mx-auto" variants={itemVariants}>
          Specializing in web development and AI solutions with expertise in MERN stack and Python.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4 justify-center" variants={itemVariants}>
          <Button asChild size="lg" className="group will-change-transform">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="group will-change-transform">
            <a href="/resume.pdf" download="Raghvendra_Kumar_Resume.pdf">
              Download Resume
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
        </motion.div>

        <motion.div className="flex items-center gap-6 pt-4 justify-center" variants={itemVariants}>
          <a
            href="https://github.com/procodz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/raghvendra88/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:techbite88@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

