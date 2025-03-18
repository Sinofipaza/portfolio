"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  Briefcase,
  Code,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Shield,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Add these imports at the top of the file
import { AnimatedBackground } from "@/app/components/animated-background"
import { GitHubLogo } from "@/app/components/github-logo"
import { AnimatedName } from "@/app/components/animated-text"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="fixed left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-sm border-b border-[#1e293b]">
        <div className="container mx-auto px-4 py-4 flex justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="bg-clip-text text-xl text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
              SinoFipaza
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2, color: "#38bdf8" }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-[#38bdf8]" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1e293b] border-b border-[#334155]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-[#38bdf8]" : "text-gray-300"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="home relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] py-20"
        >
          <div className="absolute inset-0 z-0">
            <AnimatedBackground />
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#38bdf8]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8b5cf6]/10 rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-right"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="mb-6 justify-right items-right bg-[#38bdf8]/20 text-[#38bdf8] hover:bg-[#38bdf8]/30 border-none absolute top-[450px] right-[60px]">
                  Available for hire
                </Badge>
              </motion.div>

              <AnimatedName text="Sinokholo Fipaza" className="text-right text-5xl md:text-7xl font-bold mb-6 overflow-hidden absolute right-[60px]" />

              <motion.h2
                className="text-2xl text-right md:text-3xl font-medium text-gray-300 mb-8 absolute top-[555px] right-[60px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Junior Full Stack Developer
              </motion.h2>

              <motion.p
                className="text-lg text-right text-gray-400 mb-10 max-w-2xl mx-auto absolute right-[60px] top-[600px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Junior Full Stack Developer with a keen eye for detail and a commitment to continuous learning. I strive to leverage my skills to craft compelling
                and accessible solutions that delight users and drive business outcomes.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-right items-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#38bdf8] hover:bg-[#0ea5e9] ml-auto text-white rounded-full px-8 justify-right justify-end absolute top-[705px] right-[240px]"
                >
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10 justify-right  justify-end rounded-full px-8 absolute top-[705px] right-[60px]"
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="inline-block"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => scrollToSection("about")}
                  className="text-[#38bdf8] hover:bg-[#38bdf8]/10 rounded-full"
                >
                  <ArrowDown />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-[#1e293b]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-2/5">
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#38bdf8] to-[#8b5cf6] p-1">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-[#0f172a]">
                        <img
                          src="/placeholder.svg?height=320&width=320"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0f172a] rounded-xl flex items-center justify-center">
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#8b5cf6] flex items-center justify-center">
                        <Code size={32} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="isIt text-center place-items-center justify-center md:w-3/5">
                  <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                    About Me
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mb-6"></div>
                  <p className="text-gray-300 mb-4">
                    I'm a Junior Full Stack Developer passionate about building innovative and user-friendly web applications
                     that deliver seamless experiences. With a keen eye for detail and a commitment to continuous learning,
                      I strive to leverage my technical skills to craft efficient, accessible, and scalable solutions that 
                      not only delight users but also drive business growth..
                  </p>
                  <p className="text-gray-300 mb-4">
                  During my internship at Shaper, I gained hands-on experience working on real-world projects, collaborating 
                    with cross-functional teams, and refining my problem-solving abilities. This experience has strengthened my 
                    ability to write clean, maintainable code, optimize performance, and implement best practices in both frontend 
                    and backend development.
                  </p>
                  <p className="text-gray-300 mb-6">
                  I am eager to apply my knowledge in a dynamic environment where I can continue learning, take on new challenges, and
                     contribute to impactful projects. My goal is to develop high-quality applications that enhance user experiences, meet 
                     business objectives, and push the boundaries of modern web development.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="mailto:fipazasino@gmail.com"
                      className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-[#38bdf8] transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sinofipaza/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-[#38bdf8] transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Sinofipaza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-[#38bdf8] transition-colors"
                    >
                      <GitHubLogo className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                  My Skills
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Frontend",
                    icon: <Code size={24} className="text-[#38bdf8]" />,
                    skills: [
                      "HTML/CSS",
                      "JavaScript",
                      "Angular",
                      "React",
                      "Responsive Design",
                      "Tailwind CSS",
                    ],
                  },
                  {
                    title: "Backend",
                    icon: <Code size={24} className="text-[#8b5cf6]" />,
                    skills: ["Node.js", "Springboot", "SQL", "Python", "Java"],
                  },
                  {
                    title: "Additional Skills",
                    icon: <Shield size={24} className="text-[#38bdf8]" />,
                    skills: [
                      "Git/GitHub",
                      "Linux Command Line",
                      "Problem Solving",
                      "Agile Methodology",
                    ],
                  },
                ].map((skillSet, index) => (
                  <AnimateInView key={skillSet.title} delay={index * 0.2}>
                    <SkillCard title={skillSet.title} icon={skillSet.icon} skills={skillSet.skills} />
                  </AnimateInView>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 bg-[#1e293b]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                  My Projects
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Grocery List App",
                    description:
                      "Developed a responsive grocery list app specifically to help you organize and manage your grocery shopping. With this app, you can easily add and remove items from your shopping list.",
                    technologies: ["HTML", "CSS", "JavaScript"],
                    imageUrl: "/ppp.jpg?height=200&width=400",
                    githubUrl: "https://github.com/Sinofipaza/Grocery-list",
                    liveUrl: "https://groceryylist.netlify.app/",
                  },
                  {
                    title: "Task Management Application",
                    description:
                      "Built a collaborative task management app with user authentication, task assignment, and real-time updates.",
                    technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
                    imageUrl: "/placeholder.svg?height=200&width=400",
                    githubUrl: "#",
                    liveUrl: "#",
                  },
                  {
                    title: "SQL Query Filtering Application",
                    description:
                      "Created an application to apply various filters to SQL queries, enhancing data retrieval efficiency while maintaining security.",
                    technologies: ["SQL", "Python", "Database Security", "Data Filtering"],
                    imageUrl: "/placeholder.svg?height=200&width=400",
                    githubUrl: "#",
                    liveUrl: "#",
                  },
                  {
                    title: "Secure Blog Platform",
                    description:
                      "Developed a blog platform with content management system, user authentication, and security features to prevent common web vulnerabilities.",
                    technologies: ["Node.js", "Express", "MongoDB", "JWT Authentication"],
                    imageUrl: "/placeholder.svg?height=200&width=400",
                    githubUrl: "#",
                    liveUrl: "#",
                  },
                ].map((project, index) => (
                  <AnimateInView key={project.title} delay={index * 0.15}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      imageUrl={project.imageUrl}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  </AnimateInView>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 bg-[#1e293b]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                  Certifications
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Microsoft Azure AZ-900",
                    issuer: "Microsoft",
                    description:
                      "Microsoft Azure Fundamentals certification, validating knowledge of cloud concepts, Azure services, and Azure management.",
                    icon: <Shield className="text-[#38bdf8]" size={24} />,
                  },
                  {
                    title: "Microsoft SC-900",
                    issuer: "Microsoft",
                    description:
                      "Microsoft Security, Compliance, and Identity Fundamentals certification, demonstrating understanding of security, compliance, and identity concepts.",
                    icon: <Shield className="text-[#38bdf8]" size={24} />,
                  },
                  {
                    title: "Introduction to Coding",
                    issuer: "SheCodes",
                    description: "Foundational coding program introducing programming concepts and practices.",
                    icon: <Code className="text-[#38bdf8]" size={24} />,
                  },
                  {
                    title: "Google Cybersecurity Professional Certificate",
                    issuer: "Google",
                    description:
                      "Comprehensive cybersecurity program covering Foundations of Cybersecurity, Security Risks Management, Networks and Network Security, and Linux and SQL tools.",
                    icon: <Shield className="text-[#38bdf8]" size={24} />,
                  },
                  {
                    title: "Fortinet Certified Fundamentals in Cybersecurity",
                    issuer: "Fortinet",
                    description:
                      "NSE 1 and NSE 2 Network Security Associate certifications, covering network security fundamentals and threat landscape awareness.",
                    icon: <Shield className="text-[#38bdf8]" size={24} />,
                  },
                  {
                    title: "Cybersecurity Bootcamp",
                    issuer: "Tech4Dev",
                    description: "Intensive training program focused on practical cybersecurity skills and knowledge.",
                    icon: <Shield className="text-[#38bdf8]" size={24} />,
                  },
                ].map((cert, index) => (
                  <AnimateInView key={cert.title} delay={index * 0.1}>
                    <CertificationCard
                      title={cert.title}
                      issuer={cert.issuer}
                      description={cert.description}
                      icon={cert.icon}
                    />
                  </AnimateInView>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

           {/* Experience Section */}
           <section id="experience" className="py-24 bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                  Professional Experience
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mx-auto"></div>
              </div>

              <div className="space-y-8">
                <TimelineItem
                  title="Full Stack Developer Intern"
                  subtitle="Shaper"
                  period="Current Position"
                  location="Johanesburg, South Africa"
                  description="Developed and maintained web applications using modern JavaScript frameworks. Collaborated with senior developers to implement new features, fix bugs, and improve application performance. Applied security best practices in development workflows."
                  icon={<Briefcase size={24} className="text-[#38bdf8]" />}
                />
                <TimelineItem
                  title="Customer Service Administrator"
                  subtitle="URSure Financial Services"
                  period="Previous Position"
                  location="Pretoria, South Africa"
                  description="Managed customer inquiries and administrative tasks, ensuring efficient service delivery and maintaining customer satisfaction."
                  icon={<Briefcase size={24} className="text-[#38bdf8]" />}
                />
                <TimelineItem
                  title="Promoter"
                  subtitle="Ebeneza Christian School"
                  period="Previous Position"
                  location="Butterworth, South Africa"
                  description="Developed and implemented marketing strategies to promote the school, increasing visibility and student enrollment."
                  icon={<Briefcase size={24} className="text-[#38bdf8]" />}
                />
              </div>
            </motion.div>
          </div>
        </section>


      
        {/* Education Section */}
        <section id="education" className="py-24 bg-[#0f172a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                  Education
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mx-auto"></div>
              </div>

              <div className="space-y-8">
              <TimelineItem
                  title="National Senior Certificate"
                  subtitle="Lyttelton Manor High School"
                  period="Completed"
                  location="Pretoria, South Africa"
                  description="Successfully completed the National Senior Certificate (NSC), which included subjects such as Business Studies, Computer Applications Technology (CAT), and Life Sciences. The NSC has not only prepared me for further studies but has also instilled in me the discipline and time management skills required to thrive in a fast-paced, dynamic environment."
                  icon={<GraduationCap size={24} className="text-[#38bdf8]" />}
                />
                <TimelineItem
                  title="International Business Management"
                  subtitle="UNISA"
                  period="Completed"
                  location="Pretoria, South Africa"
                  description="Studied International Business Management, gaining insights into global business operations and management principles."
                  icon={<GraduationCap size={24} className="text-[#38bdf8]" />}
                />
                <TimelineItem
                  title="Cybersecurity"
                  subtitle="Tech4dev"
                  period="Completed"
                  location="Online"
                  description="Cybersecurity skills and knowledge through Tech4dev's comprehensive program."
                  icon={<GraduationCap size={24} className="text-[#38bdf8]" />}
                />

              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#1e293b]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-2 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6]">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] mx-auto"></div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-[#0f172a] rounded-2xl p-8 shadow">
                  <h3 className="text-xl font-semibold mb-6 text-white text-center">Contact Information</h3>
                  <div className="space-y-6 ">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#38bdf8]/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-[#38bdf8]" size={18} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Email</p>
                        <a
                          href="mailto:fipazasino@gmail.com"
                          className="text-white hover:text-[#38bdf8] transition-colors"
                        >
                          fipazasino@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#38bdf8]/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-[#38bdf8]" size={18} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                        <a href="tel:0813206872" className="text-white hover:text-[#38bdf8] transition-colors">
                          081 320 6872
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#38bdf8]/20 flex items-center justify-center flex-shrink-0">
                        <Linkedin className="text-[#38bdf8]" size={18} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/sinofipaza/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#38bdf8] transition-colors"
                        >
                          Sino Fipaza
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#38bdf8]/20 flex items-center justify-center flex-shrink-0">
                        <GitHubLogo className="w-5 h-5 text-[#38bdf8]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">GitHub</p>
                        <a
                          href="https://github.com/Sinofipaza"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#38bdf8] transition-colors"
                        >
                          Sinofipaza
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-[#0f172a] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-3 rounded-lg border border-[#334155] bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-3 rounded-lg border border-[#334155] bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 rounded-lg border border-[#334155] bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent resize-none"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] hover:opacity-90 text-white rounded-lg py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </div> */}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#0f172a] border-t border-[#1e293b]">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sinokholo Fipaza. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Next.js, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#1e293b] rounded-xl p-8 border border-[#334155] hover:border-[#38bdf8] transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-300"
          >
            <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#0f172a] rounded-xl overflow-hidden border border-[#334155] hover:border-[#38bdf8] transition-colors"
    >
      <div className="h-48 overflow-hidden relative group">
        <motion.img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#38bdf8]/10 text-[#38bdf8] hover:bg-[#38bdf8]/20 border-none">{tech}</Badge>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-[#334155] text-gray-300 hover:bg-[#334155] hover:text-white rounded-lg"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubLogo className="mr-2 w-4 h-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white rounded-lg">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" size={16} />
              Live Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

function TimelineItem({
  title,
  subtitle,
  period,
  location,
  description,
  icon,
}: {
  title: string
  subtitle: string
  period: string
  location: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex gap-6">
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center z-10">
          {icon}
        </div>
        <div className="w-0.5 h-full bg-[#334155] absolute top-12"></div>
      </div>
      <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155] flex-1 hover:border-[#38bdf8] transition-colors">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-[#38bdf8] font-medium mb-2">{subtitle}</p>
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>{location}</span>
          <span>{period}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
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
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#0f172a] rounded-xl p-6 border border-[#334155] hover:border-[#38bdf8] transition-colors h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-[#38bdf8] font-medium">{issuer}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center">{icon}</div>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 rounded-md border border-input bg-background"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 rounded-md border border-input bg-background"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full p-2 rounded-md border border-input bg-background resize-none"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

function AnimateInView({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

