import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Igreja Evangélica Missões Unidas na Fé - Sede Mundial',
  description: 'Igreja Evangélica Missões Unidas na Fé - Sede Mundial em Maringá/PR. 19 anos transformando vidas através da palavra de Deus. Eventos, pregações, projetos sociais e muito mais.',
  keywords: 'IEMUF, igreja evangélica, missões unidas na fé, Maringá, Paraná, fé, cristianismo, eventos, pregações, Pastor Júnior César',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
