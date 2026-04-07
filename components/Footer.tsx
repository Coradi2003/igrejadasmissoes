import Link from 'next/link'
import Image from 'next/image'
import { FiFacebook, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sobre */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="IEMUF Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-bold">Igreja Evangélica Missões Unidas na Fé</span>
            </div>
            <p className="text-gray-400 mb-6">
              Sede Mundial - Maringá/PR - Transformando vidas através da fé e do amor de Cristo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="/eventos" className="text-gray-400 hover:text-white transition-colors">Eventos</Link></li>
              <li><Link href="/projetos" className="text-gray-400 hover:text-white transition-colors">Projetos Sociais</Link></li>
              <li><Link href="/agenda" className="text-gray-400 hover:text-white transition-colors">Agenda</Link></li>
              <li><Link href="/loja" className="text-gray-400 hover:text-white transition-colors">Loja</Link></li>
            </ul>
          </div>

          {/* Ministérios */}
          <div>
            <h3 className="font-bold text-lg mb-6">Ministérios</h3>
            <ul className="space-y-3">
              <li><Link href="/oracao" className="text-gray-400 hover:text-white transition-colors">Pedidos de Oração</Link></li>
              <li><Link href="/doar" className="text-gray-400 hover:text-white transition-colors">Doações</Link></li>
              <li><Link href="/membros" className="text-gray-400 hover:text-white transition-colors">Área de Membros</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Voluntariado</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">Sede Mundial<br />Maringá - Paraná</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-gray-400">(44) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-gray-400">contato@iemuf.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Igreja Evangélica Missões Unidas na Fé. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
