import React from 'react'

const MarkdownRenderer = ({ content }) => {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text) => {
    if (!text) {
      console.warn('MarkdownRenderer: No content provided')
      return ''
    }

    console.log('MarkdownRenderer: Processing content:', text.substring(0, 200)) // Debug log

    let processed = text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-black mt-8 mb-4 border-b-2 border-gray-800 pb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-black mt-8 mb-4">$1</h1>')
      
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Lists
      .replace(/^- (.*$)/gim, '<li class="mb-2 text-gray-700">$1</li>')
      .replace(/(<li.*<\/li>)/s, '<ul class="list-disc pl-6 my-4">$1</ul>')
      
      // Paragraphs - handle this more carefully
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.trim() === '') return ''
        if (paragraph.startsWith('<')) return paragraph // Already processed
        return `<p class="mb-4 text-gray-700 leading-relaxed">${paragraph.trim()}</p>`
      })
      .join('')
      
      // Clean up empty paragraphs
      .replace(/<p class="mb-4 text-gray-700 leading-relaxed"><\/p>/g, '')
      
      // Clean up consecutive paragraph tags
      .replace(/<\/p><p class="mb-4 text-gray-700 leading-relaxed">/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')

    console.log('MarkdownRenderer: Processed result:', processed.substring(0, 200)) // Debug log
    return processed
  }

  const parsedContent = parseMarkdown(content)

  return (
    <div 
      className="markdown-content prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  )
}

export default MarkdownRenderer
