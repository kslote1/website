import { motion } from 'framer-motion'
import { Home, Search, Mail, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
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

  const numberVariants = {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container text-center">
        <motion.div
          variants={numberVariants}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-semibold mb-4 text-primary"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-secondary mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. 
          Let's help you find what you're looking for.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <Link 
            to="/" 
            className="btn btn-primary"
            aria-label="Go back to homepage"
          >
            <Home size={16} aria-hidden="true" />
            Back to Home
          </Link>
          
          <Link 
            to="/research" 
            className="btn btn-ghost"
            aria-label="View research page"
          >
            <Search size={16} aria-hidden="true" />
            Browse Research
          </Link>
          
          <a 
            href="mailto:kslote1@gmail.com" 
            className="btn btn-ghost"
            aria-label="Send email to Kevin Slote"
          >
            <Mail size={16} aria-hidden="true" />
            Contact Me
          </a>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="text-sm text-secondary"
        >
          <p>Looking for something specific? Try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/publications" className="text-accent hover:text-accent-light">Publications</Link>
            <Link to="/about" className="text-accent hover:text-accent-light">About</Link>
            <Link to="/teaching" className="text-accent hover:text-accent-light">Teaching</Link>
            <Link to="/blog" className="text-accent hover:text-accent-light">Blog</Link>
            <Link to="/videos" className="text-accent hover:text-accent-light">Videos</Link>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="mt-8"
        >
          <button 
            onClick={() => window.history.back()}
            className="text-accent hover:text-accent-light inline-flex items-center gap-2"
            aria-label="Go back to previous page"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Go Back
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFound