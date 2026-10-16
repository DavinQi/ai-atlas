[English](README.md) | **简体中文**

# AI 原生研发图集

手绘风、中英双语的 AI 原生研发图集，**从 Copilot 到 Agent Harness**：36 张图 + 6 个章节页。

**在线访问：** [中文](https://davinqi.github.io/ai-atlas/?lang=zh) · [English](https://davinqi.github.io/ai-atlas/?lang=en)

## 章节
1. **大模型如何训练**：数据、预训练、后训练（SFT / RLHF / DPO / RLVR）、推理部署、常见误区、训练成本
2. **Agent 设计原理与范式**：组成、ReAct / 规划 / 反思、MCP、记忆与 RAG、多 Agent 与 Harness、安全护栏
3. **编程的进化**：从汇编、IDE 到 Copilot、AI IDE 和 Coding Agent
4. **当前如何做 AI 编程**：阿姆达尔定律、上下文工程、Spec 驱动、分层验证、度量、7 天落地路线图
5. **多 Agent 编程**：为什么多 Agent、worktree 隔离、赛跑与流水线、编排层、多人 + 多 Agent 协作
6. **AI 改变研发流程**：传统 CI/CD → AIOps 自修复 → 未来形态，角色变化与未解问题

## 功能
- **中英切换**：右上角 中文 / EN 按钮。默认跟随浏览器语言，记住你的选择，并同步到网址（`?lang=zh|en`）。
- **手绘风图示**：草图风格的 SVG，箭头带动画；点击图可放大、拖拽平移。
- **快捷键**：`←` `→` 翻页 · `Enter` 放大 · `F` 全屏 · `G` 总览 · `R` 重播动画 · `Esc` 关闭。
- **适配手机**：在手机和平板上，侧栏变成抽屉菜单（☰），竖屏手机上图会自动改成从上到下的竖版排布（启示改为文字卡片），左右滑动翻页，点击图进入放大层（双指缩放、双击切换适应/放大、「复原」按钮），按钮触控区域都不小于 44px。桌面版样式保持不变。
- **深链接**：`#12` 直达第 12 张图，`#ch3` 直达第 3 章章节页，例如 [`?lang=zh#ch3`](https://davinqi.github.io/ai-atlas/?lang=zh#ch3)；加 `&static` 可关闭动画。

## 截图
| 章节页 | 总览 |
|---|---|
| ![章节页](docs/screenshots/zh-cover.jpg) | ![总览](docs/screenshots/zh-overview.jpg) |
| **训练全景流程** | **多 Agent 编排层** |
| ![训练全景](docs/screenshots/zh-diagram-training.jpg) | ![编排层](docs/screenshots/zh-diagram-orchestration.jpg) |

**手机效果（iPhone 14）：**

<img src="docs/screenshots/zh-mobile.jpg" alt="手机版" width="300">

## 本地运行
纯静态文件，无需构建。
```bash
git clone https://github.com/DavinQi/ai-atlas.git
cd ai-atlas
python3 -m http.server 8000   # 然后打开 http://localhost:8000/?lang=zh
```
也可以直接用浏览器打开 `index.html`。

## 文件
`index.html`（入口）· `assets/atlas.js`（渲染引擎、图、翻译词典）· `assets/style.css` · `assets/fonts/`（字体子集，SIL OFL 许可）

## 作者
[DavinQi](https://github.com/DavinQi)
