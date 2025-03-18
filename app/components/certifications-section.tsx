"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Award, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/30 -mx-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <CertificationCard
            title="Microsoft Azure AZ-900"
            issuer="Microsoft"
            description="Microsoft Azure Fundamentals certification, validating knowledge of cloud concepts, Azure services, and Azure management."
            icon={<Award className="text-primary" size={24} />}
          />
          <CertificationCard
            title="Microsoft SC-900"
            issuer="Microsoft"
            description="Microsoft Security, Compliance, and Identity Fundamentals certification, demonstrating understanding of security, compliance, and identity concepts."
            icon={<Shield className="text-primary" size={24} />}
          />
          <CertificationCard
            title="Google Cybersecurity Professional Certificate"
            issuer="Google"
            description="Comprehensive cybersecurity program covering Foundations of Cybersecurity, Security Risks Management, Networks and Network Security, and Linux and SQL tools."
            icon={<Shield className="text-primary" size={24} />}
          />
          <CertificationCard
            title="Fortinet Certified Fundamentals in Cybersecurity"
            issuer="Fortinet"
            description="NSE 1 and NSE 2 Network Security Associate certifications, covering network security fundamentals and threat landscape awareness."
            icon={<Shield className="text-primary" size={24} />}
          />
          <CertificationCard
            title="Cybersecurity Bootcamp"
            issuer="Tech4Dev"
            description="Intensive training program focused on practical cybersecurity skills and knowledge."
            icon={<Shield className="text-primary" size={24} />}
          />
          <CertificationCard
            title="Introduction to Coding"
            issuer="SheCodes"
            description="Foundational coding program introducing programming concepts and practices."
            icon={<Award className="text-primary" size={24} />}
          />
        </div>
      </motion.div>
    </section>
  )
}

function CertificationCard({
  title,
  issuer,
  description,
  icon,
}: {
  title: string
  issuer: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <p className="text-primary font-medium">{issuer}</p>
            </div>
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

