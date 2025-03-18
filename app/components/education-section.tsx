"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          <EducationCard
            title="Cybersecurity"
            institution="Tech4dev"
            period="In Progress"
            location="Online"
            description="Currently enhancing cybersecurity skills and knowledge through Tech4dev's comprehensive program."
          />
          <EducationCard
            title="International Business Management"
            institution="UNISA"
            period="Completed"
            location="Pretoria, South Africa"
            description="Studied International Business Management, gaining insights into global business operations and management principles."
          />
          <EducationCard
            title="National Senior Certificate"
            institution="Lyttelton Manor High School"
            period="Completed"
            location="Pretoria, South Africa"
            description="Completed National Senior Certificate with Computer Applications Technology (CAT) from grade 10-12."
          />
        </div>
      </motion.div>
    </section>
  )
}

function EducationCard({
  title,
  institution,
  period,
  location,
  description,
}: {
  title: string
  institution: string
  period: string
  location: string
  description: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <p className="text-primary font-medium">{institution}</p>
            </div>
            <GraduationCap className="text-muted-foreground" size={24} />
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

