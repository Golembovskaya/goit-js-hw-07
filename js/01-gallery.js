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


function bigImg(event) {
    event.preventDefault();
    if (event.target === event.currenTarget) {
        return;
    }
    const originalImg = event.target.dataset.source;
   const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">`)

    instance.show();
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close();
        }
    })
};

galleryDiv.addEventListener('click', bigImg);
