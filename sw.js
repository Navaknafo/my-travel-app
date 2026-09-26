const CACHE_NAME = 'travel-companion-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html'
];

// התקנת המטמון ושמירת הקבצים
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// שימוש בקבצים השמורים כשאין אינטרנט
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});