const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('click', event => {
    const img = event.currentTarget.querySelector('img');
    const fullsizeImgUrl = img.dataset.fullsize;

    const enlargedImg = document.createElement('div');
    enlargedImg.classList.add('enlarged');

    const fullsizeImg = document.createElement('img');
    fullsizeImg.src = fullsizeImgUrl;
    fullsizeImg.alt = img.alt;

    enlargedImg.appendChild(fullsizeImg);
    document.body.appendChild(enlargedImg);

    enlargedImg.addEventListener('click', event => {
      event.currentTarget.remove();
    });
  });
});
