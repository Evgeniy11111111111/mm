"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var swiper = null;
function initSwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
  swiper = new Swiper(".why__swiper", {
    spaceBetween: 10,
    autoHeight: false,
    slidesPerView: "auto",
    centeredSlides: true,
    watchSlidesProgress: true,
    on: {
      setTranslate: function setTranslate(swiper) {
        var isMobile = window.innerWidth < 768;
        swiper.slides.forEach(function (slide) {
          var slideProgress = slide.progress; // расстояние от центра
          var translateY = isMobile ? -10 * (1 - Math.abs(slideProgress)) : 0; // поднимаем ближние
          slide.style.transform = "translateY(".concat(translateY, "px)");
        });
      },
      setTransition: function setTransition(swiper, transition) {
        swiper.slides.forEach(function (slide) {
          slide.style.transition = "".concat(transition, "ms transform ease");
        });
      }
    },
    scrollbar: {
      el: ".why__scrollbar",
      draggable: true
    },
    pagination: {
      el: ".why__progressbar",
      type: "progressbar"
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        centeredSlides: false
      }
    }
  });
}
var RadialController = function () {
  var instance = null;
  return {
    init: function init(options) {
      if (instance) instance.stop();
      instance = initRadial(options);
    },
    stop: function stop() {
      if (instance) instance.stop();
      instance = null;
    },
    refresh: function refresh(options) {
      if (instance) instance.stop();
      instance = initRadial(options);
    }
  };
}();
function render() {
  return _render.apply(this, arguments);
}
function _render() {
  _render = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var lang, translation, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          loadState.value = true;
          lang = localStorage.getItem("lang");
          _context.n = 1;
          return translationFetch(lang !== null && lang !== void 0 ? lang : "en", "landing");
        case 1:
          translation = _context.v;
          translation.data.elements.forEach(function (item) {
            if (item.id === "soon") {
              changeComingSoon(item);
            }
            if (item.id === 'countries') {
              createSelectCountry(item.elements);
            }
            if (item.id === 'languages') {
              createSelectLang(item.elements, lang);
              createCheckboxLang(item.elements, lang);
            }
            if (item.id === "desktop-bottom-banner") {
              createTextList(item.elements);
            }
            if (item.id === "slider-why") {
              createSlide(item);
            }
            //
            if (item.id === 'attention') {
              attentionChangeText(item);
            }
            if (item.id === "faq") {
              faqCreate(item);
            }
            //
            if (item.id === "footer-info") {
              footerInfo(item);
            }
            if (item.id === "cookies") {
              cookieChanges(item);
            }
            if (item.id === "settings") {
              availabilityChanges(item);
            }
            if (item.id === "mobile-faq") {
              faqMobile(item);
            }
            if (item.id === "mobile-menu") {
              mobileMenuChange(item);
            }
            if (item.id === "desktop-top-banner") {
              heroBannerTop(item);
            }
            if (item.id === "what-included") {
              whatIncluded(item);
            }
            if (item.id === "our-laboratory-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
          });
          if (lang === "he" || lang === "ar") {
            document.documentElement.classList.add('rtl');
          } else {
            document.documentElement.classList.remove('rtl');
          }
          reinitTooltips();
          RadialController.refresh();
          initSwiper();
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error(_t);
        case 3:
          _context.p = 3;
          loadState.value = false;
          return _context.f(3);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2, 3, 4]]);
  }));
  return _render.apply(this, arguments);
}
function init() {
  return _init.apply(this, arguments);
}
function _init() {
  _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return render();
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}
"use strict";

var accWrapper = document.querySelector('.js-acc-wrapper'); // контейнер всех аккордеонов

if (accWrapper) {
  accWrapper.addEventListener('click', function (e) {
    var btn = e.target.closest('.js-acc-btn');
    if (!btn) return;
    var item = btn.closest('.js-acc');
    if (!item) return;
    var content = item.querySelector('.js-acc-body');
    if (!content) return; // защита от ошибки

    var isOpen = item.classList.contains('is-open');
    if (isOpen) {
      content.style.maxHeight = "0";
      item.classList.remove('is-open');
      return;
    }
    document.querySelectorAll('.js-acc').forEach(function (elem) {
      var contentAcc = elem.querySelector('.js-acc-body');
      if (contentAcc) {
        contentAcc.style.maxHeight = "0";
      }
      elem.classList.remove("is-open");
    });

    // открываем текущий
    content.style.maxHeight = content.scrollHeight + "px";
    item.classList.add('is-open');
  });
  window.addEventListener("resize", getHeightContentAcc);
}
function getHeightContentAcc() {
  document.querySelectorAll('.js-acc').forEach(function (item) {
    if (item.classList.contains('is-open')) {
      var content = item.querySelector(".js-acc-body");
      if (content) {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });
}
"use strict";

function activeLink(link, timeoutClass, timeoutHref) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var href = link.getAttribute('href');
    link.classList.add('active');
    setTimeout(function () {
      return link.classList.remove('active');
    }, timeoutClass);
    setTimeout(function () {
      return window.location = href;
    }, timeoutHref);
  });
}
function activeBtn(btn, timeoutClass) {
  btn.addEventListener("click", function () {
    btn.classList.add("active");
    setTimeout(function () {
      return btn.classList.remove('active');
    }, timeoutClass);
  });
}
"use strict";

var authTabs = document.querySelectorAll("[data-auth-current]");
var authBtn = document.querySelectorAll("[data-auth-target]");
if (authTabs.length > 0 && authBtn.length > 0) {
  authBtn.forEach(function (elem) {
    elem.addEventListener("click", function () {
      var id = elem.dataset.authTarget;
      authTabs.forEach(function (authTab) {
        console.log(id);
        if (authTab.dataset.authCurrent === id) {
          authTabs.forEach(function (item) {
            item.classList.remove("active");
          });
          authBtn.forEach(function (item) {
            item.classList.remove("active");
          });
          authTab.classList.add("active");
          elem.classList.add("active");
        }
      });
    });
  });
}
"use strict";

var disability = document.querySelector(".header__disability");
var availability = document.querySelector(".header__availability");
var availabilityClose = document.querySelector(".header__availability_close");
var veil = document.querySelector(".veil");
var veilOverlay = document.querySelector(".veil-overlay");
if (disability) {
  disability.addEventListener("click", function () {
    availability.classList.add("active");
    disability.classList.add("active");
    document.body.classList.add("lock");
    veil.classList.add("active");
    veilOverlay.classList.add("active");
  });
}
if (availabilityClose) {
  availabilityClose.addEventListener("click", function () {
    availability.classList.remove("active");
    disability.classList.remove("active");
    document.body.classList.remove("lock");
    veil.classList.remove("active");
    veilOverlay.classList.remove("active");
  });
}
if (availability) {
  availability.addEventListener("click", function (e) {
    // Проверяем, что кликнули именно в .header__availability, а не внутрь .header__availability_wrap
    if (!e.target.closest('.header__availability_wrap')) {
      availability.classList.remove("active");
      disability.classList.remove("active");
      document.body.classList.add("lock");
      veil.classList.remove("active");
      veilOverlay.classList.remove("active");
    }
  });
}
var fontRange = document.getElementById("font-range");
var contrastRange = document.getElementById("contrast");
var spacingRange = document.getElementById("letter-spacing");
var phoneImg = document.querySelector(".hero__mob_block_phone");
var leading = document.querySelectorAll('input[name="lineHeight"]');
var themeInputs = document.querySelectorAll('input[name="theme"]');
function saveSetting(key, value) {
  localStorage.setItem(key, value);
}
function loadSetting(key) {
  return localStorage.getItem(key);
}
function updateRangeProgress(input) {
  var fill = input === null || input === void 0 ? void 0 : input.previousElementSibling;
  var min = +input.min;
  var max = +input.max;
  var value = +input.value;
  var percent = (value - min) / (max - min) * 100;
  if (fill) {
    fill.style.width = "".concat(percent, "%");
  }
  var labels = input.parentElement.querySelectorAll(".input-range_labels span");
  if (labels) {
    var step = (max - min) / (labels.length - 1);
    labels.forEach(function (span, index) {
      var threshold = min + index * step;
      if (value >= threshold) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    });
  }
}
function togglePhoneImgVisibility(block, fontSize) {
  if (window.innerWidth <= 475 && fontSize > 16) {
    block.style.display = "none";
  } else {
    block.style.display = "";
  }
}
function applyTheme(value) {
  if (value === "dark") {
    document.documentElement.classList.add("dark");
  } else if (value === "light") {
    document.documentElement.classList.remove("dark");
  } else if (value === "duo") {
    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}
function applyLeading(value) {
  if (value === "medium") {
    document.documentElement.classList.remove("lineHeightBig");
    document.documentElement.classList.add("lineHeightMedium");
  } else if (value === "big") {
    document.documentElement.classList.add("lineHeightBig");
    document.documentElement.classList.remove("lineHeightMedium");
  } else {
    document.documentElement.classList.remove("lineHeightBig");
    document.documentElement.classList.remove("lineHeightMedium");
  }
  getHeightContentAcc();
}
function restoreSettings() {
  // FONT
  var savedFont = loadSetting("font-size");
  if (fontRange) {
    if (savedFont !== null) {
      fontRange.value = savedFont;
      document.documentElement.style.fontSize = savedFont === "16" ? "" : "".concat(savedFont, "px");
      if (phoneImg) togglePhoneImgVisibility(phoneImg, savedFont);
    } else {
      fontRange.value = "16"; // дефолт
    }
    updateRangeProgress(fontRange);
  }

  // CONTRAST
  var contrastClasses = ["contrast-1", "contrast-2", "contrast-4"];
  var savedContrast = loadSetting("contrast");
  if (contrastRange) {
    if (savedContrast !== null) {
      var _document$documentEle;
      contrastRange.value = savedContrast;
      (_document$documentEle = document.documentElement.classList).remove.apply(_document$documentEle, contrastClasses);
      if (savedContrast !== "3") {
        document.documentElement.classList.add("contrast-".concat(savedContrast));
      }
    } else {
      contrastRange.value = "3"; // дефолт
    }
    updateRangeProgress(contrastRange);
  }

  // SPACING
  var savedSpacing = loadSetting("letter-spacing");
  if (spacingRange) {
    if (savedSpacing !== null) {
      spacingRange.value = savedSpacing;
      if (savedSpacing === "0") {
        document.documentElement.style.removeProperty("letter-spacing");
      } else {
        document.documentElement.style.letterSpacing = "".concat(Number(savedSpacing), "px");
      }
    } else {
      spacingRange.value = "0"; // дефолт
    }
    updateRangeProgress(spacingRange);
  }

  // THEME
  var savedTheme = loadSetting("theme");
  if (savedTheme && themeInputs) {
    applyTheme(savedTheme);
    var themeInput = document.querySelector("input[name=\"theme\"][value=\"".concat(savedTheme, "\"]"));
    if (themeInput) themeInput.checked = true;
  }
  var savedLeading = loadSetting("leading");
  if (savedLeading && leading) {
    applyLeading(savedLeading);
    var leadingInput = document.querySelector("input[name=\"lineHeight\"][value=\"".concat(savedLeading, "\"]"));
    if (leadingInput) leadingInput.checked = true;
  }
  if (window.innerWidth > 768) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("lineHeightBig");
    document.documentElement.classList.remove("lineHeightMedium");
    document.documentElement.style.removeProperty("letter-spacing");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  restoreSettings();
  if (fontRange) {
    fontRange.addEventListener("input", function (e) {
      var value = e.target.value;
      saveSetting("font-size", value);
      document.documentElement.style.fontSize = value === "16" ? "" : "".concat(value, "px");
      updateRangeProgress(e.target);
      getHeightContentAcc();
      if (phoneImg) togglePhoneImgVisibility(phoneImg, value);
    });
  }

  // CONTRAST
  if (contrastRange) {
    var setContrastMode = function setContrastMode(value) {
      var _document$documentEle2;
      (_document$documentEle2 = document.documentElement.classList).remove.apply(_document$documentEle2, contrastClasses);
      if (value !== "3") {
        document.documentElement.classList.add("contrast-".concat(value));
      }
    };
    var contrastClasses = ["contrast-1", "contrast-2", "contrast-4"];
    contrastRange.addEventListener("input", function (e) {
      var value = e.target.value;
      saveSetting("contrast", value);
      setContrastMode(value);
      updateRangeProgress(e.target);
    });
  }

  // SPACING
  if (spacingRange) {
    spacingRange.addEventListener("input", function (e) {
      var value = e.target.value;
      saveSetting("letter-spacing", value);
      if (value === "0") {
        document.documentElement.style.removeProperty("letter-spacing");
      } else {
        document.documentElement.style.letterSpacing = "".concat(Number(value), "px");
      }
      updateRangeProgress(e.target);
      getHeightContentAcc();
    });
  }

  // THEME
  if (themeInputs) {
    themeInputs.forEach(function (input) {
      input.addEventListener("change", function (e) {
        var value = e.target.value;
        saveSetting("theme", value);
        applyTheme(value);
      });
    });
  }
  if (leading) {
    leading.forEach(function (item) {
      item.addEventListener("change", function () {
        saveSetting("leading", item.value);
        applyLeading(item.value);
      });
    });
  }
});
window.addEventListener("pageshow", restoreSettings);
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("lineHeightBig");
    document.documentElement.classList.remove("lineHeightMedium");
    document.documentElement.style.removeProperty("letter-spacing");
  } else {
    var theme = document.querySelector('input[name="theme"]:checked');
    applyTheme(theme.value);
    var lh = document.querySelector('input[name="lineHeight"]:checked');
    applyLeading(lh.value);
    var spacing = document.getElementById("letter-spacing");
    document.documentElement.style.letterSpacing = "".concat(Number(spacing.value) * 2, "px");
  }
  var inputFont = document.getElementById("font-range");
  if (phoneImg) {
    togglePhoneImgVisibility(phoneImg, inputFont.value);
  }
});
var clearAvailability = document.querySelector(".availability-btn");
if (clearAvailability) {
  clearAvailability.addEventListener("click", function () {
    document.documentElement.classList.remove("dark", "lineHeightBig", "lineHeightMedium", "contrast-1", "contrast-2", "contrast-4");
    document.documentElement.style.removeProperty("letter-spacing");
    document.documentElement.style.removeProperty("font-size");
    localStorage.removeItem("font-size");
    localStorage.removeItem("contrast");
    localStorage.removeItem("letter-spacing");
    localStorage.removeItem("theme");
    localStorage.removeItem("leading");
    if (fontRange) {
      fontRange.value = 16; // дефолт
      updateRangeProgress(fontRange);
      if (phoneImg) togglePhoneImgVisibility(phoneImg, 16);
    }

    // CONTRAST
    if (contrastRange) {
      contrastRange.value = 3; // дефолт
      updateRangeProgress(contrastRange);
    }

    // SPACING
    if (spacingRange) {
      spacingRange.value = 0; // дефолт
      updateRangeProgress(spacingRange);
    }

    // THEME
    themeInputs.forEach(function (input) {
      input.checked = input.value === "light";
    });
    applyTheme("light");

    // LEADING
    leading.forEach(function (item) {
      item.checked = item.value === "normal";
    });
    applyLeading("normal");
  });
}
"use strict";

var btnBack = document.querySelector(".btn-back");
if (btnBack) {
  btnBack.addEventListener("click", function () {
    btnBack.classList.add("active");
    setTimeout(function () {
      return btnBack.classList.remove('active');
    }, 300);
    setTimeout(function () {
      window.history.back();
    }, 300);
  });
}
var backBtnAuth = document.querySelector(".header-auth__back");
if (backBtnAuth) {
  backBtnAuth.addEventListener("click", function () {
    console.log(1);
    window.history.back();
  });
}
"use strict";

var burgerBtn = document.querySelector(".header__menu_btn");
var burgerMenu = document.querySelector(".js-burger-menu");
if (burgerBtn && burgerMenu) {
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    if (burgerBtn.classList.contains("active")) {
      document.body.classList.add("lock");
      veil.classList.add("active");
      veilOverlay.classList.add("active");
    } else {
      document.body.classList.remove("lock");
      veil.classList.remove("active");
      veilOverlay.classList.remove("active");
    }
  });
  window.addEventListener("resize", function () {
    if (burgerBtn.classList.contains("active") && window.innerWidth > 768) {
      burgerBtn.classList.remove("active");
      burgerMenu.classList.remove("active");
      document.body.classList.remove("lock");
      veil.classList.remove("active");
      veilOverlay.classList.remove("active");
    }
  });
}
"use strict";

var linksPolitics = ["privacy.html", "accessibility.html", "cookie.html"];
function createChangeInfo(array) {
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    parent: body,
    text: array.label,
    selector: "h1"
  });
  var list = body.querySelector(".info__list");
  list.innerHTML = "";
  array.elements.forEach(function (el, index) {
    var link = createElement({
      As: "a",
      className: ["link-item", "d-flex", "align-items-start", "justify-content-between", "txt-p1"]
    });
    link.dataset.loading = "load";
    link.href = linksPolitics[index];
    var text = createElement({
      As: "span",
      text: el.label
    });
    var svg = createElement({
      As: "span",
      className: "link-item__svg",
      text: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.20938 14.7698C6.92228 14.4713 6.93159 13.9965 7.23017 13.7094L11.1679 10L7.23017 6.29062C6.93159 6.00353 6.92228 5.52875 7.20938 5.23017C7.49647 4.93159 7.97125 4.92228 8.26983 5.20937L12.7698 9.45937C12.9169 9.60078 13 9.79599 13 10C13 10.204 12.9169 10.3992 12.7698 10.5406L8.26983 14.7906C7.97125 15.0777 7.49647 15.0684 7.20938 14.7698Z\" fill=\"var(--color-secondary)\"></path>\n             </svg>"
    });
    link.append(text, svg);
    list.append(link);
  });
}
"use strict";

