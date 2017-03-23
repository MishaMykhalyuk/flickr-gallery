import loadAsync from './utils';

const rootElement = document.querySelector('#app');

loadAsync('https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=9c0b191a1d8415714a70a2a3db4abdeb&extras=url_m&text=nature')
    .then((data) => {
      console.log(JSON.parse(data));
      JSON.parse(data).photos.photo.forEach((photo) => {
        const image = document.createElement('img');
        image.setAttribute('src', photo.url_m);

        rootElement.appendChild(image);

        console.log(photo.url_m);
      });
    });
