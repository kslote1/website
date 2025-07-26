// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, ExternalLink, Calendar, Clock } from 'lucide-react'
import { parseBlogPosts, enhanceMediumPost } from '../utils/blogParser'
import blogUrls from '../assets/blogs.txt?raw'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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
    const loadPosts = async () => {
      try {
        setLoading(true)
        
        // First try to parse posts from blogs.txt file
        const parsedPosts = parseBlogPosts(blogUrls)
        
        if (parsedPosts.length > 0) {
          // Enhance posts (especially Medium ones) and limit to maxPosts
          const enhancedPosts = parsedPosts
            .slice(0, maxPosts)
            .map(post => enhanceMediumPost(post))
          
          setPosts(enhancedPosts)
          setUsingMockData(false)
          setLoading(false)
          return
        }
        
        // Try to fetch from Medium RSS as fallback
        try {
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
                categories: item.categories || [],
                source: 'medium-rss'
              }))
              setPosts(formattedPosts)
              setUsingMockData(false)
              setLoading(false)
              return
            }
          }
        } catch (apiError) {
          console.log('Medium RSS failed:', apiError)
        }
        
        // Final fallback to mock data
        await new Promise(resolve => setTimeout(resolve, 500))
        setPosts(mockPosts.slice(0, maxPosts))
        setUsingMockData(true)
        setLoading(false)
        
      } catch (err) {
        console.error('Error loading blog posts:', err)
        setError('Failed to load blog posts')
        setLoading(false)
      }
    }

    loadPosts()
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

  const getBlogImage = (post) => {
    // Use custom image if provided, otherwise use a default
    if (post.image) {
      return post.image
    }
    // Default placeholder image
    return 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop&crop=entropy&auto=format&q=80'
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
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
    <div>
      {/* Carousel Container */}
      <div className="max-w-3xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          deviceType="desktop"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          showDots={true}
          arrows={true}
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="px-4"
            >
              <div className="minimal-card group">
                {/* Blog Post Image */}
                <div className="relative mb-6">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video rounded-lg overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-200"
                  >
                    <img 
                      src={getBlogImage(post)}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a solid color background
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <BookOpen size={16} className="text-gray-700" />
                    </div>
                  </a>
                </div>

                {/* Blog Post Details */}
                <div className="text-center">
                  <h3 className="font-semibold text-xl leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>{post.title}</span>
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed max-w-lg mx-auto">{post.description}</p>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{formatDate(post.pubDate)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{getReadingTime(post.description)} min read</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center flex-wrap gap-2">
                    {post.categories?.slice(0, 3).map((category, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
      
      <motion.div 
        variants={itemVariants}
        className="text-center pt-6"
      >
        {usingMockData && (
          <div className="mb-4 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
            📝 Showing sample posts. Add your blog URLs to src/assets/blogs.txt to display real articles.
          </div>
        )}
        <a 
          href={`https://medium.com/@${import.meta.env.VITE_MEDIUM_USERNAME || 'kslote1'}`} 
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