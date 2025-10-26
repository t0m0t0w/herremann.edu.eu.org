<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - hermann roos</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="blog-post">
	<div class="blog-header">
		<a href="/blogg" class="back-link">← tilbake til bloggen</a>
		<h1 class="blog-title">{data.meta.title}</h1>
		<p class="blog-date">{new Date(data.meta.date).toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
	</div>
	
	<div class="blog-content">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}
	
	.blog-header {
		margin-bottom: 3rem;
	}
	
	.back-link {
		display: inline-block;
		margin-bottom: 2rem;
		color: var(--color-link);
		text-decoration: none;
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 500;
	}
	
	.back-link:hover {
		color: var(--color-link-hover);
	}
	
	.blog-title {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-size: 3rem;
		color: var(--color-text);
		margin: 0;
		line-height: 1.2;
	}
	
	.blog-date {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 400;
		font-size: 1.2rem;
		color: var(--color-text-accent);
		margin-top: 0.5rem;
	}
	
	.blog-content {
		font-family: "IBM Plex Sans", sans-serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text);
	}
	
	:global(.blog-content h1) {
		font-size: 2.5rem;
		margin-top: 3rem;
		margin-bottom: 1rem;
		color: var(--color-text);
	}
	
	:global(.blog-content h2) {
		font-size: 2rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		color: var(--color-text);
	}
	
	:global(.blog-content h3) {
		font-size: 1.5rem;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		color: var(--color-text);
	}
	
	:global(.blog-content p) {
		margin-bottom: 1.5rem;
	}
	
	:global(.blog-content a) {
		color: var(--color-link);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-bottom-color 0.2s;
	}
	
	:global(.blog-content a:hover) {
		color: var(--color-link-hover);
		border-bottom-color: var(--color-link-hover);
	}
	
	:global(.blog-content code) {
		background-color: var(--color-bg-accent);
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-size: 0.9em;
	}
	
	:global(.blog-content pre) {
		background-color: var(--color-bg-accent);
		padding: 1rem;
		border-radius: 5px;
		overflow-x: auto;
		margin: 1.5rem 0;
	}
	
	:global(.blog-content pre code) {
		background-color: transparent;
		padding: 0;
	}
	
	:global(.blog-content blockquote) {
		border-left: 4px solid var(--color-link);
		padding-left: 1.5rem;
		margin-left: 0;
		font-style: italic;
		color: var(--color-text-accent);
	}
	
	:global(.blog-content img) {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
		margin: 2rem 0;
	}
	
	:global(.blog-content ul, .blog-content ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}
	
	:global(.blog-content li) {
		margin-bottom: 0.5rem;
	}
	
	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}
		
		.blog-title {
			font-size: 2rem;
		}
		
		.blog-content {
			font-size: 1rem;
		}
		
		:global(.blog-content h1) {
			font-size: 1.8rem;
		}
		
		:global(.blog-content h2) {
			font-size: 1.5rem;
		}
		
		:global(.blog-content h3) {
			font-size: 1.25rem;
		}
	}
</style>
