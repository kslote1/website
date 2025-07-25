// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Play, ExternalLink, Calendar, Clock, Eye, Youtube } from 'lucide-react'

function YouTubeFeed({ maxVideos = 6 }) {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Mock data - replace with actual YouTube API integration
  const mockVideos = [
    {
      title: "Topological Data Analysis: From Theory to Neuroscience Applications",
      description: "An introduction to persistent homology and its applications in analyzing brain network data for epilepsy research.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      publishedAt: "2025-01-20",
      duration: "25:34",
      viewCount: "1,247",
      tags: ["Mathematics", "Neuroscience", "Data Analysis"]
    },
    {
      title: "Understanding Causal Networks with PCMCI Methods",
      description: "A deep dive into causal inference techniques and their application to social media analysis and policy research.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      publishedAt: "2025-01-15",
      duration: "32:18",
      viewCount: "892",
      tags: ["Causal Inference", "Social Networks", "Research Methods"]
    },
    {
      title: "Machine Learning in Clinical Applications: Ethics and Interpretability",
      description: "Exploring the challenges and solutions for building explainable AI systems in healthcare settings.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      publishedAt: "2025-01-10",
      duration: "28:45",
      viewCount: "2,156",
      tags: ["AI Ethics", "Healthcare", "Machine Learning"]
    },
    {
      title: "Python Implementation of Persistent Homology",
      description: "A hands-on tutorial showing how to implement topological data analysis algorithms from scratch in Python.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      publishedAt: "2025-01-05",
      duration: "45:12",
      viewCount: "3,421",
      tags: ["Python", "Tutorial", "Programming"]
    },
    {
      title: "From Abstract Algebra to AI: My Research Journey",
      description: "A personal reflection on how my mathematical background led to interdisciplinary research in AI and neuroscience.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      publishedAt: "2024-12-28",
      duration: "18:23",
      viewCount: "1,834",
      tags: ["Career", "Research", "Mathematics"]
    },
    {
      title: "Dynamical Systems in Data Science: A Practical Introduction",
      description: "Bridging the gap between theoretical dynamical systems and modern data science applications.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
      publishedAt: "2024-12-20",
      duration: "38:56",
      viewCount: "1,567",
      tags: ["Dynamical Systems", "Data Science", "Mathematics"]
    }
  ]

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1200))
        
        // In a real implementation, you would fetch from YouTube API:
        // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxVideos}&order=date&key=${apiKey}`)
        // const data = await response.json()
        // setVideos(data.items)
        
        setVideos(mockVideos.slice(0, maxVideos))
        setLoading(false)
      } catch (err) {
        setError('Failed to load YouTube videos')
        setLoading(false)
      }
    }

    fetchVideos()
  }, [maxVideos])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
        {[...Array(3)].map((_, index) => (
          <div key={index} className="minimal-card animate-pulse">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="flex space-x-4">
              <div className="h-3 bg-gray-200 rounded w-16"></div>
              <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <Youtube className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {videos.map((video, index) => (
        <motion.article
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="minimal-card group"
          style={{ animationDelay: `${index * 0.1}s` }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Video Thumbnail */}
            <div className="relative">
              <a 
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video rounded-lg overflow-hidden bg-gray-900 group-hover:scale-105 transition-transform duration-200"
              >
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-200">
                    <Play size={24} className="text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </a>
            </div>

            {/* Video Details */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-lg leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                <a 
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2"
                >
                  <span>{video.title}</span>
                  <ExternalLink size={16} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{video.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(video.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{video.viewCount} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{video.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {video.tags?.slice(0, 2).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
      
      <motion.div 
        variants={itemVariants}
        className="text-center pt-6"
      >
        <a 
          href="https://www.youtube.com/@kevin.slote.math.research" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          <Youtube size={16} />
          View Channel on YouTube
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  )
}

export default YouTubeFeed