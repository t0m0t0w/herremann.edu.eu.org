<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	export let data;
</script>

<svelte:head>
	<title>Blogg - hermann roos</title>
</svelte:head>

<div class="header">
	<div class="back-knapp">
		<a href="/..">
			<ArrowLeft size="4vw" color="var(--color-btn-text)" style="cursor: pointer; margin: 3vw;" />
		</a>
	</div>
	<h1 class="headertekst">hermann's kule blogg om kule ting</h1>
</div>

<div class="blog-list">
	{#each data.posts as post}
		<div class="blog-post">
			<a href="/blogg/{post.slug}" style="text-decoration: none; color: inherit;">
				<h2 class="blog-post-title">{post.title}</h2>
				<p class="blog-post-date">{new Date(post.date).toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
				<p class="blog-post-tekst">{post.description}</p>
				<div class="blog-post-knapp" style="display: inline-block;">
					<div class="blog-post-knapptekst">les mer →</div>
				</div>
			</a>
		</div>
	{/each}
</div>

<style>
	/* ===================================
	   BLOGG-SIDE SPESIFIKKE STILER
	   =================================== */

	.header {
		display: flex;
		align-items: center;
		gap: 2vw;
		margin-bottom: 3vh;
	}

	.back-knapp {
		height: auto;
		aspect-ratio: 1 / 1;
		width: auto;
		background-color: var(--color-btn-hover);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
	}

	.headertekst {
		flex: 1;
		margin: 0;
	}

	.blog-list {
		width: 95%;
		margin: 3vh auto 0;
	}
	
	.blog-post {
		width: 100%;
		margin: 3vh auto 0;
		background-color: var(--color-bg-accent);
		box-sizing: border-box;
	}
	
	.blog-post:first-child {
		margin-top: 0;
	}
	
	.blog-post-title {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-size: 5vw;
		color: var(--color-text);
		margin: 5%;
		margin-bottom: 0;
		padding-top: 5%;
	}
	
	.blog-post-date {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 400;
		font-size: 3vw;
		color: var(--color-text-accent);
		margin: 5%;
		margin-top: 0.1%;
		margin-bottom: 2%;
	}
	
	.blog-post-tekst {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 300;
		font-size: 4vw;
		color: var(--color-text);
		margin: 5%;
		margin-top: 1%;
	}
	
	.blog-post-knapp {
		display: inline-block;
		background-color: var(--color-btn-hover);
		border: none;
		padding: 1vw 2vw;
		margin: 5%;
		margin-top: 0%;
		cursor: pointer;
		transition: background-color 0.3s ease;
		text-decoration: none;
	}
	
	.blog-post-knapp:hover {
		background-color: var(--color-link);
	}
	
	.blog-post-knapptekst {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-size: 4vw;
		color: var(--color-btn-text);
		text-decoration: none;
	}
	
	.blog-post-knapptekst:hover {
		color: var(--color-btn-text);
	}
	
	/* ===================================
	   RESPONSIVE STILER - DESKTOP
	   =================================== */
	@media (min-width: 1024px) {
		.blog-post-title {
			font-size: 2.5rem;
		}
		
		.blog-post-date {
			font-size: 1.2rem;
		}
		
		.blog-post-tekst {
			font-size: 1.5rem;
		}
		
		.blog-post-knapptekst {
			font-size: 1.5rem;
		}
	}
</style>
