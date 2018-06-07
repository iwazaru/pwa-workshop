self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    if (event.request.url.endsWith('.jpeg')) {
        event.respondWith(
            fetch('/assets/lolcat.jpg').then(response => {
                return response;
            })
        );
    }
});
