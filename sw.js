const CACHE_NAME = 'neutron-v1';
const urlsToCache = [
  '/(index)',
  '/styles/main.css',
  '/styles/bootstrap.min.css',
  '/images/3246305.jpg',
  '/index.19fb4943df0cf427704a.bundle.js',
  '/manifest.1487ea393e348f6eea30.bundle.js',
  '/scripts/loadsw.js',
  '/scripts/bootstrap.min.js',
  '/scripts/jquery-3.1.1.slim.min.js',
  '/scripts/tether.min.js',
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
  const cacheWhitelist = [CACHE_NAME];

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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // We want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
