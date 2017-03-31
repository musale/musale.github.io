var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  './',
  '/(index)',
  '/styles/main.css',
  '/images/3246305.jpg',
  '/utils/loadsw.js',
  '/index.bundle.js',
  '/manifest.bundle.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('Installing SW!');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
