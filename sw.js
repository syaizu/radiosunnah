 self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('radios').then(function(cache) {
     return cache.addAll([
       'https://webappradiosunnah.blogspot.com/2018/07/webapp.html'
     ]);   }) );});

 self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })  );});
