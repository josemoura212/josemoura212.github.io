'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "088ceaddde903865ee3575a7c6ffbbae",
"assets/AssetManifest.json": "82cc225553e692189fd5c6f2aefe992d",
"assets/assets/fonts/Belanosima-Bold.ttf": "a185b607130f07a6c3390741207a06da",
"assets/assets/fonts/Belanosima-Regular.ttf": "dfc8bf24a88e20b5d33aba0d0f0cab93",
"assets/assets/fonts/Belanosima-SemiBold.ttf": "f56774b13535a9a8bb6b04b16cc02ded",
"assets/assets/fonts/matrix.ttf": "fb0576c17369aa2b34f386bab4819896",
"assets/assets/fonts/matrixcode.ttf": "ff2a407fe06752facf8828a86955e988",
"assets/assets/image/back.jpg": "35672652ff7c0686680bd558f1a86746",
"assets/assets/image/google.png": "1e01fe36388e7453ab926c23b190827c",
"assets/assets/image/How%2520to%2520draw%2520Backgrounds%2520for%2520your%2520Manga%2520PART%25201.jpg": "8febc6d901304466073245c8f43c3126",
"assets/assets/image/icon%2520-%2520Copia.png": "7162a40a8f4561bf73db1853089aee46",
"assets/assets/image/icon.ico": "43738d64704b6b8b58489ffd3f803e2b",
"assets/assets/image/icon.png": "2d951657b34e1d2fd47fff36dc877ee4",
"assets/assets/image/mangatrix.ico": "077defa02d6c328037faa8b4c189063e",
"assets/assets/image/mangatrix.png": "b9f944bf9d7d42bbeff13be17d8bbe3c",
"assets/assets/image/matrix.jpg": "319b838ed5ccc5dd8678ba5e8b13df91",
"assets/assets/image/noimg.png": "83885e2d10032b53bc34ba5cbb81f409",
"assets/assets/image/register.png": "fa7c0508241e15331efbef3bfbc4cbef",
"assets/assets/image/search.png": "466a8b9e68e579b5e93790e2b49feccd",
"assets/assets/svg/arrowUpDown.svg": "7e996a8be03a2ba06c7086df31e0bdec",
"assets/assets/svg/arrowUpDown2.svg": "276ca81a04ba847d012a9c4db2915777",
"assets/FontManifest.json": "50964256f89e8c88634c4ac00cc6cd1b",
"assets/fonts/MaterialIcons-Regular.otf": "5f1a6ded7768b2d15a21089d0c98e18c",
"assets/icons/chat.png": "3d0a2c4f422ac82b967c5489c4cedb2b",
"assets/icons/chat_white.png": "e7cd9585bf2b86abd64cfea46aae199b",
"assets/icons/download.png": "6b6c10dac26528c2d1af706beda99be9",
"assets/icons/download_white.png": "fcc8c49ec33808e77a914d21885035e0",
"assets/icons/heart.png": "a22ce11b75f5ba8627a7ee18cfd9d999",
"assets/icons/heart_1.png": "2179ebee32ff58fde1f2c94fdb5b86c3",
"assets/icons/heart_white.png": "c472450fbc83c49d6d2433f8dc71639c",
"assets/icons/share.png": "ee76d0ea42108064c354a83d5c91dcf9",
"assets/icons/share_white.png": "20bc2c56e4d63f317a96cec525811f7a",
"assets/icons/star.png": "1eec96e0b633e6e8061ea29a8a94becf",
"assets/icons/star_white.png": "d743090ef18aa7a761856b57b1a71369",
"assets/icons/user.png": "c6e0c59e1834d3b14206aae332a3dcc3",
"assets/icons/user_white.png": "02730ca89ffd49f9394c9125f8cdf5d2",
"assets/image/back.jpg": "35672652ff7c0686680bd558f1a86746",
"assets/image/google.png": "1e01fe36388e7453ab926c23b190827c",
"assets/image/How%2520to%2520draw%2520Backgrounds%2520for%2520your%2520Manga%2520PART%25201.jpg": "8febc6d901304466073245c8f43c3126",
"assets/image/icon%2520-%2520Copia.png": "7162a40a8f4561bf73db1853089aee46",
"assets/image/icon.ico": "43738d64704b6b8b58489ffd3f803e2b",
"assets/image/icon.png": "2d951657b34e1d2fd47fff36dc877ee4",
"assets/image/mangatrix.png": "b9f944bf9d7d42bbeff13be17d8bbe3c",
"assets/image/matrix.jpg": "319b838ed5ccc5dd8678ba5e8b13df91",
"assets/image/noimg.png": "83885e2d10032b53bc34ba5cbb81f409",
"assets/image/register.png": "fa7c0508241e15331efbef3bfbc4cbef",
"assets/image/search.png": "466a8b9e68e579b5e93790e2b49feccd",
"assets/NOTICES": "0d0d86ea9d55c53992471fdfe2df9fdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "b9f944bf9d7d42bbeff13be17d8bbe3c",
"favicon2.png": "36c2764ef9d7285bb3a09e70b6978cb3",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "7fc273fb354a5f04941d70fba8baf46e",
"icons/Icon-512.png": "223a97cb44ec6755e50193ee41bd6504",
"icons/Icon-maskable-192.png": "7fc273fb354a5f04941d70fba8baf46e",
"icons/Icon-maskable-512.png": "223a97cb44ec6755e50193ee41bd6504",
"index.html": "29487f93dceb8212dbdc1e56fdadb184",
"/": "29487f93dceb8212dbdc1e56fdadb184",
"main.dart.js": "a5476c7173dcac6dcfd48896edda215c",
"manifest.json": "8f9e1023753505f78bd2843624f376d5",
"splash/img/dark-1x.png": "c5e383e6f8555c234d973ea3d5c59a7f",
"splash/img/dark-2x.png": "ece468beb6f018676b48e956e9a65f05",
"splash/img/dark-3x.png": "1b170beae56f71cfef29a90e92999b3f",
"splash/img/dark-4x.png": "67c33c28d1d2ecdc3b8ca4c883b76fad",
"splash/img/light-1x.png": "c5e383e6f8555c234d973ea3d5c59a7f",
"splash/img/light-2x.png": "ece468beb6f018676b48e956e9a65f05",
"splash/img/light-3x.png": "1b170beae56f71cfef29a90e92999b3f",
"splash/img/light-4x.png": "67c33c28d1d2ecdc3b8ca4c883b76fad",
"splash/img/light-background.png": "c341980cb734e91d5c221eb32b5f4102",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "d427ebd72d2bad5b78875c0824c1b0e6",
"version.json": "a8d8b3a122a9204f9233017252ad053e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
