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
  updateRangeProgress(contrastRange);
  contrastRange.addEventListener("input", function (e) {
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
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.documentElement.classList.remove("dark");
  } else {
    var theme = document.querySelector('input[name="theme"]:checked');
    applyTheme(theme.value);
  }
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
var burgerBtn = document.querySelector(".header__menu_btn");
var burgerMenu = document.querySelector(".js-burger-menu");
var burgerMenu768 = document.querySelector(".header__menu-big");
var burgerClose768 = document.querySelector(".header__menu-big_close");
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  if (window.innerWidth > 768) {
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
burgerClose768.addEventListener("click", function () {
  console.log(1);
  burgerBtn.classList.remove("active");
  burgerMenu768.classList.remove("active");
  document.body.classList.remove("lock");
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && burgerBtn.classList.contains("active")) {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("active");
    burgerMenu768.classList.remove("active");
    document.body.classList.remove("lock");
  }
});
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
btnQr.addEventListener("click", function () {
  document.body.classList.add("lock");
  modalQr.classList.add("active");
});
function closeModal() {
  modalQr.classList.remove("active");
  document.body.classList.remove("lock");
}
btnCloseModal.addEventListener("click", closeModal);

// 👉 Закрытие по клику вне модалки
modalQr.addEventListener("click", function (event) {
  var isOutsideClick = !event.target.closest(".modal-custom__dialog");
  if (isOutsideClick) {
    closeModal();
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiRHJvcGRvd24iLCJkcm9wZG93bkVsZW1lbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiZHJvcGRvd24iLCJkcm9wZG93bkJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd25IZWFkIiwiY291bnRyeUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRGb2N1c0luZGV4IiwibmFtZVNvdXJjZSIsImluaXQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZURyb3Bkb3duIiwiZm9yRWFjaCIsImVsZW0iLCJpbmRleCIsInNlbGVjdENvdW50cnkiLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc09wZW4iLCJmb2N1c05leHRJdGVtIiwiZm9jdXNQcmV2SXRlbSIsImNsb3NlRHJvcGRvd24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsIl9lbGVtJHF1ZXJ5U2VsZWN0b3IiLCJpdGVtIiwibmFtZUVsIiwicmVtb3ZlIiwic2VsZWN0ZWROYW1lIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsInNlbGVjdGVkSW1nIiwiZ2V0QXR0cmlidXRlIiwiaGVhZEltZyIsImhlYWROYW1lIiwiYWRkIiwiZm9jdXMiLCJkcm9wZG93bnMiLCJkb2N1bWVudCIsImluc3RhbmNlIiwiZHJvcGRvd25JbnN0YW5jZSIsImRyb3Bkb3duTGFuZyIsImluc3RhbmNlTGFuZyIsInRhcmdldCIsImRpc2FiaWxpdHkiLCJhdmFpbGFiaWxpdHkiLCJhdmFpbGFiaWxpdHlDbG9zZSIsImJvZHkiLCJjbG9zZXN0IiwiYWNjb3JkaW9ucyIsImJ0biIsImNvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJnZXRIZWlnaHRDb250ZW50QWNjIiwiYWNjIiwid2luZG93IiwiZm9udFJhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cmFzdFJhbmdlIiwic3BhY2luZ1JhbmdlIiwidXBkYXRlUmFuZ2VQcm9ncmVzcyIsImlucHV0IiwiZmlsbCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJtaW4iLCJtYXgiLCJwZXJjZW50Iiwid2lkdGgiLCJjb25jYXQiLCJsYWJlbHMiLCJwYXJlbnRFbGVtZW50Iiwic3RlcCIsInNwYW4iLCJ0aHJlc2hvbGQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZW1vdmVQcm9wZXJ0eSIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIk51bWJlciIsInRoZW1lSW5wdXRzIiwiYXBwbHlUaGVtZSIsImlzRGFyayIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaW5uZXJXaWR0aCIsInRoZW1lIiwibGVhZGluZyIsImFwcGx5TGVhZGluZyIsImJ1cmdlckJ0biIsImJ1cmdlck1lbnUiLCJidXJnZXJNZW51NzY4IiwiYnVyZ2VyQ2xvc2U3NjgiLCJjb25zb2xlIiwibG9nIiwic3dpcGVyIiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwiYXV0b0hlaWdodCIsInNsaWRlc1BlclZpZXciLCJwYWdpbmF0aW9uIiwiZWwiLCJyZW5kZXJCdWxsZXQiLCJjbGFzc05hbWUiLCJzY3JvbGxiYXIiLCJkcmFnZ2FibGUiLCJicmVha3BvaW50cyIsImJ0blFyIiwibW9kYWxRciIsImJ0bkNsb3NlTW9kYWwiLCJjbG9zZU1vZGFsIiwiZXZlbnQiLCJpc091dHNpZGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLGVBQWUsRUFBZ0I7SUFBQSxJQUFkQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBRyxlQUFBLE9BQUFOLFFBQUE7SUFDdkMsSUFBSSxDQUFDTyxRQUFRLEdBQUdO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RXBFZ0gsS0FBSyxDQUFDckcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDcEM4QixRQUFRLENBQUNTLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNuQzJFLE9BQU8sQ0FBQ3pGLFNBQVMsQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixTQUFTNkUsVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCRixPQUFPLENBQUN6RixTQUFTLENBQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDbENXLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDMUIsU0FBUyxDQUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3hDO0FBRUFvRixhQUFhLENBQUN2RyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV3RyxVQUFVLENBQUM7O0FBRW5EO0FBQ0FGLE9BQU8sQ0FBQ3RHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDeUcsS0FBSyxFQUFLO0VBQzNDLElBQU1DLGNBQWMsR0FBRyxDQUFDRCxLQUFLLENBQUN0RSxNQUFNLENBQUNLLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztFQUNyRSxJQUFJa0UsY0FBYyxFQUFFO0lBQ2xCRixVQUFVLENBQUMsQ0FBQztFQUNkO0FBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGRyb3Bkb3duRWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5kcm9wZG93biA9IGRyb3Bkb3duRWxlbWVudDtcbiAgICB0aGlzLmRyb3Bkb3duQm9keSA9IHRoaXMuZHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1ib2R5XCIpO1xuICAgIHRoaXMuZHJvcGRvd25IZWFkID0gdGhpcy5kcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLWhlYWRcIik7XG4gICAgdGhpcy5jb3VudHJ5SXRlbXMgPSB0aGlzLmRyb3Bkb3duQm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWRyb3Bkb3duLWl0ZW1cIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuXG4gICAgdGhpcy5uYW1lU291cmNlID0gb3B0aW9ucy5uYW1lU291cmNlIHx8IFwiaW5uZXJUZXh0XCI7IC8vINC40LvQuCBcImRhdGEtbGFuZ1wiLCBcImRhdGEtdmFsdWVcIiDQuCDRgi7Qvy5cblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyb3Bkb3duSGVhZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGVEcm9wZG93bigpKTtcblxuICAgIHRoaXMuY291bnRyeUl0ZW1zLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNlbGVjdENvdW50cnkoZWxlbSkpO1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdENvdW50cnkoZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcm9wZG93bkhlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kcm9wZG93bkJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNOZXh0SXRlbSgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzUHJldkl0ZW0oKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duQm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzZWxlY3RDb3VudHJ5KGVsZW0pIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jb3VudHJ5SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd24taXRlbS1uYW1lJyk7XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICBuYW1lRWwuY2xhc3NMaXN0LnJlbW92ZShcImlzU2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuYW1lRWwgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24taXRlbS1uYW1lXCIpO1xuICAgICAgbGV0IHNlbGVjdGVkTmFtZSA9IFwiXCI7XG5cbiAgICAgIGlmICh0aGlzLm5hbWVTb3VyY2UgPT09IFwiaW5uZXJUZXh0XCIpIHtcbiAgICAgICAgc2VsZWN0ZWROYW1lID0gbmFtZUVsPy5pbm5lclRleHQ7XG4gICAgICB9IGVsc2UgaWYgKG5hbWVFbD8uZGF0YXNldCkge1xuICAgICAgICBzZWxlY3RlZE5hbWUgPSBuYW1lRWwuZGF0YXNldFt0aGlzLm5hbWVTb3VyY2VdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZEltZyA9IGVsZW0ucXVlcnlTZWxlY3RvcihcImltZ1wiKT8uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuXG4gICAgICBjb25zdCBoZWFkSW1nID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgIGNvbnN0IGhlYWROYW1lID0gdGhpcy5kcm9wZG93bkhlYWQucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1pdGVtLW5hbWVcIik7XG5cbiAgICAgIGlmIChzZWxlY3RlZE5hbWUgJiYgaGVhZE5hbWUpIHtcbiAgICAgICAgaGVhZE5hbWUuaW5uZXJUZXh0ID0gc2VsZWN0ZWROYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0ZWRJbWcgJiYgaGVhZEltZykge1xuICAgICAgICBoZWFkSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzZWxlY3RlZEltZyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgbmFtZUVsLmNsYXNzTGlzdC5hZGQoXCJpc1NlbGVjdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuXG4gIGZvY3VzTmV4dEl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPCB0aGlzLmNvdW50cnlJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4Kys7XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzUHJldkl0ZW0oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEZvY3VzSW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c0luZGV4LS07XG4gICAgICB0aGlzLmNvdW50cnlJdGVtc1t0aGlzLmN1cnJlbnRGb2N1c0luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuZHJvcGRvd25Cb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNJbmRleCA9IC0xO1xuICB9XG59XG5cbmNvbnN0IGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19jb3VudHJ5XCIpO1xuY29uc3QgaW5zdGFuY2UgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25zKTtcbmRyb3Bkb3ducy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VcblxuY29uc3QgZHJvcGRvd25MYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xhbmdcIik7XG5jb25zdCBpbnN0YW5jZUxhbmcgPSBuZXcgRHJvcGRvd24oZHJvcGRvd25MYW5nLCB7bmFtZVNvdXJjZTogXCJsYW5nXCJ9KTtcbmRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlID0gaW5zdGFuY2VMYW5nO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3ducy5kcm9wZG93bkluc3RhbmNlO1xuICBpZiAoIWRyb3Bkb3ducy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZHJvcGRvd25JbnN0YW5jZSA9IGRyb3Bkb3duTGFuZy5kcm9wZG93bkluc3RhbmNlO1xuICBpZiAoIWRyb3Bkb3duTGFuZy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBkcm9wZG93bkluc3RhbmNlPy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBkaXNhYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2Rpc2FiaWxpdHlcIik7XG5jb25zdCBhdmFpbGFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5XCIpO1xuY29uc3QgYXZhaWxhYmlsaXR5Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhaWxhYmlsaXR5X2Nsb3NlXCIpO1xuXG5kaXNhYmlsaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGF2YWlsYWJpbGl0eS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG59KTtcblxuYXZhaWxhYmlsaXR5Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbn0pO1xuXG5hdmFpbGFiaWxpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0YfRgtC+INC60LvQuNC60L3Rg9C70Lgg0LjQvNC10L3QvdC+INCyIC5oZWFkZXJfX2F2YWlsYWJpbGl0eSwg0LAg0L3QtSDQstC90YPRgtGA0YwgLmhlYWRlcl9fYXZhaWxhYmlsaXR5X3dyYXBcbiAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19hdmFpbGFiaWxpdHlfd3JhcCcpKSB7XG4gICAgYXZhaWxhYmlsaXR5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICB9XG59KTtcblxuY29uc3QgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbmFjY29yZGlvbnMuZm9yRWFjaChpdGVtICA9PiB7XG4gIGNvbnN0IGJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1idG4nKTtcbiAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmpzLWFjYy1ib2R5Jyk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlzT3BlbiA9IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJylcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIlxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxuICAgIH1cbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldEhlaWdodENvbnRlbnRBY2MoKSB7XG4gIGNvbnN0IGFjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hY2MnKTtcbiAgYWNjLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtYWNjLWJvZHlcIik7XG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiXG4gICAgfVxuICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufSlcblxuY29uc3QgZm9udFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250LXJhbmdlXCIpO1xuY29uc3QgY29udHJhc3RSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJhc3RcIilcbmNvbnN0IHNwYWNpbmdSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV0dGVyLXNwYWNpbmdcIik7XG5cbmZ1bmN0aW9uIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoaW5wdXQpIHtcbiAgY29uc3QgZmlsbCA9IGlucHV0Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IG1pbiA9ICtpbnB1dC5taW47XG4gIGNvbnN0IG1heCA9ICtpbnB1dC5tYXg7XG4gIGNvbnN0IHZhbHVlID0gK2lucHV0LnZhbHVlO1xuICBjb25zdCBwZXJjZW50ID0gKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDA7XG5cbiAgaWYgKGZpbGwpIHtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVscyA9IGlucHV0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1yYW5nZV9sYWJlbHMgc3BhblwiKTtcbiAgaWYgKGxhYmVscykge1xuICAgIGNvbnN0IHN0ZXAgPSAobWF4IC0gbWluKSAvIChsYWJlbHMubGVuZ3RoIC0gMSk7XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgoc3BhbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRocmVzaG9sZCA9IG1pbiArIGluZGV4ICogc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmlmIChmb250UmFuZ2UpIHtcbiAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhmb250UmFuZ2UpO1xuICBmb250UmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IFwiMTZcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZm9udC1zaXplXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHt2YWx1ZX1weGA7XG4gICAgfVxuICAgIHVwZGF0ZVJhbmdlUHJvZ3Jlc3MoZS50YXJnZXQpO1xuICAgIGdldEhlaWdodENvbnRlbnRBY2MoKVxuICB9KTtcbn1cblxuaWYgKGNvbnRyYXN0UmFuZ2UpIHtcbiAgdXBkYXRlUmFuZ2VQcm9ncmVzcyhjb250cmFzdFJhbmdlKTtcbiAgY29udHJhc3RSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgfSlcbn1cblxuaWYgKHNwYWNpbmdSYW5nZSkge1xuICB1cGRhdGVSYW5nZVByb2dyZXNzKHNwYWNpbmdSYW5nZSk7XG4gIHNwYWNpbmdSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImxldHRlci1zcGFjaW5nXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gYCR7TnVtYmVyKHZhbHVlKSAqIDJ9cHhgO1xuICAgIH1cbiAgICB1cGRhdGVSYW5nZVByb2dyZXNzKGUudGFyZ2V0KTtcbiAgICBnZXRIZWlnaHRDb250ZW50QWNjKClcbiAgfSlcbn1cblxuY29uc3QgdGhlbWVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidGhlbWVcIl0nKTtcblxuZnVuY3Rpb24gYXBwbHlUaGVtZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwiZGFya1wiKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibGlnaHRcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImR1b1wiKSB7XG4gICAgY29uc3QgaXNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGlmIChpc0RhcmspIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH1cbn1cblxudGhlbWVJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoKSA9PiBhcHBseVRoZW1lKGlucHV0LnZhbHVlKSk7XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRoZW1lXCJdOmNoZWNrZWQnKVxuICAgIGFwcGx5VGhlbWUodGhlbWUudmFsdWUpXG4gIH1cbn0pXG5cbmNvbnN0IGxlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwibGluZUhlaWdodFwiXScpXG5cbmZ1bmN0aW9uIGFwcGx5TGVhZGluZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibWVkaXVtXCIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVIZWlnaHRCaWdcIilcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbmVIZWlnaHRNZWRpdW1cIilcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJiaWdcIikge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodEJpZ1wiKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGluZUhlaWdodE1lZGl1bVwiKVxuICB9XG4gIGdldEhlaWdodENvbnRlbnRBY2MoKVxufVxuXG5sZWFkaW5nLmZvckVhY2goaXRlbSA9PiB7XG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBhcHBseUxlYWRpbmcoaXRlbS52YWx1ZSkpO1xufSlcblxuY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnVfYnRuXCIpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYnVyZ2VyLW1lbnVcIilcbmNvbnN0IGJ1cmdlck1lbnU3NjggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1iaWdcIik7XG5jb25zdCBidXJnZXJDbG9zZTc2OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJpZ19jbG9zZVwiKTtcbmJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9IGVsc2Uge1xuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICB9XG4gIGlmIChidXJnZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgfVxufSlcblxuYnVyZ2VyQ2xvc2U3NjguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coMSlcbiAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgYnVyZ2VyTWVudTc2OC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4ICYmIGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBidXJnZXJNZW51NzY4LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gIH1cbn0pXG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIud2h5X19zd2lwZXJcIiwge1xuICBzcGFjZUJldHdlZW46IDIwLFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi53aHlfX3BhZ2luYXRpb25cIixcbiAgICByZW5kZXJCdWxsZXQ6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9IHdoeV9fYnVsbGV0XCI+PC9zcGFuPmA7XG4gICAgfVxuICB9LFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIud2h5X19zY3JvbGxiYXJcIixcbiAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgYnRuUXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVfX3FyXCIpO1xuY29uc3QgbW9kYWxRciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXItbW9kYWxcIik7XG5jb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jdXN0b21fX2Nsb3NlXCIpO1xuXG5idG5Rci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpO1xuICBtb2RhbFFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgbW9kYWxRci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xufVxuXG5idG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuLy8g8J+RiSDQl9Cw0LrRgNGL0YLQuNC1INC/0L4g0LrQu9C40LrRgyDQstC90LUg0LzQvtC00LDQu9C60Lhcbm1vZGFsUXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBjb25zdCBpc091dHNpZGVDbGljayA9ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi5tb2RhbC1jdXN0b21fX2RpYWxvZ1wiKTtcbiAgaWYgKGlzT3V0c2lkZUNsaWNrKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59KTtcblxuXG4iXX0=
