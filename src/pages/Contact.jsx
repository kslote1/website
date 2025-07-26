// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Github, User, Calendar, Clock, MessageCircle, Send, Building, Globe } from 'lucide-react'
import ContactForm from '../components/ContactForm'

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email", 
      primary: "kslote1@gmail.com",
      secondary: "Primary contact method",
      href: "mailto:kslote1@gmail.com",
      description: "Best for research inquiries, collaboration proposals, and general questions",
      responseTime: "Usually within 24-48 hours",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      primary: "(+1) 404-917-6964",
      secondary: "Available for scheduled calls",
      href: "tel:+14049176964", 
      description: "For urgent matters or scheduled interviews and consultations",
      responseTime: "Please email first to schedule",
      color: "green"
    },
    {
      icon: Github,
      label: "GitHub",
      primary: "github.com/kslote1",
      secondary: "View my code and projects",
      href: "https://github.com/kslote1",
      description: "Explore my open-source contributions and research code",
      responseTime: "Active contributions",
      color: "purple"
    },
    {
      icon: User,
      label: "Google Scholar",
      primary: "Research Profile",
      secondary: "Academic publications",
      href: "#",
      description: "View my complete publication record and citation metrics",
      responseTime: "Updated regularly",
      color: "orange"
    }
  ]

  const currentAffiliations = [
    {
      type: "Academic",
      title: "Ph.D. Candidate",
      organization: "Georgia State University",
      department: "Department of Mathematics & Statistics", 
      location: "Atlanta, Georgia",
      period: "2020 – July 2025",
      advisor: "Igor Belykh",
      office: "Mathematics Building",
      email: "kslote1@student.gsu.edu"
    },
    {
      type: "Industry",
      title: "Principal Research Data Scientist",
      organization: "Egnyte, LLC",
      location: "Mountain View, CA",
      period: "2021 – 2025",
      team: "AI Research & Development",
      focus: "Generative AI, Security Applications"
    }
  ]

  const researchTopics = [
    {
      title: "Epilepsy & Neuroscience",
      description: "Topological biomarkers, seizure onset zone detection, iEEG data analysis",
      availability: "Actively seeking collaborators"
    },
    {
      title: "Social Network Analysis", 
      description: "Causal inference, policy analysis, disinformation modeling",
      availability: "Open to new projects"
    },
    {
      title: "AI Safety & Security",
      description: "Generative AI applications, threat detection, data protection",
      availability: "Industry partnerships welcome"
    },
    {
      title: "Mathematical Applications",
      description: "Dynamical systems, topological data analysis, computational methods",
      availability: "Academic collaborations encouraged"
    }
  ]

  const availability = {
    status: "Available for collaboration",
    nextUpdate: "Graduating July 2025",
    seeking: [
      "Postdoctoral research positions",
      "Academic faculty positions", 
      "Industry research roles",
      "Collaborative research projects"
    ],
    location: "Open to relocation",
    workStyle: "Hybrid/Remote friendly"
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-20"
    >
      <div className="container">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in discussing research opportunities, potential collaborations, 
            and innovative applications of mathematics and machine learning. Let's connect!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const colorClasses = {
                blue: "border-blue-500 bg-blue-50 text-blue-600",
                green: "border-green-500 bg-green-50 text-green-600",
                purple: "border-purple-500 bg-purple-50 text-purple-600",
                orange: "border-orange-500 bg-orange-50 text-orange-600"
              }
              
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="contact-item block"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg border-2 ${colorClasses[method.color]}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{method.label}</h3>
                          <p className="text-sm text-gray-500">{method.secondary}</p>
                        </div>
                        <ExternalLink size={16} className="text-gray-400 mt-1" />
                      </div>
                      <p className="font-medium text-blue-600 mb-2">{method.primary}</p>
                      <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        <span>{method.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Contact