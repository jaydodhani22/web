'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e0371468885829d9e686dbe15e2e578f",
".git/config": "46d93f47b32a7b31d0f86028dd335848",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "67f8fff6ad63330349b6d852321c63b4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "742f52d944d5bbdb29bdf0be22543ffc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70856b9a1ccb71e806cd0122df056503",
".git/logs/refs/heads/main": "70856b9a1ccb71e806cd0122df056503",
".git/logs/refs/remotes/origin/HEAD": "617bec01a81a0868ea608e7a04d887ce",
".git/logs/refs/remotes/origin/main": "bb60152d6a8429b0d7de6ccf6285407e",
".git/objects/07/372dc1de36b4c26bef96d84a75ed9841b6c22c": "30d2f3ce7d4932841355e69f88856178",
".git/objects/09/a990d30b44a19ac09e9c0b590182b9865eb788": "704b6f118d0c736f846c57af08593d95",
".git/objects/16/38ca04c514f0e33f687bb3ad29a5bb3b86972a": "8ec39be3783b0b453c92ab8c0c77afbe",
".git/objects/17/86e5fff53177f9206db7f99e21318f6c31c9cc": "8bc875b4e083947c3e79119176f07342",
".git/objects/17/fc9c2d0d085d5b1419d47d89bfc2257899632e": "77b29ff9079ba4666216213668471bae",
".git/objects/18/9cc64e6c8ee781144335fa6fcb6938209d1192": "d76103cb80c29b49108c71e31ba0315d",
".git/objects/19/0907e0d185fa954721284ef72e2b4f3d890cc2": "a8f4473347f9250ef9f984d818384958",
".git/objects/19/79a447fa3c74eaefadd921e9c9ba18c4bb7c8d": "ed5d9d4d97d345fc890905ae6a9231d7",
".git/objects/1b/45f00d13e8a053435585f42d7b1c6c77888c35": "a6fd9e60ac37d4ed7737c4eefa65360c",
".git/objects/1f/11b50c945b82b2f28b3f59241052aa370e4259": "5894cf4921f1d6fea9f84685867010f5",
".git/objects/25/48719827798426d75c4491fa4989878d8771ed": "cd602ac0f1952e4fdba85ed88e23981a",
".git/objects/25/e062b3b12650e9f626c05e49ec24fa4dd8ab4f": "1f9697dc3c155bd88a2e588cbb6cbc04",
".git/objects/27/f92c6e716f888757bad0fcad8343b190e3f2ba": "861f66f77ab0299f4913c3a083eae0fd",
".git/objects/2e/c790081074ffd4a2609d56cc758361b314c7d1": "321c8f4cd1ad1462e7bc18bfa7ffa128",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/33/a73b090f2370ea6b4f25615ef7f67fbbc87fa8": "2afba98162f6161fa8f334d9c7870425",
".git/objects/35/676e8d816ea1362925dc42ecf9131c16eeecd9": "9be2c2db8f47d743ef8e9e24f5f001f8",
".git/objects/36/cfc5bce58c210ed4268d973ee750ba96b39206": "59919d03cf11feb3daeffea721ef71ce",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/f0744ee29bc26d6e96e94f0bd588ce40cf5084": "d44fe41e0044e64630e299a6cd9092bd",
".git/objects/3e/5d7ef8d6285cf88a6a8e4d7a9f403505741058": "33f81c8269518bd9160fe75e8405c927",
".git/objects/41/2fb8928aa04da4c057b83326995f3474a8c28c": "91d8d2d2883376a15bdf700cf0fdc5bd",
".git/objects/41/5027e5ddaf944819977c1d5e9aaf49e835093f": "2b1bd0d88336c94b91cc4edcda434bea",
".git/objects/49/3a764286d05ba6bfcbf114ca5b7b565ae5c0e1": "34565b2093dfcc5c927aebbe1f3f4b0b",
".git/objects/4f/633e11e1ef90ff583e228cec09144090028270": "075334b45f456f780bf0a5fcb1c07785",
".git/objects/52/682aac1b623dc1bf5579e54e227a7d1c431d20": "3afcb75b55b21a66b4a10b8fc21e15b3",
".git/objects/54/25c2ed2b088925b5a0ff250284cc649751d832": "fb417cdb797aec322f08b6136a8198a1",
".git/objects/56/66cba6aff49f14aa835c4aada2e246ee29c9a6": "a128a1148bb771590eb3cc4c5794ffa6",
".git/objects/5c/98c9733cd726ef89f762cfa2a1e989d23bac6e": "5958af94624cad1036c687aa65ed4e35",
".git/objects/5f/9f168ef875f9a825a56c6b10a5d72e1ce14d51": "b83645fd16e229346c5eda54854f2ec1",
".git/objects/63/606061d9f0eb57b660d1991cd0cf7b770f0378": "87e1a188595a942e0c90528f87b3a75c",
".git/objects/63/c487ef0140fa09763ebfcce45b51dcd75f7e49": "35af312509c0b3e6e3e2ec6778ac7444",
".git/objects/66/db0d960a0b05d541ddd00a8a01074b5ddc47d0": "38462dcdffa10330a4a47f38b0cf8183",
".git/objects/6c/a054f172b0b9f3868d32095ad03ce05192b168": "4d459a795a302b119e8d5c862fff54e0",
".git/objects/74/a8a8c6ff19665825f630ae7aac014108e2efaa": "100d63d7ec61901400a262af02649c83",
".git/objects/76/46009f4c5ca56f16ccfa24eb2a575679b245fe": "868931ce65cbd2d15711821faec4cea4",
".git/objects/7a/6e76d3b234694b37cb9202efc975ed3e93f379": "12935426934c38cd69267319d3192bef",
".git/objects/7f/02743990b78aea4752d3125f7d2046e9fdeda5": "1ccebe8c11a66f72bd0bd0d462fb4475",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/88/737f6a38c17f051c2982d0695bfa200134a3d1": "554a2d7ceacd3c8be583667da5b2efeb",
".git/objects/8d/a63a9f2517e4921b21df4534b53090894d0d89": "85b6a9932819610d199b69af10bc8ee4",
".git/objects/95/b0f7cc9f51847cff7784a1c6fb3eae62a18e89": "960c02743ebef7ad820a70edae06e3bf",
".git/objects/98/265385e46f8d7841c55da2259c48b4d61a35d2": "ae1ec5874d3cf94ecaa7e2b012664673",
".git/objects/9c/c536a9879f4c5c2530323fade027a6e3d90175": "b1937c02f5087c5f90e3ef229c77ee9d",
".git/objects/a5/7553cb5b4bb81911955130961b0da4cdaea6e6": "5ab2cdd6417ee3ecef05f09400237fec",
".git/objects/b1/cfe73d2e0ad015b492a288f951928d03ef4594": "6f037f865e775b0de7f2e3131eedfe66",
".git/objects/b2/e4696101b06b1df37262d79254652550a0e907": "94993daae66688154eefb3c926c35fa1",
".git/objects/b9/6c5778f44c2383d262d4335db31d72ed6ac158": "cbaccd890a0bf851048c8737311c048c",
".git/objects/bb/ad30a42e98cdb28b62a407ab6644f694023d01": "dc7268cde5a41f7b249ad47cfcddbbce",
".git/objects/c4/42058e3be0500b09183fbd0e9abc2664aa5a00": "d3041d31f0e9d125032b0a2a2150a63c",
".git/objects/c4/5f560a0be94b468ad7d6b3b4e16ab66f18a104": "c2886159a58d081ce814d76f45ecdfef",
".git/objects/c9/7173daa56222e441d7611ad79238a3cd8076fb": "e0cd818cc441123f0945ca58021c0076",
".git/objects/cd/e01e5cc85d9e761f20d04656aebc25010a3b0a": "edf3183113e7d4ec8d6945c32535f1d5",
".git/objects/cf/799b1453df1b7c2cd67457b9678c79dc5d50db": "a3d289d7251f450ca9958762733c05a1",
".git/objects/d4/2e399702468ba8f67694c214f907f31107b06b": "76bb6172538b498403dcb7b2ce0cca71",
".git/objects/d7/b2c841bed4082fbe6eca5aaa1b5ac4c2351024": "9dec6853c3841975896834152b60a4aa",
".git/objects/da/3138d321ff4f438168483a41777808afe89837": "83b8bdb30abae5ff95574c595d6b26f7",
".git/objects/db/b58ffbfa3c0d813911938b50b946c8eac0c9e4": "b51b7dc588315ca3de6735899fdb79f3",
".git/objects/dc/7d4fbadfbcda8ba1b7ac811dbbc040d89a73cb": "0218761dbeeb916287160250e59e242f",
".git/objects/de/18cfb42898b73a38b9ced4821fa0d204a5441e": "5100643d812bb2d8891dbd69bbd3fbab",
".git/objects/e0/df5961a63f0b78f007cf9399845092cd2b2318": "7b24447aa006bfa33b0731e83b38786e",
".git/objects/e1/20e6c5c2355ed6ed01ac3250a1ec0b6a783a3e": "ab8418cbd44cce3adff9f7d3f9dbd8a0",
".git/objects/e3/0b613d0d5758a07ade3ccc28821e7055ab58db": "88d1d95a8667195602538934e0ff5d31",
".git/objects/e5/19ac22f51d12ef231966eb4fe877a2ebcade7c": "193f18dd58c65ee37d3daa6fca25ecac",
".git/objects/ea/98a9d640f2a18bc072375cd179068c91a1d3b7": "391d66f7dee5c542fd76df2f0926358d",
".git/objects/f7/c421dd050bec8fb8d4fac875f354178b4a5ea7": "56e3516519e408178d66278d0256556e",
".git/objects/fd/809723dc31c3144f4e5fb3d274837df4ecbb30": "3f2ad0a3459a0d1833061874eead9d1e",
".git/objects/ff/3e296511766705b07feaa35c11b3c8fd410a62": "ef6c34705c0bc76224f7cdb4538dcdde",
".git/objects/pack/pack-7708f4558a92f84c9e303132e451b75c7eecc715.idx": "f1e0a353ba579d47958596558ee0766b",
".git/objects/pack/pack-7708f4558a92f84c9e303132e451b75c7eecc715.pack": "7089795a916e02b822d978f1cc68644c",
".git/packed-refs": "20938ccd3edd36e75adec92cd58cc592",
".git/refs/heads/main": "42993e23d0c9ab4e819949e91870696f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d1b24241c4bce50cd3452432e32f0935",
"assets/AssetManifest.json": "32f738cce98404e612bebfa493d00c35",
"assets/assets/Admin.png": "77760243584ba26111c0aa4cc6c0ea9d",
"assets/assets/Admin.svg": "e04ce2e860834d65d24ed4e41fbc6c5e",
"assets/assets/Faculty.png": "41c43c01e78327df3ee73fdf8d283286",
"assets/assets/icons/chat.svg": "144ce21f9c19cd9d17fcdfe1dba24dfd",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/Final.png": "3fafc48f2d7ef2f7953e6fbb981b63be",
"assets/assets/icons/google-plus.svg": "4651560e3dee407a0a545610d5987ea3",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/icons/twitter.svg": "ce897e80d1e04fc007bce0cc770f07e7",
"assets/assets/images/1.png": "a553dd7b6a8d21dc75ef10f52956a57f",
"assets/assets/images/2.png": "e920ee45b2e0af5636a99faf3256cb91",
"assets/assets/images/Final.png": "3fafc48f2d7ef2f7953e6fbb981b63be",
"assets/assets/images/icon3.png": "9f58bbbb5f1533bad50ac89cb278e920",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/top.png": "7d38c423d349317f68c0fdeb36010e9b",
"assets/assets/Parents.png": "a2e86c0c8d16b04bf3ea274021ae3c3a",
"assets/assets/Student1.png": "75f8e7091d92b1583276f93a39416d09",
"assets/assets/teta-app.png": "efaec21a55467c0406540268bd04ea6e",
"assets/assets/top3.png": "9e7e68fdabf11cf0ccbeea16b9628712",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "628b8ac7d02d7f8c81a730059ea89584",
"assets/shaders/ink_sparkle.frag": "e8ea6f1a4b3343e3682f9c196bea612c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "6a2522a5e5ec916e2e3ceba2e2aceaff",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "b7a0aa88537743baf60da521d08a6396",
"icons/Icon-512.png": "8c87b62b08d6f556492cf002bde154a0",
"icons/Icon-maskable-192.png": "b7a0aa88537743baf60da521d08a6396",
"icons/Icon-maskable-512.png": "8c87b62b08d6f556492cf002bde154a0",
"index.html": "82829e41f2a5de053b6911c5c613d3bf",
"/": "82829e41f2a5de053b6911c5c613d3bf",
"main.dart.js": "2b080553474e36b1d2bea005c319c3cc",
"manifest.json": "bb8f54956d43246b81ce0f8563e65495",
"version.json": "2518f6bd4e52ea7e361621fa25497787"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
