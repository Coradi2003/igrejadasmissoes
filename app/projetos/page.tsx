import { FiHeart, FiBook, FiUsers, FiHome, FiShoppingBag, FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'

const projetos = [
  {
    id: 1,
    titulo: 'Alimentando Vidas',
    descricao: 'Distribuição mensal de cestas básicas para 500 famílias em situação de vulnerabilidade social.',
    icon: FiShoppingBag,
    impacto: '500 famílias atendidas/mês',
    cor: 'from-red-500 to-pink-600',
    detalhes: 'Nosso projeto de distribuição de alimentos alcança famílias que enfrentam dificuldades financeiras. Além das cestas básicas, oferecemos orientação nutricional e acompanhamento social.'
  },
  {
    id: 2,
    titulo: 'Educação Transforma',
    descricao: 'Reforço escolar gratuito e cursos profissionalizantes para jovens e adultos da comunidade.',
    icon: FiBook,
    impacto: '300 alunos matriculados',
    cor: 'from-blue-500 to-indigo-600',
    detalhes: 'Oferecemos aulas de reforço escolar, informática, inglês e cursos profissionalizantes. Nosso objetivo é capacitar pessoas para o mercado de trabalho e melhorar o desempenho escolar.'
  },
  {
    id: 3,
    titulo: 'Acolhimento e Restauração',
    descricao: 'Apoio a pessoas em situação de rua e dependência química com acolhimento, alimentação e tratamento.',
    icon: FiHome,
    impacto: '150 pessoas acolhidas',
    cor: 'from-green-500 to-teal-600',
    detalhes: 'Mantemos uma casa de acolhimento com estrutura para receber pessoas em situação de vulnerabilidade. Oferecemos alimentação, higiene, tratamento e apoio psicológico.'
  },
  {
    id: 4,
    titulo: 'Saúde para Todos',
    descricao: 'Atendimento médico e odontológico gratuito, além de campanhas de prevenção e vacinação.',
    icon: FiHeart,
    impacto: '1000 atendimentos/mês',
    cor: 'from-purple-500 to-pink-600',
    detalhes: 'Nossa clínica social oferece consultas médicas, odontológicas e exames básicos gratuitamente. Realizamos também campanhas de vacinação e prevenção de doenças.'
  },
  {
    id: 5,
    titulo: 'Geração de Renda',
    descricao: 'Capacitação profissional e apoio ao empreendedorismo para geração de renda familiar.',
    icon: FiTrendingUp,
    impacto: '200 pessoas capacitadas',
    cor: 'from-yellow-500 to-orange-600',
    detalhes: 'Oferecemos cursos de capacitação profissional, microcrédito e mentoria para pequenos empreendedores. Ajudamos famílias a conquistarem independência financeira.'
  },
  {
    id: 6,
    titulo: 'Crianças Felizes',
    descricao: 'Atividades recreativas, esportivas e culturais para crianças em contraturno escolar.',
    icon: FiUsers,
    impacto: '400 crianças atendidas',
    cor: 'from-pink-500 to-rose-600',
    detalhes: 'Oferecemos atividades no contraturno escolar incluindo esportes, artes, música e reforço escolar. Proporcionamos um ambiente seguro e educativo para as crianças.'
  },
]

export default function Projetos() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <FiHeart size={64} className="mx-auto mb-6 text-gold-400" />
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Projetos Sociais
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Levando amor, esperança e transformação para quem mais precisa
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-16">Nosso Impacto em Números</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">2.5K+</div>
                <div className="text-gray-600 font-medium">Pessoas Atendidas/Mês</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Projetos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">19</div>
                <div className="text-gray-600 font-medium">Anos de Atuação</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">300+</div>
                <div className="text-gray-600 font-medium">Voluntários</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {projetos.map((projeto, index) => (
              <div key={projeto.id} className={`card overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`relative h-80 bg-gradient-to-br ${projeto.cor} flex items-center justify-center`}>
                    <projeto.icon size={120} className="text-white/30" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="text-sm font-semibold mb-2 opacity-90">IMPACTO</div>
                      <div className="text-2xl font-bold">{projeto.impacto}</div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-display text-3xl font-bold mb-4 text-gray-900">
                      {projeto.titulo}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {projeto.descricao}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {projeto.detalhes}
                    </p>
                    <Link href="/doar" className="btn-primary inline-block text-center">
                      Quero Ajudar Este Projeto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Ajudar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-16">Como Você Pode Ajudar</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">Doações Financeiras</h3>
                <p className="text-gray-600 mb-6">
                  Contribua financeiramente para manter e expandir nossos projetos sociais.
                </p>
                <Link href="/doar" className="text-primary-600 font-semibold hover:text-primary-700">
                  Fazer Doação →
                </Link>
              </div>

              <div className="card p-8 text-center">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">Seja Voluntário</h3>
                <p className="text-gray-600 mb-6">
                  Doe seu tempo e talentos para fazer a diferença na vida de pessoas.
                </p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                  Quero Ser Voluntário →
                </a>
              </div>

              <div className="card p-8 text-center">
                <div className="text-5xl mb-6">📦</div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">Doações de Itens</h3>
                <p className="text-gray-600 mb-6">
                  Doe alimentos, roupas, materiais escolares e outros itens necessários.
                </p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                  Ver Lista de Necessidades →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center mb-16">Veja Nosso Trabalho em Ação</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Fotos do Pastor */}
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/fotopastor1.jpeg"
                  alt="Pastor Júnior César"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/fotopastor2.jpeg"
                  alt="Pastor Júnior César"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiHeart size={40} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Juntos Podemos Fazer Mais
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Sua contribuição, seja financeira ou como voluntário, transforma vidas e espalha o amor de Cristo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/doar" className="btn-gold">
              Fazer Doação
            </Link>
            <a href="#" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
              Ser Voluntário
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
