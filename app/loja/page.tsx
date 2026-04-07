import { FiShoppingCart, FiBook, FiCalendar, FiAward } from 'react-icons/fi'

const products = [
  {
    id: 1,
    name: 'Livro: Fé que Move Montanhas',
    author: 'Pastor Júnior César',
    price: 45.90,
    category: 'Livros',
    image: 'book',
    description: 'Descubra como desenvolver uma fé inabalável'
  },
  {
    id: 2,
    name: 'Livro: Propósito e Destino',
    author: 'Pastor Júnior César',
    price: 39.90,
    category: 'Livros',
    image: 'book',
    description: 'Encontre seu propósito em Deus'
  },
  {
    id: 3,
    name: 'Conferência de Avivamento 2026',
    author: 'Ingresso Individual',
    price: 80.00,
    category: 'Eventos',
    image: 'event',
    description: '15 de Maio - Noite de adoração e palavra'
  },
  {
    id: 4,
    name: 'Congresso de Jovens 2026',
    author: 'Ingresso Individual',
    price: 60.00,
    category: 'Eventos',
    image: 'event',
    description: '20-22 de Junho - Três dias de muito louvor'
  },
  {
    id: 5,
    name: 'Imersão: Liderança Cristã',
    author: 'Curso Completo - 8 semanas',
    price: 350.00,
    category: 'Cursos',
    image: 'course',
    description: 'Desenvolva suas habilidades de liderança'
  },
  {
    id: 6,
    name: 'Imersão: Teologia Bíblica',
    author: 'Curso Completo - 12 semanas',
    price: 450.00,
    category: 'Cursos',
    image: 'course',
    description: 'Aprofunde seu conhecimento bíblico'
  },
  {
    id: 7,
    name: 'Livro: Família Abençoada',
    author: 'Pastor Júnior César e Pastora Neide Jonas',
    price: 42.90,
    category: 'Livros',
    image: 'book',
    description: 'Princípios para uma família forte - 24 anos de casamento'
  },
  {
    id: 8,
    name: 'Kit Devocional Completo',
    author: 'Livro + Diário + Caneta',
    price: 89.90,
    category: 'Livros',
    image: 'book',
    description: 'Tudo para sua vida devocional'
  },
]

const categories = ['Todos', 'Livros', 'Eventos', 'Cursos']

export default function Loja() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <FiShoppingCart size={64} className="mx-auto mb-6 text-gold-400" />
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Loja
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Livros, eventos e cursos para fortalecer sua jornada espiritual
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card group">
                <div className="relative h-64 bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center">
                  {product.image === 'book' && <FiBook size={80} className="text-white/30" />}
                  {product.image === 'event' && <FiCalendar size={80} className="text-white/30" />}
                  {product.image === 'course' && <FiAward size={80} className="text-white/30" />}
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{product.author}</p>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-600">
                      R$ {product.price.toFixed(2)}
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium flex items-center gap-2">
                      <FiShoppingCart size={18} />
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações de Pagamento */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Formas de Pagamento</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-bold text-xl mb-2">Cartão de Crédito</h3>
                <p className="text-gray-600">Parcele em até 12x sem juros</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-xl mb-2">PIX</h3>
                <p className="text-gray-600">Pagamento instantâneo com desconto</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🎫</div>
                <h3 className="font-bold text-xl mb-2">Boleto</h3>
                <p className="text-gray-600">Vencimento em 3 dias úteis</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary-50 rounded-xl border-2 border-primary-200">
              <p className="text-gray-700">
                <strong>Nota:</strong> Todos os valores arrecadados são investidos no ministério e em projetos sociais. 
                Ao comprar, você está contribuindo para a transformação de vidas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
