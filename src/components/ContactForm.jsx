import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageCircle, AlertCircle, CheckCircle } from 'lucide-react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errors, setErrors] = useState({})

  const contactTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'collaboration', label: 'Research Collaboration' },
    { value: 'academic', label: 'Academic Opportunity' },
    { value: 'industry', label: 'Industry Partnership' },
    { value: 'media', label: 'Media/Interview' }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Since this is a static site, we'll create a mailto link with pre-filled content
      const emailBody = `
Contact Type: ${contactTypes.find(t => t.value === formData.type)?.label}

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent via kevin-slote.com contact form
      `.trim()
      
      const mailtoLink = `mailto:kslote1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Simulate success after a short delay
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          type: 'general'
        })
      }, 1000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
    >
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
        >
          <CheckCircle className="text-green-500 mr-3" size={20} />
          <div>
            <p className="text-green-800 font-medium">Message sent successfully!</p>
            <p className="text-green-600 text-sm">Your email client should open shortly. I'll get back to you soon.</p>
          </div>
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
        >
          <AlertCircle className="text-red-500 mr-3" size={20} />
          <div>
            <p className="text-red-800 font-medium">Something went wrong</p>
            <p className="text-red-600 text-sm">Please try again or send an email directly to kslote1@gmail.com</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Type of Inquiry
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            {contactTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="inline mr-1" />
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" />
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail size={16} className="inline mr-1" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Brief description of your inquiry"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageCircle size={16} className="inline mr-1" />
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Please provide details about your inquiry, research interests, collaboration ideas, or any questions you have..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/500 characters
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          } text-white`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={16} className="mr-2" />
              Send Message
            </>
          )}
        </motion.button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          This form will open your email client with the message pre-filled. 
          Your information is not stored on this website.
        </p>
      </div>
    </motion.div>
  )
}

export default ContactForm