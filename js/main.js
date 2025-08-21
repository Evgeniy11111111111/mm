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
    _classCallCheck(this, Dropdown);
    this.dropdown = dropdownElement;
    this.dropdownBody = this.dropdown.querySelector(".js-dropdown-body");
    this.dropdownHead = this.dropdown.querySelector(".js-dropdown-head");
    this.countryItems = this.dropdownBody.querySelectorAll(".js-dropdown-item");
    this.currentFocusIndex = -1;
    this.nameSource = options.nameSource || "innerText"; // или "data-lang", "data-value" и т.п.

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
var dropdowns = document.querySelector(".header__country");
var instance = new Dropdown(dropdowns);
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
    var contentHeight = content.scrollHeight;
    if (isOpen) {
      content.style.maxHeight = "0";
      item.classList.remove('is-open');
    } else {
      content.style.maxHeight = contentHeight + "px";
      item.classList.add('is-open');
    }
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
var burgerMenu768 = document.querySelector(".header__menu-big");
var burgerClose768 = document.querySelector(".header__menu-big_close");
if (burgerBtn && burgerMenu) {
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("active");
    if (window.innerWidth > 768 && burgerMenu768 && burgerClose768) {
      burgerMenu768.classList.toggle("active");
    } else {
      burgerMenu.classList.toggle("active");
    }
    if (burgerBtn.classList.contains("active")) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  });
  if (burgerClose768) {
    burgerClose768.addEventListener("click", function () {
      burgerBtn.classList.remove("active");
      burgerMenu768.classList.remove("active");
      document.body.classList.remove("lock");
    });
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && burgerBtn.classList.contains("active")) {
      burgerBtn.classList.remove("active");
      burgerMenu.classList.remove("active");
      if (burgerMenu768) {
        burgerMenu768.classList.remove("active");
      }
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
var supportLinkAi = document.querySelector(".support__link_ai");
if (supportLinkAi) {
  activeLink(supportLinkAi, 300, 200);
}
var servicesLink = document.querySelectorAll(".item");
if (servicesLink) {
  servicesLink.forEach(function (link) {
    activeLink(link, 300, 200);
  });
}
var serviceBtnGet = document.querySelector(".service__get");
if (serviceBtnGet) {
  serviceBtnGet.addEventListener("click", function () {
    serviceBtnGet.classList.add("active");
    setTimeout(function () {
      return serviceBtnGet.classList.remove('active');
    }, 300);
  });
}
var verefyBtn = document.querySelector(".modal-verefy__btn");
if (verefyBtn) {
  verefyBtn.addEventListener("click", function () {
    verefyBtn.classList.add("active");
    setTimeout(function () {
      return verefyBtn.classList.remove('active');
    }, 300);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZXJ2aWNlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3Bkb3duRWxlbWVudCIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJkcm9wZG93biIsImRyb3Bkb3duQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJkcm9wZG93bkhlYWQiLCJjb3VudHJ5SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEZvY3VzSW5kZXgiLCJuYW1lU291cmNlIiwiaW5pdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlRHJvcGRvd24iLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4Iiwic2VsZWN0Q291bnRyeSIsInNldEF0dHJpYnV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzT3BlbiIsImZvY3VzTmV4dEl0ZW0iLCJmb2N1c1ByZXZJdGVtIiwiY2xvc2VEcm9wZG93biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiX2VsZW0kcXVlcnlTZWxlY3RvciIsIml0ZW0iLCJuYW1lRWwiLCJyZW1vdmUiLCJzZWxlY3RlZE5hbWUiLCJpbm5lclRleHQiLCJkYXRhc2V0Iiwic2VsZWN0ZWRJbWciLCJnZXRBdHRyaWJ1dGUiLCJoZWFkSW1nIiwiaGVhZE5hbWUiLCJhZGQiLCJmb2N1cyIsImRyb3Bkb3ducyIsImRvY3VtZW50IiwiaW5zdGFuY2UiLCJkcm9wZG93bkluc3RhbmNlIiwiZHJvcGRvd25MYW5nIiwiaW5zdGFuY2VMYW5nIiwidGFyZ2V0IiwiZGlzYWJpbGl0eSIsImF2YWlsYWJpbGl0eSIsImF2YWlsYWJpbGl0eUNsb3NlIiwiYm9keSIsImNsb3Nlc3QiLCJhY2NvcmRpb25zIiwiYnRuIiwiY29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzdHlsZSIsIm1heEhlaWdodCIsImdldEhlaWdodENvbnRlbnRBY2MiLCJhY2MiLCJ3aW5kb3ciLCJmb250UmFuZ2UiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRyYXN0UmFuZ2UiLCJzcGFjaW5nUmFuZ2UiLCJwaG9uZUltZyIsImxlYWRpbmciLCJ0aGVtZUlucHV0cyIsInNhdmVTZXR0aW5nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvYWRTZXR0aW5nIiwiZ2V0SXRlbSIsInVwZGF0ZVJhbmdlUHJvZ3Jlc3MiLCJpbnB1dCIsImZpbGwiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibWluIiwibWF4IiwicGVyY2VudCIsIndpZHRoIiwiY29uY2F0IiwibGFiZWxzIiwicGFyZW50RWxlbWVudCIsInN0ZXAiLCJzcGFuIiwidGhyZXNob2xkIiwidG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5IiwiYmxvY2siLCJmb250U2l6ZSIsImlubmVyV2lkdGgiLCJkaXNwbGF5IiwiYXBwbHlUaGVtZSIsImRvY3VtZW50RWxlbWVudCIsImlzRGFyayIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYXBwbHlMZWFkaW5nIiwicmVzdG9yZVNldHRpbmdzIiwic2F2ZWRGb250IiwiY29udHJhc3RDbGFzc2VzIiwic2F2ZWRDb250cmFzdCIsIl9kb2N1bWVudCRkb2N1bWVudEVsZSIsImFwcGx5Iiwic2F2ZWRTcGFjaW5nIiwicmVtb3ZlUHJvcGVydHkiLCJsZXR0ZXJTcGFjaW5nIiwiTnVtYmVyIiwic2F2ZWRUaGVtZSIsInRoZW1lSW5wdXQiLCJjaGVja2VkIiwic2F2ZWRMZWFkaW5nIiwibGVhZGluZ0lucHV0Iiwic2V0Q29udHJhc3RNb2RlIiwiX2RvY3VtZW50JGRvY3VtZW50RWxlMiIsInRoZW1lIiwibGgiLCJzcGFjaW5nIiwiaW5wdXRGb250IiwiY2xlYXJBdmFpbGFiaWxpdHkiLCJyZW1vdmVJdGVtIiwiYnVyZ2VyQnRuIiwiYnVyZ2VyTWVudSIsImJ1cmdlck1lbnU3NjgiLCJidXJnZXJDbG9zZTc2OCIsInN3aXBlciIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJzbGlkZXNQZXJWaWV3IiwicGFnaW5hdGlvbiIsImVsIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwiYnJlYWtwb2ludHMiLCJidG5RciIsIm1vZGFsUXIiLCJidG5DbG9zZU1vZGFsIiwiY2xvc2VNb2RhbCIsImV2ZW50IiwiaXNPdXRzaWRlQ2xpY2siLCJidG5CYWNrIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJiYWNrIiwiYWN0aXZlTGluayIsImxpbmsiLCJ0aW1lb3V0Q2xhc3MiLCJ0aW1lb3V0SHJlZiIsImhyZWYiLCJsb2NhdGlvbiIsImxpbmtzTm9JbWciLCJxdWVzdGlvbnNMaW5rIiwic3VwcG9ydExpbmtBaSIsInNlcnZpY2VzTGluayIsInNlcnZpY2VCdG5HZXQiLCJ2ZXJlZnlCdG4iLCJzY3JvbGxSZXN0b3JhdGlvbiIsIm9yaWdpbmFsSGFzaCIsImhhc2giLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsInNlYXJjaCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImhlYWRJdGVtcyIsImJvZHlMaXN0cyIsIm5leHRCdG4iLCJwcmV2QnRuIiwiY3VycmVudEluZGV4IiwidG90YWwiLCJ1cGRhdGVBY3RpdmUiLCJuZXdJbmRleCIsImRpcmVjdGlvbiIsInVwZGF0ZUhhc2giLCJvZmZzZXRXaWR0aCIsImlkIiwic2Nyb2xsUG9zIiwic2Nyb2xsWSIsImNsZWFuSGFzaCIsInJlcGxhY2UiLCJmb3VuZEluZGV4IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZmluZEluZGV4IiwibmV3SGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLGVBQWUsRUFBZ0I7SUFBQSxJQUFkQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBRyxlQUFBLE9B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Q0FuSCxNQUFNLENBQUNsRCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBTTtJQUMxQyxJQUFNaUwsT0FBTyxHQUFHL0gsTUFBTSxDQUFDNEYsUUFBUSxDQUFDUyxJQUFJLENBQUNzQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNyRCxJQUFNQyxVQUFVLEdBQUdDLGtCQUFBLENBQUloQixTQUFTLEVBQUVpQixTQUFTLENBQUMsVUFBQXZELEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUNnRCxFQUFFLEtBQUtRLE9BQU87SUFBQSxFQUFDO0lBQ3BFLElBQUlILFVBQVUsS0FBSyxDQUFDLENBQUMsSUFBSUEsVUFBVSxLQUFLWixZQUFZLEVBQUU7TUFDcEQsSUFBTUksU0FBUyxHQUFHUSxVQUFVLEdBQUdaLFlBQVksR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUM3REUsWUFBWSxDQUFDVSxVQUFVLEVBQUVSLFNBQVMsRUFBRSxLQUFLLENBQUM7SUFDNUM7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZHJvcGRvd25FbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd25FbGVtZW50O1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5ID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWJvZHlcIik7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taGVhZFwiKTtcbiAgICB0aGlzLmNvdW50cnlJdGVtcyA9IHRoaXMuZHJvcGRvd25Cb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtZHJvcGRvd24taXRlbVwiKTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG5cbiAgICB0aGlzLm5hbWVTb3VyY2UgPSBvcHRpb25zLm5hbWVTb3VyY2UgfHwgXCJpbm5lclRleHRcIjsgLy8g0LjQu9C4IFwiZGF0YS1sYW5nXCIsIFwiZGF0YS12YWx1ZVwiINC4INGCLtC/LlxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZURyb3Bkb3duKCkpO1xuXG4gICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKSk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiB0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duQm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNQcmV2SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNlbGVjdENvdW50cnkoZWxlbSkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bi1pdGVtLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgIG5hbWVFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5hbWVFbCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG4gICAgICBsZXQgc2VsZWN0ZWROYW1lID0gXCJcIjtcblxuICAgICAgaWYgKHRoaXMubmFtZVNvdXJjZSA9PT0gXCJpbm5lclRleHRcIikge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWw/LmlubmVyVGV4dDtcbiAgICAgIH0gZWxzZSBpZiAobmFtZUVsPy5kYXRhc2V0KSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbC5kYXRhc2V0W3RoaXMubmFtZVNvdXJjZV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSW1nID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgICAgIGNvbnN0IGhlYWRJbWcgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcblxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSAmJiBoZWFkTmFtZSkge1xuICAgICAgICBoZWFkTmFtZS5pbm5lclRleHQgPSBzZWxlY3RlZE5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZEltZyAmJiBoZWFkSW1nKSB7XG4gICAgICAgIGhlYWRJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGVjdGVkSW1nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LmFkZChcImlzU2VsZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTmV4dEl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPCB0aGlzLmNvdW50cnlJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4Kys7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldkl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cblxuXG5jb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY291bnRyeVwiKTtcbmNvbnN0IGluc3RhbmNlID0gbmV3IERyb3Bkb3duKGRyb3Bkb3ducyk7XG5kcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlXG5cbmNvbnN0IGRyb3Bkb3duTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nXCIpO1xuY29uc3QgaW5zdGFuY2VMYW5nID0gbmV3IERyb3Bkb3duKGRyb3Bkb3duTGFuZywge25hbWVTb3VyY2U6IFwibGFuZ1wifSk7XG5kcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bnMuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcblxuZGlzYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZGlzYWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INC60LvQuNC60L3Rg9C70Lgg0LjQvNC10L3QvdC+INCyIC5oZWFkZXJfX2F2YWlsYWJpbGl0eSwg0LAg0L3QtSDQstC90YPRgtGA0YwgLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXBcbiAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19hdmFpbGFiaWxpdHlfd3JhcCcpKSB7XG4gICAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICB9XG59KTtcblxuY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbmFjY29yZGlvbnMuZm9yRWFjaChpdGVtICA9PiB7XG4gIGNvbnN0IGJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1idG4nKTtcbiAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1ib2R5Jyk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlzT3BlbiA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJylcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxuICAgIH1cbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldEhlaWdodENvbnRlbnRBY2MoKSB7XG4gIGNvbnN0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbiAgYWNjLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYWNjLWJvZHlcIik7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiXG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufSlcblxuY29uc3QgZm9udFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpO1xuY29uc3QgY29udHJhc3RSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJhc3RcIilcbmNvbnN0IHNwYWNpbmdSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG5jb25zdCBwaG9uZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19fbW9iX2Jsb2NrX3Bob25lXCIpXG5jb25zdCBsZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl0nKVxuY29uc3QgdGhlbWVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGhlbWVcIl0nKTtcblxuZnVuY3Rpb24gc2F2ZVNldHRpbmcoa2V5LCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbG9hZFNldHRpbmcoa2V5KSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSYW5nZVByb2dyZXNzKGlucHV0KSB7XG4gIGNvbnN0IGZpbGwgPSBpbnB1dD8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBjb25zdCBtaW4gPSAraW5wdXQubWluO1xuICBjb25zdCBtYXggPSAraW5wdXQubWF4O1xuICBjb25zdCB2YWx1ZSA9ICtpbnB1dC52YWx1ZTtcbiAgY29uc3QgcGVyY2VudCA9ICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xuXG4gIGlmIChmaWxsKSB7XG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBpbnB1dC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtcmFuZ2VfbGFiZWxzIHNwYW5cIik7XG4gIGlmIChsYWJlbHMpIHtcbiAgICBjb25zdCBzdGVwID0gKG1heCAtIG1pbikgLyAobGFiZWxzLmxlbmd0aCAtIDEpO1xuXG4gICAgbGFiZWxzLmZvckVhY2goKHNwYW4sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aHJlc2hvbGQgPSBtaW4gKyBpbmRleCAqIHN0ZXA7XG4gICAgICBpZiAodmFsdWUgPj0gdGhyZXNob2xkKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkoYmxvY2ssIGZvbnRTaXplKSB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA0NzUgJiYgZm9udFNpemUgPiAxNikge1xuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRoZW1lKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJkYXJrXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJsaWdodFwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZHVvXCIpIHtcbiAgICBjb25zdCBpc0RhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gICAgaWYgKGlzRGFyaykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUxlYWRpbmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcIm1lZGl1bVwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiYmlnXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfVxuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn1cblxuZnVuY3Rpb24gcmVzdG9yZVNldHRpbmdzKCkge1xuICAvLyBGT05UXG4gIGNvbnN0IHNhdmVkRm9udCA9IGxvYWRTZXR0aW5nKFwiZm9udC1zaXplXCIpO1xuICBpZiAoZm9udFJhbmdlICYmIHNhdmVkRm9udCAhPT0gbnVsbCkge1xuICAgIGZvbnRSYW5nZS52YWx1ZSA9IHNhdmVkRm9udDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBzYXZlZEZvbnQgPT09IFwiMTZcIiA/IFwiXCIgOiBgJHtzYXZlZEZvbnR9cHhgO1xuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZm9udFJhbmdlKTtcbiAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgc2F2ZWRGb250KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGNvbnN0IGNvbnRyYXN0Q2xhc3NlcyA9IFtcImNvbnRyYXN0LTFcIiwgXCJjb250cmFzdC0yXCIsIFwiY29udHJhc3QtNFwiXTtcbiAgY29uc3Qgc2F2ZWRDb250cmFzdCA9IGxvYWRTZXR0aW5nKFwiY29udHJhc3RcIik7XG4gIGlmIChjb250cmFzdFJhbmdlICYmIHNhdmVkQ29udHJhc3QgIT09IG51bGwpIHtcbiAgICBjb250cmFzdFJhbmdlLnZhbHVlID0gc2F2ZWRDb250cmFzdDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb250cmFzdENsYXNzZXMpO1xuICAgIGlmIChzYXZlZENvbnRyYXN0ICE9PSBcIjNcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNvbnRyYXN0LSR7c2F2ZWRDb250cmFzdH1gKTtcbiAgICB9XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhjb250cmFzdFJhbmdlKTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgY29uc3Qgc2F2ZWRTcGFjaW5nID0gbG9hZFNldHRpbmcoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgaWYgKHNwYWNpbmdSYW5nZSAmJiBzYXZlZFNwYWNpbmcgIT09IG51bGwpIHtcbiAgICBzcGFjaW5nUmFuZ2UudmFsdWUgPSBzYXZlZFNwYWNpbmc7XG4gICAgaWYgKHNhdmVkU3BhY2luZyA9PT0gXCIwXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzYXZlZFNwYWNpbmcpfXB4YDtcbiAgICB9XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvYWRTZXR0aW5nKFwidGhlbWVcIik7XG4gIGlmIChzYXZlZFRoZW1lICYmIHRoZW1lSW5wdXRzKSB7XG4gICAgYXBwbHlUaGVtZShzYXZlZFRoZW1lKTtcbiAgICBjb25zdCB0aGVtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRoZW1lXCJdW3ZhbHVlPVwiJHtzYXZlZFRoZW1lfVwiXWApO1xuICAgIGlmICh0aGVtZUlucHV0KSB0aGVtZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3Qgc2F2ZWRMZWFkaW5nID0gbG9hZFNldHRpbmcoXCJsZWFkaW5nXCIpO1xuICBpZiAoc2F2ZWRMZWFkaW5nICYmIGxlYWRpbmcpIHtcbiAgICBhcHBseUxlYWRpbmcoc2F2ZWRMZWFkaW5nKVxuICAgIGNvbnN0IGxlYWRpbmdJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdW3ZhbHVlPVwiJHtzYXZlZExlYWRpbmd9XCJdYCk7XG4gICAgaWYgKGxlYWRpbmdJbnB1dCkgbGVhZGluZ0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVzdG9yZVNldHRpbmdzKClcblxuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNhdmVTZXR0aW5nKFwiZm9udC1zaXplXCIsIHZhbHVlKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHZhbHVlID09PSBcIjE2XCIgPyBcIlwiIDogYCR7dmFsdWV9cHhgO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgICBnZXRIZWlnaHRDb250ZW50QWNjKCk7XG4gICAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgICBjb25zdCBjb250cmFzdENsYXNzZXMgPSBbXCJjb250cmFzdC0xXCIsIFwiY29udHJhc3QtMlwiLCBcImNvbnRyYXN0LTRcIl07XG4gICAgZnVuY3Rpb24gc2V0Q29udHJhc3RNb2RlKHZhbHVlKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb250cmFzdENsYXNzZXMpO1xuICAgICAgaWYgKHZhbHVlICE9PSBcIjNcIikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHt2YWx1ZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udHJhc3RSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImNvbnRyYXN0XCIsIHZhbHVlKTtcbiAgICAgIHNldENvbnRyYXN0TW9kZSh2YWx1ZSk7XG4gICAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgaWYgKHNwYWNpbmdSYW5nZSkge1xuICAgIHNwYWNpbmdSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImxldHRlci1zcGFjaW5nXCIsIHZhbHVlKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcih2YWx1ZSl9cHhgO1xuICAgICAgfVxuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgICBnZXRIZWlnaHRDb250ZW50QWNjKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICBpZiAodGhlbWVJbnB1dHMpIHtcbiAgICB0aGVtZUlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzYXZlU2V0dGluZyhcInRoZW1lXCIsIHZhbHVlKTtcbiAgICAgICAgYXBwbHlUaGVtZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChsZWFkaW5nKSB7XG4gICAgbGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBzYXZlU2V0dGluZyhcImxlYWRpbmdcIiwgaXRlbS52YWx1ZSk7XG4gICAgICAgIGFwcGx5TGVhZGluZyhpdGVtLnZhbHVlKVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCByZXN0b3JlU2V0dGluZ3MpXG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGhlbWVcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlUaGVtZSh0aGVtZS52YWx1ZSlcbiAgICBjb25zdCBsaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5TGVhZGluZyhsaC52YWx1ZSlcbiAgICBjb25zdCBzcGFjaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzcGFjaW5nLnZhbHVlKSAqIDJ9cHhgO1xuICB9XG4gIGNvbnN0IGlucHV0Rm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKVxuICBpZiAocGhvbmVJbWcpIHtcbiAgICB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIGlucHV0Rm9udC52YWx1ZSlcbiAgfVxufSlcblxuY29uc3QgY2xlYXJBdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2YWlsYWJpbGl0eS1idG5cIilcbmNsZWFyQXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgIFwiZGFya1wiLFxuICAgIFwibGluZUhlaWdodEJpZ1wiLFxuICAgIFwibGluZUhlaWdodE1lZGl1bVwiLFxuICAgIFwiY29udHJhc3QtMVwiLFxuICAgIFwiY29udHJhc3QtMlwiLFxuICAgIFwiY29udHJhc3QtNFwiXG4gICk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJmb250LXNpemVcIik7XG5cbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmb250LXNpemVcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY29udHJhc3RcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGhlbWVcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGVhZGluZ1wiKTtcblxuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLnZhbHVlID0gMTY7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZm9udFJhbmdlKTtcbiAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgMTYpO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgICBjb250cmFzdFJhbmdlLnZhbHVlID0gMzsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhjb250cmFzdFJhbmdlKTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgaWYgKHNwYWNpbmdSYW5nZSkge1xuICAgIHNwYWNpbmdSYW5nZS52YWx1ZSA9IDA7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3Moc3BhY2luZ1JhbmdlKTtcbiAgfVxuXG4gIC8vIFRIRU1FXG4gIHRoZW1lSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgIGlucHV0LmNoZWNrZWQgPSBpbnB1dC52YWx1ZSA9PT0gXCJsaWdodFwiO1xuICB9KTtcbiAgYXBwbHlUaGVtZShcImxpZ2h0XCIpO1xuXG4gIC8vIExFQURJTkdcbiAgbGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW0udmFsdWUgPT09IFwibm9ybWFsXCI7XG4gIH0pO1xuICBhcHBseUxlYWRpbmcoXCJub3JtYWxcIik7XG59KVxuXG5jb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudV9idG5cIik7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1idXJnZXItbWVudVwiKVxuY29uc3QgYnVyZ2VyTWVudTc2OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJpZ1wiKTtcbmNvbnN0IGJ1cmdlckNsb3NlNzY4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtYmlnX2Nsb3NlXCIpO1xuXG5pZiAoYnVyZ2VyQnRuICYmIGJ1cmdlck1lbnUpIHtcbiAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4ICYmIGJ1cmdlck1lbnU3NjggJiYgYnVyZ2VyQ2xvc2U3NjgpIHtcbiAgICAgIGJ1cmdlck1lbnU3NjguY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgfVxuICAgIGlmIChidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgaWYgKGJ1cmdlckNsb3NlNzY4KSB7XG4gICAgYnVyZ2VyQ2xvc2U3NjguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9KVxuICB9XG5cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4ICYmIGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBpZiAoYnVyZ2VyTWVudTc2OCkge1xuICAgICAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG59XG5cblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi53aHlfX3N3aXBlclwiLCB7XG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLndoeV9fcGFnaW5hdGlvblwiLFxuICAgIHJlbmRlckJ1bGxldDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX0gd2h5X19idWxsZXRcIj48L3NwYW4+YDtcbiAgICB9XG4gIH0sXG4gIHNjcm9sbGJhcjoge1xuICAgIGVsOiBcIi53aHlfX3Njcm9sbGJhclwiLFxuICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBidG5RciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZV9fcXJcIik7XG5jb25zdCBtb2RhbFFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xci1tb2RhbFwiKTtcbmNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWN1c3RvbV9fY2xvc2VcIik7XG5cbmlmIChidG5RciAmJiBtb2RhbFFyICYmIGJ0bkNsb3NlTW9kYWwpIHtcbiAgYnRuUXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpO1xuICAgIG1vZGFsUXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgfVxuXG4gIGJ0bkNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gIG1vZGFsUXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGlzT3V0c2lkZUNsaWNrID0gIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm1vZGFsLWN1c3RvbV9fZGlhbG9nXCIpO1xuICAgIGlmIChpc091dHNpZGVDbGljaykge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuXG5jb25zdCBidG5CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmFja1wiKVxuaWYgKGJ0bkJhY2spIHtcbiAgYnRuQmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ0bkJhY2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGJ0bkJhY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDMwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICB9LCAzMDApO1xuICB9KVxufVxuXG5mdW5jdGlvbiBhY3RpdmVMaW5rKGxpbmssIHRpbWVvdXRDbGFzcywgdGltZW91dEhyZWYpIHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCB0aW1lb3V0Q2xhc3MpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uID0gaHJlZiwgdGltZW91dEhyZWYpO1xuICB9KVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1jdXN0b20nKS5mb3JFYWNoKGxpbmsgPT4ge1xuICBhY3RpdmVMaW5rKGxpbmssIDIwMCwgMTUwKTtcbn0pO1xuXG5jb25zdCBsaW5rc05vSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saW5rLWl0ZW1cIik7XG5cbmlmIChsaW5rc05vSW1nKSB7XG4gIGxpbmtzTm9JbWcuZm9yRWFjaChsaW5rID0+IHtcbiAgICBhY3RpdmVMaW5rKGxpbmssIDIwMCwgMTUwKTtcbiAgfSlcbn1cblxuXG5jb25zdCBxdWVzdGlvbnNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX21vYmlsZV9hXCIpXG5pZiAocXVlc3Rpb25zTGluaykge1xuICBhY3RpdmVMaW5rKHF1ZXN0aW9uc0xpbmssIDMwMCwgMjAwKVxufVxuXG5jb25zdCBzdXBwb3J0TGlua0FpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdXBwb3J0X19saW5rX2FpXCIpXG5pZiAoc3VwcG9ydExpbmtBaSkge1xuICBhY3RpdmVMaW5rKHN1cHBvcnRMaW5rQWksIDMwMCwgMjAwKVxufVxuXG5jb25zdCBzZXJ2aWNlc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1cIilcbmlmIChzZXJ2aWNlc0xpbmspIHtcbiAgc2VydmljZXNMaW5rLmZvckVhY2gobGluayA9PiB7XG4gICAgYWN0aXZlTGluayhsaW5rLCAzMDAsIDIwMCk7XG4gIH0pXG59XG5cbmNvbnN0IHNlcnZpY2VCdG5HZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VfX2dldFwiKTtcbmlmIChzZXJ2aWNlQnRuR2V0KSB7XG4gIHNlcnZpY2VCdG5HZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzZXJ2aWNlQnRuR2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXJ2aWNlQnRuR2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDApO1xuICB9KVxufVxuXG5jb25zdCB2ZXJlZnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXZlcmVmeV9fYnRuXCIpXG5pZiAodmVyZWZ5QnRuKSB7XG4gIHZlcmVmeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHZlcmVmeUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdmVyZWZ5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDApO1xuICB9KVxufSIsImlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIGhpc3RvcnkpIHtcbiAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoOyAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0YHRgNCw0LfRg1xuXG4gIGlmIChvcmlnaW5hbEhhc2gpIHtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDQstGA0LXQvNC10L3QvdC+XG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGxlZnQ6IDB9KTtcblxuICAgIC8vINCy0LXRgNC90ZHQvCBoYXNoINC/0L7RgdC70LUg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG9yaWdpbmFsSGFzaCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgY29uc3QgaGVhZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlcy1jYXRlZ29yeV9faGVhZF9pdGVtXCIpO1xuICBjb25zdCBib2R5TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzLWNhdGVnb3J5X19saXN0XCIpO1xuICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlcy1jYXRlZ29yeV9fbmV4dFwiKTtcbiAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZXMtY2F0ZWdvcnlfX3ByZXZcIik7XG5cbiAgaWYgKCFoZWFkSXRlbXMubGVuZ3RoIHx8ICFib2R5TGlzdHMubGVuZ3RoKSByZXR1cm5cblxuICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgY29uc3QgdG90YWwgPSBoZWFkSXRlbXMubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZShuZXdJbmRleCwgZGlyZWN0aW9uID0gbnVsbCwgdXBkYXRlSGFzaCA9IHRydWUpIHtcbiAgICBib2R5TGlzdHNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgIGJvZHlMaXN0c1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1sZWZ0XCIsIFwic2xpZGUtcmlnaHRcIik7XG5cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBib2R5TGlzdHNbbmV3SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1sZWZ0XCIsIFwic2xpZGUtcmlnaHRcIik7XG4gICAgICBib2R5TGlzdHNbbmV3SW5kZXhdLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uID09PSBcIm5leHRcIiA/IFwic2xpZGUtcmlnaHRcIiA6IFwic2xpZGUtbGVmdFwiKTtcbiAgICAgIHZvaWQgYm9keUxpc3RzW25ld0luZGV4XS5vZmZzZXRXaWR0aDtcbiAgICAgIGJvZHlMaXN0c1tuZXdJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLXJpZ2h0XCIsIFwic2xpZGUtbGVmdFwiKTtcbiAgICB9XG5cbiAgICBoZWFkSXRlbXMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpKTtcbiAgICBoZWFkSXRlbXNbbmV3SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG4gICAgYm9keUxpc3RzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgY3VycmVudEluZGV4ID0gbmV3SW5kZXg7XG5cbiAgICBpZiAodXBkYXRlSGFzaCkge1xuICAgICAgY29uc3QgaWQgPSBib2R5TGlzdHNbbmV3SW5kZXhdLmlkO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBgIyR7aWR9YCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSDRgdGC0LDRgNGC0L7QstGL0Lkg0YHQu9Cw0LnQtCAtLS1cbiAgaWYgKG9yaWdpbmFsSGFzaCkge1xuICAgIGNvbnN0IGNsZWFuSGFzaCA9IG9yaWdpbmFsSGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gWy4uLmJvZHlMaXN0c10uZmluZEluZGV4KGVsID0+IGVsLmlkID09PSBjbGVhbkhhc2gpO1xuICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgY3VycmVudEluZGV4ID0gZm91bmRJbmRleDtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZShjdXJyZW50SW5kZXgsIG51bGwsIGZhbHNlKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG5cbiAgLy8gLS0tINC60L3QvtC/0LrQuCAtLS1cbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0luZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgdG90YWw7XG4gICAgdXBkYXRlQWN0aXZlKG5ld0luZGV4LCBcIm5leHRcIik7XG4gIH0pO1xuXG4gIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgdG90YWwpICUgdG90YWw7XG4gICAgdXBkYXRlQWN0aXZlKG5ld0luZGV4LCBcInByZXZcIik7XG4gIH0pO1xuXG4gIC8vIC0tLSDQvdCw0LLQuNCz0LDRhtC40Y8gQmFjay9Gb3J3YXJkIC0tLVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gWy4uLmJvZHlMaXN0c10uZmluZEluZGV4KGVsID0+IGVsLmlkID09PSBuZXdIYXNoKTtcbiAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEgJiYgZm91bmRJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBmb3VuZEluZGV4ID4gY3VycmVudEluZGV4ID8gXCJuZXh0XCIgOiBcInByZXZcIjtcbiAgICAgIHVwZGF0ZUFjdGl2ZShmb3VuZEluZGV4LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=
