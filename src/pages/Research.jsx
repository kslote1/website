// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FlaskConical, Brain, Users, Shield, ExternalLink, Calendar, MapPin, CheckCircle, Clock, Users2 } from 'lucide-react'

function Research() {
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

  const projects = [
    {
      title: "Biological and Engineering Networks Lab",
      period: "Jan 2020 – Present",
      mentor: "Igor Belykh, Georgia State University",
      icon: Brain,
      color: "blue",
      status: "Active",
      description: "Leading research in non-linear dynamics and topological analysis of epileptology. Developing causal networks, topological data analytics, and machine learning methods for seizure onset zone detection in iEEG data, contributing to surgical outcome prediction.",
      achievements: [
        "Developed novel node degree volatility metrics for seizure detection",
        "Created topological biomarkers using persistent homology",
        "Implemented explainable ML models for clinical interpretation",
        "Collaborated with neurologists for clinical workflow integration"
      ],
      publications: [
        "Node degree volatility for seizure onset zone identification (in preparation)",
        "Attractor Topology for Seizure Onset Zone Detection (in preparation)",
        "Explainable Machine Learning for Seizure Onset Biomarker Comparison (in preparation)"
      ],
      link: "Belykh Lab",
      tags: ["Neuroscience", "Topological Data Analysis", "Machine Learning", "Clinical Applications"]
    },
    {
      title: "WeSafe Project", 
      period: "Jan 2020 – Present",
      mentor: "Igor Belykh, Georgia State University",
      icon: Users,
      color: "green",
      status: "Published", 
      description: "Analyzed causal links between Twitter advocacy, media narratives, and firearm acquisition trends using advanced causal network methods with Peter and Clark Momentary Conditional Independence (PCMCI) methods.",
      achievements: [
        "Implemented PCMCI causal discovery algorithms",
        "Analyzed large-scale social media datasets",
        "Developed statistical models for policy impact assessment",
        "Published findings in PNAS Nexus (accepted)"
      ],
      publications: [
        "How advocacy groups on Twitter and media coverage can drive U.S. firearm acquisition: a causal study (PNAS Nexus, accepted)"
      ],
      link: "We-Safe",
      tags: ["Causal Inference", "Social Networks", "Policy Analysis", "Data Science"]
    },
    {
      title: "Reductions of Noetherian Filtrations",
      period: "Jan 2013 – Aug 2016", 
      mentor: "Florian Enescu, Georgia State University",
      icon: FlaskConical,
      color: "purple",
      status: "Completed",
      description: "Explored reductions of Noetherian filtrations in commutative algebra and their applications to algebraic geometry, touching on homological algebra and category theory.",
      achievements: [
        "Developed theoretical results on Noetherian filtrations",
        "Applied algebraic geometry techniques to filtration theory",
        "Contributed to abstract algebra research foundations",
        "Presented findings at academic seminars"
      ],
      publications: [
        "Reductions of Noetherian Filtrations (Abstract Algebra Seminar, 2015)"
      ],
      tags: ["Abstract Algebra", "Algebraic Geometry", "Commutative Algebra", "Mathematical Theory"]
    },
    {
      title: "AI Security & Data Protection Research",
      period: "2017 – present",
      mentor: "Industry Research",
      icon: Shield,
      color: "orange",
      status: "Active",
      description: "Designing and implementing advanced machine learning models for natural language processing, including transformers. Applied causal inference and generative AI techniques for predictive analytics and data security.",
      achievements: [
        "Co-invented 2 US patents for AI security applications",
        "Led research teams in generative AI development",
        "Developed novel approaches to threat detection",
        "Implemented transformer architectures for security"
      ],
      publications: [
        "US Patent 12,001,544 (2024)",
        "US Patent App. 18/415,791 (2024)"
      ],
      tags: ["AI Security", "Generative AI", "NLP", "Patents", "Industry Research"]
    }
  ]

  const serviceActivities = [
    {
      title: "Data-Driven Dynamics Seminar (Co-Organizer)",
      organization: "Society for Industrial and Applied Mathematics (SIAM) Student Chapter, Georgia State University",
      period: "2024",
      description: "Co-organizing seminars focused on contemporary applications of dynamical systems theory in data science."
    }
  ]

  const reviewActivities = [
    {
      journal: "IEEE Transactions on Network Science and Engineering",
      period: "May 2021 – present",
      count: "5+ papers reviewed"
    },
    {
      journal: "PLoS Complex Systems", 
      period: "June 2025 – present",
      count: "2+ papers reviewed"
    }
  ]

  const collaborations = [
    {
      institution: "New York University Tandon School of Engineering",
      collaborators: ["Maurizio Porfiri"],
      projects: ["Social network analysis", "Firearm acquisition studies"]
    },
    {
      institution: "US Naval Research Laboratory", 
      collaborators: ["Kevin Daley"],
      projects: ["Disinformation propagation modeling", "Real-time control systems"]
    },
    {
      institution: "Emory University School of Medicine",
      collaborators: ["Charles M. Epstein"],
      projects: ["Clinical epilepsy research", "iEEG data analysis"]
    }
  ]

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
          <h1 className="text-4xl font-bold mb-4">Research Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interdisciplinary research spanning theoretical mathematics, computational methods, 
            and real-world applications in neuroscience, social networks, and artificial intelligence.
          </p>
        </motion.div>

        {/* Research Projects */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-12">
            <FlaskConical className="mr-3 text-blue-500" size={24} />
            <h2 className="text-2xl font-semibold">Research Projects</h2>
          </div>
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              const colorClasses = {
                blue: "border-blue-500 bg-blue-50",
                green: "border-green-500 bg-green-50", 
                purple: "border-purple-500 bg-purple-50",
                orange: "border-orange-500 bg-orange-50"
              }
              
              const statusColors = {
                "Active": "bg-green-100 text-green-800",
                "Published": "bg-blue-100 text-blue-800",
                "Completed": "bg-gray-100 text-gray-800"
              }
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="minimal-card border-l-4 border-l-blue-500"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${colorClasses[project.color]}`}>
                        <IconComponent size={24} className="text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-gray-600 font-medium">{project.mentor}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={14} className="mr-1" />
                            <span>{project.period}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <CheckCircle size={16} className="mr-2 text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <FlaskConical size={16} className="mr-2 text-blue-500" />
                        Related Publications
                      </h4>
                      <ul className="space-y-2">
                        {project.publications.map((pub, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {pub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <div className="flex items-center text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                      <ExternalLink size={14} className="mr-1" />
                      <span>Research details: {project.link}</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Academic Service */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <Users2 className="mr-3 text-green-500" size={24} />
            <h2 className="text-2xl font-semibold">Academic Service & Leadership</h2>
          </div>
          <div className="space-y-6">
            {serviceActivities.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="minimal-card"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <span className="text-sm text-gray-500 flex-shrink-0">{service.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{service.organization}</p>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Peer Review */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Peer Review Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviewActivities.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold mb-2">{review.journal}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{review.period}</span>
                </div>
                <p className="text-sm text-gray-500">{review.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Collaborations */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-8">Research Collaborations</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {collaborations.map((collab, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="mb-4">
                    <MapPin className="mx-auto text-blue-500" size={32} />
                  </div>
                  <h3 className="font-semibold mb-2">{collab.institution}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Collaborators:</strong> {collab.collaborators.join(", ")}
                  </p>
                  <p className="text-xs text-gray-500">
                    {collab.projects.join(" • ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Research