"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-6">
          <ExperienceCard
            title="Full Stack Developer Intern"
            company="Tech Company"
            location="Remote/Gauteng, South Africa"
            period="6 months"
            description="Developed and maintained web applications using modern JavaScript frameworks. Collaborated with senior developers to implement new features, fix bugs, and improve application performance. Applied security best practices in development workflows."
          />
          <ExperienceCard
            title="Customer Service Administrator"
            company="URSure Financial Services"
            location="Pretoria, South Africa"
            period="Previous Position"
            description="Managed customer inquiries and administrative tasks, ensuring efficient service delivery and maintaining customer satisfaction."
          />
          <ExperienceCard
            title="Marketing"
            company="Ebeneza Christian School"
            location="Butterworth, South Africa"
            period="Previous Position"
            description="Developed and implemented marketing strategies to promote the school, increasing visibility and student enrollment."
          />
        </div>
      </motion.div>
    </section>
  )
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
}: {
  title: string
  company: string
  location: string
  period: string
  description: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <p className="text-primary font-medium">{company}</p>
            </div>
            <Briefcase className="text-muted-foreground" size={24} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{location}</span>
            <span>{period}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

