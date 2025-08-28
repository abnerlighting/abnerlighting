import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890' // Replace with actual WhatsApp number
    const message = 'Hello! I would like to know more about your lighting products.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}

export default WhatsAppButton
