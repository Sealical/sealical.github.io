(() => {
  "use strict";
  document.documentElement.classList.add("js");

  const tabs = [...document.querySelectorAll("[data-demo]")];
  const panels = [...document.querySelectorAll(".demo-panel")];
  const tabList = document.querySelector(".demo-tabs");
  const pausePanel = (panel) => {
    panel.querySelectorAll("video").forEach((video) => video.pause());
    const button = panel.querySelector(".play-comparison");
    if (button) button.textContent = "Play comparison ↗";
  };
  function selectDemo(name, focus = false) {
    tabs.forEach((tab) => {
      const selected = tab.dataset.demo === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    panels.forEach((panel) => {
      const selected = panel.id === `demo-${name}`;
      if (!selected) pausePanel(panel);
      panel.hidden = !selected;
    });
  }
  if (tabList && tabs.length && panels.length) {
    tabList.hidden = false;
    tabList.setAttribute("role", "tablist");
    tabs.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", `demo-${tab.dataset.demo}`);
      tab.addEventListener("click", () => selectDemo(tab.dataset.demo));
      tab.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft")
          next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          selectDemo(tabs[next].dataset.demo, true);
        }
      });
    });
    panels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute(
        "aria-labelledby",
        `tab-${panel.id.replace("demo-", "")}`,
      );
      panel.tabIndex = 0;
    });
    selectDemo("cloth");
  }

  panels.forEach((panel) => {
    const button = panel.querySelector(".play-comparison");
    const videos = [...panel.querySelectorAll("video")];
    if (!button || !videos.length) return;
    button.hidden = false;
    const updateLabel = () => {
      button.textContent = videos.some((video) => !video.paused && !video.ended)
        ? "Pause comparison Ⅱ"
        : "Play comparison ↗";
    };
    videos.forEach((video) => {
      ["play", "pause", "ended"].forEach((event) =>
        video.addEventListener(event, updateLabel),
      );
    });
    button.addEventListener("click", async () => {
      if (videos.some((video) => !video.paused)) {
        pausePanel(panel);
        return;
      }
      button.disabled = true;
      try {
        videos.forEach((video) => {
          video.currentTime = 0;
        });
        const played = await Promise.allSettled(
          videos.map((video) => video.play()),
        );
        if (panel.hidden) pausePanel(panel);
        if (played.some((result) => result.status === "rejected")) {
          pausePanel(panel);
          button.textContent = "Use the video controls below";
        }
      } finally {
        button.disabled = false;
      }
    });
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) pausePanel(entry.target);
      });
    });
    panels.forEach((panel) => observer.observe(panel));
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) panels.forEach(pausePanel);
  });

  const sortControls = document.querySelector(".sort-controls");
  const tableBody = document.querySelector(".results-table tbody");
  const sortStatus = document.querySelector("#sort-status");
  function sortResults(metric, announce = true) {
    const rows = [...tableBody.querySelectorAll("tr:not(.oracle)")];
    const oracle = tableBody.querySelector(".oracle");
    rows.sort((a, b) => Number(b.dataset[metric]) - Number(a.dataset[metric]));
    rows.forEach((row) => tableBody.append(row));
    if (oracle) tableBody.append(oracle);
    document.querySelectorAll("[data-sort]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.sort === metric),
      );
    });
    document.querySelectorAll("[data-column]").forEach((heading) => {
      if (heading.dataset.column === metric)
        heading.setAttribute("aria-sort", "descending");
      else heading.removeAttribute("aria-sort");
    });
    if (announce)
      sortStatus.textContent = `Models sorted by ${metric === "total" ? "total score" : "physical-assertion pass rate"}, highest first. Expert references remain at the bottom.`;
  }
  if (sortControls && tableBody) {
    sortControls.hidden = false;
    sortControls.querySelectorAll("[data-sort]").forEach((button) => {
      button.addEventListener("click", () => sortResults(button.dataset.sort));
    });
    sortResults("total", false);
  }

  const analysisTabs = [...document.querySelectorAll("[data-analysis]")];
  const analysisPanels = [...document.querySelectorAll(".analysis-panel")];
  const analysisTabList = document.querySelector(".analysis-tabs");
  const selectAnalysis = (name, focus = false) => {
    analysisTabs.forEach((tab) => {
      const selected = tab.dataset.analysis === name;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    analysisPanels.forEach((panel) => {
      panel.hidden = panel.id !== `analysis-${name}`;
    });
  };
  if (analysisTabList && analysisTabs.length && analysisPanels.length) {
    analysisTabList.hidden = false;
    analysisTabList.setAttribute("role", "tablist");
    analysisTabs.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", `analysis-${tab.dataset.analysis}`);
      tab.addEventListener("click", () => selectAnalysis(tab.dataset.analysis));
      tab.addEventListener("keydown", (event) => {
        let next;
        if (event.key === "ArrowRight")
          next = (index + 1) % analysisTabs.length;
        if (event.key === "ArrowLeft")
          next = (index - 1 + analysisTabs.length) % analysisTabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = analysisTabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          selectAnalysis(analysisTabs[next].dataset.analysis, true);
        }
      });
    });
    analysisPanels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute(
        "aria-labelledby",
        `analysis-tab-${panel.id.replace("analysis-", "")}`,
      );
      panel.tabIndex = 0;
    });
    selectAnalysis("domain");
  }

  const copyButton = document.querySelector(".copy-button");
  const bibtex = document.querySelector("#bibtex");
  const copyStatus = document.querySelector(".copy-status");
  if (copyButton && bibtex) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(bibtex.textContent);
        copyStatus.textContent = "BibTeX copied.";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(bibtex);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        copyStatus.textContent =
          "Citation selected. Press Ctrl+C or ⌘C to copy.";
      }
    });
  }
})();
