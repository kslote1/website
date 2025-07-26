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
          <h1 className="text-4xl font-bold mb-4">Mentoring & Leadership</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience in guiding students and teams through research projects, technical training, 
            and academic development across industry and academic settings.
          </p>
        </motion.div>

        {/* Mentoring Experience */}
        <motion.section variants={itemVariants}>
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
      </div>
    </motion.div>
  )
}

export default Teaching