import Link from 'next/link'
import Image from 'next/image'
import { FiPlay, FiCalendar, FiHeart, FiUsers, FiBook, FiAward } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-purple-900 to-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            Transformando Vidas<br />
            <span className="text-gold-400">Através da Fé</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            Seja bem-vindo ao nosso ministério. Aqui você encontra amor, esperança e uma família em Cristo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/oracao" className="btn-primary">
              Pedir Oração
            </Link>
            <Link href="/eventos" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
              Ver Eventos
            </Link>
            <Link href="/doar" className="btn-gold">
              Fazer Doação
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Próximo Evento */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCalendar size={80} className="text-white/30" />
                  </div>
                  <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white">
                    <span className="text-gold-400 font-semibold mb-2">PRÓXIMO EVENTO</span>
                    <h3 className="font-display text-3xl font-bold mb-4">Conferência de Avivamento 2026</h3>
                    <p className="text-white/90 mb-4">15 de Maio, 2026 • 19h</p>
                    <p className="text-sm text-white/80">Com Pastor Júnior César</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-gray-600 mb-6">
                    Prepare-se para uma noite de adoração, palavra poderosa e manifestação do Espírito Santo. Venha experimentar a presença de Deus de forma intensa.
                  </p>
                  <Link href="/eventos" className="btn-primary inline-block text-center">
                    Inscrever-se Agora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Última Mensagem */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Última Mensagem</h2>
            <p className="section-subtitle">Assista à pregação mais recente do Pastor Júnior César</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="card">
              <div className="relative aspect-video bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110">
                    <FiPlay size={32} className="text-primary-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="font-bold text-2xl mb-2">O Poder da Fé que Move Montanhas</h3>
                  <p className="text-gray-300">Pastor Júnior César - Presidente Mundial</p>
                  <p className="text-sm text-gray-400 mt-1">7 de Abril, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <FiUsers size={48} className="mx-auto mb-4 text-gold-400" />
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">5.000+</div>
              <div className="text-white/80">Membros</div>
            </div>
            <div className="text-center">
              <FiHeart size={48} className="mx-auto mb-4 text-gold-400" />
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">19</div>
              <div className="text-white/80">Anos de Ministério</div>
            </div>
            <div className="text-center">
              <FiCalendar size={48} className="mx-auto mb-4 text-gold-400" />
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-white/80">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <FiAward size={48} className="mx-auto mb-4 text-gold-400" />
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80">Projetos Sociais</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Sociais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Projetos Sociais</h2>
            <p className="section-subtitle">Levando amor e esperança para quem mais precisa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Alimentando Vidas',
                description: 'Distribuição de alimentos para famílias em situação de vulnerabilidade',
                icon: FiHeart,
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'
              },
              {
                title: 'Educação Transforma',
                description: 'Reforço escolar e cursos profissionalizantes gratuitos',
                icon: FiBook,
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'
              },
              {
                title: 'Acolhimento',
                description: 'Apoio a pessoas em situação de rua e dependência química',
                icon: FiUsers,
                image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800'
              }
            ].map((project, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-purple-600/80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                    <project.icon size={40} className="mb-4 text-gold-400" />
                    <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projetos" className="btn-primary">
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Vidas Transformadas</h2>
            <p className="section-subtitle">Conheça histórias reais de pessoas que encontraram esperança</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Maria Silva',
                text: 'Minha vida mudou completamente depois que conheci Cristo nesta igreja. Encontrei uma família e propósito.',
                role: 'Membro há 3 anos',
                image: null
              },
              {
                name: 'João Santos',
                text: 'As pregações do Pastor Júnior César tocaram meu coração e me ajudaram a superar momentos difíceis.',
                role: 'Membro há 5 anos',
                image: null
              },
              {
                name: 'Ana Costa',
                text: 'Os projetos sociais me mostraram o verdadeiro amor de Deus em ação. Hoje sou voluntária e ajudo outros.',
                role: 'Voluntária',
                image: null
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="text-primary-600 text-5xl font-serif mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção com Foto do Pastor */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="/fotopastor2.jpeg"
                alt="Pastor Júnior César"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Uma Palavra do Pastor
              </h2>
              <p className="text-xl mb-6 text-gray-300">
                "Deus tem um propósito especial para cada vida. Nossa missão é ajudar você a descobrir 
                e cumprir esse propósito através da fé e do poder do Espírito Santo."
              </p>
              <p className="text-lg text-gold-400 font-semibold mb-8">
                - Pastor Júnior César
              </p>
              <Link href="/sobre" className="btn-gold inline-block">
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Faça Parte Desta Família
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Venha nos visitar e experimente o amor de Deus em comunidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sobre" className="btn-secondary bg-white text-primary-700 border-white hover:bg-gray-100">
              Conhecer a Igreja
            </Link>
            <Link href="/oracao" className="btn-primary">
              Pedir Oração
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
