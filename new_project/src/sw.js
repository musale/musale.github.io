const cacheVersion = '1.0.0';
const staticCacheName = `musale-v${cacheVersion}`;
const filesToCache = [
  './',
  '/(index)',
  '/styles/main.css',
  '/styles/bootstrap.min.css',
  '/images/3246305.jpg',
  '/images/001.svg',
  '/images/002.png',
  '/images/003.png',
  '/images/004.jpg',
  '/images/005.jpg',
  '/index.bundle.js',
  '/manifest.bundle.js',
  '/scripts/loadsw.js',
  '/scripts/bootstrap.min.js',
  '/scripts/jquery-3.1.1.slim.min.js',
  '/scripts/tether.min.js',
  'https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg',
  'https://fonts.gstatic.com/s/raleway/v11/yQiAaD56cjx1AooMTSghGfY6323mHUZFJMgTvxaG2iE.woff2',
  'https://fonts.gstatic.com/s/raleway/v11/0dTEPzkLWceF7z0koJaX1A.woff2',
  'https://placehold.it/355x250',
];

this.addEventListener('install', function(event) {
  event.waitUntil(caches.open(staticCacheName).then(function(cache) {
    return cache.addAll(filesToCache);
  }));
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('musale-v') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
