# 🚀 Deploy Rápido - 5 Minutos

## Passo 1: Verificar Imagens (IMPORTANTE!)

Certifique-se que estas 3 imagens existem na pasta `/public`:
- `logo.jpeg`
- `fotopastor1.jpeg`
- `fotopastor2.jpeg`

## Passo 2: Testar Localmente

```bash
npm install
npm run build
```

Se der erro, corrija antes de continuar!

## Passo 3: Subir para GitHub

```bash
git init
git add .
git commit -m "Site IEMUF pronto"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

## Passo 4: Deploy na Vercel

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Selecione seu repositório
5. Clique em "Deploy"

**Pronto!** Em 2-3 minutos seu site estará no ar! 🎉

## URL do Site

Após o deploy, você receberá uma URL tipo:
`https://seu-projeto.vercel.app`

## Configurar Domínio Próprio (Opcional)

1. No dashboard da Vercel, vá em Settings > Domains
2. Adicione seu domínio (ex: iemuf.com.br)
3. Configure o DNS conforme instruções

---

**Dúvidas?** Veja o guia completo em [README_DEPLOY.md](./README_DEPLOY.md)
