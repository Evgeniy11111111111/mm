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
    this.countryItems = this.dropdownBody.querySelectorAll(".js-dropdown-item");
    this.currentFocusIndex = -1;
    this.nameSource = options.nameSource || "innerText"; // или "data-lang", "data-value" и т.п.

    this.selctedNot = notSelected;
    this.init();
  }
  return _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.dropdownHead.addEventListener("click", function () {
        return _this.toggleDropdown();
      });
      this.countryItems.forEach(function (elem, index) {
        elem.addEventListener("click", function () {
          return _this.selectCountry(elem);
        });
        elem.setAttribute("tabindex", "0");
        elem.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            _this.selectCountry(elem);
          }
        });
      });
      this.dropdownHead.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          _this.toggleDropdown();
        } else if (e.key === "ArrowDown" && _this.isOpen()) {
          e.preventDefault();
          _this.focusNextItem();
        }
      });
      this.dropdownBody.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          _this.focusNextItem();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          _this.focusPrevItem();
        } else if (e.key === "Escape") {
          e.preventDefault();
          _this.closeDropdown();
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
      if (this.selctedNot) return;
      if (this.isOpen()) {
        var _elem$querySelector;
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
        this.closeDropdown();
      }
    }
  }, {
    key: "focusNextItem",
    value: function focusNextItem() {
      if (this.currentFocusIndex < this.countryItems.length - 1) {
        this.currentFocusIndex++;
        this.countryItems[this.currentFocusIndex].focus();
      }
    }
  }, {
    key: "focusPrevItem",
    value: function focusPrevItem() {
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
var cookie = document.querySelector(".cookie");
if (!localStorage.getItem("cookieMuni")) {
  cookie.classList.add("active");
}
if (cookie.classList.contains("active")) {
  document.querySelector('.cookie__success').addEventListener("click", function () {
    localStorage.setItem('cookieMuni', true);
    cookie.classList.remove("active");
  });
}
var dropdowns = document.querySelector(".header__country");
var instance = new Dropdown(dropdowns, {}, true);
dropdowns.dropdownInstance = instance;
var dropdownLang = document.querySelector(".header__lang");
var instanceLang = new Dropdown(dropdownLang, {
  nameSource: "lang"
});
dropdownLang.dropdownInstance = instanceLang;
document.addEventListener("click", function (e) {
  var dropdownInstance = dropdowns.dropdownInstance;
  if (!dropdowns.contains(e.target)) {
    dropdownInstance === null || dropdownInstance === void 0 || dropdownInstance.closeDropdown();
  }
});
document.addEventListener("click", function (e) {
  var dropdownInstance = dropdownLang.dropdownInstance;
  if (!dropdownLang.contains(e.target)) {
    dropdownInstance === null || dropdownInstance === void 0 || dropdownInstance.closeDropdown();
  }
});
var disability = document.querySelector(".header__disability");
var availability = document.querySelector(".header__availability");
var availabilityClose = document.querySelector(".header__availability_close");
disability.addEventListener("click", function () {
  availability.classList.add("active");
  disability.classList.add("active");
  document.body.classList.add("lock");
});
availabilityClose.addEventListener("click", function () {
  availability.classList.remove("active");
  disability.classList.remove("active");
  document.body.classList.remove("lock");
});
availability.addEventListener("click", function (e) {
  // Проверяем, что кликнули именно в .header__availability, а не внутрь .header__availability_wrap
  if (!e.target.closest('.header__availability_wrap')) {
    availability.classList.remove("active");
    disability.classList.remove("active");
    document.body.classList.add("lock");
  }
});
var accordions = document.querySelectorAll('.js-acc');
accordions.forEach(function (item) {
  var btn = item.querySelector('.js-acc-btn');
  var content = item.querySelector('.js-acc-body');
  btn.addEventListener('click', function () {
    var isOpen = item.classList.contains('is-open');

    // если уже открыт — просто закрываем его
    if (isOpen) {
      content.style.maxHeight = "0";
      item.classList.remove('is-open');
      return;
    }

    // иначе закрываем все остальные
    accordions.forEach(function (elem) {
      var contentAcc = elem.querySelector('.js-acc-body');
      contentAcc.style.maxHeight = "0";
      elem.classList.remove("is-open");
    });

    // и открываем текущий
    content.style.maxHeight = content.scrollHeight + "px";
    item.classList.add('is-open');
  });
});
function getHeightContentAcc() {
  var acc = document.querySelectorAll('.js-acc');
  acc.forEach(function (item) {
    if (item.classList.contains('is-open')) {
      var content = item.querySelector(".js-acc-body");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
window.addEventListener("resize", function () {
  getHeightContentAcc();
});
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
  if (fontRange && savedFont !== null) {
    fontRange.value = savedFont;
    document.documentElement.style.fontSize = savedFont === "16" ? "" : "".concat(savedFont, "px");
    updateRangeProgress(fontRange);
    if (phoneImg) togglePhoneImgVisibility(phoneImg, savedFont);
  }

  // CONTRAST
  var contrastClasses = ["contrast-1", "contrast-2", "contrast-4"];
  var savedContrast = loadSetting("contrast");
  if (contrastRange && savedContrast !== null) {
    var _document$documentEle;
    contrastRange.value = savedContrast;
    (_document$documentEle = document.documentElement.classList).remove.apply(_document$documentEle, contrastClasses);
    if (savedContrast !== "3") {
      document.documentElement.classList.add("contrast-".concat(savedContrast));
    }
    updateRangeProgress(contrastRange);
  }

  // SPACING
  var savedSpacing = loadSetting("letter-spacing");
  if (spacingRange && savedSpacing !== null) {
    spacingRange.value = savedSpacing;
    if (savedSpacing === "0") {
      document.documentElement.style.removeProperty("letter-spacing");
    } else {
      document.documentElement.style.letterSpacing = "".concat(Number(savedSpacing), "px");
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
var burgerBtn = document.querySelector(".header__menu_btn");
var burgerMenu = document.querySelector(".js-burger-menu");
if (burgerBtn && burgerMenu) {
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    if (burgerBtn.classList.contains("active")) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  });
  window.addEventListener("resize", function () {
    if (burgerBtn.classList.contains("active")) {
      burgerBtn.classList.remove("active");
      burgerMenu.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });
}
var swiper = new Swiper(".why__swiper", {
  spaceBetween: 20,
  autoHeight: false,
  slidesPerView: 1,
  pagination: {
    el: ".why__pagination",
    renderBullet: function renderBullet(index, className) {
      return "<span class=\"".concat(className, " why__bullet\"></span>");
    }
  },
  scrollbar: {
    el: ".why__scrollbar",
    draggable: true
  },
  breakpoints: {
    768: {
      slidesPerView: "auto"
    }
  }
});
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
function activeBtn(btn, timeoutClass) {
  btn.addEventListener("click", function () {
    btn.classList.add("active");
    setTimeout(function () {
      return btn.classList.remove('active');
    }, timeoutClass);
  });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZXJ2aWNlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3Bkb3duRWxlbWVudCIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJub3RTZWxlY3RlZCIsIl9jbGFzc0NhbGxDaGVjayIsImRyb3Bkb3duIiwiZHJvcGRvd25Cb2R5IiwicXVlcnlTZWxlY3RvciIsImRyb3Bkb3duSGVhZCIsImNvdW50cnlJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50Rm9jdXNJbmRleCIsIm5hbWVTb3VyY2UiLCJzZWxjdGVkTm90IiwiaW5pdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlRHJvcGRvd24iLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4Iiwic2VsZWN0Q291bnRyeSIsInNldEF0dHJpYnV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzT3BlbiIsImZvY3VzTmV4dEl0ZW0iLCJmb2N1c1ByZXZJdGVtIiwiY2xvc2VEcm9wZG93biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiX2VsZW0kcXVlcnlTZWxlY3RvciIsIml0ZW0iLCJuYW1lRWwiLCJyZW1vdmUiLCJzZWxlY3RlZE5hbWUiLCJpbm5lclRleHQiLCJkYXRhc2V0Iiwic2VsZWN0ZWRJbWciLCJnZXRBdHRyaWJ1dGUiLCJoZWFkSW1nIiwiaGVhZE5hbWUiLCJhZGQiLCJmb2N1cyIsImNvb2tpZSIsImRvY3VtZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJkcm9wZG93bnMiLCJpbnN0YW5jZSIsImRyb3Bkb3duSW5zdGFuY2UiLCJkcm9wZG93bkxhbmciLCJpbnN0YW5jZUxhbmciLCJ0YXJnZXQiLCJkaXNhYmlsaXR5IiwiYXZhaWxhYmlsaXR5IiwiYXZhaWxhYmlsaXR5Q2xvc2UiLCJib2R5IiwiY2xvc2VzdCIsImFjY29yZGlvbnMiLCJidG4iLCJjb250ZW50Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJjb250ZW50QWNjIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0SGVpZ2h0Q29udGVudEFjYyIsImFjYyIsIndpbmRvdyIsImZvbnRSYW5nZSIsImdldEVsZW1lbnRCeUlkIiwiY29udHJhc3RSYW5nZSIsInNwYWNpbmdSYW5nZSIsInBob25lSW1nIiwibGVhZGluZyIsInRoZW1lSW5wdXRzIiwic2F2ZVNldHRpbmciLCJsb2FkU2V0dGluZyIsInVwZGF0ZVJhbmdlUHJvZ3Jlc3MiLCJpbnB1dCIsImZpbGwiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibWluIiwibWF4IiwicGVyY2VudCIsIndpZHRoIiwiY29uY2F0IiwibGFiZWxzIiwicGFyZW50RWxlbWVudCIsInN0ZXAiLCJzcGFuIiwidGhyZXNob2xkIiwidG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5IiwiYmxvY2siLCJmb250U2l6ZSIsImlubmVyV2lkdGgiLCJkaXNwbGF5IiwiYXBwbHlUaGVtZSIsImRvY3VtZW50RWxlbWVudCIsImlzRGFyayIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYXBwbHlMZWFkaW5nIiwicmVzdG9yZVNldHRpbmdzIiwic2F2ZWRGb250IiwiY29udHJhc3RDbGFzc2VzIiwic2F2ZWRDb250cmFzdCIsIl9kb2N1bWVudCRkb2N1bWVudEVsZSIsImFwcGx5Iiwic2F2ZWRTcGFjaW5nIiwicmVtb3ZlUHJvcGVydHkiLCJsZXR0ZXJTcGFjaW5nIiwiTnVtYmVyIiwic2F2ZWRUaGVtZSIsInRoZW1lSW5wdXQiLCJjaGVja2VkIiwic2F2ZWRMZWFkaW5nIiwibGVhZGluZ0lucHV0Iiwic2V0Q29udHJhc3RNb2RlIiwiX2RvY3VtZW50JGRvY3VtZW50RWxlMiIsInRoZW1lIiwibGgiLCJzcGFjaW5nIiwiaW5wdXRGb250IiwiY2xlYXJBdmFpbGFiaWxpdHkiLCJyZW1vdmVJdGVtIiwiYnVyZ2VyQnRuIiwiYnVyZ2VyTWVudSIsInN3aXBlciIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJzbGlkZXNQZXJWaWV3IiwicGFnaW5hdGlvbiIsImVsIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwiYnJlYWtwb2ludHMiLCJidG5RciIsIm1vZGFsUXIiLCJidG5DbG9zZU1vZGFsIiwiY2xvc2VNb2RhbCIsImV2ZW50IiwiaXNPdXRzaWRlQ2xpY2siLCJidG5CYWNrIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJiYWNrIiwiYWN0aXZlTGluayIsImxpbmsiLCJ0aW1lb3V0Q2xhc3MiLCJ0aW1lb3V0SHJlZiIsImhyZWYiLCJsb2NhdGlvbiIsImxpbmtzTm9JbWciLCJxdWVzdGlvbnNMaW5rIiwic3VwcG9ydExpbmtBaSIsInNlcnZpY2VzTGluayIsImhlYWRlckF2YWlsYWJpbGl0eVByb2JsZW0iLCJhY3RpdmVCdG4iLCJzZXJ2aWNlQnRuR2V0IiwidmVyZWZ5QnRuIiwicmVzZXRBdmFpbGFiaWxpdHkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsIm9yaWdpbmFsSGFzaCIsImhhc2giLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsInNlYXJjaCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImhlYWRJdGVtcyIsImJvZHlMaXN0cyIsIm5leHRCdG4iLCJwcmV2QnRuIiwiY3VycmVudEluZGV4IiwidG90YWwiLCJ1cGRhdGVBY3RpdmUiLCJuZXdJbmRleCIsImRpcmVjdGlvbiIsInVwZGF0ZUhhc2giLCJvZmZzZXRXaWR0aCIsImlkIiwic2Nyb2xsUG9zIiwic2Nyb2xsWSIsImNsZWFuSGFzaCIsInJlcGxhY2UiLCJmb3VuZEluZGV4IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZmluZEluZGV4IiwibmV3SGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLGVBQWUsRUFBcUM7SUFBQSxJQUFuQ0MsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEs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RUFBRWlCLFNBQVMsQ0FBQyxVQUFBMUQsRUFBRTtNQUFBLE9BQUlBLEVBQUUsQ0FBQ21ELEVBQUUsS0FBS1EsT0FBTztJQUFBLEVBQUM7SUFDcEUsSUFBSUgsVUFBVSxLQUFLLENBQUMsQ0FBQyxJQUFJQSxVQUFVLEtBQUtaLFlBQVksRUFBRTtNQUNwRCxJQUFNSSxTQUFTLEdBQUdRLFVBQVUsR0FBR1osWUFBWSxHQUFHLE1BQU0sR0FBRyxNQUFNO01BQzdERSxZQUFZLENBQUNVLFVBQVUsRUFBRVIsU0FBUyxFQUFFLEtBQUssQ0FBQztJQUM1QztFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3Rvcihkcm9wZG93bkVsZW1lbnQsIG9wdGlvbnMgPSB7fSwgbm90U2VsZWN0ZWQgPSBmYWxzZSkge1xuICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bkVsZW1lbnQ7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24tYm9keVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duSGVhZCA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1oZWFkXCIpO1xuICAgIHRoaXMuY291bnRyeUl0ZW1zID0gdGhpcy5kcm9wZG93bkJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93bi1pdGVtXCIpO1xuICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcblxuICAgIHRoaXMubmFtZVNvdXJjZSA9IG9wdGlvbnMubmFtZVNvdXJjZSB8fCBcImlubmVyVGV4dFwiOyAvLyDQuNC70LggXCJkYXRhLWxhbmdcIiwgXCJkYXRhLXZhbHVlXCIg0Lgg0YIu0L8uXG5cbiAgICB0aGlzLnNlbGN0ZWROb3QgPSBub3RTZWxlY3RlZFxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZURyb3Bkb3duKCkpO1xuXG4gICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKSk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiB0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duQm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNQcmV2SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNlbGVjdENvdW50cnkoZWxlbSkge1xuICAgIGlmICh0aGlzLnNlbGN0ZWROb3QpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd24taXRlbS1uYW1lJyk7XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LnJlbW92ZShcImlzU2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuYW1lRWwgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taXRlbS1uYW1lXCIpO1xuICAgICAgbGV0IHNlbGVjdGVkTmFtZSA9IFwiXCI7XG5cbiAgICAgIGlmICh0aGlzLm5hbWVTb3VyY2UgPT09IFwiaW5uZXJUZXh0XCIpIHtcbiAgICAgICAgc2VsZWN0ZWROYW1lID0gbmFtZUVsPy5pbm5lclRleHQ7XG4gICAgICB9IGVsc2UgaWYgKG5hbWVFbD8uZGF0YXNldCkge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWwuZGF0YXNldFt0aGlzLm5hbWVTb3VyY2VdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZEltZyA9IGVsZW0ucXVlcnlTZWxlY3RvcihcImltZ1wiKT8uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuXG4gICAgICBjb25zdCBoZWFkSW1nID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgIGNvbnN0IGhlYWROYW1lID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG5cbiAgICAgIGlmIChzZWxlY3RlZE5hbWUgJiYgaGVhZE5hbWUpIHtcbiAgICAgICAgaGVhZE5hbWUuaW5uZXJUZXh0ID0gc2VsZWN0ZWROYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ZWRJbWcgJiYgaGVhZEltZykge1xuICAgICAgICBoZWFkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxlY3RlZEltZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgbmFtZUVsLmNsYXNzTGlzdC5hZGQoXCJpc1NlbGVjdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c05leHRJdGVtKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1c0luZGV4IDwgdGhpcy5jb3VudHJ5SXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCsrO1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXNbdGhpcy5jdXJyZW50Rm9jdXNJbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1ByZXZJdGVtKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleC0tO1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXNbdGhpcy5jdXJyZW50Rm9jdXNJbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgfVxufVxuXG5jb25zdCBjb29raWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZVwiKVxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZU11bmlcIikpIHtcbiAgY29va2llLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuaWYgKGNvb2tpZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZV9fc3VjY2VzcycpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llTXVuaScsIHRydWUpXG4gICAgICBjb29raWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH0pXG59XG5cbmNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb3VudHJ5XCIpO1xuY29uc3QgaW5zdGFuY2UgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25zLCB7fSwgdHJ1ZSk7XG5kcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlXG5cbmNvbnN0IGRyb3Bkb3duTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nXCIpO1xuY29uc3QgaW5zdGFuY2VMYW5nID0gbmV3IERyb3Bkb3duKGRyb3Bkb3duTGFuZywge25hbWVTb3VyY2U6IFwibGFuZ1wifSk7XG5kcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bnMuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcblxuZGlzYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZGlzYWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INC60LvQuNC60L3Rg9C70Lgg0LjQvNC10L3QvdC+INCyIC5oZWFkZXJfX2F2YWlsYWJpbGl0eSwg0LAg0L3QtSDQstC90YPRgtGA0YwgLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXBcbiAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19hdmFpbGFiaWxpdHlfd3JhcCcpKSB7XG4gICAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICB9XG59KTtcblxuY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcblxuYWNjb3JkaW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICBjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYnRuJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYm9keScpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpc09wZW4gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpO1xuXG4gICAgLy8g0LXRgdC70Lgg0YPQttC1INC+0YLQutGA0YvRgiDigJQg0L/RgNC+0YHRgtC+INC30LDQutGA0YvQstCw0LXQvCDQtdCz0L5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IFwiMFwiO1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g0LjQvdCw0YfQtSDQt9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INC+0YHRgtCw0LvRjNC90YvQtVxuICAgIGFjY29yZGlvbnMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRBY2MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYm9keScpO1xuICAgICAgY29udGVudEFjYy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4gICAgfSk7XG5cbiAgICAvLyDQuCDQvtGC0LrRgNGL0LLQsNC10Lwg0YLQtdC60YPRidC40LlcbiAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRIZWlnaHRDb250ZW50QWNjKCkge1xuICBjb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG4gIGFjYy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWFjYy1ib2R5XCIpO1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG59KVxuXG5jb25zdCBmb250UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnQtcmFuZ2VcIik7XG5jb25zdCBjb250cmFzdFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFzdFwiKVxuY29uc3Qgc3BhY2luZ1JhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbmNvbnN0IHBob25lSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19tb2JfYmxvY2tfcGhvbmVcIilcbmNvbnN0IGxlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXScpXG5jb25zdCB0aGVtZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ0aGVtZVwiXScpO1xuXG5mdW5jdGlvbiBzYXZlU2V0dGluZyhrZXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBsb2FkU2V0dGluZyhrZXkpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoaW5wdXQpIHtcbiAgY29uc3QgZmlsbCA9IGlucHV0Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IG1pbiA9ICtpbnB1dC5taW47XG4gIGNvbnN0IG1heCA9ICtpbnB1dC5tYXg7XG4gIGNvbnN0IHZhbHVlID0gK2lucHV0LnZhbHVlO1xuICBjb25zdCBwZXJjZW50ID0gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDA7XG5cbiAgaWYgKGZpbGwpIHtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVscyA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1yYW5nZV9sYWJlbHMgc3BhblwiKTtcbiAgaWYgKGxhYmVscykge1xuICAgIGNvbnN0IHN0ZXAgPSAobWF4IC0gbWluKSAvIChsYWJlbHMubGVuZ3RoIC0gMSk7XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgoc3BhbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRocmVzaG9sZCA9IG1pbiArIGluZGV4ICogc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShibG9jaywgZm9udFNpemUpIHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQ3NSAmJiBmb250U2l6ZSA+IDE2KSB7XG4gICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VGhlbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcImRhcmtcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxpZ2h0XCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJkdW9cIikge1xuICAgIGNvbnN0IGlzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBpZiAoaXNEYXJrKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TGVhZGluZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibWVkaXVtXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJiaWdcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufVxuXG5mdW5jdGlvbiByZXN0b3JlU2V0dGluZ3MoKSB7XG4gIC8vIEZPTlRcbiAgY29uc3Qgc2F2ZWRGb250ID0gbG9hZFNldHRpbmcoXCJmb250LXNpemVcIik7XG4gIGlmIChmb250UmFuZ2UgJiYgc2F2ZWRGb250ICE9PSBudWxsKSB7XG4gICAgZm9udFJhbmdlLnZhbHVlID0gc2F2ZWRGb250O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHNhdmVkRm9udCA9PT0gXCIxNlwiID8gXCJcIiA6IGAke3NhdmVkRm9udH1weGA7XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhmb250UmFuZ2UpO1xuICAgIGlmIChwaG9uZUltZykgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCBzYXZlZEZvbnQpO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1wiY29udHJhc3QtMVwiLCBcImNvbnRyYXN0LTJcIiwgXCJjb250cmFzdC00XCJdO1xuICBjb25zdCBzYXZlZENvbnRyYXN0ID0gbG9hZFNldHRpbmcoXCJjb250cmFzdFwiKTtcbiAgaWYgKGNvbnRyYXN0UmFuZ2UgJiYgc2F2ZWRDb250cmFzdCAhPT0gbnVsbCkge1xuICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSBzYXZlZENvbnRyYXN0O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbnRyYXN0Q2xhc3Nlcyk7XG4gICAgaWYgKHNhdmVkQ29udHJhc3QgIT09IFwiM1wiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHtzYXZlZENvbnRyYXN0fWApO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGNvbnRyYXN0UmFuZ2UpO1xuICB9XG5cbiAgLy8gU1BBQ0lOR1xuICBjb25zdCBzYXZlZFNwYWNpbmcgPSBsb2FkU2V0dGluZyhcImxldHRlci1zcGFjaW5nXCIpO1xuICBpZiAoc3BhY2luZ1JhbmdlICYmIHNhdmVkU3BhY2luZyAhPT0gbnVsbCkge1xuICAgIHNwYWNpbmdSYW5nZS52YWx1ZSA9IHNhdmVkU3BhY2luZztcbiAgICBpZiAoc2F2ZWRTcGFjaW5nID09PSBcIjBcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHNhdmVkU3BhY2luZyl9cHhgO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICBjb25zdCBzYXZlZFRoZW1lID0gbG9hZFNldHRpbmcoXCJ0aGVtZVwiKTtcbiAgaWYgKHNhdmVkVGhlbWUgJiYgdGhlbWVJbnB1dHMpIHtcbiAgICBhcHBseVRoZW1lKHNhdmVkVGhlbWUpO1xuICAgIGNvbnN0IHRoZW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGhlbWVcIl1bdmFsdWU9XCIke3NhdmVkVGhlbWV9XCJdYCk7XG4gICAgaWYgKHRoZW1lSW5wdXQpIHRoZW1lSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBzYXZlZExlYWRpbmcgPSBsb2FkU2V0dGluZyhcImxlYWRpbmdcIik7XG4gIGlmIChzYXZlZExlYWRpbmcgJiYgbGVhZGluZykge1xuICAgIGFwcGx5TGVhZGluZyhzYXZlZExlYWRpbmcpXG4gICAgY29uc3QgbGVhZGluZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl1bdmFsdWU9XCIke3NhdmVkTGVhZGluZ31cIl1gKTtcbiAgICBpZiAobGVhZGluZ0lucHV0KSBsZWFkaW5nSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVzdG9yZVNldHRpbmdzKClcblxuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNhdmVTZXR0aW5nKFwiZm9udC1zaXplXCIsIHZhbHVlKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHZhbHVlID09PSBcIjE2XCIgPyBcIlwiIDogYCR7dmFsdWV9cHhgO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgICBnZXRIZWlnaHRDb250ZW50QWNjKCk7XG4gICAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgICBjb25zdCBjb250cmFzdENsYXNzZXMgPSBbXCJjb250cmFzdC0xXCIsIFwiY29udHJhc3QtMlwiLCBcImNvbnRyYXN0LTRcIl07XG4gICAgZnVuY3Rpb24gc2V0Q29udHJhc3RNb2RlKHZhbHVlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb250cmFzdENsYXNzZXMpO1xuICAgICAgaWYgKHZhbHVlICE9PSBcIjNcIikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHt2YWx1ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udHJhc3RSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImNvbnRyYXN0XCIsIHZhbHVlKTtcbiAgICAgIHNldENvbnRyYXN0TW9kZSh2YWx1ZSk7XG4gICAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgaWYgKHNwYWNpbmdSYW5nZSkge1xuICAgIHNwYWNpbmdSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImxldHRlci1zcGFjaW5nXCIsIHZhbHVlKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcih2YWx1ZSl9cHhgO1xuICAgICAgfVxuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgICBnZXRIZWlnaHRDb250ZW50QWNjKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICBpZiAodGhlbWVJbnB1dHMpIHtcbiAgICB0aGVtZUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzYXZlU2V0dGluZyhcInRoZW1lXCIsIHZhbHVlKTtcbiAgICAgICAgYXBwbHlUaGVtZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChsZWFkaW5nKSB7XG4gICAgbGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBzYXZlU2V0dGluZyhcImxlYWRpbmdcIiwgaXRlbS52YWx1ZSk7XG4gICAgICAgIGFwcGx5TGVhZGluZyhpdGVtLnZhbHVlKVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCByZXN0b3JlU2V0dGluZ3MpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aGVtZVwiXTpjaGVja2VkJylcbiAgICBhcHBseVRoZW1lKHRoZW1lLnZhbHVlKVxuICAgIGNvbnN0IGxoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlMZWFkaW5nKGxoLnZhbHVlKVxuICAgIGNvbnN0IHNwYWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHNwYWNpbmcudmFsdWUpICogMn1weGA7XG4gIH1cbiAgY29uc3QgaW5wdXRGb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpXG4gIGlmIChwaG9uZUltZykge1xuICAgIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgaW5wdXRGb250LnZhbHVlKVxuICB9XG59KVxuXG5jb25zdCBjbGVhckF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXZhaWxhYmlsaXR5LWJ0blwiKVxuY2xlYXJBdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgXCJkYXJrXCIsXG4gICAgXCJsaW5lSGVpZ2h0QmlnXCIsXG4gICAgXCJsaW5lSGVpZ2h0TWVkaXVtXCIsXG4gICAgXCJjb250cmFzdC0xXCIsXG4gICAgXCJjb250cmFzdC0yXCIsXG4gICAgXCJjb250cmFzdC00XCJcbiAgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImZvbnQtc2l6ZVwiKTtcblxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZvbnQtc2l6ZVwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjb250cmFzdFwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsZWFkaW5nXCIpO1xuXG4gIGlmIChmb250UmFuZ2UpIHtcbiAgICBmb250UmFuZ2UudmFsdWUgPSAxNjsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhmb250UmFuZ2UpO1xuICAgIGlmIChwaG9uZUltZykgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCAxNik7XG4gIH1cblxuICAvLyBDT05UUkFTVFxuICBpZiAoY29udHJhc3RSYW5nZSkge1xuICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSAzOyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGNvbnRyYXN0UmFuZ2UpO1xuICB9XG5cbiAgLy8gU1BBQ0lOR1xuICBpZiAoc3BhY2luZ1JhbmdlKSB7XG4gICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gMDsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgdGhlbWVJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0LnZhbHVlID09PSBcImxpZ2h0XCI7XG4gIH0pO1xuICBhcHBseVRoZW1lKFwibGlnaHRcIik7XG5cbiAgLy8gTEVBRElOR1xuICBsZWFkaW5nLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jaGVja2VkID0gaXRlbS52YWx1ZSA9PT0gXCJub3JtYWxcIjtcbiAgfSk7XG4gIGFwcGx5TGVhZGluZyhcIm5vcm1hbFwiKTtcbn0pXG5cbmNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51X2J0blwiKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWJ1cmdlci1tZW51XCIpXG5cbmlmIChidXJnZXJCdG4gJiYgYnVyZ2VyTWVudSkge1xuICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmIChidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcbn1cblxuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLndoeV9fc3dpcGVyXCIsIHtcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIud2h5X19wYWdpbmF0aW9uXCIsXG4gICAgcmVuZGVyQnVsbGV0OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSB3aHlfX2J1bGxldFwiPjwvc3Bhbj5gO1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLndoeV9fc2Nyb2xsYmFyXCIsXG4gICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IGJ0blFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlX19xclwiKTtcbmNvbnN0IG1vZGFsUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFyLW1vZGFsXCIpO1xuY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY3VzdG9tX19jbG9zZVwiKTtcblxuaWYgKGJ0blFyICYmIG1vZGFsUXIgJiYgYnRuQ2xvc2VNb2RhbCkge1xuICBidG5Rci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIik7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsUXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICB9XG5cbiAgYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgbW9kYWxRci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXNPdXRzaWRlQ2xpY2sgPSAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWwtY3VzdG9tX19kaWFsb2dcIik7XG4gICAgaWYgKGlzT3V0c2lkZUNsaWNrKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIilcbmlmIChidG5CYWNrKSB7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5CYWNrLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBidG5CYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgfSwgMzAwKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWN0aXZlTGluayhsaW5rLCB0aW1lb3V0Q2xhc3MsIHRpbWVvdXRIcmVmKSB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgdGltZW91dENsYXNzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYsIHRpbWVvdXRIcmVmKTtcbiAgfSlcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstY3VzdG9tJykuZm9yRWFjaChsaW5rID0+IHtcbiAgYWN0aXZlTGluayhsaW5rLCAyMDAsIDE1MCk7XG59KTtcblxuY29uc3QgbGlua3NOb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1pdGVtXCIpO1xuXG5pZiAobGlua3NOb0ltZykge1xuICBsaW5rc05vSW1nLmZvckVhY2gobGluayA9PiB7XG4gICAgYWN0aXZlTGluayhsaW5rLCAyMDAsIDE1MCk7XG4gIH0pXG59XG5cblxuY29uc3QgcXVlc3Rpb25zTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25zX19tb2JpbGVfYVwiKVxuaWYgKHF1ZXN0aW9uc0xpbmspIHtcbiAgYWN0aXZlTGluayhxdWVzdGlvbnNMaW5rLCAzMDAsIDIwMClcbn1cblxuY29uc3Qgc3VwcG9ydExpbmtBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VwcG9ydF9fbGlua1wiKVxuaWYgKHN1cHBvcnRMaW5rQWkpIHtcbiAgYWN0aXZlTGluayhzdXBwb3J0TGlua0FpLCAzMDAsIDIwMClcbn1cblxuY29uc3Qgc2VydmljZXNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pdGVtXCIpXG5pZiAoc2VydmljZXNMaW5rKSB7XG4gIHNlcnZpY2VzTGluay5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGFjdGl2ZUxpbmsobGluaywgMzAwLCAyMDApO1xuICB9KVxufVxuXG5jb25zdCBoZWFkZXJBdmFpbGFiaWxpdHlQcm9ibGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9wcm9ibGVtXCIpO1xuaWYgKGhlYWRlckF2YWlsYWJpbGl0eVByb2JsZW0pIHtcbiAgYWN0aXZlTGluayhoZWFkZXJBdmFpbGFiaWxpdHlQcm9ibGVtLCAzMDAsIDIwMClcbn1cblxuZnVuY3Rpb24gYWN0aXZlQnRuKGJ0biwgdGltZW91dENsYXNzKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCB0aW1lb3V0Q2xhc3MpO1xuICB9KVxufVxuXG5jb25zdCBzZXJ2aWNlQnRuR2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlX19nZXRcIik7XG5pZiAoc2VydmljZUJ0bkdldCkge1xuICBhY3RpdmVCdG4oc2VydmljZUJ0bkdldCwgMzAwKVxufVxuXG5jb25zdCB2ZXJlZnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXZlcmVmeV9fYnRuXCIpXG5pZiAodmVyZWZ5QnRuKSB7XG4gIGFjdGl2ZUJ0bih2ZXJlZnlCdG4sIDMwMClcbn1cblxuY29uc3QgcmVzZXRBdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2YWlsYWJpbGl0eS1idG5cIik7XG5pZiAocmVzZXRBdmFpbGFiaWxpdHkpIHtcbiAgYWN0aXZlQnRuKHJlc2V0QXZhaWxhYmlsaXR5LCAzMDApXG59IiwiaWYgKCdzY3JvbGxSZXN0b3JhdGlvbicgaW4gaGlzdG9yeSkge1xuICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7IC8vINGB0L7RhdGA0LDQvdGP0LXQvCDRgdGA0LDQt9GDXG5cbiAgaWYgKG9yaWdpbmFsSGFzaCkge1xuICAgIC8vINGD0LHQuNGA0LDQtdC8INCy0YDQtdC80LXQvdC90L5cbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogMCwgbGVmdDogMH0pO1xuXG4gICAgLy8g0LLQtdGA0L3RkdC8IGhhc2gg0L/QvtGB0LvQtSDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgb3JpZ2luYWxIYXNoKTtcbiAgICB9LCA1MCk7XG4gIH1cblxuICBjb25zdCBoZWFkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzLWNhdGVnb3J5X19oZWFkX2l0ZW1cIik7XG4gIGNvbnN0IGJvZHlMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VydmljZXMtY2F0ZWdvcnlfX2xpc3RcIik7XG4gIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VzLWNhdGVnb3J5X19uZXh0XCIpO1xuICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlcy1jYXRlZ29yeV9fcHJldlwiKTtcblxuICBpZiAoIWhlYWRJdGVtcy5sZW5ndGggfHwgIWJvZHlMaXN0cy5sZW5ndGgpIHJldHVyblxuXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICBjb25zdCB0b3RhbCA9IGhlYWRJdGVtcy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWN0aXZlKG5ld0luZGV4LCBkaXJlY3Rpb24gPSBudWxsLCB1cGRhdGVIYXNoID0gdHJ1ZSkge1xuICAgIGJvZHlMaXN0c1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XG4gICAgYm9keUxpc3RzW2N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWxlZnRcIiwgXCJzbGlkZS1yaWdodFwiKTtcblxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGJvZHlMaXN0c1tuZXdJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWxlZnRcIiwgXCJzbGlkZS1yaWdodFwiKTtcbiAgICAgIGJvZHlMaXN0c1tuZXdJbmRleF0uY2xhc3NMaXN0LmFkZChkaXJlY3Rpb24gPT09IFwibmV4dFwiID8gXCJzbGlkZS1yaWdodFwiIDogXCJzbGlkZS1sZWZ0XCIpO1xuICAgICAgdm9pZCBib2R5TGlzdHNbbmV3SW5kZXhdLm9mZnNldFdpZHRoO1xuICAgICAgYm9keUxpc3RzW25ld0luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtcmlnaHRcIiwgXCJzbGlkZS1sZWZ0XCIpO1xuICAgIH1cblxuICAgIGhlYWRJdGVtcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIikpO1xuICAgIGhlYWRJdGVtc1tuZXdJbmRleF0uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcbiAgICBib2R5TGlzdHNbbmV3SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG5cbiAgICBjdXJyZW50SW5kZXggPSBuZXdJbmRleDtcblxuICAgIGlmICh1cGRhdGVIYXNoKSB7XG4gICAgICBjb25zdCBpZCA9IGJvZHlMaXN0c1tuZXdJbmRleF0uaWQ7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGAjJHtpZH1gKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tINGB0YLQsNGA0YLQvtCy0YvQuSDRgdC70LDQudC0IC0tLVxuICBpZiAob3JpZ2luYWxIYXNoKSB7XG4gICAgY29uc3QgY2xlYW5IYXNoID0gb3JpZ2luYWxIYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGNvbnN0IGZvdW5kSW5kZXggPSBbLi4uYm9keUxpc3RzXS5maW5kSW5kZXgoZWwgPT4gZWwuaWQgPT09IGNsZWFuSGFzaCk7XG4gICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBjdXJyZW50SW5kZXggPSBmb3VuZEluZGV4O1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlKGN1cnJlbnRJbmRleCwgbnVsbCwgZmFsc2UpO1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcblxuICAvLyAtLS0g0LrQvdC+0L/QutC4IC0tLVxuICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSB0b3RhbDtcbiAgICB1cGRhdGVBY3RpdmUobmV3SW5kZXgsIFwibmV4dFwiKTtcbiAgfSk7XG5cbiAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0luZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyB0b3RhbCkgJSB0b3RhbDtcbiAgICB1cGRhdGVBY3RpdmUobmV3SW5kZXgsIFwicHJldlwiKTtcbiAgfSk7XG5cbiAgLy8gLS0tINC90LDQstC40LPQsNGG0LjRjyBCYWNrL0ZvcndhcmQgLS0tXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XG4gICAgY29uc3QgbmV3SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIGNvbnN0IGZvdW5kSW5kZXggPSBbLi4uYm9keUxpc3RzXS5maW5kSW5kZXgoZWwgPT4gZWwuaWQgPT09IG5ld0hhc2gpO1xuICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSAmJiBmb3VuZEluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGZvdW5kSW5kZXggPiBjdXJyZW50SW5kZXggPyBcIm5leHRcIiA6IFwicHJldlwiO1xuICAgICAgdXBkYXRlQWN0aXZlKGZvdW5kSW5kZXgsIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdfQ==
