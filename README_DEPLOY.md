# 🚀 Deploy na Vercel - Guia Completo

## Pré-requisitos

1. Conta no GitHub
2. Conta na Vercel (pode usar login do GitHub)
3. Código do projeto no GitHub

## Passo a Passo para Deploy

### 1. Preparar o Repositório

```bash
# Inicializar git (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit - Site IEMUF"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git branch -M main
git push -u origin main
```

### 2. Deploy na Vercel

#### Opção A: Via Dashboard da Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório do GitHub
5. Configure:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
   - **Install Command**: `npm install`

6. Clique em "Deploy"

#### Opção B: Via CLI da Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

### 3. Configurar Variáveis de Ambiente (Opcional)

No dashboard da Vercel:
1. Vá em Settings > Environment Variables
2. Adicione as variáveis necessárias:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_FACEBOOK_URL`
   - `NEXT_PUBLIC_INSTAGRAM_URL`
   - `NEXT_PUBLIC_YOUTUBE_URL`

### 4. Configurar Domínio Personalizado (Opcional)

1. No dashboard do projeto na Vercel
2. Vá em Settings > Domains
3. Adicione seu domínio (ex: iemuf.com.br)
4. Configure os DNS conforme instruções da Vercel

## Verificações Importantes

### ✅ Checklist Antes do Deploy

- [ ] Todas as imagens estão na pasta `/public`
- [ ] Logo: `/public/logo.jpeg`
- [ ] Fotos do pastor: `/public/fotopastor1.jpeg` e `/public/fotopastor2.jpeg`
- [ ] Arquivo `.gitignore` configurado
- [ ] Dependências instaladas: `npm install`
- [ ] Build local funciona: `npm run build`
- [ ] Sem erros de TypeScript
- [ ] Sem erros de ESLint

### 🔍 Testar Build Local

```bash
# Instalar dependências
npm install

# Fazer build
npm run build

# Testar produção localmente
npm start
```

Se o build local funcionar, o deploy na Vercel também funcionará!

## Problemas Comuns e Soluções

### Erro: "Module not found"
**Solução**: Verifique se todas as importações estão corretas e os arquivos existem

### Erro: "Image optimization error"
**Solução**: Certifique-se que as imagens estão em `/public` e os caminhos começam com `/`

### Erro: "Build failed"
**Solução**: Execute `npm run build` localmente para ver o erro detalhado

### Erro: "Type error"
**Solução**: Execute `npm run lint` e corrija os erros de TypeScript

## Atualizações Futuras

Após o primeiro deploy, qualquer push para a branch `main` no GitHub irá:
1. Automaticamente fazer novo deploy
2. Executar os testes
3. Atualizar o site em produção

## URLs Importantes

- **Dashboard Vercel**: https://vercel.com/dashboard
- **Documentação Next.js**: https://nextjs.org/docs
- **Documentação Vercel**: https://vercel.com/docs

## Suporte

Se tiver problemas:
1. Verifique os logs no dashboard da Vercel
2. Execute `npm run build` localmente
3. Verifique se todas as imagens estão no lugar certo
4. Consulte a documentação da Vercel

---

**Pronto!** Seu site estará no ar em poucos minutos! 🎉
