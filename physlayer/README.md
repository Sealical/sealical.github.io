# PhysLayer project page

Published at https://sealical.github.io/physlayer/.

This is a static HTML page. Serve the repository root with `python3 -m http.server 8766` and open `/physlayer/`. Shared presentation and interactions for the two ICME projects live in `../project-assets/research.css` and `../project-assets/research.js`. Existing PhysCodeBench and ST-Mem pages have their own assets and are unaffected.

## Authoritative content

The author supplied `/data1/xietian/PhysLayer_paper/ICME_2026_Template`. Page content comes from `icme2026_template_anonymized.tex`, its matching six-page PDF, and the five-page `appendix.pdf`. Despite the historical filename, the paper contains the named author block. Zili Yi is the sole corresponding author, as printed in this manuscript.

The title, author order, and ICME 2026 acceptance were checked against https://arxiv.org/abs/2604.23574. Paper and appendix downloads are unchanged copies of the supplied PDFs. This work does not modify either paper or prepare a new arXiv submission.

## Figures and examples

| Web figure | Source |
| --- | --- |
| `overview` | `teaser_image_v4.png`, Figure 1 |
| `framework` | `mm_framework_v2.png`, Figure 2 |
| `comparison` | `mm_qualitative_v2.png`, Figure 3 |

The four example panels use rectangular crops from Figure 1: one input and four generated temporal samples each. These are paper stills, not embedded videos. Original frame order and aspect ratios are retained. Every complete figure can be enlarged; `*-full.webp` keeps the source pixel dimensions. Transparent source images are composited onto white before WebP encoding so black labels remain legible. Crop coordinates and original source hashes are in `assets/sources.json`. `social-preview.png` is a screenshot of a site-styled sharing card using these same frames, with no generated scientific imagery.

## Results and maintenance

- `assets/results.json` includes all three main-paper tables, metric directions, missing values, and source table numbers. The HTML tables and CSV reflect the same data.
- Missing PhysGen alignment values stay missing. FID and Motion-FID are lower-is-better. Percentage improvements are relative to the named baseline, not percentage-point gains.
- Describe the method as layered **2.5D rigid-body dynamics**, with depth displacement and perspective scaling. Do not call it unrestricted full-3D simulation. Collisions occur within layers and the camera is fixed.
- Runtime is 100–105 seconds after initialization on an A6000 for 16 sampled output frames; 160 simulator steps at 30 Hz are distinct from output-frame sampling.
- Update visible authors, scholarly metadata, JSON-LD, BibTeX, and the PDF together if authorship changes.

Keyboard users can switch tabs with arrow keys, Home, and End, close enlarged figures with Escape, and scroll result tables. Without JavaScript, all example/result panels are visible and image/PDF/BibTeX downloads still work. No external fonts, analytics, framework, or model inference are required.
