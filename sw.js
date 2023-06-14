// Đây là tên của cache mà Service Worker sử dụng để lưu trữ các tệp tin được cache.
let cacheName = 'hello-pwa';
let filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  // để bỏ qua các quy trình cài đặt khác và kích hoạt ngay lập tức.
  self.skipWaiting().then(r => console.log('skipWaiting'));
});


// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request)
          .then(function(response) {
            if (response) {
              return response;
            } else {
              return fetch(event.request)
                  .then(function(res) {
                    return caches.open(cacheName)
                        .then(function(cache) {
                          cache.put(event.request.url, res.clone());
                          return res;
                        });
                  })
                  .catch(function(err) {
                    console.log('Lỗi khi tải tệp từ mạng:', err);
                  });
            }
          })
  );
});