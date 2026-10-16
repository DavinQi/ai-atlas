# AI-Native Engineering Atlas · AI 原生研发图集

A bilingual (中文 / English), hand-drawn style atlas of AI-native software engineering: 36 diagrams + 6 chapter pages, from LLM training and agent design to multi-agent coding and the changing dev lifecycle.

Author: [DavinQi](https://github.com/DavinQi)

## Usage
Plain static files, no build step. Open `index.html` locally or publish the folder with GitHub Pages
(Settings → Pages → Deploy from branch → select the branch/folder containing `index.html`).

- Language: toggle 中文 / EN in the top-right corner. Default follows the browser (`zh*` → Chinese, otherwise English); the choice is saved in `localStorage` and reflected in the URL (`?lang=zh` / `?lang=en`).
- Deep links: `#12` (diagram 12), `#ch3` (chapter 3 cover), e.g. `index.html?lang=en#ch3`.
- Keys: ← → page · Enter zoom · F fullscreen · G overview · R replay animation · Esc close.
- `?static` disables animations (useful for screenshots/printing).

## Files
- `index.html` – entry page
- `assets/atlas.js` – rendering engine, diagram definitions and the zh→en dictionary
- `assets/style.css` – styles
- `assets/fonts/` – subset web fonts (ZCOOL XiaoWei, Kalam, IBM Plex Mono, Noto Sans CJK SC; all SIL OFL)

Diagrams are rendered as inline SVG at runtime; English text is auto-shrunk to fit its boxes.
