const CACHE = 'gymtrack-v18';
const ASSETS = ['/gym.html', '/manifest.json', '/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list => {
    const open = list.find(c => c.url.includes('gym.html') && 'focus' in c);
    return open ? open.focus() : clients.openWindow('/gym.html');
  }));
});

self.addEventListener('fetch', e => {
  if(e.request.mode === 'navigate' || e.request.url.includes('gym.html')){
    // Network first for HTML — always gets latest version, falls back to cache offline
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
