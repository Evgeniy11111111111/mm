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
      document.documentElement.style.letterSpacing = "".concat(Number(value) * 2, "px");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwidXBkYXRlUmFuZ2VQcm9ncmVzcyIsImlucHV0IiwiZmlsbCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJtaW4iLCJtYXgiLCJwZXJjZW50Iiwid2lkdGgiLCJjb25jYXQiLCJsYWJlbHMiLCJwYXJlbnRFbGVtZW50Iiwic3RlcCIsInNwYW4iLCJ0aHJlc2hvbGQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZW1vdmVQcm9wZXJ0eSIsImZvbnRTaXplIiwic2V0Q29udHJhc3RNb2RlIiwiX2RvY3VtZW50JGRvY3VtZW50RWxlIiwiYXBwbHkiLCJjb250cmFzdENsYXNzZXMiLCJsZXR0ZXJTcGFjaW5nIiwiTnVtYmVyIiwidGhlbWVJbnB1dHMiLCJhcHBseVRoZW1lIiwiaXNEYXJrIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsZWFkaW5nIiwiYXBwbHlMZWFkaW5nIiwiaW5uZXJXaWR0aCIsInRoZW1lIiwibGgiLCJzcGFjaW5nIiwiY2xlYXJBdmFpbGFiaWxpdHkiLCJjaGVja2VkIiwiYnVyZ2VyQnRuIiwiYnVyZ2VyTWVudSIsImJ1cmdlck1lbnU3NjgiLCJidXJnZXJDbG9zZTc2OCIsInN3aXBlciIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImF1dG9IZWlnaHQiLCJzbGlkZXNQZXJWaWV3IiwicGFnaW5hdGlvbiIsImVsIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyIiwiZHJhZ2dhYmxlIiwiYnJlYWtwb2ludHMiLCJidG5RciIsIm1vZGFsUXIiLCJidG5DbG9zZU1vZGFsIiwiY2xvc2VNb2RhbCIsImV2ZW50IiwiaXNPdXRzaWRlQ2xpY2siLCJidG5CYWNrIiwiaGlzdG9yeSIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLFFBQVE7RUFDWixTQUFBQSxTQUFZQyxlQUFlLEVBQWdCO0lBQUEsSUFBZEMsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFBQUcsZUFBQSxPQUFBTixRQUFBO0lBQ3ZDLElBQUksQ0FBQ08sUUFBUSxHQUFHTixlQUFlO0lBQy9CLElBQUksQ0FBQ08sWUFBWSxHQUFHLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDcEUsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDSCxRQUFRLENBQUNFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwRSxJQUFJLENBQUNFLFlBQVksR0FBRyxJQUFJLENBQUNILFlBQVksQ0FBQ0ksZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7SUFDM0UsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFM0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdaLE9BQU8sQ0FBQ1ksVUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDOztJQUVyRCxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ2I7RUFBQyxPQUFBQyxZQUFBLENBQUFoQixRQUFBO0lBQUFpQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSCxJQUFJQSxDQUFBLEVBQUc7TUFBQSxJQUFBSSxLQUFBO01BQ0wsSUFBSSxDQUFDVCxZQUFZLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU1ELEtBQUksQ0FBQ0UsY0FBYyxDQUFDLENBQUM7TUFBQSxFQUFDO01BRXhFLElBQUksQ0FBQ1YsWUFBWSxDQUFDVyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7UUFDekNELElBQUksQ0FBQ0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1VBQUEsT0FBTUQsS0FBSSxDQUFDTSxhQUFhLENBQUNGLElBQUksQ0FBQztRQUFBLEVBQUM7UUFDOURBLElBQUksQ0FBQ0csWUFBWSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7UUFDbENILElBQUksQ0FBQ0gsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNPLENBQUMsRUFBSztVQUN0QyxJQUFJQSxDQUFDLENBQUNWLEdBQUcsS0FBSyxPQUFPLElBQUlVLENBQUMsQ0FBQ1YsR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN0Q1UsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUNsQlQsS0FBSSxDQUFDTSxhQUFhLENBQUNGLElBQUksQ0FBQztVQUMxQjtRQUNGLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ2IsWUFBWSxDQUFDVSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQ08sQ0FBQyxFQUFLO1FBQ25ELElBQUlBLENBQUMsQ0FBQ1YsR0FBRyxLQUFLLE9BQU8sSUFBSVUsQ0FBQyxDQUFDVixHQUFHLEtBQUssR0FBRyxFQUFFO1VBQ3RDVSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1VBQ2xCVCxLQUFJLENBQUNFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsTUFBTSxJQUFJTSxDQUFDLENBQUNWLEdBQUcsS0FBSyxXQUFXLElBQUlFLEtBQUksQ0FBQ1UsTUFBTSxDQUFDLENBQUMsRUFBRTtVQUNqREYsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUNsQlQsS0FBSSxDQUFDVyxhQUFhLENBQUMsQ0FBQztRQUN0QjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ3RCLFlBQVksQ0FBQ1ksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNPLENBQUMsRUFBSztRQUNuRCxJQUFJQSxDQUFDLENBQUNWLEdBQUcsS0FBSyxXQUFXLEVBQUU7VUFDekJVLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7VUFDbEJULEtBQUksQ0FBQ1csYUFBYSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxNQUFNLElBQUlILENBQUMsQ0FBQ1YsR0FBRyxLQUFLLFNBQVMsRUFBRTtVQUM5QlUsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUNsQlQsS0FBSSxDQUFDWSxhQUFhLENBQUMsQ0FBQztRQUN0QixDQUFDLE1BQU0sSUFBSUosQ0FBQyxDQUFDVixHQUFHLEtBQUssUUFBUSxFQUFFO1VBQzdCVSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1VBQ2xCVCxLQUFJLENBQUNhLGFBQWEsQ0FBQyxDQUFDO1FBQ3RCO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBZixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBRyxjQUFjQSxDQUFBLEVBQUc7TUFDZixJQUFJLENBQUNkLFFBQVEsQ0FBQzBCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN4QyxJQUFJLENBQUMxQixZQUFZLENBQUN5QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDNUMsSUFBSSxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDaEIsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO01BQzdCO0lBQ0Y7RUFBQztJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBVyxNQUFNQSxDQUFBLEVBQUc7TUFDUCxPQUFPLElBQUksQ0FBQ3JCLFlBQVksQ0FBQ3lCLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUN2RDtFQUFDO0lBQUFsQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTyxhQUFhQSxDQUFDRixJQUFJLEVBQUU7TUFDbEIsSUFBSSxJQUFJLENBQUNNLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFBQSxJQUFBTyxtQkFBQTtRQUNqQixJQUFJLENBQUN6QixZQUFZLENBQUNXLE9BQU8sQ0FBQyxVQUFBZSxJQUFJLEVBQUk7VUFDaEMsSUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUM1QixhQUFhLENBQUMsd0JBQXdCLENBQUM7VUFDM0QsSUFBSTZCLE1BQU0sRUFBRTtZQUNWQSxNQUFNLENBQUNMLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFlBQVksQ0FBQztVQUN2QztRQUNGLENBQUMsQ0FBQztRQUVGLElBQU1ELE1BQU0sR0FBR2YsSUFBSSxDQUFDZCxhQUFhLENBQUMsd0JBQXdCLENBQUM7UUFDM0QsSUFBSStCLFlBQVksR0FBRyxFQUFFO1FBRXJCLElBQUksSUFBSSxDQUFDMUIsVUFBVSxLQUFLLFdBQVcsRUFBRTtVQUNuQzBCLFlBQVksR0FBR0YsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVHLFNBQVM7UUFDbEMsQ0FBQyxNQUFNLElBQUlILE1BQU0sYUFBTkEsTUFBTSxlQUFOQSxNQUFNLENBQUVJLE9BQU8sRUFBRTtVQUMxQkYsWUFBWSxHQUFHRixNQUFNLENBQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUM1QixVQUFVLENBQUM7UUFDaEQ7UUFFQSxJQUFNNkIsV0FBVyxJQUFBUCxtQkFBQSxHQUFHYixJQUFJLENBQUNkLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBQTJCLG1CQUFBLHVCQUF6QkEsbUJBQUEsQ0FBMkJRLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFbEUsSUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQ25DLFlBQVksQ0FBQ0QsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFNcUMsUUFBUSxHQUFHLElBQUksQ0FBQ3BDLFlBQVksQ0FBQ0QsYUFBYSxDQUFDLHdCQUF3QixDQUFDO1FBRTFFLElBQUkrQixZQUFZLElBQUlNLFFBQVEsRUFBRTtVQUM1QkEsUUFBUSxDQUFDTCxTQUFTLEdBQUdELFlBQVk7UUFDbkM7UUFFQSxJQUFJRyxXQUFXLElBQUlFLE9BQU8sRUFBRTtVQUMxQkEsT0FBTyxDQUFDbkIsWUFBWSxDQUFDLEtBQUssRUFBRWlCLFdBQVcsQ0FBQztRQUMxQztRQUVBLElBQUlMLE1BQU0sRUFBRTtVQUNWQSxNQUFNLENBQUNMLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNwQztRQUVBLElBQUksQ0FBQ2YsYUFBYSxDQUFDLENBQUM7TUFDdEI7SUFDRjtFQUFDO0lBQUFmLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFZLGFBQWFBLENBQUEsRUFBRztNQUNkLElBQUksSUFBSSxDQUFDakIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDRixZQUFZLENBQUNQLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekQsSUFBSSxDQUFDUyxpQkFBaUIsRUFBRTtRQUN4QixJQUFJLENBQUNGLFlBQVksQ0FBQyxJQUFJLENBQUNFLGlCQUFpQixDQUFDLENBQUNtQyxLQUFLLENBQUMsQ0FBQztNQUNuRDtJQUNGO0VBQUM7SUFBQS9CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFhLGFBQWFBLENBQUEsRUFBRztNQUNkLElBQUksSUFBSSxDQUFDbEIsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO1FBQzlCLElBQUksQ0FBQ0EsaUJBQWlCLEVBQUU7UUFDeEIsSUFBSSxDQUFDRixZQUFZLENBQUMsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUM7TUFDbkQ7SUFDRjtFQUFDO0lBQUEvQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBYyxhQUFhQSxDQUFBLEVBQUc7TUFDZCxJQUFJLENBQUN6QixRQUFRLENBQUMwQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDeEMsSUFBSSxDQUFDL0IsWUFBWSxDQUFDeUIsU0FBUyxDQUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQzVDLElBQUksQ0FBQzFCLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUM3QjtFQUFDO0FBQUE7QUFLSCxJQUFNb0MsU0FBUyxHQUFHQyxRQUFRLENBQUN6QyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDNUQsSUFBTTBDLFFBQVEsR0FBRyxJQUFJbkQsUUFBUSxDQUFDaUQsU0FBUyxDQUFDO0FBQ3hDQSxTQUFTLENBQUNHLGdCQUFnQixHQUFHRCxRQUFRO0FBRXJDLElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDekMsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUM1RCxJQUFNNkMsWUFBWSxHQUFHLElBQUl0RCxRQUFRLENBQUNxRCxZQUFZLEVBQUU7RUFBQ3ZDLFVBQVUsRUFBRTtBQUFNLENBQUMsQ0FBQztBQUNyRXVDLFlBQVksQ0FBQ0QsZ0JBQWdCLEdBQUdFLFlBQVk7QUFFNUNKLFFBQVEsQ0FBQzlCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDTyxDQUFDLEVBQUs7RUFDeEMsSUFBTXlCLGdCQUFnQixHQUFHSCxTQUFTLENBQUNHLGdCQUFnQjtFQUNuRCxJQUFJLENBQUNILFNBQVMsQ0FBQ2QsUUFBUSxDQUFDUixDQUFDLENBQUM0QixNQUFNLENBQUMsRUFBRTtJQUNqQ0gsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsZUFBaEJBLGdCQUFnQixDQUFFcEIsYUFBYSxDQUFDLENBQUM7RUFDbkM7QUFDRixDQUFDLENBQUM7QUFFRmtCLFFBQVEsQ0FBQzlCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDTyxDQUFDLEVBQUs7RUFDeEMsSUFBTXlCLGdCQUFnQixHQUFHQyxZQUFZLENBQUNELGdCQUFnQjtFQUN0RCxJQUFJLENBQUNDLFlBQVksQ0FBQ2xCLFFBQVEsQ0FBQ1IsQ0FBQyxDQUFDNEIsTUFBTSxDQUFDLEVBQUU7SUFDcENILGdCQUFnQixhQUFoQkEsZ0JBQWdCLGVBQWhCQSxnQkFBZ0IsQ0FBRXBCLGFBQWEsQ0FBQyxDQUFDO0VBQ25DO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTXdCLFVBQVUsR0FBR04sUUFBUSxDQUFDekMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ2hFLElBQU1nRCxZQUFZLEdBQUdQLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztBQUNwRSxJQUFNaUQsaUJBQWlCLEdBQUdSLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUUvRStDLFVBQVUsQ0FBQ3BDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pDcUMsWUFBWSxDQUFDeEIsU0FBUyxDQUFDYyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3BDRyxRQUFRLENBQUNTLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRlcsaUJBQWlCLENBQUN0QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRHFDLFlBQVksQ0FBQ3hCLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUN2Q1csUUFBUSxDQUFDUyxJQUFJLENBQUMxQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUZrQixZQUFZLENBQUNyQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ08sQ0FBQyxFQUFLO0VBQzVDO0VBQ0EsSUFBSSxDQUFDQSxDQUFDLENBQUM0QixNQUFNLENBQUNLLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO0lBQ25ESCxZQUFZLENBQUN4QixTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDdkNXLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDMUIsU0FBUyxDQUFDYyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQ3JDO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTWMsVUFBVSxHQUFHWCxRQUFRLENBQUN0QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7QUFDdkRpRCxVQUFVLENBQUN2QyxPQUFPLENBQUMsVUFBQWUsSUFBSSxFQUFLO0VBQzFCLElBQU15QixHQUFHLEdBQUd6QixJQUFJLENBQUM1QixhQUFhLENBQUMsYUFBYSxDQUFDO0VBQzdDLElBQU1zRCxPQUFPLEdBQUcxQixJQUFJLENBQUM1QixhQUFhLENBQUMsY0FBYyxDQUFDO0VBRWxEcUQsR0FBRyxDQUFDMUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbEMsSUFBTVMsTUFBTSxHQUFHUSxJQUFJLENBQUNKLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNqRCxJQUFNNkIsYUFBYSxHQUFHRCxPQUFPLENBQUNFLFlBQVk7SUFDMUMsSUFBSXBDLE1BQU0sRUFBRTtNQUNWa0MsT0FBTyxDQUFDRyxLQUFLLENBQUNDLFNBQVMsR0FBRyxHQUFHO01BQzdCOUIsSUFBSSxDQUFDSixTQUFTLENBQUNNLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQyxNQUFNO01BQ0x3QixPQUFPLENBQUNHLEtBQUssQ0FBQ0MsU0FBUyxHQUFHSCxhQUFhLEdBQUcsSUFBSTtNQUM5QzNCLElBQUksQ0FBQ0osU0FBUyxDQUFDYyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQy9CO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsU0FBU3FCLG1CQUFtQkEsQ0FBQSxFQUFHO0VBQzdCLElBQU1DLEdBQUcsR0FBR25CLFFBQVEsQ0FBQ3RDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztFQUNoRHlELEdBQUcsQ0FBQy9DLE9BQU8sQ0FBQyxVQUFBZSxJQUFJLEVBQUk7SUFDbEIsSUFBSUEsSUFBSSxDQUFDSixTQUFTLENBQUNFLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUN0QyxJQUFNNEIsT0FBTyxHQUFHMUIsSUFBSSxDQUFDNUIsYUFBYSxDQUFDLGNBQWMsQ0FBQztNQUNsRHNELE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxTQUFTLEdBQUdKLE9BQU8sQ0FBQ0UsWUFBWSxHQUFHLElBQUk7SUFDdkQ7RUFDRixDQUFDLENBQUM7QUFDSjtBQUVBSyxNQUFNLENBQUNsRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtFQUN0Q2dELG1CQUFtQixDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsSUFBTUcsU0FBUyxHQUFHckIsUUFBUSxDQUFDc0IsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUN2RCxJQUFNQyxhQUFhLEdBQUd2QixRQUFRLENBQUNzQixjQUFjLENBQUMsVUFBVSxDQUFDO0FBQ3pELElBQU1FLFlBQVksR0FBR3hCLFFBQVEsQ0FBQ3NCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUU5RCxTQUFTRyxtQkFBbUJBLENBQUNDLEtBQUssRUFBRTtFQUNsQyxJQUFNQyxJQUFJLEdBQUdELEtBQUssYUFBTEEsS0FBSyx1QkFBTEEsS0FBSyxDQUFFRSxzQkFBc0I7RUFDMUMsSUFBTUMsR0FBRyxHQUFHLENBQUNILEtBQUssQ0FBQ0csR0FBRztFQUN0QixJQUFNQyxHQUFHLEdBQUcsQ0FBQ0osS0FBSyxDQUFDSSxHQUFHO0VBQ3RCLElBQU05RCxLQUFLLEdBQUcsQ0FBQzBELEtBQUssQ0FBQzFELEtBQUs7RUFDMUIsSUFBTStELE9BQU8sR0FBSSxDQUFDL0QsS0FBSyxHQUFHNkQsR0FBRyxLQUFLQyxHQUFHLEdBQUdELEdBQUcsQ0FBQyxHQUFJLEdBQUc7RUFFbkQsSUFBSUYsSUFBSSxFQUFFO0lBQ1JBLElBQUksQ0FBQ1gsS0FBSyxDQUFDZ0IsS0FBSyxNQUFBQyxNQUFBLENBQU1GLE9BQU8sTUFBRztFQUNsQztFQUVBLElBQU1HLE1BQU0sR0FBR1IsS0FBSyxDQUFDUyxhQUFhLENBQUN6RSxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztFQUMvRSxJQUFJd0UsTUFBTSxFQUFFO0lBQ1YsSUFBTUUsSUFBSSxHQUFHLENBQUNOLEdBQUcsR0FBR0QsR0FBRyxLQUFLSyxNQUFNLENBQUNoRixNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRTlDZ0YsTUFBTSxDQUFDOUQsT0FBTyxDQUFDLFVBQUNpRSxJQUFJLEVBQUUvRCxLQUFLLEVBQUs7TUFDOUIsSUFBTWdFLFNBQVMsR0FBR1QsR0FBRyxHQUFHdkQsS0FBSyxHQUFHOEQsSUFBSTtNQUNwQyxJQUFJcEUsS0FBSyxJQUFJc0UsU0FBUyxFQUFFO1FBQ3RCRCxJQUFJLENBQUN0RCxTQUFTLENBQUNjLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDOUIsQ0FBQyxNQUFNO1FBQ0x3QyxJQUFJLENBQUN0RCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDakM7SUFDRixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsSUFBSWdDLFNBQVMsRUFBRTtFQUNiSSxtQkFBbUIsQ0FBQ0osU0FBUyxDQUFDO0VBQzlCQSxTQUFTLENBQUNuRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ08sQ0FBQyxFQUFLO0lBQ3pDLElBQU1ULEtBQUssR0FBR1MsQ0FBQyxDQUFDNEIsTUFBTSxDQUFDckMsS0FBSztJQUM1QixJQUFJQSxLQUFLLEtBQUssSUFBSSxFQUFFO01BQ2xCZ0MsUUFBUSxDQUFDdUMsZUFBZSxDQUFDdkIsS0FBSyxDQUFDd0IsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUM1RCxDQUFDLE1BQU07TUFDTHhDLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3ZCLEtBQUssQ0FBQ3lCLFFBQVEsTUFBQVIsTUFBQSxDQUFNakUsS0FBSyxPQUFJO0lBQ3hEO0lBQ0F5RCxtQkFBbUIsQ0FBQ2hELENBQUMsQ0FBQzRCLE1BQU0sQ0FBQztJQUM3QmEsbUJBQW1CLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7QUFDSjtBQUVBLElBQUlLLGFBQWEsRUFBRTtFQUFBLElBT1JtQixlQUFlLEdBQXhCLFNBQVNBLGVBQWVBLENBQUMxRSxLQUFLLEVBQUU7SUFBQSxJQUFBMkUscUJBQUE7SUFDOUIsQ0FBQUEscUJBQUEsR0FBQTNDLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsRUFBQ00sTUFBTSxDQUFBdUQsS0FBQSxDQUFBRCxxQkFBQSxFQUFJRSxlQUFlLENBQUM7SUFDN0QsSUFBSTdFLEtBQUssS0FBSyxHQUFHLEVBQUU7TUFDakJnQyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNjLEdBQUcsYUFBQW9DLE1BQUEsQ0FBYWpFLEtBQUssQ0FBRSxDQUFDO0lBQzdEO0VBQ0YsQ0FBQztFQVhELElBQU02RSxlQUFlLEdBQUcsQ0FDdEIsWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLENBQ2I7RUFRREgsZUFBZSxDQUFDbkIsYUFBYSxDQUFDdkQsS0FBSyxDQUFDO0VBQ3BDeUQsbUJBQW1CLENBQUNGLGFBQWEsQ0FBQztFQUNsQ0EsYUFBYSxDQUFDckQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNPLENBQUMsRUFBSztJQUM3QyxJQUFNVCxLQUFLLEdBQUdTLENBQUMsQ0FBQzRCLE1BQU0sQ0FBQ3JDLEtBQUs7SUFDNUIwRSxlQUFlLENBQUMxRSxLQUFLLENBQUM7SUFDdEJ5RCxtQkFBbUIsQ0FBQ2hELENBQUMsQ0FBQzRCLE1BQU0sQ0FBQztFQUMvQixDQUFDLENBQUM7QUFDSjtBQUVBLElBQUltQixZQUFZLEVBQUU7RUFDaEJDLG1CQUFtQixDQUFDRCxZQUFZLENBQUM7RUFDakNBLFlBQVksQ0FBQ3RELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDTyxDQUFDLEVBQUs7SUFDNUMsSUFBTVQsS0FBSyxHQUFHUyxDQUFDLENBQUM0QixNQUFNLENBQUNyQyxLQUFLO0lBQzVCLElBQUlBLEtBQUssS0FBSyxHQUFHLEVBQUU7TUFDakJnQyxRQUFRLENBQUN1QyxlQUFlLENBQUN2QixLQUFLLENBQUN3QixjQUFjLENBQUMsZ0JBQWdCLENBQUM7SUFDakUsQ0FBQyxNQUFNO01BQ0x4QyxRQUFRLENBQUN1QyxlQUFlLENBQUN2QixLQUFLLENBQUM4QixhQUFhLE1BQUFiLE1BQUEsQ0FBTWMsTUFBTSxDQUFDL0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFJO0lBQ3pFO0lBQ0F5RCxtQkFBbUIsQ0FBQ2hELENBQUMsQ0FBQzRCLE1BQU0sQ0FBQztJQUM3QmEsbUJBQW1CLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7QUFDSjtBQUVBLElBQU04QixXQUFXLEdBQUdoRCxRQUFRLENBQUN0QyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztBQUVwRSxTQUFTdUYsVUFBVUEsQ0FBQ2pGLEtBQUssRUFBRTtFQUN6QixJQUFJQSxLQUFLLEtBQUssTUFBTSxFQUFFO0lBQ3BCZ0MsUUFBUSxDQUFDdUMsZUFBZSxDQUFDeEQsU0FBUyxDQUFDYyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQ2hELENBQUMsTUFBTSxJQUFJN0IsS0FBSyxLQUFLLE9BQU8sRUFBRTtJQUM1QmdDLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsQ0FBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUNuRCxDQUFDLE1BQU0sSUFBSXJCLEtBQUssS0FBSyxLQUFLLEVBQUU7SUFDMUIsSUFBTWtGLE1BQU0sR0FBRzlCLE1BQU0sQ0FBQytCLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPO0lBQ3hFLElBQUlGLE1BQU0sRUFBRTtNQUNWbEQsUUFBUSxDQUFDdUMsZUFBZSxDQUFDeEQsU0FBUyxDQUFDYyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2hELENBQUMsTUFBTTtNQUNMRyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbkQ7RUFDRjtBQUNGO0FBRUEyRCxXQUFXLENBQUM1RSxPQUFPLENBQUMsVUFBQXNELEtBQUssRUFBSTtFQUMzQkEsS0FBSyxDQUFDeEQsZ0JBQWdCLENBQUMsUUFBUSxFQUFDO0lBQUEsT0FBTStFLFVBQVUsQ0FBQ3ZCLEtBQUssQ0FBQzFELEtBQUssQ0FBQztFQUFBLEVBQUM7QUFDaEUsQ0FBQyxDQUFDO0FBRUYsSUFBTXFGLE9BQU8sR0FBR3JELFFBQVEsQ0FBQ3RDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0FBRXJFLFNBQVM0RixZQUFZQSxDQUFDdEYsS0FBSyxFQUFFO0VBQzNCLElBQUlBLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDdEJnQyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDMURXLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBQzVELENBQUMsTUFBTSxJQUFJN0IsS0FBSyxLQUFLLEtBQUssRUFBRTtJQUMxQmdDLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUN2REcsUUFBUSxDQUFDdUMsZUFBZSxDQUFDeEQsU0FBUyxDQUFDTSxNQUFNLENBQUMsa0JBQWtCLENBQUM7RUFDL0QsQ0FBQyxNQUFNO0lBQ0xXLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsQ0FBQ00sTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMxRFcsUUFBUSxDQUFDdUMsZUFBZSxDQUFDeEQsU0FBUyxDQUFDTSxNQUFNLENBQUMsa0JBQWtCLENBQUM7RUFDL0Q7RUFDQTZCLG1CQUFtQixDQUFDLENBQUM7QUFDdkI7QUFFQW1DLE9BQU8sQ0FBQ2pGLE9BQU8sQ0FBQyxVQUFBZSxJQUFJLEVBQUk7RUFDdEJBLElBQUksQ0FBQ2pCLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtJQUFBLE9BQU1vRixZQUFZLENBQUNuRSxJQUFJLENBQUNuQixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQ2pFLENBQUMsQ0FBQztBQUVGb0QsTUFBTSxDQUFDbEQsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDdEMsSUFBSWtELE1BQU0sQ0FBQ21DLFVBQVUsR0FBRyxHQUFHLEVBQUU7SUFDM0J2RCxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDakRXLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsQ0FBQ00sTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMxRFcsUUFBUSxDQUFDdUMsZUFBZSxDQUFDeEQsU0FBUyxDQUFDTSxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDN0RXLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3ZCLEtBQUssQ0FBQ3dCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNqRSxDQUFDLE1BQU07SUFDTCxJQUFNZ0IsS0FBSyxHQUFHeEQsUUFBUSxDQUFDekMsYUFBYSxDQUFDLDZCQUE2QixDQUFDO0lBQ25FMEYsVUFBVSxDQUFDTyxLQUFLLENBQUN4RixLQUFLLENBQUM7SUFDdkIsSUFBTXlGLEVBQUUsR0FBR3pELFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQztJQUNyRStGLFlBQVksQ0FBQ0csRUFBRSxDQUFDekYsS0FBSyxDQUFDO0lBQ3RCLElBQU0wRixPQUFPLEdBQUcxRCxRQUFRLENBQUNzQixjQUFjLENBQUMsZ0JBQWdCLENBQUM7SUFDekR0QixRQUFRLENBQUN1QyxlQUFlLENBQUN2QixLQUFLLENBQUM4QixhQUFhLE1BQUFiLE1BQUEsQ0FBTWMsTUFBTSxDQUFDVyxPQUFPLENBQUMxRixLQUFLLENBQUMsR0FBRyxDQUFDLE9BQUk7RUFDakY7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNMkYsaUJBQWlCLEdBQUczRCxRQUFRLENBQUN6QyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFDckVvRyxpQkFBaUIsQ0FBQ3pGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ2hEOEIsUUFBUSxDQUFDdUMsZUFBZSxDQUFDeEQsU0FBUyxDQUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ2pEVyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFDMURXLFFBQVEsQ0FBQ3VDLGVBQWUsQ0FBQ3hELFNBQVMsQ0FBQ00sTUFBTSxDQUFDLGtCQUFrQixDQUFDO0VBQzdEVyxRQUFRLENBQUN1QyxlQUFlLENBQUN2QixLQUFLLENBQUN3QixjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDL0R4QyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sYUFBYSxDQUFDO0VBQ3ZEVyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sYUFBYSxDQUFDO0VBQ3ZEVyxRQUFRLENBQUN1QyxlQUFlLENBQUN4RCxTQUFTLENBQUNNLE1BQU0sYUFBYSxDQUFDO0VBQ3ZEVyxRQUFRLENBQUN1QyxlQUFlLENBQUN2QixLQUFLLENBQUN3QixjQUFjLENBQUMsV0FBVyxDQUFDO0VBQzFELElBQUluQixTQUFTLEVBQUU7SUFDYkEsU0FBUyxDQUFDckQsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCeUQsbUJBQW1CLENBQUNKLFNBQVMsQ0FBQztFQUNoQztFQUVBLElBQUlFLGFBQWEsRUFBRTtJQUNqQkEsYUFBYSxDQUFDdkQsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pCeUQsbUJBQW1CLENBQUNGLGFBQWEsQ0FBQztFQUNwQztFQUVBLElBQUlDLFlBQVksRUFBRTtJQUNoQkEsWUFBWSxDQUFDeEQsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hCeUQsbUJBQW1CLENBQUNELFlBQVksQ0FBQztFQUNuQztFQUVBd0IsV0FBVyxDQUFDNUUsT0FBTyxDQUFDLFVBQUFzRCxLQUFLLEVBQUk7SUFDM0IsSUFBSUEsS0FBSyxDQUFDMUQsS0FBSyxLQUFLLE9BQU8sRUFBRTtNQUMzQjBELEtBQUssQ0FBQ2tDLE9BQU8sR0FBRyxJQUFJO01BQ3BCWCxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUMsTUFBTTtNQUNMdkIsS0FBSyxDQUFDa0MsT0FBTyxHQUFHLEtBQUs7SUFDdkI7RUFDRixDQUFDLENBQUM7RUFFRlAsT0FBTyxDQUFDakYsT0FBTyxDQUFDLFVBQUFlLElBQUksRUFBSTtJQUN0QixJQUFJQSxJQUFJLENBQUNuQixLQUFLLEtBQUssUUFBUSxFQUFFO01BQzNCbUIsSUFBSSxDQUFDeUUsT0FBTyxHQUFHLElBQUk7TUFDbkJOLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDeEIsQ0FBQyxNQUFNO01BQ0xuRSxJQUFJLENBQUN5RSxPQUFPLEdBQUcsS0FBSztJQUN0QjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUdGLElBQU1DLFNBQVMsR0FBRzdELFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUM3RCxJQUFNdUcsVUFBVSxHQUFHOUQsUUFBUSxDQUFDekMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQzVELElBQU13RyxhQUFhLEdBQUcvRCxRQUFRLENBQUN6QyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFDakUsSUFBTXlHLGNBQWMsR0FBR2hFLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztBQUV4RSxJQUFJc0csU0FBUyxJQUFJQyxVQUFVLEVBQUU7RUFDM0JELFNBQVMsQ0FBQzNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3hDMkYsU0FBUyxDQUFDOUUsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BDLElBQUlvQyxNQUFNLENBQUNtQyxVQUFVLEdBQUcsR0FBRyxJQUFJUSxhQUFhLElBQUlDLGNBQWMsRUFBRTtNQUM5REQsYUFBYSxDQUFDaEYsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUMsTUFBTTtNQUNMOEUsVUFBVSxDQUFDL0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3ZDO0lBQ0EsSUFBSTZFLFNBQVMsQ0FBQzlFLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQzFDZSxRQUFRLENBQUNTLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDLE1BQU07TUFDTEcsUUFBUSxDQUFDUyxJQUFJLENBQUMxQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEM7RUFDRixDQUFDLENBQUM7RUFFRixJQUFJMkUsY0FBYyxFQUFFO0lBQ2xCQSxjQUFjLENBQUM5RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3QzJGLFNBQVMsQ0FBQzlFLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNwQzBFLGFBQWEsQ0FBQ2hGLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUN4Q1csUUFBUSxDQUFDUyxJQUFJLENBQUMxQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0VBQ0o7RUFHQStCLE1BQU0sQ0FBQ2xELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0lBQ3RDLElBQUlrRCxNQUFNLENBQUNtQyxVQUFVLEdBQUcsR0FBRyxJQUFJTSxTQUFTLENBQUM5RSxTQUFTLENBQUNFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNyRTRFLFNBQVMsQ0FBQzlFLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNwQ3lFLFVBQVUsQ0FBQy9FLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNyQyxJQUFJMEUsYUFBYSxFQUFFO1FBQ2pCQSxhQUFhLENBQUNoRixTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDMUM7TUFDQVcsUUFBUSxDQUFDUyxJQUFJLENBQUMxQixTQUFTLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDeEM7RUFDRixDQUFDLENBQUM7QUFDSjtBQUdBLElBQU00RSxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtFQUN4Q0MsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxrQkFBa0I7SUFDdEJDLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFHbEcsS0FBSyxFQUFFbUcsU0FBUyxFQUFLO01BQ2xDLHdCQUFBeEMsTUFBQSxDQUF1QndDLFNBQVM7SUFDbEM7RUFDRixDQUFDO0VBQ0RDLFNBQVMsRUFBRTtJQUNUSCxFQUFFLEVBQUUsaUJBQWlCO0lBQ3JCSSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYLEdBQUcsRUFBRTtNQUNIUCxhQUFhLEVBQUU7SUFDakI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU1RLEtBQUssR0FBRzdFLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDakQsSUFBTXVILE9BQU8sR0FBRzlFLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDbkQsSUFBTXdILGFBQWEsR0FBRy9FLFFBQVEsQ0FBQ3pDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztBQUVwRSxJQUFJc0gsS0FBSyxJQUFJQyxPQUFPLElBQUlDLGFBQWEsRUFBRTtFQUFBLElBTTVCQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVVBLENBQUEsRUFBRztJQUNwQkYsT0FBTyxDQUFDL0YsU0FBUyxDQUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xDVyxRQUFRLENBQUNTLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN4QyxDQUFDO0VBUkR3RixLQUFLLENBQUMzRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNwQzhCLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDMUIsU0FBUyxDQUFDYyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25DaUYsT0FBTyxDQUFDL0YsU0FBUyxDQUFDYyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ2pDLENBQUMsQ0FBQztFQU9Ga0YsYUFBYSxDQUFDN0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFOEcsVUFBVSxDQUFDO0VBRW5ERixPQUFPLENBQUM1RyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQytHLEtBQUssRUFBSztJQUMzQyxJQUFNQyxjQUFjLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDNUUsTUFBTSxDQUFDSyxPQUFPLENBQUMsdUJBQXVCLENBQUM7SUFDckUsSUFBSXdFLGNBQWMsRUFBRTtNQUNsQkYsVUFBVSxDQUFDLENBQUM7SUFDZDtFQUNGLENBQUMsQ0FBQztBQUNKO0FBSUEsSUFBTUcsT0FBTyxHQUFHbkYsUUFBUSxDQUFDekMsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNuRCxJQUFJNEgsT0FBTyxFQUFFO0VBQ1hBLE9BQU8sQ0FBQ2pILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3RDa0QsTUFBTSxDQUFDZ0UsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUN2QixDQUFDLENBQUM7QUFDSiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3Rvcihkcm9wZG93bkVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZHJvcGRvd24gPSBkcm9wZG93bkVsZW1lbnQ7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkgPSB0aGlzLmRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24tYm9keVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duSGVhZCA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1oZWFkXCIpO1xuICAgIHRoaXMuY291bnRyeUl0ZW1zID0gdGhpcy5kcm9wZG93bkJvZHkucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93bi1pdGVtXCIpO1xuICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXggPSAtMTtcblxuICAgIHRoaXMubmFtZVNvdXJjZSA9IG9wdGlvbnMubmFtZVNvdXJjZSB8fCBcImlubmVyVGV4dFwiOyAvLyDQuNC70LggXCJkYXRhLWxhbmdcIiwgXCJkYXRhLXZhbHVlXCIg0Lgg0YIu0L8uXG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bkhlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlRHJvcGRvd24oKSk7XG5cbiAgICB0aGlzLmNvdW50cnlJdGVtcy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zZWxlY3RDb3VudHJ5KGVsZW0pKTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RDb3VudHJ5KGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZHJvcGRvd25IZWFkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiICYmIHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzTmV4dEl0ZW0oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzTmV4dEl0ZW0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c1ByZXZJdGVtKCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bigpIHtcbiAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc2VsZWN0Q291bnRyeShlbGVtKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZScpO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgbmFtZUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpc1NlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmFtZUVsID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWl0ZW0tbmFtZVwiKTtcbiAgICAgIGxldCBzZWxlY3RlZE5hbWUgPSBcIlwiO1xuXG4gICAgICBpZiAodGhpcy5uYW1lU291cmNlID09PSBcImlubmVyVGV4dFwiKSB7XG4gICAgICAgIHNlbGVjdGVkTmFtZSA9IG5hbWVFbD8uaW5uZXJUZXh0O1xuICAgICAgfSBlbHNlIGlmIChuYW1lRWw/LmRhdGFzZXQpIHtcbiAgICAgICAgc2VsZWN0ZWROYW1lID0gbmFtZUVsLmRhdGFzZXRbdGhpcy5uYW1lU291cmNlXTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0ZWRJbWcgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik/LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcblxuICAgICAgY29uc3QgaGVhZEltZyA9IHRoaXMuZHJvcGRvd25IZWFkLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgICBjb25zdCBoZWFkTmFtZSA9IHRoaXMuZHJvcGRvd25IZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taXRlbS1uYW1lXCIpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWROYW1lICYmIGhlYWROYW1lKSB7XG4gICAgICAgIGhlYWROYW1lLmlubmVyVGV4dCA9IHNlbGVjdGVkTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkSW1nICYmIGhlYWRJbWcpIHtcbiAgICAgICAgaGVhZEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc2VsZWN0ZWRJbWcpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgIG5hbWVFbC5jbGFzc0xpc3QuYWRkKFwiaXNTZWxlY3RlZFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNOZXh0SXRlbSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXNJbmRleCA8IHRoaXMuY291bnRyeUl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXgrKztcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zW3RoaXMuY3VycmVudEZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNQcmV2SXRlbSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXNJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEZvY3VzSW5kZXgtLTtcbiAgICAgIHRoaXMuY291bnRyeUl0ZW1zW3RoaXMuY3VycmVudEZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wZG93bigpIHtcbiAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5kcm9wZG93bkJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG4gIH1cbn1cblxuXG5cbmNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb3VudHJ5XCIpO1xuY29uc3QgaW5zdGFuY2UgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25zKTtcbmRyb3Bkb3ducy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VcblxuY29uc3QgZHJvcGRvd25MYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xhbmdcIik7XG5jb25zdCBpbnN0YW5jZUxhbmcgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25MYW5nLCB7bmFtZVNvdXJjZTogXCJsYW5nXCJ9KTtcbmRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VMYW5nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3ducy5kcm9wZG93bkluc3RhbmNlO1xuICBpZiAoIWRyb3Bkb3ducy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlO1xuICBpZiAoIWRyb3Bkb3duTGFuZy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBkaXNhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2Rpc2FiaWxpdHlcIik7XG5jb25zdCBhdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5X2Nsb3NlXCIpO1xuXG5kaXNhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INC60LvQuNC60L3Rg9C70Lgg0LjQvNC10L3QvdC+INCyIC5oZWFkZXJfX2F2YWlsYWJpbGl0eSwg0LAg0L3QtSDQstC90YPRgtGA0YwgLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXBcbiAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19hdmFpbGFiaWxpdHlfd3JhcCcpKSB7XG4gICAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICB9XG59KTtcblxuY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbmFjY29yZGlvbnMuZm9yRWFjaChpdGVtICA9PiB7XG4gIGNvbnN0IGJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1idG4nKTtcbiAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1ib2R5Jyk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlzT3BlbiA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJylcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxuICAgIH1cbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldEhlaWdodENvbnRlbnRBY2MoKSB7XG4gIGNvbnN0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbiAgYWNjLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYWNjLWJvZHlcIik7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiXG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufSlcblxuY29uc3QgZm9udFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpO1xuY29uc3QgY29udHJhc3RSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJhc3RcIilcbmNvbnN0IHNwYWNpbmdSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoaW5wdXQpIHtcbiAgY29uc3QgZmlsbCA9IGlucHV0Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IG1pbiA9ICtpbnB1dC5taW47XG4gIGNvbnN0IG1heCA9ICtpbnB1dC5tYXg7XG4gIGNvbnN0IHZhbHVlID0gK2lucHV0LnZhbHVlO1xuICBjb25zdCBwZXJjZW50ID0gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDA7XG5cbiAgaWYgKGZpbGwpIHtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVscyA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1yYW5nZV9sYWJlbHMgc3BhblwiKTtcbiAgaWYgKGxhYmVscykge1xuICAgIGNvbnN0IHN0ZXAgPSAobWF4IC0gbWluKSAvIChsYWJlbHMubGVuZ3RoIC0gMSk7XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgoc3BhbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRocmVzaG9sZCA9IG1pbiArIGluZGV4ICogc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmlmIChmb250UmFuZ2UpIHtcbiAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhmb250UmFuZ2UpO1xuICBmb250UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IFwiMTZcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHt2YWx1ZX1weGA7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgIGdldEhlaWdodENvbnRlbnRBY2MoKVxuICB9KTtcbn1cblxuaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgY29uc3QgY29udHJhc3RDbGFzc2VzID0gW1xuICAgIFwiY29udHJhc3QtMVwiLFxuICAgIFwiY29udHJhc3QtMlwiLFxuICAgIFwiY29udHJhc3QtNFwiXG4gIF07XG5cbiAgZnVuY3Rpb24gc2V0Q29udHJhc3RNb2RlKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29udHJhc3RDbGFzc2VzKTtcbiAgICBpZiAodmFsdWUgIT09IFwiM1wiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgY29udHJhc3QtJHt2YWx1ZX1gKTtcbiAgICB9XG4gIH1cbiAgc2V0Q29udHJhc3RNb2RlKGNvbnRyYXN0UmFuZ2UudmFsdWUpXG4gIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoY29udHJhc3RSYW5nZSk7XG4gIGNvbnRyYXN0UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRDb250cmFzdE1vZGUodmFsdWUpXG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gIH0pXG59XG5cbmlmIChzcGFjaW5nUmFuZ2UpIHtcbiAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICBzcGFjaW5nUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJsZXR0ZXItc3BhY2luZ1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcih2YWx1ZSkgKiAyfXB4YDtcbiAgICB9XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhlLnRhcmdldCk7XG4gICAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG4gIH0pXG59XG5cbmNvbnN0IHRoZW1lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInRoZW1lXCJdJyk7XG5cbmZ1bmN0aW9uIGFwcGx5VGhlbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcImRhcmtcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImxpZ2h0XCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJkdW9cIikge1xuICAgIGNvbnN0IGlzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBpZiAoaXNEYXJrKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gICAgfVxuICB9XG59XG5cbnRoZW1lSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsKCkgPT4gYXBwbHlUaGVtZShpbnB1dC52YWx1ZSkpO1xufSlcblxuY29uc3QgbGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdJylcblxuZnVuY3Rpb24gYXBwbHlMZWFkaW5nKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImJpZ1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0QmlnXCIpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lSGVpZ2h0TWVkaXVtXCIpXG4gIH1cbiAgZ2V0SGVpZ2h0Q29udGVudEFjYygpXG59XG5cbmxlYWRpbmcuZm9yRWFjaChpdGVtID0+IHtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IGFwcGx5TGVhZGluZyhpdGVtLnZhbHVlKSk7XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGhlbWVcIl06Y2hlY2tlZCcpXG4gICAgYXBwbHlUaGVtZSh0aGVtZS52YWx1ZSlcbiAgICBjb25zdCBsaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsaW5lSGVpZ2h0XCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5TGVhZGluZyhsaC52YWx1ZSlcbiAgICBjb25zdCBzcGFjaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXR0ZXItc3BhY2luZ1wiKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUubGV0dGVyU3BhY2luZyA9IGAke051bWJlcihzcGFjaW5nLnZhbHVlKSAqIDJ9cHhgO1xuICB9XG59KVxuXG5jb25zdCBjbGVhckF2YWlsYWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXZhaWxhYmlsaXR5LWJ0blwiKVxuY2xlYXJBdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGV0dGVyLXNwYWNpbmdcIilcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYGNvbnRyYXN0LTFgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYGNvbnRyYXN0LTJgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYGNvbnRyYXN0LTRgKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuICBpZiAoZm9udFJhbmdlKSB7XG4gICAgZm9udFJhbmdlLnZhbHVlID0gMTY7IC8vINC00LXRhNC+0LvRgtC90YvQuSDRgNCw0LfQvNC10YBcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGZvbnRSYW5nZSk7XG4gIH1cblxuICBpZiAoY29udHJhc3RSYW5nZSkge1xuICAgIGNvbnRyYXN0UmFuZ2UudmFsdWUgPSAzOyAvLyDQtNC10YTQvtC70YLQvdCw0Y8g0LrQvtC90YLRgNCw0YHRgtC90L7RgdGC0YxcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGNvbnRyYXN0UmFuZ2UpO1xuICB9XG5cbiAgaWYgKHNwYWNpbmdSYW5nZSkge1xuICAgIHNwYWNpbmdSYW5nZS52YWx1ZSA9IDA7IC8vINC00LXRhNC+0LvRgtC90YvQuSDQuNC90YLQtdGA0LLQsNC7XG4gICAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhzcGFjaW5nUmFuZ2UpO1xuICB9XG5cbiAgdGhlbWVJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgaWYgKGlucHV0LnZhbHVlID09PSBcImxpZ2h0XCIpIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYXBwbHlUaGVtZShcImxpZ2h0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICBsZWFkaW5nLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0udmFsdWUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgICBhcHBseUxlYWRpbmcoXCJub3JtYWxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59KVxuXG5cbmNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51X2J0blwiKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWJ1cmdlci1tZW51XCIpXG5jb25zdCBidXJnZXJNZW51NzY4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtYmlnXCIpO1xuY29uc3QgYnVyZ2VyQ2xvc2U3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdfY2xvc2VcIik7XG5cbmlmIChidXJnZXJCdG4gJiYgYnVyZ2VyTWVudSkge1xuICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgYnVyZ2VyTWVudTc2OCAmJiBidXJnZXJDbG9zZTc2OCkge1xuICAgICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9XG4gICAgaWYgKGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBpZiAoYnVyZ2VyQ2xvc2U3NjgpIHtcbiAgICBidXJnZXJDbG9zZTc2OC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGJ1cmdlck1lbnU3NjguY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH0pXG4gIH1cblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGlmIChidXJnZXJNZW51NzY4KSB7XG4gICAgICAgIGJ1cmdlck1lbnU3NjguY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgfVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcbn1cblxuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLndoeV9fc3dpcGVyXCIsIHtcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIud2h5X19wYWdpbmF0aW9uXCIsXG4gICAgcmVuZGVyQnVsbGV0OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfSB3aHlfX2J1bGxldFwiPjwvc3Bhbj5gO1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLndoeV9fc2Nyb2xsYmFyXCIsXG4gICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IGJ0blFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlX19xclwiKTtcbmNvbnN0IG1vZGFsUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFyLW1vZGFsXCIpO1xuY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY3VzdG9tX19jbG9zZVwiKTtcblxuaWYgKGJ0blFyICYmIG1vZGFsUXIgJiYgYnRuQ2xvc2VNb2RhbCkge1xuICBidG5Rci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIik7XG4gICAgbW9kYWxRci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsUXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICB9XG5cbiAgYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgbW9kYWxRci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaXNPdXRzaWRlQ2xpY2sgPSAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWwtY3VzdG9tX19kaWFsb2dcIik7XG4gICAgaWYgKGlzT3V0c2lkZUNsaWNrKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbmNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpXG5pZiAoYnRuQmFjaykge1xuICBidG5CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9KVxufVxuIl19
