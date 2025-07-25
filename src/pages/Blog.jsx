// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import BlogFeed from '../components/BlogFeed'

function Blog() {
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
            <BookOpen className="mr-3 text-blue-500" size={32} />
            <h1 className="text-4xl font-bold">Blog</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts on mathematics, machine learning, and the intersection of theory and practice. 
            Exploring complex ideas through accessible explanations and practical applications.
          </p>
        </motion.div>

        {/* Blog Categories */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning',
              'Mathematics', 
              'Neuroscience',
              'AI Ethics',
              'Data Science',
              'Python',
              'Research'
            ].map((category, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Blog Feed */}
        <motion.div variants={itemVariants}>
          <BlogFeed />
        </motion.div>

        {/* About the Blog */}
        <motion.section variants={itemVariants} className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">About This Blog</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I write about the fascinating intersections between pure mathematics and practical applications, 
              sharing insights from my research in topological data analysis, machine learning, and neuroscience. 
              My goal is to make complex mathematical concepts accessible and demonstrate their real-world impact.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Research Insights</h3>
                <p className="text-gray-600">Deep dives into current research findings and methodologies</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Practical Tutorials</h3>
                <p className="text-gray-600">Step-by-step guides for implementing mathematical concepts in code</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold mb-2">Career Reflections</h3>
                <p className="text-gray-600">Thoughts on bridging academia and industry in mathematical sciences</p>
              </div>
            </div>
            <div className="mt-8">
              <motion.a 
                href="https://medium.com/@kslote" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Follow on Medium
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Blog