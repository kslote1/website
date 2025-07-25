// Utility to parse YouTube URLs and extract video information

export const extractVideoId = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[7].length === 11) ? match[7] : null
}

export const getVideoThumbnail = (videoId, quality = 'maxresdefault') => {
  // Available qualities: maxresdefault, hqdefault, mqdefault, sddefault, default
  // maxresdefault (1280x720) might not exist for all videos, fallback to hqdefault (480x360)
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

export const getVideoEmbedUrl = (videoId) => {
  return `https://www.youtube.com/embed/${videoId}`
}

export const getVideoWatchUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`
}

// Parse YouTube URLs from text file content
export const parseYouTubeUrls = (textContent) => {
  const lines = textContent.split('\n').filter(line => line.trim())
  
  return lines.map((url, index) => {
    const videoId = extractVideoId(url.trim())
    
    if (!videoId) {
      console.warn(`Invalid YouTube URL: ${url}`)
      return null
    }

    return {
      id: videoId,
      title: `Video ${index + 1}`, // Will be updated with real title if available
      description: 'Loading video details...',
      thumbnail: getVideoThumbnail(videoId, 'hqdefault'), // Use hqdefault for better compatibility
      thumbnailHD: getVideoThumbnail(videoId, 'maxresdefault'),
      videoId: videoId,
      url: url.trim(),
      watchUrl: getVideoWatchUrl(videoId),
      embedUrl: getVideoEmbedUrl(videoId),
      publishedAt: new Date().toISOString(), // Placeholder
      duration: 'Loading...',
      viewCount: 'Loading...',
      tags: []
    }
  }).filter(Boolean) // Remove invalid entries
}

// Fetch video metadata using YouTube's oEmbed API (no API key required)
export const fetchVideoMetadata = async (videoId) => {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`)
    
    if (!response.ok) throw new Error('Failed to fetch metadata')
    
    const data = await response.json()
    
    return {
      title: data.title,
      author: data.author_name,
      thumbnail: data.thumbnail_url,
      width: data.width,
      height: data.height
    }
  } catch (error) {
    console.warn(`Failed to fetch metadata for video ${videoId}:`, error)
    return null
  }
}

export default {
  extractVideoId,
  getVideoThumbnail,
  getVideoEmbedUrl,
  getVideoWatchUrl,
  parseYouTubeUrls,
  fetchVideoMetadata
}