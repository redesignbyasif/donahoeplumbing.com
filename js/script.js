/* Donahoe Plumbing — interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var menuToggle = document.getElementById("menuToggle");
  var menuClose = document.getElementById("menuClose");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuScrim = document.getElementById("menuScrim");
  var backTop = document.getElementById("backTop");
  var yearEl = document.getElementById("year");

  /* Year */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Header shadow + back-to-top visibility */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (backTop) backTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    if (menuScrim) menuScrim.classList.add("show");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    if (menuClose) menuClose.focus();
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    if (menuScrim) menuScrim.classList.remove("show");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    if (menuToggle) menuToggle.focus();
  }
  if (menuToggle) menuToggle.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (menuScrim) menuScrim.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("open")) closeMenu();
  });
  /* Close menu on link click */
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        if (menuScrim) menuScrim.classList.remove("show");
        document.body.classList.remove("menu-open");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* FAQ accordion (one open at a time) */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      /* close all */
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        var ob = other.querySelector(".faq-question");
        var oa = other.querySelector(".faq-answer");
        if (ob) ob.setAttribute("aria-expanded", "false");
        if (oa) oa.style.maxHeight = "0px";
      });
      /* open clicked */
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* Back to top */
  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Active nav highlight */
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = [];
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.charAt(0) === "#") {
      var sec = document.querySelector(href);
      if (sec) sections.push({ link: link, section: sec });
    }
  });
  if ("IntersectionObserver" in window && sections.length) {
    var navIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.style.color = ""; });
            var match = sections.find(function (s) { return s.section === entry.target; });
            if (match) match.link.style.color = "var(--teal-dark)";
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (s) { navIO.observe(s.section); });
  }
})();
