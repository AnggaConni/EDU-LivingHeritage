const CACHE_NAME = 'living-heritage-cache-v7';

// Core files to cache on first install
const URLS_TO_CACHE = [
  './',
  './manifest.json',
  // Core application entry point
  './index.html' 
];

// 1. Install: cache core application files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting(); // Langsung aktif tanpa menunggu browser ditutup
});

// 2. Activate: remove stale cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch: cache-first with network fallback
// External CDN assets are cached automatically when first requested
self.addEventListener('fetch', (event) => {
  // Ignore extension or non-GET requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Serve cached response immediately when available
      if (cachedResponse) {
        // Refresh the cached version in the background (stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }).catch(() => {}); // Ignore errors while offline
        
        return cachedResponse;
      }

      // Fetch from the network and cache the response
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
