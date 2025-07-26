// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Play, ExternalLink, Calendar, Clock, Eye, Youtube } from 'lucide-react'
import { parseYouTubeUrls, fetchVideoMetadata } from '../utils/youtubeParser'
import youtubeUrls from '../assets/youtube.txt?raw'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function YouTubeFeed({ maxVideos = 6 }) {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [usingMockData, setUsingMockData] = useState(false)

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
    const loadVideos = async () => {
      try {
        setLoading(true)
        setUsingMockData(false)
        
        // Parse video URLs from the text file
        const parsedVideos = parseYouTubeUrls(youtubeUrls)
        
        if (parsedVideos.length === 0) {
          console.warn('No valid YouTube URLs found in youtube.txt')
          setVideos(mockVideos.slice(0, maxVideos))
          setUsingMockData(true)
          setLoading(false)
          return
        }
        
        // Limit to maxVideos
        const videosToShow = parsedVideos.slice(0, maxVideos)
        
        // Set initial videos with basic info
        setVideos(videosToShow)
        setLoading(false)
        
        // Fetch metadata for each video in background
        const enhancedVideos = await Promise.allSettled(
          videosToShow.map(async (video) => {
            const metadata = await fetchVideoMetadata(video.videoId)
            
            if (metadata) {
              return {
                ...video,
                title: metadata.title,
                author: metadata.author,
                description: `Video by ${metadata.author}`,
                // Try HD thumbnail first, fallback to standard
                thumbnail: video.thumbnailHD,
                publishedAt: new Date().toISOString(), // Still placeholder
                duration: 'Watch on YouTube',
                viewCount: 'YouTube',
                tags: []
              }
            }
            
            return {
              ...video,
              title: `YouTube Video`,
              description: 'Click to watch on YouTube',
              duration: 'Watch on YouTube',
              viewCount: 'YouTube'
            }
          })
        )
        
        // Update with enhanced metadata
        const finalVideos = enhancedVideos.map((result, index) => 
          result.status === 'fulfilled' ? result.value : videosToShow[index]
        )
        
        setVideos(finalVideos)
        
      } catch (err) {
        console.error('Error loading YouTube videos:', err)
        setError('Failed to load YouTube videos')
        setLoading(false)
      }
    }

    loadVideos()
  }, [maxVideos])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
        {[...Array(maxVideos > 3 ? 3 : maxVideos)].map((_, index) => (
          <div key={index} className="minimal-card animate-pulse">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Video Thumbnail Skeleton */}
              <div className="relative">
                <div className="aspect-video bg-gray-200 rounded-lg"></div>
                <div className="absolute bottom-2 right-2 bg-gray-300 h-4 w-12 rounded"></div>
              </div>
              
              {/* Video Details Skeleton */}
              <div className="md:col-span-2">
                <div className="h-5 bg-gray-200 rounded w-4/5 mb-3"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-5 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-5 bg-gray-200 rounded-full w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <Youtube size={16} className="animate-pulse" />
            <span>Loading latest videos...</span>
          </div>
        </div>
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
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="px-4"
            >
              <div className="minimal-card group">
                {/* Video Thumbnail */}
                <div className="relative mb-6">
                  <a 
                    href={video.watchUrl || `https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-video rounded-lg overflow-hidden bg-gray-900 group-hover:scale-105 transition-transform duration-200"
                  >
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80"
                      onError={(e) => {
                        // Fallback to standard quality thumbnail if HD fails
                        if (e.target.src.includes('maxresdefault')) {
                          e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                        }
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
                        <Play size={32} className="text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    {video.duration && video.duration !== 'Loading...' && (
                      <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white text-sm px-3 py-1 rounded">
                        {video.duration}
                      </div>
                    )}
                  </a>
                </div>

                {/* Video Details */}
                <div className="text-center">
                  <h3 className="font-semibold text-xl leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                    <a 
                      href={video.watchUrl || `https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>{video.title}</span>
                      <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed max-w-lg mx-auto">{video.description}</p>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{formatDate(video.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye size={14} />
                      <span>{video.viewCount}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center flex-wrap gap-2">
                    {video.tags?.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full"
                      >
                        {tag}
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
            🎥 Showing sample videos. Add URLs to src/assets/youtube.txt to display your content.
          </div>
        )}
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