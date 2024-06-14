'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "43a397ccbc724eaa09c68eed10571ada",
"assets/AssetManifest.bin.json": "143e8693806c4411e157f09eb2c745fd",
"assets/AssetManifest.json": "2b0fe6331006b3b1f999c62735b4b322",
"assets/assets/emocow-happy.png": "49e7b9cf53292bde0b9d368246838f91",
"assets/assets/emocow-hi.png": "6ed2b5d54794b3857f3e85fb6b094175",
"assets/assets/emocow-sad.png": "0485d4227a4b0d164914b4820335fa08",
"assets/assets/female.png": "a2b09f4ed03dfaab95c17ce34128b5d0",
"assets/assets/graphql/chain_list.graphql": "233f86b27dd08237cf8f0cf349526c71",
"assets/assets/graphql/get_balance.graphql": "021cce4d29b3efab001e7a4f9b6b475b",
"assets/assets/graphql/get_cow_existence.graphql": "234958d00d8fd8004d255233a858ac90",
"assets/assets/graphql/get_cow_sell_value.graphql": "d1a006cd11eb6d06409f207e59136d52",
"assets/assets/graphql/get_my_cows.graphql": "69e764a0c406239050e41ef7423ce0df",
"assets/assets/graphql/get_one_buy_notification.graphql": "86a248812d9d98047216e97fad63462e",
"assets/assets/graphql/get_one_local_db_cow.graphql": "b85d6cd3b5a79bd453a30db503c0cdda",
"assets/assets/graphql/get_one_sell_notification.graphql": "0d65c2e06fb2db5425556dcdc26a7d5b",
"assets/assets/graphql/get_owner.graphql": "e561a5e3f9e23f4264727c1c33122749",
"assets/assets/graphql/is_cow_alive.graphql": "da8ed93551e4fd3912bb199c7f2fcde0",
"assets/assets/graphql/is_cow_still_full.graphql": "157788a93a14b4f138fedf09f9bc6fa9",
"assets/assets/graphql/is_cow_underage.graphql": "6d94acfcff2e26c663df5099d2092f8f",
"assets/assets/graphql/mutation/bury_dead_cows.graphql": "ad355a881e28605d93d6de4cf43b7fd8",
"assets/assets/graphql/mutation/buy_cow.graphql": "8ee4bec40bfd823acfced3e44fdea16d",
"assets/assets/graphql/mutation/delete_buy_notification.graphql": "2daf1d2fdfa7dcf7d6200d1bc2e135df",
"assets/assets/graphql/mutation/delete_sell_notification.graphql": "ccaf7a2c8addd4f33965cf295d7317a8",
"assets/assets/graphql/mutation/feed_cow.graphql": "75a539f1bcee5912a1dae64ec083c656",
"assets/assets/graphql/mutation/initialize.graphql": "ccd20fea7d596da022fd5f9fffed9d18",
"assets/assets/graphql/mutation/request_app.graphql": "22a660eb18483148ac56f6001f139ebb",
"assets/assets/graphql/mutation/sell_cow.graphql": "52b56b3c59e00cf63989726142132b12",
"assets/assets/graphql/root_initialize_check.graphql": "2ecb39e48833e94474801304d8af5782",
"assets/assets/graphql/version.graphql": "6cb9cf25dd16da0fef613362eabb3acd",
"assets/assets/hallikar.png": "d17e0c2966d303037dc0b2f521457dad",
"assets/assets/hereford.png": "9c7fd3cfc10a5eb5d9c8d33f22e460dc",
"assets/assets/holstein.png": "6c899d70db1c6d65e663abd3e9707983",
"assets/assets/jersey.png": "ba080de7a34b82efb3e908553119f324",
"assets/assets/limousin.png": "a63f6a41a70a2fdc6908f411523dd9ec",
"assets/assets/male.png": "d3d4882dbe0c2bf69b7f29ccac8561ee",
"assets/assets/micro-cow-loading.png": "d69c6e4e10ccb021eb36f90c5a86ed0b",
"assets/assets/simmental.png": "a5334bfd9913212c7dea752ca2417ac7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "49e2ea87c69201694391fc1f526c677d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "4bf4ab0036a5b3c5d0e3907f705b3fa0",
"favicon-32x32.png": "1a46b96f9573fbb96c5a0080dfc1d925",
"favicon.ico": "9370c391cd61252221a45230dadc011f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e4b38ae46a8d1f8a60d1391429e3d552",
"icons/Icon-192.png": "ef314d7ef72cd55ca9f6e5e8dfa0d7f4",
"icons/Icon-512.png": "ec0621b84d245563c0af385a2fbbf311",
"icons/Icon-maskable-192.png": "ef314d7ef72cd55ca9f6e5e8dfa0d7f4",
"icons/Icon-maskable-512.png": "ec0621b84d245563c0af385a2fbbf311",
"index.html": "c0668391515f52e99f5152b8db64aefe",
"/": "c0668391515f52e99f5152b8db64aefe",
"main.dart.js": "d31719608fc9df2812af21314f0ffd43",
"manifest.json": "6e06ee80a56b05da73a44bac470c7560",
"version.json": "9d0c13e2f14d433aad65a3ac701fe538"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
