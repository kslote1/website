// Utility to parse blog post information from text file

export const parseBlogPosts = (textContent) => {
  const lines = textContent.split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => line.trim())
  
  return lines.map((line, index) => {
    const parts = line.split(' | ')
    
    // Handle both full format and URL-only format
    if (parts.length >= 2) {
      // Full format: URL | Title | Description | Date | Tags | Image (optional)
      const [url, title, description = '', date = '', tags = '', image = ''] = parts
      return {
        title: title.trim(),
        description: description.trim() || 'Click to read more...',
        link: url.trim(),
        pubDate: date.trim() || new Date().toISOString(),
        categories: tags.trim() ? tags.split(',').map(tag => tag.trim()) : [],
        image: image.trim() || null,
        id: `blog-${index}`,
        source: 'manual'
      }
    } else if (parts.length === 1 && parts[0].startsWith('http')) {
      // URL-only format - extract what we can
      const url = parts[0].trim()
      return {
        title: extractTitleFromUrl(url),
        description: 'Click to read the full article...',
        link: url,
        pubDate: new Date().toISOString(),
        categories: [],
        id: `blog-${index}`,
        source: 'url-only'
      }
    }
    
    console.warn(`Invalid blog entry format: ${line}`)
    return null
  }).filter(Boolean) // Remove invalid entries
}

// Extract a readable title from URL
const extractTitleFromUrl = (url) => {
  try {
    const urlObj = new URL(url)
    
    // For Medium URLs, try to extract from the path
    if (url.includes('medium.com')) {
      const pathParts = urlObj.pathname.split('/')
      const lastPart = pathParts[pathParts.length - 1]
      
      if (lastPart && lastPart.includes('-')) {
        // Medium URLs often have format: /title-with-dashes-hash
        const titleParts = lastPart.split('-')
        // Remove the hash at the end (usually last part)
        const cleanParts = titleParts.slice(0, -1)
        return cleanParts
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }
    }
    
    // Generic fallback - use domain name
    return `Article from ${urlObj.hostname.replace('www.', '')}`
  } catch (error) {
    return 'Blog Article'
  }
}

// Try to extract better metadata from Medium URLs
export const enhanceMediumPost = (post) => {
  if (!post.link.includes('medium.com')) {
    return post
  }

  // Extract potential title from Medium URL slug
  try {
    const url = new URL(post.link)
    const pathParts = url.pathname.split('-')
    if (pathParts.length > 1) {
      // Medium URLs often end with a hash, remove it and capitalize words
      const titleParts = pathParts.slice(0, -1)
      const extractedTitle = titleParts
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ')
      
      if (post.title === 'Sample Blog Post' || !post.title) {
        post.title = extractedTitle
      }
    }
  } catch (error) {
    console.warn('Failed to parse Medium URL:', error)
  }

  return post
}

export default {
  parseBlogPosts,
  enhanceMediumPost
}