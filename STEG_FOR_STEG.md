# 🎯 Steg-for-steg: Fra HTML til Svelte + MDsveX Blogg

## Før du begynner

### 1. Installer Node.js

- Gå til https://nodejs.org/
- Last ned og installer LTS-versjonen (Long Term Support)
- Dette gir deg både `node` og `npm`

### 2. Verifiser installasjonen

Åpne en **ny** PowerShell terminal og kjør:

```powershell
node --version
npm --version
```

Du skal få noe som:

```
v20.x.x
10.x.x
```

---

## Del 1: Installer avhengigheter

I prosjektmappen din, kjør:

```powershell
npm install
```

Dette installerer:

- SvelteKit (web framework)
- MDsveX (Markdown + Svelte)
- adapter-static (for GitHub Pages)
- Vite (build tool)

**Forventet tid:** 1-2 minutter

---

## Del 2: Test lokalt

Start utviklingsserveren:

```powershell
npm run dev
```

Åpne nettleseren på: http://localhost:5173

Du skal nå se:

- ✅ Din hjemmeside (samme som før)
- ✅ Ny "blogg" seksjon
- ✅ To eksempel bloggposter

**Tips:** La serveren kjøre mens du jobber - den oppdaterer automatisk!

---

## Del 3: Legg til din første bloggpost

1. **Opprett ny fil:** `src/posts/min-første-post.md`

2. **Lim inn dette:**

```markdown
---
title: "Min første ekte bloggpost!"
date: "2025-10-26"
description: "Her tester jeg den nye bloggen min"
published: true
---

# Hei verden! 👋

Dette er min første bloggpost med SvelteKit!

## Det som er kult:

- Jeg skriver i Markdown
- Det er super enkelt
- Automatisk lagt til på bloggen!

## Jeg kan til og med legge til interaktive ting:

<script>
  let clicks = 0;
</script>

<button on:click={() => clicks++}>
Klikket {clicks} ganger!
</button>

<style>
  button {
    background: #1f6feb;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background: #58a6ff;
  }
</style>
```

3. **Gå til http://localhost:5173/blogg** - din post er der! 🎉

---

## Del 4: Flytt bilder til riktig sted

Dine bilder (`hermann tenker en tanke.jpg`, osv.) må flyttes til `static/` mappen:

```powershell
# Flytt bildene
Move-Item "hermann tenker en tanke.jpg" static/
Move-Item "blalangetypeface.png" static/
Move-Item "krydderpost.png" static/
```

Eller bare dra og slipp dem til `static/` mappen i VS Code!

---

## Del 5: Bygg for produksjon

Test at alt bygger riktig:

```powershell
npm run build
```

Hvis suksess, se forhåndsvisning:

```powershell
npm run preview
```

Åpne: http://localhost:4173

---

## Del 6: Deploy til GitHub

### A. Slett de gamle filene

Du kan trygt slette (siden alt er i Svelte nå):

- ✅ `index.html` (erstattet av `src/routes/+page.svelte`)
- ✅ `styles.css` (flyttet til `src/app.css`)

### B. Commit og push

```powershell
git add .
git commit -m "Migrert til SvelteKit med MDsveX blogg"
git push
```

### C. Aktiver GitHub Pages

1. Gå til GitHub repository
2. Settings → Pages
3. Under "Source", velg: **GitHub Actions**
4. Ferdig! 🚀

GitHub Actions vil nå automatisk bygge og deploye hver gang du pusher!

---

## Del 7: Skriv flere bloggposter!

Bare opprett nye `.md` filer i `src/posts/`:

### Eksempel: `src/posts/krydderbot.md`

```markdown
---
title: "Hvordan jeg lagde Krydderbot"
date: "2025-10-27"
description: "Historien bak Discord-boten som tok helt av"
published: true
---

# Krydderbot - En Discord-bot-historie

Her er historien om hvordan jeg lagde Krydderbot...

[resten av innholdet]
```

### Frontmatter forklart:

```yaml
---
title: "Vises som overskrift" # Påkrevd
date: "2025-10-26" # Påkrevd, format YYYY-MM-DD
description: "Kort beskrivelse" # Vises i listen
published: true # false = skjuler posten
---
```

---

## Bonustips! 🎁

### Bilder i bloggposter

Legg bilder i `static/` og referer slik:

```markdown
![Alt tekst](/mitt-bilde.jpg)
```

### Lage gjenbrukbare komponenter

Opprett: `src/lib/components/Warning.svelte`

```svelte
<div class="warning">
  <slot />
</div>

<style>
  .warning {
    background: #ff6b6b;
    padding: 1rem;
    border-radius: 5px;
  }
</style>
```

Bruk i bloggpost:

```markdown
<script>
  import Warning from '$lib/components/Warning.svelte';
</script>

<Warning>
  Viktig melding her!
</Warning>
```

### Syntax highlighting for kode

MDsveX støtter automatisk syntax highlighting!

```markdown
\`\`\`javascript
const hello = "world";
console.log(hello);
\`\`\`
```

---

## Feilsøking 🔧

### "npm" kommando ikke funnet

- ✅ Installer Node.js
- ✅ Restart VS Code/PowerShell etter installasjon

### Siden viser ikke riktig etter deploy

- ✅ Sjekk at `.nojekyll` finnes i `static/`
- ✅ Vent 2-3 minutter etter push (GitHub trenger tid)
- ✅ Sjekk Actions-tab på GitHub for errors

### Bilder vises ikke

- ✅ Flytt til `static/` mappen
- ✅ Bruk `/bildnavn.jpg` (starter med `/`)

### Bloggpost vises ikke

- ✅ Sjekk at `published: true` i frontmatter
- ✅ Sjekk at filen er i `src/posts/`
- ✅ Sjekk at filnavnet slutter med `.md`

---

## Hjelp og ressurser

- **SvelteKit Docs:** https://kit.svelte.dev/
- **MDsveX Docs:** https://mdsvex.pngwn.io/
- **Svelte Tutorial:** https://learn.svelte.dev/

---

## Du er klar! 🎉

Nå har du:

- ✅ En moderne, rask nettside
- ✅ Blogg med Markdown-støtte
- ✅ Mulighet for interaktive komponenter
- ✅ Automatisk deploy til GitHub Pages
- ✅ Alt gratis!

**Happy blogging!** 📝✨
