//У файлі pixabay-api.js зберігай функції для HTTP-запитів
const apiKey = '43983774-8711aa48aacb0ae1050be5e44';


fetch("<https://pixabay.com/api/?key=${apiKey}&q=q=${searchQuery}>")
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
