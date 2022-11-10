'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e0371468885829d9e686dbe15e2e578f",
".git/config": "46d93f47b32a7b31d0f86028dd335848",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "5e0eed9b5230faf3c0eaaaecea338106",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b99592d99ab76d4c42a3d3df28292eec",
".git/logs/refs/heads/main": "b99592d99ab76d4c42a3d3df28292eec",
".git/logs/refs/remotes/origin/HEAD": "1833f4020012b876b1ad25fe5dbff629",
".git/logs/refs/remotes/origin/main": "7065a07c9ec9db985f51128d88be0acd",
".git/objects/01/c9d5519d968d601fb8ae5d826dffa3dd0b55dc": "71541bd3510e21190e572dad65d8fd8c",
".git/objects/04/aa91d08a3b08acc46cf6ca7f0fce1566c53ea1": "0a59f248cdb9d5e1b5f5a59185991cbc",
".git/objects/0c/be6610657485241320bea94f0392d9bfe4c5e2": "c352a8ce34fa59037598f015d4b0e84f",
".git/objects/10/32c0d16269978763663ef7db9e5eb9c9d00d05": "871a057bcd03ff77ca57121fe8d3b78d",
".git/objects/10/3b4958e4a19a641851505a5ac32e5aa49c3923": "3fed6efe6c286026ccfc9378642f3db3",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/05ee173f03820fb79faeb87405e8da639001f1": "5999e1749bd77bffa21d587c9880e56f",
".git/objects/20/493702f356e60cfa714554d0cb49844371b12a": "d1ba4342eecec777463b117f3488cdd7",
".git/objects/23/b4f8d676cd713b381943c21ac5961ad6795550": "c132c1165c67c0343c7b077024e62eeb",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/60efad8ff204579ed43477f26f0854a4750ce8": "5f4e25b75e11c088f83330be3423bbc3",
".git/objects/2e/c790081074ffd4a2609d56cc758361b314c7d1": "321c8f4cd1ad1462e7bc18bfa7ffa128",
".git/objects/38/c749f5c049de5679074b6d4e1090dc18662749": "f220c5dc3f36f0f5433901cda687d7c7",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/f0744ee29bc26d6e96e94f0bd588ce40cf5084": "d44fe41e0044e64630e299a6cd9092bd",
".git/objects/3e/5d7ef8d6285cf88a6a8e4d7a9f403505741058": "33f81c8269518bd9160fe75e8405c927",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/47/2f97a737a29fcc079810f8f2c6b4c5cd956a3d": "4e8c5f7c2fb524659e88fd79df790032",
".git/objects/4a/99ebcc8c1b7c61e707ec6e6f97a42bd9609a61": "c1484101564a469787288321f3a2c80e",
".git/objects/4d/70a1a49443e1ce65e4bbc9175c3f959b7a6950": "a5da938fa6cf49bf26b21ba9a96e5366",
".git/objects/57/ab39de5a8c959fbf22609a5108b866a4504c67": "5bc2f7c86873a147a87a9f599f2549bb",
".git/objects/60/4b4fc6e93cf85e57c186421dd98635b657144e": "f1b0200b8b7c569e524ed7dbc1a477bd",
".git/objects/61/992a8fa83bbdcec9a8a8a2ee2e722e2e007b6d": "0c84a0d283bb761fa176bbd25d076273",
".git/objects/66/3b6b15f90fb987b62790e5036fca55970cdff7": "0e818425a87bbac0fd6260aa26882dda",
".git/objects/66/db0d960a0b05d541ddd00a8a01074b5ddc47d0": "38462dcdffa10330a4a47f38b0cf8183",
".git/objects/67/9aba168185879807d985bf95be59eebbeb0ee5": "ee35c5d359195b4e9989dd2994bc44aa",
".git/objects/69/337134420325c7d8cfc931806a8984f75e4728": "6e9e2baa866ab745cb3299a6f8399439",
".git/objects/69/d6e703edc00efe439329cdd43b974d6839e0a4": "19f4db0f2938cb3bf1e99e71316666f7",
".git/objects/71/4c090ee78340f60f1832b852aae75b1b092d85": "776c27a34ed159cb39592a8526de1d91",
".git/objects/77/3a24a590ca8d24fe0a7d343f354ff2e570a2ac": "7507b77f62520ac1cdc02c20a19dedef",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/06d1c718c581fc2845b3c37b4602744a6cb28e": "37dc7830482a97023fd31100f51f7fbb",
".git/objects/85/428c7b5582d7a153653d7ff50ebfed86f6cdca": "063a4f1b3d6b77058e1daaef3c88fc93",
".git/objects/8d/a63a9f2517e4921b21df4534b53090894d0d89": "85b6a9932819610d199b69af10bc8ee4",
".git/objects/90/45b26d4dc91add56f846e52f8be5fe300055c0": "c4d6b9fc97fb5501ba6d0147126dd72c",
".git/objects/91/c40623b116758d96c11f0c775ff77cbe66adbc": "a98bd5de5ef921a0fc612c85c41256be",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/531bb6a1ce8b69bc5ae68322a646cd75dfb67b": "30ffc0f81f2ecde2b27095d56f8edb19",
".git/objects/9e/8714bc930423bc4200cd663f1ed5af2662e1f9": "88b1e79892775eb887153186db4979f1",
".git/objects/a3/d8d4217769afd670a97de5d0db3ee06d796bba": "79e64df20175f3da5711674fd9a1973d",
".git/objects/a8/282b8f4facc9f51977a8d03484c7630a14677f": "89b44b2ce52802392841e1c63b3d29f1",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b2/b31258e1de4cd45bca4f501b1779178d94e717": "d4706966a170b78abb810b1261a7a9ad",
".git/objects/b8/124f3a1c400e29d87fd11a803af134fa1649c7": "d08107dcf960e7d7d7565b3d5935e689",
".git/objects/b9/bb6dd20d5d355c412128a074c65fddc2d45a23": "870f7bca5d08d3b853a2f97dba863d65",
".git/objects/c2/8bb46604d2b7f45fac1fe325dca781af181459": "f279291c71ab99f81e8c18e3d4a60199",
".git/objects/ca/71684843172654487ce29f8a107c3a8ee996a5": "de9fc76324c1c4a0c7a684588f3f9bce",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/74c797e2ee010728e3a2410a5084a7da1b3f26": "165a1c94f01910f258f7bb45f3dbbfe1",
".git/objects/da/434776e611675b03360985d869ad7e47fb649a": "2c105dcad4a3d4904875fea11fc6699e",
".git/objects/dd/badafdac071f8f42464bce88d05fc854376459": "a3233b92b386487ddb74930396d65591",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e7/42c2e07220ed67b5f2890a12848d4f7f9e9849": "b07002351cd51b43bf688722ad0f8531",
".git/objects/e8/2e04b5e5d7c83c1ae6e901d3efbf4459cd406b": "340a4a864a673c7ad1e307e80fa4c655",
".git/objects/eb/90f06b652c7ebdae409c41f49830bf7adb737f": "d8e74a79a90f1c1af9acec2ca8ffa5f3",
".git/objects/f3/e0d6d516b0ad4e3e0db146ace781c99f6e359a": "882d3637ebe833e21c5dc969dbcc86f2",
".git/objects/fd/809723dc31c3144f4e5fb3d274837df4ecbb30": "3f2ad0a3459a0d1833061874eead9d1e",
".git/objects/fe/ce45ece7f5ebb4671d19996058cf02ecd2d476": "12b98f6a529758d774cf8e6943297c0d",
".git/objects/pack/pack-8954e0aff123e6ca43d413aa934fbe7c1e23dbcb.idx": "b01847467a474ccbfb4a201f3d48db6f",
".git/objects/pack/pack-8954e0aff123e6ca43d413aa934fbe7c1e23dbcb.pack": "a1da6efce361ffda4df90b0de17a07ee",
".git/packed-refs": "3491386f3ab30824d8e33560962586b7",
".git/refs/heads/main": "e9eb6679d7e2f3425b417a5e7a063619",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e9eb6679d7e2f3425b417a5e7a063619",
"assets/AssetManifest.json": "0243c98e937510045e8c43dc52e43535",
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
"assets/assets/Student.png": "75f8e7091d92b1583276f93a39416d09",
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
"index.html": "47197f980867f6740acc809fe13a260d",
"/": "47197f980867f6740acc809fe13a260d",
"main.dart.js": "204f15ef01abc320c7778b0a3db036a3",
"manifest.json": "bb8f54956d43246b81ce0f8563e65495",
"README.md": "e3ba31c2e10732f791edb97cc6a1477c",
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
