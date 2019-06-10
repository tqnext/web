try{
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
    console.log(`Yay! Workbox is loaded 🎉`);
}catch(err){
    console.error(err);
    console.log(`Boo! Workbox didn't load 😬`);
}
  
workbox.precaching.precacheAndRoute([]);
