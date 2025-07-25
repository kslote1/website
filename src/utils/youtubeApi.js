// YouTube API utilities
// To use this, you'll need to:
// 1. Get a YouTube API key from Google Cloud Console
// 2. Enable YouTube Data API v3
// 3. Add the API key to your environment variables

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || ''
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uZZ5FSM9Ttw' // Default fallback

export const fetchYouTubeVideos = async (maxResults = 6) => {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key not configured')
  }

  try {
    // First, get the channel's uploads playlist ID
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    )
    
    if (!channelResponse.ok) {
      throw new Error('Failed to fetch channel information')
    }
    
    const channelData = await channelResponse.json()
    
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel not found')
    }
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads
    
    // Get the latest videos from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&order=date&key=${YOUTUBE_API_KEY}`
    )
    
    if (!videosResponse.ok) {
      throw new Error('Failed to fetch videos')
    }
    
    const videosData = await videosResponse.json()
    
    // Get additional video details (duration, view count, etc.)
    const videoIds = videosData.items.map(item => item.snippet.resourceId.videoId).join(',')
    
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    )
    
    if (!detailsResponse.ok) {
      throw new Error('Failed to fetch video details')
    }
    
    const detailsData = await detailsResponse.json()
    
    // Combine the data
    const formattedVideos = videosData.items.map((item, index) => {
      const details = detailsData.items[index]
      
      return {
        title: item.snippet.title,
        description: item.snippet.description.substring(0, 200) + '...',
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        videoId: item.snippet.resourceId.videoId,
        publishedAt: item.snippet.publishedAt,
        duration: formatDuration(details?.contentDetails?.duration || 'PT0S'),
        viewCount: formatViewCount(details?.statistics?.viewCount || '0'),
        tags: item.snippet.tags?.slice(0, 3) || []
      }
    })
    
    return formattedVideos
    
  } catch (error) {
    console.error('YouTube API Error:', error)
    throw error
  }
}

// Helper function to format ISO 8601 duration (PT4M13S) to readable format (4:13)
const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  
  if (!match) return '0:00'
  
  const hours = parseInt(match[1]) || 0
  const minutes = parseInt(match[2]) || 0
  const seconds = parseInt(match[3]) || 0
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  } else {
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
}

// Helper function to format view count (1234567 -> 1.2M)
const formatViewCount = (viewCount) => {
  const num = parseInt(viewCount)
  
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  } else {
    return num.toString()
  }
}

export default {
  fetchYouTubeVideos
}