function changeSupportBlue(array) {
  var _array$elements;
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    parent: body,
    selector: "h1",
    text: array.label
  });
  findReplaceText({
    parent: body,
    selector: "a .support__link_txt",
    text: (_array$elements = array.elements) === null || _array$elements === void 0 || (_array$elements = _array$elements[0]) === null || _array$elements === void 0 ? void 0 : _array$elements.label
  });
}
function faqSupport(array) {
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    parent: body,
    selector: "h2",
    text: array.label
  });
  var list = body.querySelector(".support__bottom_list");
  list.innerHTML = "";
  array.elements.forEach(function (elem) {
    var _elem$elements, _elem$elements2;
    var item = createElement({
      As: "div",
      className: ["support__item", "js-acc", "placeholder"]
    });
    item.dataset.loading = "load";
    var head = createElement({
      As: "div",
      className: ["support__item_h", "d-flex", "align-items-start", "justify-content-between", "js-acc-btn"]
    });
    var title = createElement({
      As: "h3",
      className: ["txt-h2", "support__item_itle"],
      text: elem === null || elem === void 0 || (_elem$elements = elem.elements) === null || _elem$elements === void 0 || (_elem$elements = _elem$elements[0]) === null || _elem$elements === void 0 ? void 0 : _elem$elements.label
    });
    var markdown = createElement({
      As: "span",
      className: "support__item_md",
      text: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.23017 7.20938C5.52875 6.92228 6.00353 6.93159 6.29063 7.23017L10 11.1679L13.7094 7.23017C13.9965 6.93159 14.4713 6.92228 14.7698 7.20938C15.0684 7.49647 15.0777 7.97125 14.7906 8.26983L10.5406 12.7698C10.3992 12.9169 10.204 13 10 13C9.79599 13 9.60078 12.9169 9.45938 12.7698L5.20938 8.26983C4.92228 7.97125 4.93159 7.49647 5.23017 7.20938Z\" fill=\"var(--color-black)\"></path>\n             </svg>"
    });
    var bodyWrap = createElement({
      As: "div",
      className: ["support__item_b_wrap", "js-acc-body"]
    });
    var body = createElement({
      As: "p",
      className: "support__item_b",
      text: elem === null || elem === void 0 || (_elem$elements2 = elem.elements) === null || _elem$elements2 === void 0 || (_elem$elements2 = _elem$elements2[1]) === null || _elem$elements2 === void 0 ? void 0 : _elem$elements2.label
    });
    head.append(title, markdown);
    bodyWrap.append(body);
    item.append(head, bodyWrap);
    list.append(item);
  });
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function createElement(_ref) {
  var As = _ref.As,
    className = _ref.className,
    text = _ref.text,
    img = _ref.img;
  var element = document.createElement(As);
  if (Array.isArray(className)) {
    var _element$classList;
    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(className));
  } else if (typeof className === "string") {
    element.classList.add(className);
  }
  if (!img) {
    element.innerHTML = text !== null && text !== void 0 ? text : "";
  } else {
    element.src = img;
    element.alt = text || "";
  }
  return element;
}
function findReplaceText(_ref2) {
  var selector = _ref2.selector,
    text = _ref2.text,
    parent = _ref2.parent,
    img = _ref2.img;
  var element = (parent || document).querySelector(selector);
  if (!element) return;
  if (img) {
    element.src = img;
  } else {
    element.innerHTML = text || "";
  }
}
function createSelectCountry(array) {
  var body = document.querySelector(".header__country_body");
  var header = document.querySelector(".header__country_item");
  body.innerHTML = "";
  header.innerHTML = "";
  array.forEach(function (element) {
    var continent = createElement({
      As: 'div',
      className: ["header__country_body_continent", "d-flex", "flex-column"]
    });
    var continentText = createElement({
      As: 'div',
      className: ['txt-btn'],
      text: element.label
    });
    continent.append(continentText);
    element.elements.forEach(function (item) {
      var _item$elements;
      var itemCountry = createElement({
        As: 'div',
        className: ["header__country_item", "d-flex", "align-items-center", "header__country_body_item", "js-dropdown-item"]
      });
      itemCountry.tabIndex = -1;
      var itemImgWrapper = createElement({
        As: "span",
        className: "header__country_item_img"
      });
      var itemImg = createElement({
        As: "img",
        img: item === null || item === void 0 || (_item$elements = item.elements) === null || _item$elements === void 0 || (_item$elements = _item$elements[0]) === null || _item$elements === void 0 ? void 0 : _item$elements.src
      });
      itemImgWrapper.append(itemImg);
      var itemText = createElement({
        As: "span",
        className: ["header__country_item_name", "js-dropdown-item-name", "txt-p1", (item === null || item === void 0 ? void 0 : item.is_checked) === true ? "isSelected" : null],
        text: item.label
      });
      itemCountry.append(itemImgWrapper, itemText);
      continent.append(itemCountry);
      if (item !== null && item !== void 0 && item.is_checked) {
        var _item$elements2;
        var headerImgWrapper = createElement({
          As: "span",
          className: "header__country_item_img"
        });
        var headerImg = createElement({
          As: "img",
          img: item === null || item === void 0 || (_item$elements2 = item.elements) === null || _item$elements2 === void 0 || (_item$elements2 = _item$elements2[0]) === null || _item$elements2 === void 0 ? void 0 : _item$elements2.src
        });
        var headerText = createElement({
          As: "span",
          className: ["header__country_item_name", "js-dropdown-item-name", "txt-p1", "isSelected"],
          text: item.label
        });
        var markdown = createElement({
          As: "span",
          className: ["header__country_item_markdown"],
          text: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.23017 7.20938C5.52875 6.92228 6.00353 6.93159 6.29063 7.23017L10 11.1679L13.7094 7.23017C13.9965 6.93159 14.4713 6.92228 14.7698 7.20938C15.0684 7.49647 15.0777 7.97125 14.7906 8.26983L10.5406 12.7698C10.3992 12.9169 10.204 13 10 13C9.79599 13 9.60078 12.9169 9.45938 12.7698L5.20938 8.26983C4.92228 7.97125 4.93159 7.49647 5.23017 7.20938Z\" fill=\"#3B5464\" />\n          </svg>"
        });
        headerImgWrapper.append(headerImg);
        header.append(headerImgWrapper, headerText, markdown);
      }
    });
    body.append(continent);
  });
}
function createSelectLang(array, lang) {
  var body = document.querySelector(".header__lang_body");
  var header = document.querySelector(".header__lang_head");
  body.innerHTML = '';
  while (header.children.length > 1) {
    header.removeChild(header.lastChild);
  }
  array.forEach(function (element) {
    var item = createElement({
      As: "div",
      className: ["header__lang_body-item", "js-dropdown-item"]
    });
    item.tabIndex = -1;
    var activeItemClass = element.value === lang ? "isSelected" : null;
    var itemName = createElement({
      As: "div",
      className: ["js-dropdown-item-name", "txt-p1", "header__lang_body_item_name", activeItemClass],
      text: element.label
    });
    itemName.dataset.lang = element.value;
    itemName.dataset["short"] = element.data_attribute.short_label;
    item.append(itemName);
    body.append(item);
    if (element.value === lang) {
      var headerName = createElement({
        As: "span",
        className: ["header__lang_head_txt", "txt-p1", "js-dropdown-item-name"],
        text: element.data_attribute.short_label
      });
      var markdown = createElement({
        As: "span",
        className: "header__lang_head_markdown",
        text: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.23017 7.20938C5.52875 6.92228 6.00353 6.93159 6.29063 7.23017L10 11.1679L13.7094 7.23017C13.9965 6.93159 14.4713 6.92228 14.7698 7.20938C15.0684 7.49647 15.0777 7.97125 14.7906 8.26983L10.5406 12.7698C10.3992 12.9169 10.204 13 10 13C9.79599 13 9.60078 12.9169 9.45938 12.7698L5.20938 8.26983C4.92228 7.97125 4.93159 7.49647 5.23017 7.20938Z\" fill=\"#3B5464\"/>\n        </svg>"
      });
      header.append(headerName, markdown);
    }
  });
}
function createCheckboxLang(array, lang) {
  var body = document.querySelector(".header__mob_lang");
  body.innerHTML = '';
  array.forEach(function (element) {
    var label = createElement({
      As: 'label',
      className: "header__mob_lang_label"
    });
    var input = createElement({
      As: "input",
      className: "header__mob_lang_input"
    });
    input.type = "radio";
    input.name = "langMob";
    input.value = element.value;
    if (input.value === lang) {
      input.checked = true;
    }
    var text = createElement({
      As: "span",
      className: ["header__mob_lang_txt", "txt-p1"],
      text: element.label
    });
    label.append(input, text);
    body.append(label);
  });
}
function heroBannerTop(array) {
  var body = document.querySelector(".".concat(array.id));
  if (!body) return;
  var classListSlide = ["hero__slide--pre-left", "hero__slide--left", "hero__slide--main", "hero__slide--right", "hero__slide--pre-right"];
  array.elements.forEach(function (element) {
    if (element.id === "desktop-top-banner-image-slider") {
      var list = body.querySelector(".".concat(element.id));
      list.innerHTML = "";
      console.log(list);
      element.elements.forEach(function (el, index) {
        var slide = createElement({
          As: "div",
          className: ["hero__slide", index < 5 ? classListSlide[index] : ""]
        });
        var img = createElement({
          As: "img",
          className: "hero__swiper_item",
          img: el.src
        });
        slide.append(img);
        list.append(slide);
      });
    } else if (array.type === "Div") {
      var item = body.querySelector(".".concat(element.id));
      if (!item) return;
      if (element.type === "Div" || element.type === "Headline" || element.type === "Button") {
        item.innerHTML = element.label;
      }
    }
  });
}
function createTextList(array) {
  var body = document.querySelector(".hero__block_bottom");
  body.innerHTML = '';
  array.forEach(function (element) {
    var _element$elements, _element$elements2;
    var item = createElement({
      As: "div",
      className: ["hero__item", "flex-column", "flex-md-row"]
    });
    var iconWrapper = createElement({
      As: "div",
      className: ["hero__item_svg", "d-flex", "align-items-center", "justify-content-center", "placeholder-glow"]
    });
    var icon = createElement({
      As: "img"
    });
    icon.src = element === null || element === void 0 || (_element$elements = element.elements) === null || _element$elements === void 0 || (_element$elements = _element$elements[0]) === null || _element$elements === void 0 ? void 0 : _element$elements.src;
    iconWrapper.append(icon);
    var left = createElement({
      As: "div",
      className: "hero__item_right"
    });
    var title = createElement({
      As: "h3",
      className: ["hero__item_title", "txt-h2"],
      text: element === null || element === void 0 ? void 0 : element.label
    });
    var paragraph = createElement({
      As: "p",
      className: ["hero__item_text", "txt-p1"],
      text: element === null || element === void 0 || (_element$elements2 = element.elements) === null || _element$elements2 === void 0 || (_element$elements2 = _element$elements2[1]) === null || _element$elements2 === void 0 ? void 0 : _element$elements2.text
    });
    left.append(title, paragraph);
    item.append(iconWrapper, left);
    body.append(item);
  });
}
function attentionChangeText(array) {
  var body = document.querySelector(".".concat(array.id));
  if (!body) return;
  array.elements.forEach(function (element, index) {
    if (element.id === "qr-info") {
      findReplaceText({
        selector: ".".concat(element.id),
        text: element.label
      });
    }
    if (element.type === "Div") {
      var item = body.querySelector(".".concat(element.type, "-").concat(array.id, "-").concat(index));
      console.log("".concat(element.type, "-").concat(array.id, "-").concat(index));
      if (!item) return;
      element.elements.forEach(function (el) {
        var itemChildren = item.querySelector(".".concat(element.type, "-").concat(array.id, "-").concat(index, "--").concat(el.type));
        if (itemChildren) {
          if (el.type === "Image") {
            itemChildren.src = el.src;
          } else {
            itemChildren.innerHTML = el.text;
          }
        }
      });
    }
    if (element.type === "Headline" || element.type === "Button") {
      var _item = body.querySelector(".".concat(element.type, "-").concat(array.id));
      if (!_item) return;
      _item.innerHTML = element.label;
    }
  });
}
function createItemMobileInfo(svg, title, text) {
  var item = createElement({
    As: "div",
    className: "what__item_i"
  });
  var head = createElement({
    As: "div",
    className: ["what__item_h", "d-flex", "align-items-center"]
  });
  var iconWrapper = createElement({
    As: "span",
    className: "what__item_svg",
    text: svg
  });
  var headline = createElement({
    As: "h3",
    className: ["what__item_t", "txt-btn"],
    text: title
  });
  var paragraph = createElement({
    As: "p",
    className: ["what__item_p", "txt-p2"],
    text: text
  });
  head.append(iconWrapper, headline);
  item.append(head, paragraph);
  return item;
}
function mobileInfo(array) {
  var _array$elements2, _array$elements3, _array$elements5;
  console.log(array);
  var body = document.querySelector(".".concat(array.id));
  var title = body.querySelector("h2");
  var left = body.querySelector(".what__item-1");
  var right = body.querySelector(".what__item-2");
  var img = body.querySelector(".what__img");
  var btnIphone = body.querySelector(".what-iphone");
  var btnAndroid = body.querySelector(".what-android");
  if (title) {
    var _array$elements;
    title.innerHTML = (_array$elements = array.elements) === null || _array$elements === void 0 || (_array$elements = _array$elements[0]) === null || _array$elements === void 0 ? void 0 : _array$elements.label;
  }
  if (left && ((_array$elements2 = array.elements) === null || _array$elements2 === void 0 || (_array$elements2 = _array$elements2[1]) === null || _array$elements2 === void 0 ? void 0 : _array$elements2.elements.length) > 0) {
    left.innerHTML = '';
    array.elements[1].elements.forEach(function (element) {
      var item = createItemMobileInfo(element.elements[0].content, element.label, element.elements[1].text);
      left.append(item);
    });
  }
  if (right && ((_array$elements3 = array.elements) === null || _array$elements3 === void 0 || (_array$elements3 = _array$elements3[3]) === null || _array$elements3 === void 0 ? void 0 : _array$elements3.elements.length) > 0) {
    right.innerHTML = '';
    array.elements[3].elements.forEach(function (element) {
      var item = createItemMobileInfo(element.elements[0].content, element.label, element.elements[1].text);
      right.append(item);
    });
  }
  if (img) {
    var _array$elements4;
    img.src = (_array$elements4 = array.elements) === null || _array$elements4 === void 0 || (_array$elements4 = _array$elements4[2]) === null || _array$elements4 === void 0 ? void 0 : _array$elements4.src;
  }
  (_array$elements5 = array.elements) === null || _array$elements5 === void 0 || (_array$elements5 = _array$elements5[4]) === null || _array$elements5 === void 0 || _array$elements5.elements.forEach(function (element) {
    if (element.id === 'iphone') btnIphone.innerHTML = element.label;
    if (element.id === 'android') btnAndroid.innerHTML = element.label;
  });
}
function createSlide(array) {
  var body = document.querySelector(".why__swiper-wrapper");
  var headline = document.querySelector(".why__title");
  body.innerHTML = '';
  headline.innerHTML = array.label;
  array.elements.forEach(function (element) {
    var slide = createElement({
      As: "div",
      className: ["swiper-slide", 'why__slide', "d-flex"]
    });
    var item = createElement({
      As: "div",
      className: ["why__item", "d-flex", "flex-column"]
    });
    var svg, title, paragraph;
    element.elements.forEach(function (el) {
      if (el.type === "Image") {
        svg = createElement({
          As: "span",
          className: "why__item_number",
          text: el.content
        });
      }
      if (el.type === "Headline") {
        title = createElement({
          As: "h3",
          className: ["why__item_title", "txt-h2"],
          text: el.label
        });
      }
      if (el.type === "Paragraph") {
        paragraph = createElement({
          As: "p",
          className: ["why_p", "txt-p1"],
          text: el.text
        });
      }
    });
    item.append(svg, title, paragraph);
    slide.append(item);
    body.append(slide);
  });
}
function faqCreate(array) {
  var _array$elements6;
  var body = document.querySelector(".".concat(array.id));
  console.log(body.querySelector(".questions__title"));
  findReplaceText({
    selector: ".questions__title",
    parent: body,
    text: (_array$elements6 = array.elements) === null || _array$elements6 === void 0 || (_array$elements6 = _array$elements6[0]) === null || _array$elements6 === void 0 ? void 0 : _array$elements6.label
  });
  var list = document.querySelector(".questions__list");
  list.innerHTML = "";
  array.elements.forEach(function (element, index) {
    if (index > 0) {
      var _element$elements3;
      var item = createElement({
        As: "div",
        className: ["questions__item", "d-flex", "flex-column"]
      });
      var title = createElement({
        As: "h3",
        className: ["questions__item_title", "txt-h1"],
        text: element.label
      });
      var paragraph = createElement({
        As: "p",
        className: ["questions__item_p", "txt-p1"],
        text: (_element$elements3 = element.elements) === null || _element$elements3 === void 0 || (_element$elements3 = _element$elements3[0]) === null || _element$elements3 === void 0 ? void 0 : _element$elements3.text
      });
      item.append(title, paragraph);
      list.append(item);
    }
  });
}
function footerInfo(array) {
  var links = ["/privacy.html", "accessibility.html", "/cookie.html"];
  var body = document.querySelector(".".concat(array.id));
  body.innerHTML = '';
  array.elements.forEach(function (elem, index) {
    var link = createElement({
      As: 'a',
      className: ["footer__link", "txt-p3"],
      text: elem.label
    });
    link.href = links[index];
    body.append(link);
  });
}
function cookieChanges(array) {
  var _array$elements7, _array$elements8;
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    selector: ".cookie__text",
    parent: body,
    text: array.label
  });
  findReplaceText({
    parent: body,
    selector: ".cookie__link",
    text: (_array$elements7 = array.elements) === null || _array$elements7 === void 0 || (_array$elements7 = _array$elements7[0]) === null || _array$elements7 === void 0 ? void 0 : _array$elements7.label
  });
  findReplaceText({
    parent: body,
    selector: ".cookie__success",
    text: (_array$elements8 = array.elements) === null || _array$elements8 === void 0 || (_array$elements8 = _array$elements8[1]) === null || _array$elements8 === void 0 ? void 0 : _array$elements8.label
  });
}
function availabilityChanges(array) {
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    parent: body,
    selector: "h3",
    text: array.label
  });
  array.elements.forEach(function (element) {
    var _element$text;
    findReplaceText({
      parent: body,
      selector: ".".concat(element.id),
      text: (element === null || element === void 0 || (_element$text = element.text) === null || _element$text === void 0 ? void 0 : _element$text.length) > 0 ? element.text : element.label
    });
  });
}
function exploreChanges(array) {
  var body = document.querySelector(".".concat(array.id));
  var list = body.querySelector(".explore__list");
  findReplaceText({
    selector: "h2",
    parent: body,
    text: array.label
  });
  list.innerHTML = "";
  array.elements.forEach(function (element) {
    var acc = createElement({
      As: "div",
      className: ["explore__item", "js-acc"]
    });
    var head = createElement({
      As: "div",
      className: ["explore__item_h", "d-flex", "align-items-center", "justify-content-between", "js-acc-btn"]
    });
    var title = createElement({
      As: "h3",
      className: ["txt-h2", "explore__item_title"],
      text: element.label
    });
    var markdown = createElement({
      As: "span",
      className: "explore__item_md",
      text: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.23017 7.20938C5.52875 6.92228 6.00353 6.93159 6.29063 7.23017L10 11.1679L13.7094 7.23017C13.9965 6.93159 14.4713 6.92228 14.7698 7.20938C15.0684 7.49647 15.0777 7.97125 14.7906 8.26983L10.5406 12.7698C10.3992 12.9169 10.204 13 10 13C9.79599 13 9.60078 12.9169 9.45938 12.7698L5.20938 8.26983C4.92228 7.97125 4.93159 7.49647 5.23017 7.20938Z\" fill=\"var(--color-black)\"></path>\n             </svg>"
    });
    var accBodyWrap = createElement({
      As: "div",
      className: ["explore__item_b_wrap", "js-acc-body"]
    });
    var accBody = createElement({
      As: "div",
      className: ["explore__item_b", "d-flex", "flex-column"]
    });
    head.append(title, markdown);
    accBodyWrap.append(accBody);
    acc.append(head, accBodyWrap);
    element.elements.forEach(function (el) {
      var accItem = createElement({
        As: "div",
        className: ["explore__item_i", "d-flex"]
      });
      var accItemRight = createElement({
        As: "div",
        className: ["explore__item_i_r"]
      });
      var accItemRightHead = createElement({
        As: "div",
        className: ["explore__item_i_r_h", "d-flex", "align-items-center", "justify-content-between"]
      });
      var accItemRightLeft = createElement({
        As: "div",
        className: ["explore__item_i_r_l", "d-flex", "align-items-center"]
      });
      var accItemRightSvg = createElement({
        As: "span",
        className: "explore__item_i_r_h_svg",
        text: el.elements[0].content
      });
      var accItemName = createElement({
        As: "h4",
        className: ["explore__item_i_title", "txt-p1"],
        text: el.label
      });
      var itemChevron = createElement({
        As: "div",
        className: ["explore__item__i_l", "d-flex", "align-items-center"]
      });
      var accItemBody = createElement({
        As: "div",
        className: "explore__item_i_r_b"
      });
      var accItemBodyP = createElement({
        As: "p",
        className: "txt-p2",
        text: el.elements[1].label
      });
      accItemRightLeft.append(accItemRightSvg, accItemName);
      accItemRightHead.append(accItemRightLeft, itemChevron);
      accItemBody.append(accItemBodyP);
      accItemRight.append(accItemRightHead, accItemBody);
      accItem.append(accItemRight);
      accBody.append(accItem);
    });
    list.append(acc);
  });
}
function faqMobile(array) {
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    parent: body,
    selector: "h2",
    text: array.label
  });
  array.elements.forEach(function (el) {
    if (el.type === "Link") {
      findReplaceText({
        parent: body,
        selector: 'a span',
        text: el.label
      });
    } else {
      findReplaceText({
        parent: body,
        selector: 'p',
        text: el.label
      });
    }
  });
}
function mobileMenuChange(array) {
  var body = document.querySelector(".".concat(array.id));
  array.elements.forEach(function (element) {
    if (element.id === "personal-account") {
      findReplaceText({
        parent: body,
        selector: ".".concat(element.id),
        text: element.label
      });
    } else if (element.id === "download-buttons") {
      element.elements.forEach(function (el) {
        findReplaceText({
          parent: document.querySelector(".".concat(element.id)),
          selector: ".".concat(el.id),
          text: el.label
        });
      });
    } else {
      findReplaceText({
        parent: body,
        selector: ".".concat(element.id, " .link-custom__name"),
        text: element.label
      });
    }
  });
}
function sloganChange(array) {
  findReplaceText({
    selector: ".".concat(array.id),
    text: array.label
  });
}
function whatIncluded(array) {
  var body = document.querySelector(".".concat(array.id));
  findReplaceText({
    selector: ".".concat(array.id, " h2"),
    parent: body,
    text: array.label
  });
  array.elements[1].elements.forEach(function (el) {
    var element = document.querySelector("[data-tooltip=\"".concat(el.id, "\"]"));
    if (element) {
      element.setAttribute("title", el.label);
      element.setAttribute("data-bs-original-title", el.label);
    }
  });
}
function changeComingSoon(array) {
  var elements = document.querySelectorAll(".coming-soon");
  elements.forEach(function (el) {
    el.innerHTML = array.label;
  });
}
var tooltipOptions = {
  service: {
    trigger: "manual",
    customClass: "what__tt what__tt_service",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi = defaultConfig.modifiers) === null || _defaultConfig$modifi === void 0 ? void 0 : _defaultConfig$modifi.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }])
      });
    }
  },
  market: {
    trigger: "manual",
    customClass: "what__tt what__tt_market",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi2;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi2 = defaultConfig.modifiers) === null || _defaultConfig$modifi2 === void 0 ? void 0 : _defaultConfig$modifi2.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 20]
          }
        }])
      });
    }
  },
  call: {
    trigger: "manual",
    customClass: "what__tt what__tt_call",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi3;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi3 = defaultConfig.modifiers) === null || _defaultConfig$modifi3 === void 0 ? void 0 : _defaultConfig$modifi3.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }])
      });
    }
  },
  wallet: {
    trigger: "manual",
    customClass: "what__tt what__tt_wallet",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi4;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi4 = defaultConfig.modifiers) === null || _defaultConfig$modifi4 === void 0 ? void 0 : _defaultConfig$modifi4.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 25]
          }
        }])
      });
    }
  },
  house: {
    trigger: "manual",
    customClass: "what__tt what__tt_house",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi5;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi5 = defaultConfig.modifiers) === null || _defaultConfig$modifi5 === void 0 ? void 0 : _defaultConfig$modifi5.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 20]
          }
        }])
      });
    }
  },
  rent: {
    trigger: "manual",
    customClass: "what__tt what__tt_rent",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi6;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi6 = defaultConfig.modifiers) === null || _defaultConfig$modifi6 === void 0 ? void 0 : _defaultConfig$modifi6.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }])
      });
    }
  },
  debt: {
    trigger: "manual",
    customClass: "what__tt what__tt_debt",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi7;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi7 = defaultConfig.modifiers) === null || _defaultConfig$modifi7 === void 0 ? void 0 : _defaultConfig$modifi7.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }])
      });
    }
  },
  marketplaces: {
    trigger: "manual",
    customClass: "what__tt what__tt_marketplaces",
    delay: 600,
    enabled: false,
    popperConfig: function popperConfig(defaultConfig) {
      var _defaultConfig$modifi8;
      return _objectSpread(_objectSpread({}, defaultConfig), {}, {
        modifiers: [].concat(_toConsumableArray((defaultConfig === null || defaultConfig === void 0 || (_defaultConfig$modifi8 = defaultConfig.modifiers) === null || _defaultConfig$modifi8 === void 0 ? void 0 : _defaultConfig$modifi8.filter(function (m) {
          return m.name === 'arrow';
        })) || []), [
        // <— оставляем обработку стрелки
        {
          name: 'eventListeners',
          enabled: false
        }, {
          name: 'preventOverflow',
          enabled: false
        }, {
          name: 'flip',
          enabled: false
        }, {
          name: 'offset',
          options: {
            offset: [0, 10]
          }
        }])
      });
    }
  }
};
function reinitTooltips() {
  var tooltipTriggerList = document.querySelectorAll('[data-tooltip]');

  // Уничтожаем старые тултипы
  tooltipTriggerList.forEach(function (el) {
    var tooltip = bootstrap.Tooltip.getInstance(el);
    if (tooltip) tooltip.dispose();
  });

  // Создаём заново
  tooltipTriggerList.forEach(function (el) {
    if (!bootstrap.Tooltip.getInstance(el)) {
      new bootstrap.Tooltip(el, tooltipOptions[el.dataset.tooltip]);
    }
  });
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Dropdown = /*#__PURE__*/function () {
  function Dropdown(dropdownElement) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var notSelected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, Dropdown);
    this.dropdown = dropdownElement;
    this.dropdownBody = this.dropdown.querySelector(".js-dropdown-body");
    this.dropdownHead = this.dropdown.querySelector(".js-dropdown-head");
    this.currentFocusIndex = -1;
    this.nameSource = options.nameSource || "innerText";
    this.onSelect = options.onSelect || null;
    this.selctedNot = notSelected;
    this.init();
  }
  return _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      this.bindHeader();
      this.bindBody();
      this.bindOutsideClick();
    }
  }, {
    key: "bindOutsideClick",
    value: function bindOutsideClick() {
      var _this = this;
      document.addEventListener("click", function (e) {
        if (!_this.dropdown.contains(e.target)) {
          _this.closeDropdown();
        }
      });
    }
  }, {
    key: "bindHeader",
    value: function bindHeader() {
      var _this2 = this;
      if (!this.dropdownHead) return;
      this.dropdownHead.addEventListener("click", function (e) {
        e.stopPropagation();
        _this2.toggleDropdown();
      });
      this.dropdownHead.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          _this2.toggleDropdown();
        } else if (e.key === "ArrowDown" && _this2.isOpen()) {
          e.preventDefault();
          _this2.focusNextItem();
        }
      });
    }
  }, {
    key: "bindBody",
    value: function bindBody() {
      var _this3 = this;
      if (!this.dropdownBody) return;

      // делегируем клики
      this.dropdownBody.addEventListener("click", function (e) {
        var item = e.target.closest(".js-dropdown-item");
        if (item) {
          _this3.selectCountry(item);
        }
      });

      // делегируем клавиатуру
      this.dropdownBody.addEventListener("keydown", function (e) {
        var item = e.target.closest(".js-dropdown-item");
        if (item && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          _this3.selectCountry(item);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          _this3.focusNextItem();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          _this3.focusPrevItem();
        } else if (e.key === "Escape") {
          e.preventDefault();
          _this3.closeDropdown();
        }
      });
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.dropdown.classList.toggle("active");
      this.dropdownBody.classList.toggle("active");
      if (this.isOpen()) {
        this.currentFocusIndex = -1;
        this.countryItems = Array.from(this.dropdownBody.querySelectorAll(".js-dropdown-item")); // актуальные
      }
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.dropdownBody.classList.contains("active");
    }
  }, {
    key: "selectCountry",
    value: function selectCountry(elem) {
      if (this.isOpen()) {
        var _elem$querySelector;
        this.countryItems = Array.from(this.dropdownBody.querySelectorAll(".js-dropdown-item"));
        this.countryItems.forEach(function (item) {
          var nameEl = item.querySelector('.js-dropdown-item-name');
          if (nameEl) {
            nameEl.classList.remove("isSelected");
          }
        });
        var nameEl = elem.querySelector(".js-dropdown-item-name");
        var selectedName = "";
        if (this.nameSource === "innerText") {
          selectedName = nameEl === null || nameEl === void 0 ? void 0 : nameEl.innerText;
        } else if (nameEl !== null && nameEl !== void 0 && nameEl.dataset) {
          selectedName = nameEl.dataset[this.nameSource];
        }
        var selectedImg = (_elem$querySelector = elem.querySelector("img")) === null || _elem$querySelector === void 0 ? void 0 : _elem$querySelector.getAttribute("src");
        var headImg = this.dropdownHead.querySelector("img");
        var headName = this.dropdownHead.querySelector(".js-dropdown-item-name");
        if (selectedName && headName) {
          headName.innerText = selectedName;
        }
        if (selectedImg && headImg) {
          headImg.setAttribute("src", selectedImg);
        }
        if (nameEl) {
          nameEl.classList.add("isSelected");
        }

        // вызываем колбэк, если есть
        if (typeof this.onSelect === "function") {
          this.onSelect({
            element: elem
          });
        }
        this.closeDropdown();
      }
    }
  }, {
    key: "focusNextItem",
    value: function focusNextItem() {
      if (!this.countryItems) {
        this.countryItems = Array.from(this.dropdownBody.querySelectorAll(".js-dropdown-item"));
      }
      if (this.currentFocusIndex < this.countryItems.length - 1) {
        this.currentFocusIndex++;
        this.countryItems[this.currentFocusIndex].focus();
      }
    }
  }, {
    key: "focusPrevItem",
    value: function focusPrevItem() {
      if (!this.countryItems) {
        this.countryItems = Array.from(this.dropdownBody.querySelectorAll(".js-dropdown-item"));
      }
      if (this.currentFocusIndex > 0) {
        this.currentFocusIndex--;
        this.countryItems[this.currentFocusIndex].focus();
      }
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown() {
      this.dropdown.classList.remove("active");
      this.dropdownBody.classList.remove("active");
      this.currentFocusIndex = -1;
    }
  }]);
}();
function dropdownInit() {
  var dropdowns = document.querySelector(".header__country");
  if (dropdowns) {
    var instance = new Dropdown(dropdowns, {}, true);
    dropdowns.dropdownInstance = instance;
  }
  document.addEventListener("click", function (e) {
    if (dropdowns) {
      var dropdownInstance = dropdowns.dropdownInstance;
      if (!dropdowns.contains(e.target)) {
        dropdownInstance === null || dropdownInstance === void 0 || dropdownInstance.closeDropdown();
      }
    }
  });
  var funcDropdown = function funcDropdown() {};
  if (document.querySelector(".index")) {
    funcDropdown = function funcDropdown() {
      render();
    };
  } else if (document.querySelector(".privacy")) {
    funcDropdown = function funcDropdown() {
      renderPolitics("privacy");
    };
  } else if (document.querySelector(".accessibility")) {
    funcDropdown = function funcDropdown() {
      renderPolitics("accessibility");
    };
  } else if (document.querySelector(".cookiePage")) {
    funcDropdown = function funcDropdown() {
      renderPolitics("cookie");
    };
  } else if (document.querySelector(".support")) {
    funcDropdown = function funcDropdown() {
      renderSupport();
    };
  } else if (document.querySelector(".info")) {
    funcDropdown = function funcDropdown() {
      renderInfo();
    };
  }
  var dropdownLang = document.querySelector(".header__lang");
  if (dropdownLang) {
    var instanceLang = new Dropdown(dropdownLang, {
      nameSource: "short",
      onSelect: function onSelect(_ref) {
        var element = _ref.element;
        saveSetting("lang", element.firstChild.dataset.lang);
        funcDropdown();
      }
    }, true);
    dropdownLang.dropdownInstance = instanceLang;
  }
  document.addEventListener("click", function (e) {
    if (dropdownLang) {
      var dropdownInstance = dropdownLang.dropdownInstance;
      if (!dropdownLang.contains(e.target)) {
        dropdownInstance === null || dropdownInstance === void 0 || dropdownInstance.closeDropdown();
      }
    }
  });
  var checkboxBody = document.querySelector(".header__mob_lang");
  if (checkboxBody) {
    checkboxBody.addEventListener("change", function (e) {
      var input = e.target.closest("input.header__mob_lang_input");
      if (!input) return;

      // помечаем выбранный язык в localStorage
      var lang = input.value;
      saveSetting("lang", lang);

      // при необходимости обновляем интерфейс
      funcDropdown();
    });
  }
  var dropdownAuthLang = document.querySelector(".auth__lang");
  if (dropdownAuthLang) {
    var _instanceLang = new Dropdown(dropdownAuthLang, {
      onSelect: function onSelect(_ref2) {
        var element = _ref2.element;
        console.log(element);
      }
    }, true);
    dropdownAuthLang.dropdownInstance = _instanceLang;
  }
  document.addEventListener("click", function (e) {
    if (dropdownAuthLang) {
      var dropdownInstance = dropdownAuthLang.dropdownInstance;
      if (!dropdownAuthLang.contains(e.target)) {
        dropdownInstance === null || dropdownInstance === void 0 || dropdownInstance.closeDropdown();
      }
    }
  });
}
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function translationFetch(_x, _x2) {
  return _translationFetch.apply(this, arguments);
}
function _translationFetch() {
  _translationFetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(lang, page) {
    var res;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return fetch("https://munigpt.midow.ru/api/page-structure/".concat(page), {
            method: "GET",
            headers: {
              "Accept-Language": lang,
              "Content-Type": "application/json"
            }
          });
        case 1:
          res = _context.v;
          _context.n = 2;
          return res.json();
        case 2:
          return _context.a(2, _context.v);
      }
    }, _callee);
  }));
  return _translationFetch.apply(this, arguments);
}
"use strict";

