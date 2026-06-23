self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("kasimxcricket-cache").then(function(cache) {
      return cache.addAll([
        "index.html",
        "live.html",
        "schedule.html",
        "points.html",
        "teams.html",
        "orangecap.html",
        "purplecap.html",
        "gallery.html",
        "manifest.json",
        "assets/logo.png".
        "offline.html"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});