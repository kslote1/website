// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Users, MapPin, Calendar, Award } from 'lucide-react'

function About() {
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

  const education = [
    {
      degree: "Ph.D. in Applied Mathematics",
      institution: "Georgia State University",
      period: "2020 – July 2025",
      advisor: "Igor Belykh",
      location: "Atlanta, Georgia",
      description: "Dissertation focuses on non-linear dynamical systems and topological data analysis applications in neuroscience."
    },
    {
      degree: "M.S. in Abstract Algebra", 
      institution: "Georgia State University",
      period: "2017 – 2019",
      advisor: "Florian Enescu",
      location: "Atlanta, Georgia",
      description: "Specialized in commutative algebra and algebraic geometry with applications to filtration theory."
    },
    {
      degree: "B.S. in Mathematics and Statistics, Minor in Physics",
      institution: "Georgia State University", 
      period: "2013 – 2017",
      location: "Atlanta, Georgia",
      description: "Foundation in pure mathematics, statistics, and theoretical physics."
    }
  ]

  const experience = [
    {
      title: "Graduate Research Assistant",
      organization: "Biological and Engineering Networks Lab, Georgia State University",
      period: "2020 – present",
      description: "Leading research in non-linear dynamics and topological analysis of epileptology. Developing novel machine learning methods for seizure onset zone detection in iEEG data."
    },
    {
      title: "Principal Research Data Scientist",
      organization: "Egnyte, LLC, Mountain View, CA",
      period: "2021 – 2025",
      description: "Spearheading research in generative AI, transformer architectures, and causal inference. Leading cross-functional teams in developing advanced ML models for data security and predictive analytics."
    },
    {
      title: "Principal Research Data Scientist", 
      organization: "Mimecast, LLC, London, GB",
      period: "2017 – 2021",
      description: "Pioneered applications of machine learning and deep learning in cybersecurity. Developed novel approaches to threat detection and data protection using advanced AI techniques."
    }
  ]

  const skills = {
    "Mathematics & Theory": [
      "Non-linear Dynamical Systems",
      "Topological Data Analysis", 
      "Algebraic Geometry",
      "Ergodic Theory",
      "Applied Category Theory",
      "Computational Topology"
    ],
    "Programming & Tools": [
      "Python", "Java", "C++", "Javascript", "R", "Haskell",
      "PyTorch", "TensorFlow", "Keras", "CUDA", "MATLAB", "Stan"
    ],
    "Research & Academic": [
      "Machine Learning", "Generative AI", "Causal Inference", 
      "Scientific Computing", "Data Visualization", "Statistical Analysis"
    ]
  }

  const interests = [
    "Data-driven Dynamical Systems",
    "Machine Learning Applications in Neuroscience", 
    "Causal Network Analysis",
    "AI Safety and Security",
    "Interdisciplinary Mathematical Research",
    "Open Source Scientific Computing"
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
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate researcher at the intersection of mathematics, machine learning, 
            and real-world applications, with expertise spanning from theoretical foundations 
            to practical implementations in industry and academia.
          </p>
        </motion.div>

        {/* Education */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <GraduationCap className="mr-3 text-blue-500" size={24} />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="minimal-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500 flex-shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">{edu.description}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.advisor && (
                      <div>
                        <span className="font-medium">Advisor:</span> {edu.advisor}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Professional Experience */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <Briefcase className="mr-3 text-green-500" size={24} />
            <h2 className="text-2xl font-semibold">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="minimal-card"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-green-600 font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-gray-500 flex-shrink-0">{exp.period}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <Code className="mr-3 text-purple-500" size={24} />
            <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="skill-category"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <h3 className="skill-title">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Interests */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <Users className="mr-3 text-orange-500" size={24} />
            <h2 className="text-2xl font-semibold">Research Interests</h2>
          </div>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{interest}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Professional Memberships */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Professional Memberships</h2>
          <div className="section-grid three-column">
            <motion.div
              variants={itemVariants}
              className="minimal-card text-center"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Award className="mx-auto mb-3 text-blue-500" size={32} />
              <h3 className="font-semibold mb-2">Mathematical Association of America</h3>
              <p className="text-sm text-gray-600">Member since 2022</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="minimal-card text-center"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Award className="mx-auto mb-3 text-green-500" size={32} />
              <h3 className="font-semibold mb-2">Society for Industrial and Applied Mathematics</h3>
              <p className="text-sm text-gray-600">Member since 2020</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="minimal-card text-center"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Award className="mx-auto mb-3 text-purple-500" size={32} />
              <h3 className="font-semibold mb-2">ACM SIGKDD</h3>
              <p className="text-sm text-gray-600">Member in 2019</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Personal Philosophy */}
        <motion.section variants={itemVariants}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-semibold mb-6">Research Philosophy</h2>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
              "I believe in the power of mathematical rigor combined with computational innovation 
              to solve real-world problems. My work bridges theoretical foundations with practical 
              applications, always seeking to make complex systems more understandable and actionable."
            </blockquote>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <Calendar size={16} />
              <span>Updated July 2025</span>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default About