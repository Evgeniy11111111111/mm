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