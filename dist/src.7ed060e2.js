// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/template/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Card = function Card(countryData) {
  var getTemplateCard = function getTemplateCard(obj) {
    return "\n        <div  id=\"card\" class=\"main-card\">\n            <h3 class=\"country-card_name\">".concat(obj.name, "</h3> \n            <span class=\"country-card_capital\">").concat(obj.capital, "</span>\n            <div class=\"country-card_content\">\n              <img class=\"country-card_flag\" src=\"").concat(obj.flag, "\"/>\n\n              <div class=\"country-card_info\">\n                <span class=\"region\"><img src=\"https://i.imgur.com/F8PsJdu.png\"/>").concat(obj.region, "</span>\n                <span class=\"lang\"><img src=\"https://i.imgur.com/A85woq6.png\"/>").concat(obj.languages[0]["iso639_2"], "</span>\n                <span class=\"currency\"><img src=\"https://i.imgur.com/KdvpkCA.png\"/>").concat(obj.currencies[0].code, "</span>\n              </div>\n           </div>\n        </div>");
  };

  var cardView = countryData.map(function (item) {
    return getTemplateCard(item);
  });
  return cardView;
};

var _default = Card;
exports.default = _default;
},{}],"../src/utils/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var filterForm = function filterForm() {
  var filters = "\n        <form>\n        <label><input type=\"checkbox\" class=\"filter\" value=\"lang/\"/>     Language</label>\n        <label><input type=\"checkbox\" class=\"filter\" value=\"region/\"/>  Continent</label>\n        <label><input type=\"checkbox\" class=\"filter\" value=\"name/\"/>    Name</label>\n        <label><input type=\"checkbox\" class=\"filter\" value=\"capital/\"/> Capital city</label>\n        <label><input type=\"checkbox\" class=\"filter\" value=\"callingcode/\"/> Calling code</label>\n\n        <input class=\"filter-txt\" type=\"text\" placeholder=\"Search\" />\n\n        <div class=\"filter-btns\">\n            <input  class=\"filter-btn apply\" type=\"button\" value=\"Filter\"/>\n            <input  class=\"filter-btn clean\" type=\"button\" value=\"Clear\"/>\n        </div>\n        </form>\n    ";
  return filters;
};

var _default = filterForm;
exports.default = _default;
},{}],"../src/utils/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var API_URL = "https://restcountries.eu/rest/v2/all/";

var getData = function getData() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API_URL;
  return fetch(url).then(function (response) {
    return response.json();
  });
};

var _default = getData;
exports.default = _default;
},{}],"../src/utils/urlFilterMaker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var BASE_API_URL = "https://restcountries.eu/rest/v2/";

var makeUrl = function makeUrl(filterField) {
  return "".concat(BASE_API_URL).concat(filterField);
};

var _default = makeUrl;
exports.default = _default;
},{}],"../src/template/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Modal = function Modal(countryData) {
  return "\n        <div class=\"body-modal\">\n            <button class=\"close-modal\">&times</button>\n            <span>Domain: ".concat(countryData.topLevelDomain, "</span>\n            <span>Acronym: ").concat(countryData.alpha3Code, "</span>\n            <span>Full name: ").concat(countryData.altSpellings[0], "</span>\n            <span>Language: ").concat(countryData.languages[0]["name"], "</span>\n            <span>Subregion: ").concat(countryData.subregion, "</span>\n            <span>Population: ").concat(countryData.population, "</span>\n            <span>Border with: ").concat(countryData.borders, "</span>         \n        </div>\n    ");
};

var _default = Modal;
exports.default = _default;
},{}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _Card = _interopRequireDefault(require("./template/Card"));

var _filter = _interopRequireDefault(require("./utils/filter.js"));

var _getData = _interopRequireDefault(require("./utils/getData.js"));

var _urlFilterMaker = _interopRequireDefault(require("./utils/urlFilterMaker.js"));

var _modal = _interopRequireDefault(require("./template/modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = document.querySelector("#App");
var mainTitle = document.createElement("div");
mainTitle.classList.add("main-title");
mainTitle.textContent = "country app";
var wrapper = document.createElement("div");
wrapper.className = "wrapper";
var container = document.createElement("div");
container.setAttribute("class", "content-app");
var filter = document.createElement("div");
filter.setAttribute("class", "filter-section");
filter.innerHTML = (0, _filter.default)();
var modalContainer = document.createElement("div");
modalContainer.setAttribute("class", "modal-container");
App.append(mainTitle, wrapper, modalContainer);
wrapper.append(filter, container);
render();
var searchInput = filter.querySelector("input.filter-txt");
var applyBtn = filter.querySelector("input.apply");
var clearBtn = filter.querySelector("input.clean"); //getting the filters:

var filters = filter.querySelectorAll("input.filter");
applyBtn.addEventListener("click", function showFilterValue() {
  var filterUrl;
  var finalFilterUrl;
  var TextValue = searchInput.value;
  filters.forEach(function (filter) {
    if (filter.checked) {
      var filterValue = filter.value;
      filterUrl = (0, _urlFilterMaker.default)(filterValue);
      finalFilterUrl = "".concat(filterUrl).concat(TextValue);
      return finalFilterUrl;
    }

    render(finalFilterUrl);
  });
});
clearBtn.addEventListener("click", function cleanFilter() {
  searchInput.value = "";
  filters.forEach(function (filter) {
    if (filter.checked) {
      filter.checked = false;
    }
  });
  render();
});

function render(filterUrl) {
  (0, _getData.default)(filterUrl).then(function (data) {
    container.innerHTML = (0, _Card.default)(data).join(" ");
    var countryCard = container.querySelectorAll("div.main-card");
    countryCard.forEach(function (card) {
      card.addEventListener("click", function (e) {
        var countryName = e.currentTarget.children[0].innerText;
        var countryData = data.find(function (item) {
          return item.name === countryName;
        });
        var bodyModal = (0, _modal.default)(countryData);
        console.log(bodyModal);
        modalContainer.innerHTML = bodyModal;
        modalContainer.classList.add("visible");
        var closeModal = modalContainer.querySelector("button.close-modal");
        closeModal.addEventListener("click", function () {
          modalContainer.classList.remove("visible");
        });
      });
    });
  }).catch(function (e) {
    return console.log(e);
  });
}
},{"./template/Card":"../src/template/Card.js","./utils/filter.js":"../src/utils/filter.js","./utils/getData.js":"../src/utils/getData.js","./utils/urlFilterMaker.js":"../src/utils/urlFilterMaker.js","./template/modal.js":"../src/template/modal.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61296" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map