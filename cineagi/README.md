# CineAGI project page

Published at https://sealical.github.io/cineagi/.

This is a static HTML page. Serve the repository root with `python3 -m http.server 8766` and open `/cineagi/`. Shared presentation and interactions for the two ICME projects live in `../project-assets/research.css` and `../project-assets/research.js`.

## Authoritative content and authorship

The author supplied `/data1/xietian/CineAGI_paper/CineAGI_ICME_2026`; the manuscript is in its `ICME_2026_Template/` subdirectory. Content comes from `icme2026_template_anonymized.tex`, the matching six-page PDF, and the nine-page appendix. The published PDF at https://arxiv.org/pdf/2604.23579 was checked on September 11, 2026 and agrees with the local manuscript's author block:

Tianyidan Xie, Mingjie Wang, Qiang Tang, Feixuan Liu, Rui Ma, Lanjun Wang, Zili Yi. Zili Yi is the sole corresponding author. The arXiv abstract-page metadata currently lists different authors; the project page, scholarly metadata, and BibTeX follow the actual paper PDF and supplied source. Do not copy the abstract-page author list over this one without author confirmation.

Paper and appendix downloads are unchanged copies of the supplied PDFs. This work does not modify either paper or update arXiv metadata.

## Figures and examples

| Web figure | Source |
| --- | --- |
| `challenges` | `teaser.png`, Figure 1 (available as an asset) |
| `framework` | `framework.png`, Figure 2 |
| `comparison` | `qualitative.png`, Figure 3 |
| `character-integration` | `ablation_face.jpg`, Figure 4 |

The two story panels show rectangular crops of the upper half of Figure 3, preserving all four temporal samples per scene and their on-frame subtitles. Story descriptions are concise paraphrases of the original figure's prompts. These are paper stills, not video playback. The complete comparison remains available alongside its baseline rows. Crop coordinates and original source hashes are recorded in `assets/sources.json`.

Images retain their original aspect ratios; `*-full.webp` keeps the original pixel dimensions. The sharing card uses the same author-supplied result frames and site typography. No scientific output is synthesized for the website.

## Results and maintenance

- `assets/results.json` holds the three main-paper tables, metric directions, missing values, and source table numbers. CSV and visible HTML contain the same values.
- Automatic results use VBench metrics and a 100-prompt, five-genre setting, with scores averaged over the two baseline-generation strategies described in the paper.
- Subject consistency in the automatic evaluation and character consistency in the human study are separate metrics. Human evaluation uses 20 participants and a 1–5 rating scale. Unsupported baseline audio remains missing, not zero.
- The 40.0% and 28.7% headlines are relative improvements against Hunyuan, on overall consistency and human character-consistency rating respectively.
- Runtime is 11.3 minutes per 5.375-second scene on an A100 in the reported setting. Do not imply real-time or demonstrated feature-length production.
- Update authors, affiliations, scholarly metadata, JSON-LD, BibTeX, and paper links together if the manuscript changes.

Tabs support arrow keys, Home, and End. Enlarged figures support Escape and return focus to their opener. All content remains available without JavaScript; PDFs, images, result files, and the `.bib` file remain ordinary links. No third-party runtime, external font service, analytics, or inference endpoint is required.