function getCarouselItems() {
  return document.querySelectorAll('.hero__slide');
}
function getIndex(idx, len) {
  return (idx % len + len) % len;
}
var currentIndex = 2;
var autoplayInterval = null;
var autoplayStartTime = null;
var AUTOPLAY_TIME = 5000; // 5 секунд

function setCircleProgress(percent, circle) {
  if (!circle) return;
  var radius = circle.r.baseVal.value;
  var circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
  circle.style.strokeDashoffset = circumference - percent / 100 * circumference;
}
function updateClasses() {
  var items = getCarouselItems();
  items.forEach(function (item, i) {
    item.className = 'hero__slide';
    if (i === getIndex(currentIndex - 2, items.length)) item.classList.add('hero__slide--pre-left');
    if (i === getIndex(currentIndex - 1, items.length)) item.classList.add('hero__slide--left');
    if (i === getIndex(currentIndex, items.length)) item.classList.add('hero__slide--main');
    if (i === getIndex(currentIndex + 1, items.length)) item.classList.add('hero__slide--right');
    if (i === getIndex(currentIndex + 2, items.length)) item.classList.add('hero__slide--pre-right');
  });
}
function initBtnSwipe() {
  var leftBtn = document.querySelector('.hero__swiper_prev');
  var rightBtn = document.querySelector('.hero__swiper_next');
  var leftBtnMob = document.querySelector(".hero__swiper_mob_prev");
  var rightBtnMob = document.querySelector(".hero__swiper_mob_next");
  rightBtn.addEventListener('click', function () {
    console.log(rightBtn);
    updateSlide("next");
  });
  leftBtn.addEventListener('click', function () {
    return updateSlide("prev");
  });
  rightBtnMob.addEventListener('click', function () {
    return updateSlide("next");
  });
  leftBtnMob.addEventListener('click', function () {
    return updateSlide("prev");
  });
}
function updateSlide(pos) {
  var items = getCarouselItems();
  currentIndex = getIndex(currentIndex + (pos === 'next' ? 1 : -1), items.length);
  updateClasses();
  restartAutoplay();
}
function initSwipe() {
  var swiperWrapper = document.querySelector('.hero__swiper_wrapper');
  var startX = 0;
  var endX = 0;
  var minSwipeDistance = 50;
  swiperWrapper.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, {
    passive: true
  });
  swiperWrapper.addEventListener('touchmove', function (e) {
    endX = e.touches[0].clientX;
  }, {
    passive: true
  });
  swiperWrapper.addEventListener('touchend', function () {
    handleSwipe();
  }, {
    passive: true
  });
  function handleSwipe() {
    var diffX = startX - endX;
    var items = getCarouselItems();
    var isRtl = document.documentElement.classList.contains("rtl");
    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        currentIndex = getIndex(currentIndex + (isRtl ? -1 : 1), items.length);
      } else {
        currentIndex = getIndex(currentIndex + (isRtl ? 1 : -1), items.length);
      }
      updateClasses();
      restartAutoplay();
    }
  }
}

// Автопереключение и прогресс
function startAutoplay() {
  var circle = document.querySelector('.hero__swiper_btn_progress_circle');
  var circleMob = document.querySelector('.hero__swiper_mob_btn_progress_circle');
  autoplayStartTime = Date.now();
  if (autoplayInterval) clearInterval(autoplayInterval);
  autoplayInterval = setInterval(function () {
    var elapsed = Date.now() - autoplayStartTime;
    var percent = Math.min(elapsed / AUTOPLAY_TIME * 100, 100);
    setCircleProgress(percent, circle);
    setCircleProgress(percent, circleMob);
    if (elapsed >= AUTOPLAY_TIME) {
      updateSlide("next"); // запускаем следующий круг
    }
  }, 30); // плавный прогресс, можно сделать 100-200мс
}
function stopAutoplay() {
  if (autoplayInterval) clearInterval(autoplayInterval);
}
function restartAutoplay() {
  var circle = document.querySelector('.hero__swiper_btn_progress_circle');
  var circleMob = document.querySelector('.hero__swiper_mob_btn_progress_circle');
  stopAutoplay();
  setCircleProgress(0, circle);
  setCircleProgress(0, circleMob);
  startAutoplay();
}
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var load = false;
var loadState = {
  get value() {
    return load;
  },
  set value(val) {
    load = val;
    onChangeLoad(val);
  }
};
function onChangeLoad(isLoading) {
  var loadingElements = document.querySelectorAll('[data-loading="load"]');
  var heroSwiper = document.querySelector('.hero__swiper');
  var heroSwiperPlaceholder = document.querySelector('.hero__swiper_placeholder_wrap');
  if (isLoading) {
    if (loadingElements.length > 0) {
      loadingElements.forEach(function (el) {
        el.classList.add("placeholder");
      });
    }
    if (heroSwiper && heroSwiperPlaceholder) {
      heroSwiper.classList.add("d-none");
      heroSwiperPlaceholder.classList.remove("d-none");
    }
  } else {
    if (loadingElements.length > 0) {
      loadingElements.forEach(function (el) {
        el.classList.remove("placeholder");
      });
    }
    if (heroSwiper && heroSwiperPlaceholder) {
      heroSwiper.classList.remove("d-none");
      heroSwiperPlaceholder.classList.add("d-none");
    }
  }
}
var cookie = document.querySelector(".cookie");
if (!localStorage.getItem("cookieMuni")) {
  cookie.classList.add("active");
}
function cookieActive() {
  var scrollHeight = document.documentElement.scrollHeight;
  // Сколько прокручено + высота окна
  var scrollPosition = window.scrollY + window.innerHeight;

  // Если дошёл до самого низа (или почти)
  if (scrollPosition >= scrollHeight - 50 && !localStorage.getItem("cookieMuni")) {
    cookie.classList.add("active");
  } else {
    cookie.classList.remove("active");
  }
}
if (cookie) {
  document.querySelector('.cookie__success').addEventListener("click", function () {
    localStorage.setItem('cookieMuni', true);
    cookie.classList.remove("active");
    cookiePageMargin();
  });
}
function renderInitMain() {
  return _renderInitMain.apply(this, arguments);
}
function _renderInitMain() {
  _renderInitMain = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!document.querySelector(".index")) {
            _context3.n = 1;
            break;
          }
          _context3.n = 1;
          return init();
        case 1:
          if (!document.querySelector(".support")) {
            _context3.n = 2;
            break;
          }
          _context3.n = 2;
          return renderSupport();
        case 2:
          if (!document.querySelector(".info")) {
            _context3.n = 3;
            break;
          }
          _context3.n = 3;
          return renderInfo();
        case 3:
          if (!document.querySelector(".privacy")) {
            _context3.n = 4;
            break;
          }
          _context3.n = 4;
          return renderPolitics("privacy");
        case 4:
          if (!document.querySelector(".accessibility")) {
            _context3.n = 5;
            break;
          }
          _context3.n = 5;
          return renderPolitics("accessibility");
        case 5:
          if (!document.querySelector(".cookiePage")) {
            _context3.n = 7;
            break;
          }
          _context3.n = 6;
          return renderPolitics("cookie");
        case 6:
          cookiePageMargin();
          cookieActive();
          window.addEventListener("scroll", function () {
            cookieActive();
          });
        case 7:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _renderInitMain.apply(this, arguments);
}
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        _context.n = 1;
        return renderInitMain();
      case 1:
        if (document.querySelector(".index")) {
          initSwipe();
          initBtnSwipe();
          updateClasses();
          startAutoplay();
        }
        dropdownInit();
      case 2:
        return _context.a(2);
    }
  }, _callee);
})));
window.addEventListener("pageshow", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!event.persisted) {
            _context2.n = 1;
            break;
          }
          _context2.n = 1;
          return renderInitMain();
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
function cookiePageMargin() {
  var cookieInfoDetail = document.querySelector(".cookie___info-detail");
  if (cookieInfoDetail) {
    if (!localStorage.getItem("cookieMuni")) {
      cookieInfoDetail.classList.add("cookieNotActive");
    } else {
      cookieInfoDetail.classList.remove("cookieNotActive");
    }
  }
}
var btnQr = document.querySelector(".note__qr");
var modalQr = document.querySelector(".qr-modal");
var btnCloseModal = document.querySelector(".modal-custom__close");
if (btnQr && modalQr && btnCloseModal) {
  var closeModal = function closeModal() {
    modalQr.classList.remove("active");
    document.body.classList.remove("lock");
  };
  btnQr.addEventListener("click", function () {
    document.body.classList.add("lock");
    modalQr.classList.add("active");
  });
  btnCloseModal.addEventListener("click", closeModal);
  modalQr.addEventListener("click", function (event) {
    var isOutsideClick = !event.target.closest(".modal-custom__dialog");
    if (isOutsideClick) {
      closeModal();
    }
  });
}
document.querySelectorAll('.link-custom').forEach(function (link) {
  activeLink(link, 200, 150);
});
var linksNoImg = document.querySelectorAll(".link-item");
if (linksNoImg) {
  linksNoImg.forEach(function (link) {
    activeLink(link, 200, 150);
  });
}
var questionsLink = document.querySelector(".questions__mobile_a");
if (questionsLink) {
  activeLink(questionsLink, 300, 200);
}
var supportLinkAi = document.querySelector(".support__link");
if (supportLinkAi) {
  activeLink(supportLinkAi, 300, 200);
}
var servicesLink = document.querySelectorAll(".item");
if (servicesLink) {
  servicesLink.forEach(function (link) {
    activeLink(link, 300, 200);
  });
}
var headerAvailabilityProblem = document.querySelector(".header__availability_problem");
if (headerAvailabilityProblem) {
  activeLink(headerAvailabilityProblem, 300, 200);
}
var serviceBtnGet = document.querySelector(".service__get");
if (serviceBtnGet) {
  activeBtn(serviceBtnGet, 300);
}
var verefyBtn = document.querySelector(".modal-verefy__btn");
if (verefyBtn) {
  activeBtn(verefyBtn, 300);
}
var resetAvailability = document.querySelector(".availability-btn");
if (resetAvailability) {
  activeBtn(resetAvailability, 300);
}
var cookieLink = document.querySelector(".cookie__link");
if (cookieLink) {
  cookieLink.addEventListener("click", function () {
    window.location.href = "/cookie.html";
  });
}
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
document.addEventListener("DOMContentLoaded", function () {
  var originalHash = window.location.hash; // сохраняем сразу

  if (originalHash) {
    // убираем временно
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo({
      top: 0,
      left: 0
    });

    // вернём hash после инициализации
    setTimeout(function () {
      history.replaceState(null, "", originalHash);
    }, 50);
  }
  var headItems = document.querySelectorAll(".services-category__head_item");
  var bodyLists = document.querySelectorAll(".services-category__list");
  var nextBtn = document.querySelector(".services-category__next");
  var prevBtn = document.querySelector(".services-category__prev");
  if (!headItems.length || !bodyLists.length) return;
  var currentIndex = 0;
  var total = headItems.length;
  function updateActive(newIndex) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var updateHash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    bodyLists[currentIndex].classList.remove("is-active");
    bodyLists[currentIndex].classList.remove("slide-left", "slide-right");
    if (direction) {
      bodyLists[newIndex].classList.remove("slide-left", "slide-right");
      bodyLists[newIndex].classList.add(direction === "next" ? "slide-right" : "slide-left");
      void bodyLists[newIndex].offsetWidth;
      bodyLists[newIndex].classList.remove("slide-right", "slide-left");
    }
    headItems.forEach(function (el) {
      return el.classList.remove("is-active");
    });
    headItems[newIndex].classList.add("is-active");
    bodyLists[newIndex].classList.add("is-active");
    currentIndex = newIndex;
    if (updateHash) {
      var id = bodyLists[newIndex].id;
      if (id) {
        var scrollPos = window.scrollY;
        history.replaceState(null, "", "#".concat(id));
        window.scrollTo(0, scrollPos);
      }
    }
  }

  // --- стартовый слайд ---
  if (originalHash) {
    var cleanHash = originalHash.replace("#", "");
    var foundIndex = _toConsumableArray(bodyLists).findIndex(function (el) {
      return el.id === cleanHash;
    });
    if (foundIndex !== -1) currentIndex = foundIndex;
  }
  updateActive(currentIndex, null, false);
  window.scrollTo(0, 0);

  // --- кнопки ---
  nextBtn.addEventListener("click", function () {
    var newIndex = (currentIndex + 1) % total;
    updateActive(newIndex, "next");
  });
  prevBtn.addEventListener("click", function () {
    var newIndex = (currentIndex - 1 + total) % total;
    updateActive(newIndex, "prev");
  });

  // --- навигация Back/Forward ---
  window.addEventListener("hashchange", function () {
    var newHash = window.location.hash.replace("#", "");
    var foundIndex = _toConsumableArray(bodyLists).findIndex(function (el) {
      return el.id === newHash;
    });
    if (foundIndex !== -1 && foundIndex !== currentIndex) {
      var direction = foundIndex > currentIndex ? "next" : "prev";
      updateActive(foundIndex, direction, false);
    }
  });
});
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function renderInfo() {
  return _renderInfo.apply(this, arguments);
}
function _renderInfo() {
  _renderInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var lang, translation, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          loadState.value = true;
          lang = localStorage.getItem("lang");
          if (lang === "he" || lang === "ar") {
            document.documentElement.classList.add('rtl');
          } else {
            document.documentElement.classList.remove('rtl');
          }
          _context.n = 1;
          return translationFetch(lang !== null && lang !== void 0 ? lang : "en", "information");
        case 1:
          translation = _context.v;
          console.log(translation.data.elements);
          translation.data.elements.forEach(function (item) {
            if (item.id === "soon") {
              changeComingSoon(item);
            }
            if (item.id === "settings") {
              availabilityChanges(item);
            }
            if (item.id === "top-banner") {
              changeSupportBlue(item);
            }
            if (item.id === "mobile-menu") {
              mobileMenuChange(item);
            }
            if (item.id === "back-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
            if (item.id === 'languages') {
              createSelectLang(item.elements, lang);
              createCheckboxLang(item.elements, lang);
            }
            if (item.id === "information") {
              createChangeInfo(item);
            }
            if (item.id === "cookies") {
              cookieChanges(item);
            }
            if (item.id === "our-laboratory-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
          });
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error(_t);
        case 3:
          _context.p = 3;
          loadState.value = false;
          return _context.f(3);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2, 3, 4]]);
  }));
  return _renderInfo.apply(this, arguments);
}
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function renderPolitics(_x) {
  return _renderPolitics.apply(this, arguments);
}
function _renderPolitics() {
  _renderPolitics = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(name) {
    var lang, translation, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          loadState.value = true;
          lang = localStorage.getItem("lang");
          if (lang === "he" || lang === "ar") {
            document.documentElement.classList.add('rtl');
          } else {
            document.documentElement.classList.remove('rtl');
          }
          _context.n = 1;
          return translationFetch(lang !== null && lang !== void 0 ? lang : "en", "politics/".concat(name));
        case 1:
          translation = _context.v;
          translation.data.elements.forEach(function (item) {
            if (item.id === "soon") {
              changeComingSoon(item);
            }
            if (item.id === "settings") {
              availabilityChanges(item);
            }
            if (item.id === "footer-slogan") {
              sloganChange(item);
            }
            if (item.id === "mobile-menu") {
              mobileMenuChange(item);
            }
            if (item.id === "back-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
            if (item.id === 'countries') {
              createSelectCountry(item.elements);
            }
            if (item.id === 'languages') {
              createSelectLang(item.elements, lang);
              createCheckboxLang(item.elements, lang);
            }
            if (item.id === "footer-info") {
              footerInfo(item);
            }
            if (item.id === "cookies") {
              cookieChanges(item);
            }
            if (item.id === "our-laboratory-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
            if (item.id === "headline") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
            if (item.id === "content") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
          });
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error(_t);
        case 3:
          _context.p = 3;
          loadState.value = false;
          return _context.f(3);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2, 3, 4]]);
  }));
  return _renderPolitics.apply(this, arguments);
}
"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function renderSupport() {
  return _renderSupport.apply(this, arguments);
}
function _renderSupport() {
  _renderSupport = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var lang, translation, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          loadState.value = true;
          lang = localStorage.getItem('lang');
          _context.n = 1;
          return translationFetch(lang !== null && lang !== void 0 ? lang : "en", "support");
        case 1:
          translation = _context.v;
          translation.data.elements.forEach(function (item) {
            if (item.id === "soon") {
              changeComingSoon(item);
            }
            if (item.id === "settings") {
              availabilityChanges(item);
            }
            if (item.id === "top-banner") {
              changeSupportBlue(item);
            }
            if (item.id === "footer-slogan") {
              sloganChange(item);
            }
            if (item.id === "mobile-menu") {
              mobileMenuChange(item);
            }
            if (item.id === "back-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
            if (item.id === "faq") {
              faqSupport(item);
            }
            if (item.id === 'languages') {
              createSelectLang(item.elements, lang);
              createCheckboxLang(item.elements, lang);
            }
            if (item.id === "cookies") {
              cookieChanges(item);
            }
            if (item.id === "our-laboratory-btn") {
              findReplaceText({
                selector: ".".concat(item.id),
                text: item.label
              });
            }
          });
          if (lang === "he" || lang === "ar") {
            document.documentElement.classList.add('rtl');
          } else {
            document.documentElement.classList.remove('rtl');
          }
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.error(_t);
        case 3:
          _context.p = 3;
          loadState.value = false;
          return _context.f(3);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2, 3, 4]]);
  }));
  return _renderSupport.apply(this, arguments);
}
"use strict";

