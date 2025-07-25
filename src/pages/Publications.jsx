// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { BookOpen, Award, Presentation, ScrollText, ExternalLink, Calendar } from 'lucide-react'

function Publications() {
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

  const publications = [
    {
      title: "Node degree volatility for seizure onset zone identification",
      authors: "Slote, K., Smith, K., Shamshad, M., Epstein, C. M., Dhamala, M., & Belykh, I.",
      status: "in final preparation",
      year: "2025",
      type: "journal"
    },
    {
      title: "Attractor Topology for Seizure Onset Zone Detection",
      authors: "Slote, K., Smith, K., Shamshad, M., Dhamala, M., & Belykh, I.",
      status: "in final preparation", 
      year: "2025",
      type: "journal"
    },
    {
      title: "Explainable Machine Learning for Seizure Onset Biomarker Comparison",
      authors: "Slote, K., Smith, K., Shamshad, M., Dhamala, M., & Belykh, I.",
      status: "in final preparation",
      year: "2025", 
      type: "journal"
    },
    {
      title: "How advocacy groups on Twitter and media coverage can drive U.S. firearm acquisition: a causal study",
      authors: "Kevin Slote, Kevin Daley, Rayan Succar, Roni Barak Ventura, Maurizio Porfiri, and Igor Belykh",
      journal: "PNAS Nexus",
      status: "accepted",
      year: "2025",
      type: "journal"
    },
    {
      title: "Online Performance Estimation with Unlabeled Data: A Bayesian Application of the Hui-Walter Paradigm",
      authors: "Kevin Slote, Elaine Lee",
      journal: "In: Arai, K. (eds) Advances in Information and Communication. FICC 2025. Lecture Notes in Networks and Systems, vol 1285. Springer, Cham",
      year: "2025",
      type: "conference"
    }
  ]

  const patents = [
    {
      title: "Systems and methods for attacks, countermeasures, archiving, data leak prevention, and other novel services for active messages",
      inventors: "SP Tyler, NS Borenstein, JA Maylor, C Da Silva, K Slote, HL Roitblat",
      number: "US Patent App. 18/415,791",
      year: "2024"
    },
    {
      title: "Systems and methods for attacks, countermeasures, archiving, data leak prevention, and other novel services for active messages", 
      inventors: "Simon Tyler, Nathaniel Borenstein, Jackie Maylor, Carlos Da Silva, Kevin Slote, Herb Roitblat",
      number: "US Patent 12,001,544",
      year: "2024"
    }
  ]

  const conferences = [
    {
      title: "Node Degree Volatility for Seizure Onset Zone Identification",
      authors: "Kevin Slote, Kelley Smith, Marrium Shamshad, Mukesh Dhamala, Igor Belykh",
      venue: "SIAM Applied Dynamical Systems",
      year: "2025",
      type: "presentation"
    },
    {
      title: "Aperiodic Spectral Neural Activity in Identifying Seizure Onset Zones",
      authors: "Marrium Shamshad, Kelley Smith, Kevin Slote, Mukesh Dhamala, Igor Belykh",
      venue: "SIAM Applied Dynamical Systems",
      year: "2025",
      type: "presentation"
    },
    {
      title: "Hidden Geometry of Epilepsy: A Topological Biomarker for Seizure Onset Zone and Onset Localization",
      authors: "Kevin Slote, Kelley Smith, Marrium Shamshad, Mukesh Dhamala, Igor Belykh", 
      venue: "Brains and Behavior",
      year: "2025",
      type: "presentation"
    },
    {
      title: "The Twitter effect: How anti-regulation organizations drive firearm acquisitions in the United States",
      authors: "Kevin Slote, Kevin Daley, Rayan Succar, Roni Ventura, Maurizio Porfiri, Igor Belykh",
      venue: "SIAM Applied Dynamical Systems",
      year: "2025",
      type: "presentation"
    },
    {
      title: "How advocacy groups on Twitter and media coverage can drive U.S. firearm acquisition: A causal study",
      venue: "SIAM-SEAS, University of Tennessee",
      year: "2025",
      month: "March",
      type: "contributed talk"
    },
    {
      title: "The Twitter effect: How anti-regulation organizations drive firearm acquisitions in the United States",
      authors: "Kevin Slote, Kevin Daley, Rayan Succar, Roni Ventura, Maurizio Porfiri, Igor Belykh",
      venue: "SIAM Mathematical Data Science",
      year: "2024",
      type: "presentation"
    },
    {
      title: "The Twitter effect: How anti-regulation organizations drive firearm acquisitions in the United States",
      authors: "Kevin Slote, Kevin Daley, Rayan Succar, Roni Ventura, Maurizio Porfiri, Igor Belykh",
      venue: "Georgia Scientific Computing Conference",
      year: "2025",
      type: "presentation"
    },
    {
      title: "Data-Driven Modelling of How Disinformation and Conspiracy Theories Propagate in Social Networks",
      authors: "Kevin Daley and Kevin Slote, Maurizio Porfiri, Igor Belykh",
      venue: "SIAM Conference on Dynamical Systems",
      year: "2023",
      type: "presentation"
    },
    {
      title: "A Functional Network Criterion for Identifying Seizure Onset Zones from Ieeg Recordings",
      authors: "Smith Kelley, Kevin Slote, Marrium Shamshad, Mukesh Dhamala and Igor Belykh",
      venue: "SIAM Mathematical Data Science",
      year: "2024",
      type: "abstract"
    },
    {
      title: "Dynamics of Brain Functional Networks and Epileptic Seizures",
      authors: "Slote Kevin, Kelly Smith, Marrium Shamshad, Mukesh Dhamala and Igor Belykh",
      venue: "Brains and Behavior",
      year: "2021",
      type: "presentation"
    },
    {
      title: "Stopping the Spread of Disinformation in Social Networks with Real-Time Control: a Data-Driven Case Study of Online COVID-19 Anti-Vaccine Conspiracy Theories",
      authors: "Kevin Daley and Kevin Slote, Maurizio Porfiri, Igor Belykh",
      venue: "SIAM Applied Dynamical Systems",
      year: "2021",
      type: "presentation"
    },
    {
      title: "Reductions of Noetherian Filtrations",
      authors: "Kevin Slote",
      venue: "Abstract Algebra Seminar",
      year: "2015",
      type: "presentation"
    },
    {
      title: "Random Walks on Weakly Hyperbolic Groups",
      authors: "Kevin Slote",
      venue: "Big Ideas in Dynamics",
      year: "2023",
      type: "presentation"
    }
  ]

  const awards = [
    {
      title: "Outstanding Research Award",
      description: "Online Performance Estimation with Unlabeled Data: A Bayesian Application of the Hui-Walter Paradigm",
      venue: "FICC",
      year: "2025"
    },
    {
      title: "Media Coverage",
      description: "Georgia State Mathematicians Reveal Factors Driving Gun Sales in America",
      author: "Amanda Head",
      year: "2025"
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
          <h1 className="text-4xl font-bold mb-4">Publications & Presentations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my research contributions in applied mathematics, 
            dynamical systems, and machine learning applications.
          </p>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="mr-3 text-yellow-500" size={24} />
            <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          </div>
          <div className="section-grid two-column">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start mb-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                    <p className="text-gray-600 mb-2">{award.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{award.venue} • {award.year}</span>
                      {award.author && <span> • {award.author}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="mr-3 text-blue-500" size={24} />
            <h2 className="text-2xl font-semibold">Journal Articles & Preprints</h2>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="publication-card minimal-card"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                <div className="flex items-center mt-2">
                  {pub.journal && (
                    <span className="publication-venue">{pub.journal}</span>
                  )}
                  <span className={`publication-status ${
                    pub.status === 'accepted' ? 'status-accepted' : 'status-preparation'
                  }`}>
                    {pub.status || 'Published'}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">({pub.year})</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Patents */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center mb-8">
            <ScrollText className="mr-3 text-purple-500" size={24} />
            <h2 className="text-2xl font-semibold">Patents</h2>
          </div>
          <div className="space-y-6">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="minimal-card border-l-4 border-purple-500"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold text-lg mb-2">{patent.title}</h3>
                <p className="text-gray-600 mb-2">{patent.inventors}</p>
                <div className="flex items-center text-sm">
                  <span className="font-medium text-purple-600">{patent.number}</span>
                  <span className="text-gray-500 ml-auto">({patent.year})</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conference Presentations */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center mb-8">
            <Presentation className="mr-3 text-green-500" size={24} />
            <h2 className="text-2xl font-semibold">Conference Presentations & Talks</h2>
          </div>
          <div className="timeline">
            {conferences.sort((a, b) => parseInt(b.year) - parseInt(a.year)).map((talk, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="minimal-card">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg pr-4">{talk.title}</h3>
                    <span className="text-sm text-gray-500 flex-shrink-0">
                      {talk.month && `${talk.month} `}{talk.year}
                    </span>
                  </div>
                  {talk.authors && (
                    <p className="text-gray-600 mb-2 text-sm">{talk.authors}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium">{talk.venue}</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      {talk.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Statistics */}
        <motion.section variants={itemVariants} className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h2 className="text-2xl font-semibold mb-8">Research Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <motion.div 
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {publications.length}
                </motion.div>
                <p className="text-sm text-gray-600">Publications</p>
              </div>
              <div>
                <motion.div 
                  className="text-3xl font-bold text-green-600 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {conferences.length}
                </motion.div>
                <p className="text-sm text-gray-600">Presentations</p>
              </div>
              <div>
                <motion.div 
                  className="text-3xl font-bold text-purple-600 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {patents.length}
                </motion.div>
                <p className="text-sm text-gray-600">Patents</p>
              </div>
              <div>
                <motion.div 
                  className="text-3xl font-bold text-yellow-600 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {awards.length}
                </motion.div>
                <p className="text-sm text-gray-600">Awards</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Publications