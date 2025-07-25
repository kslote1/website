// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Mail, Phone, Github, ExternalLink, MapPin, Calendar, BookOpen, Youtube, Download } from 'lucide-react'
import headshotImage from '../assets/headshot.jpg'
import BlogFeed from '../components/BlogFeed'
import YouTubeFeed from '../components/YouTubeFeed'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const currentResearch = [
    {
      title: "Seizure Onset Zone Identification",
      description: "Developing novel topological biomarkers and ML methods for epilepsy research using iEEG data.",
      status: "Active",
      year: "2020-2025"
    },
    {
      title: "Social Media & Policy Impact",
      description: "Analyzing causal links between Twitter advocacy and firearm acquisition trends using advanced causal networks.",
      status: "Published",
      year: "2025"
    }
  ]

  const recentHighlights = [
    {
      type: "Award",
      title: "Outstanding Research Award",
      venue: "FICC 2025",
      description: "Online Performance Estimation with Unlabeled Data"
    },
    {
      type: "Publication",
      title: "PNAS Nexus (Accepted)",
      venue: "2025",
      description: "Twitter effect on U.S. firearm acquisition patterns"
    },
    {
      type: "Position",
      title: "Principal Research Data Scientist",
      venue: "Egnyte, LLC",
      description: "Leading ML research in generative AI and security"
    }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-content">
            <motion.div
              variants={imageVariants}
              className="hero-image"
              role="img"
              aria-label="Kevin Slote headshot photo"
            >
              <img 
                src={headshotImage} 
                alt="Kevin Slote, Applied Mathematician and Data Scientist" 
                className="w-full h-full object-cover object-top"
                style={{transform: 'scale(0.14)'}}
              />
            </motion.div>
            
            <motion.h1 
              id="hero-heading"
              variants={itemVariants}
              className="hero-title"
            >
              Kevin Slote
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="hero-subtitle"
            >
              Ph.D. in Applied Mathematics (Expected July 2025)
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="hero-description"
            >
              Principal Research Data Scientist specializing in non-linear dynamical systems, 
              topological data analysis, and machine learning applications in neuroscience and security. 
              Currently completing Ph.D. at Georgia State University under Igor Belykh.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="hero-links"
              role="navigation"
              aria-label="Primary actions"
            >
              <a 
                href="mailto:kslote1@gmail.com" 
                className="btn btn-primary"
                aria-label="Send email to Kevin Slote"
              >
                <Mail size={16} aria-hidden="true" />
                Contact Me
              </a>
              <a 
                href="https://github.com/kslote1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="Visit Kevin Slote's GitHub profile (opens in new tab)"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="hero-contact"
            >
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(+1) 404-917-6964</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Atlanta, Georgia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="status-dot"></div>
                <span>Available for collaboration</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Research */}
      <main id="main-content">
      <section className="section" aria-labelledby="research-heading">
        <div className="container">
          <motion.div variants={itemVariants}>
            <h2 id="research-heading" className="text-2xl font-semibold text-center mb-12">Current Research</h2>
            <div className="section-grid two-column">
              {currentResearch.map((research, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="minimal-card"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{research.title}</h3>
                    <span className={`publication-status ${
                      research.status === 'Active' ? 'status-preparation' : 'status-accepted'
                    }`}>
                      {research.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{research.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} />
                    <span className="ml-1">{research.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-center mb-12">Recent Highlights</h2>
            <div className="section-grid three-column">
              {recentHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center mb-3">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-sm font-medium text-blue-600">{highlight.type}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{highlight.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{highlight.venue}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section">
        <div className="container">
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <motion.div 
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                15+
              </motion.div>
              <p className="text-sm text-gray-600">Publications & Preprints</p>
            </div>
            <div>
              <motion.div 
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                20+
              </motion.div>
              <p className="text-sm text-gray-600">Conference Presentations</p>
            </div>
            <div>
              <motion.div 
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                2
              </motion.div>
              <p className="text-sm text-gray-600">Patents</p>
            </div>
            <div>
              <motion.div 
                className="text-3xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                8+
              </motion.div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section">
        <div className="container">
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-12">
              <BookOpen className="mr-3 text-blue-500" size={24} />
              <h2 className="text-2xl font-semibold">Latest Blog Posts</h2>
            </div>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Thoughts on mathematics, machine learning, and the intersection of theory and practice.
            </p>
            <BlogFeed maxPosts={3} />
          </motion.div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center mb-12">
              <Youtube className="mr-3 text-red-500" size={24} />
              <h2 className="text-2xl font-semibold">Latest Videos</h2>
            </div>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Video tutorials, research explanations, and insights from my academic journey in mathematics and machine learning.
            </p>
            <YouTubeFeed maxVideos={3} />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Interested in Collaboration?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing research opportunities in dynamical systems, 
              topological data analysis, machine learning applications in neuroscience, 
              and interdisciplinary projects combining mathematics and data science.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="mailto:kslote1@gmail.com" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                Email Me
              </motion.a>
              <motion.a 
                href="/kevin-slote-cv.pdf" 
                download
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <motion.a 
                href="/publications" 
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                View Publications
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
    </motion.div>
  )
}

export default Home