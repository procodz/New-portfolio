"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "AI/ML", level: 70 },
]

const techStack = [
  "Node.js",
  "React.js",
  "Redux",
  "MongoDB",
  "Express.js",
  "AWS",
  "Git",
  "LangChain",
  "Hugging Face",
  "CrewAI",
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full stack Developer specializing in web development and AI solutions. Passionate about creating secure,
            scalable AI-driven applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-md bg-card/50 border border-primary/10 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-background/50 backdrop-blur-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-medium">Programming Languages</h4>
                  <p className="text-muted-foreground">JavaScript, Python, C/C++, HTML, CSS</p>

                  <h4 className="font-medium">Tools & Frameworks</h4>
                  <p className="text-muted-foreground">
                    Node.JS, React.JS, Redux, AWS, Git, MongoDB, NGINX, PM2, RAG, Langchain, Hugging Face, CrewAI,
                    Prompt Engineering, Postman
                  </p>

                  <h4 className="font-medium">Others</h4>
                  <p className="text-muted-foreground">Data Structure and Algorithm, OOPs, DBMS, Operating System</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

