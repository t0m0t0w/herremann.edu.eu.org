<script lang="ts">
	export let data;
</script>

<div class="header">
	<div class="header-content">
		<div class="scrolling-header">
			<span>hei hei jeg heter hermann!</span>
		</div>
		<h1 class="headertekst">og er nåværende nestleder i <a class="headerhyper" href="https://blalange.org">blålange</a>,</h1>
		<h1 class="headertekst2">hjernen bak <a class="headerhyper" href="/krydderbot">krydderbot</a></h1>
		<h1 class="headertekst2">og utrolig god på <a class="headerhyper" href="https://www.youtube.com/watch?v=q4LdwFue-lQ">skuespill</a>.</h1>
	</div>
	<img class="header-image" src="/hermann tenker en tanke.jpg" alt="blålange logo på en blå bakgrunn">
</div>

<div class="content-wrapper">
	<h1 class="breakup">prosjekter ---------------------------</h1>

	<div class="projects-container">
		<div class="post">
			<img class="postbilde" src="/blalangetypeface.png" alt="Blålange logoen og teksten Blålange Festivalen">
			<p class="posttekst">lorem ipsum oisann dette var et spennende tema jeg må skrive mye om assa. dette kunne ha vært lorem ipsum men jeg er for lat til å generere noe tekst. men noen ganger må man bare shak shake shake som hun taylor swift sier</p>
			<a class="postknapp" href="https://blalange.org">
				<div class="postknapptekst">les mer</div>
			</a>
		</div>

		<div class="post">
			<img class="postbilde" src="/krydderpost.png" alt="en oregano flaske med pogchamp fjeset på ved siden av teksten krydderbot i comic sans">
			<p class="posttekst">lorem ipsum oisann dette var et spennende tema jeg må skrive mye om assa. dette kunne ha vært lorem ipsum men jeg er for lat til å generere noe tekst. men noen ganger må man bare shak shake shake som hun taylor swift sier</p>
			<a class="postknapp" href="https://blalange.org">
				<div class="postknapptekst">les mer</div>
			</a>
		</div>
	</div>

	<h1 class="breakup">blogg ---------------------------</h1>

	<div class="full-projects-container">
		<div class="blog-box">
			<p class="posttekst">Se min eksklusive, kule blogg med masse meg!! <span class="bold">Helt kostnadsfritt!</span></p>
			<a class="postknapp" href="/blogg">
				<div class="postknapptekst">til bloggen →</div>
			</a>
		</div>
	</div>
</div>

<style>
	/* ===================================
	   HJEMMESIDE-SPESIFIKKE STILER
	   =================================== */

	/* Content wrapper som dekker headeren */
	.content-wrapper {
		position: relative;
		z-index: 20;
		background-color: var(--color-bg);
	}

	/* Header med bilde */
	.header-content {
		display: flex;
		flex-direction: column;
		width: 50%;
	}

	.header-image {
		max-width: 50%;
		height: auto;
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
		object-fit: cover;
	}

	/* Scrollende header-tekst */
	.scrolling-header {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		box-sizing: border-box;
		position: relative;
		background-color: var(--color-shadow);
	}

	.scrolling-header span {
		display: inline-block;
		padding-left: 100%;
		animation: scroll 10s linear infinite;
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-size: 10vw;
		color: var(--color-text);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	/* Header-tekster */
	.headertekst2 {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 500;
		font-size: 4vw;
		color: var(--color-text);
		margin-left: 4vw;
		margin-top: -1vh;
	}

	.headerhyper {
		color: var(--color-link);
		text-decoration: none;
	}

	.headerhyper:hover {
		color: var(--color-link-hover);
	}

	/* Seksjons-skillelinjer */
	.breakup {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-size: 5vw;
		color: var(--color-text);
		margin-left: 2.2vw;
		background-color: var(--color-bg);
		margin-top: 0vh;
		padding-top: 3vh;
	}

	/* Prosjekt-container */
	.projects-container {
		width: 95%;
		margin: 3vh auto 0;
		box-sizing: border-box;
	}

	/* Full width prosjekt-container */
	.full-projects-container {
		width: 100%;
		margin: 3vh auto 0;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
	}

	.blog-box {
	  	width: 95%;
	  	margin-top: 0;
		margin-left: auto;
		margin-right: auto;
	  	background-color: var(--color-bg-accent);
		box-sizing: border-box;
	}
	
	/* Post-bilder */
	.postbilde {
		width: 100%;
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
	}

	/* ===================================
	   RESPONSIVE STILER - DESKTOP
	   =================================== */
	@media (min-width: 1024px) {
		.headertekst2 {
			font-size: 4vw;
			margin-left: 4vw;
			margin-top: -1vh;
		}

		.breakup {
			font-size: 5vw;
			margin-left: 2.2vw;
		}

		/* Side-ved-side layout for prosjekter */
		.projects-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}

		.projects-container .post {
			width: 100%;
			margin: 0;
		}

		/* Større tekst på desktop */
		.projects-container .posttekst {
			font-size: 2.5vw;
		}

		.projects-container .postknapptekst {
			font-size: 2.5vw;
		}
	}

	/* ===================================
	   RESPONSIVE STILER - TABLET
	   =================================== */
	@media (min-width: 768px) and (max-width: 1023px) {
		.header {
			align-items: center;
		}

		.header-content {
			width: 50%;
		}

		.header-image {
			max-width: 50%;
			aspect-ratio: 1;
			object-fit: cover;
		}

		.headertekst2 {
			margin-left: 2rem;
			font-size: 3rem;
			margin-top: -1vh;
		}

		.breakup {
			font-size: 3.5rem;
			margin-left: 1.5rem;
		}
	}

	@media (min-width: 769px) and (max-width: 1023px) {
		.projects-container .post {
			width: 95%;
			margin: 3vh auto 0;
		}
	}

	/* ===================================
	   RESPONSIVE STILER - MOBIL
	   =================================== */
	@media (max-width: 767px) {
		.header {
			flex-direction: column;
			padding: 0;
			margin: 0;
		}

		.header-content {
			width: 100%;
			order: 1;
			padding: 0;
			margin: 0;
		}

		.header-image {
			max-width: 100%;
			order: 2;
			margin-top: 2rem;
			margin-left: 0;
			margin-right: 0;
		}

		.headertekst2 {
			text-align: center;
			margin-left: 1rem;
			margin-right: 1rem;
			font-size: 6vw;
			padding: 0;
			margin-top: -1vh;
		}

		.breakup {
			font-size: 7vw;
			margin-left: 1rem;
			margin-right: 1rem;
			padding: 0;
		}
	}
</style>
