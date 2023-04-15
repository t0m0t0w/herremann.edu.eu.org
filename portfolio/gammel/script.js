function expandImage(img) {
    var expandedImage = document.createElement("div");
    expandedImage.classList.add("expanded-image");
    var image = new Image();
    image.src = img.src;
    expandedImage.appendChild(image);
    document.body.appendChild(expandedImage);
    expandedImage.addEventListener("click", function() {
      expandedImage.remove();
    });
  }
  