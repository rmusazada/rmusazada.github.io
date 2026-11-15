/**
 * Shared page behavior for the portfolio.
 * Runs on every page: mobile menu and the footer year.
 */
(function () {
  "use strict";

  const nav = document.querySelector("#site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const year = document.querySelector("#year");

  /* Keep the copyright year current without editing the HTML. */
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!nav || !toggle) {
    return;
  }

  const label = toggle.querySelector(".sr-only");

  function setMenuOpen(isOpen) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (label) {
      label.textContent = isOpen ? "Close menu" : "Open menu";
    }
  }

  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  /*
   * Close after the click, not during it. Hiding the menu in the same
   * click cancels navigation on small screens.
   */
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      window.setTimeout(function () {
        setMenuOpen(false);
      }, 0);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });
})();