function initRadial() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$intervalMs = _ref.intervalMs,
    intervalMs = _ref$intervalMs === void 0 ? 5000 : _ref$intervalMs;
  var names = ["service", "market", "call", "wallet", "house", "rent", "debt", "marketplaces"];
  var current = 0;
  var intervalId = null;
  var tooltipElements = document.querySelectorAll("[data-tooltip]");
  function hideTooltipAll() {
    tooltipElements.forEach(function (el) {
      var inst = bootstrap.Tooltip.getInstance(el);
      if (inst) inst.hide();
    });
  }
  function updateActive() {
    hideTooltipAll();
    names.forEach(function (name) {
      document.querySelectorAll(".js-what-".concat(name)).forEach(function (el) {
        return el.classList.remove('active');
      });
      document.querySelectorAll(".js-what-svg-".concat(name)).forEach(function (el) {
        return el.classList.remove('active');
      });
    });

    // добавляем активные
    var activeName = names[current];
    document.querySelectorAll(".js-what-".concat(activeName)).forEach(function (el) {
      return el.classList.add('active');
    });
    document.querySelectorAll(".js-what-svg-".concat(activeName)).forEach(function (el) {
      return el.classList.add('active');
    });
    document.querySelectorAll("[data-tooltip=\"".concat(activeName, "\"]")).forEach(function (el) {
      var inst = bootstrap.Tooltip.getInstance(el);
      if (inst) inst.show();
    });
    current = (current + 1) % names.length;
  }
  updateActive();
  intervalId = setInterval(updateActive, intervalMs);
  return {
    stop: function stop() {
      clearInterval(intervalId);
    },
    intervalId: intervalId
  };
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYW5zbGF0aW9uLmpzIiwiYWNjLmpzIiwiYWN0aXZlTGluay5qcyIsImF1dGguanMiLCJhdmFpbGFiaWxpdHkuanMiLCJidG5CYWNrLmpzIiwiYnVyZ2VyLmpzIiwiY3JlYXRlQ2hhbmdlSW5mby5qcyIsImNyZWF0ZU9yQ2hhbmdlU3VwcG9ydC5qcyIsImNyZWF0ZVNlbGVjdC5qcyIsImRyb3Bkb3duLmpzIiwiZmV0Y2guanMiLCJoZXJvU3dpcGVyLmpzIiwibWFpbi5qcyIsInNlcnZpY2Utc2xpZGVyLmpzIiwidHJhbnNsYXRpb25JbmZvLmpzIiwidHJhbnNsYXRpb25Qb2xpdGljcy5qcyIsInRyYW5zbGF0aW9uU3Vwb3J0LmpzIiwid2hhdFJhZGlhbC5qcyJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInN3aXBlciIsImluaXRTd2lwZXIiLCJkZXN0cm95IiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsInNsaWRlc1BlclZpZXciLCJjZW50ZXJlZFNsaWRlcyIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJvbiIsInNldFRyYW5zbGF0ZSIsImlzTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNsaWRlcyIsImZvckVhY2giLCJzbGlkZSIsInNsaWRlUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInRyYW5zbGF0ZVkiLCJNYXRoIiwiYWJzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjb25jYXQiLCJzZXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInNjcm9sbGJhciIsImVsIiwiZHJhZ2dhYmxlIiwicGFnaW5hdGlvbiIsInR5cGUiLCJicmVha3BvaW50cyIsIlJhZGlhbENvbnRyb2xsZXIiLCJpbnN0YW5jZSIsImluaXQiLCJvcHRpb25zIiwic3RvcCIsImluaXRSYWRpYWwiLCJyZWZyZXNoIiwicmVuZGVyIiwiX3JlbmRlciIsIl9jYWxsZWUiLCJsYW5nIiwidHJhbnNsYXRpb24iLCJfdCIsIl9jb250ZXh0IiwibG9hZFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRyYW5zbGF0aW9uRmV0Y2giLCJkYXRhIiwiZWxlbWVudHMiLCJpdGVtIiwiaWQiLCJjaGFuZ2VDb21pbmdTb29uIiwiY3JlYXRlU2VsZWN0Q291bnRyeSIsImNyZWF0ZVNlbGVjdExhbmciLCJjcmVhdGVDaGVja2JveExhbmciLCJjcmVhdGVUZXh0TGlzdCIsImNyZWF0ZVNsaWRlIiwiYXR0ZW50aW9uQ2hhbmdlVGV4dCIsImZhcUNyZWF0ZSIsImZvb3RlckluZm8iLCJjb29raWVDaGFuZ2VzIiwiYXZhaWxhYmlsaXR5Q2hhbmdlcyIsImZhcU1vYmlsZSIsIm1vYmlsZU1lbnVDaGFuZ2UiLCJoZXJvQmFubmVyVG9wIiwid2hhdEluY2x1ZGVkIiwiZmluZFJlcGxhY2VUZXh0Iiwic2VsZWN0b3IiLCJ0ZXh0IiwibGFiZWwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlaW5pdFRvb2x0aXBzIiwiY29uc29sZSIsImVycm9yIiwiX2luaXQiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsImFjY1dyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJjb250ZW50IiwiaXNPcGVuIiwiY29udGFpbnMiLCJtYXhIZWlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImNvbnRlbnRBY2MiLCJzY3JvbGxIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWN0aXZlTGluayIsImxpbmsiLCJ0aW1lb3V0Q2xhc3MiLCJ0aW1lb3V0SHJlZiIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsImFjdGl2ZUJ0biIsImF1dGhUYWJzIiwiYXV0aEJ0biIsImRhdGFzZXQiLCJhdXRoVGFyZ2V0IiwiYXV0aFRhYiIsImxvZyIsImF1dGhDdXJyZW50IiwiZGlzYWJpbGl0eSIsImF2YWlsYWJpbGl0eSIsImF2YWlsYWJpbGl0eUNsb3NlIiwidmVpbCIsInZlaWxPdmVybGF5IiwiYm9keSIsImZvbnRSYW5nZSIsImdldEVsZW1lbnRCeUlkIiwiY29udHJhc3RSYW5nZSIsInNwYWNpbmdSYW5nZSIsInBob25lSW1nIiwibGVhZGluZyIsInRoZW1lSW5wdXRzIiwic2F2ZVNldHRpbmciLCJrZXkiLCJzZXRJdGVtIiwibG9hZFNldHRpbmciLCJ1cGRhdGVSYW5nZVByb2dyZXNzIiwiaW5wdXQiLCJmaWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1pbiIsIm1heCIsInBlcmNlbnQiLCJ3aWR0aCIsImxhYmVscyIsInBhcmVudEVsZW1lbnQiLCJzdGVwIiwic3BhbiIsImluZGV4IiwidGhyZXNob2xkIiwidG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5IiwiYmxvY2siLCJmb250U2l6ZSIsImRpc3BsYXkiLCJhcHBseVRoZW1lIiwiaXNEYXJrIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJhcHBseUxlYWRpbmciLCJyZXN0b3JlU2V0dGluZ3MiLCJzYXZlZEZvbnQiLCJjb250cmFzdENsYXNzZXMiLCJzYXZlZENvbnRyYXN0IiwiX2RvY3VtZW50JGRvY3VtZW50RWxlIiwic2F2ZWRTcGFjaW5nIiwicmVtb3ZlUHJvcGVydHkiLCJsZXR0ZXJTcGFjaW5nIiwiTnVtYmVyIiwic2F2ZWRUaGVtZSIsInRoZW1lSW5wdXQiLCJjaGVja2VkIiwic2F2ZWRMZWFkaW5nIiwibGVhZGluZ0lucHV0Iiwic2V0Q29udHJhc3RNb2RlIiwiX2RvY3VtZW50JGRvY3VtZW50RWxlMiIsInRoZW1lIiwibGgiLCJzcGFjaW5nIiwiaW5wdXRGb250IiwiY2xlYXJBdmFpbGFiaWxpdHkiLCJyZW1vdmVJdGVtIiwiYnRuQmFjayIsImhpc3RvcnkiLCJiYWNrIiwiYmFja0J0bkF1dGgiLCJidXJnZXJCdG4iLCJidXJnZXJNZW51IiwidG9nZ2xlIiwibGlua3NQb2xpdGljcyIsImNyZWF0ZUNoYW5nZUluZm8iLCJhcnJheSIsInBhcmVudCIsImxpc3QiLCJpbm5lckhUTUwiLCJjcmVhdGVFbGVtZW50IiwiQXMiLCJjbGFzc05hbWUiLCJsb2FkaW5nIiwic3ZnIiwiYXBwZW5kIiwiY2hhbmdlU3VwcG9ydEJsdWUiLCJfYXJyYXkkZWxlbWVudHMiLCJmYXFTdXBwb3J0IiwiX2VsZW0kZWxlbWVudHMiLCJfZWxlbSRlbGVtZW50czIiLCJoZWFkIiwidGl0bGUiLCJtYXJrZG93biIsImJvZHlXcmFwIiwiX3JlZiIsImltZyIsImVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJfZWxlbWVudCRjbGFzc0xpc3QiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzcmMiLCJhbHQiLCJfcmVmMiIsImhlYWRlciIsImNvbnRpbmVudCIsImNvbnRpbmVudFRleHQiLCJfaXRlbSRlbGVtZW50cyIsIml0ZW1Db3VudHJ5IiwidGFiSW5kZXgiLCJpdGVtSW1nV3JhcHBlciIsIml0ZW1JbWciLCJpdGVtVGV4dCIsImlzX2NoZWNrZWQiLCJfaXRlbSRlbGVtZW50czIiLCJoZWFkZXJJbWdXcmFwcGVyIiwiaGVhZGVySW1nIiwiaGVhZGVyVGV4dCIsImNoaWxkcmVuIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJhY3RpdmVJdGVtQ2xhc3MiLCJpdGVtTmFtZSIsImRhdGFfYXR0cmlidXRlIiwic2hvcnRfbGFiZWwiLCJoZWFkZXJOYW1lIiwibmFtZSIsImNsYXNzTGlzdFNsaWRlIiwiX2VsZW1lbnQkZWxlbWVudHMiLCJfZWxlbWVudCRlbGVtZW50czIiLCJpY29uV3JhcHBlciIsImljb24iLCJsZWZ0IiwicGFyYWdyYXBoIiwiaXRlbUNoaWxkcmVuIiwiY3JlYXRlSXRlbU1vYmlsZUluZm8iLCJoZWFkbGluZSIsIm1vYmlsZUluZm8iLCJfYXJyYXkkZWxlbWVudHMyIiwiX2FycmF5JGVsZW1lbnRzMyIsIl9hcnJheSRlbGVtZW50czUiLCJyaWdodCIsImJ0bklwaG9uZSIsImJ0bkFuZHJvaWQiLCJfYXJyYXkkZWxlbWVudHM0IiwiX2FycmF5JGVsZW1lbnRzNiIsIl9lbGVtZW50JGVsZW1lbnRzMyIsImxpbmtzIiwiX2FycmF5JGVsZW1lbnRzNyIsIl9hcnJheSRlbGVtZW50czgiLCJfZWxlbWVudCR0ZXh0IiwiZXhwbG9yZUNoYW5nZXMiLCJhY2MiLCJhY2NCb2R5V3JhcCIsImFjY0JvZHkiLCJhY2NJdGVtIiwiYWNjSXRlbVJpZ2h0IiwiYWNjSXRlbVJpZ2h0SGVhZCIsImFjY0l0ZW1SaWdodExlZnQiLCJhY2NJdGVtUmlnaHRTdmciLCJhY2NJdGVtTmFtZSIsIml0ZW1DaGV2cm9uIiwiYWNjSXRlbUJvZHkiLCJhY2NJdGVtQm9keVAiLCJzbG9nYW5DaGFuZ2UiLCJzZXRBdHRyaWJ1dGUiLCJ0b29sdGlwT3B0aW9ucyIsInNlcnZpY2UiLCJ0cmlnZ2VyIiwiY3VzdG9tQ2xhc3MiLCJkZWxheSIsImVuYWJsZWQiLCJwb3BwZXJDb25maWciLCJkZWZhdWx0Q29uZmlnIiwiX2RlZmF1bHRDb25maWckbW9kaWZpIiwiX29iamVjdFNwcmVhZCIsIm1vZGlmaWVycyIsImZpbHRlciIsIm9mZnNldCIsIm1hcmtldCIsIl9kZWZhdWx0Q29uZmlnJG1vZGlmaTIiLCJfZGVmYXVsdENvbmZpZyRtb2RpZmkzIiwid2FsbGV0IiwiX2RlZmF1bHRDb25maWckbW9kaWZpNCIsImhvdXNlIiwiX2RlZmF1bHRDb25maWckbW9kaWZpNSIsInJlbnQiLCJfZGVmYXVsdENvbmZpZyRtb2RpZmk2IiwiZGVidCIsIl9kZWZhdWx0Q29uZmlnJG1vZGlmaTciLCJtYXJrZXRwbGFjZXMiLCJfZGVmYXVsdENvbmZpZyRtb2RpZmk4IiwidG9vbHRpcFRyaWdnZXJMaXN0IiwidG9vbHRpcCIsImJvb3RzdHJhcCIsIlRvb2x0aXAiLCJnZXRJbnN0YW5jZSIsImRpc3Bvc2UiLCJEcm9wZG93biIsImRyb3Bkb3duRWxlbWVudCIsInVuZGVmaW5lZCIsIm5vdFNlbGVjdGVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJkcm9wZG93bkhlYWQiLCJjdXJyZW50Rm9jdXNJbmRleCIsIm5hbWVTb3VyY2UiLCJvblNlbGVjdCIsInNlbGN0ZWROb3QiLCJfY3JlYXRlQ2xhc3MiLCJiaW5kSGVhZGVyIiwiYmluZEJvZHkiLCJiaW5kT3V0c2lkZUNsaWNrIiwiX3RoaXMiLCJjbG9zZURyb3Bkb3duIiwiX3RoaXMyIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRHJvcGRvd24iLCJmb2N1c05leHRJdGVtIiwiX3RoaXMzIiwic2VsZWN0Q291bnRyeSIsImZvY3VzUHJldkl0ZW0iLCJjb3VudHJ5SXRlbXMiLCJmcm9tIiwiX2VsZW0kcXVlcnlTZWxlY3RvciIsIm5hbWVFbCIsInNlbGVjdGVkTmFtZSIsImlubmVyVGV4dCIsInNlbGVjdGVkSW1nIiwiaGVhZEltZyIsImhlYWROYW1lIiwiZm9jdXMiLCJkcm9wZG93bkluaXQiLCJkcm9wZG93bnMiLCJkcm9wZG93bkluc3RhbmNlIiwiZnVuY0Ryb3Bkb3duIiwicmVuZGVyUG9saXRpY3MiLCJyZW5kZXJTdXBwb3J0IiwicmVuZGVySW5mbyIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsImZpcnN0Q2hpbGQiLCJjaGVja2JveEJvZHkiLCJkcm9wZG93bkF1dGhMYW5nIiwiX3giLCJfeDIiLCJfdHJhbnNsYXRpb25GZXRjaCIsInBhZ2UiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwiZ2V0Q2Fyb3VzZWxJdGVtcyIsImdldEluZGV4IiwiaWR4IiwibGVuIiwiY3VycmVudEluZGV4IiwiYXV0b3BsYXlJbnRlcnZhbCIsImF1dG9wbGF5U3RhcnRUaW1lIiwiQVVUT1BMQVlfVElNRSIsInNldENpcmNsZVByb2dyZXNzIiwiY2lyY2xlIiwicmFkaXVzIiwiYmFzZVZhbCIsImNpcmN1bWZlcmVuY2UiLCJQSSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJ1cGRhdGVDbGFzc2VzIiwiaXRlbXMiLCJpbml0QnRuU3dpcGUiLCJsZWZ0QnRuIiwicmlnaHRCdG4iLCJsZWZ0QnRuTW9iIiwicmlnaHRCdG5Nb2IiLCJ1cGRhdGVTbGlkZSIsInBvcyIsInJlc3RhcnRBdXRvcGxheSIsImluaXRTd2lwZSIsInN3aXBlcldyYXBwZXIiLCJzdGFydFgiLCJlbmRYIiwibWluU3dpcGVEaXN0YW5jZSIsInRvdWNoZXMiLCJjbGllbnRYIiwicGFzc2l2ZSIsImhhbmRsZVN3aXBlIiwiZGlmZlgiLCJpc1J0bCIsInN0YXJ0QXV0b3BsYXkiLCJjaXJjbGVNb2IiLCJEYXRlIiwibm93IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZWxhcHNlZCIsInN0b3BBdXRvcGxheSIsImxvYWQiLCJ2YWwiLCJvbkNoYW5nZUxvYWQiLCJpc0xvYWRpbmciLCJsb2FkaW5nRWxlbWVudHMiLCJoZXJvU3dpcGVyIiwiaGVyb1N3aXBlclBsYWNlaG9sZGVyIiwiY29va2llIiwiY29va2llQWN0aXZlIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJjb29raWVQYWdlTWFyZ2luIiwicmVuZGVySW5pdE1haW4iLCJfcmVuZGVySW5pdE1haW4iLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsImV2ZW50IiwicGVyc2lzdGVkIiwiY29va2llSW5mb0RldGFpbCIsImJ0blFyIiwibW9kYWxRciIsImJ0bkNsb3NlTW9kYWwiLCJjbG9zZU1vZGFsIiwiaXNPdXRzaWRlQ2xpY2siLCJsaW5rc05vSW1nIiwicXVlc3Rpb25zTGluayIsInN1cHBvcnRMaW5rQWkiLCJzZXJ2aWNlc0xpbmsiLCJoZWFkZXJBdmFpbGFiaWxpdHlQcm9ibGVtIiwic2VydmljZUJ0bkdldCIsInZlcmVmeUJ0biIsInJlc2V0QXZhaWxhYmlsaXR5IiwiY29va2llTGluayIsInNjcm9sbFJlc3RvcmF0aW9uIiwib3JpZ2luYWxIYXNoIiwiaGFzaCIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwic2VhcmNoIiwic2Nyb2xsVG8iLCJ0b3AiLCJoZWFkSXRlbXMiLCJib2R5TGlzdHMiLCJuZXh0QnRuIiwicHJldkJ0biIsInRvdGFsIiwidXBkYXRlQWN0aXZlIiwibmV3SW5kZXgiLCJkaXJlY3Rpb24iLCJ1cGRhdGVIYXNoIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxQb3MiLCJjbGVhbkhhc2giLCJyZXBsYWNlIiwiZm91bmRJbmRleCIsImZpbmRJbmRleCIsIm5ld0hhc2giLCJfcmVuZGVySW5mbyIsIl9yZW5kZXJQb2xpdGljcyIsIl9yZW5kZXJTdXBwb3J0IiwiX3JlZiRpbnRlcnZhbE1zIiwiaW50ZXJ2YWxNcyIsIm5hbWVzIiwiY3VycmVudCIsImludGVydmFsSWQiLCJ0b29sdGlwRWxlbWVudHMiLCJoaWRlVG9vbHRpcEFsbCIsImluc3QiLCJoaWRlIiwiYWN0aXZlTmFtZSIsInNob3ciXSwibWFwcGluZ3MiOiI7OzBCQUNBLHVLQUFBQSxDQUFBLEVB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LE9BQU8sQ0FBQyxVQUFBYSxFQUFFO01BQUEsT0FBSUEsRUFBRSxDQUFDZ0QsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQUEsRUFBQztJQUM3RkgsUUFBUSxDQUFDcUIsZ0JBQWdCLGlCQUFBdkUsTUFBQSxDQUFpQjBjLFVBQVUsQ0FBRSxDQUFDLENBQUNuZCxPQUFPLENBQUMsVUFBQWEsRUFBRTtNQUFBLE9BQUlBLEVBQUUsQ0FBQ2dELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUFBLEVBQUM7SUFFakdILFFBQVEsQ0FBQ3FCLGdCQUFnQixvQkFBQXZFLE1BQUEsQ0FBbUIwYyxVQUFVLFFBQUksQ0FBQyxDQUFDbmQsT0FBTyxDQUFDLFVBQUFhLEVBQUUsRUFBSTtNQUN4RSxJQUFNb2MsSUFBSSxHQUFHN0ssU0FBUyxDQUFDQyxPQUFPLENBQUNDLFdBQVcsQ0FBQ3pSLEVBQUUsQ0FBQztNQUM5QyxJQUFJb2MsSUFBSSxFQUFFQSxJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUVGUCxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxHQUFHLENBQUMsSUFBSUQsS0FBSyxDQUFDemYsTUFBTTtFQUN4QztFQUNBeWUsWUFBWSxDQUFDLENBQUM7RUFDZGtCLFVBQVUsR0FBR3BFLFdBQVcsQ0FBQ2tELFlBQVksRUFBRWUsVUFBVSxDQUFDO0VBRWxELE9BQU87SUFDTHJiLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO01BQ0xtWCxhQUFhLENBQUNxRSxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUNEQSxVQUFVLEVBQVZBO0VBQ0YsQ0FBQztBQUNIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3dpcGVyID0gbnVsbFxuZnVuY3Rpb24gaW5pdFN3aXBlcigpIHtcbiAgaWYgKHN3aXBlcikge1xuICAgIHN3aXBlci5kZXN0cm95KHRydWUsIHRydWUpO1xuICAgIHN3aXBlciA9IG51bGw7XG4gIH1cbiAgc3dpcGVyID0gbmV3IFN3aXBlcihcIi53aHlfX3N3aXBlclwiLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgIG9uOiB7XG4gICAgICBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA3NjhcbiAgICAgICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNsaWRlUHJvZ3Jlc3MgPSBzbGlkZS5wcm9ncmVzczsvLyDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvtGCINGG0LXQvdGC0YDQsFxuICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBpc01vYmlsZSA/IC0xMCAqICgxIC0gTWF0aC5hYnMoc2xpZGVQcm9ncmVzcykpIDogMDsgLy8g0L/QvtC00L3QuNC80LDQtdC8INCx0LvQuNC20L3QuNC1XG4gICAgICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfXB4KWA7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHNldFRyYW5zaXRpb24oc3dpcGVyLCB0cmFuc2l0aW9uKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgICBzbGlkZS5zdHlsZS50cmFuc2l0aW9uID0gYCR7dHJhbnNpdGlvbn1tcyB0cmFuc2Zvcm0gZWFzZWA7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6IFwiLndoeV9fc2Nyb2xsYmFyXCIsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIud2h5X19wcm9ncmVzc2JhclwiLFxuICAgICAgdHlwZTogXCJwcm9ncmVzc2JhclwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDc2ODoge1xuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbmNvbnN0IFJhZGlhbENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgaW5zdGFuY2UgPSBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdChvcHRpb25zKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIGluc3RhbmNlLnN0b3AoKTtcbiAgICAgIGluc3RhbmNlID0gaW5pdFJhZGlhbChvcHRpb25zKTtcbiAgICB9LFxuICAgIHN0b3AoKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIGluc3RhbmNlLnN0b3AoKTtcbiAgICAgIGluc3RhbmNlID0gbnVsbDtcbiAgICB9LFxuICAgIHJlZnJlc2gob3B0aW9ucykge1xuICAgICAgaWYgKGluc3RhbmNlKSBpbnN0YW5jZS5zdG9wKCk7XG4gICAgICBpbnN0YW5jZSA9IGluaXRSYWRpYWwob3B0aW9ucyk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKCkge1xuICB0cnkge1xuICAgIGxvYWRTdGF0ZS52YWx1ZSA9IHRydWVcblxuICAgIGNvbnN0IGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmdcIik7XG5cbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGF3YWl0IHRyYW5zbGF0aW9uRmV0Y2gobGFuZyA/PyBcImVuXCIsIFwibGFuZGluZ1wiKTtcblxuICAgIHRyYW5zbGF0aW9uLmRhdGEuZWxlbWVudHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBcInNvb25cIikge1xuICAgICAgICBjaGFuZ2VDb21pbmdTb29uKGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSAnY291bnRyaWVzJykge1xuICAgICAgICBjcmVhdGVTZWxlY3RDb3VudHJ5KGl0ZW0uZWxlbWVudHMpXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSAnbGFuZ3VhZ2VzJykge1xuICAgICAgICBjcmVhdGVTZWxlY3RMYW5nKGl0ZW0uZWxlbWVudHMsIGxhbmcpXG4gICAgICAgIGNyZWF0ZUNoZWNrYm94TGFuZyhpdGVtLmVsZW1lbnRzLCBsYW5nKVxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwiZGVza3RvcC1ib3R0b20tYmFubmVyXCIpIHtcbiAgICAgICAgY3JlYXRlVGV4dExpc3QoaXRlbS5lbGVtZW50cylcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcInNsaWRlci13aHlcIikge1xuICAgICAgICBjcmVhdGVTbGlkZShpdGVtKVxuICAgICAgfVxuICAgICAgLy9cbiAgICAgIGlmIChpdGVtLmlkID09PSAnYXR0ZW50aW9uJykge1xuICAgICAgICBhdHRlbnRpb25DaGFuZ2VUZXh0KGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImZhcVwiKSB7XG4gICAgICAgIGZhcUNyZWF0ZShpdGVtKVxuICAgICAgfVxuICAgICAgLy9cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImZvb3Rlci1pbmZvXCIpIHtcbiAgICAgICAgZm9vdGVySW5mbyhpdGVtKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJjb29raWVzXCIpIHtcbiAgICAgICAgY29va2llQ2hhbmdlcyhpdGVtKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJzZXR0aW5nc1wiKSB7XG4gICAgICAgIGF2YWlsYWJpbGl0eUNoYW5nZXMoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcIm1vYmlsZS1mYXFcIikge1xuICAgICAgICBmYXFNb2JpbGUoaXRlbSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwibW9iaWxlLW1lbnVcIikge1xuICAgICAgICBtb2JpbGVNZW51Q2hhbmdlKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJkZXNrdG9wLXRvcC1iYW5uZXJcIikge1xuICAgICAgICBoZXJvQmFubmVyVG9wKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJ3aGF0LWluY2x1ZGVkXCIpIHtcbiAgICAgICAgd2hhdEluY2x1ZGVkKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJvdXItbGFib3JhdG9yeS1idG5cIikge1xuICAgICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICAgIHNlbGVjdG9yOiBgLiR7aXRlbS5pZH1gLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChsYW5nID09PSBcImhlXCIgfHwgbGFuZyA9PT0gXCJhclwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncnRsJylcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3J0bCcpXG4gICAgfVxuICAgIHJlaW5pdFRvb2x0aXBzKClcbiAgICBSYWRpYWxDb250cm9sbGVyLnJlZnJlc2goKVxuICAgIGluaXRTd2lwZXIoKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKVxuICB9IGZpbmFsbHkge1xuICAgIGxvYWRTdGF0ZS52YWx1ZSA9IGZhbHNlXG4gIH1cblxufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBhd2FpdCByZW5kZXIoKVxufSIsImNvbnN0IGFjY1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYWNjLXdyYXBwZXInKTsgLy8g0LrQvtC90YLQtdC50L3QtdGAINCy0YHQtdGFINCw0LrQutC+0YDQtNC10L7QvdC+0LJcblxuaWYgKGFjY1dyYXBwZXIpIHtcbiAgYWNjV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuanMtYWNjLWJ0bicpO1xuICAgIGlmICghYnRuKSByZXR1cm47XG4gICAgY29uc3QgaXRlbSA9IGJ0bi5jbG9zZXN0KCcuanMtYWNjJyk7XG4gICAgaWYgKCFpdGVtKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtYWNjLWJvZHknKTtcbiAgICBpZiAoIWNvbnRlbnQpIHJldHVybjsgLy8g0LfQsNGJ0LjRgtCwINC+0YIg0L7RiNC40LHQutC4XG5cbiAgICBjb25zdCBpc09wZW4gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgY29uc3QgY29udGVudEFjYyA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1ib2R5Jyk7XG4gICAgICBpZiAoY29udGVudEFjYykge1xuICAgICAgICBjb250ZW50QWNjLnN0eWxlLm1heEhlaWdodCA9IFwiMFwiO1xuICAgICAgfVxuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcbiAgICB9KTtcblxuICAgIC8vINC+0YLQutGA0YvQstCw0LXQvCDRgtC10LrRg9GJ0LjQuVxuICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBnZXRIZWlnaHRDb250ZW50QWNjKTtcbn1cblxuXG5mdW5jdGlvbiBnZXRIZWlnaHRDb250ZW50QWNjKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1hY2MtYm9keVwiKTtcbiAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuXG4iLCJmdW5jdGlvbiBhY3RpdmVMaW5rKGxpbmssIHRpbWVvdXRDbGFzcywgdGltZW91dEhyZWYpIHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCB0aW1lb3V0Q2xhc3MpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uID0gaHJlZiwgdGltZW91dEhyZWYpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBhY3RpdmVCdG4oYnRuLCB0aW1lb3V0Q2xhc3MpIHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIHRpbWVvdXRDbGFzcyk7XG4gIH0pXG59IiwiY29uc3QgYXV0aFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYXV0aC1jdXJyZW50XVwiKVxuY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hdXRoLXRhcmdldF1cIilcblxuaWYgKGF1dGhUYWJzLmxlbmd0aCA+IDAgJiYgYXV0aEJ0bi5sZW5ndGggPiAwKSB7XG4gIGF1dGhCdG4uZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGVsZW0uZGF0YXNldC5hdXRoVGFyZ2V0O1xuICAgICAgYXV0aFRhYnMuZm9yRWFjaChhdXRoVGFiID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIGlmIChhdXRoVGFiLmRhdGFzZXQuYXV0aEN1cnJlbnQgPT09IGlkKSB7XG4gICAgICAgICAgYXV0aFRhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYXV0aEJ0bi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhdXRoVGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuIiwiY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcbmNvbnN0IHZlaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlaWxcIilcbmNvbnN0IHZlaWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52ZWlsLW92ZXJsYXlcIilcbmlmIChkaXNhYmlsaXR5KSB7XG4gIGRpc2FiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBkaXNhYmlsaXR5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gICAgdmVpbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgdmVpbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICB9KTtcbn1cblxuaWYgKGF2YWlsYWJpbGl0eUNsb3NlKSB7XG4gIGF2YWlsYWJpbGl0eUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIHZlaWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHZlaWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgfSk7XG59XG5cbmlmIChhdmFpbGFiaWxpdHkpIHtcbiAgYXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INC60LvQuNC60L3Rg9C70Lgg0LjQvNC10L3QvdC+INCyIC5oZWFkZXJfX2F2YWlsYWJpbGl0eSwg0LAg0L3QtSDQstC90YPRgtGA0YwgLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXBcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX2F2YWlsYWJpbGl0eV93cmFwJykpIHtcbiAgICAgIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gICAgICB2ZWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIHZlaWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBmb250UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnQtcmFuZ2VcIik7XG5jb25zdCBjb250cmFzdFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFzdFwiKVxuY29uc3Qgc3BhY2luZ1JhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbmNvbnN0IHBob25lSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19tb2JfYmxvY2tfcGhvbmVcIilcbmNvbnN0IGxlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXScpXG5jb25zdCB0aGVtZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ0aGVtZVwiXScpO1xuXG5mdW5jdGlvbiBzYXZlU2V0dGluZyhrZXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBsb2FkU2V0dGluZyhrZXkpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoaW5wdXQpIHtcbiAgY29uc3QgZmlsbCA9IGlucHV0Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IG1pbiA9ICtpbnB1dC5taW47XG4gIGNvbnN0IG1heCA9ICtpbnB1dC5tYXg7XG4gIGNvbnN0IHZhbHVlID0gK2lucHV0LnZhbHVlO1xuICBjb25zdCBwZXJjZW50ID0gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDA7XG5cbiAgaWYgKGZpbGwpIHtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVscyA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1yYW5nZV9sYWJlbHMgc3BhblwiKTtcbiAgaWYgKGxhYmVscykge1xuICAgIGNvbnN0IHN0ZXAgPSAobWF4IC0gbWluKSAvIChsYWJlbHMubGVuZ3RoIC0gMSk7XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgoc3BhbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRocmVzaG9sZCA9IG1pbiArIGluZGV4ICogc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShibG9jaywgZm9udFNpemUpIHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQ3NSAmJiBmb250U2l6ZSA+IDE2KSB7XG4gICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VGhlbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcImRhcmtcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxpZ2h0XCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJkdW9cIikge1xuICAgIGNvbnN0IGlzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBpZiAoaXNEYXJrKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TGVhZGluZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibWVkaXVtXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJiaWdcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufVxuXG5mdW5jdGlvbiByZXN0b3JlU2V0dGluZ3MoKSB7XG4gIC8vIEZPTlRcbiAgY29uc3Qgc2F2ZWRGb250ID0gbG9hZFNldHRpbmcoXCJmb250LXNpemVcIik7XG4gIGlmIChmb250UmFuZ2UpIHtcbiAgICBpZiAoc2F2ZWRGb250ICE9PSBudWxsKSB7XG4gICAgICBmb250UmFuZ2UudmFsdWUgPSBzYXZlZEZvbnQ7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBzYXZlZEZvbnQgPT09IFwiMTZcIiA/IFwiXCIgOiBgJHtzYXZlZEZvbnR9cHhgO1xuICAgICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHNhdmVkRm9udCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvbnRSYW5nZS52YWx1ZSA9IFwiMTZcIjsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZm9udFJhbmdlKTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGNvbnN0IGNvbnRyYXN0Q2xhc3NlcyA9IFtcImNvbnRyYXN0LTFcIiwgXCJjb250cmFzdC0yXCIsIFwiY29udHJhc3QtNFwiXTtcbiAgY29uc3Qgc2F2ZWRDb250cmFzdCA9IGxvYWRTZXR0aW5nKFwiY29udHJhc3RcIik7XG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgaWYgKHNhdmVkQ29udHJhc3QgIT09IG51bGwpIHtcbiAgICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSBzYXZlZENvbnRyYXN0O1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICAgIGlmIChzYXZlZENvbnRyYXN0ICE9PSBcIjNcIikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHtzYXZlZENvbnRyYXN0fWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250cmFzdFJhbmdlLnZhbHVlID0gXCIzXCI7IC8vINC00LXRhNC+0LvRglxuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGNvbnRyYXN0UmFuZ2UpO1xuICB9XG5cbiAgLy8gU1BBQ0lOR1xuICBjb25zdCBzYXZlZFNwYWNpbmcgPSBsb2FkU2V0dGluZyhcImxldHRlci1zcGFjaW5nXCIpO1xuICBpZiAoc3BhY2luZ1JhbmdlKSB7XG4gICAgaWYgKHNhdmVkU3BhY2luZyAhPT0gbnVsbCkge1xuICAgICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gc2F2ZWRTcGFjaW5nO1xuICAgICAgaWYgKHNhdmVkU3BhY2luZyA9PT0gXCIwXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzYXZlZFNwYWNpbmcpfXB4YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gXCIwXCI7IC8vINC00LXRhNC+0LvRglxuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICBjb25zdCBzYXZlZFRoZW1lID0gbG9hZFNldHRpbmcoXCJ0aGVtZVwiKTtcbiAgaWYgKHNhdmVkVGhlbWUgJiYgdGhlbWVJbnB1dHMpIHtcbiAgICBhcHBseVRoZW1lKHNhdmVkVGhlbWUpO1xuICAgIGNvbnN0IHRoZW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGhlbWVcIl1bdmFsdWU9XCIke3NhdmVkVGhlbWV9XCJdYCk7XG4gICAgaWYgKHRoZW1lSW5wdXQpIHRoZW1lSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBzYXZlZExlYWRpbmcgPSBsb2FkU2V0dGluZyhcImxlYWRpbmdcIik7XG4gIGlmIChzYXZlZExlYWRpbmcgJiYgbGVhZGluZykge1xuICAgIGFwcGx5TGVhZGluZyhzYXZlZExlYWRpbmcpXG4gICAgY29uc3QgbGVhZGluZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl1bdmFsdWU9XCIke3NhdmVkTGVhZGluZ31cIl1gKTtcbiAgICBpZiAobGVhZGluZ0lucHV0KSBsZWFkaW5nSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVzdG9yZVNldHRpbmdzKClcblxuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNhdmVTZXR0aW5nKFwiZm9udC1zaXplXCIsIHZhbHVlKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHZhbHVlID09PSBcIjE2XCIgPyBcIlwiIDogYCR7dmFsdWV9cHhgO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgICBnZXRIZWlnaHRDb250ZW50QWNjKCk7XG4gICAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgICBjb25zdCBjb250cmFzdENsYXNzZXMgPSBbXCJjb250cmFzdC0xXCIsIFwiY29udHJhc3QtMlwiLCBcImNvbnRyYXN0LTRcIl07XG4gICAgZnVuY3Rpb24gc2V0Q29udHJhc3RNb2RlKHZhbHVlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb250cmFzdENsYXNzZXMpO1xuICAgICAgaWYgKHZhbHVlICE9PSBcIjNcIikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHt2YWx1ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udHJhc3RSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImNvbnRyYXN0XCIsIHZhbHVlKTtcbiAgICAgIHNldENvbnRyYXN0TW9kZSh2YWx1ZSk7XG4gICAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgaWYgKHNwYWNpbmdSYW5nZSkge1xuICAgIHNwYWNpbmdSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImxldHRlci1zcGFjaW5nXCIsIHZhbHVlKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcih2YWx1ZSl9cHhgO1xuICAgICAgfVxuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgICBnZXRIZWlnaHRDb250ZW50QWNjKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICBpZiAodGhlbWVJbnB1dHMpIHtcbiAgICB0aGVtZUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzYXZlU2V0dGluZyhcInRoZW1lXCIsIHZhbHVlKTtcbiAgICAgICAgYXBwbHlUaGVtZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChsZWFkaW5nKSB7XG4gICAgbGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJsZWFkaW5nXCIsIGl0ZW0udmFsdWUpO1xuICAgICAgICBhcHBseUxlYWRpbmcoaXRlbS52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgcmVzdG9yZVNldHRpbmdzKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGhlbWVcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlUaGVtZSh0aGVtZS52YWx1ZSlcbiAgICBjb25zdCBsaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5TGVhZGluZyhsaC52YWx1ZSlcbiAgICBjb25zdCBzcGFjaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzcGFjaW5nLnZhbHVlKSAqIDJ9cHhgO1xuICB9XG4gIGNvbnN0IGlucHV0Rm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKVxuICBpZiAocGhvbmVJbWcpIHtcbiAgICB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIGlucHV0Rm9udC52YWx1ZSlcbiAgfVxufSlcblxuY29uc3QgY2xlYXJBdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2YWlsYWJpbGl0eS1idG5cIilcbmlmIChjbGVhckF2YWlsYWJpbGl0eSkge1xuICBjbGVhckF2YWlsYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgXCJkYXJrXCIsXG4gICAgICBcImxpbmVIZWlnaHRCaWdcIixcbiAgICAgIFwibGluZUhlaWdodE1lZGl1bVwiLFxuICAgICAgXCJjb250cmFzdC0xXCIsXG4gICAgICBcImNvbnRyYXN0LTJcIixcbiAgICAgIFwiY29udHJhc3QtNFwiXG4gICAgKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJmb250LXNpemVcIik7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZvbnQtc2l6ZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNvbnRyYXN0XCIpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxlYWRpbmdcIik7XG5cbiAgICBpZiAoZm9udFJhbmdlKSB7XG4gICAgICBmb250UmFuZ2UudmFsdWUgPSAxNjsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgMTYpO1xuICAgIH1cblxuICAgIC8vIENPTlRSQVNUXG4gICAgaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSAzOyAvLyDQtNC10YTQvtC70YJcbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gU1BBQ0lOR1xuICAgIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICAgIHNwYWNpbmdSYW5nZS52YWx1ZSA9IDA7IC8vINC00LXRhNC+0LvRglxuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICAgIH1cblxuICAgIC8vIFRIRU1FXG4gICAgdGhlbWVJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQudmFsdWUgPT09IFwibGlnaHRcIjtcbiAgICB9KTtcbiAgICBhcHBseVRoZW1lKFwibGlnaHRcIik7XG5cbiAgICAvLyBMRUFESU5HXG4gICAgbGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbS52YWx1ZSA9PT0gXCJub3JtYWxcIjtcbiAgICB9KTtcbiAgICBhcHBseUxlYWRpbmcoXCJub3JtYWxcIik7XG4gIH0pXG59XG4iLCJjb25zdCBidG5CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmFja1wiKVxuaWYgKGJ0bkJhY2spIHtcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkJhY2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGJ0bkJhY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDMwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICB9LCAzMDApO1xuICB9KVxufVxuXG5jb25zdCBiYWNrQnRuQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWF1dGhfX2JhY2tcIik7XG5pZiAoYmFja0J0bkF1dGgpIHtcbiAgYmFja0J0bkF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygxKVxuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9KVxufVxuIiwiY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVfYnRuXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYnVyZ2VyLW1lbnVcIilcblxuaWYgKGJ1cmdlckJ0biAmJiBidXJnZXJNZW51KSB7XG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIGlmIChidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gICAgICB2ZWlsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgIHZlaWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgICAgdmVpbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICB2ZWlsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgIHZlaWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgdmVpbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbn0iLCJjb25zdCBsaW5rc1BvbGl0aWNzID0gW1xuICBcInByaXZhY3kuaHRtbFwiLFxuICBcImFjY2Vzc2liaWxpdHkuaHRtbFwiLFxuICBcImNvb2tpZS5odG1sXCIsXG5dXG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYW5nZUluZm8oYXJyYXkpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FycmF5LmlkfWApXG5cbiAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICBwYXJlbnQ6IGJvZHksXG4gICAgdGV4dDogYXJyYXkubGFiZWwsXG4gICAgc2VsZWN0b3I6IFwiaDFcIlxuICB9KVxuXG4gIGNvbnN0IGxpc3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19fbGlzdFwiKVxuICBsaXN0LmlubmVySFRNTCA9IFwiXCJcblxuICBhcnJheS5lbGVtZW50cy5mb3JFYWNoKChlbCxpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiBcImFcIixcbiAgICAgIGNsYXNzTmFtZTogW1wibGluay1pdGVtXCIsXCJkLWZsZXhcIixcImFsaWduLWl0ZW1zLXN0YXJ0XCIsXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLFwidHh0LXAxXCJdLFxuICAgIH0pXG5cbiAgICBsaW5rLmRhdGFzZXQubG9hZGluZyA9IFwibG9hZFwiXG5cbiAgICBsaW5rLmhyZWYgPSBsaW5rc1BvbGl0aWNzW2luZGV4XVxuXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwic3BhblwiLFxuICAgICAgdGV4dDogZWwubGFiZWxcbiAgICB9KVxuXG4gICAgY29uc3Qgc3ZnID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogXCJzcGFuXCIsXG4gICAgICBjbGFzc05hbWU6IFwibGluay1pdGVtX19zdmdcIixcbiAgICAgIHRleHQ6IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNy4yMDkzOCAxNC43Njk4QzYuOTIyMjggMTQuNDcxMyA2LjkzMTU5IDEzLjk5NjUgNy4yMzAxNyAxMy43MDk0TDExLjE2NzkgMTBMNy4yMzAxNyA2LjI5MDYyQzYuOTMxNTkgNi4wMDM1MyA2LjkyMjI4IDUuNTI4NzUgNy4yMDkzOCA1LjIzMDE3QzcuNDk2NDcgNC45MzE1OSA3Ljk3MTI1IDQuOTIyMjggOC4yNjk4MyA1LjIwOTM3TDEyLjc2OTggOS40NTkzN0MxMi45MTY5IDkuNjAwNzggMTMgOS43OTU5OSAxMyAxMEMxMyAxMC4yMDQgMTIuOTE2OSAxMC4zOTkyIDEyLjc2OTggMTAuNTQwNkw4LjI2OTgzIDE0Ljc5MDZDNy45NzEyNSAxNS4wNzc3IDcuNDk2NDcgMTUuMDY4NCA3LjIwOTM4IDE0Ljc2OThaXCIgZmlsbD1cInZhcigtLWNvbG9yLXNlY29uZGFyeSlcIj48L3BhdGg+XG4gICAgICAgICAgICAgPC9zdmc+YFxuICAgIH0pXG4gICAgbGluay5hcHBlbmQodGV4dCwgc3ZnKVxuICAgIGxpc3QuYXBwZW5kKGxpbmspXG4gIH0pXG59IiwiZnVuY3Rpb24gY2hhbmdlU3VwcG9ydEJsdWUoYXJyYXkpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FycmF5LmlkfWApXG4gIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgcGFyZW50OiBib2R5LFxuICAgIHNlbGVjdG9yOiBgaDFgLFxuICAgIHRleHQ6IGFycmF5LmxhYmVsXG4gIH0pXG5cbiAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICBwYXJlbnQ6IGJvZHksXG4gICAgc2VsZWN0b3I6IFwiYSAuc3VwcG9ydF9fbGlua190eHRcIixcbiAgICB0ZXh0OiBhcnJheS5lbGVtZW50cz8uWzBdPy5sYWJlbFxuICB9KVxufVxuXG5mdW5jdGlvbiBmYXFTdXBwb3J0KGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthcnJheS5pZH1gKVxuICBmaW5kUmVwbGFjZVRleHQoe1xuICAgIHBhcmVudDogYm9keSxcbiAgICBzZWxlY3RvcjogXCJoMlwiLFxuICAgIHRleHQ6IGFycmF5LmxhYmVsXG4gIH0pXG5cbiAgY29uc3QgbGlzdCA9IGJvZHkucXVlcnlTZWxlY3RvcihcIi5zdXBwb3J0X19ib3R0b21fbGlzdFwiKVxuXG4gIGxpc3QuaW5uZXJIVE1MID0gXCJcIlxuXG4gIGFycmF5LmVsZW1lbnRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcInN1cHBvcnRfX2l0ZW1cIiwgXCJqcy1hY2NcIiwgXCJwbGFjZWhvbGRlclwiXVxuICAgIH0pXG5cbiAgICBpdGVtLmRhdGFzZXQubG9hZGluZyA9IFwibG9hZFwiXG5cbiAgICBjb25zdCBoZWFkID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogW1wic3VwcG9ydF9faXRlbV9oXCIsXCJkLWZsZXhcIixcImFsaWduLWl0ZW1zLXN0YXJ0XCIsXCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLFwianMtYWNjLWJ0blwiXVxuICAgIH0pXG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiaDNcIixcbiAgICAgIGNsYXNzTmFtZTogW1widHh0LWgyXCIsXCJzdXBwb3J0X19pdGVtX2l0bGVcIl0sXG4gICAgICB0ZXh0OiBlbGVtPy5lbGVtZW50cz8uWzBdPy5sYWJlbFxuICAgIH0pXG5cbiAgICBjb25zdCBtYXJrZG93biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwic3BhblwiLFxuICAgICAgY2xhc3NOYW1lOiBcInN1cHBvcnRfX2l0ZW1fbWRcIixcbiAgICAgIHRleHQ6IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTUuMjMwMTcgNy4yMDkzOEM1LjUyODc1IDYuOTIyMjggNi4wMDM1MyA2LjkzMTU5IDYuMjkwNjMgNy4yMzAxN0wxMCAxMS4xNjc5TDEzLjcwOTQgNy4yMzAxN0MxMy45OTY1IDYuOTMxNTkgMTQuNDcxMyA2LjkyMjI4IDE0Ljc2OTggNy4yMDkzOEMxNS4wNjg0IDcuNDk2NDcgMTUuMDc3NyA3Ljk3MTI1IDE0Ljc5MDYgOC4yNjk4M0wxMC41NDA2IDEyLjc2OThDMTAuMzk5MiAxMi45MTY5IDEwLjIwNCAxMyAxMCAxM0M5Ljc5NTk5IDEzIDkuNjAwNzggMTIuOTE2OSA5LjQ1OTM4IDEyLjc2OThMNS4yMDkzOCA4LjI2OTgzQzQuOTIyMjggNy45NzEyNSA0LjkzMTU5IDcuNDk2NDcgNS4yMzAxNyA3LjIwOTM4WlwiIGZpbGw9XCJ2YXIoLS1jb2xvci1ibGFjaylcIj48L3BhdGg+XG4gICAgICAgICAgICAgPC9zdmc+YFxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5V3JhcCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcInN1cHBvcnRfX2l0ZW1fYl93cmFwXCIsXCJqcy1hY2MtYm9keVwiXVxuICAgIH0pXG5cbiAgICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogXCJwXCIsXG4gICAgICBjbGFzc05hbWU6IFwic3VwcG9ydF9faXRlbV9iXCIsXG4gICAgICB0ZXh0OiBlbGVtPy5lbGVtZW50cz8uWzFdPy5sYWJlbFxuICAgIH0pXG5cbiAgICBoZWFkLmFwcGVuZCh0aXRsZSwgbWFya2Rvd24pXG4gICAgYm9keVdyYXAuYXBwZW5kKGJvZHkpXG4gICAgaXRlbS5hcHBlbmQoaGVhZCwgYm9keVdyYXApXG4gICAgbGlzdC5hcHBlbmQoaXRlbSlcbiAgfSlcbn0iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHtBcywgY2xhc3NOYW1lLCB0ZXh0LCBpbWd9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KEFzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGlmICghaW1nKSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0ID8/IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zcmMgPSBpbWc7XG4gICAgZWxlbWVudC5hbHQgPSB0ZXh0IHx8IFwiXCI7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZnVuY3Rpb24gZmluZFJlcGxhY2VUZXh0KHtzZWxlY3RvciwgdGV4dCwgcGFyZW50LCBpbWd9KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSAocGFyZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICBpZiAoIWVsZW1lbnQpIHJldHVyblxuICBpZiAoaW1nKSB7XG4gICAgZWxlbWVudC5zcmMgPSBpbWc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0IHx8IFwiXCJcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RDb3VudHJ5KGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY291bnRyeV9ib2R5XCIpXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb3VudHJ5X2l0ZW1cIilcblxuICBib2R5LmlubmVySFRNTCA9IFwiXCJcbiAgaGVhZGVyLmlubmVySFRNTCA9IFwiXCJcblxuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY29udGluZW50ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogJ2RpdicsIGNsYXNzTmFtZTogW1wiaGVhZGVyX19jb3VudHJ5X2JvZHlfY29udGluZW50XCIsIFwiZC1mbGV4XCIsIFwiZmxleC1jb2x1bW5cIl1cbiAgICB9KVxuICAgIGNvbnN0IGNvbnRpbmVudFRleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiAnZGl2JywgY2xhc3NOYW1lOiBbJ3R4dC1idG4nXSwgdGV4dDogZWxlbWVudC5sYWJlbFxuICAgIH0pXG5cbiAgICBjb250aW5lbnQuYXBwZW5kKGNvbnRpbmVudFRleHQpXG5cbiAgICBlbGVtZW50LmVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1Db3VudHJ5ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIEFzOiAnZGl2JyxcbiAgICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICAgXCJoZWFkZXJfX2NvdW50cnlfaXRlbVwiLFxuICAgICAgICAgIFwiZC1mbGV4XCIsXG4gICAgICAgICAgXCJhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICBcImhlYWRlcl9fY291bnRyeV9ib2R5X2l0ZW1cIixcbiAgICAgICAgICBcImpzLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICAgIGl0ZW1Db3VudHJ5LnRhYkluZGV4ID0gLTFcbiAgICAgIGNvbnN0IGl0ZW1JbWdXcmFwcGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIEFzOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcImhlYWRlcl9fY291bnRyeV9pdGVtX2ltZ1wiXG4gICAgICB9KVxuICAgICAgY29uc3QgaXRlbUltZyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJpbWdcIixcbiAgICAgICAgaW1nOiBpdGVtPy5lbGVtZW50cz8uWzBdPy5zcmNcbiAgICAgIH0pXG5cbiAgICAgIGl0ZW1JbWdXcmFwcGVyLmFwcGVuZChpdGVtSW1nKVxuICAgICAgY29uc3QgaXRlbVRleHQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgQXM6IFwic3BhblwiLFxuICAgICAgICBjbGFzc05hbWU6IFtcImhlYWRlcl9fY291bnRyeV9pdGVtX25hbWVcIixcImpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiLFwidHh0LXAxXCIsIGl0ZW0/LmlzX2NoZWNrZWQgPT09IHRydWUgPyBcImlzU2VsZWN0ZWRcIjogbnVsbF0sXG4gICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgIH0pXG4gICAgICBpdGVtQ291bnRyeS5hcHBlbmQoaXRlbUltZ1dyYXBwZXIsIGl0ZW1UZXh0KVxuICAgICAgY29udGluZW50LmFwcGVuZChpdGVtQ291bnRyeSlcblxuICAgICAgaWYgKGl0ZW0/LmlzX2NoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVySW1nV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIEFzOiBcInNwYW5cIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaGVhZGVyX19jb3VudHJ5X2l0ZW1faW1nXCJcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCAgaGVhZGVySW1nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgQXM6IFwiaW1nXCIsIGltZzogaXRlbT8uZWxlbWVudHM/LlswXT8uc3JjXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIEFzOiBcInNwYW5cIixcbiAgICAgICAgICBjbGFzc05hbWU6IFtcImhlYWRlcl9fY291bnRyeV9pdGVtX25hbWVcIiwgXCJqcy1kcm9wZG93bi1pdGVtLW5hbWVcIiwgXCJ0eHQtcDFcIiwgXCJpc1NlbGVjdGVkXCJdLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtYXJrZG93biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIEFzOiBcInNwYW5cIixcbiAgICAgICAgICBjbGFzc05hbWU6IFtcImhlYWRlcl9fY291bnRyeV9pdGVtX21hcmtkb3duXCJdLFxuICAgICAgICAgIHRleHQ6IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01LjIzMDE3IDcuMjA5MzhDNS41Mjg3NSA2LjkyMjI4IDYuMDAzNTMgNi45MzE1OSA2LjI5MDYzIDcuMjMwMTdMMTAgMTEuMTY3OUwxMy43MDk0IDcuMjMwMTdDMTMuOTk2NSA2LjkzMTU5IDE0LjQ3MTMgNi45MjIyOCAxNC43Njk4IDcuMjA5MzhDMTUuMDY4NCA3LjQ5NjQ3IDE1LjA3NzcgNy45NzEyNSAxNC43OTA2IDguMjY5ODNMMTAuNTQwNiAxMi43Njk4QzEwLjM5OTIgMTIuOTE2OSAxMC4yMDQgMTMgMTAgMTNDOS43OTU5OSAxMyA5LjYwMDc4IDEyLjkxNjkgOS40NTkzOCAxMi43Njk4TDUuMjA5MzggOC4yNjk4M0M0LjkyMjI4IDcuOTcxMjUgNC45MzE1OSA3LjQ5NjQ3IDUuMjMwMTcgNy4yMDkzOFpcIiBmaWxsPVwiIzNCNTQ2NFwiIC8+XG4gICAgICAgICAgPC9zdmc+YFxuICAgICAgICB9KVxuXG4gICAgICAgIGhlYWRlckltZ1dyYXBwZXIuYXBwZW5kKGhlYWRlckltZylcbiAgICAgICAgaGVhZGVyLmFwcGVuZChoZWFkZXJJbWdXcmFwcGVyLCBoZWFkZXJUZXh0LCBtYXJrZG93bilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYm9keS5hcHBlbmQoY29udGluZW50KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RMYW5nKGFycmF5LCBsYW5nKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGFuZ19ib2R5XCIpXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nX2hlYWRcIilcblxuICBib2R5LmlubmVySFRNTCA9ICcnXG4gIHdoaWxlIChoZWFkZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChoZWFkZXIubGFzdENoaWxkKTtcbiAgfVxuXG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogW1wiaGVhZGVyX19sYW5nX2JvZHktaXRlbVwiLCBcImpzLWRyb3Bkb3duLWl0ZW1cIl1cbiAgICB9KVxuXG4gICAgaXRlbS50YWJJbmRleCA9IC0xXG5cbiAgICBjb25zdCBhY3RpdmVJdGVtQ2xhc3MgPSBlbGVtZW50LnZhbHVlID09PSBsYW5nID8gXCJpc1NlbGVjdGVkXCIgOiBudWxsXG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcImpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiLCBcInR4dC1wMVwiLCBcImhlYWRlcl9fbGFuZ19ib2R5X2l0ZW1fbmFtZVwiLGFjdGl2ZUl0ZW1DbGFzc10sXG4gICAgICB0ZXh0OiBlbGVtZW50LmxhYmVsXG4gICAgfSlcblxuICAgIGl0ZW1OYW1lLmRhdGFzZXQubGFuZyA9IGVsZW1lbnQudmFsdWVcbiAgICBpdGVtTmFtZS5kYXRhc2V0LnNob3J0ID0gZWxlbWVudC5kYXRhX2F0dHJpYnV0ZS5zaG9ydF9sYWJlbFxuXG4gICAgaXRlbS5hcHBlbmQoaXRlbU5hbWUpXG4gICAgYm9keS5hcHBlbmQoaXRlbSlcblxuICAgIGlmIChlbGVtZW50LnZhbHVlID09PSBsYW5nKSB7XG4gICAgICBjb25zdCBoZWFkZXJOYW1lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIEFzOiBcInNwYW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJoZWFkZXJfX2xhbmdfaGVhZF90eHRcIixcInR4dC1wMVwiLFwianMtZHJvcGRvd24taXRlbS1uYW1lXCJdLFxuICAgICAgICB0ZXh0OiBlbGVtZW50LmRhdGFfYXR0cmlidXRlLnNob3J0X2xhYmVsXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBtYXJrZG93biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJzcGFuXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJoZWFkZXJfX2xhbmdfaGVhZF9tYXJrZG93blwiLFxuICAgICAgICB0ZXh0OiBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTUuMjMwMTcgNy4yMDkzOEM1LjUyODc1IDYuOTIyMjggNi4wMDM1MyA2LjkzMTU5IDYuMjkwNjMgNy4yMzAxN0wxMCAxMS4xNjc5TDEzLjcwOTQgNy4yMzAxN0MxMy45OTY1IDYuOTMxNTkgMTQuNDcxMyA2LjkyMjI4IDE0Ljc2OTggNy4yMDkzOEMxNS4wNjg0IDcuNDk2NDcgMTUuMDc3NyA3Ljk3MTI1IDE0Ljc5MDYgOC4yNjk4M0wxMC41NDA2IDEyLjc2OThDMTAuMzk5MiAxMi45MTY5IDEwLjIwNCAxMyAxMCAxM0M5Ljc5NTk5IDEzIDkuNjAwNzggMTIuOTE2OSA5LjQ1OTM4IDEyLjc2OThMNS4yMDkzOCA4LjI2OTgzQzQuOTIyMjggNy45NzEyNSA0LjkzMTU5IDcuNDk2NDcgNS4yMzAxNyA3LjIwOTM4WlwiIGZpbGw9XCIjM0I1NDY0XCIvPlxuICAgICAgICA8L3N2Zz5gXG4gICAgICB9KVxuXG4gICAgICBoZWFkZXIuYXBwZW5kKGhlYWRlck5hbWUsIG1hcmtkb3duKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3hMYW5nKGFycmF5LCBsYW5nKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbW9iX2xhbmdcIilcbiAgYm9keS5pbm5lckhUTUwgPSAnJ1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiAnbGFiZWwnLFxuICAgICAgY2xhc3NOYW1lOiBcImhlYWRlcl9fbW9iX2xhbmdfbGFiZWxcIlxuICAgIH0pXG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiBcImlucHV0XCIsXG4gICAgICBjbGFzc05hbWU6IFwiaGVhZGVyX19tb2JfbGFuZ19pbnB1dFwiXG4gICAgfSlcblxuICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCJcbiAgICBpbnB1dC5uYW1lID0gXCJsYW5nTW9iXCJcbiAgICBpbnB1dC52YWx1ZSA9IGVsZW1lbnQudmFsdWVcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09IGxhbmcpIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwic3BhblwiLFxuICAgICAgY2xhc3NOYW1lOiBbXCJoZWFkZXJfX21vYl9sYW5nX3R4dFwiLCBcInR4dC1wMVwiXSxcbiAgICAgIHRleHQ6IGVsZW1lbnQubGFiZWxcbiAgICB9KVxuXG4gICAgbGFiZWwuYXBwZW5kKGlucHV0LCB0ZXh0KVxuICAgIGJvZHkuYXBwZW5kKGxhYmVsKVxuICB9KVxufVxuXG5mdW5jdGlvbiBoZXJvQmFubmVyVG9wKGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthcnJheS5pZH1gKVxuICBpZiAoIWJvZHkpIHJldHVyblxuICBjb25zdCBjbGFzc0xpc3RTbGlkZSA9IFtcbiAgICBgaGVyb19fc2xpZGUtLXByZS1sZWZ0YCxcbiAgICBgaGVyb19fc2xpZGUtLWxlZnRgLFxuICAgIGBoZXJvX19zbGlkZS0tbWFpbmAsXG4gICAgYGhlcm9fX3NsaWRlLS1yaWdodGAsXG4gICAgYGhlcm9fX3NsaWRlLS1wcmUtcmlnaHRgLFxuICBdXG4gIGFycmF5LmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gXCJkZXNrdG9wLXRvcC1iYW5uZXItaW1hZ2Utc2xpZGVyXCIpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQuaWR9YClcbiAgICAgIGxpc3QuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgY29uc29sZS5sb2cobGlzdClcbiAgICAgIGVsZW1lbnQuZWxlbWVudHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBbXCJoZXJvX19zbGlkZVwiLCBpbmRleCA8IDUgPyBjbGFzc0xpc3RTbGlkZVtpbmRleF0gOiBcIlwiXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICBBczogXCJpbWdcIixcbiAgICAgICAgICBjbGFzc05hbWU6IFwiaGVyb19fc3dpcGVyX2l0ZW1cIixcbiAgICAgICAgICBpbWc6IGVsLnNyY1xuICAgICAgICB9KVxuXG4gICAgICAgIHNsaWRlLmFwcGVuZChpbWcpXG4gICAgICAgIGxpc3QuYXBwZW5kKHNsaWRlKVxuICAgICAgfSlcblxuICAgIH0gZWxzZSBpZiAoYXJyYXkudHlwZSA9PT0gXCJEaXZcIikge1xuICAgICAgY29uc3QgaXRlbSA9IGJvZHkucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5pZH1gKVxuICAgICAgaWYgKCFpdGVtKSByZXR1cm5cbiAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiRGl2XCIgfHwgZWxlbWVudC50eXBlID09PSBcIkhlYWRsaW5lXCIgfHwgZWxlbWVudC50eXBlID09PSBcIkJ1dHRvblwiKSB7XG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gZWxlbWVudC5sYWJlbFxuICAgICAgfVxuICAgIH1cbiAgfSlcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0TGlzdChhcnJheSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19ibG9ja19ib3R0b21cIilcbiAgYm9keS5pbm5lckhUTUwgPSAnJ1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcImhlcm9fX2l0ZW1cIiwgXCJmbGV4LWNvbHVtblwiLCBcImZsZXgtbWQtcm93XCJdLFxuICAgIH0pXG5cbiAgICBjb25zdCBpY29uV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcImhlcm9fX2l0ZW1fc3ZnXCIsIFwiZC1mbGV4XCIsXCJhbGlnbi1pdGVtcy1jZW50ZXJcIixcImp1c3RpZnktY29udGVudC1jZW50ZXJcIiwgXCJwbGFjZWhvbGRlci1nbG93XCJdXG4gICAgfSlcblxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiBcImltZ1wiLFxuICAgIH0pXG4gICAgaWNvbi5zcmMgPSBlbGVtZW50Py5lbGVtZW50cz8uWzBdPy5zcmNcbiAgICBpY29uV3JhcHBlci5hcHBlbmQoaWNvbilcblxuICAgIGNvbnN0IGxlZnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBcImhlcm9fX2l0ZW1fcmlnaHRcIlxuICAgIH0pXG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiaDNcIixcbiAgICAgIGNsYXNzTmFtZTogW1wiaGVyb19faXRlbV90aXRsZVwiLCBcInR4dC1oMlwiXSxcbiAgICAgIHRleHQ6IGVsZW1lbnQ/LmxhYmVsXG4gICAgfSlcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwicFwiLFxuICAgICAgY2xhc3NOYW1lOiBbXCJoZXJvX19pdGVtX3RleHRcIixcInR4dC1wMVwiXSxcbiAgICAgIHRleHQ6IGVsZW1lbnQ/LmVsZW1lbnRzPy5bMV0/LnRleHRcbiAgICB9KVxuXG4gICAgbGVmdC5hcHBlbmQodGl0bGUsIHBhcmFncmFwaClcbiAgICBpdGVtLmFwcGVuZChpY29uV3JhcHBlciwgbGVmdClcbiAgICBib2R5LmFwcGVuZChpdGVtKVxuICB9KVxufVxuXG5mdW5jdGlvbiBhdHRlbnRpb25DaGFuZ2VUZXh0IChhcnJheSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YXJyYXkuaWR9YClcbiAgaWYgKCFib2R5KSByZXR1cm5cbiAgYXJyYXkuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gXCJxci1pbmZvXCIpIHtcbiAgICAgIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgICAgIHNlbGVjdG9yOiBgLiR7ZWxlbWVudC5pZH1gLFxuICAgICAgICB0ZXh0OiBlbGVtZW50LmxhYmVsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZWxlbWVudC50eXBlID09PSBcIkRpdlwiKSB7XG4gICAgICBjb25zdCBpdGVtID0gYm9keS5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50LnR5cGV9LSR7YXJyYXkuaWR9LSR7aW5kZXh9YClcbiAgICAgIGNvbnNvbGUubG9nKGAke2VsZW1lbnQudHlwZX0tJHthcnJheS5pZH0tJHtpbmRleH1gKVxuICAgICAgaWYgKCFpdGVtKSByZXR1cm5cbiAgICAgIGVsZW1lbnQuZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1DaGlsZHJlbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC50eXBlfS0ke2FycmF5LmlkfS0ke2luZGV4fS0tJHtlbC50eXBlfWApXG4gICAgICAgIGlmIChpdGVtQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gXCJJbWFnZVwiKSB7XG4gICAgICAgICAgICBpdGVtQ2hpbGRyZW4uc3JjID0gZWwuc3JjXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1DaGlsZHJlbi5pbm5lckhUTUwgPSBlbC50ZXh0XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiSGVhZGxpbmVcIiB8fCBlbGVtZW50LnR5cGUgPT09IFwiQnV0dG9uXCIpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC4ke2VsZW1lbnQudHlwZX0tJHthcnJheS5pZH1gKVxuICAgICAgaWYgKCFpdGVtKSByZXR1cm5cbiAgICAgIGl0ZW0uaW5uZXJIVE1MID0gZWxlbWVudC5sYWJlbFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbU1vYmlsZUluZm8oc3ZnLCB0aXRsZSwgdGV4dCkge1xuICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgQXM6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiBcIndoYXRfX2l0ZW1faVwiXG4gIH0pXG5cbiAgY29uc3QgaGVhZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIEFzOiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogW1wid2hhdF9faXRlbV9oXCIsXCJkLWZsZXhcIixcImFsaWduLWl0ZW1zLWNlbnRlclwiXSxcbiAgfSlcblxuICBjb25zdCBpY29uV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIEFzOiBcInNwYW5cIixcbiAgICBjbGFzc05hbWU6IFwid2hhdF9faXRlbV9zdmdcIixcbiAgICB0ZXh0OiBzdmdcbiAgfSlcblxuICBjb25zdCBoZWFkbGluZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIEFzOiBcImgzXCIsXG4gICAgY2xhc3NOYW1lOiBbXCJ3aGF0X19pdGVtX3RcIixcInR4dC1idG5cIl0sXG4gICAgdGV4dDogdGl0bGVcbiAgfSlcblxuICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVFbGVtZW50KHtcbiAgICBBczogXCJwXCIsXG4gICAgY2xhc3NOYW1lOiBbXCJ3aGF0X19pdGVtX3BcIiwgXCJ0eHQtcDJcIl0sXG4gICAgdGV4dFxuICB9KVxuXG4gIGhlYWQuYXBwZW5kKGljb25XcmFwcGVyLCBoZWFkbGluZSlcbiAgaXRlbS5hcHBlbmQoaGVhZCwgcGFyYWdyYXBoKVxuXG4gIHJldHVybiBpdGVtXG59XG5cbmZ1bmN0aW9uIG1vYmlsZUluZm8oYXJyYXkpIHtcbiAgY29uc29sZS5sb2coYXJyYXkpXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthcnJheS5pZH1gKVxuICBjb25zdCB0aXRsZSA9IGJvZHkucXVlcnlTZWxlY3RvcihcImgyXCIpXG4gIGNvbnN0IGxlZnQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC53aGF0X19pdGVtLTFgKVxuICBjb25zdCByaWdodCA9IGJvZHkucXVlcnlTZWxlY3RvcihgLndoYXRfX2l0ZW0tMmApXG4gIGNvbnN0IGltZyA9IGJvZHkucXVlcnlTZWxlY3RvcihcIi53aGF0X19pbWdcIilcbiAgY29uc3QgYnRuSXBob25lID0gYm9keS5xdWVyeVNlbGVjdG9yKFwiLndoYXQtaXBob25lXCIpXG4gIGNvbnN0IGJ0bkFuZHJvaWQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoXCIud2hhdC1hbmRyb2lkXCIpXG4gIGlmICh0aXRsZSkge1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGFycmF5LmVsZW1lbnRzPy5bMF0/LmxhYmVsXG4gIH1cblxuICBpZiAobGVmdCAmJiBhcnJheS5lbGVtZW50cz8uWzFdPy5lbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGVmdC5pbm5lckhUTUwgPSAnJ1xuICAgIGFycmF5LmVsZW1lbnRzWzFdLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gY3JlYXRlSXRlbU1vYmlsZUluZm8oZWxlbWVudC5lbGVtZW50c1swXS5jb250ZW50LCBlbGVtZW50LmxhYmVsLCBlbGVtZW50LmVsZW1lbnRzWzFdLnRleHQpXG4gICAgICBsZWZ0LmFwcGVuZChpdGVtKVxuICAgIH0pXG4gIH1cblxuICBpZiAocmlnaHQgJiYgYXJyYXkuZWxlbWVudHM/LlszXT8uZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgIHJpZ2h0LmlubmVySFRNTCA9ICcnXG4gICAgYXJyYXkuZWxlbWVudHNbM10uZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtTW9iaWxlSW5mbyhlbGVtZW50LmVsZW1lbnRzWzBdLmNvbnRlbnQsIGVsZW1lbnQubGFiZWwsIGVsZW1lbnQuZWxlbWVudHNbMV0udGV4dClcbiAgICAgIHJpZ2h0LmFwcGVuZChpdGVtKVxuICAgIH0pXG4gIH1cblxuICBpZiAoaW1nKSB7XG4gICAgaW1nLnNyYyA9IGFycmF5LmVsZW1lbnRzPy5bMl0/LnNyY1xuICB9XG5cbiAgYXJyYXkuZWxlbWVudHM/Lls0XT8uZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBpZiAoZWxlbWVudC5pZCA9PT0gJ2lwaG9uZScpIGJ0bklwaG9uZS5pbm5lckhUTUwgPSBlbGVtZW50LmxhYmVsXG4gICAgaWYgKGVsZW1lbnQuaWQgPT09ICdhbmRyb2lkJykgYnRuQW5kcm9pZC5pbm5lckhUTUwgPSBlbGVtZW50LmxhYmVsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlKGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoeV9fc3dpcGVyLXdyYXBwZXJcIilcbiAgY29uc3QgaGVhZGxpbmU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2h5X190aXRsZVwiKVxuICBib2R5LmlubmVySFRNTCA9ICcnXG4gIGhlYWRsaW5lLmlubmVySFRNTCA9IGFycmF5LmxhYmVsXG4gIGFycmF5LmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3Qgc2xpZGUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiBcImRpdlwiLFxuICAgICAgY2xhc3NOYW1lOiBbXCJzd2lwZXItc2xpZGVcIiwnd2h5X19zbGlkZScsIFwiZC1mbGV4XCJdXG4gICAgfSlcbiAgICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogW1wid2h5X19pdGVtXCIsXCJkLWZsZXhcIixcImZsZXgtY29sdW1uXCJdLFxuICAgIH0pXG5cbiAgICBsZXQgc3ZnLCB0aXRsZSwgcGFyYWdyYXBoO1xuXG4gICAgZWxlbWVudC5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbC50eXBlID09PSBcIkltYWdlXCIpIHtcbiAgICAgICAgc3ZnID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgQXM6IFwic3BhblwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJ3aHlfX2l0ZW1fbnVtYmVyXCIsXG4gICAgICAgICAgdGV4dDogZWwuY29udGVudFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKGVsLnR5cGUgPT09IFwiSGVhZGxpbmVcIikge1xuICAgICAgICB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgIEFzOiBcImgzXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOiBbXCJ3aHlfX2l0ZW1fdGl0bGVcIixcInR4dC1oMlwiXSxcbiAgICAgICAgICB0ZXh0OiBlbC5sYWJlbFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKGVsLnR5cGUgPT09IFwiUGFyYWdyYXBoXCIpIHtcbiAgICAgICAgcGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgQXM6IFwicFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogW1wid2h5X3BcIixcInR4dC1wMVwiXSxcbiAgICAgICAgICB0ZXh0OiBlbC50ZXh0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuXG5cblxuICAgIGl0ZW0uYXBwZW5kKHN2ZywgdGl0bGUsIHBhcmFncmFwaClcbiAgICBzbGlkZS5hcHBlbmQoaXRlbSlcbiAgICBib2R5LmFwcGVuZChzbGlkZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmFxQ3JlYXRlKGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthcnJheS5pZH1gKVxuICBjb25zb2xlLmxvZyhib2R5LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25zX190aXRsZVwiKSlcbiAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICBzZWxlY3RvcjogXCIucXVlc3Rpb25zX190aXRsZVwiLFxuICAgIHBhcmVudDogYm9keSxcbiAgICB0ZXh0OiBhcnJheS5lbGVtZW50cz8uWzBdPy5sYWJlbFxuICB9KVxuXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucXVlc3Rpb25zX19saXN0YClcbiAgbGlzdC5pbm5lckhUTUwgPSBcIlwiXG4gIGFycmF5LmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJkaXZcIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJxdWVzdGlvbnNfX2l0ZW1cIiwgXCJkLWZsZXhcIixcImZsZXgtY29sdW1uXCJdLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgQXM6IFwiaDNcIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJxdWVzdGlvbnNfX2l0ZW1fdGl0bGVcIixcInR4dC1oMVwiXSxcbiAgICAgICAgdGV4dDogZWxlbWVudC5sYWJlbFxuICAgICAgfSlcblxuXG4gICAgICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgQXM6IFwicFwiLFxuICAgICAgICBjbGFzc05hbWU6IFtcInF1ZXN0aW9uc19faXRlbV9wXCIsXCJ0eHQtcDFcIl0sXG4gICAgICAgIHRleHQ6IGVsZW1lbnQuZWxlbWVudHM/LlswXT8udGV4dFxuICAgICAgfSlcblxuICAgICAgaXRlbS5hcHBlbmQodGl0bGUsIHBhcmFncmFwaClcbiAgICAgIGxpc3QuYXBwZW5kKGl0ZW0pXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBmb290ZXJJbmZvKGFycmF5KSB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIFwiL3ByaXZhY3kuaHRtbFwiLFxuICAgIFwiYWNjZXNzaWJpbGl0eS5odG1sXCIsXG4gICAgXCIvY29va2llLmh0bWxcIlxuICBdXG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FycmF5LmlkfWApXG4gIGJvZHkuaW5uZXJIVE1MID0gJydcbiAgYXJyYXkuZWxlbWVudHMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogJ2EnLFxuICAgICAgY2xhc3NOYW1lOiBbXCJmb290ZXJfX2xpbmtcIiwgXCJ0eHQtcDNcIl0sXG4gICAgICB0ZXh0OiBlbGVtLmxhYmVsXG4gICAgfSlcbiAgICBsaW5rLmhyZWYgPSBsaW5rc1tpbmRleF1cblxuICAgIGJvZHkuYXBwZW5kKGxpbmspXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNvb2tpZUNoYW5nZXMoYXJyYXkpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FycmF5LmlkfWApXG4gIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgc2VsZWN0b3I6IFwiLmNvb2tpZV9fdGV4dFwiLFxuICAgIHBhcmVudDogYm9keSxcbiAgICB0ZXh0OiBhcnJheS5sYWJlbFxuICB9KVxuXG4gIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgcGFyZW50OiBib2R5LFxuICAgIHNlbGVjdG9yOiBcIi5jb29raWVfX2xpbmtcIixcbiAgICB0ZXh0OiBhcnJheS5lbGVtZW50cz8uWzBdPy5sYWJlbFxuICB9KVxuXG4gIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgcGFyZW50OiBib2R5LFxuICAgIHNlbGVjdG9yOiBcIi5jb29raWVfX3N1Y2Nlc3NcIixcbiAgICB0ZXh0OiBhcnJheS5lbGVtZW50cz8uWzFdPy5sYWJlbFxuICB9KVxuXG59XG5cbmZ1bmN0aW9uIGF2YWlsYWJpbGl0eUNoYW5nZXMoYXJyYXkpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FycmF5LmlkfWApXG4gIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgcGFyZW50OiBib2R5LFxuICAgIHNlbGVjdG9yOiBcImgzXCIsXG4gICAgdGV4dDogYXJyYXkubGFiZWxcbiAgfSlcblxuICBhcnJheS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgICBwYXJlbnQ6IGJvZHksXG4gICAgICBzZWxlY3RvcjogYC4ke2VsZW1lbnQuaWR9YCxcbiAgICAgIHRleHQ6IGVsZW1lbnQ/LnRleHQ/Lmxlbmd0aCA+IDAgPyBlbGVtZW50LnRleHQgOiBlbGVtZW50LmxhYmVsXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZXhwbG9yZUNoYW5nZXMoYXJyYXkpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2FycmF5LmlkfWApXG4gIGNvbnN0IGxpc3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuZXhwbG9yZV9fbGlzdFwiKVxuICBmaW5kUmVwbGFjZVRleHQoe1xuICAgIHNlbGVjdG9yOiBcImgyXCIsXG4gICAgcGFyZW50OiBib2R5LFxuICAgIHRleHQ6IGFycmF5LmxhYmVsXG4gIH0pXG4gIGxpc3QuaW5uZXJIVE1MID0gXCJcIlxuICBhcnJheS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGFjYyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcImV4cGxvcmVfX2l0ZW1cIiwgXCJqcy1hY2NcIl1cbiAgICB9KVxuXG4gICAgY29uc3QgaGVhZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcImV4cGxvcmVfX2l0ZW1faFwiLFwiZC1mbGV4XCIsXCJhbGlnbi1pdGVtcy1jZW50ZXJcIixcImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIsXCJqcy1hY2MtYnRuXCJdLFxuICAgIH0pXG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiaDNcIixcbiAgICAgIGNsYXNzTmFtZTogW1widHh0LWgyXCIsXCJleHBsb3JlX19pdGVtX3RpdGxlXCJdLFxuICAgICAgdGV4dDogZWxlbWVudC5sYWJlbFxuICAgIH0pXG4gICAgY29uc3QgbWFya2Rvd24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgIEFzOiBcInNwYW5cIiwgY2xhc3NOYW1lOiBcImV4cGxvcmVfX2l0ZW1fbWRcIixcbiAgICAgIHRleHQ6IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTUuMjMwMTcgNy4yMDkzOEM1LjUyODc1IDYuOTIyMjggNi4wMDM1MyA2LjkzMTU5IDYuMjkwNjMgNy4yMzAxN0wxMCAxMS4xNjc5TDEzLjcwOTQgNy4yMzAxN0MxMy45OTY1IDYuOTMxNTkgMTQuNDcxMyA2LjkyMjI4IDE0Ljc2OTggNy4yMDkzOEMxNS4wNjg0IDcuNDk2NDcgMTUuMDc3NyA3Ljk3MTI1IDE0Ljc5MDYgOC4yNjk4M0wxMC41NDA2IDEyLjc2OThDMTAuMzk5MiAxMi45MTY5IDEwLjIwNCAxMyAxMCAxM0M5Ljc5NTk5IDEzIDkuNjAwNzggMTIuOTE2OSA5LjQ1OTM4IDEyLjc2OThMNS4yMDkzOCA4LjI2OTgzQzQuOTIyMjggNy45NzEyNSA0LjkzMTU5IDcuNDk2NDcgNS4yMzAxNyA3LjIwOTM4WlwiIGZpbGw9XCJ2YXIoLS1jb2xvci1ibGFjaylcIj48L3BhdGg+XG4gICAgICAgICAgICAgPC9zdmc+YFxuICAgIH0pXG5cbiAgICBjb25zdCBhY2NCb2R5V3JhcCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICBjbGFzc05hbWU6IFtcImV4cGxvcmVfX2l0ZW1fYl93cmFwXCIsXCJqcy1hY2MtYm9keVwiXVxuICAgIH0pXG5cbiAgICBjb25zdCBhY2NCb2R5ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICBBczogXCJkaXZcIixcbiAgICAgIGNsYXNzTmFtZTogW1wiZXhwbG9yZV9faXRlbV9iXCIsIFwiZC1mbGV4XCIsIFwiZmxleC1jb2x1bW5cIl1cbiAgICB9KVxuXG4gICAgaGVhZC5hcHBlbmQodGl0bGUsIG1hcmtkb3duKVxuICAgIGFjY0JvZHlXcmFwLmFwcGVuZChhY2NCb2R5KVxuICAgIGFjYy5hcHBlbmQoaGVhZCwgYWNjQm9keVdyYXApXG5cbiAgICBlbGVtZW50LmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgYWNjSXRlbSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJkaXZcIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJleHBsb3JlX19pdGVtX2lcIiwgXCJkLWZsZXhcIl1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFjY0l0ZW1SaWdodCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJkaXZcIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJleHBsb3JlX19pdGVtX2lfclwiXVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWNjSXRlbVJpZ2h0SGVhZCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJkaXZcIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJleHBsb3JlX19pdGVtX2lfcl9oXCIsIFwiZC1mbGV4XCIsIFwiYWxpZ24taXRlbXMtY2VudGVyXCIsIFwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIl1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFjY0l0ZW1SaWdodExlZnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgQXM6IFwiZGl2XCIsXG4gICAgICAgIGNsYXNzTmFtZTogW1wiZXhwbG9yZV9faXRlbV9pX3JfbFwiLCBcImQtZmxleFwiLCBcImFsaWduLWl0ZW1zLWNlbnRlclwiXVxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWNjSXRlbVJpZ2h0U3ZnID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIEFzOiBcInNwYW5cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcImV4cGxvcmVfX2l0ZW1faV9yX2hfc3ZnXCIsXG4gICAgICAgIHRleHQ6IGVsLmVsZW1lbnRzWzBdLmNvbnRlbnRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGFjY0l0ZW1OYW1lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIEFzOiBcImg0XCIsXG4gICAgICAgIGNsYXNzTmFtZTogW1wiZXhwbG9yZV9faXRlbV9pX3RpdGxlXCIsXCJ0eHQtcDFcIl0sXG4gICAgICAgIHRleHQ6IGVsLmxhYmVsXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBpdGVtQ2hldnJvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJkaXZcIixcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJleHBsb3JlX19pdGVtX19pX2xcIixcImQtZmxleFwiLFwiYWxpZ24taXRlbXMtY2VudGVyXCJdXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBhY2NJdGVtQm9keSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICBBczogXCJkaXZcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcImV4cGxvcmVfX2l0ZW1faV9yX2JcIlxuICAgICAgfSlcblxuICAgICAgY29uc3QgYWNjSXRlbUJvZHlQID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIEFzOiBcInBcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInR4dC1wMlwiLFxuICAgICAgICB0ZXh0OiBlbC5lbGVtZW50c1sxXS5sYWJlbFxuICAgICAgfSlcblxuICAgICAgYWNjSXRlbVJpZ2h0TGVmdC5hcHBlbmQoYWNjSXRlbVJpZ2h0U3ZnLCBhY2NJdGVtTmFtZSlcbiAgICAgIGFjY0l0ZW1SaWdodEhlYWQuYXBwZW5kKGFjY0l0ZW1SaWdodExlZnQsIGl0ZW1DaGV2cm9uKVxuICAgICAgYWNjSXRlbUJvZHkuYXBwZW5kKGFjY0l0ZW1Cb2R5UClcbiAgICAgIGFjY0l0ZW1SaWdodC5hcHBlbmQoYWNjSXRlbVJpZ2h0SGVhZCwgYWNjSXRlbUJvZHkpXG4gICAgICBhY2NJdGVtLmFwcGVuZChhY2NJdGVtUmlnaHQpXG4gICAgICBhY2NCb2R5LmFwcGVuZChhY2NJdGVtKVxuICAgIH0pXG5cbiAgICBsaXN0LmFwcGVuZChhY2MpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZhcU1vYmlsZShhcnJheSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YXJyYXkuaWR9YClcblxuICBmaW5kUmVwbGFjZVRleHQoe1xuICAgIHBhcmVudDogYm9keSxcbiAgICBzZWxlY3RvcjogXCJoMlwiLFxuICAgIHRleHQ6IGFycmF5LmxhYmVsXG4gIH0pXG5cbiAgYXJyYXkuZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgaWYgKGVsLnR5cGUgPT09IFwiTGlua1wiKSB7XG4gICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICBwYXJlbnQ6IGJvZHksXG4gICAgICAgIHNlbGVjdG9yOiAnYSBzcGFuJyxcbiAgICAgICAgdGV4dDogZWwubGFiZWxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgICAgIHBhcmVudDogYm9keSxcbiAgICAgICAgc2VsZWN0b3I6ICdwJyxcbiAgICAgICAgdGV4dDogZWwubGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBtb2JpbGVNZW51Q2hhbmdlKGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthcnJheS5pZH1gKVxuICBhcnJheS5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGlmIChlbGVtZW50LmlkID09PSBcInBlcnNvbmFsLWFjY291bnRcIikge1xuICAgICAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICAgICAgcGFyZW50OiBib2R5LFxuICAgICAgICBzZWxlY3RvcjogYC4ke2VsZW1lbnQuaWR9YCxcbiAgICAgICAgdGV4dDogZWxlbWVudC5sYWJlbFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaWQgPT09IFwiZG93bmxvYWQtYnV0dG9uc1wiKSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICAgIHBhcmVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudC5pZH1gKSxcbiAgICAgICAgICBzZWxlY3RvcjogYC4ke2VsLmlkfWAsXG4gICAgICAgICAgdGV4dDogZWwubGFiZWxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgICAgIHBhcmVudDogYm9keSxcbiAgICAgICAgc2VsZWN0b3I6IGAuJHtlbGVtZW50LmlkfSAubGluay1jdXN0b21fX25hbWVgLFxuICAgICAgICB0ZXh0OiBlbGVtZW50LmxhYmVsXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gc2xvZ2FuQ2hhbmdlKGFycmF5KSB7XG4gIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgc2VsZWN0b3I6IGAuJHthcnJheS5pZH1gLFxuICAgIHRleHQ6IGFycmF5LmxhYmVsLFxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gd2hhdEluY2x1ZGVkKGFycmF5KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHthcnJheS5pZH1gKVxuICBmaW5kUmVwbGFjZVRleHQoe1xuICAgIHNlbGVjdG9yOiBgLiR7YXJyYXkuaWR9IGgyYCxcbiAgICBwYXJlbnQ6IGJvZHksXG4gICAgdGV4dDogYXJyYXkubGFiZWxcbiAgfSlcblxuICBhcnJheS5lbGVtZW50c1sxXS5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9vbHRpcD1cIiR7ZWwuaWR9XCJdYClcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBlbC5sYWJlbClcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1icy1vcmlnaW5hbC10aXRsZVwiLCBlbC5sYWJlbClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbWluZ1Nvb24oYXJyYXkpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbWluZy1zb29uXCIpXG4gIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmlubmVySFRNTCA9IGFycmF5LmxhYmVsXG4gIH0pXG59XG5cbmNvbnN0IHRvb2x0aXBPcHRpb25zID0gIHtcbiAgc2VydmljZToge1xuICAgIHRyaWdnZXI6IFwibWFudWFsXCIsXG4gICAgY3VzdG9tQ2xhc3M6IFwid2hhdF9fdHQgd2hhdF9fdHRfc2VydmljZVwiLFxuICAgIGRlbGF5OiA2MDAsXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgcG9wcGVyQ29uZmlnKGRlZmF1bHRDb25maWcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRlZmF1bHRDb25maWcsXG4gICAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAgIC4uLihkZWZhdWx0Q29uZmlnPy5tb2RpZmllcnM/LmZpbHRlcihtID0+IG0ubmFtZSA9PT0gJ2Fycm93JykgfHwgW10pLCAvLyA84oCUINC+0YHRgtCw0LLQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtC60YMg0YHRgtGA0LXQu9C60LhcbiAgICAgICAgICB7IG5hbWU6ICdldmVudExpc3RlbmVycycsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAncHJldmVudE92ZXJmbG93JywgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6ICdmbGlwJywgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6ICdvZmZzZXQnLCBvcHRpb25zOiB7IG9mZnNldDogWzAsIDEwXSB9IH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgbWFya2V0OiB7XG4gICAgdHJpZ2dlcjogXCJtYW51YWxcIixcbiAgICBjdXN0b21DbGFzczogXCJ3aGF0X190dCB3aGF0X190dF9tYXJrZXRcIixcbiAgICBkZWxheTogNjAwLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHBvcHBlckNvbmZpZyhkZWZhdWx0Q29uZmlnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICAuLi4oZGVmYXVsdENvbmZpZz8ubW9kaWZpZXJzPy5maWx0ZXIobSA9PiBtLm5hbWUgPT09ICdhcnJvdycpIHx8IFtdKSwgLy8gPOKAlCDQvtGB0YLQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLQutGDINGB0YLRgNC10LvQutC4XG4gICAgICAgICAgeyBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnZmxpcCcsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnb2Zmc2V0Jywgb3B0aW9uczogeyBvZmZzZXQ6IFswLCAyMF0gfSB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGNhbGw6IHtcbiAgICB0cmlnZ2VyOiBcIm1hbnVhbFwiLFxuICAgIGN1c3RvbUNsYXNzOiBcIndoYXRfX3R0IHdoYXRfX3R0X2NhbGxcIixcbiAgICBkZWxheTogNjAwLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHBvcHBlckNvbmZpZyhkZWZhdWx0Q29uZmlnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICAuLi4oZGVmYXVsdENvbmZpZz8ubW9kaWZpZXJzPy5maWx0ZXIobSA9PiBtLm5hbWUgPT09ICdhcnJvdycpIHx8IFtdKSwgLy8gPOKAlCDQvtGB0YLQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLQutGDINGB0YLRgNC10LvQutC4XG4gICAgICAgICAgeyBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnZmxpcCcsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnb2Zmc2V0Jywgb3B0aW9uczogeyBvZmZzZXQ6IFswLCAxMF0gfSB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHdhbGxldDoge1xuICAgIHRyaWdnZXI6IFwibWFudWFsXCIsXG4gICAgY3VzdG9tQ2xhc3M6IFwid2hhdF9fdHQgd2hhdF9fdHRfd2FsbGV0XCIsXG4gICAgZGVsYXk6IDYwMCxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBwb3BwZXJDb25maWcoZGVmYXVsdENvbmZpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAgLi4uKGRlZmF1bHRDb25maWc/Lm1vZGlmaWVycz8uZmlsdGVyKG0gPT4gbS5uYW1lID09PSAnYXJyb3cnKSB8fCBbXSksIC8vIDzigJQg0L7RgdGC0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0LrRgyDRgdGC0YDQtdC70LrQuFxuICAgICAgICAgIHsgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJywgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ2ZsaXAnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ29mZnNldCcsIG9wdGlvbnM6IHsgb2Zmc2V0OiBbMCwgMjVdIH0gfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICBob3VzZToge1xuICAgIHRyaWdnZXI6IFwibWFudWFsXCIsXG4gICAgY3VzdG9tQ2xhc3M6IFwid2hhdF9fdHQgd2hhdF9fdHRfaG91c2VcIixcbiAgICBkZWxheTogNjAwLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHBvcHBlckNvbmZpZyhkZWZhdWx0Q29uZmlnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICAuLi4oZGVmYXVsdENvbmZpZz8ubW9kaWZpZXJzPy5maWx0ZXIobSA9PiBtLm5hbWUgPT09ICdhcnJvdycpIHx8IFtdKSwgLy8gPOKAlCDQvtGB0YLQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLQutGDINGB0YLRgNC10LvQutC4XG4gICAgICAgICAgeyBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnZmxpcCcsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnb2Zmc2V0Jywgb3B0aW9uczogeyBvZmZzZXQ6IFswLCAyMF0gfSB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHJlbnQ6IHtcbiAgICB0cmlnZ2VyOiBcIm1hbnVhbFwiLFxuICAgIGN1c3RvbUNsYXNzOiBcIndoYXRfX3R0IHdoYXRfX3R0X3JlbnRcIixcbiAgICBkZWxheTogNjAwLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHBvcHBlckNvbmZpZyhkZWZhdWx0Q29uZmlnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICAuLi4oZGVmYXVsdENvbmZpZz8ubW9kaWZpZXJzPy5maWx0ZXIobSA9PiBtLm5hbWUgPT09ICdhcnJvdycpIHx8IFtdKSwgLy8gPOKAlCDQvtGB0YLQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLQutGDINGB0YLRgNC10LvQutC4XG4gICAgICAgICAgeyBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnZmxpcCcsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnb2Zmc2V0Jywgb3B0aW9uczogeyBvZmZzZXQ6IFswLCAxMF0gfSB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGRlYnQ6IHtcbiAgICB0cmlnZ2VyOiBcIm1hbnVhbFwiLFxuICAgIGN1c3RvbUNsYXNzOiBcIndoYXRfX3R0IHdoYXRfX3R0X2RlYnRcIixcbiAgICBkZWxheTogNjAwLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHBvcHBlckNvbmZpZyhkZWZhdWx0Q29uZmlnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICAuLi4oZGVmYXVsdENvbmZpZz8ubW9kaWZpZXJzPy5maWx0ZXIobSA9PiBtLm5hbWUgPT09ICdhcnJvdycpIHx8IFtdKSwgLy8gPOKAlCDQvtGB0YLQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLQutGDINGB0YLRgNC10LvQutC4XG4gICAgICAgICAgeyBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnZmxpcCcsIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgeyBuYW1lOiAnb2Zmc2V0Jywgb3B0aW9uczogeyBvZmZzZXQ6IFswLCAxMF0gfSB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIG1hcmtldHBsYWNlczoge1xuICAgIHRyaWdnZXI6IFwibWFudWFsXCIsXG4gICAgY3VzdG9tQ2xhc3M6IFwid2hhdF9fdHQgd2hhdF9fdHRfbWFya2V0cGxhY2VzXCIsXG4gICAgZGVsYXk6IDYwMCxcbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICBwb3BwZXJDb25maWcoZGVmYXVsdENvbmZpZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAgLi4uKGRlZmF1bHRDb25maWc/Lm1vZGlmaWVycz8uZmlsdGVyKG0gPT4gbS5uYW1lID09PSAnYXJyb3cnKSB8fCBbXSksIC8vIDzigJQg0L7RgdGC0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0LrRgyDRgdGC0YDQtdC70LrQuFxuICAgICAgICAgIHsgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJywgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgICB7IG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ2ZsaXAnLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIHsgbmFtZTogJ29mZnNldCcsIG9wdGlvbnM6IHsgb2Zmc2V0OiBbMCwgMTBdIH0gfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gcmVpbml0VG9vbHRpcHMoKSB7XG4gIGNvbnN0IHRvb2x0aXBUcmlnZ2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvb2x0aXBdJyk7XG5cbiAgLy8g0KPQvdC40YfRgtC+0LbQsNC10Lwg0YHRgtCw0YDRi9C1INGC0YPQu9GC0LjQv9GLXG4gIHRvb2x0aXBUcmlnZ2VyTGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gYm9vdHN0cmFwLlRvb2x0aXAuZ2V0SW5zdGFuY2UoZWwpO1xuICAgIGlmICh0b29sdGlwKSB0b29sdGlwLmRpc3Bvc2UoKTtcbiAgfSk7XG5cbiAgLy8g0KHQvtC30LTQsNGR0Lwg0LfQsNC90L7QstC+XG4gIHRvb2x0aXBUcmlnZ2VyTGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoIWJvb3RzdHJhcC5Ub29sdGlwLmdldEluc3RhbmNlKGVsKSkge1xuICAgICAgbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGVsLCB0b29sdGlwT3B0aW9uc1tlbC5kYXRhc2V0LnRvb2x0aXBdKTtcbiAgICB9XG4gIH0pO1xufSIsImNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZHJvcGRvd25FbGVtZW50LCBvcHRpb25zID0ge30sIG5vdFNlbGVjdGVkID0gZmFsc2VcbiAgKSB7XG4gICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duRWxlbWVudDtcbiAgICB0aGlzLmRyb3Bkb3duQm9keSA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1ib2R5XCIpO1xuICAgIHRoaXMuZHJvcGRvd25IZWFkID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWhlYWRcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuXG4gICAgdGhpcy5uYW1lU291cmNlID0gb3B0aW9ucy5uYW1lU291cmNlIHx8IFwiaW5uZXJUZXh0XCI7XG4gICAgdGhpcy5vblNlbGVjdCA9IG9wdGlvbnMub25TZWxlY3QgfHwgbnVsbDtcbiAgICB0aGlzLnNlbGN0ZWROb3QgPSBub3RTZWxlY3RlZDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJpbmRIZWFkZXIoKTtcbiAgICB0aGlzLmJpbmRCb2R5KCk7XG4gICAgdGhpcy5iaW5kT3V0c2lkZUNsaWNrKClcbiAgfVxuXG4gIGJpbmRPdXRzaWRlQ2xpY2soKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZHJvcGRvd24uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYmluZEhlYWRlcigpIHtcbiAgICBpZiAoIXRoaXMuZHJvcGRvd25IZWFkKSByZXR1cm47XG5cblxuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcm9wZG93bkhlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYmluZEJvZHkoKSB7XG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duQm9keSkgcmV0dXJuO1xuXG4gICAgLy8g0LTQtdC70LXQs9C40YDRg9C10Lwg0LrQu9C40LrQuFxuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuanMtZHJvcGRvd24taXRlbVwiKTtcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vINC00LXQu9C10LPQuNGA0YPQtdC8INC60LvQsNCy0LjQsNGC0YPRgNGDXG4gICAgdGhpcy5kcm9wZG93bkJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmpzLWRyb3Bkb3duLWl0ZW1cIik7XG4gICAgICBpZiAoaXRlbSAmJiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzUHJldkl0ZW0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bkJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93bi1pdGVtXCIpKTsgLy8g0LDQutGC0YPQsNC70YzQvdGL0LVcbiAgICB9XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNlbGVjdENvdW50cnkoZWxlbSkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bkJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93bi1pdGVtXCIpKTtcblxuICAgICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd24taXRlbS1uYW1lJyk7XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LnJlbW92ZShcImlzU2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuYW1lRWwgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taXRlbS1uYW1lXCIpO1xuICAgICAgbGV0IHNlbGVjdGVkTmFtZSA9IFwiXCI7XG5cbiAgICAgIGlmICh0aGlzLm5hbWVTb3VyY2UgPT09IFwiaW5uZXJUZXh0XCIpIHtcbiAgICAgICAgc2VsZWN0ZWROYW1lID0gbmFtZUVsPy5pbm5lclRleHQ7XG4gICAgICB9IGVsc2UgaWYgKG5hbWVFbD8uZGF0YXNldCkge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWwuZGF0YXNldFt0aGlzLm5hbWVTb3VyY2VdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZEltZyA9IGVsZW0ucXVlcnlTZWxlY3RvcihcImltZ1wiKT8uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuXG4gICAgICBjb25zdCBoZWFkSW1nID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgIGNvbnN0IGhlYWROYW1lID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG5cbiAgICAgIGlmIChzZWxlY3RlZE5hbWUgJiYgaGVhZE5hbWUpIHtcbiAgICAgICAgaGVhZE5hbWUuaW5uZXJUZXh0ID0gc2VsZWN0ZWROYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ZWRJbWcgJiYgaGVhZEltZykge1xuICAgICAgICBoZWFkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxlY3RlZEltZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgbmFtZUVsLmNsYXNzTGlzdC5hZGQoXCJpc1NlbGVjdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyDQstGL0LfRi9Cy0LDQtdC8INC60L7Qu9Cx0Y3Quiwg0LXRgdC70Lgg0LXRgdGC0YxcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vblNlbGVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMub25TZWxlY3QoeyBlbGVtZW50OiBlbGVtIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c05leHRJdGVtKCkge1xuICAgIGlmICghdGhpcy5jb3VudHJ5SXRlbXMpIHtcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWRyb3Bkb3duLWl0ZW1cIikpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXNJbmRleCA8IHRoaXMuY291bnRyeUl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXgrKztcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zW3RoaXMuY3VycmVudEZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNQcmV2SXRlbSgpIHtcbiAgICBpZiAoIXRoaXMuY291bnRyeUl0ZW1zKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bkJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93bi1pdGVtXCIpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZHJvcGRvd25Jbml0KCkge1xuICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY291bnRyeVwiKTtcblxuICBpZiAoZHJvcGRvd25zKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25zLCB7fSwgdHJ1ZSk7XG4gICAgZHJvcGRvd25zLmRyb3Bkb3duSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChkcm9wZG93bnMpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgICAgIGlmICghZHJvcGRvd25zLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsZXQgZnVuY0Ryb3Bkb3duID0gKCkgPT4ge31cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmRleFwiKSkge1xuICAgIGZ1bmNEcm9wZG93biA9ICgpID0+IHtyZW5kZXIoKX1cbiAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaXZhY3lcIikpIHtcbiAgICBmdW5jRHJvcGRvd24gPSAoKSA9PiB7cmVuZGVyUG9saXRpY3MoXCJwcml2YWN5XCIpfTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY2Vzc2liaWxpdHlcIikpIHtcbiAgICBmdW5jRHJvcGRvd24gPSAoKSA9PiB7cmVuZGVyUG9saXRpY3MoXCJhY2Nlc3NpYmlsaXR5XCIpfTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZVBhZ2VcIikpIHtcbiAgICBmdW5jRHJvcGRvd24gPSAoKSA9PiB7cmVuZGVyUG9saXRpY3MoXCJjb29raWVcIil9O1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VwcG9ydFwiKSkge1xuICAgIGZ1bmNEcm9wZG93biA9ICgpID0+IHtyZW5kZXJTdXBwb3J0KCl9XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpKSB7XG4gICAgZnVuY0Ryb3Bkb3duID0gKCkgPT4ge3JlbmRlckluZm8oKX1cbiAgfVxuXG5cbiAgY29uc3QgZHJvcGRvd25MYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xhbmdcIik7XG4gIGlmIChkcm9wZG93bkxhbmcpIHtcbiAgICBjb25zdCBpbnN0YW5jZUxhbmcgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25MYW5nLCB7XG4gICAgICBuYW1lU291cmNlOiBcInNob3J0XCIsXG4gICAgICBvblNlbGVjdDogKHtlbGVtZW50fSkgPT4ge1xuICAgICAgICBzYXZlU2V0dGluZyhcImxhbmdcIiwgZWxlbWVudC5maXJzdENoaWxkLmRhdGFzZXQubGFuZyk7XG4gICAgICAgIGZ1bmNEcm9wZG93bigpXG4gICAgICB9XG4gICAgfSwgdHJ1ZSApO1xuICAgIGRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VMYW5nO1xuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGRyb3Bkb3duTGFuZykge1xuICAgICAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlO1xuICAgICAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIGRyb3Bkb3duSW5zdGFuY2U/LmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoZWNrYm94Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tb2JfbGFuZ1wiKVxuICBpZiAoY2hlY2tib3hCb2R5KSB7XG4gICAgY2hlY2tib3hCb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQuY2xvc2VzdChcImlucHV0LmhlYWRlcl9fbW9iX2xhbmdfaW5wdXRcIik7XG4gICAgICBpZiAoIWlucHV0KSByZXR1cm47XG5cbiAgICAgIC8vINC/0L7QvNC10YfQsNC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C5INGP0LfRi9C6INCyIGxvY2FsU3RvcmFnZVxuICAgICAgY29uc3QgbGFuZyA9IGlucHV0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJsYW5nXCIsIGxhbmcpO1xuXG4gICAgICAvLyDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L7QsdC90L7QstC70Y/QtdC8INC40L3RgtC10YDRhNC10LnRgVxuICAgICAgZnVuY0Ryb3Bkb3duKCk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGRyb3Bkb3duQXV0aExhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhfX2xhbmdcIilcbiAgaWYgKGRyb3Bkb3duQXV0aExhbmcpIHtcbiAgICBjb25zdCBpbnN0YW5jZUxhbmcgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25BdXRoTGFuZywge1xuICAgICAgb25TZWxlY3Q6ICh7ZWxlbWVudH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgIH1cbiAgICB9LCB0cnVlKVxuICAgIGRyb3Bkb3duQXV0aExhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChkcm9wZG93bkF1dGhMYW5nKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkluc3RhbmNlID0gZHJvcGRvd25BdXRoTGFuZy5kcm9wZG93bkluc3RhbmNlO1xuICAgICAgaWYgKCFkcm9wZG93bkF1dGhMYW5nLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9KVxufSIsImFzeW5jIGZ1bmN0aW9uIHRyYW5zbGF0aW9uRmV0Y2ggKGxhbmcsIHBhZ2UpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbXVuaWdwdC5taWRvdy5ydS9hcGkvcGFnZS1zdHJ1Y3R1cmUvJHtwYWdlfWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJBY2NlcHQtTGFuZ3VhZ2VcIjogbGFuZyxcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gIGF3YWl0IHJlcy5qc29uKCk7XG59IiwiZnVuY3Rpb24gZ2V0Q2Fyb3VzZWxJdGVtcygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZXJvX19zbGlkZScpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleChpZHgsIGxlbikge1xuICByZXR1cm4gKChpZHggJSBsZW4pICsgbGVuKSAlIGxlbjtcbn1cblxubGV0IGN1cnJlbnRJbmRleCA9IDI7XG5sZXQgYXV0b3BsYXlJbnRlcnZhbCA9IG51bGw7XG5sZXQgYXV0b3BsYXlTdGFydFRpbWUgPSBudWxsO1xuY29uc3QgQVVUT1BMQVlfVElNRSA9IDUwMDA7IC8vIDUg0YHQtdC60YPQvdC0XG5cbmZ1bmN0aW9uIHNldENpcmNsZVByb2dyZXNzKHBlcmNlbnQsIGNpcmNsZSkge1xuICBpZiAoIWNpcmNsZSkgcmV0dXJuO1xuICBjb25zdCByYWRpdXMgPSBjaXJjbGUuci5iYXNlVmFsLnZhbHVlO1xuICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG4gIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHtjaXJjdW1mZXJlbmNlfSAke2NpcmN1bWZlcmVuY2V9YDtcbiAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBjaXJjdW1mZXJlbmNlIC0gKHBlcmNlbnQgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2xhc3NlcygpIHtcbiAgY29uc3QgaXRlbXMgPSBnZXRDYXJvdXNlbEl0ZW1zKCk7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdoZXJvX19zbGlkZSc7XG4gICAgaWYgKGkgPT09IGdldEluZGV4KGN1cnJlbnRJbmRleCAtIDIsIGl0ZW1zLmxlbmd0aCkpIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGVyb19fc2xpZGUtLXByZS1sZWZ0Jyk7XG4gICAgaWYgKGkgPT09IGdldEluZGV4KGN1cnJlbnRJbmRleCAtIDEsIGl0ZW1zLmxlbmd0aCkpIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGVyb19fc2xpZGUtLWxlZnQnKTtcbiAgICBpZiAoaSA9PT0gZ2V0SW5kZXgoY3VycmVudEluZGV4LCBpdGVtcy5sZW5ndGgpKSAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoZXJvX19zbGlkZS0tbWFpbicpO1xuICAgIGlmIChpID09PSBnZXRJbmRleChjdXJyZW50SW5kZXggKyAxLCBpdGVtcy5sZW5ndGgpKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX3NsaWRlLS1yaWdodCcpO1xuICAgIGlmIChpID09PSBnZXRJbmRleChjdXJyZW50SW5kZXggKyAyLCBpdGVtcy5sZW5ndGgpKSBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX3NsaWRlLS1wcmUtcmlnaHQnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRCdG5Td2lwZSgpIHtcbiAgY29uc3QgbGVmdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zd2lwZXJfcHJldicpO1xuICBjb25zdCByaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zd2lwZXJfbmV4dCcpO1xuICBjb25zdCBsZWZ0QnRuTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19zd2lwZXJfbW9iX3ByZXZcIilcbiAgY29uc3QgcmlnaHRCdG5Nb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX3N3aXBlcl9tb2JfbmV4dFwiKVxuXG4gIHJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJpZ2h0QnRuKVxuICAgIHVwZGF0ZVNsaWRlKFwibmV4dFwiKVxuICB9KTtcbiAgbGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZVNsaWRlKFwicHJldlwiKSk7XG4gIHJpZ2h0QnRuTW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXBkYXRlU2xpZGUoXCJuZXh0XCIpKTtcbiAgbGVmdEJ0bk1vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZVNsaWRlKFwicHJldlwiKSk7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlU2xpZGUocG9zKSB7XG4gIGNvbnN0IGl0ZW1zID0gZ2V0Q2Fyb3VzZWxJdGVtcygpO1xuXG4gIGN1cnJlbnRJbmRleCA9IGdldEluZGV4KFxuICAgIGN1cnJlbnRJbmRleCArIChwb3MgPT09ICduZXh0JyA/IDEgOiAtMSksXG4gICAgaXRlbXMubGVuZ3RoXG4gICk7XG4gIHVwZGF0ZUNsYXNzZXMoKTtcbiAgcmVzdGFydEF1dG9wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGluaXRTd2lwZSgpIHtcbiAgY29uc3Qgc3dpcGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zd2lwZXJfd3JhcHBlcicpO1xuICBsZXQgc3RhcnRYID0gMDtcbiAgbGV0IGVuZFggPSAwO1xuICBjb25zdCBtaW5Td2lwZURpc3RhbmNlID0gNTA7XG5cbiAgc3dpcGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICBzdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIHN3aXBlcldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICBlbmRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBzd2lwZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgIGhhbmRsZVN3aXBlKCk7XG4gIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBkaWZmWCA9IHN0YXJ0WCAtIGVuZFg7XG4gICAgY29uc3QgaXRlbXMgPSBnZXRDYXJvdXNlbEl0ZW1zKCk7XG4gICAgY29uc3QgaXNSdGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicnRsXCIpXG4gICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IG1pblN3aXBlRGlzdGFuY2UpIHtcbiAgICAgIGlmIChkaWZmWCA+IDApIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gZ2V0SW5kZXgoY3VycmVudEluZGV4ICsgKGlzUnRsID8gLTEgOiAxKSwgaXRlbXMubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGdldEluZGV4KGN1cnJlbnRJbmRleCArIChpc1J0bCA/IDEgOiAtMSksIGl0ZW1zLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICB1cGRhdGVDbGFzc2VzKCk7XG4gICAgICByZXN0YXJ0QXV0b3BsYXkoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8g0JDQstGC0L7Qv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0Lgg0L/RgNC+0LPRgNC10YHRgVxuZnVuY3Rpb24gc3RhcnRBdXRvcGxheSgpIHtcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3N3aXBlcl9idG5fcHJvZ3Jlc3NfY2lyY2xlJyk7XG4gIGNvbnN0IGNpcmNsZU1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zd2lwZXJfbW9iX2J0bl9wcm9ncmVzc19jaXJjbGUnKTtcbiAgYXV0b3BsYXlTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICBpZiAoYXV0b3BsYXlJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChhdXRvcGxheUludGVydmFsKTtcbiAgYXV0b3BsYXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGF1dG9wbGF5U3RhcnRUaW1lO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLm1pbigoZWxhcHNlZCAvIEFVVE9QTEFZX1RJTUUpICogMTAwLCAxMDApO1xuICAgIHNldENpcmNsZVByb2dyZXNzKHBlcmNlbnQsIGNpcmNsZSk7XG4gICAgc2V0Q2lyY2xlUHJvZ3Jlc3MocGVyY2VudCwgY2lyY2xlTW9iKVxuICAgIGlmIChlbGFwc2VkID49IEFVVE9QTEFZX1RJTUUpIHtcbiAgICAgIHVwZGF0ZVNsaWRlKFwibmV4dFwiKSAvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9C10LTRg9GO0YnQuNC5INC60YDRg9CzXG4gICAgfVxuICB9LCAzMCk7IC8vINC/0LvQsNCy0L3Ri9C5INC/0YDQvtCz0YDQtdGB0YEsINC80L7QttC90L4g0YHQtNC10LvQsNGC0YwgMTAwLTIwMNC80YFcbn1cblxuZnVuY3Rpb24gc3RvcEF1dG9wbGF5KCkge1xuICBpZiAoYXV0b3BsYXlJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChhdXRvcGxheUludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEF1dG9wbGF5KCkge1xuICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc3dpcGVyX2J0bl9wcm9ncmVzc19jaXJjbGUnKTtcbiAgY29uc3QgY2lyY2xlTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3N3aXBlcl9tb2JfYnRuX3Byb2dyZXNzX2NpcmNsZScpO1xuICBzdG9wQXV0b3BsYXkoKTtcbiAgc2V0Q2lyY2xlUHJvZ3Jlc3MoMCwgY2lyY2xlKTtcbiAgc2V0Q2lyY2xlUHJvZ3Jlc3MoMCwgY2lyY2xlTW9iKTtcbiAgc3RhcnRBdXRvcGxheSgpO1xufSIsImxldCBsb2FkID0gZmFsc2U7XG5cbmNvbnN0IGxvYWRTdGF0ZSA9IHtcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBsb2FkXG4gIH0sXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBsb2FkID0gdmFsXG4gICAgb25DaGFuZ2VMb2FkKHZhbClcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkNoYW5nZUxvYWQgKGlzTG9hZGluZykge1xuICBjb25zdCBsb2FkaW5nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sb2FkaW5nPVwibG9hZFwiXScpXG4gIGNvbnN0IGhlcm9Td2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc3dpcGVyJylcbiAgY29uc3QgaGVyb1N3aXBlclBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3N3aXBlcl9wbGFjZWhvbGRlcl93cmFwJylcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgaWYgKGxvYWRpbmdFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBsb2FkaW5nRWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlclwiKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoaGVyb1N3aXBlciAmJiBoZXJvU3dpcGVyUGxhY2Vob2xkZXIpIHtcbiAgICAgIGhlcm9Td2lwZXIuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgICAgaGVyb1N3aXBlclBsYWNlaG9sZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICBpZiAobG9hZGluZ0VsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvYWRpbmdFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNlaG9sZGVyXCIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChoZXJvU3dpcGVyICYmIGhlcm9Td2lwZXJQbGFjZWhvbGRlcikge1xuICAgICAgaGVyb1N3aXBlci5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG4gICAgICBoZXJvU3dpcGVyUGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjb29raWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZVwiKVxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZU11bmlcIikpIHtcbiAgY29va2llLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY29va2llQWN0aXZlKCkge1xuICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gIC8vINCh0LrQvtC70YzQutC+INC/0YDQvtC60YDRg9GH0LXQvdC+ICsg0LLRi9GB0L7RgtCwINC+0LrQvdCwXG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAvLyDQldGB0LvQuCDQtNC+0YjRkdC7INC00L4g0YHQsNC80L7Qs9C+INC90LjQt9CwICjQuNC70Lgg0L/QvtGH0YLQuClcbiAgaWYgKHNjcm9sbFBvc2l0aW9uID49IHNjcm9sbEhlaWdodCAtIDUwICYmICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZU11bmlcIikpIHtcbiAgICBjb29raWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICB9IGVsc2Uge1xuICAgIGNvb2tpZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIH1cbn1cblxuaWYgKGNvb2tpZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llX19zdWNjZXNzJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVNdW5pJywgdHJ1ZSlcbiAgICAgIGNvb2tpZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBjb29raWVQYWdlTWFyZ2luKClcbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJJbml0TWFpbigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIikpIHtcbiAgICBhd2FpdCBpbml0KClcbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdXBwb3J0XCIpKSB7XG4gICAgYXdhaXQgcmVuZGVyU3VwcG9ydCgpXG4gIH1cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpKSB7XG4gICAgYXdhaXQgcmVuZGVySW5mbygpXG4gIH1cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcml2YWN5XCIpKSB7XG4gICAgYXdhaXQgcmVuZGVyUG9saXRpY3MoXCJwcml2YWN5XCIpXG4gIH1cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2Nlc3NpYmlsaXR5XCIpKSB7XG4gICAgYXdhaXQgcmVuZGVyUG9saXRpY3MoXCJhY2Nlc3NpYmlsaXR5XCIpXG4gIH1cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVQYWdlXCIpKSB7XG4gICAgYXdhaXQgcmVuZGVyUG9saXRpY3MoXCJjb29raWVcIilcbiAgICBjb29raWVQYWdlTWFyZ2luKClcbiAgICBjb29raWVBY3RpdmUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGNvb2tpZUFjdGl2ZSgpXG4gICAgfSlcbiAgfVxuXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHJlbmRlckluaXRNYWluKClcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5kZXhcIikpIHtcbiAgICBpbml0U3dpcGUoKTtcbiAgICBpbml0QnRuU3dpcGUoKVxuICAgIHVwZGF0ZUNsYXNzZXMoKTtcbiAgICBzdGFydEF1dG9wbGF5KCk7XG4gIH1cbiAgZHJvcGRvd25Jbml0KClcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5wZXJzaXN0ZWQpIHtcbiAgICBhd2FpdCByZW5kZXJJbml0TWFpbigpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gY29va2llUGFnZU1hcmdpbigpIHtcbiAgY29uc3QgY29va2llSW5mb0RldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb29raWVfX19pbmZvLWRldGFpbGApXG4gIGlmIChjb29raWVJbmZvRGV0YWlsKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZU11bmlcIikpIHtcbiAgICAgIGNvb2tpZUluZm9EZXRhaWwuY2xhc3NMaXN0LmFkZChcImNvb2tpZU5vdEFjdGl2ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb29raWVJbmZvRGV0YWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb29raWVOb3RBY3RpdmVcIilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYnRuUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVfX3FyXCIpO1xuY29uc3QgbW9kYWxRciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXItbW9kYWxcIik7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jdXN0b21fX2Nsb3NlXCIpO1xuXG5pZiAoYnRuUXIgJiYgbW9kYWxRciAmJiBidG5DbG9zZU1vZGFsKSB7XG4gIGJ0blFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKTtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cblxuICBidG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICBtb2RhbFFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpc091dHNpZGVDbGljayA9ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jdXN0b21fX2RpYWxvZ1wiKTtcbiAgICBpZiAoaXNPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1jdXN0b20nKS5mb3JFYWNoKGxpbmsgPT4ge1xuICBhY3RpdmVMaW5rKGxpbmssIDIwMCwgMTUwKTtcbn0pO1xuXG5jb25zdCBsaW5rc05vSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5rLWl0ZW1cIik7XG5cbmlmIChsaW5rc05vSW1nKSB7XG4gIGxpbmtzTm9JbWcuZm9yRWFjaChsaW5rID0+IHtcbiAgICBhY3RpdmVMaW5rKGxpbmssIDIwMCwgMTUwKTtcbiAgfSlcbn1cblxuXG5jb25zdCBxdWVzdGlvbnNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX21vYmlsZV9hXCIpXG5pZiAocXVlc3Rpb25zTGluaykge1xuICBhY3RpdmVMaW5rKHF1ZXN0aW9uc0xpbmssIDMwMCwgMjAwKVxufVxuXG5jb25zdCBzdXBwb3J0TGlua0FpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdXBwb3J0X19saW5rXCIpXG5pZiAoc3VwcG9ydExpbmtBaSkge1xuICBhY3RpdmVMaW5rKHN1cHBvcnRMaW5rQWksIDMwMCwgMjAwKVxufVxuXG5jb25zdCBzZXJ2aWNlc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIilcbmlmIChzZXJ2aWNlc0xpbmspIHtcbiAgc2VydmljZXNMaW5rLmZvckVhY2gobGluayA9PiB7XG4gICAgYWN0aXZlTGluayhsaW5rLCAzMDAsIDIwMCk7XG4gIH0pXG59XG5cbmNvbnN0IGhlYWRlckF2YWlsYWJpbGl0eVByb2JsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3Byb2JsZW1cIik7XG5pZiAoaGVhZGVyQXZhaWxhYmlsaXR5UHJvYmxlbSkge1xuICBhY3RpdmVMaW5rKGhlYWRlckF2YWlsYWJpbGl0eVByb2JsZW0sIDMwMCwgMjAwKVxufVxuXG5jb25zdCBzZXJ2aWNlQnRuR2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlX19nZXRcIik7XG5pZiAoc2VydmljZUJ0bkdldCkge1xuICBhY3RpdmVCdG4oc2VydmljZUJ0bkdldCwgMzAwKVxufVxuXG5jb25zdCB2ZXJlZnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXZlcmVmeV9fYnRuXCIpXG5pZiAodmVyZWZ5QnRuKSB7XG4gIGFjdGl2ZUJ0bih2ZXJlZnlCdG4sIDMwMClcbn1cblxuY29uc3QgcmVzZXRBdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2YWlsYWJpbGl0eS1idG5cIik7XG5pZiAocmVzZXRBdmFpbGFiaWxpdHkpIHtcbiAgYWN0aXZlQnRuKHJlc2V0QXZhaWxhYmlsaXR5LCAzMDApXG59XG5cbmNvbnN0IGNvb2tpZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZV9fbGlua1wiKTtcbmlmIChjb29raWVMaW5rKSB7XG4gIGNvb2tpZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Nvb2tpZS5odG1sXCJcbiAgfSlcbn0iLCJpZiAoJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiBoaXN0b3J5KSB7XG4gIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBvcmlnaW5hbEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDsgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INGB0YDQsNC30YNcblxuICBpZiAob3JpZ2luYWxIYXNoKSB7XG4gICAgLy8g0YPQsdC40YDQsNC10Lwg0LLRgNC10LzQtdC90L3QvlxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBsZWZ0OiAwfSk7XG5cbiAgICAvLyDQstC10YDQvdGR0LwgaGFzaCDQv9C+0YHQu9C1INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBvcmlnaW5hbEhhc2gpO1xuICAgIH0sIDUwKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXMtY2F0ZWdvcnlfX2hlYWRfaXRlbVwiKTtcbiAgY29uc3QgYm9keUxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlcy1jYXRlZ29yeV9fbGlzdFwiKTtcbiAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZXMtY2F0ZWdvcnlfX25leHRcIik7XG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VzLWNhdGVnb3J5X19wcmV2XCIpO1xuXG4gIGlmICghaGVhZEl0ZW1zLmxlbmd0aCB8fCAhYm9keUxpc3RzLmxlbmd0aCkgcmV0dXJuXG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGNvbnN0IHRvdGFsID0gaGVhZEl0ZW1zLmxlbmd0aDtcblxuICBmdW5jdGlvbiB1cGRhdGVBY3RpdmUobmV3SW5kZXgsIGRpcmVjdGlvbiA9IG51bGwsIHVwZGF0ZUhhc2ggPSB0cnVlKSB7XG4gICAgYm9keUxpc3RzW2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICBib2R5TGlzdHNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtbGVmdFwiLCBcInNsaWRlLXJpZ2h0XCIpO1xuXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgYm9keUxpc3RzW25ld0luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtbGVmdFwiLCBcInNsaWRlLXJpZ2h0XCIpO1xuICAgICAgYm9keUxpc3RzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgPyBcInNsaWRlLXJpZ2h0XCIgOiBcInNsaWRlLWxlZnRcIik7XG4gICAgICB2b2lkIGJvZHlMaXN0c1tuZXdJbmRleF0ub2Zmc2V0V2lkdGg7XG4gICAgICBib2R5TGlzdHNbbmV3SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1yaWdodFwiLCBcInNsaWRlLWxlZnRcIik7XG4gICAgfVxuXG4gICAgaGVhZEl0ZW1zLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKSk7XG4gICAgaGVhZEl0ZW1zW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgIGJvZHlMaXN0c1tuZXdJbmRleF0uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcblxuICAgIGN1cnJlbnRJbmRleCA9IG5ld0luZGV4O1xuXG4gICAgaWYgKHVwZGF0ZUhhc2gpIHtcbiAgICAgIGNvbnN0IGlkID0gYm9keUxpc3RzW25ld0luZGV4XS5pZDtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgYCMke2lkfWApO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0g0YHRgtCw0YDRgtC+0LLRi9C5INGB0LvQsNC50LQgLS0tXG4gIGlmIChvcmlnaW5hbEhhc2gpIHtcbiAgICBjb25zdCBjbGVhbkhhc2ggPSBvcmlnaW5hbEhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgY29uc3QgZm91bmRJbmRleCA9IFsuLi5ib2R5TGlzdHNdLmZpbmRJbmRleChlbCA9PiBlbC5pZCA9PT0gY2xlYW5IYXNoKTtcbiAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGN1cnJlbnRJbmRleCA9IGZvdW5kSW5kZXg7XG4gIH1cblxuICB1cGRhdGVBY3RpdmUoY3VycmVudEluZGV4LCBudWxsLCBmYWxzZSk7XG4gIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuXG4gIC8vIC0tLSDQutC90L7Qv9C60LggLS0tXG4gIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHRvdGFsO1xuICAgIHVwZGF0ZUFjdGl2ZShuZXdJbmRleCwgXCJuZXh0XCIpO1xuICB9KTtcblxuICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHRvdGFsKSAlIHRvdGFsO1xuICAgIHVwZGF0ZUFjdGl2ZShuZXdJbmRleCwgXCJwcmV2XCIpO1xuICB9KTtcblxuICAvLyAtLS0g0L3QsNCy0LjQs9Cw0YbQuNGPIEJhY2svRm9yd2FyZCAtLS1cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG4gICAgY29uc3QgZm91bmRJbmRleCA9IFsuLi5ib2R5TGlzdHNdLmZpbmRJbmRleChlbCA9PiBlbC5pZCA9PT0gbmV3SGFzaCk7XG4gICAgaWYgKGZvdW5kSW5kZXggIT09IC0xICYmIGZvdW5kSW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZm91bmRJbmRleCA+IGN1cnJlbnRJbmRleCA/IFwibmV4dFwiIDogXCJwcmV2XCI7XG4gICAgICB1cGRhdGVBY3RpdmUoZm91bmRJbmRleCwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwiYXN5bmMgZnVuY3Rpb24gcmVuZGVySW5mbygpIHtcbiAgdHJ5IHtcbiAgICBsb2FkU3RhdGUudmFsdWUgPSB0cnVlXG5cbiAgICBjb25zdCBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5nXCIpO1xuXG4gICAgaWYgKGxhbmcgPT09IFwiaGVcIiB8fCBsYW5nID09PSBcImFyXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdydGwnKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncnRsJylcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGF3YWl0IHRyYW5zbGF0aW9uRmV0Y2gobGFuZyA/PyBcImVuXCIsIFwiaW5mb3JtYXRpb25cIilcblxuICAgIGNvbnNvbGUubG9nKHRyYW5zbGF0aW9uLmRhdGEuZWxlbWVudHMpXG5cbiAgICB0cmFuc2xhdGlvbi5kYXRhLmVsZW1lbnRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJzb29uXCIpIHtcbiAgICAgICAgY2hhbmdlQ29taW5nU29vbihpdGVtKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJzZXR0aW5nc1wiKSB7XG4gICAgICAgIGF2YWlsYWJpbGl0eUNoYW5nZXMoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcInRvcC1iYW5uZXJcIikge1xuICAgICAgICBjaGFuZ2VTdXBwb3J0Qmx1ZShpdGVtKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJtb2JpbGUtbWVudVwiKSB7XG4gICAgICAgIG1vYmlsZU1lbnVDaGFuZ2UoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImJhY2stYnRuXCIpIHtcbiAgICAgICAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICAgICAgICBzZWxlY3RvcjogYC4ke2l0ZW0uaWR9YCxcbiAgICAgICAgICB0ZXh0OiBpdGVtLmxhYmVsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSAnbGFuZ3VhZ2VzJykge1xuICAgICAgICBjcmVhdGVTZWxlY3RMYW5nKGl0ZW0uZWxlbWVudHMsIGxhbmcpXG4gICAgICAgIGNyZWF0ZUNoZWNrYm94TGFuZyhpdGVtLmVsZW1lbnRzLCBsYW5nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJpbmZvcm1hdGlvblwiKSB7XG4gICAgICAgIGNyZWF0ZUNoYW5nZUluZm8oaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImNvb2tpZXNcIikge1xuICAgICAgICBjb29raWVDaGFuZ2VzKGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSBcIm91ci1sYWJvcmF0b3J5LWJ0blwiKSB7XG4gICAgICAgIGZpbmRSZXBsYWNlVGV4dCh7XG4gICAgICAgICAgc2VsZWN0b3I6IGAuJHtpdGVtLmlkfWAsXG4gICAgICAgICAgdGV4dDogaXRlbS5sYWJlbFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9IGZpbmFsbHkge1xuICAgIGxvYWRTdGF0ZS52YWx1ZSA9IGZhbHNlXG4gIH1cbn0iLCJhc3luYyBmdW5jdGlvbiByZW5kZXJQb2xpdGljcyhuYW1lKSB7XG4gIHRyeSB7XG4gICAgbG9hZFN0YXRlLnZhbHVlID0gdHJ1ZVxuICAgIGNvbnN0IGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmdcIik7XG5cbiAgICBpZiAobGFuZyA9PT0gXCJoZVwiIHx8IGxhbmcgPT09IFwiYXJcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3J0bCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdydGwnKVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gYXdhaXQgdHJhbnNsYXRpb25GZXRjaChsYW5nID8/IFwiZW5cIiwgYHBvbGl0aWNzLyR7bmFtZX1gKVxuXG4gICAgdHJhbnNsYXRpb24uZGF0YS5lbGVtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwic29vblwiKSB7XG4gICAgICAgIGNoYW5nZUNvbWluZ1Nvb24oaXRlbSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwic2V0dGluZ3NcIikge1xuICAgICAgICBhdmFpbGFiaWxpdHlDaGFuZ2VzKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJmb290ZXItc2xvZ2FuXCIpIHtcbiAgICAgICAgc2xvZ2FuQ2hhbmdlKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJtb2JpbGUtbWVudVwiKSB7XG4gICAgICAgIG1vYmlsZU1lbnVDaGFuZ2UoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImJhY2stYnRuXCIpIHtcbiAgICAgICAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICAgICAgICBzZWxlY3RvcjogYC4ke2l0ZW0uaWR9YCxcbiAgICAgICAgICB0ZXh0OiBpdGVtLmxhYmVsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSAnY291bnRyaWVzJykge1xuICAgICAgICBjcmVhdGVTZWxlY3RDb3VudHJ5KGl0ZW0uZWxlbWVudHMpXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmlkID09PSAnbGFuZ3VhZ2VzJykge1xuICAgICAgICBjcmVhdGVTZWxlY3RMYW5nKGl0ZW0uZWxlbWVudHMsIGxhbmcpXG4gICAgICAgIGNyZWF0ZUNoZWNrYm94TGFuZyhpdGVtLmVsZW1lbnRzLCBsYW5nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJmb290ZXItaW5mb1wiKSB7XG4gICAgICAgIGZvb3RlckluZm8oaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImNvb2tpZXNcIikge1xuICAgICAgICBjb29raWVDaGFuZ2VzKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJvdXItbGFib3JhdG9yeS1idG5cIikge1xuICAgICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICAgIHNlbGVjdG9yOiBgLiR7aXRlbS5pZH1gLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwiaGVhZGxpbmVcIikge1xuICAgICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICAgIHNlbGVjdG9yOiBgLiR7aXRlbS5pZH1gLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImNvbnRlbnRcIikge1xuICAgICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICAgIHNlbGVjdG9yOiBgLiR7aXRlbS5pZH1gLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBsb2FkU3RhdGUudmFsdWUgPSBmYWxzZVxuICB9XG59IiwiYXN5bmMgZnVuY3Rpb24gcmVuZGVyU3VwcG9ydCgpIHtcbiAgdHJ5IHtcbiAgICBsb2FkU3RhdGUudmFsdWUgPSB0cnVlXG5cbiAgICBjb25zdCBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmcnKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gYXdhaXQgdHJhbnNsYXRpb25GZXRjaChsYW5nID8/IFwiZW5cIiwgXCJzdXBwb3J0XCIpXG4gICAgdHJhbnNsYXRpb24uZGF0YS5lbGVtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwic29vblwiKSB7XG4gICAgICAgIGNoYW5nZUNvbWluZ1Nvb24oaXRlbSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwic2V0dGluZ3NcIikge1xuICAgICAgICBhdmFpbGFiaWxpdHlDaGFuZ2VzKGl0ZW0pXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gXCJ0b3AtYmFubmVyXCIpIHtcbiAgICAgICAgY2hhbmdlU3VwcG9ydEJsdWUoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImZvb3Rlci1zbG9nYW5cIikge1xuICAgICAgICBzbG9nYW5DaGFuZ2UoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcIm1vYmlsZS1tZW51XCIpIHtcbiAgICAgICAgbW9iaWxlTWVudUNoYW5nZShpdGVtKVxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwiYmFjay1idG5cIikge1xuICAgICAgICBmaW5kUmVwbGFjZVRleHQoe1xuICAgICAgICAgIHNlbGVjdG9yOiBgLiR7aXRlbS5pZH1gLFxuICAgICAgICAgIHRleHQ6IGl0ZW0ubGFiZWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSBcImZhcVwiKSB7XG4gICAgICAgIGZhcVN1cHBvcnQoaXRlbSlcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmlkID09PSAnbGFuZ3VhZ2VzJykge1xuICAgICAgICBjcmVhdGVTZWxlY3RMYW5nKGl0ZW0uZWxlbWVudHMsIGxhbmcpXG4gICAgICAgIGNyZWF0ZUNoZWNrYm94TGFuZyhpdGVtLmVsZW1lbnRzLCBsYW5nKVxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwiY29va2llc1wiKSB7XG4gICAgICAgIGNvb2tpZUNoYW5nZXMoaXRlbSlcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uaWQgPT09IFwib3VyLWxhYm9yYXRvcnktYnRuXCIpIHtcbiAgICAgICAgZmluZFJlcGxhY2VUZXh0KHtcbiAgICAgICAgICBzZWxlY3RvcjogYC4ke2l0ZW0uaWR9YCxcbiAgICAgICAgICB0ZXh0OiBpdGVtLmxhYmVsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAobGFuZyA9PT0gXCJoZVwiIHx8IGxhbmcgPT09IFwiYXJcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3J0bCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdydGwnKVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gIH0gZmluYWxseSB7XG4gICAgbG9hZFN0YXRlLnZhbHVlID0gZmFsc2VcbiAgfVxufSIsImZ1bmN0aW9uIGluaXRSYWRpYWwoeyBpbnRlcnZhbE1zID0gNTAwMCB9ID0ge30pIHtcbiAgY29uc3QgbmFtZXMgPSBbXCJzZXJ2aWNlXCIsIFwibWFya2V0XCIsIFwiY2FsbFwiLCBcIndhbGxldFwiLCBcImhvdXNlXCIsIFwicmVudFwiLCBcImRlYnRcIiwgXCJtYXJrZXRwbGFjZXNcIl07XG4gIGxldCBjdXJyZW50ID0gMDtcbiAgbGV0IGludGVydmFsSWQgPSBudWxsO1xuXG4gIGNvbnN0IHRvb2x0aXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10b29sdGlwXVwiKTtcblxuICBmdW5jdGlvbiBoaWRlVG9vbHRpcEFsbCgpIHtcbiAgICB0b29sdGlwRWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCBpbnN0ID0gYm9vdHN0cmFwLlRvb2x0aXAuZ2V0SW5zdGFuY2UoZWwpO1xuICAgICAgaWYgKGluc3QpIGluc3QuaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlKCkge1xuICAgIGhpZGVUb29sdGlwQWxsKClcbiAgICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmpzLXdoYXQtJHtuYW1lfWApLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmpzLXdoYXQtc3ZnLSR7bmFtZX1gKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICB9KTtcblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQsNC60YLQuNCy0L3Ri9C1XG4gICAgY29uc3QgYWN0aXZlTmFtZSA9IG5hbWVzW2N1cnJlbnRdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5qcy13aGF0LSR7YWN0aXZlTmFtZX1gKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuanMtd2hhdC1zdmctJHthY3RpdmVOYW1lfWApLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdG9vbHRpcD1cIiR7YWN0aXZlTmFtZX1cIl1gKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IGluc3QgPSBib290c3RyYXAuVG9vbHRpcC5nZXRJbnN0YW5jZShlbCk7XG4gICAgICBpZiAoaW5zdCkgaW5zdC5zaG93KCk7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50ID0gKGN1cnJlbnQgKyAxKSAlIG5hbWVzLmxlbmd0aDtcbiAgfVxuICB1cGRhdGVBY3RpdmUoKTtcbiAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZUFjdGl2ZSwgaW50ZXJ2YWxNcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdG9wKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICB9LFxuICAgIGludGVydmFsSWRcbiAgfTtcbn1cbiJdfQ==
