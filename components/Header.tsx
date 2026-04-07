'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="IEMUF Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-2xl font-bold text-gray-900 hidden md:block">
              Igreja Evangélica Missões Unidas na Fé
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/loja" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Loja
            </Link>
            <Link href="/eventos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Eventos
            </Link>
            <Link href="/projetos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Projetos
            </Link>
            <Link href="/agenda" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Agenda
            </Link>
            <Link href="/oracao" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium">
              Pedir Oração
            </Link>
            <Link href="/doar" className="bg-gold-500 text-white px-6 py-2 rounded-full hover:bg-gold-600 transition-colors font-medium">
              Doar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Início
            </Link>
            <Link href="/sobre" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Sobre
            </Link>
            <Link href="/loja" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Loja
            </Link>
            <Link href="/eventos" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Eventos
            </Link>
            <Link href="/projetos" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Projetos
            </Link>
            <Link href="/agenda" className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
              Agenda
            </Link>
            <Link href="/oracao" className="block bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-medium text-center">
              Pedir Oração
            </Link>
            <Link href="/doar" className="block bg-gold-500 text-white px-6 py-3 rounded-full hover:bg-gold-600 transition-colors font-medium text-center">
              Doar
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
