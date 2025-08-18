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
var questionsLink = document.querySelector(".questions__mobile_a");
if (questionsLink) {
  questionsLink.addEventListener("click", function (e) {
    e.preventDefault();
    var href = questionsLink.getAttribute("href");
    questionsLink.classList.add('active');
    setTimeout(function () {
      return questionsLink.classList.remove("active");
    }, 300);
    setTimeout(function () {
      return window.location = href;
    }, 200);
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwicGhvbmVJbWciLCJsZWFkaW5nIiwidGhlbWVJbnB1dHMiLCJzYXZlU2V0dGluZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2FkU2V0dGluZyIsImdldEl0ZW0iLCJ1cGRhdGVSYW5nZVByb2dyZXNzIiwiaW5wdXQiLCJmaWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1pbiIsIm1heCIsInBlcmNlbnQiLCJ3aWR0aCIsImNvbmNhdCIsImxhYmVscyIsInBhcmVudEVsZW1lbnQiLCJzdGVwIiwic3BhbiIsInRocmVzaG9sZCIsInRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eSIsImJsb2NrIiwiZm9udFNpemUiLCJpbm5lcldpZHRoIiwiZGlzcGxheSIsImFwcGx5VGhlbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJpc0RhcmsiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFwcGx5TGVhZGluZyIsInJlc3RvcmVTZXR0aW5ncyIsInNhdmVkRm9udCIsImNvbnRyYXN0Q2xhc3NlcyIsInNhdmVkQ29udHJhc3QiLCJfZG9jdW1lbnQkZG9jdW1lbnRFbGUiLCJhcHBseSIsInNhdmVkU3BhY2luZyIsInJlbW92ZVByb3BlcnR5IiwibGV0dGVyU3BhY2luZyIsIk51bWJlciIsInNhdmVkVGhlbWUiLCJ0aGVtZUlucHV0IiwiY2hlY2tlZCIsInNhdmVkTGVhZGluZyIsImxlYWRpbmdJbnB1dCIsInNldENvbnRyYXN0TW9kZSIsIl9kb2N1bWVudCRkb2N1bWVudEVsZTIiLCJ0aGVtZSIsImxoIiwic3BhY2luZyIsImlucHV0Rm9udCIsImNsZWFyQXZhaWxhYmlsaXR5IiwicmVtb3ZlSXRlbSIsImJ1cmdlckJ0biIsImJ1cmdlck1lbnUiLCJidXJnZXJNZW51NzY4IiwiYnVyZ2VyQ2xvc2U3NjgiLCJzd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJhdXRvSGVpZ2h0Iiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJlbCIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImJyZWFrcG9pbnRzIiwiYnRuUXIiLCJtb2RhbFFyIiwiYnRuQ2xvc2VNb2RhbCIsImNsb3NlTW9kYWwiLCJldmVudCIsImlzT3V0c2lkZUNsaWNrIiwiYnRuQmFjayIsInNldFRpbWVvdXQiLCJoaXN0b3J5IiwiYmFjayIsImxpbmsiLCJocmVmIiwibG9jYXRpb24iLCJpbmZvTGlua3MiLCJxdWVzdGlvbnNMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsZUFBZSxFQUFnQjtJQUFBLElBQWRDLE9BQU8sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO0lBQUFHLGVBQUEsT0FBQU4sUUFBQTtJQUN2QyxJQUFJLENBQUNPLFFBQVEsR0FBR04sZUFBZTtJQUMvQixJQUFJLENBQUNPLFlBQVksR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BFLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0gsUUFBUSxDQUFDRSxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsSUFBSSxDQUFDRSxZQUFZLEdBQUcsSUFBSSxDQUFDSCxZQUFZLENBQUNJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0lBQzNFLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRTNCLElBQUksQ0FBQ0MsVUFBVSxHQUFHWixPQUFPLENBQUNZLFVBQVUsSUFBSSxXQUFXLENBQUMsQ0FBQzs7SUFFckQsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUNiO0VBQUMsT0FBQUMsWUFBQSxDQUFBaEIsUUFBQTtJQUFBaUIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgs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biB7XG4gIGNvbnN0cnVjdG9yKGRyb3Bkb3duRWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duRWxlbWVudDtcbiAgICB0aGlzLmRyb3Bkb3duQm9keSA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1ib2R5XCIpO1xuICAgIHRoaXMuZHJvcGRvd25IZWFkID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWhlYWRcIik7XG4gICAgdGhpcy5jb3VudHJ5SXRlbXMgPSB0aGlzLmRyb3Bkb3duQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWRyb3Bkb3duLWl0ZW1cIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuXG4gICAgdGhpcy5uYW1lU291cmNlID0gb3B0aW9ucy5uYW1lU291cmNlIHx8IFwiaW5uZXJUZXh0XCI7IC8vINC40LvQuCBcImRhdGEtbGFuZ1wiLCBcImRhdGEtdmFsdWVcIiDQuCDRgi7Qvy5cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGVEcm9wZG93bigpKTtcblxuICAgIHRoaXMuY291bnRyeUl0ZW1zLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNlbGVjdENvdW50cnkoZWxlbSkpO1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdENvdW50cnkoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcm9wZG93bkhlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcm9wZG93bkJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzUHJldkl0ZW0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzZWxlY3RDb3VudHJ5KGVsZW0pIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd24taXRlbS1uYW1lJyk7XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LnJlbW92ZShcImlzU2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuYW1lRWwgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taXRlbS1uYW1lXCIpO1xuICAgICAgbGV0IHNlbGVjdGVkTmFtZSA9IFwiXCI7XG5cbiAgICAgIGlmICh0aGlzLm5hbWVTb3VyY2UgPT09IFwiaW5uZXJUZXh0XCIpIHtcbiAgICAgICAgc2VsZWN0ZWROYW1lID0gbmFtZUVsPy5pbm5lclRleHQ7XG4gICAgICB9IGVsc2UgaWYgKG5hbWVFbD8uZGF0YXNldCkge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWwuZGF0YXNldFt0aGlzLm5hbWVTb3VyY2VdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZEltZyA9IGVsZW0ucXVlcnlTZWxlY3RvcihcImltZ1wiKT8uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuXG4gICAgICBjb25zdCBoZWFkSW1nID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgIGNvbnN0IGhlYWROYW1lID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG5cbiAgICAgIGlmIChzZWxlY3RlZE5hbWUgJiYgaGVhZE5hbWUpIHtcbiAgICAgICAgaGVhZE5hbWUuaW5uZXJUZXh0ID0gc2VsZWN0ZWROYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ZWRJbWcgJiYgaGVhZEltZykge1xuICAgICAgICBoZWFkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxlY3RlZEltZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgbmFtZUVsLmNsYXNzTGlzdC5hZGQoXCJpc1NlbGVjdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c05leHRJdGVtKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1c0luZGV4IDwgdGhpcy5jb3VudHJ5SXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCsrO1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXNbdGhpcy5jdXJyZW50Rm9jdXNJbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1ByZXZJdGVtKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID4gMCkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleC0tO1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXNbdGhpcy5jdXJyZW50Rm9jdXNJbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgfVxufVxuXG5cblxuY29uc3QgZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2NvdW50cnlcIik7XG5jb25zdCBpbnN0YW5jZSA9IG5ldyBEcm9wZG93bihkcm9wZG93bnMpO1xuZHJvcGRvd25zLmRyb3Bkb3duSW5zdGFuY2UgPSBpbnN0YW5jZVxuXG5jb25zdCBkcm9wZG93bkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGFuZ1wiKTtcbmNvbnN0IGluc3RhbmNlTGFuZyA9IG5ldyBEcm9wZG93bihkcm9wZG93bkxhbmcsIHtuYW1lU291cmNlOiBcImxhbmdcIn0pO1xuZHJvcGRvd25MYW5nLmRyb3Bkb3duSW5zdGFuY2UgPSBpbnN0YW5jZUxhbmc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBkcm9wZG93bkluc3RhbmNlID0gZHJvcGRvd25zLmRyb3Bkb3duSW5zdGFuY2U7XG4gIGlmICghZHJvcGRvd25zLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIGRyb3Bkb3duSW5zdGFuY2U/LmNsb3NlRHJvcGRvd24oKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBkcm9wZG93bkluc3RhbmNlID0gZHJvcGRvd25MYW5nLmRyb3Bkb3duSW5zdGFuY2U7XG4gIGlmICghZHJvcGRvd25MYW5nLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIGRyb3Bkb3duSW5zdGFuY2U/LmNsb3NlRHJvcGRvd24oKTtcbiAgfVxufSk7XG5cbmNvbnN0IGRpc2FiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fZGlzYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19hdmFpbGFiaWxpdHlcIik7XG5jb25zdCBhdmFpbGFiaWxpdHlDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19hdmFpbGFiaWxpdHlfY2xvc2VcIik7XG5cbmRpc2FiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGRpc2FiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGRpc2FiaWxpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGH0YLQviDQutC70LjQutC90YPQu9C4INC40LzQtdC90L3QviDQsiAuaGVhZGVyX19hdmFpbGFiaWxpdHksINCwINC90LUg0LLQvdGD0YLRgNGMIC5oZWFkZXJfX2F2YWlsYWJpbGl0eV93cmFwXG4gIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXAnKSkge1xuICAgIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRpc2FiaWxpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgfVxufSk7XG5cbmNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG5hY2NvcmRpb25zLmZvckVhY2goaXRlbSAgPT4ge1xuICBjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYnRuJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYm9keScpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpc09wZW4gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpXG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRIZWlnaHRDb250ZW50QWNjKCkge1xuICBjb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG4gIGFjYy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWFjYy1ib2R5XCIpO1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIlxuICAgIH1cbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn0pXG5cbmNvbnN0IGZvbnRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKTtcbmNvbnN0IGNvbnRyYXN0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYXN0XCIpXG5jb25zdCBzcGFjaW5nUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuY29uc3QgcGhvbmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX21vYl9ibG9ja19waG9uZVwiKVxuY29uc3QgbGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdJylcbmNvbnN0IHRoZW1lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInRoZW1lXCJdJyk7XG5cbmZ1bmN0aW9uIHNhdmVTZXR0aW5nKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTZXR0aW5nKGtleSkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUmFuZ2VQcm9ncmVzcyhpbnB1dCkge1xuICBjb25zdCBmaWxsID0gaW5wdXQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgY29uc3QgbWluID0gK2lucHV0Lm1pbjtcbiAgY29uc3QgbWF4ID0gK2lucHV0Lm1heDtcbiAgY29uc3QgdmFsdWUgPSAraW5wdXQudmFsdWU7XG4gIGNvbnN0IHBlcmNlbnQgPSAoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMDtcblxuICBpZiAoZmlsbCkge1xuICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50fSVgO1xuICB9XG5cbiAgY29uc3QgbGFiZWxzID0gaW5wdXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXJhbmdlX2xhYmVscyBzcGFuXCIpO1xuICBpZiAobGFiZWxzKSB7XG4gICAgY29uc3Qgc3RlcCA9IChtYXggLSBtaW4pIC8gKGxhYmVscy5sZW5ndGggLSAxKTtcblxuICAgIGxhYmVscy5mb3JFYWNoKChzcGFuLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGhyZXNob2xkID0gbWluICsgaW5kZXggKiBzdGVwO1xuICAgICAgaWYgKHZhbHVlID49IHRocmVzaG9sZCkge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KGJsb2NrLCBmb250U2l6ZSkge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNDc1ICYmIGZvbnRTaXplID4gMTYpIHtcbiAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUaGVtZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwiZGFya1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGlnaHRcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImR1b1wiKSB7XG4gICAgY29uc3QgaXNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGlmIChpc0RhcmspIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlMZWFkaW5nKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImJpZ1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH1cbiAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVTZXR0aW5ncygpIHtcbiAgLy8gRk9OVFxuICBjb25zdCBzYXZlZEZvbnQgPSBsb2FkU2V0dGluZyhcImZvbnQtc2l6ZVwiKTtcbiAgaWYgKGZvbnRSYW5nZSAmJiBzYXZlZEZvbnQgIT09IG51bGwpIHtcbiAgICBmb250UmFuZ2UudmFsdWUgPSBzYXZlZEZvbnQ7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gc2F2ZWRGb250ID09PSBcIjE2XCIgPyBcIlwiIDogYCR7c2F2ZWRGb250fXB4YDtcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHNhdmVkRm9udCk7XG4gIH1cblxuICAvLyBDT05UUkFTVFxuICBjb25zdCBjb250cmFzdENsYXNzZXMgPSBbXCJjb250cmFzdC0xXCIsIFwiY29udHJhc3QtMlwiLCBcImNvbnRyYXN0LTRcIl07XG4gIGNvbnN0IHNhdmVkQ29udHJhc3QgPSBsb2FkU2V0dGluZyhcImNvbnRyYXN0XCIpO1xuICBpZiAoY29udHJhc3RSYW5nZSAmJiBzYXZlZENvbnRyYXN0ICE9PSBudWxsKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IHNhdmVkQ29udHJhc3Q7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICBpZiAoc2F2ZWRDb250cmFzdCAhPT0gXCIzXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBjb250cmFzdC0ke3NhdmVkQ29udHJhc3R9YCk7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGNvbnN0IHNhdmVkU3BhY2luZyA9IGxvYWRTZXR0aW5nKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGlmIChzcGFjaW5nUmFuZ2UgJiYgc2F2ZWRTcGFjaW5nICE9PSBudWxsKSB7XG4gICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gc2F2ZWRTcGFjaW5nO1xuICAgIGlmIChzYXZlZFNwYWNpbmcgPT09IFwiMFwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIoc2F2ZWRTcGFjaW5nKX1weGA7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3Moc3BhY2luZ1JhbmdlKTtcbiAgfVxuXG4gIC8vIFRIRU1FXG4gIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2FkU2V0dGluZyhcInRoZW1lXCIpO1xuICBpZiAoc2F2ZWRUaGVtZSAmJiB0aGVtZUlucHV0cykge1xuICAgIGFwcGx5VGhlbWUoc2F2ZWRUaGVtZSk7XG4gICAgY29uc3QgdGhlbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJ0aGVtZVwiXVt2YWx1ZT1cIiR7c2F2ZWRUaGVtZX1cIl1gKTtcbiAgICBpZiAodGhlbWVJbnB1dCkgdGhlbWVJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVkTGVhZGluZyA9IGxvYWRTZXR0aW5nKFwibGVhZGluZ1wiKTtcbiAgaWYgKHNhdmVkTGVhZGluZyAmJiBsZWFkaW5nKSB7XG4gICAgYXBwbHlMZWFkaW5nKHNhdmVkTGVhZGluZylcbiAgICBjb25zdCBsZWFkaW5nSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXVt2YWx1ZT1cIiR7c2F2ZWRMZWFkaW5nfVwiXWApO1xuICAgIGlmIChsZWFkaW5nSW5wdXQpIGxlYWRpbmdJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlc3RvcmVTZXR0aW5ncygpXG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBzYXZlU2V0dGluZyhcImZvbnQtc2l6ZVwiLCB2YWx1ZSk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB2YWx1ZSA9PT0gXCIxNlwiID8gXCJcIiA6IGAke3ZhbHVlfXB4YDtcbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1wiY29udHJhc3QtMVwiLCBcImNvbnRyYXN0LTJcIiwgXCJjb250cmFzdC00XCJdO1xuICAgIGZ1bmN0aW9uIHNldENvbnRyYXN0TW9kZSh2YWx1ZSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICAgIGlmICh2YWx1ZSAhPT0gXCIzXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGNvbnRyYXN0LSR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRyYXN0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJjb250cmFzdFwiLCB2YWx1ZSk7XG4gICAgICBzZXRDb250cmFzdE1vZGUodmFsdWUpO1xuICAgICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJsZXR0ZXItc3BhY2luZ1wiLCB2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIodmFsdWUpfXB4YDtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgaWYgKHRoZW1lSW5wdXRzKSB7XG4gICAgdGhlbWVJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJ0aGVtZVwiLCB2YWx1ZSk7XG4gICAgICAgIGFwcGx5VGhlbWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAobGVhZGluZykge1xuICAgIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgc2F2ZVNldHRpbmcoXCJsZWFkaW5nXCIsIGl0ZW0udmFsdWUpO1xuICAgICAgICBhcHBseUxlYWRpbmcoaXRlbS52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgcmVzdG9yZVNldHRpbmdzKVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRoZW1lXCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5VGhlbWUodGhlbWUudmFsdWUpXG4gICAgY29uc3QgbGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXTpjaGVja2VkJylcbiAgICBhcHBseUxlYWRpbmcobGgudmFsdWUpXG4gICAgY29uc3Qgc3BhY2luZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxldHRlclNwYWNpbmcgPSBgJHtOdW1iZXIoc3BhY2luZy52YWx1ZSkgKiAyfXB4YDtcbiAgfVxuICBjb25zdCBpbnB1dEZvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnQtcmFuZ2VcIilcbiAgaWYgKHBob25lSW1nKSB7XG4gICAgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCBpbnB1dEZvbnQudmFsdWUpXG4gIH1cbn0pXG5cbmNvbnN0IGNsZWFyQXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdmFpbGFiaWxpdHktYnRuXCIpXG5jbGVhckF2YWlsYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICBcImRhcmtcIixcbiAgICBcImxpbmVIZWlnaHRCaWdcIixcbiAgICBcImxpbmVIZWlnaHRNZWRpdW1cIixcbiAgICBcImNvbnRyYXN0LTFcIixcbiAgICBcImNvbnRyYXN0LTJcIixcbiAgICBcImNvbnRyYXN0LTRcIlxuICApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZm9udC1zaXplXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNvbnRyYXN0XCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxldHRlci1zcGFjaW5nXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxlYWRpbmdcIik7XG5cbiAgaWYgKGZvbnRSYW5nZSkge1xuICAgIGZvbnRSYW5nZS52YWx1ZSA9IDE2OyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIDE2KTtcbiAgfVxuXG4gIC8vIENPTlRSQVNUXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IDM7IC8vINC00LXRhNC+0LvRglxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICAvLyBTUEFDSU5HXG4gIGlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgICBzcGFjaW5nUmFuZ2UudmFsdWUgPSAwOyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICB0aGVtZUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBpbnB1dC5jaGVja2VkID0gaW5wdXQudmFsdWUgPT09IFwibGlnaHRcIjtcbiAgfSk7XG4gIGFwcGx5VGhlbWUoXCJsaWdodFwiKTtcblxuICAvLyBMRUFESU5HXG4gIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmNoZWNrZWQgPSBpdGVtLnZhbHVlID09PSBcIm5vcm1hbFwiO1xuICB9KTtcbiAgYXBwbHlMZWFkaW5nKFwibm9ybWFsXCIpO1xufSlcblxuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVfYnRuXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYnVyZ2VyLW1lbnVcIilcbmNvbnN0IGJ1cmdlck1lbnU3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdcIik7XG5jb25zdCBidXJnZXJDbG9zZTc2OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJpZ19jbG9zZVwiKTtcblxuaWYgKGJ1cmdlckJ0biAmJiBidXJnZXJNZW51KSB7XG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJNZW51NzY4ICYmIGJ1cmdlckNsb3NlNzY4KSB7XG4gICAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGlmIChidXJnZXJDbG9zZTc2OCkge1xuICAgIGJ1cmdlckNsb3NlNzY4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfSlcbiAgfVxuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgaWYgKGJ1cmdlck1lbnU3NjgpIHtcbiAgICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxufVxuXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIud2h5X19zd2lwZXJcIiwge1xuICBzcGFjZUJldHdlZW46IDIwLFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi53aHlfX3BhZ2luYXRpb25cIixcbiAgICByZW5kZXJCdWxsZXQ6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9IHdoeV9fYnVsbGV0XCI+PC9zcGFuPmA7XG4gICAgfVxuICB9LFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIud2h5X19zY3JvbGxiYXJcIixcbiAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgYnRuUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVfX3FyXCIpO1xuY29uc3QgbW9kYWxRciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXItbW9kYWxcIik7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jdXN0b21fX2Nsb3NlXCIpO1xuXG5pZiAoYnRuUXIgJiYgbW9kYWxRciAmJiBidG5DbG9zZU1vZGFsKSB7XG4gIGJ0blFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKTtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cblxuICBidG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICBtb2RhbFFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpc091dHNpZGVDbGljayA9ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jdXN0b21fX2RpYWxvZ1wiKTtcbiAgICBpZiAoaXNPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIilcbmlmIChidG5CYWNrKSB7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidG5CYWNrLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBidG5CYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCAzMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgfSwgMzAwKTtcbiAgfSlcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstY3VzdG9tJykuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgMjAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYsIDE1MCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGluZm9MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mb19faXRlbVwiKTtcblxuaWYgKGluZm9MaW5rcykge1xuICBpbmZvTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgMjAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uID0gaHJlZiwgMTUwKTtcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBxdWVzdGlvbnNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX21vYmlsZV9hXCIpXG5pZiAocXVlc3Rpb25zTGluaykge1xuICBxdWVzdGlvbnNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaHJlZiA9IHF1ZXN0aW9uc0xpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICBxdWVzdGlvbnNMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcXVlc3Rpb25zTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpLCAzMDApXG4gICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBocmVmLCAyMDApO1xuICB9KVxufSJdfQ==
