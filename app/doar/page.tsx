'use client'

import { useState } from 'react'
import { FiHeart, FiCreditCard, FiSmartphone, FiCheck } from 'react-icons/fi'

const valores = [50, 100, 200, 500]

export default function Doar() {
  const [valorSelecionado, setValorSelecionado] = useState<number | null>(null)
  const [valorCustom, setValorCustom] = useState('')
  const [metodoPagamento, setMetodoPagamento] = useState<'pix' | 'cartao' | null>(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <FiHeart size={64} className="mx-auto mb-6 text-gold-400" />
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Faça Sua Doação
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Sua contribuição transforma vidas e expande o Reino de Deus
          </p>
        </div>
      </section>

      {/* Impacto das Doações */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">O Impacto da Sua Doação</h2>
            <p className="text-lg text-gray-600">
              Cada contribuição é investida com responsabilidade e transparência em três áreas principais:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Ministério</h3>
              <p className="text-gray-600">
                Sustento pastoral, eventos, pregações e expansão do evangelho
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Projetos Sociais</h3>
              <p className="text-gray-600">
                Alimentação, educação e apoio a famílias em vulnerabilidade
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Missões</h3>
              <p className="text-gray-600">
                Apoio a missionários e evangelização nacional e internacional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Doação */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-8 text-center text-gray-900">
                Escolha o Valor
              </h2>

              {/* Valores Sugeridos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {valores.map((valor) => (
                  <button
                    key={valor}
                    onClick={() => {
                      setValorSelecionado(valor)
                      setValorCustom('')
                    }}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      valorSelecionado === valor
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-400'
                    }`}
                  >
                    <div className="text-2xl font-bold text-gray-900">R$ {valor}</div>
                  </button>
                ))}
              </div>

              {/* Valor Customizado */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-2">
                  Ou digite outro valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                    R$
                  </span>
                  <input
                    type="number"
                    value={valorCustom}
                    onChange={(e) => {
                      setValorCustom(e.target.value)
                      setValorSelecionado(null)
                    }}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors text-lg"
                    placeholder="0,00"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Método de Pagamento */}
              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-4">
                  Método de Pagamento
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setMetodoPagamento('pix')}
                    className={`p-6 rounded-xl border-2 transition-all flex items-center justify-center gap-3 ${
                      metodoPagamento === 'pix'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-400'
                    }`}
                  >
                    <FiSmartphone size={24} className="text-primary-600" />
                    <div className="text-left">
                      <div className="font-bold text-gray-900">PIX</div>
                      <div className="text-sm text-gray-600">Instantâneo</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setMetodoPagamento('cartao')}
                    className={`p-6 rounded-xl border-2 transition-all flex items-center justify-center gap-3 ${
                      metodoPagamento === 'cartao'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 hover:border-primary-400'
                    }`}
                  >
                    <FiCreditCard size={24} className="text-primary-600" />
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Cartão</div>
                      <div className="text-sm text-gray-600">Crédito/Débito</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Informações PIX */}
              {metodoPagamento === 'pix' && (
                <div className="mb-8 p-6 bg-primary-50 rounded-xl border-2 border-primary-200">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">Dados para PIX</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Chave PIX (CNPJ)</div>
                      <div className="font-mono font-bold text-gray-900">12.345.678/0001-90</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Favorecido</div>
                      <div className="font-bold text-gray-900">Igreja Evangélica Missões Unidas na Fé</div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <div className="text-center text-gray-600 mb-2">QR Code PIX</div>
                    <div className="w-48 h-48 bg-gray-200 mx-auto rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">QR Code aqui</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Botão de Doação */}
              <button
                disabled={(!valorSelecionado && !valorCustom) || !metodoPagamento}
                className="w-full btn-gold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                <FiHeart size={20} />
                Confirmar Doação
              </button>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>Doações são seguras e processadas com criptografia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Fiscais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Por Que Doar?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <FiCheck size={32} className="text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-gray-900">Transparência Total</h3>
                <p className="text-gray-600">
                  Publicamos relatórios mensais de como cada centavo é investido no ministério e projetos sociais.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <FiCheck size={32} className="text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-gray-900">Impacto Real</h3>
                <p className="text-gray-600">
                  Sua doação alimenta famílias, educa crianças, apoia missionários e transforma vidas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <FiCheck size={32} className="text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-gray-900">Recibo para IR</h3>
                <p className="text-gray-600">
                  Emitimos recibo oficial para declaração de imposto de renda conforme legislação vigente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <FiCheck size={32} className="text-green-600 mb-4" />
                <h3 className="font-bold text-xl mb-3 text-gray-900">Segurança</h3>
                <p className="text-gray-600">
                  Todas as transações são protegidas com criptografia de ponta e processadas por plataformas seguras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunho */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💝</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              "Cada um contribua segundo propôs no seu coração"
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              2 Coríntios 9:7
            </p>
            <p className="text-lg text-gray-400">
              Deus ama quem dá com alegria. Sua generosidade é uma expressão de fé e amor ao próximo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
