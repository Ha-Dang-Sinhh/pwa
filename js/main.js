// window.onload để đảm bảo rằng việc đăng ký Service Worker chỉ diễn ra
// sau khi tất cả các tài nguyên trong trang web đã được tải hoàn thành.
// window.onload = () => {
//   'use strict';
//   // Kiểm tra xem trình duyệt có hỗ trợ Service Worker hay không
//   if ('serviceWorker' in navigator) {
//     // Đăng ký Service Worker với tệp tin sw.js
//     navigator.serviceWorker
//              .register('./sw.js')
//                .then(function() { console.log('Service Worker Registered'); })
//                .catch(function(err) { console.log('Service Worker Failed to Register', err); });
//   }
// }
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/path/to/sw.js')
        .then(registration => {
          console.log('Service Worker đã đăng ký thành công:', registration);
        })
        .catch(error => {
          console.log('Đăng ký Service Worker thất bại:', error);
        });
  });
}

// Xử lý sự kiện khi ứng dụng được khởi động
window.addEventListener('DOMContentLoaded', () => {
  console.log('Ứng dụng đã được khởi động!')
  // Gán các sự kiện và chức năng của ứng dụng PWA ở đây
});