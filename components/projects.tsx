"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Smart Assistant",
    description:
      "A chatbot using OpenAI GPT-4, LangChain, and ChromaDB to answer queries with Retrieval-Augmented Generation (RAG).",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AI", "NLP", "Python"],
    techStack: ["OpenAI GPT-4", "LangChain", "ChromaDB", "Streamlit", "PyPDF2", "Python"],
    features: [
      "Dynamic context updates via file uploads (PDF/TXT)",
      "Retained conversation history using ConversationBufferWindowMemory",
      "User-friendly interface with Streamlit for seamless file uploads and chat interactions",
      "Expertise in AI-powered applications, NLP, and vector databases",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Nerdhive.in",
    description: "A full-stack social media cum project management platform with real-time collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "MERN", "WebSockets"],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "AWS", "Git"],
    features: [
      "User authentication, connection requests, and real-time collaboration",
      "JWT-based authentication, protected routes, and RESTful APIs",
      "Responsive UI with features like user feed, project creation, task assignment",
      "Manually deployed on AWS EC2 instance for scalable and reliable cloud hosting",
    ],
    github: "#",
    demo: "https://nerdhive.in",
  },
  {
    id: 3,
    title: "CodeLens",
    description: "An automated code review system using Python and React with multiple AI agents for code analysis.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AI", "Code Analysis", "React"],
    techStack: ["Python", "React", "AI/ML", "Git", "REST"],
    features: [
      "Specialized AI agents for security, performance, documentation, and code style validation",
      "React-based dashboard for visualizing code review results and tracking issues",
      "Python backend with REST APIs for code parsing and integration with AI agents",
      "Enhanced developer productivity by automating code reviews and providing actionable insights",
    ],
    github: "#",
    demo: "#",
  },
]

const filterOptions = ["All", "AI", "Full Stack", "MERN", "WebSockets", "NLP", "Code Analysis", "React", "Python"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring AI solutions and full-stack applications.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto bg-transparent">
            {filterOptions.map((filter) => (
              <TabsTrigger
                key={filter}
                value={filter}
                onClick={() => setActiveFilter(filter)}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeFilter} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden group backdrop-blur-md bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div
                        className="h-full w-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-background/50 backdrop-blur-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      <Button asChild variant="outline" size="sm" className="gap-1.5">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" className="gap-1.5">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}

