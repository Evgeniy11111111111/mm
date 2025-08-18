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
var infoLinks = document.querySelectorAll(".info__item");
if (infoLinks) {
  infoLinks.forEach(function (link) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwicGhvbmVJbWciLCJsZWFkaW5nIiwidGhlbWVJbnB1dHMiLCJzYXZlU2V0dGluZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2FkU2V0dGluZyIsImdldEl0ZW0iLCJ1cGRhdGVSYW5nZVByb2dyZXNzIiwiaW5wdXQiLCJmaWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1pbiIsIm1heCIsInBlcmNlbnQiLCJ3aWR0aCIsImNvbmNhdCIsImxhYmVscyIsInBhcmVudEVsZW1lbnQiLCJzdGVwIiwic3BhbiIsInRocmVzaG9sZCIsInRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eSIsImJsb2NrIiwiZm9udFNpemUiLCJpbm5lcldpZHRoIiwiZGlzcGxheSIsImFwcGx5VGhlbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJpc0RhcmsiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImFwcGx5TGVhZGluZyIsInJlc3RvcmVTZXR0aW5ncyIsInNhdmVkRm9udCIsImNvbnRyYXN0Q2xhc3NlcyIsInNhdmVkQ29udHJhc3QiLCJfZG9jdW1lbnQkZG9jdW1lbnRFbGUiLCJhcHBseSIsInNhdmVkU3BhY2luZyIsInJlbW92ZVByb3BlcnR5IiwibGV0dGVyU3BhY2luZyIsIk51bWJlciIsInNhdmVkVGhlbWUiLCJ0aGVtZUlucHV0IiwiY2hlY2tlZCIsInNhdmVkTGVhZGluZyIsImxlYWRpbmdJbnB1dCIsInNldENvbnRyYXN0TW9kZSIsIl9kb2N1bWVudCRkb2N1bWVudEVsZTIiLCJ0aGVtZSIsImxoIiwic3BhY2luZyIsImlucHV0Rm9udCIsImNsZWFyQXZhaWxhYmlsaXR5IiwicmVtb3ZlSXRlbSIsImJ1cmdlckJ0biIsImJ1cmdlck1lbnUiLCJidXJnZXJNZW51NzY4IiwiYnVyZ2VyQ2xvc2U3NjgiLCJzd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJhdXRvSGVpZ2h0Iiwic2xpZGVzUGVyVmlldyIsInBhZ2luYXRpb24iLCJlbCIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImJyZWFrcG9pbnRzIiwiYnRuUXIiLCJtb2RhbFFyIiwiYnRuQ2xvc2VNb2RhbCIsImNsb3NlTW9kYWwiLCJldmVudCIsImlzT3V0c2lkZUNsaWNrIiwiYnRuQmFjayIsInNldFRpbWVvdXQiLCJoaXN0b3J5IiwiYmFjayIsImFjdGl2ZUxpbmsiLCJsaW5rIiwidGltZW91dENsYXNzIiwidGltZW91dEhyZWYiLCJocmVmIiwibG9jYXRpb24iLCJpbmZvTGlua3MiLCJxdWVzdGlvbnNMaW5rIiwic3VwcG9ydExpbmtBaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLGVBQWUsRUFBZ0I7SUFBQSxJQUFkQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBRyxlQUFBLE9BQUFOLFFBQUE7SUFDdkMsSUFBSSxDQUFDTyxRQUFRLEdBQUdOLGVBQWU7SUFDL0IsSUFBSSxDQUFDTyxZQUFZLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUNFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwRSxJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJLENBQUNILFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BFLElBQUksQ0FBQ0UsWUFBWSxHQUFHLElBQUksQ0FBQ0gsWUFBWSxDQUFDSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUMzRSxJQUFJLENBQUNDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUUzQixJQUFJLENBQUNDLFVBQVUsR0FBR1osT0FBTyxDQUFDWSxVQUFVLElBQUksV0FBVyxDQUFDLENBQUM7O0lBRXJELElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDYjtFQUFD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RyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVGLElBQU1LLFNBQVMsR0FBR2pILFFBQVEsQ0FBQ3RDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztBQUUxRCxJQUFJdUosU0FBUyxFQUFFO0VBQ2JBLFNBQVMsQ0FBQzdJLE9BQU8sQ0FBQyxVQUFBd0ksSUFBSSxFQUFJO0lBQ3hCRCxVQUFVLENBQUNDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQzVCLENBQUMsQ0FBQztBQUNKO0FBSUEsSUFBTU0sYUFBYSxHQUFHbEgsUUFBUSxDQUFDekMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO0FBQ3BFLElBQUkySixhQUFhLEVBQUU7RUFDakJQLFVBQVUsQ0FBQ08sYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDckM7QUFFQSxJQUFNQyxhQUFhLEdBQUduSCxRQUFRLENBQUN6QyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFDakUsSUFBSTRKLGFBQWEsRUFBRTtFQUNqQlIsVUFBVSxDQUFDUSxhQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUNyQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3Rvcihkcm9wZG93bkVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bkVsZW1lbnQ7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24tYm9keVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duSGVhZCA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1oZWFkXCIpO1xuICAgIHRoaXMuY291bnRyeUl0ZW1zID0gdGhpcy5kcm9wZG93bkJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93bi1pdGVtXCIpO1xuICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcblxuICAgIHRoaXMubmFtZVNvdXJjZSA9IG9wdGlvbnMubmFtZVNvdXJjZSB8fCBcImlubmVyVGV4dFwiOyAvLyDQuNC70LggXCJkYXRhLWxhbmdcIiwgXCJkYXRhLXZhbHVlXCIg0Lgg0YIu0L8uXG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlRHJvcGRvd24oKSk7XG5cbiAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zZWxlY3RDb3VudHJ5KGVsZW0pKTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiICYmIHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzTmV4dEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzTmV4dEl0ZW0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c1ByZXZJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bigpIHtcbiAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc2VsZWN0Q291bnRyeShlbGVtKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZScpO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgbmFtZUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpc1NlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmFtZUVsID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcbiAgICAgIGxldCBzZWxlY3RlZE5hbWUgPSBcIlwiO1xuXG4gICAgICBpZiAodGhpcy5uYW1lU291cmNlID09PSBcImlubmVyVGV4dFwiKSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbD8uaW5uZXJUZXh0O1xuICAgICAgfSBlbHNlIGlmIChuYW1lRWw/LmRhdGFzZXQpIHtcbiAgICAgICAgc2VsZWN0ZWROYW1lID0gbmFtZUVsLmRhdGFzZXRbdGhpcy5uYW1lU291cmNlXTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0ZWRJbWcgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik/LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcblxuICAgICAgY29uc3QgaGVhZEltZyA9IHRoaXMuZHJvcGRvd25IZWFkLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICBjb25zdCBoZWFkTmFtZSA9IHRoaXMuZHJvcGRvd25IZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taXRlbS1uYW1lXCIpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWROYW1lICYmIGhlYWROYW1lKSB7XG4gICAgICAgIGhlYWROYW1lLmlubmVyVGV4dCA9IHNlbGVjdGVkTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkSW1nICYmIGhlYWRJbWcpIHtcbiAgICAgICAgaGVhZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2VsZWN0ZWRJbWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgIG5hbWVFbC5jbGFzc0xpc3QuYWRkKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNOZXh0SXRlbSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXNJbmRleCA8IHRoaXMuY291bnRyeUl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXgrKztcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zW3RoaXMuY3VycmVudEZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNQcmV2SXRlbSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXNJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXgtLTtcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zW3RoaXMuY3VycmVudEZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wZG93bigpIHtcbiAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG4gIH1cbn1cblxuXG5cbmNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb3VudHJ5XCIpO1xuY29uc3QgaW5zdGFuY2UgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25zKTtcbmRyb3Bkb3ducy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VcblxuY29uc3QgZHJvcGRvd25MYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xhbmdcIik7XG5jb25zdCBpbnN0YW5jZUxhbmcgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25MYW5nLCB7bmFtZVNvdXJjZTogXCJsYW5nXCJ9KTtcbmRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VMYW5nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3ducy5kcm9wZG93bkluc3RhbmNlO1xuICBpZiAoIWRyb3Bkb3ducy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlO1xuICBpZiAoIWRyb3Bkb3duTGFuZy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBkaXNhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2Rpc2FiaWxpdHlcIik7XG5jb25zdCBhdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5X2Nsb3NlXCIpO1xuXG5kaXNhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBkaXNhYmlsaXR5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxufSk7XG5cbmF2YWlsYWJpbGl0eUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkaXNhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxufSk7XG5cbmF2YWlsYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0LrQu9C40LrQvdGD0LvQuCDQuNC80LXQvdC90L4g0LIgLmhlYWRlcl9fYXZhaWxhYmlsaXR5LCDQsCDQvdC1INCy0L3Rg9GC0YDRjCAuaGVhZGVyX19hdmFpbGFiaWxpdHlfd3JhcFxuICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX2F2YWlsYWJpbGl0eV93cmFwJykpIHtcbiAgICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkaXNhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIH1cbn0pO1xuXG5jb25zdCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjYycpO1xuYWNjb3JkaW9ucy5mb3JFYWNoKGl0ZW0gID0+IHtcbiAgY29uc3QgYnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtYWNjLWJ0bicpO1xuICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtYWNjLWJvZHknKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaXNPcGVuID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKVxuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodDtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IFwiMFwiXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyBcInB4XCJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXG4gICAgfVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0SGVpZ2h0Q29udGVudEFjYygpIHtcbiAgY29uc3QgYWNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFjYycpO1xuICBhY2MuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1hY2MtYm9keVwiKTtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCJcbiAgICB9XG4gIH0pXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG59KVxuXG5jb25zdCBmb250UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnQtcmFuZ2VcIik7XG5jb25zdCBjb250cmFzdFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFzdFwiKVxuY29uc3Qgc3BhY2luZ1JhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbmNvbnN0IHBob25lSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvX19tb2JfYmxvY2tfcGhvbmVcIilcbmNvbnN0IGxlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXScpXG5jb25zdCB0aGVtZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ0aGVtZVwiXScpO1xuXG5mdW5jdGlvbiBzYXZlU2V0dGluZyhrZXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBsb2FkU2V0dGluZyhrZXkpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoaW5wdXQpIHtcbiAgY29uc3QgZmlsbCA9IGlucHV0Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IG1pbiA9ICtpbnB1dC5taW47XG4gIGNvbnN0IG1heCA9ICtpbnB1dC5tYXg7XG4gIGNvbnN0IHZhbHVlID0gK2lucHV0LnZhbHVlO1xuICBjb25zdCBwZXJjZW50ID0gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDA7XG5cbiAgaWYgKGZpbGwpIHtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVscyA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1yYW5nZV9sYWJlbHMgc3BhblwiKTtcbiAgaWYgKGxhYmVscykge1xuICAgIGNvbnN0IHN0ZXAgPSAobWF4IC0gbWluKSAvIChsYWJlbHMubGVuZ3RoIC0gMSk7XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgoc3BhbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRocmVzaG9sZCA9IG1pbiArIGluZGV4ICogc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShibG9jaywgZm9udFNpemUpIHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQ3NSAmJiBmb250U2l6ZSA+IDE2KSB7XG4gICAgYmxvY2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VGhlbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcImRhcmtcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxpZ2h0XCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJkdW9cIikge1xuICAgIGNvbnN0IGlzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBpZiAoaXNEYXJrKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TGVhZGluZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibWVkaXVtXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJiaWdcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufVxuXG5mdW5jdGlvbiByZXN0b3JlU2V0dGluZ3MoKSB7XG4gIC8vIEZPTlRcbiAgY29uc3Qgc2F2ZWRGb250ID0gbG9hZFNldHRpbmcoXCJmb250LXNpemVcIik7XG4gIGlmIChmb250UmFuZ2UgJiYgc2F2ZWRGb250ICE9PSBudWxsKSB7XG4gICAgZm9udFJhbmdlLnZhbHVlID0gc2F2ZWRGb250O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHNhdmVkRm9udCA9PT0gXCIxNlwiID8gXCJcIiA6IGAke3NhdmVkRm9udH1weGA7XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhmb250UmFuZ2UpO1xuICAgIGlmIChwaG9uZUltZykgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCBzYXZlZEZvbnQpO1xuICB9XG5cbiAgLy8gQ09OVFJBU1RcbiAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1wiY29udHJhc3QtMVwiLCBcImNvbnRyYXN0LTJcIiwgXCJjb250cmFzdC00XCJdO1xuICBjb25zdCBzYXZlZENvbnRyYXN0ID0gbG9hZFNldHRpbmcoXCJjb250cmFzdFwiKTtcbiAgaWYgKGNvbnRyYXN0UmFuZ2UgJiYgc2F2ZWRDb250cmFzdCAhPT0gbnVsbCkge1xuICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSBzYXZlZENvbnRyYXN0O1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbnRyYXN0Q2xhc3Nlcyk7XG4gICAgaWYgKHNhdmVkQ29udHJhc3QgIT09IFwiM1wiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHtzYXZlZENvbnRyYXN0fWApO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGNvbnRyYXN0UmFuZ2UpO1xuICB9XG5cbiAgLy8gU1BBQ0lOR1xuICBjb25zdCBzYXZlZFNwYWNpbmcgPSBsb2FkU2V0dGluZyhcImxldHRlci1zcGFjaW5nXCIpO1xuICBpZiAoc3BhY2luZ1JhbmdlICYmIHNhdmVkU3BhY2luZyAhPT0gbnVsbCkge1xuICAgIHNwYWNpbmdSYW5nZS52YWx1ZSA9IHNhdmVkU3BhY2luZztcbiAgICBpZiAoc2F2ZWRTcGFjaW5nID09PSBcIjBcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHNhdmVkU3BhY2luZyl9cHhgO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICAvLyBUSEVNRVxuICBjb25zdCBzYXZlZFRoZW1lID0gbG9hZFNldHRpbmcoXCJ0aGVtZVwiKTtcbiAgaWYgKHNhdmVkVGhlbWUgJiYgdGhlbWVJbnB1dHMpIHtcbiAgICBhcHBseVRoZW1lKHNhdmVkVGhlbWUpO1xuICAgIGNvbnN0IHRoZW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwidGhlbWVcIl1bdmFsdWU9XCIke3NhdmVkVGhlbWV9XCJdYCk7XG4gICAgaWYgKHRoZW1lSW5wdXQpIHRoZW1lSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBzYXZlZExlYWRpbmcgPSBsb2FkU2V0dGluZyhcImxlYWRpbmdcIik7XG4gIGlmIChzYXZlZExlYWRpbmcgJiYgbGVhZGluZykge1xuICAgIGFwcGx5TGVhZGluZyhzYXZlZExlYWRpbmcpXG4gICAgY29uc3QgbGVhZGluZ0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl1bdmFsdWU9XCIke3NhdmVkTGVhZGluZ31cIl1gKTtcbiAgICBpZiAobGVhZGluZ0lucHV0KSBsZWFkaW5nSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZXN0b3JlU2V0dGluZ3MoKVxuXG4gIGlmIChmb250UmFuZ2UpIHtcbiAgICBmb250UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgc2F2ZVNldHRpbmcoXCJmb250LXNpemVcIiwgdmFsdWUpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdmFsdWUgPT09IFwiMTZcIiA/IFwiXCIgOiBgJHt2YWx1ZX1weGA7XG4gICAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICAgIGdldEhlaWdodENvbnRlbnRBY2MoKTtcbiAgICAgIGlmIChwaG9uZUltZykgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBDT05UUkFTVFxuICBpZiAoY29udHJhc3RSYW5nZSkge1xuICAgIGNvbnN0IGNvbnRyYXN0Q2xhc3NlcyA9IFtcImNvbnRyYXN0LTFcIiwgXCJjb250cmFzdC0yXCIsIFwiY29udHJhc3QtNFwiXTtcbiAgICBmdW5jdGlvbiBzZXRDb250cmFzdE1vZGUodmFsdWUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbnRyYXN0Q2xhc3Nlcyk7XG4gICAgICBpZiAodmFsdWUgIT09IFwiM1wiKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBjb250cmFzdC0ke3ZhbHVlfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250cmFzdFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNhdmVTZXR0aW5nKFwiY29udHJhc3RcIiwgdmFsdWUpO1xuICAgICAgc2V0Q29udHJhc3RNb2RlKHZhbHVlKTtcbiAgICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU1BBQ0lOR1xuICBpZiAoc3BhY2luZ1JhbmdlKSB7XG4gICAgc3BhY2luZ1JhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHNhdmVTZXR0aW5nKFwibGV0dGVyLXNwYWNpbmdcIiwgdmFsdWUpO1xuICAgICAgaWYgKHZhbHVlID09PSBcIjBcIikge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHZhbHVlKX1weGA7XG4gICAgICB9XG4gICAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICAgIGdldEhlaWdodENvbnRlbnRBY2MoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRIRU1FXG4gIGlmICh0aGVtZUlucHV0cykge1xuICAgIHRoZW1lSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHNhdmVTZXR0aW5nKFwidGhlbWVcIiwgdmFsdWUpO1xuICAgICAgICBhcHBseVRoZW1lKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGxlYWRpbmcpIHtcbiAgICBsZWFkaW5nLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIHNhdmVTZXR0aW5nKFwibGVhZGluZ1wiLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgYXBwbHlMZWFkaW5nKGl0ZW0udmFsdWUpXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsIHJlc3RvcmVTZXR0aW5ncylcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aGVtZVwiXTpjaGVja2VkJylcbiAgICBhcHBseVRoZW1lKHRoZW1lLnZhbHVlKVxuICAgIGNvbnN0IGxoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlMZWFkaW5nKGxoLnZhbHVlKVxuICAgIGNvbnN0IHNwYWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHNwYWNpbmcudmFsdWUpICogMn1weGA7XG4gIH1cbiAgY29uc3QgaW5wdXRGb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpXG4gIGlmIChwaG9uZUltZykge1xuICAgIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgaW5wdXRGb250LnZhbHVlKVxuICB9XG59KVxuXG5jb25zdCBjbGVhckF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXZhaWxhYmlsaXR5LWJ0blwiKVxuY2xlYXJBdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgXCJkYXJrXCIsXG4gICAgXCJsaW5lSGVpZ2h0QmlnXCIsXG4gICAgXCJsaW5lSGVpZ2h0TWVkaXVtXCIsXG4gICAgXCJjb250cmFzdC0xXCIsXG4gICAgXCJjb250cmFzdC0yXCIsXG4gICAgXCJjb250cmFzdC00XCJcbiAgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIik7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImZvbnQtc2l6ZVwiKTtcblxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZvbnQtc2l6ZVwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjb250cmFzdFwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsZWFkaW5nXCIpO1xuXG4gIGlmIChmb250UmFuZ2UpIHtcbiAgICBmb250UmFuZ2UudmFsdWUgPSAxNjsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhmb250UmFuZ2UpO1xuICAgIGlmIChwaG9uZUltZykgdG9nZ2xlUGhvbmVJbWdWaXNpYmlsaXR5KHBob25lSW1nLCAxNik7XG4gIH1cblxuICAvLyBDT05UUkFTVFxuICBpZiAoY29udHJhc3RSYW5nZSkge1xuICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSAzOyAvLyDQtNC10YTQvtC70YJcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGNvbnRyYXN0UmFuZ2UpO1xuICB9XG5cbiAgLy8gU1BBQ0lOR1xuICBpZiAoc3BhY2luZ1JhbmdlKSB7XG4gICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gMDsgLy8g0LTQtdGE0L7Qu9GCXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICB9XG5cbiAgLy8gVEhFTUVcbiAgdGhlbWVJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0LnZhbHVlID09PSBcImxpZ2h0XCI7XG4gIH0pO1xuICBhcHBseVRoZW1lKFwibGlnaHRcIik7XG5cbiAgLy8gTEVBRElOR1xuICBsZWFkaW5nLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5jaGVja2VkID0gaXRlbS52YWx1ZSA9PT0gXCJub3JtYWxcIjtcbiAgfSk7XG4gIGFwcGx5TGVhZGluZyhcIm5vcm1hbFwiKTtcbn0pXG5cbmNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51X2J0blwiKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWJ1cmdlci1tZW51XCIpXG5jb25zdCBidXJnZXJNZW51NzY4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtYmlnXCIpO1xuY29uc3QgYnVyZ2VyQ2xvc2U3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdfY2xvc2VcIik7XG5cbmlmIChidXJnZXJCdG4gJiYgYnVyZ2VyTWVudSkge1xuICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgYnVyZ2VyTWVudTc2OCAmJiBidXJnZXJDbG9zZTc2OCkge1xuICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9XG4gICAgaWYgKGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBpZiAoYnVyZ2VyQ2xvc2U3NjgpIHtcbiAgICBidXJnZXJDbG9zZTc2OC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGJ1cmdlck1lbnU3NjguY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH0pXG4gIH1cblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGlmIChidXJnZXJNZW51NzY4KSB7XG4gICAgICAgIGJ1cmdlck1lbnU3NjguY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcbn1cblxuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLndoeV9fc3dpcGVyXCIsIHtcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIud2h5X19wYWdpbmF0aW9uXCIsXG4gICAgcmVuZGVyQnVsbGV0OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSB3aHlfX2J1bGxldFwiPjwvc3Bhbj5gO1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLndoeV9fc2Nyb2xsYmFyXCIsXG4gICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IGJ0blFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlX19xclwiKTtcbmNvbnN0IG1vZGFsUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFyLW1vZGFsXCIpO1xuY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY3VzdG9tX19jbG9zZVwiKTtcblxuaWYgKGJ0blFyICYmIG1vZGFsUXIgJiYgYnRuQ2xvc2VNb2RhbCkge1xuICBidG5Rci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIik7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsUXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICB9XG5cbiAgYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgbW9kYWxRci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXNPdXRzaWRlQ2xpY2sgPSAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWwtY3VzdG9tX19kaWFsb2dcIik7XG4gICAgaWYgKGlzT3V0c2lkZUNsaWNrKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbmNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpXG5pZiAoYnRuQmFjaykge1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnRuQmFjay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gYnRuQmFjay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgIH0sIDMwMCk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUxpbmsobGluaywgdGltZW91dENsYXNzLCB0aW1lb3V0SHJlZikge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyksIHRpbWVvdXRDbGFzcyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBocmVmLCB0aW1lb3V0SHJlZik7XG4gIH0pXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLWN1c3RvbScpLmZvckVhY2gobGluayA9PiB7XG4gIGFjdGl2ZUxpbmsobGluaywgMjAwLCAxNTApO1xufSk7XG5cbmNvbnN0IGluZm9MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5mb19faXRlbVwiKTtcblxuaWYgKGluZm9MaW5rcykge1xuICBpbmZvTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBhY3RpdmVMaW5rKGxpbmssIDIwMCwgMTUwKTtcbiAgfSlcbn1cblxuXG5cbmNvbnN0IHF1ZXN0aW9uc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uc19fbW9iaWxlX2FcIilcbmlmIChxdWVzdGlvbnNMaW5rKSB7XG4gIGFjdGl2ZUxpbmsocXVlc3Rpb25zTGluaywgMzAwLCAyMDApXG59XG5cbmNvbnN0IHN1cHBvcnRMaW5rQWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1cHBvcnRfX2xpbmtfYWlcIilcbmlmIChzdXBwb3J0TGlua0FpKSB7XG4gIGFjdGl2ZUxpbmsoc3VwcG9ydExpbmtBaSwgMzAwLCAyMDApXG59Il19
