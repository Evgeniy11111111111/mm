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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZXJ2aWNlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJEcm9wZG93biIsImRyb3Bkb3duRWxlbWVudCIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJub3RTZWxlY3RlZCIsIl9jbGFzc0NhbGxDaGVjayIsImRyb3Bkb3duIiwiZHJvcGRvd25Cb2R5IiwicXVlcnlTZWxlY3RvciIsImRyb3Bkb3duSGVhZCIsImNvdW50cnlJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50Rm9jdXNJbmRleCIsIm5hbWVTb3VyY2UiLCJzZWxjdGVkTm90IiwiaW5pdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlRHJvcGRvd24iLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4Iiwic2VsZWN0Q291bnRyeSIsInNldEF0dHJpYnV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzT3BlbiIsImZvY3VzTmV4dEl0ZW0iLCJmb2N1c1ByZXZJdGVtIiwiY2xvc2VEcm9wZG93biIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiX2VsZW0kcXVlcnlTZWxlY3RvciIsIml0ZW0iLCJuYW1lRWwiLCJyZW1vdmUiLCJzZWxlY3RlZE5hbWUiLCJpbm5lclRleHQiLCJkYXRhc2V0Iiwic2VsZWN0ZWRJbWciLCJnZXRBdHRyaWJ1dGUiLCJoZWFkSW1nIiwiaGVhZE5hbWUiLCJhZGQiLCJmb2N1cyIsImRyb3Bkb3ducyIsImRvY3VtZW50IiwiaW5zdGFuY2UiLCJkcm9wZG93bkluc3RhbmNlIiwiZHJvcGRvd25MYW5nIiwiaW5zdGFuY2VMYW5nIiwidGFyZ2V0IiwiZGlzYWJpbGl0eSIsImF2YWlsYWJpbGl0eSIsImF2YWlsYWJpbGl0eUNsb3NlIiwiYm9keSIsImNsb3Nlc3QiLCJhY2NvcmRpb25zIiwiYnRuIiwiY29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzdHlsZSIsIm1heEhlaWdodCIsImdldEhlaWdodENvbnRlbnRBY2MiLCJhY2MiLCJ3aW5kb3ciLCJmb250UmFuZ2UiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRyYXN0UmFuZ2UiLCJzcGFjaW5nUmFuZ2UiLCJwaG9uZUltZyIsImxlYWRpbmciLCJ0aGVtZUlucHV0cyIsInNhdmVTZXR0aW5nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxvYWRTZXR0aW5nIiwiZ2V0SXRlbSIsInVwZGF0ZVJhbmdlUHJvZ3Jlc3MiLCJpbnB1dCIsImZpbGwiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibWluIiwibWF4IiwicGVyY2VudCIsIndpZHRoIiwiY29uY2F0IiwibGFiZWxzIiwicGFyZW50RWxlbWVudCIsInN0ZXAiLCJzcGFuIiwidGhyZXNob2xkIiwidG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5IiwiYmxvY2siLCJmb250U2l6ZSIsImlubmVyV2lkdGgiLCJkaXNwbGF5IiwiYXBwbHlUaGVtZSIsImRvY3VtZW50RWxlbWVudCIsImlzRGFyayIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYXBwbHlMZWFkaW5nIiwicmVzdG9yZVNldHRpbmdzIiwic2F2ZWRGb250IiwiY29udHJhc3RDbGFzc2VzIiwic2F2ZWRDb250cmFzdCIsIl9kb2N1bWVudCRkb2N1bWVudEVsZSIsImFwcGx5Iiwic2F2ZWRTcGFjaW5nIiwicmVtb3ZlUHJvcGVydHkiLCJsZXR0ZXJTcGFjaW5nIiwiTnVtYmVyIiwic2F2ZWRUaGVtZSIsInRoZW1lSW5wdXQiLCJjaGVja2VkIiwic2F2ZWRMZWFkaW5nIiwibGVhZGluZ0lucHV0Iiwic2V0Q29udHJhc3RNb2RlIiwiX2RvY3VtZW50JGRvY3VtZW50RWxlMiIsInRoZW1lIiwibGgiLCJzcGFjaW5nIiwiaW5wdXRGb250IiwiY2xlYXJBdmFpbGFiaWxpdHkiLCJyZW1vdmVJdGVtIiwiYnVyZ2VyQnRuIiwiYnVyZ2VyTWVudSIsInN3aXBlciIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJzbGlkZXNQZXJWaWV3IiwicGFnaW5hdGlvbiIsImVsIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwiYnJlYWtwb2ludHMiLCJidG5RciIsIm1vZGFsUXIiLCJidG5DbG9zZU1vZGFsIiwiY2xvc2VNb2RhbCIsImV2ZW50IiwiaXNPdXRzaWRlQ2xpY2siLCJidG5CYWNrIiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJiYWNrIiwiYWN0aXZlTGluayIsImxpbmsiLCJ0aW1lb3V0Q2xhc3MiLCJ0aW1lb3V0SHJlZiIsImhyZWYiLCJsb2NhdGlvbiIsImxpbmtzTm9JbWciLCJxdWVzdGlvbnNMaW5rIiwic3VwcG9ydExpbmtBaSIsInNlcnZpY2VzTGluayIsImhlYWRlckF2YWlsYWJpbGl0eVByb2JsZW0iLCJhY3RpdmVCdG4iLCJzZXJ2aWNlQnRuR2V0IiwidmVyZWZ5QnRuIiwicmVzZXRBdmFpbGFiaWxpdHkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsIm9yaWdpbmFsSGFzaCIsImhhc2giLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsInNlYXJjaCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImhlYWRJdGVtcyIsImJvZHlMaXN0cyIsIm5leHRCdG4iLCJwcmV2QnRuIiwiY3VycmVudEluZGV4IiwidG90YWwiLCJ1cGRhdGVBY3RpdmUiLCJuZXdJbmRleCIsImRpcmVjdGlvbiIsInVwZGF0ZUhhc2giLCJvZmZzZXRXaWR0aCIsImlkIiwic2Nyb2xsUG9zIiwic2Nyb2xsWSIsImNsZWFuSGFzaCIsInJlcGxhY2UiLCJmb3VuZEluZGV4IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZmluZEluZGV4IiwibmV3SGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLGVBQWUsRUFBcUM7SUFBQSxJQUFuQ0MsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQs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QUFHLENBQUNILFlBQVksR0FBRyxDQUFDLEdBQUdDLEtBQUssSUFBSUEsS0FBSztJQUNuREMsWUFBWSxDQUFDQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7RUFFRjtFQUNBcEgsTUFBTSxDQUFDbEQsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQU07SUFDMUMsSUFBTWtMLE9BQU8sR0FBR2hJLE1BQU0sQ0FBQzBGLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDc0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7SUFDckQsSUFBTUMsVUFBVSxHQUFHQyxrQkFBQSxDQUFJaEIsU0FBUyxFQUFFaUIsU0FBUyxDQUFDLFVBQUExRCxFQUFFO01BQUEsT0FBSUEsRUFBRSxDQUFDbUQsRUFBRSxLQUFLUSxPQUFPO0lBQUEsRUFBQztJQUNwRSxJQUFJSCxVQUFVLEtBQUssQ0FBQyxDQUFDLElBQUlBLFVBQVUsS0FBS1osWUFBWSxFQUFFO01BQ3BELElBQU1JLFNBQVMsR0FBR1EsVUFBVSxHQUFHWixZQUFZLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDN0RFLFlBQVksQ0FBQ1UsVUFBVSxFQUFFUixTQUFTLEVBQUUsS0FBSyxDQUFDO0lBQzVDO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGRyb3Bkb3duRWxlbWVudCwgb3B0aW9ucyA9IHt9LCBub3RTZWxlY3RlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duRWxlbWVudDtcbiAgICB0aGlzLmRyb3Bkb3duQm9keSA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1ib2R5XCIpO1xuICAgIHRoaXMuZHJvcGRvd25IZWFkID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWhlYWRcIik7XG4gICAgdGhpcy5jb3VudHJ5SXRlbXMgPSB0aGlzLmRyb3Bkb3duQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWRyb3Bkb3duLWl0ZW1cIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuXG4gICAgdGhpcy5uYW1lU291cmNlID0gb3B0aW9ucy5uYW1lU291cmNlIHx8IFwiaW5uZXJUZXh0XCI7IC8vINC40LvQuCBcImRhdGEtbGFuZ1wiLCBcImRhdGEtdmFsdWVcIiDQuCDRgi7Qvy5cblxuICAgIHRoaXMuc2VsY3RlZE5vdCA9IG5vdFNlbGVjdGVkXG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlRHJvcGRvd24oKSk7XG5cbiAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zZWxlY3RDb3VudHJ5KGVsZW0pKTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiICYmIHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzTmV4dEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzTmV4dEl0ZW0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c1ByZXZJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bigpIHtcbiAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc2VsZWN0Q291bnRyeShlbGVtKSB7XG4gICAgaWYgKHRoaXMuc2VsY3RlZE5vdCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bi1pdGVtLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgIG5hbWVFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5hbWVFbCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG4gICAgICBsZXQgc2VsZWN0ZWROYW1lID0gXCJcIjtcblxuICAgICAgaWYgKHRoaXMubmFtZVNvdXJjZSA9PT0gXCJpbm5lclRleHRcIikge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWw/LmlubmVyVGV4dDtcbiAgICAgIH0gZWxzZSBpZiAobmFtZUVsPy5kYXRhc2V0KSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbC5kYXRhc2V0W3RoaXMubmFtZVNvdXJjZV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSW1nID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgICAgIGNvbnN0IGhlYWRJbWcgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcblxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSAmJiBoZWFkTmFtZSkge1xuICAgICAgICBoZWFkTmFtZS5pbm5lclRleHQgPSBzZWxlY3RlZE5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZEltZyAmJiBoZWFkSW1nKSB7XG4gICAgICAgIGhlYWRJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGVjdGVkSW1nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LmFkZChcImlzU2VsZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTmV4dEl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPCB0aGlzLmNvdW50cnlJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4Kys7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldkl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cbmNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb3VudHJ5XCIpO1xuY29uc3QgaW5zdGFuY2UgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25zLCB7fSwgdHJ1ZSk7XG5kcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlXG5cbmNvbnN0IGRyb3Bkb3duTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nXCIpO1xuY29uc3QgaW5zdGFuY2VMYW5nID0gbmV3IERyb3Bkb3duKGRyb3Bkb3duTGFuZywge25hbWVTb3VyY2U6IFwibGFuZ1wifSk7XG5kcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bnMuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcblxuZGlzYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZGlzYWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHlDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INC60LvQuNC60L3Rg9C70Lgg0LjQvNC10L3QvdC+INCyIC5oZWFkZXJfX2F2YWlsYWJpbGl0eSwg0LAg0L3QtSDQstC90YPRgtGA0YwgLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXBcbiAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19hdmFpbGFiaWxpdHlfd3JhcCcpKSB7XG4gICAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGlzYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICB9XG59KTtcblxuY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbmFjY29yZGlvbnMuZm9yRWFjaChpdGVtICA9PiB7XG4gIGNvbnN0IGJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1idG4nKTtcbiAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1ib2R5Jyk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlzT3BlbiA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJylcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxuICAgIH1cbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldEhlaWdodENvbnRlbnRBY2MoKSB7XG4gIGNvbnN0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbiAgYWNjLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYWNjLWJvZHlcIik7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiXG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufSlcblxuY29uc3QgZm9udFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpO1xuY29uc3QgY29udHJhc3RSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJhc3RcIilcbmNvbnN0IHNwYWNpbmdSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG5jb25zdCBwaG9uZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19fbW9iX2Jsb2NrX3Bob25lXCIpXG5jb25zdCBsZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl0nKVxuY29uc3QgdGhlbWVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGhlbWVcIl0nKTtcblxuZnVuY3Rpb24gc2F2ZVNldHRpbmcoa2V5LCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbG9hZFNldHRpbmcoa2V5KSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSYW5nZVByb2dyZXNzKGlucHV0KSB7XG4gIGNvbnN0IGZpbGwgPSBpbnB1dD8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBjb25zdCBtaW4gPSAraW5wdXQubWluO1xuICBjb25zdCBtYXggPSAraW5wdXQubWF4O1xuICBjb25zdCB2YWx1ZSA9ICtpbnB1dC52YWx1ZTtcbiAgY29uc3QgcGVyY2VudCA9ICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xuXG4gIGlmIChmaWxsKSB7XG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBpbnB1dC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtcmFuZ2VfbGFiZWxzIHNwYW5cIik7XG4gIGlmIChsYWJlbHMpIHtcbiAgICBjb25zdCBzdGVwID0gKG1heCAtIG1pbikgLyAobGFiZWxzLmxlbmd0aCAtIDEpO1xuXG4gICAgbGFiZWxzLmZvckVhY2goKHNwYW4sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aHJlc2hvbGQgPSBtaW4gKyBpbmRleCAqIHN0ZXA7XG4gICAgICBpZiAodmFsdWUgPj0gdGhyZXNob2xkKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkoYmxvY2ssIGZvbnRTaXplKSB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA0NzUgJiYgZm9udFNpemUgPiAxNikge1xuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRoZW1lKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJkYXJrXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJsaWdodFwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiZHVvXCIpIHtcbiAgICBjb25zdCBpc0RhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gICAgaWYgKGlzRGFyaykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUxlYWRpbmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcIm1lZGl1bVwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiYmlnXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfVxuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn1cblxuZnVuY3Rpb24gcmVzdG9yZVNldHRpbmdzKCkge1xuICAvLyBGT05UXG4gIGNvbnN0IHNhdmVkRm9udCA9IGxvYWRTZXR0aW5nKFwiZm9udC1zaXplXCIpO1xuICBpZiAoZm9udFJhbmdlICYmIHNhdmVkRm9udCAhPT0gbnVsbCkge1xuICAgIGZvbnRSYW5nZS52YWx1ZSA9IHNhdmVkRm9udDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBzYXZlZEZvbnQgPT09IFwiMTZcIiA/IFwiXCIgOiBgJHtzYXZlZEZvbnR9cHhgO1xuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZm9udFJhbmdlKTtcbiAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgc2F2ZWRGb250KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGNvbnN0IGNvbnRyYXN0Q2xhc3NlcyA9IFtcImNvbnRyYXN0LTFcIiwgXCJjb250cmFzdC0yXCIsIFwiY29udHJhc3QtNFwiXTtcbiAgY29uc3Qgc2F2ZWRDb250cmFzdCA9IGxvYWRTZXR0aW5nKFwiY29udHJhc3RcIik7XG4gIGlmIChjb250cmFzdFJhbmdlICYmIHNhdmVkQ29udHJhc3QgIT09IG51bGwpIHtcbiAgICBjb250cmFzdFJhbmdlLnZhbHVlID0gc2F2ZWRDb250cmFzdDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5jb250cmFzdENsYXNzZXMpO1xuICAgIGlmIChzYXZlZENvbnRyYXN0ICE9PSBcIjNcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNvbnRyYXN0LSR7c2F2ZWRDb250cmFzdH1gKTtcbiAgICB9XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhjb250cmFzdFJhbmdlKTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgY29uc3Qgc2F2ZWRTcGFjaW5nID0gbG9hZFNldHRpbmcoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgaWYgKHNwYWNpbmdSYW5nZSAmJiBzYXZlZFNwYWNpbmcgIT09IG51bGwpIHtcbiAgICBzcGFjaW5nUmFuZ2UudmFsdWUgPSBzYXZlZFNwYWNpbmc7XG4gICAgaWYgKHNhdmVkU3BhY2luZyA9PT0gXCIwXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzYXZlZFNwYWNpbmcpfXB4YDtcbiAgICB9XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgY29uc3Qgc2F2ZWRUaGVtZSA9IGxvYWRTZXR0aW5nKFwidGhlbWVcIik7XG4gIGlmIChzYXZlZFRoZW1lICYmIHRoZW1lSW5wdXRzKSB7XG4gICAgYXBwbHlUaGVtZShzYXZlZFRoZW1lKTtcbiAgICBjb25zdCB0aGVtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cInRoZW1lXCJdW3ZhbHVlPVwiJHtzYXZlZFRoZW1lfVwiXWApO1xuICAgIGlmICh0aGVtZUlucHV0KSB0aGVtZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3Qgc2F2ZWRMZWFkaW5nID0gbG9hZFNldHRpbmcoXCJsZWFkaW5nXCIpO1xuICBpZiAoc2F2ZWRMZWFkaW5nICYmIGxlYWRpbmcpIHtcbiAgICBhcHBseUxlYWRpbmcoc2F2ZWRMZWFkaW5nKVxuICAgIGNvbnN0IGxlYWRpbmdJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdW3ZhbHVlPVwiJHtzYXZlZExlYWRpbmd9XCJdYCk7XG4gICAgaWYgKGxlYWRpbmdJbnB1dCkgbGVhZGluZ0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIilcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlc3RvcmVTZXR0aW5ncygpXG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImZvbnQtc2l6ZVwiLCB2YWx1ZSk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB2YWx1ZSA9PT0gXCIxNlwiID8gXCJcIiA6IGAke3ZhbHVlfXB4YDtcbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1wiY29udHJhc3QtMVwiLCBcImNvbnRyYXN0LTJcIiwgXCJjb250cmFzdC00XCJdO1xuICAgIGZ1bmN0aW9uIHNldENvbnRyYXN0TW9kZSh2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gXCIzXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNvbnRyYXN0LSR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRyYXN0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJjb250cmFzdFwiLCB2YWx1ZSk7XG4gICAgICBzZXRDb250cmFzdE1vZGUodmFsdWUpO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJsZXR0ZXItc3BhY2luZ1wiLCB2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIodmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgaWYgKHRoZW1lSW5wdXRzKSB7XG4gICAgdGhlbWVJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJ0aGVtZVwiLCB2YWx1ZSk7XG4gICAgICAgIGFwcGx5VGhlbWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAobGVhZGluZykge1xuICAgIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJsZWFkaW5nXCIsIGl0ZW0udmFsdWUpO1xuICAgICAgICBhcHBseUxlYWRpbmcoaXRlbS52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgcmVzdG9yZVNldHRpbmdzKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGhlbWVcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlUaGVtZSh0aGVtZS52YWx1ZSlcbiAgICBjb25zdCBsaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5TGVhZGluZyhsaC52YWx1ZSlcbiAgICBjb25zdCBzcGFjaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzcGFjaW5nLnZhbHVlKSAqIDJ9cHhgO1xuICB9XG4gIGNvbnN0IGlucHV0Rm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKVxuICBpZiAocGhvbmVJbWcpIHtcbiAgICB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIGlucHV0Rm9udC52YWx1ZSlcbiAgfVxufSlcblxuY29uc3QgY2xlYXJBdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF2YWlsYWJpbGl0eS1idG5cIilcbmNsZWFyQXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgIFwiZGFya1wiLFxuICAgIFwibGluZUhlaWdodEJpZ1wiLFxuICAgIFwibGluZUhlaWdodE1lZGl1bVwiLFxuICAgIFwiY29udHJhc3QtMVwiLFxuICAgIFwiY29udHJhc3QtMlwiLFxuICAgIFwiY29udHJhc3QtNFwiXG4gICk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJmb250LXNpemVcIik7XG5cbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJmb250LXNpemVcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY29udHJhc3RcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGhlbWVcIik7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibGVhZGluZ1wiKTtcblxuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLnZhbHVlID0gMTY7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZm9udFJhbmdlKTtcbiAgICBpZiAocGhvbmVJbWcpIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgMTYpO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgICBjb250cmFzdFJhbmdlLnZhbHVlID0gMzsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhjb250cmFzdFJhbmdlKTtcbiAgfVxuXG4gIC8vIFNQQUNJTkdcbiAgaWYgKHNwYWNpbmdSYW5nZSkge1xuICAgIHNwYWNpbmdSYW5nZS52YWx1ZSA9IDA7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3Moc3BhY2luZ1JhbmdlKTtcbiAgfVxuXG4gIC8vIFRIRU1FXG4gIHRoZW1lSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgIGlucHV0LmNoZWNrZWQgPSBpbnB1dC52YWx1ZSA9PT0gXCJsaWdodFwiO1xuICB9KTtcbiAgYXBwbHlUaGVtZShcImxpZ2h0XCIpO1xuXG4gIC8vIExFQURJTkdcbiAgbGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW0udmFsdWUgPT09IFwibm9ybWFsXCI7XG4gIH0pO1xuICBhcHBseUxlYWRpbmcoXCJub3JtYWxcIik7XG59KVxuXG5jb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudV9idG5cIik7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1idXJnZXItbWVudVwiKVxuXG5pZiAoYnVyZ2VyQnRuICYmIGJ1cmdlck1lbnUpIHtcbiAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgaWYgKGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG59XG5cblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi53aHlfX3N3aXBlclwiLCB7XG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLndoeV9fcGFnaW5hdGlvblwiLFxuICAgIHJlbmRlckJ1bGxldDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX0gd2h5X19idWxsZXRcIj48L3NwYW4+YDtcbiAgICB9XG4gIH0sXG4gIHNjcm9sbGJhcjoge1xuICAgIGVsOiBcIi53aHlfX3Njcm9sbGJhclwiLFxuICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBidG5RciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZV9fcXJcIik7XG5jb25zdCBtb2RhbFFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xci1tb2RhbFwiKTtcbmNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWN1c3RvbV9fY2xvc2VcIik7XG5cbmlmIChidG5RciAmJiBtb2RhbFFyICYmIGJ0bkNsb3NlTW9kYWwpIHtcbiAgYnRuUXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpO1xuICAgIG1vZGFsUXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgfVxuXG4gIGJ0bkNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gIG1vZGFsUXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGlzT3V0c2lkZUNsaWNrID0gIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm1vZGFsLWN1c3RvbV9fZGlhbG9nXCIpO1xuICAgIGlmIChpc091dHNpZGVDbGljaykge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpXG5pZiAoYnRuQmFjaykge1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQmFjay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gYnRuQmFjay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgIH0sIDMwMCk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUxpbmsobGluaywgdGltZW91dENsYXNzLCB0aW1lb3V0SHJlZikge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIHRpbWVvdXRDbGFzcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBocmVmLCB0aW1lb3V0SHJlZik7XG4gIH0pXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWN1c3RvbScpLmZvckVhY2gobGluayA9PiB7XG4gIGFjdGl2ZUxpbmsobGluaywgMjAwLCAxNTApO1xufSk7XG5cbmNvbnN0IGxpbmtzTm9JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmstaXRlbVwiKTtcblxuaWYgKGxpbmtzTm9JbWcpIHtcbiAgbGlua3NOb0ltZy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGFjdGl2ZUxpbmsobGluaywgMjAwLCAxNTApO1xuICB9KVxufVxuXG5cbmNvbnN0IHF1ZXN0aW9uc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uc19fbW9iaWxlX2FcIilcbmlmIChxdWVzdGlvbnNMaW5rKSB7XG4gIGFjdGl2ZUxpbmsocXVlc3Rpb25zTGluaywgMzAwLCAyMDApXG59XG5cbmNvbnN0IHN1cHBvcnRMaW5rQWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1cHBvcnRfX2xpbmtcIilcbmlmIChzdXBwb3J0TGlua0FpKSB7XG4gIGFjdGl2ZUxpbmsoc3VwcG9ydExpbmtBaSwgMzAwLCAyMDApXG59XG5cbmNvbnN0IHNlcnZpY2VzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKVxuaWYgKHNlcnZpY2VzTGluaykge1xuICBzZXJ2aWNlc0xpbmsuZm9yRWFjaChsaW5rID0+IHtcbiAgICBhY3RpdmVMaW5rKGxpbmssIDMwMCwgMjAwKTtcbiAgfSlcbn1cblxuY29uc3QgaGVhZGVyQXZhaWxhYmlsaXR5UHJvYmxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19hdmFpbGFiaWxpdHlfcHJvYmxlbVwiKTtcbmlmIChoZWFkZXJBdmFpbGFiaWxpdHlQcm9ibGVtKSB7XG4gIGFjdGl2ZUxpbmsoaGVhZGVyQXZhaWxhYmlsaXR5UHJvYmxlbSwgMzAwLCAyMDApXG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUJ0bihidG4sIHRpbWVvdXRDbGFzcykge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgdGltZW91dENsYXNzKTtcbiAgfSlcbn1cblxuY29uc3Qgc2VydmljZUJ0bkdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZV9fZ2V0XCIpO1xuaWYgKHNlcnZpY2VCdG5HZXQpIHtcbiAgYWN0aXZlQnRuKHNlcnZpY2VCdG5HZXQsIDMwMClcbn1cblxuY29uc3QgdmVyZWZ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC12ZXJlZnlfX2J0blwiKVxuaWYgKHZlcmVmeUJ0bikge1xuICBhY3RpdmVCdG4odmVyZWZ5QnRuLCAzMDApXG59XG5cbmNvbnN0IHJlc2V0QXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmFpbGFiaWxpdHktYnRuXCIpO1xuaWYgKHJlc2V0QXZhaWxhYmlsaXR5KSB7XG4gIGFjdGl2ZUJ0bihyZXNldEF2YWlsYWJpbGl0eSwgMzAwKVxufSIsImlmICgnc2Nyb2xsUmVzdG9yYXRpb24nIGluIGhpc3RvcnkpIHtcbiAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoOyAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0YHRgNCw0LfRg1xuXG4gIGlmIChvcmlnaW5hbEhhc2gpIHtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCDQstGA0LXQvNC10L3QvdC+XG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGxlZnQ6IDB9KTtcblxuICAgIC8vINCy0LXRgNC90ZHQvCBoYXNoINC/0L7RgdC70LUg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIG9yaWdpbmFsSGFzaCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgY29uc3QgaGVhZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZXJ2aWNlcy1jYXRlZ29yeV9faGVhZF9pdGVtXCIpO1xuICBjb25zdCBib2R5TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlcnZpY2VzLWNhdGVnb3J5X19saXN0XCIpO1xuICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlcy1jYXRlZ29yeV9fbmV4dFwiKTtcbiAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VydmljZXMtY2F0ZWdvcnlfX3ByZXZcIik7XG5cbiAgaWYgKCFoZWFkSXRlbXMubGVuZ3RoIHx8ICFib2R5TGlzdHMubGVuZ3RoKSByZXR1cm5cblxuICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgY29uc3QgdG90YWwgPSBoZWFkSXRlbXMubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZShuZXdJbmRleCwgZGlyZWN0aW9uID0gbnVsbCwgdXBkYXRlSGFzaCA9IHRydWUpIHtcbiAgICBib2R5TGlzdHNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgIGJvZHlMaXN0c1tjdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1sZWZ0XCIsIFwic2xpZGUtcmlnaHRcIik7XG5cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBib2R5TGlzdHNbbmV3SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1sZWZ0XCIsIFwic2xpZGUtcmlnaHRcIik7XG4gICAgICBib2R5TGlzdHNbbmV3SW5kZXhdLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uID09PSBcIm5leHRcIiA/IFwic2xpZGUtcmlnaHRcIiA6IFwic2xpZGUtbGVmdFwiKTtcbiAgICAgIHZvaWQgYm9keUxpc3RzW25ld0luZGV4XS5vZmZzZXRXaWR0aDtcbiAgICAgIGJvZHlMaXN0c1tuZXdJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLXJpZ2h0XCIsIFwic2xpZGUtbGVmdFwiKTtcbiAgICB9XG5cbiAgICBoZWFkSXRlbXMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpKTtcbiAgICBoZWFkSXRlbXNbbmV3SW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XG4gICAgYm9keUxpc3RzW25ld0luZGV4XS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuXG4gICAgY3VycmVudEluZGV4ID0gbmV3SW5kZXg7XG5cbiAgICBpZiAodXBkYXRlSGFzaCkge1xuICAgICAgY29uc3QgaWQgPSBib2R5TGlzdHNbbmV3SW5kZXhdLmlkO1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBgIyR7aWR9YCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSDRgdGC0LDRgNGC0L7QstGL0Lkg0YHQu9Cw0LnQtCAtLS1cbiAgaWYgKG9yaWdpbmFsSGFzaCkge1xuICAgIGNvbnN0IGNsZWFuSGFzaCA9IG9yaWdpbmFsSGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gWy4uLmJvZHlMaXN0c10uZmluZEluZGV4KGVsID0+IGVsLmlkID09PSBjbGVhbkhhc2gpO1xuICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgY3VycmVudEluZGV4ID0gZm91bmRJbmRleDtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZShjdXJyZW50SW5kZXgsIG51bGwsIGZhbHNlKTtcbiAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG5cbiAgLy8gLS0tINC60L3QvtC/0LrQuCAtLS1cbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0luZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgdG90YWw7XG4gICAgdXBkYXRlQWN0aXZlKG5ld0luZGV4LCBcIm5leHRcIik7XG4gIH0pO1xuXG4gIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgdG90YWwpICUgdG90YWw7XG4gICAgdXBkYXRlQWN0aXZlKG5ld0luZGV4LCBcInByZXZcIik7XG4gIH0pO1xuXG4gIC8vIC0tLSDQvdCw0LLQuNCz0LDRhtC40Y8gQmFjay9Gb3J3YXJkIC0tLVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gWy4uLmJvZHlMaXN0c10uZmluZEluZGV4KGVsID0+IGVsLmlkID09PSBuZXdIYXNoKTtcbiAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEgJiYgZm91bmRJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBmb3VuZEluZGV4ID4gY3VycmVudEluZGV4ID8gXCJuZXh0XCIgOiBcInByZXZcIjtcbiAgICAgIHVwZGF0ZUFjdGl2ZShmb3VuZEluZGV4LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=
