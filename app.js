/* GPS Logger landing page behaviour. Pure vanilla JS, no dependencies. */
(() => {
  "use strict";

  /* ── Google Play link — FINALIZE HERE ───────────────────────────────────────
     This is the app-specific Play URL. When the listing is live, confirm/replace
     this single value and every CTA button updates automatically. The same URL
     is also hard-coded as each button's href so links work without JS too. */
  const PLAY_URL = "https://play.google.com/store/apps/details?id=com.northforceapps.gpslogger";
  const YT_ID = "NSOkPpQ0TaY";
  const EMAIL_USER = "northforceapps";
  const EMAIL_HOST = "protonmail.com";

  /* apply Play URL to every [data-play] link */
  document.querySelectorAll("[data-play]").forEach((a) => { a.href = PLAY_URL; });

  /* sticky-header shrink on scroll */
  const header = document.querySelector(".header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* mobile nav toggle */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navlinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* scroll-reveal */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* click-to-load YouTube facade (keeps the page fast; no iframe until asked) */
  const vid = document.querySelector("[data-yt]");
  if (vid) {
    const load = () => {
      const id = vid.getAttribute("data-yt") || YT_ID;
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
      frame.title = "GPS Logger — 30 second tour";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      vid.innerHTML = "";
      vid.appendChild(frame);
    };
    vid.querySelector(".video-play")?.addEventListener("click", load);
  }

  /* email obfuscation */
  const addr = `${EMAIL_USER}@${EMAIL_HOST}`;
  ["support-email-home", "support-email-privacy"].forEach((id) => {
    const t = document.getElementById(id);
    if (!t) return;
    const a = document.createElement("a");
    a.href = `mailto:${addr}`;
    a.textContent = addr;
    a.className = "support-link";
    t.replaceWith(a);
  });
})();
