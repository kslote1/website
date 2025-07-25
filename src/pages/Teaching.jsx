// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { GraduationCap, Users, BookOpen, Code, Lightbulb, Target, Award, Calendar } from 'lucide-react'

function Teaching() {
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

  const teachingPhilosophy = {
    core: "I believe in making complex mathematical concepts accessible through computational examples and real-world applications. My teaching approach emphasizes critical thinking by connecting abstract theory to practical problems in data science, dynamical systems, and machine learning.",
    principles: [
      {
        title: "Theory-Practice Integration",
        description: "Bridge abstract mathematical concepts with computational implementations and real-world applications",
        icon: Code
      },
      {
        title: "Interactive Learning",
        description: "Encourage active participation through problem-solving sessions and collaborative research projects",
        icon: Users
      },
      {
        title: "Scaffolded Understanding",
        description: "Build knowledge progressively from fundamental principles to advanced applications",
        icon: Target
      },
      {
        title: "Research Integration",
        description: "Incorporate current research findings and open problems to inspire curiosity and innovation",
        icon: Lightbulb
      }
    ]
  }

  const mentoring = [
    {
      level: "Graduate Research Mentoring",
      period: "2020 – present",
      description: "Supervising undergraduate and graduate students in research projects spanning topological data analysis, machine learning applications to neuroscience, and computational methods.",
      achievements: [
        "Mentored 3+ undergraduate research assistants",
        "Guided students in Python programming and scientific computing",
        "Supervised research projects in network analysis and ML",
        "Co-authored conference presentations with mentees"
      ]
    },
    {
      level: "Industry Research Leadership",
      period: "2017 – present", 
      description: "Leading and training cross-functional research teams in advanced machine learning, generative AI, and data security applications.",
      achievements: [
        "Trained teams in transformer architectures and NLP",
        "Developed technical training programs for ML engineers",
        "Mentored junior researchers in causal inference methods",
        "Led workshops on AI safety and security practices"
      ]
    },
    {
      level: "Academic Service",
      period: "2024",
      description: "Co-organizing academic seminars and fostering collaborative learning environments within the mathematical community.",
      achievements: [
        "Co-organized Data-Driven Dynamics Seminar at GSU",
        "Facilitated discussions on contemporary dynamical systems",
        "Created networking opportunities for students and faculty",
        "Promoted interdisciplinary mathematical research"
      ]
    }
  ]

  const expertiseAreas = [
    {
      category: "Mathematical Foundations",
      topics: [
        "Applied Mathematics & Dynamical Systems",
        "Topological Data Analysis", 
        "Abstract Algebra & Algebraic Geometry",
        "Computational Topology",
        "Category Theory Applications"
      ]
    },
    {
      category: "Computational Methods",
      topics: [
        "Machine Learning Theory & Practice",
        "Scientific Computing with Python/MATLAB",
        "Statistical Analysis and Modeling",
        "Causal Inference Techniques",
        "Data Visualization and Communication"
      ]
    },
    {
      category: "Interdisciplinary Applications", 
      topics: [
        "Neuroscience & Network Analysis",
        "Social Network Modeling",
        "AI Safety and Security",
        "Mathematical Biology",
        "Policy Analysis through Data Science"
      ]
    }
  ]

  const teachingInterests = [
    {
      title: "Mathematical Foundations of AI",
      description: "Developing courses that explore the theoretical underpinnings of machine learning and artificial intelligence, bridging pure mathematics with practical applications.",
      level: "Graduate"
    },
    {
      title: "Computational Topology & Data Analysis",
      description: "Teaching students to apply topological methods to real-world data problems, combining theoretical rigor with computational implementation.",
      level: "Advanced Undergraduate/Graduate"
    },
    {
      title: "Dynamical Systems for Data Science",
      description: "Introducing dynamical systems theory through the lens of modern data science applications, emphasizing both mathematical theory and practical skills.",
      level: "Undergraduate/Graduate"
    },
    {
      title: "Research Methods in Applied Mathematics",
      description: "Preparing students for careers in both academia and industry by emphasizing theoretical rigor, computational skills, and interdisciplinary collaboration.",
      level: "Graduate"
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
          <h1 className="text-4xl font-bold mb-4">Teaching & Mentoring</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about fostering the next generation of mathematical thinkers and 
            data scientists through innovative teaching methods and hands-on research mentoring.
          </p>
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <Lightbulb className="mr-3 text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">Teaching Philosophy</h2>
          </div>
          
          <div className="glass-card p-8 mb-8">
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
              "{teachingPhilosophy.core}"
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingPhilosophy.principles.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="minimal-card"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{principle.title}</h3>
                      <p className="text-gray-600 text-sm">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Mentoring Experience */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <Users className="mr-3 text-green-500" size={24} />
            <h2 className="text-2xl font-semibold">Mentoring & Leadership Experience</h2>
          </div>
          
          <div className="timeline">
            {mentoring.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="minimal-card">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{experience.level}</h3>
                    <span className="text-sm text-gray-500 flex-shrink-0">{experience.period}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{experience.description}</p>
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-gray-800">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Areas of Expertise */}
        <motion.section variants={itemVariants} className="mb-20">
          <div className="flex items-center mb-8">
            <BookOpen className="mr-3 text-purple-500" size={24} />
            <h2 className="text-2xl font-semibold">Teaching Expertise</h2>
          </div>
          
          <div className="skills-grid">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-category"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <h3 className="skill-title">{area.category}</h3>
                <div className="space-y-2">
                  {area.topics.map((topic, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Future Teaching Interests */}
        <motion.section variants={itemVariants} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Future Course Development</h2>
          <div className="space-y-6">
            {teachingInterests.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="minimal-card"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Teaching Goals */}
        <motion.section variants={itemVariants}>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12 text-center">
            <div className="mb-6">
              <GraduationCap className="mx-auto text-purple-500" size={48} />
            </div>
            <h2 className="text-2xl font-semibold mb-6">Teaching Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My goal is to prepare students for successful careers in both academia and industry 
                by emphasizing theoretical rigor, computational implementation skills, and 
                interdisciplinary collaboration. I strive to create learning environments where 
                students can explore the beauty of mathematics while developing practical skills 
                for solving real-world problems.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">Theoretical Rigor</div>
                  <p className="text-sm text-gray-600">Building strong mathematical foundations</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">Practical Skills</div>
                  <p className="text-sm text-gray-600">Computational implementation and problem-solving</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">Real-World Impact</div>
                  <p className="text-sm text-gray-600">Applications across disciplines and industries</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Teaching