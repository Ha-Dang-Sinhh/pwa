window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
  navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // Camera access granted, stream contains the camera feed
        console.log(stream);
      })
      .catch(function(error) {
        // Camera access denied or an error occurred
      });
}
function test(){
  alert("hello");
}
