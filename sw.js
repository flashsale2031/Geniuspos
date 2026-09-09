const CACHE='geniuspos-v2';
const ASSETS=['./','./manifest.webmanifest','./assets/styles.css','./assets/app.js','./assets/auth.js','./pages/dashboard.html','./pages/pos.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./pages/dashboard.html'))))});
