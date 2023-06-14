// window.onload để đảm bảo rằng việc đăng ký Service Worker chỉ diễn ra
// sau khi tất cả các tài nguyên trong trang web đã được tải hoàn thành.
window.onload = () => {
  'use strict';
  // Kiểm tra xem trình duyệt có hỗ trợ Service Worker hay không
  if ('serviceWorker' in navigator) {
    // Đăng ký Service Worker với tệp tin sw.js
    navigator.serviceWorker
             .register('./sw.js')
               .then(function() { console.log('Service Worker Registered'); })
               .catch(function(err) { console.log('Service Worker Failed to Register', err); });
  }
}
// // Kiểm tra xem trình duyệt có hỗ trợ Prompt API hay không
// if ('beforeinstallprompt' in window) {
//   // Lắng nghe sự kiện beforeinstallprompt
//   window.addEventListener('beforeinstallprompt', (event) => {
//     // Ngăn chặn hiển thị cửa sổ cài đặt mặc định
//     event.preventDefault();
//     // Lưu event để sử dụng sau này
//     deferredPrompt = event;
//     // Hiển thị thông báo hoặc lời nhắc cài đặt ứng dụng tùy chỉnh
//     // Ví dụ: hiển thị một nút "Cài đặt" để khuyến khích người dùng cài đặt ứng dụng
//     showInstallPrompt();
//   });
// }
//
// // Hàm hiển thị thông báo hoặc lời nhắc cài đặt ứng dụng
// function showInstallPrompt() {
//   // Hiển thị thông báo hoặc lời nhắc cài đặt ứng dụng tùy chỉnh
//   // Ví dụ: hiển thị một modal hoặc một snackbar chứa nút "Cài đặt"
//   // Khi người dùng nhấp vào nút "Cài đặt", gọi hàm promptInstall()
// }
//
// // Hàm gọi prompt để cài đặt ứng dụng
// function promptInstall() {
//   // Gọi prompt() trên deferredPrompt
//   deferredPrompt.prompt();
//   // Xử lý kết quả prompt
//   deferredPrompt.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('Người dùng đã cài đặt ứng dụng');
//     } else {
//       console.log('Người dùng đã từ chối cài đặt ứng dụng');
//     }
//     // Xóa deferredPrompt sau khi đã sử dụng
//     deferredPrompt = null;
//   });
// }