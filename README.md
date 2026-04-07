# Site da Igreja Evangélica Missões Unidas na Fé

Site completo, moderno e profissional para a Igreja Evangélica Missões Unidas na Fé - Sede Mundial (Maringá/PR) com foco em conversão, autoridade e alcance nacional/internacional.

## 🎯 Funcionalidades

### Páginas Principais
- **Home**: Banner impactante, próximo evento, última mensagem, projetos sociais e testemunhos
- **Sobre**: História da igreja, apresentação do Pastor Júnior César, missão/visão/valores
- **Loja**: E-commerce para livros, ingressos de eventos e cursos/imersões
- **Eventos**: Lista de eventos futuros com sistema de inscrição
- **Pedidos de Oração**: Formulário acolhedor para pedidos
- **Doações**: Sistema de doações com PIX e cartão
- **Projetos Sociais**: Apresentação dos projetos com impacto gerado
- **Agenda**: Calendário de cultos e atividades semanais
- **Área de Membros**: Conteúdos exclusivos, cursos e certificados

### Recursos
- ✅ Design moderno e emocional
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves
- ✅ Integração WhatsApp
- ✅ SEO otimizado
- ✅ Preparado para multilíngue
- ✅ Sistema de e-commerce
- ✅ Área de membros com login
- ✅ Formulários de contato

## 🎨 Design

- Paleta de cores: Roxo, preto, dourado e branco
- Tipografia: Inter (sans-serif) + Playfair Display (display)
- Layout limpo e profissional
- Componentes reutilizáveis
- Gradientes e sombras modernas

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

O site estará disponível em `http://localhost:3000`

## 🌐 Deploy

### Vercel (Recomendado)

O projeto está 100% pronto para deploy na Vercel!

**Deploy Rápido:**
1. Faça push do código para GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Deploy automático!

**Ou via CLI:**
```bash
npm i -g vercel
vercel
```

📖 **Guia completo de deploy**: Veja [README_DEPLOY.md](./README_DEPLOY.md)

### Outras plataformas
- Netlify
- AWS Amplify
- Digital Ocean

## 📝 Configurações Necessárias

### 1. Informações da Igreja
As informações principais já estão configuradas:
- Nome: Igreja Evangélica Missões Unidas na Fé
- Localização: Sede Mundial em Maringá, Paraná
- História: 19 anos de ministério (nascida da vontade de Deus)
- Presidente Mundial: Pastor Júnior César
- Primeira-dama: Pastora Neide Jonas (casados há 24 anos)
- Formação: Bacharel em Teologia pela FAERP
- Atuação: Palestrante e CEO da Radadch School

Ainda precisa configurar:
- `components/WhatsAppButton.tsx` - Número real do WhatsApp
- `app/doar/page.tsx` - Chave PIX e dados bancários reais
- Endereço completo com rua e número

### 2. Imagens
As imagens principais já estão configuradas:
- ✅ Logo da igreja: `/public/logo.jpeg`
- ✅ Foto do Pastor 1: `/public/fotopastor1.jpeg`
- ✅ Foto do Pastor 2: `/public/fotopastor2.jpeg`

Adicione também:
- Fotos dos eventos
- Fotos dos projetos sociais
- Galeria da comunidade
- Fotos da sede em Maringá/PR
- Fotos de cultos e celebrações

### 3. Integrações
Configure as seguintes integrações:
- **Pagamentos**: Stripe, Mercado Pago ou PagSeguro
- **E-mail**: SendGrid, Mailgun ou AWS SES
- **Analytics**: Google Analytics
- **Vídeos**: YouTube API
- **Autenticação**: NextAuth.js ou Firebase

### 4. SEO
Atualize os metadados em:
- `app/layout.tsx` - Meta tags globais
- Cada página - Meta tags específicas

## 🔧 Customização

### Cores
Edite `tailwind.config.ts` para mudar as cores do tema:
```typescript
colors: {
  primary: { ... }, // Roxo
  gold: { ... },    // Dourado
}
```

### Fontes
Edite `app/layout.tsx` para mudar as fontes:
```typescript
const inter = Inter({ ... })
const playfair = Playfair_Display({ ... })
```

## 📱 Páginas

- `/` - Home
- `/sobre` - Sobre o Ministério
- `/loja` - Loja (E-commerce)
- `/eventos` - Eventos e Inscrições
- `/oracao` - Pedidos de Oração
- `/doar` - Doações
- `/projetos` - Projetos Sociais
- `/agenda` - Agenda Semanal
- `/membros` - Área de Membros (restrita)

## 🎯 Próximos Passos

1. **Backend**: Implementar API para formulários e pagamentos
2. **CMS**: Adicionar Sanity.io ou Strapi para gerenciar conteúdo
3. **Autenticação**: Implementar sistema de login completo
4. **Pagamentos**: Integrar gateway de pagamento
5. **E-mail**: Configurar envio de e-mails transacionais
6. **Analytics**: Adicionar tracking de conversões
7. **Multilíngue**: Implementar i18n para inglês
8. **Blog**: Adicionar seção de blog/artigos
9. **Podcast**: Seção para podcasts/pregações em áudio
10. **App Mobile**: Considerar versão mobile nativa

## 📄 Licença

Este projeto foi desenvolvido para uso da Igreja Evangélica Missões Unidas na Fé.

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato:
- E-mail: contato@iemuf.com.br
- WhatsApp: (44) 99999-9999
- Localização: Maringá - Paraná

---

Desenvolvido com ❤️ para transformar vidas através da fé
