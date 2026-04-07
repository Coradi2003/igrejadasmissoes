# ✅ Checklist para Deploy na Vercel

## Antes de fazer o deploy, verifique:

### 1. Arquivos Obrigatórios
- [x] `package.json` - Configurado
- [x] `next.config.js` - Configurado
- [x] `tsconfig.json` - Configurado
- [x] `tailwind.config.ts` - Configurado
- [x] `.gitignore` - Configurado
- [x] `.eslintrc.json` - Configurado
- [x] `vercel.json` - Configurado

### 2. Imagens na pasta /public
Certifique-se que estas imagens existem:
- [ ] `/public/logo.jpeg` - Logo da igreja
- [ ] `/public/fotopastor1.jpeg` - Foto do pastor 1
- [ ] `/public/fotopastor2.jpeg` - Foto do pastor 2

### 3. Testar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Verificar erros de lint
npm run lint

# 3. Fazer build de produção
npm run build

# 4. Testar build localmente
npm start
```

Se todos os comandos acima funcionarem sem erros, o deploy na Vercel vai funcionar! ✅

### 4. Preparar para Git

```bash
# Verificar status
git status

# Adicionar arquivos
git add .

# Commit
git commit -m "Preparado para deploy na Vercel"

# Push para GitHub
git push origin main
```

### 5. Deploy na Vercel

**Opção 1: Via Dashboard (Mais Fácil)**
1. Acesse https://vercel.com
2. Clique em "Add New Project"
3. Selecione seu repositório do GitHub
4. Clique em "Deploy"

**Opção 2: Via CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Problemas Comuns

### ❌ Erro: "Cannot find module"
**Solução**: Execute `npm install` novamente

### ❌ Erro: "Image optimization error"
**Solução**: Verifique se as imagens estão em `/public` e os caminhos começam com `/`

### ❌ Erro: "Build failed"
**Solução**: Execute `npm run build` localmente para ver o erro completo

### ❌ Erro: "Type error"
**Solução**: Execute `npm run lint` e corrija os erros

## Após o Deploy

1. ✅ Teste todas as páginas
2. ✅ Verifique se as imagens carregam
3. ✅ Teste no mobile
4. ✅ Configure domínio personalizado (opcional)

## URLs Úteis

- Dashboard Vercel: https://vercel.com/dashboard
- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support

---

**Pronto para deploy!** 🚀
