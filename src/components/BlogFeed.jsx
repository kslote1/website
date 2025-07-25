// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, ExternalLink, Calendar, Clock } from 'lucide-react'

function BlogFeed({ maxPosts = 6 }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [usingMockData, setUsingMockData] = useState(false)

  // For demonstration, I'll use mock data since we need your actual Medium username
  // Replace with actual RSS feed integration
  const mockPosts = [
    {
      title: "Topological Data Analysis in Neuroscience: A Practical Guide",
      description: "Exploring how persistent homology and topological methods can reveal hidden patterns in brain network data, with applications to epilepsy research.",
      link: "https://medium.com/@kslote/topological-data-analysis-neuroscience",
      pubDate: "2025-01-15",
      categories: ["Machine Learning", "Neuroscience", "Mathematics"]
    },
    {
      title: "Understanding Causal Networks in Social Media Analysis", 
      description: "A deep dive into PCMCI methods and how they can uncover causal relationships in complex social systems.",
      link: "https://medium.com/@kslote/causal-networks-social-media",
      pubDate: "2024-12-10",
      categories: ["Data Science", "Social Networks", "Causal Inference"]
    },
    {
      title: "From Abstract Algebra to Machine Learning: An Unexpected Journey",
      description: "How my background in algebraic geometry and category theory unexpectedly prepared me for modern AI research.",
      link: "https://medium.com/@kslote/abstract-algebra-to-ml",
      pubDate: "2024-11-20",
      categories: ["Career", "Mathematics", "AI"]
    },
    {
      title: "Building Explainable AI for Clinical Applications",
      description: "Why interpretability matters in medical AI and how we're developing transparent models for seizure prediction.",
      link: "https://medium.com/@kslote/explainable-ai-clinical",
      pubDate: "2024-10-05",
      categories: ["AI Ethics", "Healthcare", "Explainable AI"]
    },
    {
      title: "The Mathematics Behind Generative AI Security",
      description: "Exploring the theoretical foundations that make generative AI systems secure and robust against adversarial attacks.",
      link: "https://medium.com/@kslote/mathematics-generative-ai-security",
      pubDate: "2024-09-15",
      categories: ["AI Security", "Mathematics", "Generative AI"]
    },
    {
      title: "Python Tools for Topological Data Analysis",
      description: "A practical tutorial on implementing persistent homology algorithms and visualizing topological features in Python.",
      link: "https://medium.com/@kslote/python-topological-data-analysis",
      pubDate: "2024-08-22",
      categories: ["Python", "Tutorial", "TDA"]
    }
  ]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        
        // Try to fetch real Medium posts via RSS
        try {
          // Using RSS2JSON service to convert Medium RSS to JSON
          const mediumUsername = import.meta.env.VITE_MEDIUM_USERNAME || 'kslote'
          const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`)
          
          if (response.ok) {
            const data = await response.json()
            if (data.status === 'ok' && data.items.length > 0) {
              const formattedPosts = data.items.slice(0, maxPosts).map(item => ({
                title: item.title,
                description: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...' || 'No description available',
                link: item.link,
                pubDate: item.pubDate,
                categories: item.categories || []
              }))
              setPosts(formattedPosts)
              setUsingMockData(false)
              setLoading(false)
              return
            }
          }
        } catch (apiError) {
          console.log('Medium RSS failed, using mock data:', apiError)
        }
        
        // Fallback to mock data if API fails
        await new Promise(resolve => setTimeout(resolve, 500))
        setPosts(mockPosts.slice(0, maxPosts))
        setUsingMockData(true)
        setLoading(false)
        
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [maxPosts])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getReadingTime = (description) => {
    const wordsPerMinute = 200
    const words = description.split(' ').length
    return Math.ceil(words / wordsPerMinute)
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

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(maxPosts > 3 ? 3 : maxPosts)].map((_, index) => (
          <div key={index} className="minimal-card animate-pulse">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="h-4 w-4 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-5 bg-gray-200 rounded-full w-16"></div>
                <div className="h-5 bg-gray-200 rounded-full w-20"></div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <BookOpen size={16} className="animate-spin" />
            <span>Loading latest posts...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <motion.article
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="minimal-card group"
          style={{ animationDelay: `${index * 0.1}s` }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg leading-tight group-hover:text-blue-600 transition-colors">
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-2"
              >
                <span>{post.title}</span>
                <ExternalLink size={16} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </h3>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{formatDate(post.pubDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{getReadingTime(post.description)} min read</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {post.categories?.slice(0, 2).map((category, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
      
      <motion.div 
        variants={itemVariants}
        className="text-center pt-6"
      >
        {usingMockData && (
          <div className="mb-4 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
            📝 Showing sample posts. Connect your Medium account to display real articles.
          </div>
        )}
        <a 
          href={`https://medium.com/@${import.meta.env.VITE_MEDIUM_USERNAME || 'kslote'}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <BookOpen size={16} />
          View All Posts on Medium
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  )
}

export default BlogFeed