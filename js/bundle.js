(() => {
  // <stdin>
  (function() {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      let menu = document.getElementById("nav-dropdown-menu");
      const menu_btn = document.getElementById("nav-dropdown-button");
      menu_btn.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("hidden");
        window.addEventListener("click", () => {
        });
        window.addEventListener("scroll", () => {
        });
      });
    });
  })();
  (function() {
    "use strict";
    const DEFAULT_THEME = "dark";
    const getInitialTheme = () => {
      const cached = localStorage.getItem("color-scheme");
      if (cached === "light" || cached === "dark") {
        return cached;
      }
      return DEFAULT_THEME;
    };
    const applyTheme = (theme) => {
      document.documentElement.setAttribute("color-scheme", theme);
    };
    const toggle = (state) => state === "light" ? "dark" : "light";
    const toggleTheme = () => {
      const next = toggle(getInitialTheme());
      localStorage.setItem("color-scheme", next);
      applyTheme(next);
    };
    window.addEventListener("DOMContentLoaded", () => {
      applyTheme(getInitialTheme());
      requestAnimationFrame(() => document.body.classList.remove("notransition"));
      const switcher = document.getElementById("theme-switcher");
      switcher.addEventListener("click", (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });
  })();
})();
