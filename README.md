**English** | [简体中文](README.zh-CN.md)

# AI-Native Engineering Atlas

A hand-drawn style, bilingual (English / 中文) atlas of AI-native software engineering, **from Copilot to Agent Harness**: 36 diagrams + 6 chapter pages.

**Live site:** [English](https://davinqi.github.io/ai-atlas/?lang=en) · [中文](https://davinqi.github.io/ai-atlas/?lang=zh)

## Chapters
1. **How LLMs Are Trained**: data, pre-training, post-training (SFT / RLHF / DPO / RLVR), inference, misconceptions, training cost
2. **Agent Design: Principles & Patterns**: components, ReAct / Plan / Reflection, MCP, memory & RAG, multi-agent harness, guardrails
3. **The Evolution of Programming**: from assembly and IDEs to Copilot, AI IDEs and coding agents
4. **AI Coding Today**: Amdahl's law, context engineering, spec-driven development, layered verification, metrics, a 7-day roadmap
5. **Multi-Agent Programming**: why multi-agent, worktree isolation, race vs pipeline, orchestration, humans + agents
6. **How AI Reshapes the Dev Lifecycle**: CI/CD → AIOps self-healing → the future, roles and open questions

## Features
- **Bilingual toggle:** 中文 / EN switch in the top-right corner. The default follows your browser language, your choice is remembered, and it is reflected in the URL (`?lang=en|zh`).
- **Hand-drawn diagrams:** sketch-style inline SVG with animated arrows. Click any diagram to zoom and pan.
- **Keyboard shortcuts:** `←` `→` page · `Enter` zoom · `F` fullscreen · `G` overview grid · `R` replay animation · `Esc` close.
- **Mobile friendly:** on phones and tablets the sidebar becomes a drawer (☰), diagrams scale to the screen width, you swipe left/right to change pages, pinch or tap a diagram to zoom, and every button is a ≥44px touch target. The desktop layout is unchanged.
- **Deep links:** `#12` opens diagram 12, `#ch3` opens the chapter 3 cover, e.g. [`?lang=en#ch3`](https://davinqi.github.io/ai-atlas/?lang=en#ch3). Add `&static` to disable animations.

## Screenshots
| Chapter cover | Overview grid |
|---|---|
| ![Chapter cover](docs/screenshots/en-cover.jpg) | ![Overview](docs/screenshots/en-overview.jpg) |
| **Training pipeline** | **Multi-agent orchestration** |
| ![Training pipeline](docs/screenshots/en-diagram-training.jpg) | ![Orchestration](docs/screenshots/en-diagram-orchestration.jpg) |

**On mobile (iPhone 14):**

<img src="docs/screenshots/en-mobile.jpg" alt="Mobile view" width="300">

## Run locally
The site is plain static files with no build step.
```bash
git clone https://github.com/DavinQi/ai-atlas.git
cd ai-atlas
python3 -m http.server 8000   # then open http://localhost:8000/?lang=en
```
You can also open `index.html` directly in a browser.

## Files
`index.html` (entry) · `assets/atlas.js` (renderer, diagrams, i18n dictionary) · `assets/style.css` · `assets/fonts/` (subset web fonts, SIL OFL)

## Author
[DavinQi](https://github.com/DavinQi)
