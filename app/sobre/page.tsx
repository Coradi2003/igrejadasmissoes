import Image from 'next/image'
import { FiHeart, FiTarget, FiEye, FiAward } from 'react-icons/fi'

export default function Sobre() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Sobre o Ministério
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Uma história de fé, amor e transformação
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Nossa História</h2>
            
            <div className="text-center mb-8">
              <p className="text-xl text-primary-600 font-semibold italic">
                "Nascida da vontade de Deus, a partir do nada"
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                A Igreja Evangélica Missões Unidas na Fé nasceu da vontade de Deus. 
                Sua existência veio a partir do nada, um verdadeiro milagre da providência divina.
              </p>
              
              <p>
                Fundada pelo Pastor Júnior César, nossa igreja começou do zero, movida apenas pela fé e pela 
                certeza de que Deus tinha um propósito especial para este ministério. O que parecia impossível 
                aos olhos humanos, tornou-se realidade através do poder de Deus.
              </p>
              
              <p>
                Hoje, com 19 anos de existência, a Igreja Evangélica Missões Unidas na Fé vem fazendo a diferença 
                no Brasil e além das fronteiras. Nossa sede mundial está localizada em Maringá, Paraná, de onde 
                irradiamos a mensagem do evangelho para todo o país e para as nações.
              </p>
              
              <p>
                Ao longo desses anos, temos visto Deus operar milagres, transformar vidas, restaurar famílias e 
                levantar uma geração apaixonada por missões. Somos gratos a Deus por cada conquista e por cada 
                vida alcançada através deste ministério.
              </p>
              
              <p>
                Mais importante que os números é ver o cumprimento da vontade de Deus: vidas sendo salvas, 
                discípulos sendo formados e o Reino de Deus sendo expandido através das missões unidas na fé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/fotopastor1.jpeg"
                  alt="Pastor Júnior César - Presidente Mundial"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Pastor Júnior César
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Presidente Mundial da Igreja Evangélica Missões Unidas na Fé
                </p>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    Pastor Júnior César é o Presidente Mundial da Igreja Evangélica Missões Unidas na Fé. 
                    Bacharel em Teologia pela Faculdade FAERP, ele dedica sua vida a ensinar a Palavra de Deus 
                    com clareza, profundidade e relevância.
                  </p>
                  
                  <p>
                    Casado há 24 anos com a Pastora Neide Jonas, juntos formam uma parceria ministerial sólida 
                    e inspiradora. Conhecido por suas pregações impactantes e seu coração pastoral, o Pastor 
                    Júnior César tem levado a mensagem do evangelho a milhares de pessoas através de conferências, 
                    congressos e eventos em todo o Brasil e exterior.
                  </p>
                  
                  <p>
                    Além de sua atuação ministerial, é palestrante reconhecido e CEO empresário da Radadch School, 
                    demonstrando que é possível unir fé, família e negócios com excelência e propósito. Sua 
                    liderança visionária tem sido fundamental para o crescimento e expansão da Igreja Evangélica 
                    Missões Unidas na Fé pelo Brasil e pelo mundo.
                  </p>
                  
                  <p>
                    Ele acredita que a igreja deve ser um lugar de acolhimento, crescimento espiritual e 
                    transformação social, onde cada pessoa pode experimentar o amor genuíno de Cristo e 
                    descobrir seu propósito em Deus.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-primary-600 mb-2">24</div>
                    <div className="text-sm text-gray-600">Anos de Casamento</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-primary-600 mb-2">FAERP</div>
                    <div className="text-sm text-gray-600">Bacharel em Teologia</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-primary-600 mb-2">CEO</div>
                    <div className="text-sm text-gray-600">Radadch School</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl font-bold text-primary-600 mb-2">Sede</div>
                    <div className="text-sm text-gray-600">Mundial em Maringá/PR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiTarget size={32} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Missão</h3>
                <p className="text-gray-600">
                  Proclamar o evangelho de Jesus Cristo através de missões unidas na fé, fazer discípulos 
                  e transformar vidas pelo amor de Deus, impactando o Brasil e as nações com a mensagem da salvação.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiEye size={32} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser uma igreja referência mundial em missões, ensino bíblico e transformação de vidas, 
                  expandindo o Reino de Deus através de igrejas unidas na fé pelo Brasil e pelo mundo.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiHeart size={32} className="text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Valores</h3>
                <p className="text-gray-600">
                  Amor, integridade, excelência, comunhão, serviço e compromisso com a Palavra de Deus 
                  são os pilares que fundamentam tudo o que fazemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nossa Comunidade</h2>
            <p className="section-subtitle">Momentos especiais da nossa família</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Foto do Pastor 1 */}
            <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <Image
                src="/fotopastor1.jpeg"
                alt="Pastor Júnior César"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Foto do Pastor 2 */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiAward size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
