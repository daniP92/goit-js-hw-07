import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createGalleryItems(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                  />
              </a>
          </li>`;
    })
    .join("");
}

const galleryMarkup = createGalleryItems(galleryItems);

const galleryHandler = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalUrl}">`);
  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }

  window.addEventListener("keydown", onEscKeyPress);
};

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", galleryHandler);
