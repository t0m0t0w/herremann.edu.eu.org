<svelte:head>
  <link rel="icon" href="/favicon.png">
  <title>Mine fine bilder</title>
  <script src="/js/portfolio-script.js"></script>
  <!-- Alltid load CSS'en din etter javascript'en. -->
  <link rel="stylesheet" href="/styles/portfolio.css">
</svelte:head>
<script>
  import Gallery from 'svelte-gallery';

  const images = [
    { src: '/img/portfolio/image-previews/v1wb362q.jpg', alt: 'Høyspenning livsfare skilt', width: 600, height: 400 },
    { src: '/img/portfolio/image-previews/lumwy9w.jpg', alt: 'Image 4', width: 400},
    { src: '/img/portfolio/image-previews/y69h9a2d.jpg', alt: 'Image 5', width: 8000},
    { src: '/img/portfolio/image-previews/d8g4zbf2.jpg', alt: 'Image 6', width: 300},
    { src: '/img/portfolio/image-previews/s0nb4jkf.jpg', alt: 'Image 7', width: 600},
    { src: '/img/portfolio/image-previews/0xflutoo.jpg', alt: 'Image 8', width: 400},
    { src: '/img/portfolio/image-previews/c8z9ste.jpg', alt: 'Image 9', width: 800},
    { src: '/img/portfolio/image-previews/u3g4k04.jpg', alt: 'Image 7', width: 300}
  ];
</script>
  
<h1>hællæ</h1>
<Gallery {images} />
  
