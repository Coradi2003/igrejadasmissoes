'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiHeart, FiSend } from 'react-icons/fi'

export default function Oracao() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    pedido: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você integraria com sua API
    console.log('Pedido de oração:', formData)
    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setFormData({ nome: '', email: '', telefone: '', pedido: '' })
    }, 3000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <FiHeart size={64} className="mx-auto mb-6 text-gold-400" />
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Pedidos de Oração
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Compartilhe seu pedido conosco. Vamos orar por você e sua família.
          </p>
        </div>
      </section>

      {/* Mensagem Acolhedora */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Você Não Está Sozinho
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sabemos que a vida pode ser desafiadora, mas queremos que você saiba que não está sozinho. 
              Nossa equipe de intercessores está pronta para levar seu pedido diante do trono de Deus.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic">
                "Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, 
                as vossas petições, pela oração e pela súplica, com ações de graças."
              </p>
              <p className="text-primary-600 font-semibold mt-4">Filipenses 4:6</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-8 text-center text-gray-900">
                Envie Seu Pedido
              </h2>

              {enviado ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiHeart size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pedido Recebido!
                  </h3>
                  <p className="text-gray-600">
                    Obrigado por compartilhar conosco. Já estamos orando por você.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
                      Telefone (opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="pedido" className="block text-gray-700 font-semibold mb-2">
                      Seu Pedido de Oração *
                    </label>
                    <textarea
                      id="pedido"
                      required
                      rows={6}
                      value={formData.pedido}
                      onChange={(e) => setFormData({...formData, pedido: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors resize-none"
                      placeholder="Compartilhe seu pedido conosco..."
                    />
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg border-2 border-primary-200">
                    <p className="text-sm text-gray-700">
                      <strong>Privacidade:</strong> Seu pedido será tratado com total confidencialidade. 
                      Apenas nossa equipe de intercessores terá acesso.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-3"
                  >
                    <FiSend size={20} />
                    Enviar Pedido
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Como Funciona</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3">Envie seu Pedido</h3>
                <p className="text-gray-600">
                  Preencha o formulário com seu pedido de oração
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3">Oramos por Você</h3>
                <p className="text-gray-600">
                  Nossa equipe intercede diariamente pelos pedidos recebidos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3">Deus Age</h3>
                <p className="text-gray-600">
                  Confiamos que Deus ouvirá e responderá suas orações
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Precisa de Ajuda Urgente?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Entre em contato conosco pelo WhatsApp para atendimento imediato
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
