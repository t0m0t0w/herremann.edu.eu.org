# herremann.edu.eu.org 🚀

Min personlige nettside og blogg bygget med SvelteKit og MDsveX.

## 🛠️ Tech Stack

- **SvelteKit** - Moderne web framework
- **MDsveX** - Markdown med Svelte-komponenter
- **TypeScript** - Type safety
- **GitHub Pages** - Gratis hosting
- **GitHub Actions** - Automatisk deploy

## 📝 Hvordan legge til en ny bloggpost

1. Opprett en ny `.md` fil i `src/posts/` mappen
2. Legg til frontmatter øverst i filen:

```markdown
---
title: "Din tittel her"
date: "2025-10-26"
description: "En kort beskrivelse"
published: true
---

# Din bloggpost her!

Skriv vanlig Markdown...

## Eller legg til interaktive komponenter!

<script>
  let count = 0;
</script>

<button on:click={() => count++}>
Klikk meg: {count}
</button>
```

3. Commit og push - GitHub Actions deployer automatisk!

## 🚀 Lokal utvikling

```powershell
# Installer avhengigheter (første gang)
npm install

# Start utviklingsserver
npm run dev

# Bygg for produksjon
npm run build

# Forhåndsvis produksjonsbygg
npm run preview
```

## 📁 Prosjektstruktur

```
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          # Global layout
│   │   ├── +page.svelte            # Hjemmeside
│   │   └── blogg/
│   │       ├── +page.svelte        # Bloggliste
│   │       ├── +page.ts            # Laster alle posts
│   │       └── [slug]/
│   │           ├── +page.svelte    # Enkelt bloggpost
│   │           └── +page.ts        # Laster enkelt post
│   ├── posts/                      # Markdown bloggposter her!
│   │   ├── velkommen.md
│   │   └── komponenter-guide.md
│   ├── lib/
│   │   └── components/             # Gjenbrukbare komponenter
│   └── app.css                     # Global styling
├── static/                         # Statiske filer (bilder etc)
├── svelte.config.js                # SvelteKit konfigurasjon
└── package.json
```

## 🎨 Features

✅ Markdown bloggposter  
✅ Custom HTML/Svelte-komponenter i Markdown  
✅ Automatisk bloggliste  
✅ Responsive design  
✅ Mørk GitHub-tema  
✅ Gratis hosting på GitHub Pages  
✅ Automatisk deploy med GitHub Actions

## 📦 Deployment

Prosjektet deployes automatisk til GitHub Pages når du pusher til `main` branch.

For å aktivere GitHub Pages første gang:

1. Gå til repository settings
2. Pages → Source → GitHub Actions
3. Push til main - ferdig! 🎉

## 📄 Lisens

Dette er mitt personlige nettsted, men du kan fritt bruke koden som inspirasjon!
