import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'

const cultos = [
  {
    dia: 'Domingo',
    horarios: [
      { hora: '09h00', tipo: 'Culto de Celebração', local: 'Templo Principal' },
      { hora: '18h00', tipo: 'Culto de Celebração', local: 'Templo Principal' },
    ]
  },
  {
    dia: 'Terça-feira',
    horarios: [
      { hora: '19h30', tipo: 'Culto de Ensino', local: 'Templo Principal' },
    ]
  },
  {
    dia: 'Quinta-feira',
    horarios: [
      { hora: '19h30', tipo: 'Culto de Oração', local: 'Templo Principal' },
    ]
  },
  {
    dia: 'Sábado',
    horarios: [
      { hora: '19h00', tipo: 'Culto de Jovens', local: 'Salão de Eventos' },
    ]
  },
]

const atividades = [
  {
    titulo: 'Escola Bíblica Dominical',
    dia: 'Domingo',
    horario: '08h00',
    descricao: 'Estudo aprofundado da Palavra de Deus para todas as idades',
    publico: 'Todas as idades'
  },
  {
    titulo: 'Célula de Oração',
    dia: 'Segunda-feira',
    horario: '20h00',
    descricao: 'Reuniões de oração em casas de família',
    publico: 'Membros'
  },
  {
    titulo: 'Ministério Infantil',
    dia: 'Domingo',
    horario: '09h00 e 18h00',
    descricao: 'Atividades especiais para crianças durante os cultos',
    publico: '3 a 12 anos'
  },
  {
    titulo: 'Grupo de Jovens',
    dia: 'Sexta-feira',
    horario: '20h00',
    descricao: 'Encontro semanal com louvor, palavra e comunhão',
    publico: '13 a 25 anos'
  },
  {
    titulo: 'Ministério de Casais',
    dia: 'Última sexta do mês',
    horario: '20h00',
    descricao: 'Encontro mensal para fortalecimento dos casamentos',
    publico: 'Casais'
  },
  {
    titulo: 'Grupo de Mulheres',
    dia: 'Quarta-feira',
    horario: '14h00',
    descricao: 'Comunhão, estudo bíblico e oração entre mulheres',
    publico: 'Mulheres'
  },
]

export default function Agenda() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <FiCalendar size={64} className="mx-auto mb-6 text-gold-400" />
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Agenda
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Confira nossa programação semanal e participe conosco
          </p>
        </div>
      </section>

      {/* Cultos Semanais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-16">Cultos Semanais</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {cultos.map((dia, index) => (
                <div key={index} className="card p-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-primary-600">
                    {dia.dia}
                  </h3>
                  
                  <div className="space-y-4">
                    {dia.horarios.map((horario, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                            {horario.hora}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 mb-1">
                            {horario.tipo}
                          </h4>
                          <div className="flex items-center text-gray-600 text-sm">
                            <FiMapPin size={14} className="mr-1" />
                            {horario.local}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outras Atividades */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center mb-16">Outras Atividades</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {atividades.map((atividade, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                      <FiCalendar size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{atividade.dia}</div>
                      <div className="text-sm text-gray-600">{atividade.horario}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    {atividade.titulo}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {atividade.descricao}
                  </p>
                  
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {atividade.publico}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-16">Informações Importantes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Localização</h3>
                <p className="text-gray-600 mb-4">
                  Sede Mundial<br />
                  Maringá - Paraná<br />
                  Brasil
                </p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                  Ver no Mapa →
                </a>
              </div>

              <div className="card p-8">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Estacionamento</h3>
                <p className="text-gray-600">
                  Estacionamento gratuito disponível para todos os cultos e eventos. 
                  Capacidade para 200 veículos.
                </p>
              </div>

              <div className="card p-8">
                <div className="text-4xl mb-4">👶</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Ministério Infantil</h3>
                <p className="text-gray-600">
                  Berçário e atividades para crianças disponíveis durante todos os cultos. 
                  Equipe treinada e ambiente seguro.
                </p>
              </div>

              <div className="card p-8">
                <div className="text-4xl mb-4">♿</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Acessibilidade</h3>
                <p className="text-gray-600">
                  Templo totalmente acessível com rampas, elevador e banheiros adaptados 
                  para pessoas com mobilidade reduzida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transmissão Online */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">📺</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Assista Online
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Não pode vir presencialmente? Acompanhe nossos cultos ao vivo pelo YouTube
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-gold">
              Assistir no YouTube
            </a>
            <a href="#" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
              Ver Cultos Anteriores
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Venha Nos Visitar!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Será um prazer receber você e sua família. Venha experimentar o amor de Deus em comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Falar no WhatsApp
            </a>
            <a href="#" className="btn-secondary">
              Ver Localização
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
