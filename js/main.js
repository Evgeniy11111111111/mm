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
  document.body.classList.add("lock");
});
availabilityClose.addEventListener("click", function () {
  availability.classList.remove("active");
  document.body.classList.remove("lock");
});
availability.addEventListener("click", function (e) {
  // Проверяем, что кликнули именно в .header__availability, а не внутрь .header__availability_wrap
  if (!e.target.closest('.header__availability_wrap')) {
    availability.classList.remove("active");
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
    window.history.back();
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwicGhvbmVJbWciLCJsZWFkaW5nIiwidGhlbWVJbnB1dHMiLCJzYXZlU2V0dGluZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2FkU2V0dGluZyIsImdldEl0ZW0iLCJ1cGRhdGVSYW5nZVByb2dyZXNzIiwiaW5wdXQiLCJmaWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1pbiIsIm1heCIsInBlcmNlbnQiLCJ3aWR0aCIsImNvbmNhdCIsImxhYmVscyIsInBhcmVudEVsZW1lbnQiLCJzdGVwIiwic3BhbiIsInRocmVzaG9sZCIsInRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eSIsImJsb2NrIiwiZm9udFNpemUiLCJpbm5lcldpZHRoIiwiZGlzcGxheSIsImFwcGx5VGhlbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJpc0RhcmsiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFwcGx5TGVhZGluZyIsInJlc3RvcmVTZXR0aW5ncyIsInNhdmVkRm9udCIsImNvbnRyYXN0Q2xhc3NlcyIsInNhdmVkQ29udHJhc3QiLCJfZG9jdW1lbnQkZG9jdW1lbnRFbGUiLCJhcHBseSIsInNhdmVkU3BhY2luZyIsInJlbW92ZVByb3BlcnR5IiwibGV0dGVyU3BhY2luZyIsIk51bWJlciIsInNhdmVkVGhlbWUiLCJ0aGVtZUlucHV0IiwiY2hlY2tlZCIsInNhdmVkTGVhZGluZyIsImxlYWRpbmdJbnB1dCIsInNldENvbnRyYXN0TW9kZSIsIl9kb2N1bWVudCRkb2N1bWVudEVsZTIiLCJ0aGVtZSIsImxoIiwic3BhY2luZyIsImlucHV0Rm9udCIsImNsZWFyQXZhaWxhYmlsaXR5IiwicmVtb3ZlSXRlbSIsImJ1cmdlckJ0biIsImJ1cmdlck1lbnUiLCJidXJnZXJNZW51NzY4IiwiYnVyZ2VyQ2xvc2U3NjgiLCJzd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJhdXRvSGVpZ2h0Iiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJlbCIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImJyZWFrcG9pbnRzIiwiYnRuUXIiLCJtb2RhbFFyIiwiYnRuQ2xvc2VNb2RhbCIsImNsb3NlTW9kYWwiLCJldmVudCIsImlzT3V0c2lkZUNsaWNrIiwiYnRuQmFjayIsImhpc3RvcnkiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsZUFBZSxFQUFnQjtJQUFBLElBQWRDLE9BQU8sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO0lBQUFHLGVBQUEsT0FBQU4sUUFBQTtJQUN2QyxJQUFJLENBQUNPLFFBQVEsR0FBR04sZUFBZTtJQUMvQixJQUFJLENBQUNPLFlBQVksR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BFLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0gsUUFBUSxDQUFDRSxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsSUFBSSxDQUFDRSxZQUFZLEdBQUcsSUFBSSxDQUFDSCxZQUFZLENBQUNJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0lBQzNFLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRTNCLElBQUksQ0FBQ0MsVUFBVSxHQUFHWixPQUFPLENBQUNZLFVBQVUsSUFBSSxXQUFXLENBQUMsQ0FBQzs7SUFFckQsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUNiO0VBQUMsT0FBQUMsWUFBQSxDQUFBaEIsUUFBQTtJQUFBaUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsSUFBSUEsQ0FBQSxFQUFHO01BQUEsSUFBQUksS0FBQTtNQUNMLElBQUksQ0FBQ1QsWUFBWSxDQUFDVSxnQkFBZ0Is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VUFBVSxHQUFuQixTQUFTQSxVQUFVQSxDQUFBLEVBQUc7SUFDcEJGLE9BQU8sQ0FBQ25ILFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQ1csUUFBUSxDQUFDUyxJQUFJLENBQUMxQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDeEMsQ0FBQztFQVJENEcsS0FBSyxDQUFDL0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDcEM4QixRQUFRLENBQUNTLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQ3FHLE9BQU8sQ0FBQ25ILFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFPRnNHLGFBQWEsQ0FBQ2pJLGdCQUFnQixDQUFDLE9BQU8sRUFBRWtJLFVBQVUsQ0FBQztFQUVuREYsT0FBTyxDQUFDaEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNtSSxLQUFLLEVBQUs7SUFDM0MsSUFBTUMsY0FBYyxHQUFHLENBQUNELEtBQUssQ0FBQ2hHLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLHVCQUF1QixDQUFDO0lBQ3JFLElBQUk0RixjQUFjLEVBQUU7TUFDbEJGLFVBQVUsQ0FBQyxDQUFDO0lBQ2Q7RUFDRixDQUFDLENBQUM7QUFDSjtBQUlBLElBQU1HLE9BQU8sR0FBR3ZHLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDbkQsSUFBSWdKLE9BQU8sRUFBRTtFQUNYQSxPQUFPLENBQUNySSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN0Q2tELE1BQU0sQ0FBQ29GLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZHJvcGRvd25FbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd25FbGVtZW50O1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5ID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWJvZHlcIik7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taGVhZFwiKTtcbiAgICB0aGlzLmNvdW50cnlJdGVtcyA9IHRoaXMuZHJvcGRvd25Cb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtZHJvcGRvd24taXRlbVwiKTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG5cbiAgICB0aGlzLm5hbWVTb3VyY2UgPSBvcHRpb25zLm5hbWVTb3VyY2UgfHwgXCJpbm5lclRleHRcIjsgLy8g0LjQu9C4IFwiZGF0YS1sYW5nXCIsIFwiZGF0YS12YWx1ZVwiINC4INGCLtC/LlxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZURyb3Bkb3duKCkpO1xuXG4gICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKSk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiB0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duQm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNQcmV2SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNlbGVjdENvdW50cnkoZWxlbSkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bi1pdGVtLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgIG5hbWVFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5hbWVFbCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG4gICAgICBsZXQgc2VsZWN0ZWROYW1lID0gXCJcIjtcblxuICAgICAgaWYgKHRoaXMubmFtZVNvdXJjZSA9PT0gXCJpbm5lclRleHRcIikge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWw/LmlubmVyVGV4dDtcbiAgICAgIH0gZWxzZSBpZiAobmFtZUVsPy5kYXRhc2V0KSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbC5kYXRhc2V0W3RoaXMubmFtZVNvdXJjZV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSW1nID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgICAgIGNvbnN0IGhlYWRJbWcgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcblxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSAmJiBoZWFkTmFtZSkge1xuICAgICAgICBoZWFkTmFtZS5pbm5lclRleHQgPSBzZWxlY3RlZE5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZEltZyAmJiBoZWFkSW1nKSB7XG4gICAgICAgIGhlYWRJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGVjdGVkSW1nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LmFkZChcImlzU2VsZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTmV4dEl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPCB0aGlzLmNvdW50cnlJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4Kys7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldkl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cblxuXG5jb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY291bnRyeVwiKTtcbmNvbnN0IGluc3RhbmNlID0gbmV3IERyb3Bkb3duKGRyb3Bkb3ducyk7XG5kcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlXG5cbmNvbnN0IGRyb3Bkb3duTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nXCIpO1xuY29uc3QgaW5zdGFuY2VMYW5nID0gbmV3IERyb3Bkb3duKGRyb3Bkb3duTGFuZywge25hbWVTb3VyY2U6IFwibGFuZ1wifSk7XG5kcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bnMuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcblxuZGlzYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxufSk7XG5cbmF2YWlsYWJpbGl0eUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGH0YLQviDQutC70LjQutC90YPQu9C4INC40LzQtdC90L3QviDQsiAuaGVhZGVyX19hdmFpbGFiaWxpdHksINCwINC90LUg0LLQvdGD0YLRgNGMIC5oZWFkZXJfX2F2YWlsYWJpbGl0eV93cmFwXG4gIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXAnKSkge1xuICAgIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgfVxufSk7XG5cbmNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG5hY2NvcmRpb25zLmZvckVhY2goaXRlbSAgPT4ge1xuICBjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYnRuJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYm9keScpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpc09wZW4gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpXG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRIZWlnaHRDb250ZW50QWNjKCkge1xuICBjb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG4gIGFjYy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWFjYy1ib2R5XCIpO1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIlxuICAgIH1cbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn0pXG5cbmNvbnN0IGZvbnRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKTtcbmNvbnN0IGNvbnRyYXN0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYXN0XCIpXG5jb25zdCBzcGFjaW5nUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuY29uc3QgcGhvbmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX21vYl9ibG9ja19waG9uZVwiKVxuY29uc3QgbGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdJylcbmNvbnN0IHRoZW1lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInRoZW1lXCJdJyk7XG5cbmZ1bmN0aW9uIHNhdmVTZXR0aW5nKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTZXR0aW5nKGtleSkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUmFuZ2VQcm9ncmVzcyhpbnB1dCkge1xuICBjb25zdCBmaWxsID0gaW5wdXQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgY29uc3QgbWluID0gK2lucHV0Lm1pbjtcbiAgY29uc3QgbWF4ID0gK2lucHV0Lm1heDtcbiAgY29uc3QgdmFsdWUgPSAraW5wdXQudmFsdWU7XG4gIGNvbnN0IHBlcmNlbnQgPSAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcblxuICBpZiAoZmlsbCkge1xuICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICB9XG5cbiAgY29uc3QgbGFiZWxzID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXJhbmdlX2xhYmVscyBzcGFuXCIpO1xuICBpZiAobGFiZWxzKSB7XG4gICAgY29uc3Qgc3RlcCA9IChtYXggLSBtaW4pIC8gKGxhYmVscy5sZW5ndGggLSAxKTtcblxuICAgIGxhYmVscy5mb3JFYWNoKChzcGFuLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGhyZXNob2xkID0gbWluICsgaW5kZXggKiBzdGVwO1xuICAgICAgaWYgKHZhbHVlID49IHRocmVzaG9sZCkge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KGJsb2NrLCBmb250U2l6ZSkge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNDc1ICYmIGZvbnRTaXplID4gMTYpIHtcbiAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUaGVtZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwiZGFya1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGlnaHRcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImR1b1wiKSB7XG4gICAgY29uc3QgaXNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGlmIChpc0RhcmspIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlMZWFkaW5nKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImJpZ1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH1cbiAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVTZXR0aW5ncygpIHtcbiAgLy8gRk9OVFxuICBjb25zdCBzYXZlZEZvbnQgPSBsb2FkU2V0dGluZyhcImZvbnQtc2l6ZVwiKTtcbiAgaWYgKGZvbnRSYW5nZSAmJiBzYXZlZEZvbnQgIT09IG51bGwpIHtcbiAgICBmb250UmFuZ2UudmFsdWUgPSBzYXZlZEZvbnQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gc2F2ZWRGb250ID09PSBcIjE2XCIgPyBcIlwiIDogYCR7c2F2ZWRGb250fXB4YDtcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHNhdmVkRm9udCk7XG4gIH1cblxuICAvLyBDT05UUkFTVFxuICBjb25zdCBjb250cmFzdENsYXNzZXMgPSBbXCJjb250cmFzdC0xXCIsIFwiY29udHJhc3QtMlwiLCBcImNvbnRyYXN0LTRcIl07XG4gIGNvbnN0IHNhdmVkQ29udHJhc3QgPSBsb2FkU2V0dGluZyhcImNvbnRyYXN0XCIpO1xuICBpZiAoY29udHJhc3RSYW5nZSAmJiBzYXZlZENvbnRyYXN0ICE9PSBudWxsKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IHNhdmVkQ29udHJhc3Q7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICBpZiAoc2F2ZWRDb250cmFzdCAhPT0gXCIzXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBjb250cmFzdC0ke3NhdmVkQ29udHJhc3R9YCk7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGNvbnN0IHNhdmVkU3BhY2luZyA9IGxvYWRTZXR0aW5nKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGlmIChzcGFjaW5nUmFuZ2UgJiYgc2F2ZWRTcGFjaW5nICE9PSBudWxsKSB7XG4gICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gc2F2ZWRTcGFjaW5nO1xuICAgIGlmIChzYXZlZFNwYWNpbmcgPT09IFwiMFwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIoc2F2ZWRTcGFjaW5nKX1weGA7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3Moc3BhY2luZ1JhbmdlKTtcbiAgfVxuXG4gIC8vIFRIRU1FXG4gIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2FkU2V0dGluZyhcInRoZW1lXCIpO1xuICBpZiAoc2F2ZWRUaGVtZSAmJiB0aGVtZUlucHV0cykge1xuICAgIGFwcGx5VGhlbWUoc2F2ZWRUaGVtZSk7XG4gICAgY29uc3QgdGhlbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJ0aGVtZVwiXVt2YWx1ZT1cIiR7c2F2ZWRUaGVtZX1cIl1gKTtcbiAgICBpZiAodGhlbWVJbnB1dCkgdGhlbWVJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVkTGVhZGluZyA9IGxvYWRTZXR0aW5nKFwibGVhZGluZ1wiKTtcbiAgaWYgKHNhdmVkTGVhZGluZyAmJiBsZWFkaW5nKSB7XG4gICAgYXBwbHlMZWFkaW5nKHNhdmVkTGVhZGluZylcbiAgICBjb25zdCBsZWFkaW5nSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXVt2YWx1ZT1cIiR7c2F2ZWRMZWFkaW5nfVwiXWApO1xuICAgIGlmIChsZWFkaW5nSW5wdXQpIGxlYWRpbmdJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlc3RvcmVTZXR0aW5ncygpXG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImZvbnQtc2l6ZVwiLCB2YWx1ZSk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB2YWx1ZSA9PT0gXCIxNlwiID8gXCJcIiA6IGAke3ZhbHVlfXB4YDtcbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1wiY29udHJhc3QtMVwiLCBcImNvbnRyYXN0LTJcIiwgXCJjb250cmFzdC00XCJdO1xuICAgIGZ1bmN0aW9uIHNldENvbnRyYXN0TW9kZSh2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gXCIzXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNvbnRyYXN0LSR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRyYXN0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJjb250cmFzdFwiLCB2YWx1ZSk7XG4gICAgICBzZXRDb250cmFzdE1vZGUodmFsdWUpO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJsZXR0ZXItc3BhY2luZ1wiLCB2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIodmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgaWYgKHRoZW1lSW5wdXRzKSB7XG4gICAgdGhlbWVJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJ0aGVtZVwiLCB2YWx1ZSk7XG4gICAgICAgIGFwcGx5VGhlbWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAobGVhZGluZykge1xuICAgIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJsZWFkaW5nXCIsIGl0ZW0udmFsdWUpO1xuICAgICAgICBhcHBseUxlYWRpbmcoaXRlbS52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgcmVzdG9yZVNldHRpbmdzKVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRoZW1lXCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5VGhlbWUodGhlbWUudmFsdWUpXG4gICAgY29uc3QgbGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXTpjaGVja2VkJylcbiAgICBhcHBseUxlYWRpbmcobGgudmFsdWUpXG4gICAgY29uc3Qgc3BhY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIoc3BhY2luZy52YWx1ZSkgKiAyfXB4YDtcbiAgfVxuICBjb25zdCBpbnB1dEZvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnQtcmFuZ2VcIilcbiAgaWYgKHBob25lSW1nKSB7XG4gICAgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCBpbnB1dEZvbnQudmFsdWUpXG4gIH1cbn0pXG5cbmNvbnN0IGNsZWFyQXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmFpbGFiaWxpdHktYnRuXCIpXG5jbGVhckF2YWlsYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICBcImRhcmtcIixcbiAgICBcImxpbmVIZWlnaHRCaWdcIixcbiAgICBcImxpbmVIZWlnaHRNZWRpdW1cIixcbiAgICBcImNvbnRyYXN0LTFcIixcbiAgICBcImNvbnRyYXN0LTJcIixcbiAgICBcImNvbnRyYXN0LTRcIlxuICApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZm9udC1zaXplXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNvbnRyYXN0XCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxldHRlci1zcGFjaW5nXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxlYWRpbmdcIik7XG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS52YWx1ZSA9IDE2OyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIDE2KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IDM7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UudmFsdWUgPSAwOyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICB0aGVtZUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQudmFsdWUgPT09IFwibGlnaHRcIjtcbiAgfSk7XG4gIGFwcGx5VGhlbWUoXCJsaWdodFwiKTtcblxuICAvLyBMRUFESU5HXG4gIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmNoZWNrZWQgPSBpdGVtLnZhbHVlID09PSBcIm5vcm1hbFwiO1xuICB9KTtcbiAgYXBwbHlMZWFkaW5nKFwibm9ybWFsXCIpO1xufSlcblxuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVfYnRuXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYnVyZ2VyLW1lbnVcIilcbmNvbnN0IGJ1cmdlck1lbnU3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdcIik7XG5jb25zdCBidXJnZXJDbG9zZTc2OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJpZ19jbG9zZVwiKTtcblxuaWYgKGJ1cmdlckJ0biAmJiBidXJnZXJNZW51KSB7XG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJNZW51NzY4ICYmIGJ1cmdlckNsb3NlNzY4KSB7XG4gICAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGlmIChidXJnZXJDbG9zZTc2OCkge1xuICAgIGJ1cmdlckNsb3NlNzY4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfSlcbiAgfVxuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgaWYgKGJ1cmdlck1lbnU3NjgpIHtcbiAgICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxufVxuXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIud2h5X19zd2lwZXJcIiwge1xuICBzcGFjZUJldHdlZW46IDIwLFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi53aHlfX3BhZ2luYXRpb25cIixcbiAgICByZW5kZXJCdWxsZXQ6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9IHdoeV9fYnVsbGV0XCI+PC9zcGFuPmA7XG4gICAgfVxuICB9LFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIud2h5X19zY3JvbGxiYXJcIixcbiAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgYnRuUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVfX3FyXCIpO1xuY29uc3QgbW9kYWxRciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXItbW9kYWxcIik7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jdXN0b21fX2Nsb3NlXCIpO1xuXG5pZiAoYnRuUXIgJiYgbW9kYWxRciAmJiBidG5DbG9zZU1vZGFsKSB7XG4gIGJ0blFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKTtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cblxuICBidG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICBtb2RhbFFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpc091dHNpZGVDbGljayA9ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jdXN0b21fX2RpYWxvZ1wiKTtcbiAgICBpZiAoaXNPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIilcbmlmIChidG5CYWNrKSB7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH0pXG59XG4iXX0=
