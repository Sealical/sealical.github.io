/* Progressive enhancement: all research and navigation work without JavaScript. */
(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const narrowScreen = window.matchMedia("(max-width: 650px)");
  const closeMenu = () => {
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
    menu.querySelector("span").textContent = "+";
  };
  const syncMenu = () => {
    menu.hidden = !narrowScreen.matches;
    closeMenu();
  };
  syncMenu();
  narrowScreen.addEventListener("change", syncMenu);
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    menu.querySelector("span").textContent = open ? "−" : "+";
  });
  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    closeMenu();
    if (narrowScreen.matches && link.hash) {
      const destination = document.getElementById(link.hash.slice(1));
      if (destination) {
        destination.tabIndex = -1;
        destination.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  const filters = document.querySelector(".filters");
  const filterButtons = [...filters.querySelectorAll("button")];
  const publications = [...document.querySelectorAll(".publication")];
  const status = document.querySelector("#filter-status");
  const applyFilter = (topic) => {
    let visible = 0;
    publications.forEach((publication) => {
      const show =
        topic === "all" ||
        publication.dataset.topics.split(" ").includes(topic);
      publication.hidden = !show;
      if (show) visible++;
    });
    filterButtons.forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === topic),
      ),
    );
    const label = filterButtons.find(
      (button) => button.dataset.filter === topic,
    ).textContent;
    status.textContent = `${visible} publications shown. ${label}.`;
  };
  filters.hidden = false;
  filterButtons.forEach((button) =>
    button.addEventListener("click", () => applyFilter(button.dataset.filter)),
  );
  document
    .querySelectorAll("[data-topic]")
    .forEach((link) =>
      link.addEventListener("click", () => applyFilter(link.dataset.topic)),
    );

  if ("IntersectionObserver" in window) {
    const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          sectionLinks.forEach((link) => {
            if (link.hash === `#${entry.target.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-12% 0px -68% 0px", threshold: 0 },
    );
    sectionLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();
