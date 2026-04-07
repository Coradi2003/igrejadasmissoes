'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}
