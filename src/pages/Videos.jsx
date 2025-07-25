// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Youtube, ExternalLink } from 'lucide-react'
import YouTubeFeed from '../components/YouTubeFeed'

function Videos() {
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
          <div className="flex items-center justify-center mb-6">
            <Youtube className="mr-3 text-red-500" size={32} />
            <h1 className="text-4xl font-bold">Videos</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational content covering mathematics, machine learning, and research insights. 
            From theoretical foundations to practical implementations and career reflections.
          </p>
        </motion.div>

        {/* Video Categories */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Mathematics',
              'Machine Learning', 
              'Neuroscience',
              'Python Tutorials',
              'Research Methods',
              'Career Advice',
              'Data Analysis'
            ].map((category, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-red-100 hover:text-red-700 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>

        {/* YouTube Feed */}
        <motion.div variants={itemVariants}>
          <YouTubeFeed />
        </motion.div>

        {/* Channel Information */}
        <motion.section variants={itemVariants} className="mt-20">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-12 text-center">
            <div className="mb-6">
              <Youtube className="mx-auto text-red-500" size={48} />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Kevin Slote Math Research</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Welcome to my YouTube channel where I share insights from my research in applied mathematics, 
              machine learning, and their applications to neuroscience and social systems. My goal is to 
              make complex mathematical concepts accessible and demonstrate their practical applications.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm mb-8">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Theory Explained</h3>
                <p className="text-gray-600">Breaking down complex mathematical concepts into understandable pieces</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Code Walkthroughs</h3>
                <p className="text-gray-600">Step-by-step implementation guides for mathematical algorithms</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Research Insights</h3>
                <p className="text-gray-600">Behind-the-scenes look at my current research projects and findings</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="https://www.youtube.com/@kevin.slote.math.research" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube size={16} />
                Subscribe on YouTube
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@kevin.slote.math.research/playlists" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                View Playlists
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Videos