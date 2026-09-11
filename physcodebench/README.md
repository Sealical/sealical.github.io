# PhysCodeBench project page

Project URL: https://sealical.github.io/physcodebench/

This is a static research project page. Serve the repository root with `python3 -m http.server 8766` and open `/physcodebench/`. No package installation or build step is needed.

## Content

- `index.html`: authors, abstract, benchmark description, evaluation protocol with physical-assertion examples, method, simulation comparisons, experimental analysis, and BibTeX.
- `project.css`: responsive layouts and typography. Fonts are shared with the personal homepage and served locally.
- `project.js`: accessible simulation and experiment tabs, comparison playback, table sorting, and citation copying. All videos, results, and paper links remain accessible without JavaScript.
- `assets/physcodebench.pdf`: 30-page single-column revised preprint with the technical appendix and public author list, using the first arXiv version's LNCS layout.
- `assets/results.json` and `assets/results.csv`: values transcribed from Table 1 of the revised manuscript. Keep these files and the HTML table together when updating results.
- `assets/analysis.json`: domain, difficulty, ablation, cross-engine, conservation, and human-evaluation tables extracted from the main paper and appendix. The page displays selected comparisons with the associated evaluation setting.

Code and dataset links are intentionally absent until a public release is available. The arXiv link points to the existing paper identifier; update the version note once the replacement is public.

## Media

All figures and simulation videos are supplied by the authors. Scientific figure content is unchanged; website copies are encoded as WebP. Videos are compressed to H.264 at 960 × 480 and 30 FPS for delivery, preserving the original aspect ratio, timeline, and full clip duration to the nearest output frame.

| Web asset          | Source figure file |
| ------------------ | ------------------ |
| `overview.webp`    | `fig1.png`         |
| `curation.webp`    | `fig3.png`         |
| `smrf.webp`        | `fig4.png`         |
| `qualitative.webp` | `fig5.png`         |

Cloth, rain, and duck comparisons use the original qualitative simulation outputs. Video descriptions provide text alternatives for these silent clips. The full-resolution overview is shared with the homepage. The favicon and social sharing image use original site typography and geometry.

## Evaluation conventions

The total score is **Code + Visual**, each out of 50. Physical correctness is a separate assertion pass rate. Sorting keeps the expert oracle at the bottom, apart from evaluated models. Results are those reported by the manuscript; the page does not perform benchmark inference or claim to independently reproduce the experiments.

Cross-engine adaptation uses 250 additional API-mapping examples; its retention percentage is relative to the Genesis score on the same 120 instructions. Conservation diagnostics are conditional on execution and scenario applicability. Human ratings use 40 prompts for which all compared systems produced executable outputs. The author confirmed the current manuscript's results as empirically measured on September 11, 2026.
