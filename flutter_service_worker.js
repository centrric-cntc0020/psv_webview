'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e507ace410ee6c2b44d0bc69013bdb5f",
"index.html": "cb403d226331f890d455e31707153e7a",
"/": "cb403d226331f890d455e31707153e7a",
"main.dart.js": "96ec00d1e5a9464fa0f50313d42a022c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "80b318de962781a4a3fa759c2f3bf136",
".git/config": "70f802a63ebf30602a33b666b4cbbb84",
".git/objects/0d/b92125bb47f75b979b21677eae50eb2af8b3af": "7110e78e2f1f4987779793e6b7b5d79b",
".git/objects/3b/984b84285e09bf98f0f2cb4099bce2afadff2e": "38c196ab1595fc3ee1bcce1393b324c0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/4ee968ce971fb57d6c72daa8603445bbfa3935": "94fab14eea812659edbcc94a5141c5ab",
".git/objects/32/2189c7ef019daa14a160dcebedb68d4a739f73": "eca31cdd9b86c079d309a567092d9857",
".git/objects/56/180f4b66aff78d0efc9512a634e137d1bcdc39": "4176a0d1d8bd829c51fc3388469a7406",
".git/objects/51/525c7d6f1a86003260ca238a5b9d4e56527eb9": "8c868b7cf9bc51bf37f9644022f5e4e6",
".git/objects/67/44f34701d902c2d429a19fc8422eda607d302d": "8b5644e35824011d414399127e3fda89",
".git/objects/67/ce19761e0722e85ae1b74046a6ed7ea385920e": "26c95ced8323557e91ba473856d13983",
".git/objects/5f/3ef310fba978264cc8d105cef5c5e429b34e60": "4c4567803fdd0093c3e569b8c89683c0",
".git/objects/33/06406a0c9651c76ddd3f6551efb5a5cf44e767": "71232183af2e095d244fa76a951174d1",
".git/objects/05/c56e32c30b8bf0de0270bc59343f2d4ba550ff": "24bf6227ba1398cf4f679149e27aa304",
".git/objects/9d/baaf6faba89a8fb31b1ca893f6030085787e88": "2fe5477624f19fd139812a298697d31a",
".git/objects/d9/338516030a55837ad9d5e9c2fa9a2c63f39ed4": "d46fa5f139ac3bdc2c3a17c09beb0425",
".git/objects/d9/8b8bb4c5aef30b9ebfa04123258f401be3f881": "675b9baafae4ee2f91887fc4f793acb9",
".git/objects/ac/283d3a70e68608739363f58d54dedcdf5ef3e7": "ffd68da97b46af7969cc8643e5aabd81",
".git/objects/d7/3cee699c0f6633d019b64d962d8cc9224f834f": "5f87faacf4bc621f338fc6a8909da167",
".git/objects/da/40b426a987c3bff488cff752593eba77e85eb5": "6631edbe3246a5740eb186653fd99f89",
".git/objects/b4/624228a969f8325e6c4cbd096048fac622a13d": "f66725018093285a634fac461b34b794",
".git/objects/a5/4276968f3c32892fea059d45ebb6d9c9862300": "d6201e18be79ef6411bc598565e3208d",
".git/objects/bd/1528dfd8514feb887c82ad0873a41bf05b26eb": "03c9fc87f5bdfe2449ea45587f3a6f2b",
".git/objects/d1/f6226b21734be8317bc64dae6b582831e96dce": "198f6a3afdff216f6204910b6ba8001a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e49f1b39a7360b78ad7039f039c766180729fa": "32da751ebdbe1789eeb136889f31ece3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4339885389e802fec1bec1b9b2819bcdff2e15": "dc24b36b3b1ae190d391fe604dc134a8",
".git/objects/c9/ffc74d8e8e59e2d74538f16bf9cd50c48b3a6c": "c8b003dc7f65fdd3bdd67cbaeea9cf14",
".git/objects/4e/0f758b1a63ebb326bf767d1b9ed2b09df9cd16": "dd4fd4811305c0700ef4716229e8c43f",
".git/objects/20/c26d59609f7c7b116b63dc46ad16429d29bf53": "c5347a85403c58e224b0ed3f7ba3e8d9",
".git/objects/20/6bc3652d8cb504f477370418eee9c343f8dbc7": "ee43069e4789bbe5653cc9da24d4b11a",
".git/objects/18/dc5a645f7623622b47985cdef2d108afad15c5": "834431e7caf97fdd55b3e4ab104d5081",
".git/objects/4b/eb5fc5068f5aebae17d9d3fa5540185f5e690d": "5921484a9741d8efcc2e83caadc968a6",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/54c499e147713a8e169e4c7dabdc676084b0b2": "98fc2f4788d8265893630dd896379c8d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/a4dd5ce976dd911ef02d125dba8ae1e067e68f": "ebc7fb2e876ec099eb5a71f202e3980f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/da653c15bc6afc11887f10eba305c4a49b15c1": "c029066ca8aee918842e613772f77ff4",
".git/objects/86/8f8b5d25e42cbb61aa54eb14dc538a5db9482b": "f6c41ea2ae82ba1412c6132aa33b6152",
".git/objects/44/bcb54a4c700da4efdccf6f86ec19c1f359aef5": "99d9ea842d00650dd1070a6a33642b06",
".git/objects/88/8e8ffb081585f457076a1d3f60c7d23a0ccd0c": "2f774ac1f0a8e46ad9bb9f38b2d8f850",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ab576096995df979c82648bac8a51f59f40ed7": "1ceb88272dcd4e0293bccc7f1be304e1",
".git/objects/9f/ef14682f8043902f07fbbe0a033e30a0ec3392": "127154a79f860268c05984a41d2bd605",
".git/objects/07/4cdb02b7e85c8b1bfb17503a6285f882860b2e": "de3b9f1f336e7083baf13b8f7a1055a1",
".git/objects/9a/35c5b46ca3d2f921feaa32c7a10e27a7ba6f8e": "e7d4fd341b7707fb0bfd5460665b08e4",
".git/objects/9a/079d0ebd726e122bdcf3b6b355fe45f1e42c9e": "8347c1bb2188f4f951b8feb058c14f27",
".git/objects/5c/305fd62f26088d52b081c361bb91002d662c7c": "a223af425506b08b70ccfdf942f47fa7",
".git/objects/5c/211e12fa2dd1ca573cfd6e869553fe3d89bfd6": "0fb35cbd93575731ee182de3bb9aa2cc",
".git/objects/5d/ef5fd8d320a0719431cd4e6dd9d5bb5fb30c03": "c3afa2737dfb31a72732f9b853b2885a",
".git/objects/31/950f17542c8a81c2f301393118c79dee44b510": "38b4eab455f56ef70fa60476b740a669",
".git/objects/62/a79aaab88e91efc308da69d069e31da73be51d": "a6f3dcf835e429572d2cbed479a5e8c8",
".git/objects/96/5d43ad6b20de5fcdbdcfc669771aea84affa7a": "274e624580e082a7690ff3b1b5e1aaeb",
".git/objects/3a/08d9324d3c32ed2514b96c7cb9c867f659d301": "29f1b2a62b34ffde6242327ac4324fb0",
".git/objects/54/ab416855c56e60edd928cd60b441130356c59d": "a59e96c1fccdd925d753a770f22f6138",
".git/objects/98/7f31a7cc2bcb626dd9068974b2a9daf2bad2e2": "8d91a71351ddb30549887dce0936ac8e",
".git/objects/98/acd8a766224c28d4098a298e0f5ec9aaf81cdb": "f89ffe8462d874e0cc45e53a098f9284",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5b/a38ea32026d9c50f4d78481d7b417683556e1e": "05e440effce007130fe191728e08d169",
".git/objects/08/da07c664249dd42ead59f73a666f39416de097": "28db40962123aa256d2695e6d22ce8d9",
".git/objects/6d/4c05689c97c14fc6111466e911e4da2d5c484e": "f441382264a1e77502f06af86ef4e7ba",
".git/objects/6d/d1ba990cabc410f90e1cb1ff459b867ed6560a": "7347f79e501062afc1b11b1b102adab1",
".git/objects/6d/953c8dda7ae9b10009e763b407477645af97b2": "c20ea01177957663fd349336d3826364",
".git/objects/99/09e2f25459c99745082abe05a6b93d4a07527f": "362e21184876cf62f5190115da6d96f1",
".git/objects/97/8dd76e28d6d3acd49913ff015ede75a0dbdfb4": "6a60e5528dc4f24da6c4064d5364c88a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/8c69e4f6dcf62dc2242ae4cff616e29e42c042": "a8151850ddbfdc9951cc70d8a9fee711",
".git/objects/0a/2dfbcae5fe32b67cd2d878d4e73cbdace2384d": "e1419001de772fd10afda23e2542dd28",
".git/objects/a7/b6cce7ad8bed8898da073bf8c26b8c92c53def": "79387a60578367c04e96804232aff91f",
".git/objects/a7/b3e6a5dd9b017754fbaa0a711d8f6255278343": "b6a9edfb864d565dc467369d6e78edcc",
".git/objects/b8/7f3558b584cb2a42c27cd0d667584b7bea5131": "85678ee44acc29a339f45e25fc8fccc6",
".git/objects/d2/7e42594baff5d3b0abbc6f05a1ddc50758b45c": "716bccd06b6786748db9c337d22c44f6",
".git/objects/aa/f2421929c563eb7a06aeb1dafd0ccb36b20325": "5fbf3f2e6d7a594d4403ffc3e85a6278",
".git/objects/aa/e91e5c69bb114c1f833280d47c4aaac5099b71": "16ad51b18b8573bd6d082ae98e304de3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/19aea64fcf2cdf834ffebe3f845d11c04171de": "af9d6d2e016343ea51ec70c93e06820c",
".git/objects/a6/b4e34abd918195db34f39b83fb567d620c581b": "a06193c898d75e8069ca0ccc28840d69",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b3203524f41ac6f77e51e431b918115c076254": "5eefe84793bf1a2103979a1e36526fc6",
".git/objects/a1/2b6b2136dc9b82f5ad23d46bd2c43ed6acba69": "d155bab39310f68ad918a7e2707427bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/76bd6dc4739a523a5ed083be08707ba70639cd": "8822dc72766b19cf8a605f29731d427b",
".git/objects/ff/4516999a54ab43f721be455316a3d47c5aa1f9": "fa03fb982cf19a4a1889dcb8ed18a35e",
".git/objects/ce/4d51b953b8e10b2acea0898371a640c0b432af": "3a8fd827a3f2ac5ffd9ccc789bbe25e5",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a28de23eeddac487c42310c7b3b215e52d992b": "e6864ddb3ed7170cc3c6444deb6e17f4",
".git/objects/46/787e697e6ee4ae2b554c44588cbaa09db4d040": "875037f46bc79ebf4607020fc59c603a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/7b9ccfc3084bb0751992203898a9be54bfa304": "6e0effc4a50379903ac4f504121eb415",
".git/objects/4a/834a4b00b40f7686015a7c04087717ae581235": "61a7e7fe18250c00785dbf5c25d1c70f",
".git/objects/8d/d6c44bc5e5dac7539dcaaf0eac5c5349eeedf3": "a27d589a3079a1fbbd5521d0ed25c77e",
".git/objects/49/d7fbc187ee02ad27728c92d2d623abbed74146": "a3f7a595e0e78349f6f7630a403a1335",
".git/objects/40/9704ff2492675e129df27807c049c6059811fa": "2264aea097be30075de6368d9cdc9b87",
".git/objects/2e/b4346bc04624e03a87939314346be2f159b806": "1e82aef5682257c41c1eccf1f8d67b1d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/309ffcb70a273434a5eb9bb091e600961c9209": "5349696ee67dc1607636b7bd996b1d32",
".git/objects/8b/338c82a5910d4b206797725a2f144b04767e16": "7245306d080f372997fc0b840f28f4b0",
".git/objects/8b/98446ae16ffa509c93b75998da775d312235c0": "e2f85592bc9e9809800c40d7d805789e",
".git/objects/14/a8935f3dca2b86fb6f1ee51316ebdb6aac692a": "d5e8473015aaebee8e20ce1356aed4d8",
".git/objects/14/450cf90c2a402d857b30535adb9b22ccd9cd4b": "bc645f9648b4942e0727b4850180788c",
".git/objects/8e/819674164670ad2a4a033ba46c5f8c269906d0": "bc6c3c3bb95fe0752b9469e48d16b175",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "305b466a330feed9e9cb07824bffcf69",
".git/logs/refs/heads/main": "305b466a330feed9e9cb07824bffcf69",
".git/logs/refs/remotes/weborigin/main": "9a6524e813d2f5f08b45355c2c05dace",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "407acc29759d0fc70527359067eec94c",
".git/refs/remotes/weborigin/main": "407acc29759d0fc70527359067eec94c",
".git/index": "29f16736aabbeda42d418c53fb8006a0",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "edc8df3b890c0c1efe182f3027373fcf",
"assets/AssetManifest.json": "4ddf25a1f2dfb9fd0be7605c77496948",
"assets/NOTICES": "d88b5d68f44a88c9ae811856e4583126",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9317b7de046f228474e7892feed79e49",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/game_lost.json": "642f6c487d4cc15053e92f652515e903",
"assets/assets/selectmatch.json": "bf073fc968e2f5a50ada9a1cf76dfebf",
"assets/assets/start.json": "1ce9cf7b076440f78eb06882111bb641",
"assets/assets/emptyData.json": "6dc0f75b0f2539e6d358e931842f8cd5",
"assets/assets/batting.json": "70a549aad599dba56ffda12c29beeb34",
"assets/assets/winner.json": "3e3d19f0559f1d5be462c77968cea4de",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
