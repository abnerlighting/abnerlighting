import { useState, useEffect } from 'react'

const Toast = ({ message, isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => {
          onClose()
        }, 300) // Wait for fade out animation
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] bg-black text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
      isAnimating ? 'opacity-100' : 'opacity-0'
    }`}>
      {message}
    </div>
  )
}

export default Toast
