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
  {
    src: "./images/scoici.jpg",
    alt: "Beautiful shells",
  },
  {
    src: "./images/phone.jpg",
    alt: "Phone shooting",
  },

  {
    src: "./images/map.jpg",
    alt: "Cameras on world map",
  },

  {
    src: "./images/ladybug.jpg",
    alt: "A ladybug on a leaf",
  },
  {
    src: "./images/egipt.jpg",
    alt: "Representantion of Ancient Egypt",
  },
  {
    src: "./images/funnyfish.jpg",
    alt: "A funny ocean fish",
  },
  { src: "./images/flamingo.jpg", alt: "A oasis with flamingos" },
  {
    src: "./images/dance2.jpg",
    alt: "Couple dancing",
  },
  {
    src: "./images/arrows.jpg",
    alt: "Colorful arrows",
  },
  {
    src: "./images/archfall.jpg",
    alt: "Arrow and bow in fall",
  },
  {
    src: "./images/archery.jpg",
    alt: "Girl practicing",
  },
];

let currentIndex = 0;

function showImage(index) {
  if (index < 0 || index >= images.length) return;

  const imageData = images[index];
  displayContainer.innerHTML = "";

  const img = document.createElement("img");
  img.src = imageData.src;
  img.alt = imageData.alt;

  displayContainer.appendChild(img);

  [...thumbnails.children].forEach((thumb, i) => {
    thumb.style.borderColor = i === index ? "#f199" : "transparent";
  });
}

function createThumbnails() {
  images.forEach((image, index) => {
    const thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.tabIndex = 0;

    thumb.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
    });

    thumbnails.appendChild(thumb);
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevButton.click();
  } else if (e.key === "ArrowRight") {
    nextButton.click();
  }
});

createThumbnails();
showImage(currentIndex);
