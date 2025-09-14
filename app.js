const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const images = [
  {
    src: "./images/biblioteca.jpg",
    alt: "A library full of various books",
  },
  { src: "./images/books.jpg", alt: "Collection of books" },
];

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    console.log(`current image is`, image);
    imageElement.src = image.src;

    imageElement.addEventListener("click", function () {
      console.log(image);
      createBigImage(image);
    });
    thumbnails.appendChild(imageElement);
  });
}

createThumbnails();

function createBigImage(imgDetails) {
  displayContainer.innerHTML = "";
  const bigImage = document.createElement("img");
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;
  displayContainer.appendChild(big.Image);
}
