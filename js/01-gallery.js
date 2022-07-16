import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryDiv = document.querySelector('.gallery');
//шаблон-sample
const gallerySample = galleryItems.map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
})
    .join('');

galleryDiv.innerHTML = gallerySample;


galleryDiv.addEventListener('click', bigImg);
const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
  onShow: (instance) => {
    window.addEventListener("keydown", onEscClick);
  },
  onClose: (instance) => {
    window.removeEventListener("keydown", onEscClick);
  },
});
function bigImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}
function onEscClick(event) {
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}


  
  
   