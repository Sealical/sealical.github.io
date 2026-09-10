# Tianyidan Xie — personal website

Academic and industry research homepage at https://sealical.github.io/.

The site is plain HTML, CSS, and JavaScript. It needs no build step, package installation, external font service, or runtime framework.

## Preview

```bash
python3 -m http.server 8766
```

Open http://localhost:8766/. The page also works when opened as a local file. Navigation and all publications remain available without JavaScript.

## Update content

- `index.html`: biography, research papers, industrial contributions, experience, education, and contact details. Update the Person JSON-LD and social metadata alongside the visible biography.
- `personal-assets/site.css`: typography, colors, responsive layouts, and print styles.
- `personal-assets/site.js`: topic filtering, mobile navigation, and active section indication.
- `personal-assets/images/`: optimized research thumbnails and the social sharing image.
- `personal-assets/fonts/`: self-hosted DM Sans and Instrument Serif, with their SIL Open Font License notices.

For each publication, keep the official title, authorship role, venue/status, links, and `data-topics` values together. Supported topics are `memory`, `generation`, and `agents`. The page intentionally separates published conference papers from preprints under review and industry contributions.

## Hosting and existing pages

GitHub Pages serves the `master` branch, repository root. `.nojekyll` keeps this a plain static site. Publish only reviewed homepage changes to the existing Pages branch.

The original 2018 blog landing page is preserved, byte for byte, in `blog/index.html`. Existing article URLs, archives, feeds, and blog assets retain their original paths. The ST-Mem project at `/st-mem/` is served by the separate `Sealical/st-mem` repository; its project and benchmark links remain absolute URLs.

## Design and image sources

The design is original. Research-first information structure was informed by the personal sites of [Saining Xie](https://www.sainingxie.com/), [Jiajun Wu](https://jiajunwu.com/), and [Shuran Song](https://shurans.github.io/). No code or portraits were copied from these sites.

Research thumbnails come from the author's public project pages and papers; they are resized and encoded as WebP for the homepage. Ownership of the research figures remains with their original authors.

| Thumbnail     | Original source                                                  |
| ------------- | ---------------------------------------------------------------- |
| LTE / ST-Mem  | https://sealical.github.io/st-mem/assets/st_mem_teaser.png       |
| PhysLayer     | https://arxiv.org/html/2604.23574v1/teaser_image_v4.png          |
| CineAGI       | https://arxiv.org/html/2604.23579v1/qualitative.png              |
| PhysCodeBench | https://arxiv.org/html/2604.23580v1/data_samples_v2.png          |
| Anywhere      | https://anywheremultiagent.github.io/static/documents/teaser.png |
| EgoMonth      | https://arxiv.org/html/2608.13113v1/teaser.png                   |

The social sharing card and favicon use the site's own typography and geometric wordmark.
