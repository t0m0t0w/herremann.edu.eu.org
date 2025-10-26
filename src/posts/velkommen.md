---
title: "Velkommen til bloggen min!"
date: "2025-10-26"
description: "Dette er min første bloggpost med Svelte og MDsveX. Her viser jeg hvordan du kan bruke både Markdown og custom HTML/Svelte-komponenter!"
published: true
---

# Velkommen til bloggen min! 🎉

Dette er min første bloggpost bygget med **SvelteKit** og **MDsveX**. Det kule med denne løsningen er at jeg kan skrive vanlig Markdown, men også legge til interaktive komponenter!

## Vanlig Markdown funker perfekt

Du kan bruke all vanlig Markdown-syntaks:

- **Fet skrift**
- *Kursiv*
- `inline kode`
- Og mye mer!

### Kodeblokker

```javascript
function hei() {
  console.log("Hei fra bloggen min!");
}
```

## Custom HTML og Svelte-komponenter!

Her kommer det magiske - jeg kan legge til **interaktive komponenter** rett i Markdown-filen:

<script>
  let count = 0;
  let name = '';
</script>

<div class="interactive-demo">
  <h3>Interaktiv teller:</h3>
  <button on:click={() => count++}>
    Du har klikket {count} {count === 1 ? 'gang' : 'ganger'}! 🎯
  </button>
  
  <h3 style="margin-top: 2rem;">Hils på deg selv:</h3>
  <input 
    bind:value={name} 
    placeholder="Skriv navnet ditt her"
  />
  {#if name}
    <p class="greeting">Hei {name}! 👋</p>
  {/if}
</div>

<style>
  .interactive-demo {
    background-color: var(--color-bg-accent);
    padding: 2rem;
    border-radius: 8px;
    margin: 2rem 0;
    border-left: 4px solid var(--color-link);
  }
  
  .interactive-demo button {
    background-color: var(--color-btn-hover);
    color: var(--color-btn-text);
    border: none;
    padding: 0.75rem 1.5rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .interactive-demo button:hover {
    background-color: var(--color-link);
  }
  
  .interactive-demo input {
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.5rem;
    background-color: var(--color-bg);
    border: 2px solid var(--color-border);
    color: var(--color-text);
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 1rem;
    border-radius: 4px;
    transition: border-color 0.2s;
  }
  
  .interactive-demo input:focus {
    outline: none;
    border-color: var(--color-link);
  }
  
  .greeting {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-link);
  }
</style>

## Konklusjon

Dette er bare begynnelsen! Med MDsveX kan jeg:

1. Skrive bloggposter i Markdown
2. Legge til interaktive komponenter
3. Bruke custom CSS
4. Alt hostet gratis på GitHub Pages!

**Magi!** ✨
