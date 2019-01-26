 self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('radios').then(function(cache) {
     return cache.addAll([
       '/radiosunnah/style.css',
       '/radiosunnah/index.html',
       '/radiosunnah/index.js',
       'https://kesehatanhaji.com/jsku/manifest.json'
     ]);   }) );});

 self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })  );});
