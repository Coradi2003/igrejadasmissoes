# 🚀 Deploy Simples - Site HTML

O site agora está em HTML/CSS/JavaScript puro e pode ser hospedado em QUALQUER lugar!

## ✅ Arquivos Principais

- `index.html` - Página inicial
- `styles.css` - Estilos
- `script.js` - JavaScript
- `public/` - Pasta com imagens (logo.jpeg, fotopastor1.jpeg, fotopastor2.jpeg)

## 🌐 Opções de Hospedagem (TODAS GRATUITAS!)

### 1. Netlify (MAIS FÁCIL - RECOMENDADO!)

**Método 1: Arrastar e Soltar**
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta do projeto inteira
3. Pronto! Site no ar em 30 segundos!

**Método 2: Via GitHub**
1. Suba o código para GitHub
2. Acesse https://netlify.com
3. Clique em "Add new site" > "Import from Git"
4. Selecione seu repositório
5. Deploy automático!

### 2. GitHub Pages

```bash
# 1. Criar repositório no GitHub
# 2. Subir os arquivos
git init
git add .
git commit -m "Site IEMUF"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main

# 3. No GitHub:
# - Vá em Settings > Pages
# - Source: Deploy from a branch
# - Branch: main / (root)
# - Save

# Seu site estará em: https://SEU-USUARIO.github.io/SEU-REPO
```

### 3. Vercel (Agora vai funcionar!)

```bash
# Via CLI
npm i -g vercel
vercel

# Ou via dashboard
# 1. https://vercel.com
# 2. Add New Project
# 3. Import Git Repository
# 4. Deploy!
```

### 4. Hostinger / cPanel

1. Faça upload dos arquivos via FTP
2. Coloque na pasta `public_html`
3. Pronto!

### 5. InfinityFree (Hospedagem Gratuita)

1. Crie conta em https://infinityfree.net
2. Crie um site
3. Faça upload via FTP ou File Manager
4. Pronto!

## 📁 Estrutura de Arquivos para Upload

```
seu-site/
├── index.html
├── styles.css
├── script.js
└── public/
    ├── logo.jpeg
    ├── fotopastor1.jpeg
    └── fotopastor2.jpeg
```

## ⚡ Deploy Rápido - Netlify Drop

**MAIS RÁPIDO (30 segundos):**

1. Abra https://app.netlify.com/drop
2. Arraste TODA a pasta do projeto
3. Pronto! URL gerada automaticamente

## 🎯 Checklist Antes do Deploy

- [ ] Arquivo `index.html` existe
- [ ] Arquivo `styles.css` existe
- [ ] Arquivo `script.js` existe
- [ ] Pasta `public/` com as 3 imagens
- [ ] Testou abrindo `index.html` no navegador

## 🔧 Testar Localmente

Simplesmente abra o arquivo `index.html` no seu navegador!

Ou use um servidor local:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Depois acesse: http://localhost:8000

## 📝 Criar Outras Páginas

Para criar as outras páginas (sobre.html, eventos.html, etc), copie a estrutura do `index.html` e modifique o conteúdo.

Exemplo:
```html
<!-- sobre.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Mesmo head do index.html -->
</head>
<body>
    <!-- Mesmo header -->
    
    <!-- Conteúdo da página Sobre -->
    <section class="section">
        <div class="container">
            <h1>Sobre Nós</h1>
            <!-- Seu conteúdo aqui -->
        </div>
    </section>
    
    <!-- Mesmo footer -->
</body>
</html>
```

## 🎉 Pronto!

Seu site está pronto para ser hospedado em qualquer lugar!

**Recomendação:** Use Netlify Drop para deploy instantâneo!
