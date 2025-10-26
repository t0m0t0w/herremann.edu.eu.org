---
title: "Hvordan lage egne Svelte-komponenter i Markdown"
date: "2025-10-25"
description: "En guide til å lage gjenbrukbare komponenter som du kan bruke i bloggpostene dine."
published: true
---

# Hvordan lage egne Svelte-komponenter i Markdown

En av de kuleste tingene med MDsveX er at du kan lage **gjenbrukbare komponenter** og bruke dem i alle bloggpostene dine!

## Eksempel: Warning box

Du kan lage en komponent i `src/lib/components/` og importere den:

<script>
  // Du kan importere komponenter du har laget
  // import Warning from '$lib/components/Warning.svelte';
  
  // Eller bare lage inline komponenter som dette:
  let expanded = false;
</script>

<div class="warning-box">
  <strong>⚠️ Viktig!</strong>
  <p>Dette er et eksempel på hvordan du kan style custom elementer i bloggposten din.</p>
</div>

## Ekspanderende innhold

Klikk for å se mer:

<button on:click={() => expanded = !expanded} class="expand-btn">
  {expanded ? '▼' : '▶'} Klikk for å {expanded ? 'skjule' : 'vise'} mer
</button>

{#if expanded}
  <div class="expanded-content">
    <h3>Her er mer innhold!</h3>
    <p>Dette var gjemt til du klikket på knappen. Du kan bruke dette til å lage interaktive tutorials, FAQ-seksjoner, eller hva som helst!</p>
    <ul>
      <li>Point nummer 1</li>
      <li>Point nummer 2</li>
      <li>Point nummer 3</li>
    </ul>
  </div>
{/if}

## Styling

Du kan legge til custom CSS direkte i Markdown-filen:

<style>
  .warning-box {
    background-color: rgba(255, 193, 7, 0.1);
    border-left: 4px solid #ffc107;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 4px;
  }
  
  .warning-box strong {
    display: block;
    margin-bottom: 0.5rem;
    color: #ffc107;
  }
  
  .warning-box p {
    margin: 0;
  }
  
  .expand-btn {
    background-color: var(--color-bg-accent);
    color: var(--color-text);
    border: 2px solid var(--color-border);
    padding: 0.75rem 1.5rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    margin: 1rem 0;
    transition: all 0.2s;
  }
  
  .expand-btn:hover {
    border-color: var(--color-link);
    color: var(--color-link);
  }
  
  .expanded-content {
    background-color: var(--color-bg-accent);
    padding: 1.5rem;
    border-radius: 4px;
    margin: 1rem 0;
    animation: slideDown 0.3s ease-out;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

## Konklusjon

Med MDsveX har du full kontroll over både innhold og interaktivitet! 🚀
