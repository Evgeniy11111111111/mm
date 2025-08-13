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
if (fontRange) {
  updateRangeProgress(fontRange);
  fontRange.addEventListener("input", function (e) {
    var value = e.target.value;
    if (value === "16") {
      document.documentElement.style.removeProperty("font-size");
    } else {
      document.documentElement.style.fontSize = "".concat(value, "px");
    }
    updateRangeProgress(e.target);
    getHeightContentAcc();
    if (phoneImg) {
      togglePhoneImgVisibility(phoneImg, value);
    }
  });
}
if (contrastRange) {
  var setContrastMode = function setContrastMode(value) {
    var _document$documentEle;
    (_document$documentEle = document.documentElement.classList).remove.apply(_document$documentEle, contrastClasses);
    if (value !== "3") {
      document.documentElement.classList.add("contrast-".concat(value));
    }
  };
  var contrastClasses = ["contrast-1", "contrast-2", "contrast-4"];
  setContrastMode(contrastRange.value);
  updateRangeProgress(contrastRange);
  contrastRange.addEventListener("input", function (e) {
    var value = e.target.value;
    setContrastMode(value);
    updateRangeProgress(e.target);
  });
}
if (spacingRange) {
  updateRangeProgress(spacingRange);
  spacingRange.addEventListener("input", function (e) {
    var value = e.target.value;
    if (value === "0") {
      document.documentElement.style.removeProperty("letter-spacing");
    } else {
      document.documentElement.style.letterSpacing = "".concat(Number(value), "px");
    }
    updateRangeProgress(e.target);
    getHeightContentAcc();
  });
}
var themeInputs = document.querySelectorAll('input[name="theme"]');
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
themeInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    return applyTheme(input.value);
  });
});
var leading = document.querySelectorAll('input[name="lineHeight"]');
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
leading.forEach(function (item) {
  item.addEventListener("change", function () {
    return applyLeading(item.value);
  });
});
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
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.remove("lineHeightBig");
  document.documentElement.classList.remove("lineHeightMedium");
  document.documentElement.style.removeProperty("letter-spacing");
  document.documentElement.classList.remove("contrast-1");
  document.documentElement.classList.remove("contrast-2");
  document.documentElement.classList.remove("contrast-4");
  document.documentElement.style.removeProperty("font-size");
  if (fontRange) {
    fontRange.value = 16; // дефолтный размер
    updateRangeProgress(fontRange);
    if (phoneImg) {
      togglePhoneImgVisibility(phoneImg, 16);
    }
  }
  if (contrastRange) {
    contrastRange.value = 3; // дефолтная контрастность
    updateRangeProgress(contrastRange);
  }
  if (spacingRange) {
    spacingRange.value = 0; // дефолтный интервал
    updateRangeProgress(spacingRange);
  }
  themeInputs.forEach(function (input) {
    if (input.value === "light") {
      input.checked = true;
      applyTheme("light");
    } else {
      input.checked = false;
    }
  });
  leading.forEach(function (item) {
    if (item.value === "normal") {
      item.checked = true;
      applyLeading("normal");
    } else {
      item.checked = false;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwicGhvbmVJbWciLCJ1cGRhdGVSYW5nZVByb2dyZXNzIiwiaW5wdXQiLCJmaWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm1pbiIsIm1heCIsInBlcmNlbnQiLCJ3aWR0aCIsImNvbmNhdCIsImxhYmVscyIsInBhcmVudEVsZW1lbnQiLCJzdGVwIiwic3BhbiIsInRocmVzaG9sZCIsInRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eSIsImJsb2NrIiwiZm9udFNpemUiLCJpbm5lcldpZHRoIiwiZGlzcGxheSIsImRvY3VtZW50RWxlbWVudCIsInJlbW92ZVByb3BlcnR5Iiwic2V0Q29udHJhc3RNb2RlIiwiX2RvY3VtZW50JGRvY3VtZW50RWxlIiwiYXBwbHkiLCJjb250cmFzdENsYXNzZXMiLCJsZXR0ZXJTcGFjaW5nIiwiTnVtYmVyIiwidGhlbWVJbnB1dHMiLCJhcHBseVRoZW1lIiwiaXNEYXJrIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsZWFkaW5nIiwiYXBwbHlMZWFkaW5nIiwidGhlbWUiLCJsaCIsInNwYWNpbmciLCJpbnB1dEZvbnQiLCJjbGVhckF2YWlsYWJpbGl0eSIsImNoZWNrZWQiLCJidXJnZXJCdG4iLCJidXJnZXJNZW51IiwiYnVyZ2VyTWVudTc2OCIsImJ1cmdlckNsb3NlNzY4Iiwic3dpcGVyIiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsInNsaWRlc1BlclZpZXciLCJwYWdpbmF0aW9uIiwiZWwiLCJyZW5kZXJCdWxsZXQiLCJjbGFzc05hbWUiLCJzY3JvbGxiYXIiLCJkcmFnZ2FibGUiLCJicmVha3BvaW50cyIsImJ0blFyIiwibW9kYWxRciIsImJ0bkNsb3NlTW9kYWwiLCJjbG9zZU1vZGFsIiwiZXZlbnQiLCJpc091dHNpZGVDbGljayIsImJ0bkJhY2siLCJoaXN0b3J5IiwiYmFjayJdLCJt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QWdCLENBQUMsT0FBTyxFQUFFLFVBQUNvSCxLQUFLLEVBQUs7SUFDM0MsSUFBTUMsY0FBYyxHQUFHLENBQUNELEtBQUssQ0FBQ2pGLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLHVCQUF1QixDQUFDO0lBQ3JFLElBQUk2RSxjQUFjLEVBQUU7TUFDbEJGLFVBQVUsQ0FBQyxDQUFDO0lBQ2Q7RUFDRixDQUFDLENBQUM7QUFDSjtBQUlBLElBQU1HLE9BQU8sR0FBR3hGLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDbkQsSUFBSWlJLE9BQU8sRUFBRTtFQUNYQSxPQUFPLENBQUN0SCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN0Q2tELE1BQU0sQ0FBQ3FFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZHJvcGRvd25FbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmRyb3Bkb3duID0gZHJvcGRvd25FbGVtZW50O1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5ID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWJvZHlcIik7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taGVhZFwiKTtcbiAgICB0aGlzLmNvdW50cnlJdGVtcyA9IHRoaXMuZHJvcGRvd25Cb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtZHJvcGRvd24taXRlbVwiKTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG5cbiAgICB0aGlzLm5hbWVTb3VyY2UgPSBvcHRpb25zLm5hbWVTb3VyY2UgfHwgXCJpbm5lclRleHRcIjsgLy8g0LjQu9C4IFwiZGF0YS1sYW5nXCIsIFwiZGF0YS12YWx1ZVwiINC4INGCLtC/LlxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZURyb3Bkb3duKCkpO1xuXG4gICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKSk7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeShlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiB0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyb3Bkb3duQm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNQcmV2SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHNlbGVjdENvdW50cnkoZWxlbSkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bi1pdGVtLW5hbWUnKTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgIG5hbWVFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5hbWVFbCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG4gICAgICBsZXQgc2VsZWN0ZWROYW1lID0gXCJcIjtcblxuICAgICAgaWYgKHRoaXMubmFtZVNvdXJjZSA9PT0gXCJpbm5lclRleHRcIikge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWw/LmlubmVyVGV4dDtcbiAgICAgIH0gZWxzZSBpZiAobmFtZUVsPy5kYXRhc2V0KSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbC5kYXRhc2V0W3RoaXMubmFtZVNvdXJjZV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSW1nID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpPy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG5cbiAgICAgIGNvbnN0IGhlYWRJbWcgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgY29uc3QgaGVhZE5hbWUgPSB0aGlzLmRyb3Bkb3duSGVhZC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcblxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSAmJiBoZWFkTmFtZSkge1xuICAgICAgICBoZWFkTmFtZS5pbm5lclRleHQgPSBzZWxlY3RlZE5hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZEltZyAmJiBoZWFkSW1nKSB7XG4gICAgICAgIGhlYWRJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNlbGVjdGVkSW1nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LmFkZChcImlzU2VsZWN0ZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTmV4dEl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPCB0aGlzLmNvdW50cnlJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4Kys7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldkl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cblxuXG5jb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY291bnRyeVwiKTtcbmNvbnN0IGluc3RhbmNlID0gbmV3IERyb3Bkb3duKGRyb3Bkb3ducyk7XG5kcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlXG5cbmNvbnN0IGRyb3Bkb3duTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19sYW5nXCIpO1xuY29uc3QgaW5zdGFuY2VMYW5nID0gbmV3IERyb3Bkb3duKGRyb3Bkb3duTGFuZywge25hbWVTb3VyY2U6IFwibGFuZ1wifSk7XG5kcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZSA9IGluc3RhbmNlTGFuZztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bnMuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bnMuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duSW5zdGFuY2UgPSBkcm9wZG93bkxhbmcuZHJvcGRvd25JbnN0YW5jZTtcbiAgaWYgKCFkcm9wZG93bkxhbmcuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgZHJvcGRvd25JbnN0YW5jZT8uY2xvc2VEcm9wZG93bigpO1xuICB9XG59KTtcblxuY29uc3QgZGlzYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19kaXNhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eVwiKTtcbmNvbnN0IGF2YWlsYWJpbGl0eUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2F2YWlsYWJpbGl0eV9jbG9zZVwiKTtcblxuZGlzYWJpbGl0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmFpbGFiaWxpdHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxufSk7XG5cbmF2YWlsYWJpbGl0eUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGH0YLQviDQutC70LjQutC90YPQu9C4INC40LzQtdC90L3QviDQsiAuaGVhZGVyX19hdmFpbGFiaWxpdHksINCwINC90LUg0LLQvdGD0YLRgNGMIC5oZWFkZXJfX2F2YWlsYWJpbGl0eV93cmFwXG4gIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXAnKSkge1xuICAgIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgfVxufSk7XG5cbmNvbnN0IGFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG5hY2NvcmRpb25zLmZvckVhY2goaXRlbSAgPT4ge1xuICBjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYnRuJyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5qcy1hY2MtYm9keScpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpc09wZW4gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpXG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudEhlaWdodCArIFwicHhcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcbiAgICB9XG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRIZWlnaHRDb250ZW50QWNjKCkge1xuICBjb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYWNjJyk7XG4gIGFjYy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWFjYy1ib2R5XCIpO1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArIFwicHhcIlxuICAgIH1cbiAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn0pXG5cbmNvbnN0IGZvbnRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udC1yYW5nZVwiKTtcbmNvbnN0IGNvbnRyYXN0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyYXN0XCIpXG5jb25zdCBzcGFjaW5nUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuY29uc3QgcGhvbmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX21vYl9ibG9ja19waG9uZVwiKVxuXG5mdW5jdGlvbiB1cGRhdGVSYW5nZVByb2dyZXNzKGlucHV0KSB7XG4gIGNvbnN0IGZpbGwgPSBpbnB1dD8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBjb25zdCBtaW4gPSAraW5wdXQubWluO1xuICBjb25zdCBtYXggPSAraW5wdXQubWF4O1xuICBjb25zdCB2YWx1ZSA9ICtpbnB1dC52YWx1ZTtcbiAgY29uc3QgcGVyY2VudCA9ICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xuXG4gIGlmIChmaWxsKSB7XG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBpbnB1dC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtcmFuZ2VfbGFiZWxzIHNwYW5cIik7XG4gIGlmIChsYWJlbHMpIHtcbiAgICBjb25zdCBzdGVwID0gKG1heCAtIG1pbikgLyAobGFiZWxzLmxlbmd0aCAtIDEpO1xuXG4gICAgbGFiZWxzLmZvckVhY2goKHNwYW4sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0aHJlc2hvbGQgPSBtaW4gKyBpbmRleCAqIHN0ZXA7XG4gICAgICBpZiAodmFsdWUgPj0gdGhyZXNob2xkKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkoYmxvY2ssIGZvbnRTaXplKSB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA0NzUgJiYgZm9udFNpemUgPiAxNikge1xuICAgIGJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBibG9jay5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfVxufVxuXG5pZiAoZm9udFJhbmdlKSB7XG4gIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZm9udFJhbmdlKTtcbiAgZm9udFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBcIjE2XCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImZvbnQtc2l6ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7dmFsdWV9cHhgO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICBnZXRIZWlnaHRDb250ZW50QWNjKClcbiAgICBpZiAocGhvbmVJbWcpIHtcbiAgICAgIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgdmFsdWUpXG4gICAgfVxuICB9KTtcbn1cblxuaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1xuICAgIFwiY29udHJhc3QtMVwiLFxuICAgIFwiY29udHJhc3QtMlwiLFxuICAgIFwiY29udHJhc3QtNFwiXG4gIF07XG5cbiAgZnVuY3Rpb24gc2V0Q29udHJhc3RNb2RlKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICBpZiAodmFsdWUgIT09IFwiM1wiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHt2YWx1ZX1gKTtcbiAgICB9XG4gIH1cbiAgc2V0Q29udHJhc3RNb2RlKGNvbnRyYXN0UmFuZ2UudmFsdWUpXG4gIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIGNvbnRyYXN0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRDb250cmFzdE1vZGUodmFsdWUpXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gIH0pXG59XG5cbmlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICBzcGFjaW5nUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcih2YWx1ZSl9cHhgO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICBnZXRIZWlnaHRDb250ZW50QWNjKClcbiAgfSlcbn1cblxuY29uc3QgdGhlbWVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGhlbWVcIl0nKTtcblxuZnVuY3Rpb24gYXBwbHlUaGVtZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwiZGFya1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGlnaHRcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImR1b1wiKSB7XG4gICAgY29uc3QgaXNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGlmIChpc0RhcmspIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH1cbn1cblxudGhlbWVJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoKSA9PiBhcHBseVRoZW1lKGlucHV0LnZhbHVlKSk7XG59KVxuXG5jb25zdCBsZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl0nKVxuXG5mdW5jdGlvbiBhcHBseUxlYWRpbmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcIm1lZGl1bVwiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiYmlnXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfVxuICBnZXRIZWlnaHRDb250ZW50QWNjKClcbn1cblxubGVhZGluZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gYXBwbHlMZWFkaW5nKGl0ZW0udmFsdWUpKTtcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aGVtZVwiXTpjaGVja2VkJylcbiAgICBhcHBseVRoZW1lKHRoZW1lLnZhbHVlKVxuICAgIGNvbnN0IGxoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxpbmVIZWlnaHRcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlMZWFkaW5nKGxoLnZhbHVlKVxuICAgIGNvbnN0IHNwYWNpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxldHRlci1zcGFjaW5nXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHNwYWNpbmcudmFsdWUpICogMn1weGA7XG4gIH1cbiAgY29uc3QgaW5wdXRGb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpXG4gIGlmIChwaG9uZUltZykge1xuICAgIHRvZ2dsZVBob25lSW1nVmlzaWJpbGl0eShwaG9uZUltZywgaW5wdXRGb250LnZhbHVlKVxuICB9XG59KVxuXG5jb25zdCBjbGVhckF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXZhaWxhYmlsaXR5LWJ0blwiKVxuY2xlYXJBdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIilcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYGNvbnRyYXN0LTFgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYGNvbnRyYXN0LTJgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYGNvbnRyYXN0LTRgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLnZhbHVlID0gMTY7IC8vINC00LXRhNC+0LvRgtC90YvQuSDRgNCw0LfQvNC10YBcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gICAgaWYgKHBob25lSW1nKSB7XG4gICAgICB0b2dnbGVQaG9uZUltZ1Zpc2liaWxpdHkocGhvbmVJbWcsIDE2KVxuICAgIH1cbiAgfVxuXG4gIGlmIChjb250cmFzdFJhbmdlKSB7XG4gICAgY29udHJhc3RSYW5nZS52YWx1ZSA9IDM7IC8vINC00LXRhNC+0LvRgtC90LDRjyDQutC+0L3RgtGA0LDRgdGC0L3QvtGB0YLRjFxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIH1cblxuICBpZiAoc3BhY2luZ1JhbmdlKSB7XG4gICAgc3BhY2luZ1JhbmdlLnZhbHVlID0gMDsgLy8g0LTQtdGE0L7Qu9GC0L3Ri9C5INC40L3RgtC10YDQstCw0LtcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIH1cblxuICB0aGVtZUlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwibGlnaHRcIikge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICBhcHBseVRoZW1lKFwibGlnaHRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIGxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbS52YWx1ZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGFwcGx5TGVhZGluZyhcIm5vcm1hbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbn0pXG5cblxuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVfYnRuXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYnVyZ2VyLW1lbnVcIilcbmNvbnN0IGJ1cmdlck1lbnU3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdcIik7XG5jb25zdCBidXJnZXJDbG9zZTc2OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJpZ19jbG9zZVwiKTtcblxuaWYgKGJ1cmdlckJ0biAmJiBidXJnZXJNZW51KSB7XG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJNZW51NzY4ICYmIGJ1cmdlckNsb3NlNzY4KSB7XG4gICAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGlmIChidXJnZXJDbG9zZTc2OCkge1xuICAgIGJ1cmdlckNsb3NlNzY4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfSlcbiAgfVxuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiBidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgaWYgKGJ1cmdlck1lbnU3NjgpIHtcbiAgICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxufVxuXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIud2h5X19zd2lwZXJcIiwge1xuICBzcGFjZUJldHdlZW46IDIwLFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi53aHlfX3BhZ2luYXRpb25cIixcbiAgICByZW5kZXJCdWxsZXQ6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9IHdoeV9fYnVsbGV0XCI+PC9zcGFuPmA7XG4gICAgfVxuICB9LFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIud2h5X19zY3JvbGxiYXJcIixcbiAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgYnRuUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVfX3FyXCIpO1xuY29uc3QgbW9kYWxRciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXItbW9kYWxcIik7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jdXN0b21fX2Nsb3NlXCIpO1xuXG5pZiAoYnRuUXIgJiYgbW9kYWxRciAmJiBidG5DbG9zZU1vZGFsKSB7XG4gIGJ0blFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKTtcbiAgICBtb2RhbFFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cblxuICBidG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICBtb2RhbFFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBpc091dHNpZGVDbGljayA9ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jdXN0b21fX2RpYWxvZ1wiKTtcbiAgICBpZiAoaXNPdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIilcbmlmIChidG5CYWNrKSB7XG4gIGJ0bkJhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH0pXG59XG4iXX0=
