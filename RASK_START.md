# 🚀 Rask Start

## 1️⃣ Installer Node.js

Last ned fra: https://nodejs.org/ (velg LTS)

## 2️⃣ Installer pakker

```powershell
npm install
```

## 3️⃣ Start utviklingsserver

```powershell
npm run dev
```

Åpne: http://localhost:5173

## 4️⃣ Legg til bloggpost

Opprett fil: `src/posts/min-post.md`

```markdown
---
title: "Min post"
date: "2025-10-26"
description: "Beskrivelse"
published: true
---

# Min første post!

Vanlig Markdown funker fint!

## Eller legg til interaktivitet:

<script>
  let count = 0;
</script>

<button on:click={() => count++}>
Klikk: {count}
</button>
```

## 5️⃣ Deploy til GitHub

```powershell
git add .
git commit -m "Oppdatering"
git push
```

GitHub Actions deployer automatisk! 🎉

---

Les `STEG_FOR_STEG.md` for fullstendig guide!
