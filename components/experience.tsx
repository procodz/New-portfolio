"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "AI-Security-Research-Group",
    location: "Bangalore, India",
    period: "07/2024 - Present",
    description: "Currently helping the group building AI driven security solutions and PoCs.",
  },
]

const education = [
  {
    id: 1,
    degree: "B.Tech (Information Technology)",
    institution: "Axis Institute of Technology",
    location: "Kanpur, India",
    period: "06/2018 - 06/2022",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Education & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and educational background.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Work Experience</h3>
            <div className="relative border-l-2 border-muted pl-6 space-y-10">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-[29px] h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card className="backdrop-blur-md bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{exp.title}</h4>
                            <p className="text-muted-foreground">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                        <div className="text-xs text-muted-foreground">{exp.location}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="relative border-l-2 border-muted pl-6 space-y-10">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-[29px] h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Card className="backdrop-blur-md bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <p className="text-muted-foreground">{edu.institution}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {edu.period}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">{edu.location}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Other Achievements</h3>
              <Card className="backdrop-blur-md bg-card/50 border border-primary/10">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Led the team in the final year major project AI based mock-interview system in college resulting in
                    timely execution of the project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

