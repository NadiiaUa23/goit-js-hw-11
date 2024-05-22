//У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
// Функция для очистки галереи
export function clearGallery() {
    // Находим элемент галереи на странице
    const galleryContainer = document.querySelector('.gallery');
    // Очищаем содержимое галереи
    galleryContainer.innerHTML = '';
}

// Функция для отображения изображений в галерее
export function renderImages(images) {
    // находим елемент 
    const galleryContainer = document.querySelector('.gallery');

    // Проходим по каждому изображению из массива изображений
    images.forEach(image => {

   // Створюємо посилання для великого зображення з використанням URL largeImageURL
   const imageLink = document.createElement('a');
   imageLink.href = image.largeImageURL;
   imageLink.setAttribute('data-lightbox', 'gallery'); // Додаємо атрибут data-lightbox для SimpleLightbox

//на будущее :Цей код створює посилання для кожного зображення з великою версією зображення та додає його до галереї. Кожне зображення обгортається посиланням, і при кліку на нього відображається велика версія зображення за допомогою бібліотеки SimpleLightbox.


        const cardHtml = `
      
        <div class="card">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="card-details">
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
        </div>
   </div>
`;
imageLink.innerHTML = cardHtml;
galleryContainer.appendChild(imageLink);
    });

   
};
