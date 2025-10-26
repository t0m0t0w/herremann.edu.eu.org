# 🚀 Svelte + MDsveX Blogg Oppsett Guide

## Hva du trenger å installere først:

### 1. Installer Node.js

Last ned og installer Node.js fra: https://nodejs.org/ (velg LTS-versjonen)
Dette installerer både Node.js og npm.

### 2. Sjekk at alt er installert

Åpne en ny terminal og kjør:

```powershell
node --version
npm --version
```

## Oppsett av prosjektet:

### Steg 1: Opprett nytt SvelteKit prosjekt

```powershell
# I rotmappen til prosjektet ditt
npm create svelte@latest . -- --template skeleton --types typescript
```

Velg følgende når du blir spurt:

- ✅ Add type checking with TypeScript? › Yes, using TypeScript syntax
- ✅ Add ESLint? › Yes (valgfritt)
- ✅ Add Prettier? › Yes (valgfritt)

### Steg 2: Installer avhengigheter

```powershell
npm install
npm install -D @sveltejs/adapter-static
npm install -D mdsvex
```

### Steg 3: Konfigurer for GitHub Pages

Jeg kommer til å lage følgende filer for deg:

- `svelte.config.js` - Hovedkonfigurasjon med MDsveX og static adapter
- `src/routes/+layout.svelte` - Layout med din styling
- `src/routes/+page.svelte` - Hjemmesiden
- `src/routes/blogg/+page.ts` - Laster alle bloggposter
- `src/routes/blogg/+page.svelte` - Viser blogglisten
- `src/routes/blogg/[slug]/+page.ts` - Laster enkelt bloggpost
- `src/routes/blogg/[slug]/+page.svelte` - Viser enkelt bloggpost
- `src/posts/eksempel.md` - Eksempel bloggpost
- `.github/workflows/deploy.yml` - GitHub Actions for auto-deploy

### Steg 4: Bygg og test lokalt

```powershell
npm run dev
```

### Steg 5: Deploy til GitHub Pages

Push til GitHub så vil GitHub Actions automatisk bygge og deploye!

## Slik bruker du bloggen:

### Legg til ny bloggpost:

1. Opprett en ny `.md` fil i `src/posts/`
2. Legg til frontmatter øverst:

```markdown
---
title: "Min første bloggpost"
date: "2025-10-26"
description: "Dette er en kort beskrivelse"
published: true
---

# Din bloggpost her!

Du kan bruke vanlig Markdown **og** custom Svelte-komponenter!

<script>
  let count = 0;
</script>

<button on:click={() => count++}>
Klikk meg: {count}
</button>
```

3. Bloggposten vises automatisk på `/blogg`!

## Custom HTML og Svelte-komponenter:

MDsveX lar deg skrive både Markdown OG Svelte i samme fil!

```markdown
---
title: "Interaktiv post"
---

# Se på dette!

<script>
  let name = '';
</script>

<input bind:value={name} placeholder="Skriv navnet ditt" />
<p>Hei {name}!</p>

<style>
  input {
    padding: 0.5rem;
    border: 2px solid #58a6ff;
  }
</style>
```

## Nyttige kommandoer:

```powershell
npm run dev          # Kjør utviklingsserver (http://localhost:5173)
npm run build        # Bygg for produksjon
npm run preview      # Forhåndsvis produksjonsbygg
```

## Neste steg etter installasjonen:

1. Kjør `npm run dev` og åpne http://localhost:5173
2. Opprett bloggposter i `src/posts/`
3. Push til GitHub for automatisk deploy!
