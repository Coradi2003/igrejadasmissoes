'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiLock, FiUser, FiBook, FiVideo, FiAward, FiDownload } from 'react-icons/fi'

export default function Membros() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você integraria com sua API de autenticação
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-purple-50 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="card p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo.jpeg"
                      alt="IEMUF Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h1 className="font-display text-3xl font-bold mb-2 text-gray-900">
                  Área de Membros
                </h1>
                <p className="text-gray-600">
                  Acesse conteúdos exclusivos e recursos para membros
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="senha" className="block text-gray-700 font-semibold mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="senha"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Entrar
                </button>

                <div className="text-center space-y-2">
                  <a href="#" className="block text-primary-600 hover:text-primary-700 text-sm">
                    Esqueci minha senha
                  </a>
                  <a href="#" className="block text-primary-600 hover:text-primary-700 text-sm">
                    Ainda não sou membro
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Bem-vindo de volta!
              </h1>
              <p className="text-xl text-gray-300">
                Acesse seus conteúdos exclusivos
              </p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20"
            >
              Sair
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title mb-12">Conteúdos Exclusivos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cursos */}
              <div className="card p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <FiBook size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Cursos Online</h3>
                <p className="text-gray-600 mb-4">
                  Acesse cursos de teologia, liderança e crescimento espiritual
                </p>
                <div className="text-primary-600 font-semibold">
                  12 cursos disponíveis →
                </div>
              </div>

              {/* Pregações */}
              <div className="card p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <FiVideo size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Pregações Exclusivas</h3>
                <p className="text-gray-600 mb-4">
                  Biblioteca completa de pregações e estudos bíblicos
                </p>
                <div className="text-primary-600 font-semibold">
                  200+ vídeos →
                </div>
              </div>

              {/* Certificados */}
              <div className="card p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6">
                  <FiAward size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Certificados</h3>
                <p className="text-gray-600 mb-4">
                  Baixe seus certificados de cursos concluídos
                </p>
                <div className="text-primary-600 font-semibold">
                  Ver certificados →
                </div>
              </div>

              {/* Materiais */}
              <div className="card p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <FiDownload size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Materiais de Apoio</h3>
                <p className="text-gray-600 mb-4">
                  PDFs, slides e recursos para seu crescimento
                </p>
                <div className="text-primary-600 font-semibold">
                  Baixar materiais →
                </div>
              </div>

              {/* Comunidade */}
              <div className="card p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                  <FiUser size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Comunidade</h3>
                <p className="text-gray-600 mb-4">
                  Conecte-se com outros membros e compartilhe experiências
                </p>
                <div className="text-primary-600 font-semibold">
                  Acessar fórum →
                </div>
              </div>

              {/* Eventos Exclusivos */}
              <div className="card p-8 hover:shadow-2xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <FiAward size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Eventos Exclusivos</h3>
                <p className="text-gray-600 mb-4">
                  Participe de eventos e encontros apenas para membros
                </p>
                <div className="text-primary-600 font-semibold">
                  Ver próximos eventos →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title mb-12">Cursos em Destaque</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  titulo: 'Teologia Sistemática',
                  aulas: 24,
                  duracao: '12 semanas',
                  progresso: 45
                },
                {
                  titulo: 'Liderança Cristã Avançada',
                  aulas: 16,
                  duracao: '8 semanas',
                  progresso: 20
                },
                {
                  titulo: 'Hermenêutica Bíblica',
                  aulas: 20,
                  duracao: '10 semanas',
                  progresso: 0
                },
                {
                  titulo: 'Aconselhamento Pastoral',
                  aulas: 18,
                  duracao: '9 semanas',
                  progresso: 75
                },
              ].map((curso, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {curso.titulo}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{curso.aulas} aulas</span>
                        <span>•</span>
                        <span>{curso.duracao}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-semibold text-primary-600">{curso.progresso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${curso.progresso}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors font-medium">
                    {curso.progresso > 0 ? 'Continuar Curso' : 'Iniciar Curso'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
