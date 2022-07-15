import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryDiv = document.querySelector('.gallery');
//шаблон-sample
const gallerySample = galleryItems.map((item) => {
    return `<a class="gallery__item" 
    href="${item.original}">
  <img class="gallery__image" 
  src="${item.preview}" 
  alt="${item.description}" />
</a>`
})
    .join('');

galleryDiv.innerHTML = gallerySample;
const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });