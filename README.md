# FreeBody

研究人体如何运转，探索更可靠的 AI Agent。

Learning from human physiology to design and evaluate reliable AI agents.

**v0.1 研究原型 / Research prototype** — AI 酋长 Andy · [个人官网](https://metaver.vip/)

## 快速开始 / Quick start

1. 克隆仓库或下载 ZIP，双击 `index.html`。无需 API Key 或依赖；外部参考资料需要联网。
2. 阅读人体十一大系统卡片，区分生理事实、工程假设与验证计划。
3. 在稳态实验室切换任务流和预算，对照固定调度与反馈调度。
4. 安装 Node.js 后运行 `node tests/sim.test.js`，复现实验与边界测试。

Open `index.html` locally. Change the workload and capacity budget. Run `node tests/sim.test.js` for reproducible tests.

## 研究原则 / Research principles

- 结构不等于功能；工程类比不等于生理机制，也不等于因果证据。
- 人体科学事实 → 工程问题 → 假设 → 可运行实验 → 对照与消融 → 记录失败和限制。
- 人的授权是 Agent 的上限。自我调节不能用于绕过权限、自主扩权或无授权复制。
- 不收集个人健康数据，不提供医疗诊断或治疗建议。

## 实验 / Experiment

两种策略使用相同到达流、总预算和 FIFO 队列。固定策略每步尝试分配 2 个执行槽；反馈策略根据当前队列分配最多 4 个执行槽。预算涵盖所有已分配槽，包括空闲槽。任务成本相同且无故障。等待时间只统计已完成任务。调度策略包含不同瞬时容量上限，不能将结果归因于反馈单一因素；未来应补充相同上限的消融。

See [research protocol](docs/RESEARCH.md) for hypotheses, confounds, references and roadmap. The current experiment is a deterministic toy simulator, not a physiological model or a deployed agent benchmark.

## Repo

- `index.html` — static research atlas + simulator UI
- `data.js` — 11 organ-system research cards
- `sim.js` — deterministic queue simulator
- `tests/sim.test.js` — assertions and example results
- `docs/RESEARCH.md` — source and research plan

GitHub Pages: select Settings → Pages → Deploy from a branch → main → /(root). Verify the published URL and all scenarios.

License: MIT for original code; third-party references retain their respective rights. No third-party illustrations or article text reproduced.
