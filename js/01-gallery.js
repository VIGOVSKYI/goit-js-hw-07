import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

const creatomarcupCard = createCard(galleryItems);

galleryRef.insertAdjacentHTML("beforeend",creatomarcupCard);



function createCard (galleryItems) {
    const marcupCard = galleryItems.map( ({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        
    }).join("");
    
    return marcupCard;

    console.log(marcupCard);
}
    
console.log(createCard(galleryItems));


galleryRef.addEventListener("click", handlerCkick);

function handlerCkick(event) {
  event.preventDefault();
  
    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    console.log(event.target)
    
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

  instance.show();
  
  galleryRef.addEventListener("keydown", (event) => {
  
    if (event.code === "Escape")
      instance.close()
});

}

