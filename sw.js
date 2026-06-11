const V='pool-v3';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(V).then(cache=>cache.put(e.request,c));return r}).catch(()=>caches.match(e.request)))})
