# EgoMonth project page

Published at https://sealical.github.io/egomonth/.

The page is plain HTML with self-hosted fonts and paper assets. Serve the repository root using `python3 -m http.server 8766`, then visit `/egomonth/`. Shared navigation, tabs, figure enlargement, and citation copying use `../project-assets/research.css` and `research.js`. The EgoMonth theme and result selector live in `assets/page.css` and `assets/page.js`; existing project files are unchanged.

## Authoritative version

Content, figures, author roles, and results follow [arXiv:2608.13113v1](https://arxiv.org/abs/2608.13113v1), submitted August 13, 2026. The downloaded TeX source, HTML, and actual PDF were checked together. The 21-page PDF includes the appendices and is copied without modification to `assets/egomonth.pdf`.

The user-supplied `/data1/xietian/tianxie_projects/egoMonth_paper.zip` was extracted to the adjacent `egoMonth_paper/` directory, preserving its files and recovering UTF-8 Chinese filenames. It contains an earlier anonymous April draft: 17 tasks, 1,508 QA pairs, and six model results. This differs materially from the public v1: 14 tasks, 1,443 QA pairs, and twelve models. After raising the version choice with the user, the project page uses the recommended public version; no figures or results from the earlier draft are mixed into it. The original ZIP and extracted manuscripts remain unchanged. Nothing from the unpublished draft is included in the website.

The paper remains a **preprint**. Its NeurIPS template does not imply conference acceptance.

## Authorship

All 18 authors appear in the PDF's order. Weitao Chen and Jiaxin Hu share equal contribution. Lanjun Wang and Zili Yi are the corresponding authors. Affiliations follow the actual PDF: Nanjing University, Huawei Technologies Co., Ltd., and Tianjin University. The paper's `Hu Jiaxin` and `Xie Tianyidan` are displayed as `Jiaxin Hu` and `Tianyidan Xie`, following the user's previously confirmed English spellings. No roles are imported from other projects. `assets/authors.json` records these conventions.

Keep visible authors, scholarly metadata, JSON-LD, BibTeX, and `authors.json` in sync when updating authorship. The downloaded PDF retains its original spelling and bytes.

## Figures

| Web figure | arXiv source | Paper location |
| --- | --- | --- |
| `overview` | `teaser.png` | Figure 1 |
| `single-video` | `QA1.png` | Figure 2, upper example |
| `cross-video` | `QA2.png` | Figure 2, lower example |
| `dataset-distribution` | `data_static.png` | Figure 3(a) |
| `task-distribution` | `task_distribution_final.png` | Figure 3(b) |
| `activity-distribution` | `sunburst_activity_new.png` | Figure 4 |

Images preserve the complete original figure, frame order, and aspect ratio. Transparency is composited on white. Standard WebPs fit within 2,000 pixels; `*-full.webp` retains original dimensions. The site contains paper stills, not video playback or model inference. No research imagery is synthesized. `social-preview.png` renders a site-designed HTML sharing card with the original overview figure. Provenance and source hashes are in `assets/sources.json`.

## Results and interactions

`assets/results.json` contains all 16 metric rows from Table 3 for the 12 models and human reference, including frame/parameter configurations. It is mirrored in the full HTML table, downloadable CSV, and embedded JSON that powers the metric selector. The initial macro-average chart is server-rendered HTML and remains visible without JavaScript. Update all these representations together. All tabs and full tables remain available without JavaScript.

- Accuracy is higher-is-better. The random-chance reference is 25% for four-option questions.
- Avg and Acc are the aggregate rows **as reported in the paper**, not recalculated from rounded task values.
- Inputs differ across models; comparisons do not establish a controlled frame-count or parameter-size effect.
- The human reference averages three independent trained annotators with unrestricted viewing and replay. It is labeled separately from models.
- Headline gaps use percentage points, not relative percentages.
- The 14 task counts and percentages follow Table 5. `task-distribution.csv` includes the full distribution.
- 20–120 days is the recording span per participant, not continuous 24-hour footage. The corpus totals 18,072 minutes across 738 clips.

The page does not invent a code repository or public dataset download. Research access links use the contact emails printed in the paper and accurately describe its tiered research-only access policy. They do not send mail automatically. Dataset access is separate from the downloadable experimental result summaries.

## Validation

Before publication, compare results independently with the TeX tables, verify author roles against the PDF, and check all asset/fragment links. Browser checks cover 320–1920 px, all result metrics and tabs, native select keyboard interaction, menu behavior, full-table scrolling, modal focus, citation copying, reduced motion, and a no-JavaScript fallback. Avoid changing shared project assets unless those changes are also needed by the existing projects.
