# FreeBody 研究协议 v0.1

## 核心问题

人体的结构和生理机制能否为 AI Agent 的可靠性、资源效率、状态管理、工具执行、安全和恢复提供可检验的设计假设？不以追求「像人」为目标，更不主张复制意识、生物学目的或人的主观体验。

## 研究单元

每一个机制建立独立记录：生理事实及出处、适用层级、工程痛点、可操作假设、基线、实验变量、控制变量、指标、风险、复现实验、失败记录和证据级别。证据分为教材知识、原始研究、工程假设、玩具仿真、真实系统对照实验。任何一级不自动升级。

## P0：稳态调节

- 生理基础：负反馈通过感知偏差与调节反应维持内部状态；预测调节也是研究方向。它们不是软件调度的同义词。
- 工程问题：Agent 在突发任务、API 配额、工具失败和长流程中如何遵守预算、避免失控？
- 当前实验：离散队列、24 步、固定任务成本、无故障；基线每步分配 2 槽，反馈策略每步分配 min(4, 当前队列长度) 槽，均受同一总预算限制。
- 指标：任务完成数、剩余积压、已分配槽、空闲槽、峰值积压、已完成任务平均等待步数。
- 局限：反馈策略同时改变并发上限和分配规则；应加入固定上限 4、同上限 2 的对照、重负载和随机到达多种子实验、排队时延分位数、资源价格曲线和工具失败模型。当前数字不是实测 Agent 性能。
- 工程落地待办：实际 Agent 的预算网关、可观测性、授权检查、超时、幂等和人工接管。必须通过可复现的端到端评估才讨论改进。

## 研究路线

P0：稳态调节、资源调度与安全边界；P1：记忆机制、分层控制、免疫启发的故障隔离；P2：人体跨系统交互图谱、真实 Agent 基准、多语言教程、PDF 和交互式人体解剖图谱（须独立确认数据与素材许可）。

## 参考资料

- OpenStax, Anatomy and Physiology 2e, [1.2 Structural Organization](https://openstax.org/books/anatomy-and-physiology-2e/pages/1-2-structural-organization-of-the-human-body), [1.5 Homeostasis](https://openstax.org/books/anatomy-and-physiology-2e/pages/1-5-homeostasis), [17.1 Endocrine System](https://openstax.org/books/anatomy-and-physiology-2e/pages/17-1-an-overview-of-the-endocrine-system).
- Sterling P. Allostasis: a model of predictive regulation. Physiol Behav. 2012;106(1):5–15. DOI: 10.1016/j.physbeh.2011.06.004. https://pubmed.ncbi.nlm.nih.gov/21684297/
- Anthropic, [Building effective agents](https://www.anthropic.com/research/building-effective-agents).
- OpenAI, [Building agents](https://developers.openai.com/tracks/building-agents).

No third-party textbook illustrations or article text reproduced. The cards are original summaries and proposed engineering analogies.
