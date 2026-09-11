(() => {
  "use strict";
  const select = document.getElementById("result-metric");
  const container = document.getElementById("result-bars");
  const payload = document.getElementById("benchmark-data");
  const note = document.getElementById("chart-note");
  const heading = document.getElementById("chart-title");
  const status = document.getElementById("chart-status");
  if (!select || !container || !payload || !note || !heading || !status) return;

  let data;
  try { data = JSON.parse(payload.textContent); } catch { return; }
  if (!Array.isArray(data.models) || !Array.isArray(data.metrics)) return;

  const labels = { open: "Open", closed: "Closed", human: "Reference" };
  const names = { avg: "Macro-average accuracy", acc: "Micro-accuracy" };
  const render = () => {
    const metric = data.metrics.find((entry) => entry.id === select.value);
    if (!metric) return;
    const rows = data.models.map((model, i) => ({ ...model, score: metric.values[i] }));
    rows.sort((a, b) => b.score - a.score);
    const fragment = document.createDocumentFragment();
    for (const row of rows) {
      const item = document.createElement("li");
      item.className = "bar-row " + row.group;
      const name = document.createElement("span");
      name.className = "bar-name";
      name.append(document.createTextNode(row.name));
      const group = document.createElement("small");
      group.textContent = labels[row.group];
      name.append(group);
      const track = document.createElement("span");
      track.className = "bar-track";
      track.setAttribute("aria-hidden", "true");
      const fill = document.createElement("span");
      fill.className = "bar-fill";
      fill.style.display = "block";
      fill.style.setProperty("--score", row.score + "%");
      track.append(fill);
      const score = document.createElement("span");
      score.className = "bar-value";
      score.textContent = row.score.toFixed(1) + "%";
      item.append(name, track, score);
      fragment.append(item);
    }
    container.replaceChildren(fragment);
    const metricName = names[metric.id] || metric.name;
    heading.textContent = metricName;
    const human = rows.find((row) => row.group === "human");
    const best = rows.find((row) => row.group !== "human");
    const gap = (human.score - best.score).toFixed(1);
    note.textContent = best.name + ": " + best.score.toFixed(1) + "% · Human reference: " +
      human.score.toFixed(1) + "% · Gap: " + gap + " percentage points.";
    status.textContent = "Showing " + metricName + ". " + note.textContent;
  };
  select.addEventListener("change", render);
  document.getElementById("metric-control").hidden = false;
})();
