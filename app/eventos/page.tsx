import { FiCalendar, FiMapPin, FiClock, FiUsers } from 'react-icons/fi'

const eventos = [
  {
    id: 1,
    titulo: 'Conferência de Avivamento 2026',
    data: '15 de Maio, 2026',
    horario: '19h00',
    local: 'Sede da Igreja',
    vagas: '2000 vagas',
    preco: 80.00,
    destaque: true,
    descricao: 'Uma noite poderosa de adoração, palavra e manifestação do Espírito Santo. Prepare seu coração para um encontro transformador com Deus.',
    preletor: 'Pastor Júnior César - Presidente Mundial'
  },
  {
    id: 2,
    titulo: 'Congresso de Jovens 2026',
    data: '20-22 de Junho, 2026',
    horario: '19h00 - 22h00',
    local: 'Centro de Convenções',
    vagas: '5000 vagas',
    preco: 60.00,
    destaque: true,
    descricao: 'Três dias intensos de louvor, palavra e comunhão. Um evento especialmente preparado para a juventude que busca mais de Deus.',
    preletor: 'Diversos Preletores'
  },
  {
    id: 3,
    titulo: 'Retiro de Casais',
    data: '10-12 de Julho, 2026',
    horario: 'Check-in: 14h',
    local: 'Hotel Fazenda Serra Verde',
    vagas: '100 casais',
    preco: 450.00,
    destaque: false,
    descricao: 'Um fim de semana especial para fortalecer seu casamento através de ensinamentos bíblicos, dinâmicas e momentos a dois.',
    preletor: 'Pastor Júnior César e Pastora Neide Jonas'
  },
  {
    id: 4,
    titulo: 'Seminário de Liderança',
    data: '15 de Agosto, 2026',
    horario: '9h00 - 18h00',
    local: 'Sede da Igreja',
    vagas: '300 vagas',
    preco: 0,
    destaque: false,
    descricao: 'Capacitação para líderes e futuros líderes do ministério. Desenvolvimento de habilidades práticas e espirituais.',
    preletor: 'Equipe Pastoral'
  },
  {
    id: 5,
    titulo: 'Noite de Adoração',
    data: '5 de Setembro, 2026',
    horario: '20h00',
    local: 'Sede da Igreja',
    vagas: 'Entrada Franca',
    preco: 0,
    destaque: false,
    descricao: 'Uma noite dedicada exclusivamente à adoração e busca da presença de Deus. Venha com seu coração aberto.',
    preletor: 'Ministério de Louvor'
  },
  {
    id: 6,
    titulo: 'Conferência Missionária',
    data: '20 de Outubro, 2026',
    horario: '19h00',
    local: 'Sede da Igreja',
    vagas: '1500 vagas',
    preco: 40.00,
    destaque: false,
    descricao: 'Conheça o trabalho missionário da igreja e descubra como você pode fazer parte da grande comissão.',
    preletor: 'Missionários Convidados'
  },
]

export default function Eventos() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <FiCalendar size={64} className="mx-auto mb-6 text-gold-400" />
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Eventos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Momentos especiais para você crescer espiritualmente e se conectar com Deus
          </p>
        </div>
      </section>

      {/* Eventos em Destaque */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Próximos Eventos</h2>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {eventos.filter(e => e.destaque).map((evento) => (
              <div key={evento.id} className="card overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                    <FiCalendar size={80} className="text-white/30" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        DESTAQUE
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <h3 className="font-display text-3xl font-bold mb-4 text-gray-900">
                      {evento.titulo}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <FiCalendar className="mr-3 text-primary-600" size={20} />
                        <span>{evento.data}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiClock className="mr-3 text-primary-600" size={20} />
                        <span>{evento.horario}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiMapPin className="mr-3 text-primary-600" size={20} />
                        <span>{evento.local}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiUsers className="mr-3 text-primary-600" size={20} />
                        <span>{evento.vagas}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{evento.descricao}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Preletor</div>
                        <div className="font-semibold text-gray-900">{evento.preletor}</div>
                      </div>
                      <div className="text-right">
                        {evento.preco > 0 ? (
                          <>
                            <div className="text-3xl font-bold text-primary-600 mb-2">
                              R$ {evento.preco.toFixed(2)}
                            </div>
                            <button className="btn-primary">
                              Inscrever-se Agora
                            </button>
                          </>
                        ) : (
                          <button className="btn-primary">
                            Inscrição Gratuita
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros Eventos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Outros Eventos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {eventos.filter(e => !e.destaque).map((evento) => (
              <div key={evento.id} className="card">
                <div className="relative h-48 bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                  <FiCalendar size={60} className="text-white/30" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-gray-900">
                    {evento.titulo}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="mr-2 text-primary-600" size={16} />
                      <span>{evento.data}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="mr-2 text-primary-600" size={16} />
                      <span>{evento.horario}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="mr-2 text-primary-600" size={16} />
                      <span>{evento.local}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">{evento.descricao}</p>
                  
                  {evento.preco > 0 ? (
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary-600">
                        R$ {evento.preco.toFixed(2)}
                      </div>
                      <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium">
                        Inscrever
                      </button>
                    </div>
                  ) : (
                    <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-medium">
                      Inscrição Gratuita
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Não Perca Nenhum Evento
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Cadastre-se para receber notificações sobre novos eventos
          </p>
          <button className="btn-gold">
            Quero Receber Notificações
          </button>
        </div>
      </section>
    </div>
  )
}
