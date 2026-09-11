(() => {
  "use strict";

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menu && nav) {
    menu.hidden = false;
    nav.classList.add("is-collapsible");
    const closeMenu = () => {
      nav.classList.remove("is-open");
      menu.setAttribute("aria-expanded", "false");
    };
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".site-header")) closeMenu();
    });
    const sections = [...document.querySelectorAll("main > [id]")];
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          for (const link of links) {
            if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          }
        }
      }, { rootMargin: "-15% 0px -60% 0px" });
      sections.forEach((section) => observer.observe(section));
      const hero = document.querySelector(".hero");
      if (hero) observer.observe(hero);
    }
  }

  for (const group of document.querySelectorAll("[data-tabs]")) {
    const tablist = group.querySelector("[data-tab-list]");
    if (!tablist) continue;
    const tabs = [...tablist.querySelectorAll("[data-panel]")];
    const panels = tabs.map((tab) => document.getElementById(tab.dataset.panel));
    if (!tabs.length || panels.some((panel) => !panel)) continue;
    tablist.setAttribute("role", "tablist");
    tabs.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", panels[index].id);
      panels[index].setAttribute("role", "tabpanel");
      panels[index].setAttribute("aria-labelledby", tab.id);
      panels[index].tabIndex = 0;
    });
    const activate = (index, focus = false) => {
      tabs.forEach((tab, i) => {
        const selected = index === i;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[i].hidden = !selected;
      });
      if (focus) tabs[index].focus();
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(index));
      tab.addEventListener("keydown", (event) => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(next, true);
      });
    });
    activate(0);
    tablist.hidden = false;
  }

  const dialog = document.querySelector(".image-dialog");
  if (dialog && typeof dialog.showModal === "function") {
    const title = dialog.querySelector("h2");
    const image = dialog.querySelector("img");
    const original = dialog.querySelector(".original-link");
    let previousFocus;
    for (const link of document.querySelectorAll("a[data-zoom]")) {
      link.addEventListener("click", (event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        previousFocus = document.activeElement;
        title.textContent = link.dataset.zoom;
        image.alt = link.querySelector("img")?.alt || link.dataset.zoom;
        image.src = link.href;
        original.href = link.href;
        dialog.showModal();
        document.body.classList.add("dialog-open");
      });
    }
    dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      previousFocus?.focus({ preventScroll: true });
    });
  }

  const copy = document.querySelector(".copy-button");
  const code = document.getElementById("bibtex");
  const status = document.querySelector(".copy-status");
  if (copy && code && status) {
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      let success = false;
      try {
        await navigator.clipboard.writeText(code.textContent);
        success = true;
      } catch {
        const text = document.createElement("textarea");
        text.value = code.textContent;
        text.style.position = "fixed";
        text.style.opacity = "0";
        document.body.append(text);
        text.select();
        try { success = document.execCommand("copy"); } catch { /* Use the download link below. */ }
        text.remove();
        copy.focus({ preventScroll: true });
      }
      status.textContent = success ? "BibTeX copied." : "Please select the citation below or download the .bib file.";
    });
  }
})();
