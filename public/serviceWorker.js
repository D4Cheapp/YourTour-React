const urlsToCache = ['index.html','favicon.ico', 'main.js']

self.addEventListener('install', async () => {
    const cache =  await caches.open('YourTour')
    await cache.addAll(urlsToCache).catch(err => console.error(err))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}