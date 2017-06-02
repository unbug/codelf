// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('20170602091013').then(function(cache) {
      // And add resources to it
      return cache.addAll(["./",
"resources/fonts/Dressedless_Three.svg",
"resources/fonts/Dressedless_Three.ttf",
"resources/fonts/FontAwesome.otf",
"resources/fonts/fontawesome-webfont.eot",
"resources/fonts/fontawesome-webfont.svg",
"resources/fonts/fontawesome-webfont.ttf",
"resources/fonts/fontawesome-webfont.woff",
"resources/fonts/fontawesome-webfont.woff2",
"resources/images/codelf_logo.png",
"resources/images/paypal.png",
"resources/images/twohardtings.jpg",
"resources/images/wechatpay.jpg",
"resources/images/zhifubao.png",
"src/lib/all.207da233.js"]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  var requestURL = new URL(event.request.url);
  if (requestURL.origin == location.origin) {
    event.respondWith(
      // First we look for something in the caches that
      // matches the request
      caches.match(event.request).then(function(response) {
        // If we get something, we return it, otherwise
        // it's null, and we'll pass the request to
        // fetch, which will use the network.
        return response || fetch(event.request);
      })
    );
  }
});
