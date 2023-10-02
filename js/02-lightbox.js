import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function createGalleryItems(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
        `;
    })
    .join("");
}
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
