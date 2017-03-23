export default function loadAsync(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', url + ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime(), true); // no-cache
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    request.onerror = function () {
      reject(Error('Network Error'));
    };
    request.send();
  });
}
