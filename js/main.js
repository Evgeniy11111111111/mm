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
document.querySelectorAll('.link-custom').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = link.getAttribute('href');
    link.classList.add('active');
    setTimeout(function () {
      return link.classList.remove('active');
    }, 200);
    setTimeout(function () {
      return window.location = href;
    }, 150);
  });
});
var infoLinks = document.querySelectorAll(".info__item");
if (infoLinks) {
  infoLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var href = link.getAttribute('href');
      link.classList.add('active');
      setTimeout(function () {
        return link.classList.remove('active');
      }, 200);
      setTimeout(function () {
        return window.location = href;
      }, 150);
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwicGhvbmVJbWciLCJsZWFkaW5nIiwidGhlbWVJbnB1dHMiLCJzYXZlU2V0dGluZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2FkU2V0dGluZyIsImdldEl0ZW0iLCJ1cGRhdGVSYW5nZVByb2dyZXNzIiwiaW5wdXQiLCJmaWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1pbiIsIm1heCIsInBlcmNlbnQiLCJ3aWR0aCIsImNvbmNhdCIsImxhYmVscyIsInBhcmVudEVsZW1lbnQiLCJzdGVwIiwic3BhbiIsInRocmVzaG9sZCIsInRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eSIsImJsb2NrIiwiZm9udFNpemUiLCJpbm5lcldpZHRoIiwiZGlzcGxheSIsImFwcGx5VGhlbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJpc0RhcmsiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFwcGx5TGVhZGluZyIsInJlc3RvcmVTZXR0aW5ncyIsInNhdmVkRm9udCIsImNvbnRyYXN0Q2xhc3NlcyIsInNhdmVkQ29udHJhc3QiLCJfZG9jdW1lbnQkZG9jdW1lbnRFbGUiLCJhcHBseSIsInNhdmVkU3BhY2luZyIsInJlbW92ZVByb3BlcnR5IiwibGV0dGVyU3BhY2luZyIsIk51bWJlciIsInNhdmVkVGhlbWUiLCJ0aGVtZUlucHV0IiwiY2hlY2tlZCIsInNhdmVkTGVhZGluZyIsImxlYWRpbmdJbnB1dCIsInNldENvbnRyYXN0TW9kZSIsIl9kb2N1bWVudCRkb2N1bWVudEVsZTIiLCJ0aGVtZSIsImxoIiwic3BhY2luZyIsImlucHV0Rm9udCIsImNsZWFyQXZhaWxhYmlsaXR5IiwicmVtb3ZlSXRlbSIsImJ1cmdlckJ0biIsImJ1cmdlck1lbnUiLCJidXJnZXJNZW51NzY4IiwiYnVyZ2VyQ2xvc2U3NjgiLCJzd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJhdXRvSGVpZ2h0Iiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJlbCIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImJyZWFrcG9pbnRzIiwiYnRuUXIiLCJtb2RhbFFyIiwiYnRuQ2xvc2VNb2RhbCIsImNsb3NlTW9kYWwiLCJldmVudCIsImlzT3V0c2lkZUNsaWNrIiwiYnRuQmFjayIsImhpc3RvcnkiLCJiYWNrIiwibGluayIsImhyZWYiLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJpbmZvTGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLFFBQVE7RUFDWixTQUFBQSxTQUFZQyxlQUFlLEVBQWdCO0lBQUEsSUFBZEMsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFBQUcsZUFBQSxPQUFBTixRQUFBO0lBQ3ZDLElBQUksQ0FBQ08sUUFBUSxHQUFHTixlQUFlO0lBQy9CLElBQUksQ0FBQ08sWUFBWSxHQUFHLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDSCxRQUFRLENBQUNFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwRSxJQUFJLENBQUNFLFlBQVksR0FBRyxJQUFJLENBQUNILFlBQVksQ0FBQ0ksZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7SUFDM0UsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFM0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdaLE9BQU8sQ0FBQ1ksVUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDOztJQUVyRCxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ2I7RUFBQyxPQUFBQyxZQUFBLENBQUFoQixRQUFBO0lBQUFpQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSCxJQUFJQSxDQUFBLEVBQUc7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QUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZHJvcGRvd25FbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd25FbGVtZW50O1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5ID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWJvZHlcIik7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taGVhZFwiKTtcbiAgICB0aGlzLmNvdW50cnlJdGVtcyA9IHRoaXMuZHJvcGRvd25Cb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtZHJvcGRvd24taXRlbVwiKTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG5cbiAgICB0aGlzLm5hbWVTb3VyY2UgPSBvcHRpb25zLm5hbWVTb3VyY2UgfHwgXCJpbm5lclRleHRcIjsgLy8g0LjQu9C4IFwiZGF0YS1sYW5nXCIsIFwiZGF0YS12YWx1ZVwiINC4INGCLtC/LlxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZURyb3Bkb3duKCkpO1xuXG4gICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKSk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiB0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duQm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNQcmV2SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNlbGVjdENvdW50cnkoZWxlbSkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bi1pdGVtLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgIG5hbWVFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5hbWVFbCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG4gICAgICBsZXQgc2VsZWN0ZWROYW1lID0gXCJcIjtcblxuICAgICAgaWYgKHRoaXMubmFtZVNvdXJjZSA9PT0gXCJpbm5lclRleHRcIikge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWw/LmlubmVyVGV4dDtcbiAgICAgIH0gZWxzZSBpZiAobmFtZUVsPy5kYXRhc2V0KSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbC5kYXRhc2V0W3RoaXMubmFtZVNvdXJjZV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSW1nID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgICAgIGNvbnN0IGhlYWRJbWcgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcblxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSAmJiBoZWFkTmFtZSkge1xuICAgICAgICBoZWFkTmFtZS5pbm5lclRleHQgPSBzZWxlY3RlZE5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZEltZyAmJiBoZWFkSW1nKSB7XG4gICAgICAgIGhlYWRJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGVjdGVkSW1nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LmFkZChcImlzU2VsZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTmV4dEl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPCB0aGlzLmNvdW50cnlJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4Kys7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldkl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cblxuXG5jb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY291bnRyeVwiKTtcbmNvbnN0IGluc3RhbmNlID0gbmV3IERyb3Bkb3duKGRyb3Bkb3ducyk7XG5kcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlXG5cbmNvbnN0IGRyb3Bkb3duTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nXCIpO1xuY29uc3QgaW5zdGFuY2VMYW5nID0gbmV3IERyb3Bkb3duKGRyb3Bkb3duTGFuZywge25hbWVTb3VyY2U6IFwibGFuZ1wifSk7XG5kcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bnMuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcblxuZGlzYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxufSk7XG5cbmF2YWlsYWJpbGl0eUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGH0YLQviDQutC70LjQutC90YPQu9C4INC40LzQtdC90L3QviDQsiAuaGVhZGVyX19hdmFpbGFiaWxpdHksINCwINC90LUg0LLQvdGD0YLRgNGMIC5oZWFkZXJfX2F2YWlsYWJpbGl0eV93cmFwXG4gIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXAnKSkge1xuICAgIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgfVxufSk7XG5cbmNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG5hY2NvcmRpb25zLmZvckVhY2goaXRlbSAgPT4ge1xuICBjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYnRuJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYm9keScpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpc09wZW4gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpXG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRIZWlnaHRDb250ZW50QWNjKCkge1xuICBjb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG4gIGFjYy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWFjYy1ib2R5XCIpO1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIlxuICAgIH1cbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn0pXG5cbmNvbnN0IGZvbnRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKTtcbmNvbnN0IGNvbnRyYXN0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYXN0XCIpXG5jb25zdCBzcGFjaW5nUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuY29uc3QgcGhvbmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX21vYl9ibG9ja19waG9uZVwiKVxuY29uc3QgbGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdJylcbmNvbnN0IHRoZW1lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInRoZW1lXCJdJyk7XG5cbmZ1bmN0aW9uIHNhdmVTZXR0aW5nKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTZXR0aW5nKGtleSkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUmFuZ2VQcm9ncmVzcyhpbnB1dCkge1xuICBjb25zdCBmaWxsID0gaW5wdXQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgY29uc3QgbWluID0gK2lucHV0Lm1pbjtcbiAgY29uc3QgbWF4ID0gK2lucHV0Lm1heDtcbiAgY29uc3QgdmFsdWUgPSAraW5wdXQudmFsdWU7XG4gIGNvbnN0IHBlcmNlbnQgPSAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcblxuICBpZiAoZmlsbCkge1xuICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICB9XG5cbiAgY29uc3QgbGFiZWxzID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXJhbmdlX2xhYmVscyBzcGFuXCIpO1xuICBpZiAobGFiZWxzKSB7XG4gICAgY29uc3Qgc3RlcCA9IChtYXggLSBtaW4pIC8gKGxhYmVscy5sZW5ndGggLSAxKTtcblxuICAgIGxhYmVscy5mb3JFYWNoKChzcGFuLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGhyZXNob2xkID0gbWluICsgaW5kZXggKiBzdGVwO1xuICAgICAgaWYgKHZhbHVlID49IHRocmVzaG9sZCkge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KGJsb2NrLCBmb250U2l6ZSkge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNDc1ICYmIGZvbnRTaXplID4gMTYpIHtcbiAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUaGVtZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwiZGFya1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGlnaHRcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImR1b1wiKSB7XG4gICAgY29uc3QgaXNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGlmIChpc0RhcmspIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlMZWFkaW5nKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImJpZ1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH1cbiAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVTZXR0aW5ncygpIHtcbiAgLy8gRk9OVFxuICBjb25zdCBzYXZlZEZvbnQgPSBsb2FkU2V0dGluZyhcImZvbnQtc2l6ZVwiKTtcbiAgaWYgKGZvbnRSYW5nZSAmJiBzYXZlZEZvbnQgIT09IG51bGwpIHtcbiAgICBmb250UmFuZ2UudmFsdWUgPSBzYXZlZEZvbnQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gc2F2ZWRGb250ID09PSBcIjE2XCIgPyBcIlwiIDogYCR7c2F2ZWRGb250fXB4YDtcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHNhdmVkRm9udCk7XG4gIH1cblxuICAvLyBDT05UUkFTVFxuICBjb25zdCBjb250cmFzdENsYXNzZXMgPSBbXCJjb250cmFzdC0xXCIsIFwiY29udHJhc3QtMlwiLCBcImNvbnRyYXN0LTRcIl07XG4gIGNvbnN0IHNhdmVkQ29udHJhc3QgPSBsb2FkU2V0dGluZyhcImNvbnRyYXN0XCIpO1xuICBpZiAoY29udHJhc3RSYW5nZSAmJiBzYXZlZENvbnRyYXN0ICE9PSBudWxsKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IHNhdmVkQ29udHJhc3Q7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICBpZiAoc2F2ZWRDb250cmFzdCAhPT0gXCIzXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBjb250cmFzdC0ke3NhdmVkQ29udHJhc3R9YCk7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGNvbnN0IHNhdmVkU3BhY2luZyA9IGxvYWRTZXR0aW5nKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGlmIChzcGFjaW5nUmFuZ2UgJiYgc2F2ZWRTcGFjaW5nICE9PSBudWxsKSB7XG4gICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gc2F2ZWRTcGFjaW5nO1xuICAgIGlmIChzYXZlZFNwYWNpbmcgPT09IFwiMFwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIoc2F2ZWRTcGFjaW5nKX1weGA7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3Moc3BhY2luZ1JhbmdlKTtcbiAgfVxuXG4gIC8vIFRIRU1FXG4gIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2FkU2V0dGluZyhcInRoZW1lXCIpO1xuICBpZiAoc2F2ZWRUaGVtZSAmJiB0aGVtZUlucHV0cykge1xuICAgIGFwcGx5VGhlbWUoc2F2ZWRUaGVtZSk7XG4gICAgY29uc3QgdGhlbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJ0aGVtZVwiXVt2YWx1ZT1cIiR7c2F2ZWRUaGVtZX1cIl1gKTtcbiAgICBpZiAodGhlbWVJbnB1dCkgdGhlbWVJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVkTGVhZGluZyA9IGxvYWRTZXR0aW5nKFwibGVhZGluZ1wiKTtcbiAgaWYgKHNhdmVkTGVhZGluZyAmJiBsZWFkaW5nKSB7XG4gICAgYXBwbHlMZWFkaW5nKHNhdmVkTGVhZGluZylcbiAgICBjb25zdCBsZWFkaW5nSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXVt2YWx1ZT1cIiR7c2F2ZWRMZWFkaW5nfVwiXWApO1xuICAgIGlmIChsZWFkaW5nSW5wdXQpIGxlYWRpbmdJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlc3RvcmVTZXR0aW5ncygpXG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImZvbnQtc2l6ZVwiLCB2YWx1ZSk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB2YWx1ZSA9PT0gXCIxNlwiID8gXCJcIiA6IGAke3ZhbHVlfXB4YDtcbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1wiY29udHJhc3QtMVwiLCBcImNvbnRyYXN0LTJcIiwgXCJjb250cmFzdC00XCJdO1xuICAgIGZ1bmN0aW9uIHNldENvbnRyYXN0TW9kZSh2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gXCIzXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNvbnRyYXN0LSR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRyYXN0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJjb250cmFzdFwiLCB2YWx1ZSk7XG4gICAgICBzZXRDb250cmFzdE1vZGUodmFsdWUpO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJsZXR0ZXItc3BhY2luZ1wiLCB2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIodmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgaWYgKHRoZW1lSW5wdXRzKSB7XG4gICAgdGhlbWVJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJ0aGVtZVwiLCB2YWx1ZSk7XG4gICAgICAgIGFwcGx5VGhlbWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAobGVhZGluZykge1xuICAgIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJsZWFkaW5nXCIsIGl0ZW0udmFsdWUpO1xuICAgICAgICBhcHBseUxlYWRpbmcoaXRlbS52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgcmVzdG9yZVNldHRpbmdzKVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRoZW1lXCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5VGhlbWUodGhlbWUudmFsdWUpXG4gICAgY29uc3QgbGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXTpjaGVja2VkJylcbiAgICBhcHBseUxlYWRpbmcobGgudmFsdWUpXG4gICAgY29uc3Qgc3BhY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIoc3BhY2luZy52YWx1ZSkgKiAyfXB4YDtcbiAgfVxuICBjb25zdCBpbnB1dEZvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnQtcmFuZ2VcIilcbiAgaWYgKHBob25lSW1nKSB7XG4gICAgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCBpbnB1dEZvbnQudmFsdWUpXG4gIH1cbn0pXG5cbmNvbnN0IGNsZWFyQXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmFpbGFiaWxpdHktYnRuXCIpXG5jbGVhckF2YWlsYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICBcImRhcmtcIixcbiAgICBcImxpbmVIZWlnaHRCaWdcIixcbiAgICBcImxpbmVIZWlnaHRNZWRpdW1cIixcbiAgICBcImNvbnRyYXN0LTFcIixcbiAgICBcImNvbnRyYXN0LTJcIixcbiAgICBcImNvbnRyYXN0LTRcIlxuICApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZm9udC1zaXplXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNvbnRyYXN0XCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxldHRlci1zcGFjaW5nXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxlYWRpbmdcIik7XG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS52YWx1ZSA9IDE2OyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIDE2KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IDM7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UudmFsdWUgPSAwOyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICB0aGVtZUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQudmFsdWUgPT09IFwibGlnaHRcIjtcbiAgfSk7XG4gIGFwcGx5VGhlbWUoXCJsaWdodFwiKTtcblxuICAvLyBMRUFESU5HXG4gIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmNoZWNrZWQgPSBpdGVtLnZhbHVlID09PSBcIm5vcm1hbFwiO1xuICB9KTtcbiAgYXBwbHlMZWFkaW5nKFwibm9ybWFsXCIpO1xufSlcblxuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVfYnRuXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYnVyZ2VyLW1lbnVcIilcbmNvbnN0IGJ1cmdlck1lbnU3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdcIik7XG5jb25zdCBidXJnZXJDbG9zZTc2OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJpZ19jbG9zZVwiKTtcblxuaWYgKGJ1cmdlckJ0biAmJiBidXJnZXJNZW51KSB7XG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJNZW51NzY4ICYmIGJ1cmdlckNsb3NlNzY4KSB7XG4gICAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGlmIChidXJnZXJDbG9zZTc2OCkge1xuICAgIGJ1cmdlckNsb3NlNzY4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfSlcbiAgfVxuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgaWYgKGJ1cmdlck1lbnU3NjgpIHtcbiAgICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxufVxuXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIud2h5X19zd2lwZXJcIiwge1xuICBzcGFjZUJldHdlZW46IDIwLFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi53aHlfX3BhZ2luYXRpb25cIixcbiAgICByZW5kZXJCdWxsZXQ6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9IHdoeV9fYnVsbGV0XCI+PC9zcGFuPmA7XG4gICAgfVxuICB9LFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIud2h5X19zY3JvbGxiYXJcIixcbiAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgYnRuUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVfX3FyXCIpO1xuY29uc3QgbW9kYWxRciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXItbW9kYWxcIik7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jdXN0b21fX2Nsb3NlXCIpO1xuXG5pZiAoYnRuUXIgJiYgbW9kYWxRciAmJiBidG5DbG9zZU1vZGFsKSB7XG4gIGJ0blFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKTtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cblxuICBidG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICBtb2RhbFFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpc091dHNpZGVDbGljayA9ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jdXN0b21fX2RpYWxvZ1wiKTtcbiAgICBpZiAoaXNPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIilcbmlmIChidG5CYWNrKSB7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH0pXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWN1c3RvbScpLmZvckVhY2gobGluayA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDIwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBocmVmLCAxNTApO1xuICB9KTtcbn0pO1xuXG5jb25zdCBpbmZvTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm9fX2l0ZW1cIik7XG5cbmlmIChpbmZvTGlua3MpIHtcbiAgaW5mb0xpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIDIwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYsIDE1MCk7XG4gICAgfSlcbiAgfSlcbn0iXX0=
