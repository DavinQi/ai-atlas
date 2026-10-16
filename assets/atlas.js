let LANG='zh';const EN={"大模型如何训练": "How LLMs Are Trained", "Agent 设计原理与范式": "Agent Design: Principles & Patterns", "编程的进化": "The Evolution of Programming", "当前如何做 AI 编程": "AI Coding Today", "多 Agent 编程": "Multi-Agent Programming", "AI 改变研发流程": "How AI Reshapes the Dev Lifecycle", "数据、预训练、后训练与部署": "Data, pre-training, post-training & serving", "组成、范式、工具、记忆与护栏": "Components, patterns, tools, memory & guardrails", "从汇编、IDE、Copilot 到 Coding Agent": "From assembly and IDEs to Copilot and coding agents", "上下文、Spec、验证与度量": "Context, specs, verification & metrics", "并行、隔离、编排与协作": "Parallelism, isolation, orchestration & collaboration", "从 CI/CD 到 AIOps 到未来": "From CI/CD to AIOps and beyond", "章节页": "Chapter", "训练全景流程": "Training Pipeline Overview", "训练全景：预训练学会语言，后训练学会听指令与推理": "Training at a glance: pre-training learns language, post-training learns to follow instructions and reason", "来源：Ouyang et al. 2022 InstructGPT (arXiv:2203.02155); Rafailov et al. 2023 DPO (arXiv:2305.18290); DeepSeek-R1 2025 (arXiv:2501.12948)": "Sources: Ouyang et al. 2022 InstructGPT (arXiv:2203.02155); Rafailov et al. 2023 DPO (arXiv:2305.18290); DeepSeek-R1 2025 (arXiv:2501.12948)", "数据": "Data", "预训练": "Pre-training", "后训练": "Post-training", "评测": "Evaluation", "推理部署": "Serving", "采集": "Collect", "网页/代码/书籍": "Web / code / books", "清洗": "Clean", "质量与安全过滤": "Quality & safety filters", "去重": "Dedup", "精确 + 近似去重": "Exact + near-dup", "配比": "Mixture", "调整领域混合比例": "Tune domain mix", "目标": "Objective", "next-token 预测": "Next-token prediction", "语料": "Corpus", "海量无标注文本": "Massive unlabeled text", "自监督学习": "Self-supervised", "算力密集": "Compute-heavy", "Base 模型": "Base model", "SFT 监督微调": "SFT (supervised fine-tuning)", "人工示范的指令-回答对": "Human-written instruction–response pairs", "偏好对齐 RLHF / DPO": "Preference alignment: RLHF / DPO", "奖励模型 + PPO，或直接优化偏好": "Reward model + PPO, or optimize preferences directly", "RLVR 可验证奖励 RL": "RLVR: RL with verifiable rewards", "答案 / 单测自动判分作奖励": "Answers / unit tests auto-graded as reward", "Chat / 推理模型": "Chat / reasoning model", "能力基准测试": "Capability benchmarks", "安全与红队": "Safety & red-teaming", "人工盲评对比": "Blind human eval", "量化": "Quantization", "缓存键值": "Cache keys/values", "服务化": "Serving", "批处理 + 流式": "Batching + streaming", "启示：可自动验证的任务最先被 RL 练强": "Takeaway: tasks that can be auto-verified get strong first via RL", "数据管线 + Tokenizer": "Data Pipeline + Tokenizer", "数据决定上限：文本先切成 token，再映射成向量": "Data sets the ceiling: text is split into tokens, then mapped to vectors", "来源：Sennrich et al. 2016 BPE (arXiv:1508.07909)；示例切分与 id 为示意": "Sources: Sennrich et al. 2016 BPE (arXiv:1508.07909); example splits and ids are illustrative", "数据管线": "Data pipeline", "网页 / 代码 / 书籍 / 论文": "Web / code / books / papers", "过滤 / 清洗": "Filter / clean", "剔除低质、有害、隐私内容": "Drop low-quality, toxic, private data", "精确 + MinHash 近似去重": "Exact + MinHash near-dup removal", "数据配比": "Data mixture", "按领域调整混合比例": "Rebalance mix by domain", "Tokenizer 示例（切分与 id 均为示意）": "Tokenizer example (splits and ids illustrative)", "BPE 子词切分": "BPE subword split", "查词表 → token id": "Vocab lookup → token id", "Embedding 查表 → d 维向量": "Embedding lookup → d-dim vector", "BPE：从字符起步，\n反复合并高频相邻对": "BPE: start from characters,\nrepeatedly merge frequent pairs", "_ 表示前导空格": "_ marks a leading space", "启示：数据质量与配比，决定模型能力的上限": "Takeaway: data quality and mixture set the model's ceiling", "Transformer：注意力让每个 token 按相关性汇聚上下文": "Transformer: attention lets each token pool context by relevance", "来源：Vaswani et al. 2017 “Attention Is All You Need” (arXiv:1706.03762)": "Source: Vaswani et al. 2017 “Attention Is All You Need” (arXiv:1706.03762)", "输入 token": "Input tokens", "Embedding\n+ 位置编码": "Embedding\n+ positional enc.", "× N 层（残差连接）": "× N layers (residual)", "掩码多头自注意力": "Masked multi-head self-attention", "FFN 前馈网络": "FFN (feed-forward)", "下一个\ntoken": "Next\ntoken", "注意力计算（放大）": "Attention math (zoomed in)", "输入的三组线性投影": "Three linear projections of input", "防止 softmax 饱和": "Keeps softmax from saturating", "掩码": "Mask", "每个位置只看前文": "Each position sees only the past", "多头": "Multi-head", "并行多组注意力": "Several attentions in parallel", "放大": "zoom", "现代 LLM 多为 decoder-only：只堆叠解码器，逐 token 生成": "Modern LLMs are mostly decoder-only: stacked decoders, generating token by token", "预训练 + Scaling Law": "Pre-training + Scaling Laws", "预训练：预测下一个 token，规模按幂律换来更低 loss": "Pre-training: predict the next token; scale buys lower loss along a power law", "来源：Kaplan et al. 2020 Scaling Laws (arXiv:2001.08361)；Hoffmann et al. 2022 Chinchilla (arXiv:2203.15556)": "Sources: Kaplan et al. 2020 Scaling Laws (arXiv:2001.08361); Hoffmann et al. 2022 Chinchilla (arXiv:2203.15556)", "训练目标：预测下一个 token": "Objective: predict the next token", "交叉熵：真实下一个 token 的负对数概率": "Cross-entropy: negative log-prob of the true next token", "幂律下降：双对数坐标下近似直线（示意）": "Power-law decline: ~straight line on log-log axes (illustrative)", "tokens / 参数": "tokens / param", "Chinchilla 计算最优配比": "Chinchilla compute-optimal ratio", "给定算力：N 与 D 同比例扩大": "Fixed compute: scale N and D together", "参数量": "Parameters", "数据量": "Data", "计算量": "Compute", "例：70B 参数 × 1.4T tokens，优于同算力的 280B Gopher": "E.g. 70B params × 1.4T tokens beats 280B Gopher at equal compute", "启示：同等算力下，更小模型 + 更多数据往往更优": "Takeaway: at equal compute, a smaller model + more data often wins", "后训练 SFT→RLHF→DPO→RLVR": "Post-training SFT→RLHF→DPO→RLVR", "后训练：从「会续写」到「会听指令、会推理」": "Post-training: from “can continue text” to “follows instructions and reasons”", "来源：InstructGPT (arXiv:2203.02155)；DPO (arXiv:2305.18290)；DeepSeekMath/GRPO (arXiv:2402.03300)；DeepSeek-R1 (arXiv:2501.12948)": "Sources: InstructGPT (arXiv:2203.02155); DPO (arXiv:2305.18290); DeepSeekMath/GRPO (arXiv:2402.03300); DeepSeek-R1 (arXiv:2501.12948)", "指令-回答示范\n学会格式与遵循指令": "Instruction–response demos\nlearn format & instruction following", "人工示范": "Human demos", "奖励模型打分\nPPO 优化 + KL 约束": "Reward model scores\nPPO + KL constraint", "人类偏好排序": "Human preference ranking", "直接用偏好对优化\n无需奖励模型与 RL 采样": "Optimize on preference pairs\nno reward model or RL sampling", "偏好对：好 vs 差": "Preference pairs: good vs bad", "RLVR 推理强化": "RLVR reasoning RL", "可验证奖励：单测 / 答案\nGRPO：组内相对打分": "Verifiable rewards: tests / answers\nGRPO: group-relative scoring", "自动判分器": "Auto-grader", "奖励 / 数据信号": "Reward / data signal", "依赖人工标注": "Needs human labels", "可自动规模化": "Scales automatically", "启示：代码天然可验证——单测就是奖励信号": "Takeaway: code is naturally verifiable — unit tests are the reward signal", "推理部署 KV Cache / MoE": "Inference: KV Cache / MoE", "推理部署：Prefill 一次算完，Decode 逐 token 生成": "Inference: prefill computes once, decode generates token by token", "来源：Shazeer et al. 2017 MoE (arXiv:1701.06538)；Kwon et al. 2023 vLLM / PagedAttention (arXiv:2309.06180)": "Sources: Shazeer et al. 2017 MoE (arXiv:1701.06538); Kwon et al. 2023 vLLM / PagedAttention (arXiv:2309.06180)", "Prefill：并行 · 计算密集": "Prefill: parallel · compute-bound", "Decode：逐 token · 访存密集": "Decode: per token · memory-bound", "KV Cache：缓存已算的 K / V，新 token 不再重算": "KV Cache: store computed K / V so new tokens skip recompute", "写入": "write", "每步读取": "read each step", "服务化技巧": "Serving tricks", "INT8 / INT4 省显存": "INT8 / INT4 saves VRAM", "连续批处理": "Continuous batching", "请求随到随批": "Batch requests as they arrive", "KV 分页，减少碎片": "Paged KV, less fragmentation", "MoE：Router 为每个 token 选 top-k 专家": "MoE: router picks top-k experts per token", "专家 E": "Expert E", "top-2 示意": "top-2 (illustrative)", "稀疏激活：总参数大，每 token 只算少数专家": "Sparse activation: huge total params, few experts per token", "上下文长度 = 显存与延迟成本": "Context length = VRAM and latency cost", "常见误区澄清": "Common Misconceptions", "常见误区澄清：看起来像，不等于就是": "Common misconceptions: looking like it isn't the same as being it", "来源：讲者整理": "Source: speaker's notes", "误区": "Myth", "真相": "Reality", "像人脑一样\n理解、思考": "Understands and thinks\nlike a human brain", "只是预测下一个最合理的字": "It just predicts the most likely next token", "从海量文本学到概率——看起来像理解": "It learns probabilities from text — it only looks like understanding", "把所有书\n原文存进去": "Stores every book\nverbatim", "压缩学习文字模式，不存原文": "It compresses text patterns, not the original text", "所以会遗忘，也会幻觉": "Hence it forgets and hallucinates", "训练完还会\n自动学新知识": "Keeps learning new\nfacts after training", "权重固定，不会自动更新": "Weights are frozen; no automatic updates", "新知识靠 RAG 或二次微调": "New knowledge comes via RAG or further fine-tuning", "训练成本量级": "Training Cost by Scale", "训练成本：规模每大一档，费用跳一个量级": "Training cost: every step up in scale costs an order of magnitude more", "来源：讲者估算，仅供量级参考（算力+数据）": "Source: speaker's estimates, order-of-magnitude only (compute + data)", "参数规模": "Model size", "预训练 Token": "Pre-train tokens", "预训练费用": "Pre-training cost", "SFT 费用": "SFT cost", "对齐费用": "Alignment cost", "1 万亿": "1T", "$25万–$45万": "$250K–$450K", "$2万–$8万": "$20K–$80K", "$1万–$5万": "$10K–$50K", "1.4 万亿": "1.4T", "$70万–$120万": "$700K–$1.2M", "$4万–$15万": "$40K–$150K", "$3万–$10万": "$30K–$100K", "2 万亿": "2T", "$220万–$350万": "$2.2M–$3.5M", "$8万–$25万": "$80K–$250K", "$5万–$18万": "$50K–$180K", "2.2 万亿": "2.2T", "$600万–$1000万": "$6M–$10M", "$15万–$40万": "$150K–$400K", "$10万–$30万": "$100K–$300K", "3–4 万亿": "3–4T", "$3000万–$8000万": "$30M–$80M", "$50万–$120万": "$500K–$1.2M", "$30万–$80万": "$300K–$800K", "70B 成本构成（取中值估算）": "70B cost breakdown (midpoint estimates)", "对齐 ≈2%": "Alignment ≈2%", "预训练占绝大部分成本，后训练相对便宜": "Pre-training dominates cost; post-training is relatively cheap", "Agent 组成": "Agent Components", "Agent = LLM + 规划 + 记忆 + 工具，在环境反馈中循环": "Agent = LLM + planning + memory + tools, looping on environment feedback", "来源：Lilian Weng 2023 “LLM Powered Autonomous Agents” (lilianweng.github.io)；Anthropic 2024 “Building effective agents”": "Sources: Lilian Weng 2023 “LLM Powered Autonomous Agents” (lilianweng.github.io); Anthropic 2024 “Building effective agents”", "推理与决策核心": "Reasoning & decision core", "规划": "Planning", "任务分解 · 自我反思": "Decompose · self-reflect", "记忆": "Memory", "短期=上下文 · 长期=检索": "Short = context · long = retrieval", "工具": "Tools", "API · 代码执行 · 搜索": "APIs · code exec · search", "环境反馈": "Environment feedback", "观察 · 报错 · 测试输出": "Observations · errors · test output", "行动": "Act", "执行": "Execute", "观察": "Observe", "预设路径 vs 模型自主决定步骤": "Workflow (predefined path) vs agent (model decides steps)", "启示：先用最简单的方案，需要时再上 Agent": "Takeaway: start with the simplest solution; add agents only when needed", "三种范式：边想边做、先规划后执行、做完自我修正": "Three patterns: think while acting, plan then execute, self-correct after", "来源：Yao et al. 2022 ReAct (arXiv:2210.03629)；Wang et al. 2023 Plan-and-Solve (arXiv:2305.04091)；Shinn et al. 2023 Reflexion (arXiv:2303.11366)": "Sources: Yao et al. 2022 ReAct (arXiv:2210.03629); Wang et al. 2023 Plan-and-Solve (arXiv:2305.04091); Shinn et al. 2023 Reflexion (arXiv:2303.11366)", "思考": "Think", "步骤 ": "Step ", "生成": "Generate", "测试 / 自评": "Test / self-eval", "反思 → 修正": "Reflect → fix", "带\n着\n反\n思\n重\n试": "retry\nwith\nreflection", "适合：需要边走边观察的探索任务": "Fits: exploratory tasks that need observing as you go", "适合：步骤清晰的长任务": "Fits: long tasks with clear steps", "适合：有明确检验标准的任务": "Fits: tasks with clear pass/fail criteria", "启示：编码 Agent 常把三者组合——ReAct 循环 + 计划 + 测试驱动反思": "Takeaway: coding agents often combine all three — ReAct loop + plan + test-driven reflection", "MCP 协议架构": "MCP Architecture", "MCP：用同一协议，把工具与数据接入任意 Agent": "MCP: one protocol to plug tools and data into any agent", "来源：Model Context Protocol Specification (modelcontextprotocol.io/specification)": "Source: Model Context Protocol Specification (modelcontextprotocol.io/specification)", "Host（IDE / Agent）": "Host (IDE / Agent)", "数据库 Server": "Database server", "文件系统 Server": "Filesystem server", "stdio 或 Streamable HTTP": "stdio or Streamable HTTP", "Server 暴露": "Server exposes", "可执行的操作": "Executable actions", "只读的上下文数据": "Read-only context data", "可复用提示模板": "Reusable prompt templates", "1  LLM 生成 tool_call": "1  LLM emits tool_call", "2  Client 调用 Server 执行": "2  Client asks server to run it", "3  结果返回上下文": "3  Result returns to context", "启示：M × N 适配\n变成 M + N": "Takeaway: M × N adapters\nbecome M + N", "记忆与 RAG": "Memory & RAG", "记忆与 RAG：在对的时候，把对的知识放进上下文": "Memory & RAG: put the right knowledge into context at the right time", "来源：Lewis et al. 2020 RAG (arXiv:2005.11401)；Lilian Weng 2023 “LLM Powered Autonomous Agents”": "Sources: Lewis et al. 2020 RAG (arXiv:2005.11401); Lilian Weng 2023 “LLM Powered Autonomous Agents”", "四类记忆": "Four kinds of memory", "上下文窗口": "Context window", "工作记忆": "Working memory", "会话摘要": "Session summary", "短期记忆": "Short-term memory", "向量库 · 文档": "Vector DB · docs", "长期记忆": "Long-term memory", "规则文件 AGENTS.md": "Rules file AGENTS.md", "程序性记忆": "Procedural memory", "离线索引": "Offline indexing", "文档": "Docs", "切块": "Chunk", "向量库": "Vector DB", "在线查询": "Online query", "查询": "Query", "检索 top-k": "Retrieve top-k", "重排（可选）": "Rerank (optional)", "拼入 Prompt": "Insert into prompt", "参数记忆（模型权重） + 非参数记忆（检索索引）": "Parametric memory (weights) + non-parametric memory (retrieval index)", "启示：RAG 让模型「开卷作答」，答案可追溯到来源": "Takeaway: RAG lets the model answer “open-book”, with traceable sources", "多 Agent + Harness 闭环": "Multi-Agent + Harness Loop", "多 Agent 与 Harness：在受控闭环里迭代到验证通过": "Multi-agent & harness: iterate in a controlled loop until verification passes", "来源：Anthropic 2024 “Building effective agents”；Anthropic 2025 “How we built our multi-agent research system”": "Sources: Anthropic 2024 “Building effective agents”; Anthropic 2025 “How we built our multi-agent research system”", "编排者 - 工作者": "Orchestrator–workers", "编排者": "Orchestrator", "工作者": "Worker", "流水线": "Pipeline", "辩论 · 评审": "Debate · review", "生成者": "Generator", "评审者": "Reviewer", "Harness 闭环": "Harness loop", "沙箱 / 受控环境": "Sandbox / controlled env", "任务 / Spec": "Task / spec", "工具执行": "Tool execution", "验证": "Verify", "测试 · lint · 类型": "Tests · lint · types", "提交 PR": "Open PR", "通过": "pass", "失败：报错与测试输出进上下文，重试": "Fail: errors and test output go back into context; retry", "启示：人只在两端——\n写清 Spec，审阅结果": "Takeaway: humans sit only at the ends —\nwrite a clear spec, review the result", "安全护栏 + 范式决策树": "Guardrails + Pattern Decision Tree", "安全护栏 + 范式选择：能用简单方案，就别上多 Agent": "Guardrails + pattern choice: if a simple solution works, skip multi-agent", "来源：Anthropic 2024 “Building effective agents”；OWASP Top 10 for LLM Applications（LLM01 Prompt Injection）": "Sources: Anthropic 2024 “Building effective agents”; OWASP Top 10 for LLM Applications (LLM01 Prompt Injection)", "范式决策树": "Pattern decision tree", "步骤固定？": "Fixed steps?", "单 Agent 够用？": "One agent enough?", "可并行拆分？": "Parallelizable?", "ReAct + 工具": "ReAct + tools", "多 Agent": "Multi-agent", "是": "Yes", "否": "No", "仍用单 Agent": "Stay single-agent", "五层护栏": "Five layers of guardrails", "权限最小化": "Least privilege", "只给完成任务所需的权限": "Only the permissions the task needs", "沙箱隔离": "Sandbox isolation", "容器 · 网络白名单": "Containers · network allowlist", "人工审批": "Human approval", "删除、发布等高风险操作": "Deletes, releases & other risky ops", "提示注入防护": "Prompt-injection defense", "外部内容视为数据（OWASP LLM01）": "Treat external content as data (OWASP LLM01)", "可观测审计": "Observability & audit", "记录每次工具调用": "Log every tool call", "启示：把 Agent 当作新同事——最小权限，关键操作要审批": "Takeaway: treat the agent like a new teammate — least privilege, approval for critical ops", "编程进化时间轴": "Programming Evolution Timeline", "编程的进化：人的关注点从语法，到代码，再到任务": "The evolution of programming: human focus moves from syntax, to code, to tasks", "来源：作者整理；各语言 / 产品公开发布年份（FORTRAN 1957、Java 1995、IntelliSense 1996、Copilot 2021、Cursor 2023、Claude Code / Codex 2025）": "Source: author's compilation; public release years (FORTRAN 1957, Java 1995, IntelliSense 1996, Copilot 2021, Cursor 2023, Claude Code / Codex 2025)", "汇编": "Assembly", "直接写机器指令": "Write machine instructions directly", "高级语言": "High-level languages", "IDE 智能提示": "IDE IntelliSense", "Copilot 补全": "Copilot completion", "行内 / 函数级补全": "Inline / function-level completion", "AI 自主度 ↑": "AI autonomy ↑", "低": "Low", "高": "High", "人的关注点": "Human focus", "语法": "Syntax", "代码": "Code", "任务": "Tasks", "启示：每一次跃迁，都把人推到更高一层抽象": "Takeaway: each leap pushes humans up one level of abstraction", "传统 IDE 结构": "Traditional IDE Structure", "传统 IDE：工具齐全，但串联全靠人": "Traditional IDE: every tool is there, but a human wires them together", "来源：作者整理": "Source: author's compilation", "开发者（人）": "Developer (human)", "项目 / 工程结构": "Project structure", "模块 · 依赖": "Modules · dependencies", "代码编辑器": "Code editor", "高亮 · 补全 · 重构": "Highlight · complete · refactor", "终端 / 构建": "Terminal / build", "调试与测试": "Debug & test", "提交 · 分支 · 合并": "Commit · branch · merge", "手动切换": "manual switching", "改一个需求，人要串起": "For one change, a human must chain", "1  找到相关文件": "1  Find relevant files", "2  改代码": "2  Edit code", "3  构建": "3  Build", "4  跑测试 / 调试": "4  Run tests / debug", "5  提交 Git": "5  Commit to Git", "工作对象是「文件」，\n人负责串联一切": "The unit of work is the “file”;\nthe human wires everything", "从补全到 AI IDE：模型先进了光标，再进了编辑器": "From completion to AI IDE: models entered the cursor, then the editor", "来源：GitHub Copilot 文档 (docs.github.com/copilot)；Cursor 文档 (docs.cursor.com)；代码与 diff 为示意": "Sources: GitHub Copilot docs (docs.github.com/copilot); Cursor docs (docs.cursor.com); code and diffs illustrative", "Tab 接受": "Tab to accept", "灰色 = ghost text（示意）": "Gray = ghost text (illustrative)", "人写代码 → AI 行内 / 函数级补全": "Human writes code → AI inline / function-level completion", "代码库": "Codebase", "索引": "Index", "多文件 diff（示意）": "Multi-file diff (illustrative)", "“把 Dao 换成\nRepository”": "“Replace Dao with\nRepository”", "Agent 模式": "Agent mode", "代码库索引 + Chat + 多文件编辑 + Agent 模式": "Codebase index + chat + multi-file edits + agent mode", "启示：AI 越来越能干，但人仍在 IDE 里逐行审阅 diff": "Takeaway: AI gets more capable, but humans still review diffs line by line in the IDE", "Claude Code / Codex 循环": "Claude Code / Codex Loop", "Coding Agent：人给任务、审 PR，Agent 自己跑完闭环": "Coding agents: humans assign tasks and review PRs; the agent closes the loop", "来源：Claude Code 文档 (docs.anthropic.com/claude-code)；OpenAI Codex (openai.com/codex)": "Sources: Claude Code docs (docs.anthropic.com/claude-code); OpenAI Codex (openai.com/codex)", "Claude Code（终端）· Codex（云端 / CLI）": "Claude Code (terminal) · Codex (cloud / CLI)", "自主迭代": "Autonomous iteration", "读代码": "Read code", "改代码": "Edit code", "跑命令 / 测试": "Run commands / tests", "看结果": "Check results", "纠错": "Fix errors", "人：给任务": "Human: assigns task", "通过 → PR，人审阅": "Pass → PR, human reviews", "权限": "Permissions", "能执行哪些命令、改哪些文件": "Which commands it may run, which files it may edit", "shell · 编辑 · 搜索": "shell · edit · search", "上下文": "Context", "代码库 + CLAUDE.md / AGENTS.md": "Codebase + CLAUDE.md / AGENTS.md", "测试 · lint · 类型检查": "Tests · lint · type checks", "启示：模型相近时，\nHarness 决定 Agent 好不好用": "Takeaway: with similar models,\nthe harness decides how good an agent is", "四代工具对比矩阵": "Four Generations Compared", "四代工具对比：自主度越高，越依赖自动验证": "Four generations of tools: more autonomy needs more automated verification", "手写 / IDE": "Manual / IDE", "当前文件": "Current file", "人跑测试": "Human runs tests", "写每一行": "Writes every line", "光标附近 + 打开的文件": "Near cursor + open files", "人审每条补全": "Human reviews each completion", "写 + 挑选": "Writes + picks", "代码库索引": "Codebase index", "人审 diff": "Human reviews diff", "指挥 + 审阅": "Directs + reviews", "全仓库 + 命令输出": "Whole repo + command output", "Agent 自跑测试": "Agent runs tests itself", "定任务 + 审 PR": "Sets tasks + reviews PRs", "自主度": "Autonomy", "人的角色": "Human role", "● 表示自主度（定性比较）": "● = autonomy (qualitative)", "启示：工作对象从「文件」变成「任务」": "Takeaway: the unit of work shifts from “files” to “tasks”", "阿姆达尔定律": "Amdahl's Law", "阿姆达尔定律：只加速编码，整体收益有上限": "Amdahl's law: speeding up only coding caps the overall gain", "来源：《AI Native 研发范式实践手册》（kejun.github.io/ai-native-dev-handbook）；公式为阿姆达尔定律推算": "Source: “AI Native Dev Paradigm Handbook” (kejun.github.io/ai-native-dev-handbook); figures derived from Amdahl's law", "生成代码占整个研发链路的比例": "Share of code generation in the whole dev pipeline", "（阿里团队内部粗略统计，“甚至更低”）": "(rough internal estimate by an Alibaba team, “maybe lower”)", "p：被加速环节的占比　　k：该环节的加速倍数": "p: share of the accelerated stage    k: its speedup factor", "p = 0.3，k → ∞  ⇒  S ≤ 1 / 0.7 ≈ 1.43×（推算）": "p = 0.3, k → ∞  ⇒  S ≤ 1 / 0.7 ≈ 1.43× (derived)", "研发链路（示意，仅编码占比来自手册）": "Dev pipeline (illustrative; only coding share is from the handbook)", "今天": "Today", "需求理解": "Requirements", "编码": "Coding", "构建测试": "Build & test", "发布变更": "Release", "权限与环境": "Access & env", "编码≈0": "coding≈0", "其余环节成为新瓶颈": "Other stages become the new bottleneck", "启示：下一阶段要解决的，是代码写完之后的那 70%": "Takeaway: the next frontier is the 70% that happens after the code is written", "上下文工程": "Context Engineering", "上下文工程：0→1 靠生成能力，1→N 靠上下文": "Context engineering: 0→1 comes from generation, 1→N comes from context", "来源：AI Native 研发范式实践手册；@CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)；@huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)": "Sources: AI Native Dev Paradigm Handbook; @CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719); @huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)", "项目地图": "Project map", "团队经验 → 约束": "Team experience → constraints", "为什么 / 在哪里": "Why / where", "## 目录结构": "## Layout", "## 启动 / 测试命令": "## Run / test commands", "## 代码规范": "## Code style", "## 禁区": "## Off-limits", "提交进 Git，新 worktree 才读得到": "Commit to Git so new worktrees can read it", "同类错误反复出现，再补一条": "Add a rule when the same mistake repeats", "✓  已有测试只许新增": "✓  Existing tests: add only", "✓  高危操作先停下来问人": "✓  Stop and ask before risky ops", "✗  引入新的界面库": "✗  Introduce a new UI library", "（规则示例）": "(example rules)", "每次失败，回写一条规则": "Every failure → write back one rule", "模型变强后，定期做减法": "Prune regularly as models improve", "调用关系（示意）": "Call graph (illustrative)", "Docs：模块职责、设计背景": "Docs: module roles, design background", "Graph：谁调用谁、影响范围": "Graph: who calls whom, blast radius", "自检：新会话打开仓库，Agent 能在 1 分钟内找到入口和测试命令吗？": "Self-check: in a fresh session, can the agent find the entry point and test command within 1 minute?", "Spec 驱动": "Spec-Driven", "Spec 驱动：先澄清再动手，约束与假设分开写": "Spec-driven: clarify before coding; write constraints and assumptions separately", "来源：AI Native 研发范式实践手册；@huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)": "Sources: AI Native Dev Paradigm Handbook; @huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)", "需求材料": "Inputs", "PRD · 纪要 · 聊天": "PRD · notes · chats", "追问澄清": "Clarify", "AI 主动问隐含决策": "AI asks about implicit decisions", "范围 · 决策 · 验收": "Scope · decisions · acceptance", "可独立验收": "Independently verifiable", "例：“生成公开分享链接” → 撤销机制 · 访问控制 · 数据一致性": "E.g. “public share link” → revocation · access control · data consistency", "01  约束": "01  Constraints", "硬性要求：长期保留，最好能自动检查": "Hard requirements: long-lived, ideally auto-checked", "例：数据不能出域 · 接口必须向后兼容": "E.g. data stays in-region · APIs stay backward compatible", "02  假设": "02  Assumptions", "实现选择：允许按运行反馈调整": "Implementation choices: may change with runtime feedback", "例：用什么缓存 · 怎么拆服务": "E.g. which cache · how to split services", "启示：剩下的问题不再改变实现方向和验收结果，就可以开工": "Takeaway: start once open questions no longer change direction or acceptance", "分层验证金字塔": "Layered Verification Pyramid", "分层验证：让 Agent 先过机器的关，再来找人": "Layered verification: the agent passes machine gates before reaching a human", "人工": "Human", "业务价值 · 用户体验": "Business value · UX", "分钟级": "Minutes", "集成 · 契约测试 · 浏览器自动化": "Integration · contract tests · browser automation", "秒级": "Seconds", "编译 · 类型检查 · 单元测试": "Compile · type check · unit tests", "↑ 机器裁决之后，\n才轮到人": "↑ Humans come in only\nafter machines rule", "环境即代码": "Environment as code", "容器 / 沙箱声明依赖、配置、测试数据": "Container / sandbox declares deps, config, test data", "一键起环境：干净复现与复验": "One-command env: clean repro & re-verify", "Agent 能查库表（只读）、日志与 Trace": "Agent can query tables (read-only), logs & traces", "从真实入口跑到用户要的结果": "Run from the real entry point to the user's outcome", "Agent 老在等你确认？\n多半缺了秒级和分钟级验证": "Agent keeps waiting on you?\nYou're likely missing second- and minute-level checks", "排障证据链": "Troubleshooting Evidence Chain", "排障证据链：先收集证据，再推断根因": "Troubleshooting evidence chain: collect evidence first, then infer root cause", "证据（事实）": "Evidence (facts)", "串起整条请求链": "Stitch the whole request path", "结构化日志": "Structured logs", "上下游状态": "Upstream/downstream state", "代码位置 · 调用关系": "Code location · call graph", "诊断 Agent": "Diagnosis agent", "结论": "Conclusion", "根因 + 修复": "Root cause + fix", "完整代码上下文的 Agent": "Agent with full code context", "证据充分 → 直接定位": "Enough evidence → pinpoint", "证据不足 / 矛盾 → 升级": "Thin / conflicting → escalate", "固定输出格式": "Fixed output format", "先列证据，\n再给结论": "Evidence first,\nthen conclusion", "工具帮助获取证据，而不是替我们定义正确答案": "Tools help gather evidence; they don't define the right answer for us", "三层度量": "Three-Layer Metrics", "度量：看交付结果，不看 AI 代码占比": "Metrics: measure delivered outcomes, not the share of AI-written code", "来源：AI Native 研发范式实践手册（L1/L2/L3 三层指标；千问用增案例）": "Source: AI Native Dev Paradigm Handbook (L1/L2/L3 metrics; Qwen growth case)", "效能层": "Efficiency layer", "AI 是否真正进入了研发过程": "Is AI really part of the dev process?", "质量层": "Quality layer", "缺陷、回滚、返工是否可控": "Are defects, rollbacks and rework under control?", "价值层": "Value layer", "交付周期、发布频率有没有改善": "Have lead time and release frequency improved?", "先打通关联链，再做报表": "Link the chain first, then build reports", "会话": "Agent session", "提交": "Code commit", "变更": "Change / release", "需求": "Requirement", "✗  AI 代码占比：会鼓励无效生成": "✗  % of AI-written code: rewards useless output", "✓  Skill、Spec、runbook 也纳入度量": "✓  Count Skills, specs and runbooks too", "启示：质量指标改善大于速度指标，收益主要来自验证机制": "Takeaway: quality gains outpace speed gains; the payoff comes from verification", "7 天落地路线图": "7-Day Adoption Roadmap", "7 天落地路线图：个人 / 小团队这周就能开始": "7-day roadmap: individuals and small teams can start this week", "来源：作者整理，基于《AI Native 研发范式实践手册》（kejun.github.io/ai-native-dev-handbook）": "Source: author's compilation, based on “AI Native Dev Paradigm Handbook” (kejun.github.io/ai-native-dev-handbook)", "写项目地图": "Write a project map", "AGENTS.md：结构、命令、禁区": "AGENTS.md: layout, commands, off-limits", "需求先澄清": "Clarify requirements first", "Spec 分开写约束与假设": "Spec: constraints vs assumptions", "一键起环境": "One-command env", "容器 / 沙箱声明依赖与数据": "Container / sandbox declares deps & data", "建验证闭环": "Build a verification loop", "先写失败的测试，再实现": "Write a failing test, then implement", "日志统一带 TraceId": "Tag all logs with TraceId", "知识对 Agent 友好": "Agent-friendly knowledge", "runbook + Skill，失败补规则": "Runbooks + Skills; add rules on failure", "度量复盘": "Measure & retro", "交付周期 · 变更失败率 · 人工干预": "Lead time · change failure rate · human interventions", "Agent 能自己构建、启动、测试、看日志": "The agent can build, launch, test and read logs on its own", "为什么多 Agent": "Why Multi-Agent", "为什么多 Agent：用并行换时间，代价是 token 与审阅": "Why multi-agent: trade tokens and review effort for wall-clock time", "来源：@CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)；code.claude.com/docs/en/sub-agents；developers.openai.com/codex/subagents": "Sources: @CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719); code.claude.com/docs/en/sub-agents; developers.openai.com/codex/subagents", "并行": "Parallelism", "互不依赖的任务同时推进": "Independent tasks progress at once", "多解对比": "Compare solutions", "不同 Agent 犯不同的错，分歧处就是难点": "Agents make different mistakes; disagreements mark the hard parts", "专业分工": "Specialization", "修复 · 写测试 · 评审各司其职": "Fix · write tests · review, each its own role", "上下文隔离": "Context isolation", "子 Agent 独立上下文，只回传摘要": "Sub-agents have own context, return only a summary", "修复": "Fix", "写测试": "Tests", "评审": "Review", "主会话": "Main session", "子 Agent": "Sub-agent", "摘要": "summary", "代价": "Costs", "三个 Agent 并行 = 三份额度": "Three agents in parallel = 3× quota", "合并冲突": "Merge conflicts", "各自的副本不会自动合到一起": "Separate copies don't merge themselves", "审阅负担": "Review burden", "省下的时间，会在验收时还回去": "Time saved is paid back at acceptance", "启示：只在任务能干净拆开、验收成本可控时并行": "Takeaway: parallelize only when tasks split cleanly and acceptance cost stays manageable", "Orca worktree 架构": "Orca Worktree Architecture", "Orca：一个任务一个 worktree，一个 worktree 一个 Agent": "Orca: one task per worktree, one agent per worktree", "来源：Orca 官方文档 (onorca.dev/docs)；github.com/stablyai/orca": "Sources: Orca docs (onorca.dev/docs); github.com/stablyai/orca", "仓库": "Repository", "base ref：origin/main": "base ref: origin/main", "分支 fix-": "branch fix-", "Agent 终端": "Agent terminal", "diff 审阅": "Diff review", "逐行批注 → Send to agent": "Line comments → Send to agent", "无 Accept & Merge，走正常 Git 流程": "No Accept & Merge; normal Git flow", "<tspan fill=\"#1F63C9\" font-family=\"IBM Plex Mono,monospace\">.worktreeinclude</tspan> 复制 .env　<tspan fill=\"#1F63C9\" font-family=\"IBM Plex Mono,monospace\">orca.yaml</tspan> 共享 node_modules": "<tspan fill=\"#1F63C9\" font-family=\"IBM Plex Mono,monospace\">.worktreeinclude</tspan> copies .env　<tspan fill=\"#1F63C9\" font-family=\"IBM Plex Mono,monospace\">orca.yaml</tspan> shares node_modules", "⚠ 只隔离文件与分支，不隔离端口、数据库与密钥": "⚠ Isolates files and branches only — not ports, databases or secrets", "赛跑 vs 流水线": "Race vs Pipeline", "两种打法：赛跑挑最优，流水线分工协作": "Two plays: race for the best, or pipeline with division of labor", "来源：Orca 官方文档 (onorca.dev/docs)；@CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)": "Sources: Orca docs (onorca.dev/docs); @CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)", "赛跑模式：同一任务 × 3": "Race mode: same task × 3", "同一段需求": "Same requirement", "第三个 Agent": "Third agent", "挑最优 + 批注再修一轮": "Pick best + annotate for one more pass", "三处一致，大概率对；分歧处，就是难点": "Where all three agree, likely right; where they differ, that's the hard part", "三份额度：只用于支付、权限、迁移这类改错代价大的地方": "3× quota: reserve for payments, permissions, migrations — costly-to-get-wrong code", "分工流水线": "Division-of-labor pipeline", "A 修复": "A: fix", "B 写测试": "B: tests", "Codex · 同一起点": "Codex · same starting point", "C 评审": "C: review", "起点：A 的分支 + B 的测试": "Start: A's branch + B's tests", "C 等 A 完成后再开始": "C starts after A finishes", "“必须改” → 批注发给 A → 再跑测试 → PR": "“Must fix” → comments to A → rerun tests → PR", "判断哪份代码能上线，永远是人的事": "Deciding which code ships is always a human call", "编排层 + 同类工具": "Orchestration Layer + Similar Tools", "编排层：一个 Agent 当项目经理，人只守关卡": "Orchestration: one agent acts as project manager; humans guard the gates", "来源：@CopperForgeAI；onorca.dev/docs；code.claude.com/docs/en/sub-agents；developers.openai.com/codex/subagents；cursor.com/docs/subagents": "Sources: @CopperForgeAI; onorca.dev/docs; code.claude.com/docs/en/sub-agents; developers.openai.com/codex/subagents; cursor.com/docs/subagents", "人": "Human", "协调者 Agent": "Coordinator agent", "项目经理：拆任务 · 派活 · 验收": "PM: split tasks · dispatch · accept", "人工决策": "Human decision", "Task 工单　Run 一次执行": "Task = ticket   Run = one execution", "失败只重开 Run，记录保留；连续失败 3 次即停止": "On failure, reopen only the Run and keep history; stop after 3 consecutive failures", "Gate：如“是否执行已审阅的迁移” → 批准执行 / 继续调研；审批权要写明归人": "Gate: e.g. “run the reviewed migration?” → approve / keep investigating; approval must be owned by a human", "同类工具（定性对比）": "Similar tools (qualitative)", "每任务独立 git worktree": "Separate git worktree per task", "多家 Agent 并排 · diff 批注 · Gate": "Vendors side by side · diff comments · Gates", "Claude Code 子 Agent": "Claude Code sub-agents", "独立上下文窗口": "Own context window", "同一会话内委派，只回传摘要": "Delegates in-session, returns only a summary", "Codex 子 Agent": "Codex sub-agents", "显式要求才派生": "Spawned only on explicit request", "并行后汇总；继承沙箱策略": "Parallel then merged; inherits sandbox policy", "Cursor 云端 Agent": "Cursor cloud agents", "独立 VM 与分支": "Own VM and branch", "本地 / 云端切换；子 Agent 独立上下文": "Local / cloud handoff; sub-agents have own context", "启示：需求没想清楚，别上编排——三个 Agent 只会得到三份误解": "Takeaway: if requirements aren't clear, skip orchestration — three agents just give three misunderstandings", "多人 + 多 Agent 协作": "Humans + Agents Collaboration", "多人 + 多 Agent：人定义与审阅，数字员工执行": "Humans + agents: humans define and review, digital workers execute", "来源：AI Native 研发范式实践手册（挑战 4 数字员工自主性；AIDC 数字投手案例）": "Source: AI Native Dev Paradigm Handbook (Challenge 4: digital-worker autonomy; AIDC ad-buyer case)", "定义需求 · 维护验证闭环 · 审阅": "Define needs · maintain verification · review", "Agent 数字员工": "Agent digital workers", "名称 · 负责人 · 职责 · 权限边界 · 任务记录": "Name · owner · duties · permission scope · task log", "共享仓库 / Issue / CI": "Shared repo / Issues / CI", "协作与验证的共同底座": "Common base for collaboration and verification", "任务 / 审批": "Tasks / approvals", "提交 / 结果": "Commits / results", "自主性三步走": "Autonomy in three steps", "可见": "Visible", "独立身份，留下任务记录": "Own identity, leaves a task log", "可控": "Controllable", "短期凭证 + 最小权限": "Short-lived creds + least privilege", "自主": "Autonomous", "高风险操作触发人工审批": "Risky ops trigger human approval", "护栏要机器可执行，不能写在提示词里当君子协定": "Guardrails must be machine-enforced, not a gentlemen's agreement in a prompt", "案例演进：超级个体 → 数字员工 → 云上 Scrum": "Case evolution: super-individual → digital workers → Scrum in the cloud", "启示：到这一步，人主要只做两件事——维护验证闭环、找出有价值的需求": "Takeaway: at this stage humans mainly do two things — maintain verification and find valuable requirements", "图1 传统 CI/CD DevOps": "Fig. 1 Traditional CI/CD DevOps", "图1 传统 CI/CD：流水线自动跑，判断仍在人": "Fig. 1 Traditional CI/CD: pipelines run automatically, judgment stays human", "来源：作者整理；Google SRE Book (sre.google/sre-book)": "Sources: author's compilation; Google SRE Book (sre.google/sre-book)", "开发": "Dev", "运维": "Ops", "人仍在这些地方拍板": "Where humans still decide", "发布时机与灰度范围": "Release timing & canary scope", "告警是真是假": "Is the alert real?", "根因在哪一层": "Which layer holds the root cause?", "回滚，还是向前修复": "Roll back or fix forward?", "典型流水线（示意）": "Typical pipeline (illustrative)", "编译 · 单测 · 扫描": "Compile · unit tests · scans", "制品库": "Artifact repo", "灰度 · 蓝绿": "Canary · blue-green", "生产": "Production", "监控告警": "Monitoring & alerts", "人工排障": "Manual debugging", "启示：自动化的是流水线，判断仍靠人": "Takeaway: the pipeline is automated; judgment still relies on humans", "图2 AIOps 自修复闭环": "Fig. 2 AIOps Self-Healing Loop", "图2 AIOps 自修复闭环：低风险自动，高风险过人": "Fig. 2 AIOps self-healing loop: low risk is automated, high risk goes to a human", "来源：作者整理；AI Native 研发范式实践手册（排障证据链）": "Sources: author's compilation; AI Native Dev Paradigm Handbook (troubleshooting evidence chain)", "告警 / 异常检测": "Alert / anomaly detection", "指标阈值 · 异常模式": "Metric thresholds · anomaly patterns", "根因分析 Agent": "Root-cause agent", "日志 · Trace · 指标 · 变更记录": "Logs · traces · metrics · change log", "生成修复": "Generate fix", "回滚 · 扩容 · 代码 PR": "Rollback · scale out · code PR", "沙箱验证": "Sandbox verify", "复现 + 跑测试": "Reproduce + run tests", "人工审批关卡": "Human approval gate", "高风险变更": "High-risk changes", "灰度发布": "Canary release", "小流量先行": "Small traffic first", "观测确认": "Observe & confirm", "指标恢复?": "Metrics recovered?", "沉淀 Runbook / 规则": "Capture runbook / rules", "下次同类更快": "Faster next time", "低风险\n自动放行": "Low risk\nauto-approved", "<tspan font-weight=\"700\">证据先于结论：</tspan>Agent 先收集日志、Trace、指标与变更记录，再给修复方案": "<tspan font-weight=\"700\">Evidence before conclusions: </tspan>the agent gathers logs, traces, metrics and change records before proposing a fix", "<tspan fill=\"#1F63C9\">■</tspan> 自动路径　<tspan fill=\"#EE7A1E\">■</tspan> 人工关卡　（流程为示意）": "<tspan fill=\"#1F63C9\">■</tspan> Automated path　<tspan fill=\"#EE7A1E\">■</tspan> Human gate　(illustrative flow)", "启示：自动的是取证与执行，风险分级与拍板仍归人": "Takeaway: evidence gathering and execution are automated; risk tiering and sign-off stay human", "图3 未来形态": "Fig. 3 The Future", "图3 未来形态：人定目标与验收，Agent 团队交付": "Fig. 3 The future: humans set goals and acceptance, agent teams deliver", "来源：作者观点（趋势判断），延伸自本讲第 4–5 章": "Source: author's view (trend forecast), extending chapters 4–5", "趋势判断（作者观点）": "Trend forecast (author's view)", "目标 · 约束\n验收标准": "Goals · constraints\nacceptance criteria", "编排 Agent": "Orchestrator agent", "拆解 · 派发 · 汇总": "Decompose · dispatch · aggregate", "人确认 Spec": "Human confirms spec", "需求 Agent": "Requirements agent", "设计 Agent": "Design agent", "编码 Agent": "Coding agent", "测试 Agent": "Testing agent", "运维 Agent": "Ops agent", "人批准发布": "Human approves release", "持续交付": "Continuous delivery", "生产运行": "Production", "生产反馈 → 自动变成新需求": "Production feedback → new requirements automatically", "启示：人不再逐行写代码，而是定目标、守两道关": "Takeaway: humans stop writing code line by line; they set goals and guard two gates", "角色与组织变化": "Roles & Organization", "角色与组织：从写代码，到定义问题与设计验证": "Roles & organization: from writing code to defining problems and designing verification", "来源：作者观点；AI Native 研发范式实践手册（超级个体期）": "Sources: author's view; AI Native Dev Paradigm Handbook (super-individual stage)", "过去：写代码为主": "Past: mostly writing code", "读需求": "Read reqs", "写代码": "Write code", "调试": "Debug", "时间大头在实现": "Most time goes to implementation", "未来：定义问题 + 设计验证 + 审阅": "Future: define problems + design verification + review", "写 Spec": "Write spec", "搭验证": "Build checks", "审 diff": "Review diff", "守 Gate": "Guard gates", "时间大头在“问对”与“验准”": "Most time goes to asking right and verifying precisely", "组织随之变化": "Organizations change too", "团队更小": "Smaller teams", "少数人 + 一组 Agent": "A few people + a set of agents", "超级个体": "Super-individuals", "一人同时开 3～5 个会话": "One person runs 3–5 sessions at once", "架构师 → Harness / 平台工程": "Architect → harness / platform engineering", "设计上下文、环境与验证底座": "Design the context, env and verification base", "启示：价值从“写得快”转向“问得对、验得准”": "Takeaway: value shifts from “writing fast” to “asking right, verifying precisely”", "未解问题 + 明天 5 件事": "Open Questions + 5 Things for Tomorrow", "未解问题，和明天就能做的 5 件事": "Open questions, and 5 things you can do tomorrow", "来源：作者整理；AI Native 研发范式实践手册；@huangtongxueh（审阅是瓶颈，x.com/huangtongxueh/status/2108577165306687938）": "Sources: author's compilation; AI Native Dev Paradigm Handbook; @huangtongxueh (review is the bottleneck, x.com/huangtongxueh/status/2108577165306687938)", "审阅成瓶颈": "Review is the bottleneck", "Agent 产出快，人审不过来": "Agents ship fast; humans can't keep up reviewing", "安全与权限": "Security & permissions", "凭证、数据、高危操作的边界": "Boundaries for creds, data, risky ops", "成本与度量": "Cost & metrics", "token 开销 vs 交付结果": "Token spend vs delivered outcomes", "遗留系统上下文": "Legacy-system context", "文档缺失、隐性约定多": "Missing docs, many implicit conventions", "明天就能做的 5 件事": "5 things you can do tomorrow", "写一份 AGENTS.md": "Write an AGENTS.md", "结构 · 命令 · 禁区": "Layout · commands · off-limits", "补可自动跑的测试": "Add tests that run automatically", "让 Agent 自己判对错": "Let the agent judge right from wrong", "干净复现": "Clean repro", "选一个小需求，用 Agent 端到端做": "Pick a small feature; do it end-to-end with an agent", "从 Spec 到 PR": "From spec to PR", "记录度量": "Track metrics", "交付周期 · 返工": "Lead time · rework", "启示：先把验证闭环搭起来，再谈更多 Agent": "Takeaway: build the verification loop first, then talk about more agents"};
const PFX=[['专家 E','Expert E'],['步骤 ','Step '],['分支 fix-','branch fix-']];
const tr=s=>{if(LANG!=='en'||s==null)return s;s=String(s);if(EN[s]!==undefined)return EN[s];{const m=s.match(/^(•\s+)([\s\S]*)$/);if(m)return m[1]+tr(m[2]);}for(const[a,b]of PFX)if(s.startsWith(a))return b+s.slice(a.length);if(/[\u4e00-\u9fff]/.test(s))(window.__miss=window.__miss||new Set).add(s);return s;};
/* ---- 手绘渲染引擎（离线，无依赖）：种子随机 + 双笔触抖动路径，Excalidraw / Rough.js 风格 ---- */
const C={ink:'#2B2B2B',blue:'#1F63C9',blueT:'#DCE7F8',orange:'#EE7A1E',orangeT:'#FBE3CC',muted:'#6B6B6B',paper:'#F7F4EC',card:'#FBF9F3'};
const FH="'ZCOOL XiaoWei','Noto Sans CJK SC',sans-serif";
const FS="'Noto Sans CJK SC',sans-serif";
const FL="'Kalam','ZCOOL XiaoWei','Noto Sans CJK SC',sans-serif";
const FM="'IBM Plex Mono','Noto Sans CJK SC',monospace";
const FONTS={hand:FH,sans:FS,lat:FL,mono:FM};
const STY={
  ink:{s:C.ink,f:C.card,t:C.ink,u:C.muted},
  paper:{s:C.ink,f:C.card,t:C.ink,u:C.muted},
  blue:{s:C.blue,f:C.blueT,t:C.blue,u:'#3d5f94'},
  blueline:{s:C.blue,f:C.card,t:C.blue,u:C.muted},
  orange:{s:C.orange,f:C.orangeT,t:C.ink,u:'#7a5634'},
  orangeline:{s:C.orange,f:C.card,t:C.ink,u:C.muted},
  solid:{s:C.blue,f:C.blue,t:'#FFFFFF',u:'#DCE7F8'},
  osolid:{s:C.orange,f:C.orange,t:'#FFFFFF',u:'#FFF1E3'},
  muted:{s:C.muted,f:'none',t:C.muted,u:C.muted},
  none:{s:'none',f:'none',t:C.ink,u:C.muted}
};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
/* ZCOOL XiaoWei 的「回」字渲染成实心方块：该字一律改用 Noto Sans CJK SC */
const hui=(s,font)=> (font===FS||font===FM)? s : s.replace(/回/g,`<tspan font-family="${FS.replace(/'/g,'&apos;')}">回</tspan>`);
const cw=ch=>/[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF\u3000-\u303F“”‘’…—]/.test(ch)?1:(/[A-Z@#%&mwMW]/.test(ch)?0.66:0.54);
const tw=(s,fs)=>[...s].reduce((a,c)=>a+cw(c),0)*fs;
function wrap(s,maxW,fs){
  const out=[];
  for(const para of String(s).split('\n')){
    if(tw(para,fs)<=maxW){out.push(para);continue;}
    let line='',tokens=para.match(/[A-Za-z0-9_.\-+\/()%'’:]+\s*|\s+|./gu)||[];
    for(const t of tokens){
      if(tw(line+t,fs)>maxW && line.trim()){out.push(line.trim());line=t.trimStart();}
      else line+=t;
    }
    if(line.trim())out.push(line.trim());
  }
  return out;
}
function Sketch(seed){
  let st=(seed*2654435761)>>>0||1;
  const R=()=>{st|=0;st=st+0x6D2B79F5|0;let t=Math.imul(st^st>>>15,1|st);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};
  const J=a=>(R()-0.5)*2*a;
  const f=n=>Math.round(n*10)/10;
  const out=[]; let arrowIdx=0,nodeIdx=0;
  const S={out,R,J};
  /* 一笔：带过冲与弓形的三次贝塞尔 */
  function seg(x1,y1,x2,y2,r=1,over=true,move=true){
    const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L,px=-uy,py=ux;
    const o=Math.min(2.8,0.7+L*0.01)*r, bow=J(Math.min(L*0.015,4))*r;
    const s0=over?-(R()*3.2+0.6)*r:0, s3=over?(R()*3.2+0.6)*r:0;
    const P0=[x1+ux*s0+px*J(o*0.5),y1+uy*s0+py*J(o*0.5)];
    const P3=[x2+ux*s3+px*J(o*0.5),y2+uy*s3+py*J(o*0.5)];
    const a=0.28+J(0.06),b=0.72+J(0.06);
    const C1=[x1+dx*a+px*(bow+J(o*0.35)),y1+dy*a+py*(bow+J(o*0.35))];
    const C2=[x1+dx*b+px*(bow+J(o*0.35)),y1+dy*b+py*(bow+J(o*0.35))];
    return (move?`M${f(P0[0])} ${f(P0[1])}`:`L${f(P0[0])} ${f(P0[1])}`)+`C${f(C1[0])} ${f(C1[1])} ${f(C2[0])} ${f(C2[1])} ${f(P3[0])} ${f(P3[1])}`;
  }
  function polyPath(pts,closed,passes=2,r=1){
    let d='';
    for(let p=0;p<passes;p++){
      const n=closed?pts.length:pts.length-1;
      for(let i=0;i<n;i++){const a=pts[i],b=pts[(i+1)%pts.length];d+=seg(a[0],a[1],b[0],b[1],p?r*1.5:r,true,true);}
    }
    return d;
  }
  function fillPath(pts){return 'M'+pts.map(p=>`${f(p[0]+J(1.6))} ${f(p[1]+J(1.6))}`).join('L')+'Z';}
  function catmull(pts){
    let d=`M${f(pts[0][0])} ${f(pts[0][1])}`;
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
      d+=`C${f(p1[0]+(p2[0]-p0[0])/6)} ${f(p1[1]+(p2[1]-p0[1])/6)} ${f(p2[0]-(p3[0]-p1[0])/6)} ${f(p2[1]-(p3[1]-p1[1])/6)} ${f(p2[0])} ${f(p2[1])}`;
    }
    return d;
  }
  function ellPath(cx,cy,rx,ry,r=1){
    let d='';
    for(let p=0;p<2;p++){
      const a0=R()*Math.PI*2,tot=Math.PI*2+0.25+R()*0.35,n=34,pts=[];
      const ox=J(2*r),oy=J(2*r);
      for(let i=0;i<=n;i++){const a=a0+tot*i/n,k=1+J(0.022*r);pts.push([cx+ox+Math.cos(a)*rx*k,cy+oy+Math.sin(a)*ry*k]);}
      d+=catmull(pts);
    }
    return d;
  }
  const P=(d,s,sw=2.2,extra='')=>`<path d="${d}" fill="none" stroke="${s}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;
  const PF=(d,fl)=>`<path class="fl" d="${d}" fill="${fl}" stroke="none"/>`;
  /* 文本 */
  function text(x,y,s,o={}){const s0=String(s);s=tr(s);if(LANG==='en'&&s!==s0&&!o.w){const mw=t=>Math.max(...String(t).replace(/<[^>]+>/g,'').split('\n').map(l=>tw(l,1)));const z=mw(s0)*1.22,e=mw(s);if(e>z){o=Object.assign({},o,{fs:Math.max((o.fs||22)*0.78,(o.fs||22)*z/e)});}}
    const fs=o.fs||22,font=FONTS[o.f||'hand'],lh=o.lh||1.25,a=o.a||'start',col=o.c||C.ink;
    const lines=o.w?wrap(s,o.w,fs):String(s).split('\n');
    const y0=o.vc? y-(lines.length-1)*fs*lh/2+fs*0.35 : y;
    lines.forEach((ln,i)=>{
      const body=o.raw?ln:hui(esc(ln),font);
      out.push(`<text x="${f(x)}" y="${f(y0+i*fs*lh)}" font-family="${font.replace(/'/g,'&apos;')}" font-size="${fs}" fill="${col}" text-anchor="${a}"${o.b?' font-weight="700"':''}${o.it?' font-style="italic"':''}${o.halo?' class="halo"':''}${o.op?` opacity="${o.op}"`:''}>${body}</text>`);
    });
    return lines.length;
  }
  function blockText(cx,cy,w,label,o,sty,maxH){
    label=label?tr(label):label; const sub=o.sub?tr(o.sub):o.sub;
    let fs=o.fs||26,sfs=o.sfs||17;const font=FONTS[o.f||'hand'];
    let L,U,H,guard=0;
    const calc=()=>{L=label?wrap(label,w,fs):[];U=sub?wrap(sub,w,sfs):[];
      H=(L.length?L.length*fs*1.18-0.12*fs:0)+(U.length?(L.length?8:0)+U.length*sfs*1.3-0.3*sfs:0);};
    calc();
    if(LANG==='en'){const too=()=>(maxH&&H>maxH-8)||[...L.map(l=>tw(l,fs)),...U.map(l=>tw(l,sfs))].some(v=>v>w+4);
      while(too()&&guard++<30){fs*=0.94;sfs=Math.max(11,sfs*0.95);calc();}}
    const _H=(L.length?L.length*fs*1.18-0.12*fs:0)+(U.length?(L.length?8:0)+U.length*sfs*1.3-0.3*sfs:0);
    let y=cy-H/2+fs*0.86;
    const ax=o.align==='left'?cx-w/2:cx, an=o.align==='left'?'start':'middle';
    L.forEach(l=>{out.push(`<text x="${f(ax)}" y="${f(y)}" font-family="${font.replace(/'/g,'&apos;')}" font-size="${fs}" fill="${o.tc||sty.t}" text-anchor="${an}"${o.it?' font-style="italic"':''}>${o.raw?l:hui(esc(l),font)}</text>`);y+=fs*1.18;});
    if(U.length){y=L.length?y-fs*1.18+fs*0.22+8:cy-H/2;U.forEach(l=>{out.push(`<text x="${f(ax)}" y="${f(y+sfs*0.86)}" font-family="${(o.sf?FONTS[o.sf]:FS).replace(/'/g,'&apos;')}" font-size="${sfs}" fill="${o.uc||sty.u}" text-anchor="${an}">${hui(esc(l),o.sf?FONTS[o.sf]:FS)}</text>`);y+=sfs*1.3;});}
  }
  const open=(cls='node')=>{out.push(`<g class="${cls}" style="--n:${nodeIdx++}">`);};
  const close=()=>out.push('</g>');
  const anchors=(x,y,w,h)=>({x,y,w,h,cx:x+w/2,cy:y+h/2,l:[x,y+h/2],r:[x+w,y+h/2],t:[x+w/2,y],b:[x+w/2,y+h],
    at:(fx,fy)=>[x+w*fx,y+h*fy]});
  S.box=(x,y,w,h,label,o={})=>{
    const sty=STY[o.c||'ink'];
    if(!o.static)open(o.cls?'node '+o.cls:'node');
    const pts=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
    const fl=o.fill||sty.f; if(fl!=='none')out.push(PF(fillPath(pts),fl));
    out.push(P(polyPath(pts,true,o.single?1:2,o.r||1),o.stroke||sty.s,o.sw||2.3,` class="st"${o.dash?' stroke-dasharray="9 7"':''}`));
    blockText(x+w/2,y+h/2+(o.dy||0),w-(o.pad||26),label,o,sty,h);
    if(!o.static)close();
    return anchors(x,y,w,h);
  };
  S.poly=(pts,label,o={})=>{
    const sty=STY[o.c||'ink']; open();
    const fl=o.fill||sty.f; if(fl!=='none')out.push(PF(fillPath(pts),fl));
    out.push(P(polyPath(pts,true,2),sty.s,2.1,' class="st"'));
    if(label||o.sub){const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);const cx=o.cx||(Math.min(...xs)+Math.max(...xs))/2,cy=o.cy||(Math.min(...ys)+Math.max(...ys))/2;blockText(cx,cy,o.tw||200,label,o,sty);}
    close();
  };
  S.dia=(cx,cy,w,h,label,o={})=>{S.poly([[cx,cy-h/2],[cx+w/2,cy],[cx,cy+h/2],[cx-w/2,cy]],label,Object.assign({tw:w*0.7},o));return anchors(cx-w/2,cy-h/2,w,h);};
  S.ell=(cx,cy,rx,ry,label,o={})=>{
    const sty=STY[o.c||'ink']; open();
    const fl=o.fill||sty.f; if(fl!=='none')out.push(`<ellipse class="fl" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fl}"/>`);
    out.push(P(ellPath(cx,cy,rx,ry),sty.s,2.1,' class="st"'));
    blockText(cx,cy,rx*1.6,label,o,sty,ry*1.7); close();
    return anchors(cx-rx,cy-ry,rx*2,ry*2);
  };
  S.frame=(x,y,w,h,o={})=>{
    const sty=STY[o.c||'ink'];
    const pts=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
    out.push('<g class="frame">');
    if(o.fill)out.push(PF(fillPath(pts),o.fill));
    if(!o.nostroke)out.push(P(polyPath(pts,true,o.dash?1:2,0.8),o.stroke||sty.s,o.sw||1.8,o.dash?' stroke-dasharray="10 8"':''));
    if(o.label)text(x+(o.lx||22),y+(o.ly||40),o.label,{fs:o.lfs||28,c:o.lc||(o.c==='solid'?'#fff':C.blue),f:o.lf||'hand'});
    out.push('</g>');
    return anchors(x,y,w,h);
  };
  S.note=(x,y,w,h,s,o={})=>{
    open('node note');
    const k=o.tilt??-0.9;
    out.push(`<g transform="rotate(${k} ${x+w/2} ${y+h/2})">`);
    out.push(PF(fillPath([[x,y+3],[x+w,y],[x+w-2,y+h],[x+2,y+h-2]]),C.orangeT));
    blockText(x+w/2,y+h/2,w-40,s,{fs:o.fs||26},STY.ink,h);
    out.push('</g>'); close();
    return anchors(x,y,w,h);
  };
  S.pill=(x,y,w,h,s,o={})=>{
    open('node'); const col=o.c==='orange'?C.orange:(o.c==='ink'?C.ink:C.blue);
    out.push(`<rect class="fl" x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="${col}"/>`);
    out.push(P(polyPath([[x+h/2,y],[x+w-h/2,y]],false,1,0.6),col,1.6));
    s=tr(s);let pf=o.fs||20;if(LANG==='en')while(tw(s,pf)>w-12&&pf>11)pf*=0.94;text(x+w/2,y+h/2,s,{fs:pf,c:'#fff',a:'middle',vc:true,f:o.f||'hand'}); close();
    return anchors(x,y,w,h);
  };
  S.line=(pts,o={})=>{const sty=STY[o.c||'ink'];out.push(P(polyPath(pts,!!o.closed,o.passes||1,0.8),o.stroke||sty.s,o.sw||1.8,o.dash?' stroke-dasharray="8 7"':''));};
  /* 箭头：一条连续路径（可做 draw-on 动画）+ 手绘箭头 */
  S.arrow=(pts,o={})=>{
    pts=pts.map(p=>[p[0],p[1]]);
    const col=o.color||({ink:C.ink,blue:C.blue,orange:C.orange,muted:C.muted,white:'#fff'})[o.c||'ink'];
    const sh=(a,b,d)=>{const L=Math.hypot(b[0]-a[0],b[1]-a[1])||1;return[a[0]+(b[0]-a[0])/L*d,a[1]+(b[1]-a[1])/L*d];};
    const n=pts.length; const g1=o.g1??5,g2=o.g2??7;
    pts[0]=sh(pts[0],pts[1],g1); pts[n-1]=sh(pts[n-1],pts[n-2],g2);
    let d;
    if(o.curve){
      const q=pts.map((p,i)=>(i===0||i===n-1||o.smooth)?p:[p[0]+J(3),p[1]+J(3)]);
      d=catmull(q);
    } else {
      d='';for(let i=0;i<n-1;i++)d+=seg(pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],0.7,false,i===0);
    }
    const delay=Math.min(0.25+arrowIdx++*0.13,3.2).toFixed(2);
    out.push(`<g class="arr${o.dash?' dashed':''}" style="--d:${delay}s">`);
    const sw=o.sw||2.2;
    out.push(`<path class="ln" d="${d}" pathLength="1" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round"${o.dash?' stroke-dasharray="0.018 0.014"':''}/>`);
    const head=(tip,from)=>{
      let dx=tip[0]-from[0],dy=tip[1]-from[1];const L=Math.hypot(dx,dy)||1;dx/=L;dy/=L;
      const hl=o.hl||13,sp=0.45;
      const a1=[tip[0]-hl*(dx*Math.cos(sp)-dy*Math.sin(sp)),tip[1]-hl*(dy*Math.cos(sp)+dx*Math.sin(sp))];
      const a2=[tip[0]-hl*(dx*Math.cos(-sp)-dy*Math.sin(-sp)),tip[1]-hl*(dy*Math.cos(-sp)+dx*Math.sin(-sp))];
      out.push(`<path class="hd" d="M${f(a1[0])} ${f(a1[1])}Q${f(tip[0]-dx*2+J(1))} ${f(tip[1]-dy*2+J(1))} ${f(tip[0])} ${f(tip[1])}Q${f(tip[0]-dx*3)} ${f(tip[1]-dy*3)} ${f(a2[0])} ${f(a2[1])}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`);
    };
    const back=(arr,i)=>{ if(!o.curve) return arr[i]; return arr[i];};
    if(!o.nohead)head(pts[n-1],o.curve&&n>2?(()=>{const p=pts[n-2],q=pts[n-1];return [q[0]-(q[0]-p[0])*0.3,q[1]-(q[1]-p[1])*0.3];})():pts[n-2]);
    if(o.both)head(pts[0],pts[1]);
    if(o.label){
      let lp=o.lp;
      if(!lp){let best=0,bi=0;for(let i=0;i<n-1;i++){const L=Math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]);if(L>best){best=L;bi=i;}}
        const a=pts[bi],b=pts[bi+1];lp=[(a[0]+b[0])/2,(a[1]+b[1])/2-12];}
      text(lp[0],lp[1],o.label,{fs:o.lfs||19,c:o.lc||(o.c==='ink'||!o.c?C.muted:col),a:o.la||'middle',f:o.lf||'sans',halo:true});
    }
    out.push('</g>');
  };
  S.text=text;
  S.tag=(x,y,s,o={})=>text(x,y,s,Object.assign({fs:26,c:C.blue},o));
  S.small=(x,y,s,o={})=>text(x,y,s,Object.assign({fs:18,c:C.muted,f:'sans'},o));
  S.node=(fn,cls='node')=>{open(cls);fn();close();};
  S.raw=s=>out.push(s);
  S.svg=(vb='0 0 1600 800')=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" class="dg" role="img">${out.join('')}</svg>`;
  return S;
}

const D=[];
/* ===================== 01 大模型如何训练 ===================== */
D.push({n:3,ch:1,nav:'训练全景流程',title:'训练全景：预训练学会语言，后训练学会听指令与推理',
src:'来源：Ouyang et al. 2022 InstructGPT (arXiv:2203.02155); Rafailov et al. 2023 DPO (arXiv:2305.18290); DeepSeek-R1 2025 (arXiv:2501.12948)',
draw(S){const{box,arrow,note}=S;
 const h1=box(30,30,250,66,'数据',{fs:30}),h2=box(330,30,250,66,'预训练',{fs:30}),h3=box(630,30,400,66,'后训练',{c:'blue',fs:30}),h4=box(1080,30,220,66,'评测',{fs:30}),h5=box(1340,30,230,66,'推理部署',{fs:30});
 [[h1,h2],[h2,h3],[h3,h4],[h4,h5]].forEach(([a,b])=>arrow([a.r,b.l]));
 [['采集','网页/代码/书籍'],['清洗','质量与安全过滤'],['去重','精确 + 近似去重'],['配比','调整领域混合比例']].forEach((t,i)=>box(30,135+i*95,250,74,t[0],{sub:t[1],fs:24}));
 const p=[['目标','next-token 预测'],['语料','海量无标注文本'],['自监督学习','算力密集']].map((t,i)=>box(330,135+i*95,250,74,t[0],{sub:t[1],fs:24}));
 const base=box(355,520,200,64,'Base 模型',{c:'orange',fs:26});
 arrow([p[2].b,base.t]);
 const s1=box(660,135,340,92,'SFT 监督微调',{sub:'人工示范的指令-回答对',fs:25,c:'blueline'});
 const s2=box(660,270,340,92,'偏好对齐 RLHF / DPO',{sub:'奖励模型 + PPO，或直接优化偏好',fs:25,c:'blueline'});
 const s3=box(660,405,340,92,'RLVR 可验证奖励 RL',{sub:'答案 / 单测自动判分作奖励',fs:25,c:'orange'});
 arrow([s1.b,s2.t]);arrow([s2.b,s3.t]);
 arrow([base.r,[612,552],[612,181],s1.l]);
 const chat=box(710,540,240,64,'Chat / 推理模型',{c:'solid',fs:25});
 arrow([s3.b,chat.t]);
 ['能力基准测试','安全与红队','人工盲评对比'].forEach((t,i)=>box(1080,135+i*95,220,74,t,{fs:24}));
 const d=[['量化','INT8 / INT4'],['KV Cache','缓存键值'],['服务化','批处理 + 流式']].map((t,i)=>box(1340,135+i*95,230,74,t[0],{sub:t[1],fs:24}));
 arrow([chat.r,[1455,572],[d[2].b[0],d[2].b[1]]],{c:'blue'});
 note(1000,670,570,84,'启示：可自动验证的任务最先被 RL 练强');
}});
D.push({n:4,ch:1,nav:'数据管线 + Tokenizer',title:'数据决定上限：文本先切成 token，再映射成向量',
src:'来源：Sennrich et al. 2016 BPE (arXiv:1508.07909)；示例切分与 id 为示意',
draw(S){const{box,arrow,note,frame,text,tag,small}=S;
 tag(40,52,'数据管线',{fs:28});
 const st=[['采集','网页 / 代码 / 书籍 / 论文'],['过滤 / 清洗','剔除低质、有害、隐私内容'],['去重','精确 + MinHash 近似去重'],['数据配比','按领域调整混合比例']].map((t,i)=>box(40,80+i*128,400,88,t[0],{sub:t[1],fs:27,sfs:18,c:i==3?'blueline':'ink'}));
 for(let i=0;i<3;i++)arrow([st[i].b,st[i+1].t]);
 frame(520,30,1050,610,{fill:C.blueT,stroke:C.blue,label:'Tokenizer 示例（切分与 id 均为示意）',lfs:26});
 const src=box(640,100,560,66,'public class UserService',{f:'mono',fs:26});
 const toks=['public','_class','_User','Service'].map((t,i)=>box(600+i*165,250,145,62,t,{f:'mono',fs:23,c:i==2?'orange':'ink'}));
 const ids=['1212','1080','2938','1860'].map((t,i)=>box(600+i*165,385,145,58,t,{f:'mono',fs:23,c:i==2?'orange':'ink'}));
 arrow([src.b,[920,248]],{label:'BPE 子词切分',lp:[1010,212],la:'start'});
 toks.forEach((t,i)=>arrow([t.b,ids[i].t]));
 text(1270,325,'查词表 → token id',{fs:19,f:'sans',c:C.muted});
 const emb=box(600,525,640,66,'_User → [0.12, -0.53, …, 0.08]',{f:'mono',fs:23,c:'orangeline'});
 arrow([ids[2].b,[ids[2].b[0],emb.y]],{c:'orange',label:'Embedding 查表 → d 维向量',lp:[1015,495],la:'start'});
 text(1290,140,'BPE：从字符起步，\n反复合并高频相邻对',{fs:20,f:'sans',c:C.ink});
 text(1290,250,'_ 表示前导空格',{fs:19,f:'sans',c:C.muted});
 note(40,660,1000,84,'启示：数据质量与配比，决定模型能力的上限');
}});
D.push({n:5,ch:1,nav:'Transformer / Attention',title:'Transformer：注意力让每个 token 按相关性汇聚上下文',
src:'来源：Vaswani et al. 2017 “Attention Is All You Need” (arXiv:1706.03762)',
draw(S){const{box,arrow,note,frame,text}=S;
 const inp=box(30,280,210,130,'输入 token',{sub:'Embedding\n+ 位置编码',fs:27,sfs:19});
 frame(300,60,420,560,{dash:true,stroke:C.orange});
 text(510,600,'× N 层（残差连接）',{fs:24,c:C.orange,a:'middle'});
 const at=box(340,95,340,92,'掩码多头自注意力',{c:'blue',fs:28});
 const n1=box(390,230,240,60,'Add & Norm',{f:'lat',fs:25});
 const ff=box(340,335,340,92,'FFN 前馈网络',{fs:28});
 const n2=box(390,470,240,60,'Add & Norm',{f:'lat',fs:25});
 arrow([inp.r,[268,345],[268,141],at.l]);
 arrow([at.b,n1.t]);arrow([n1.b,ff.t]);arrow([ff.b,n2.t]);
 arrow([[320,120],[320,260],[n1.l[0],260]],{dash:true,c:'orange',g1:0});
 arrow([[320,300],[320,500],[n2.l[0],500]],{dash:true,c:'orange',g1:0});
 const lin=box(780,450,190,100,'Linear\n+ Softmax',{f:'lat',fs:25});
 const nx=box(1020,450,170,100,'下一个\ntoken',{c:'orange',fs:27});
 arrow([n2.r,[740,500],[740,500],lin.l]);arrow([lin.r,nx.l]);
 frame(1060,40,510,330,{fill:C.blueT,stroke:C.blue,label:'注意力计算（放大）',lfs:25});
 text(1100,140,'Attention(Q, K, V) =',{fs:30,f:'sans',c:C.ink});
 text(1130,205,'softmax(QK<tspan baseline-shift="super" font-size="18">T</tspan> / √d<tspan baseline-shift="sub" font-size="18">k</tspan>) V',{fs:34,f:'sans',c:C.blue,raw:true});
 S.line([[1100,240],[1530,240]],{c:'muted',dash:true});
 [['Q / K / V','输入的三组线性投影'],['÷ √d_k','防止 softmax 饱和'],['掩码','每个位置只看前文'],['多头','并行多组注意力']].forEach((t,i)=>{
   text(1100,i<2?282+i*40:282+i*40,t[0],{fs:20,f:'sans',c:C.blue,b:true});text(1250,282+i*40,t[1],{fs:20,f:'sans'});});
 arrow([at.r,[1060,200]],{dash:true,c:'blue',label:'放大',lp:[880,140]});
 note(30,670,820,84,'现代 LLM 多为 decoder-only：只堆叠解码器，逐 token 生成',{fs:25});
}});
D.push({n:6,ch:1,nav:'预训练 + Scaling Law',title:'预训练：预测下一个 token，规模按幂律换来更低 loss',
src:'来源：Kaplan et al. 2020 Scaling Laws (arXiv:2001.08361)；Hoffmann et al. 2022 Chinchilla (arXiv:2203.15556)',
draw(S){const{box,arrow,note,frame,text,pill}=S;
 frame(30,30,660,270,{fill:C.blue,stroke:C.blue});
 text(60,82,'训练目标：预测下一个 token',{fs:30,c:'#fff'});
 text(60,135,'public class User  →  Service',{fs:26,f:'mono',c:'#FFE3C7'});
 text(60,205,'L = −Σ log P(x<tspan baseline-shift="sub" font-size="20">t</tspan> | x<tspan baseline-shift="sub" font-size="20">&lt;t</tspan>)',{fs:36,f:'sans',c:'#fff',raw:true});
 text(60,262,'交叉熵：真实下一个 token 的负对数概率',{fs:20,f:'sans',c:C.blueT});
 S.line([[100,350],[100,690],[660,690]],{sw:2});
 arrow([[100,690],[100,345]],{nohead:false,sw:2,g1:0,g2:0});arrow([[100,690],[670,690]],{sw:2,g1:0,g2:0});
 text(115,370,'log loss',{fs:22,f:'lat',c:C.muted});
 text(660,725,'log N / D / C',{fs:22,f:'lat',c:C.muted,a:'end'});
 arrow([[130,395],[300,470],[460,560],[640,640]],{curve:true,c:'blue',sw:3,nohead:true,g1:0,g2:0});
 text(300,640,'幂律下降：双对数坐标下近似直线（示意）',{fs:19,f:'sans',c:C.muted,a:'middle'});
 text(760,200,'~20',{fs:150,f:'lat',c:C.blue});
 text(1060,130,'tokens / 参数',{fs:30,f:'lat'});
 text(1060,180,'Chinchilla 计算最优配比',{fs:26});
 text(1060,222,'给定算力：N 与 D 同比例扩大',{fs:21,f:'sans',c:C.muted});
 const N=box(770,300,220,104,'N',{sub:'参数量',f:'lat',fs:38,c:'blueline'}),Dd=box(1040,300,220,104,'D',{sub:'数据量',f:'lat',fs:38,c:'blueline'}),Cc=box(1310,300,220,104,'C',{sub:'计算量',f:'lat',fs:38,c:'orangeline'});
 const pc=pill(1040,460,220,58,'C ≈ 6ND',{f:'lat',fs:26});
 arrow([N.b,[880,489],pc.l]);arrow([Dd.b,pc.t]);arrow([Cc.b,[1420,489],pc.r],{c:'orange'});
 text(770,580,'例：70B 参数 × 1.4T tokens，优于同算力的 280B Gopher',{fs:22,f:'sans'});
 note(770,650,780,84,'启示：同等算力下，更小模型 + 更多数据往往更优',{fs:25});
}});
D.push({n:7,ch:1,nav:'后训练 SFT→RLHF→DPO→RLVR',title:'后训练：从「会续写」到「会听指令、会推理」',
src:'来源：InstructGPT (arXiv:2203.02155)；DPO (arXiv:2305.18290)；DeepSeekMath/GRPO (arXiv:2402.03300)；DeepSeek-R1 (arXiv:2501.12948)',
draw(S){const{box,arrow,note,text}=S;
 const T=[['SFT 监督微调','指令-回答示范\n学会格式与遵循指令','人工示范'],['RLHF','奖励模型打分\nPPO 优化 + KL 约束','人类偏好排序'],['DPO','直接用偏好对优化\n无需奖励模型与 RL 采样','偏好对：好 vs 差'],['RLVR 推理强化','可验证奖励：单测 / 答案\nGRPO：组内相对打分','自动判分器']];
 const bs=[],cs=[];
 T.forEach((t,i)=>{const x=30+i*395;
  text(x+10,70,'0'+(i+1),{fs:40,f:'lat',c:i==3?C.orange:C.blue});
  bs.push(box(x,90,340,170,t[0],{sub:t[1],fs:30,sfs:19,c:i==3?'orange':(i==0?'ink':'blueline')}));
  text(x+170,330,'奖励 / 数据信号',{fs:17,f:'sans',c:C.muted,a:'middle'});
  cs.push(box(x+35,345,270,64,t[2],{fs:24,c:i==3?'orange':'ink'}));
  S.line([[x+170,262],[x+170,310]],{c:'muted',dash:true});
 });
 for(let i=0;i<3;i++)arrow([bs[i].r,bs[i+1].l],{g1:4,g2:6});
 arrow([[90,490],[1520,490]],{c:'orange',sw:3,dash:true});
 text(90,530,'依赖人工标注',{fs:24,c:C.muted});
 text(1520,530,'可自动规模化',{fs:24,c:C.orange,a:'end'});
 note(360,610,880,90,'启示：代码天然可验证——单测就是奖励信号',{fs:28});
}});
D.push({n:8,ch:1,nav:'推理部署 KV Cache / MoE',title:'推理部署：Prefill 一次算完，Decode 逐 token 生成',
src:'来源：Shazeer et al. 2017 MoE (arXiv:1701.06538)；Kwon et al. 2023 vLLM / PagedAttention (arXiv:2309.06180)',
draw(S){const{box,arrow,note,text,tag,frame}=S;
 tag(30,48,'Prefill：并行 · 计算密集',{fs:21});tag(330,48,'Decode：逐 token · 访存密集',{fs:21,c:C.orange});
 const pf=box(30,80,200,96,'Prefill',{c:'blue',f:'lat',fs:30});
 const ts=['t1','t2','t3','t4'].map((t,i)=>box(300+i*130,96,90,64,t,{f:'lat',fs:26,c:'orangeline'}));
 arrow([pf.r,ts[0].l]);for(let i=0;i<3;i++)arrow([ts[i].r,ts[i+1].l],{c:'orange'});
 const kv=box(300,265,530,88,'KV Cache：缓存已算的 K / V，新 token 不再重算',{fs:21,c:'orange'});
 arrow([pf.b,[130,309],kv.l],{label:'写入',lp:[180,296]});
 ts.forEach((t,i)=>arrow([[kv.x+60+i*120,kv.y],[t.b[0],t.b[1]]],{dash:true,c:'orange',label:i==3?'每步读取':null,lp:[700,230]}));
 tag(30,430,'服务化技巧',{fs:25});
 [['量化','INT8 / INT4 省显存'],['连续批处理','请求随到随批'],['PagedAttention','KV 分页，减少碎片']].forEach((t,i)=>box(30+i*270,455,250,104,t[0],{sub:t[1],fs:i==2?24:27,f:i==2?'lat':'hand'}));
 S.line([[860,40],[860,740]],{c:'muted',dash:true});
 tag(900,48,'MoE：Router 为每个 token 选 top-k 专家',{fs:23});
 const tk=box(900,280,130,70,'token',{f:'lat',fs:26});
 const rt=box(1090,270,180,90,'Router',{c:'blue',f:'lat',fs:30});
 arrow([tk.r,rt.l]);
 const ex=[1,2,3,4,5,6].map(i=>box(1360,80+(i-1)*82,200,58,'专家 E'+i,{fs:23,c:(i==2||i==5)?'orange':'ink'}));
 ex.forEach((e,i)=>{if(i==1||i==4)arrow([rt.r,e.l],{c:'orange',sw:2.6});else S.line([[rt.r[0]+6,rt.r[1]+(i-2.5)*8],[e.l[0]-8,e.l[1]]],{c:'muted',dash:true,sw:1.4});});
 text(1180,420,'top-2 示意',{fs:19,f:'sans',c:C.orange,a:'middle'});
 text(900,600,'稀疏激活：总参数大，每 token 只算少数专家',{fs:22,f:'sans'});
 S.box(900,650,670,84,'上下文长度 = 显存与延迟成本',{c:'solid',fs:28});
}});
D.push({n:9,ch:1,nav:'常见误区澄清',title:'常见误区澄清：看起来像，不等于就是',
src:'来源：讲者整理',
draw(S){const{box,arrow,text}=S;
 const X=(cx,cy,r)=>S.node(()=>{S.line([[cx-r,cy-r],[cx+r,cy+r]],{c:'orange',sw:4,passes:2});S.line([[cx+r,cy-r],[cx-r,cy+r]],{c:'orange',sw:4,passes:2});},'node');
 const V=(cx,cy,r)=>S.node(()=>{S.line([[cx-r,cy],[cx-r*0.3,cy+r*0.8],[cx+r*1.1,cy-r]],{c:'blue',sw:4,passes:2});},'node');
 X(150,46,13);text(178,57,'误区',{fs:30,c:C.orange});
 V(782,44,15);text(814,57,'真相',{fs:30,c:C.blue});
 const M=[['像人脑一样\n理解、思考','只是预测下一个最合理的字','从海量文本学到概率——看起来像理解'],
  ['把所有书\n原文存进去','压缩学习文字模式，不存原文','所以会遗忘，也会幻觉'],
  ['训练完还会\n自动学新知识','权重固定，不会自动更新','新知识靠 RAG 或二次微调']];
 M.forEach((m,i)=>{const y=95+i*232,h=190;
  text(70,y+h/2+16,'0'+(i+1),{fs:44,f:'lat',c:C.muted,a:'middle'});
  const l=box(125,y,520,h,m[0],{c:'orange',fs:32,align:'left',pad:210});
  X(125+48,y+h/2,22);
  arrow([l.r,[760,y+h/2]],{sw:2.6});
  box(760,y,810,h,m[1],{c:'blue',fs:34,sub:m[2],sfs:22,uc:C.ink,align:'left',pad:210});
  V(760+50,y+h/2-4,24);
 });
}});
D.push({n:10,ch:1,nav:'训练成本量级',title:'训练成本：规模每大一档，费用跳一个量级',
src:'来源：讲者估算，仅供量级参考（算力+数据）',
draw(S){const{text,note,frame}=S;
 const CW=[180,230,360,215,215],X0=30,Y0=55,HH=88,RH=94;
 const xs=[X0];CW.forEach(w=>xs.push(xs[xs.length-1]+w));const XE=xs[5],YE=Y0+HH+RH*5;
 const HD=['参数规模','预训练 Token','预训练费用','SFT 费用','对齐费用'];
 const D2=[['7B','1 万亿','$25万–$45万','$2万–$8万','$1万–$5万'],['13B','1.4 万亿','$70万–$120万','$4万–$15万','$3万–$10万'],
  ['34B','2 万亿','$220万–$350万','$8万–$25万','$5万–$18万'],['70B','2.2 万亿','$600万–$1000万','$15万–$40万','$10万–$30万'],
  ['400B+','3–4 万亿','$3000万–$8000万','$50万–$120万','$30万–$80万']];
 S.node(()=>{frame(X0,Y0,XE-X0,YE-Y0,{sw:2.2});
  frame(xs[2],Y0-6,CW[2],YE-Y0+12,{fill:C.orangeT,stroke:C.orange,sw:3});
  S.line([[X0,Y0+HH],[XE,Y0+HH]],{sw:2.4,passes:2});
  for(let r=1;r<5;r++)S.line([[X0,Y0+HH+r*RH],[XE,Y0+HH+r*RH]],{c:'muted',sw:1.3});
  [1,4].forEach(c=>S.line([[xs[c],Y0],[xs[c],YE]],{c:'muted',sw:1.3}));
  HD.forEach((h,c)=>text((xs[c]+xs[c+1])/2,Y0+HH/2+10,h,{fs:c==2?32:26,c:c==2?C.orange:C.ink,a:'middle'}));});
 D2.forEach((row,r)=>S.node(()=>{const cy=Y0+HH+r*RH+RH/2;row.forEach((v,c)=>{
  const o={a:'middle',f:'sans',fs:22,c:C.ink};
  if(c==0){o.f='lat';o.fs=32;o.c=C.blue;}
  if(c==2){o.fs=25;o.b=true;}
  if(c>=3)o.c=C.muted;
  text((xs[c]+xs[c+1])/2,cy+o.fs*0.35,v,o);});}));
 const BX=1320,BY=115,BW=95,BH=500,hA=14,hS=17,hP=BH-hA-hS;
 text(1290,72,'70B 成本构成（取中值估算）',{fs:19,f:'sans',c:C.muted});
 S.node(()=>{S.raw(`<rect class="fl" x="${BX}" y="${BY}" width="${BW}" height="${hA}" fill="${C.blueT}"/><rect class="fl" x="${BX}" y="${BY+hA}" width="${BW}" height="${hS}" fill="${C.blue}"/>`);
  frame(BX,BY+hA+hS,BW,hP,{fill:C.orangeT,stroke:C.orange,sw:2.6});frame(BX,BY,BW,BH,{sw:2});
  text(BX+BW+18,BY+12,'SFT ≈3%',{fs:19,f:'sans',c:C.blue});text(BX+BW+18,BY+38,'对齐 ≈2%',{fs:19,f:'sans',c:C.blue});
  text(BX+BW+18,BY+hA+hS+hP/2-6,'预训练',{fs:32,c:C.orange});text(BX+BW+18,BY+hA+hS+hP/2+38,'≈94%',{fs:36,f:'lat',c:C.orange});});
 note(250,668,800,84,'预训练占绝大部分成本，后训练相对便宜',{fs:28});
}});
/* ===================== 02 Agent 设计原理与范式 ===================== */
D.push({n:11,ch:2,nav:'Agent 组成',title:'Agent = LLM + 规划 + 记忆 + 工具，在环境反馈中循环',
src:'来源：Lilian Weng 2023 “LLM Powered Autonomous Agents” (lilianweng.github.io)；Anthropic 2024 “Building effective agents”',
draw(S){const{box,arrow,note,frame,text}=S;
 const llm=box(620,250,330,150,'LLM',{c:'solid',sub:'推理与决策核心',f:'lat',fs:46,sfs:20});
 const pl=box(110,90,340,110,'规划',{sub:'任务分解 · 自我反思',fs:32,sfs:19});
 const me=box(110,450,340,110,'记忆',{sub:'短期=上下文 · 长期=检索',fs:32,sfs:19});
 const to=box(1170,90,340,110,'工具',{sub:'API · 代码执行 · 搜索',fs:32,sfs:19,c:'blueline'});
 const en=box(1170,450,340,110,'环境反馈',{sub:'观察 · 报错 · 测试输出',fs:32,sfs:19,c:'orange'});
 arrow([pl.r,[620,290]],{both:true,c:'blue'});
 arrow([me.r,[620,365]],{both:true,c:'blue'});
 arrow([[950,280],[1060,190],to.l],{curve:true,label:'行动',lp:[1060,170]});
 arrow([to.b,en.t],{label:'执行',lp:[1385,330],la:'start'});
 arrow([en.l,[1060,470],[950,375]],{curve:true,c:'orange',label:'观察',lp:[1075,525]});
 S.node(()=>{frame(540,500,490,110,{dash:true,stroke:C.muted});text(785,545,'Workflow vs Agent',{fs:27,f:'lat',a:'middle'});text(785,583,'预设路径 vs 模型自主决定步骤',{fs:19,f:'sans',c:C.muted,a:'middle'});});
 note(540,668,620,80,'启示：先用最简单的方案，需要时再上 Agent',{fs:25});
}});
D.push({n:12,ch:2,nav:'ReAct / Plan / Reflection',title:'三种范式：边想边做、先规划后执行、做完自我修正',
src:'来源：Yao et al. 2022 ReAct (arXiv:2210.03629)；Wang et al. 2023 Plan-and-Solve (arXiv:2305.04091)；Shinn et al. 2023 Reflexion (arXiv:2303.11366)',
draw(S){const{box,arrow,note,frame,text}=S;
 const H=[['ReAct','Yao et al. 2022'],['Plan-and-Execute','Plan-and-Solve · Wang et al. 2023'],['Reflection','Reflexion · Shinn et al. 2023']];
 H.forEach((h,i)=>{const x=30+i*525;frame(x,25,495,610,{stroke:i==2?C.orange:C.ink});text(x+247,80,h[0],{fs:36,f:'lat',c:C.blue,a:'middle'});text(x+247,112,h[1],{fs:17,f:'sans',c:C.muted,a:'middle'});});
 const th=box(170,160,215,82,'Thought',{sub:'思考',f:'lat',fs:28,c:'blue'});
 const ac=box(290,370,200,82,'Action',{sub:'行动',f:'lat',fs:28});
 const ob=box(60,370,200,82,'Observation',{sub:'观察',f:'lat',fs:26,c:'orangeline'});
 arrow([[385,215],[440,290],[420,370]],{curve:true});arrow([ac.l,ob.r]);arrow([[110,370],[110,260],th.l],{curve:true,c:'orange'});
 const pn=box(670,150,230,82,'Planner',{sub:'规划',f:'lat',fs:28,c:'blue'});
 const st=[1,2,3].map(i=>box(580+(i-1)*140,285,125,56,'步骤 '+i,{fs:22}));
 const exe=box(670,400,230,82,'Executor',{sub:'执行',f:'lat',fs:28});
 st.forEach(s=>arrow([pn.b,s.t],{g2:5}));st.forEach(s=>arrow([s.b,exe.t],{g1:3}));
 arrow([exe.r,[980,420],[990,250],pn.r],{curve:true,dash:true,c:'orange',label:'replan',lp:[1000,165],lf:'lat',lfs:22});
 const g=box(1200,150,310,74,'生成',{fs:28});
 const t=box(1200,280,310,74,'测试 / 自评',{fs:28,c:'orange'});
 const r=box(1200,410,310,74,'反思 → 修正',{fs:28,c:'blue'});
 arrow([g.b,t.t]);arrow([t.b,r.t]);
 arrow([r.l,[1125,447],[1125,187],g.l],{dash:true,c:'blue'});
 text(1160,252,'带\n着\n反\n思\n重\n试',{fs:19,f:'sans',c:C.blue,a:'middle',lh:1.15});
 ['适合：需要边走边观察的探索任务','适合：步骤清晰的长任务','适合：有明确检验标准的任务'].forEach((s,i)=>text(30+i*525+247,590,s,{fs:20,f:'sans',a:'middle'}));
 note(230,672,1140,84,'启示：编码 Agent 常把三者组合——ReAct 循环 + 计划 + 测试驱动反思',{fs:25});
}});
D.push({n:13,ch:2,nav:'MCP 协议架构',title:'MCP：用同一协议，把工具与数据接入任意 Agent',
src:'来源：Model Context Protocol Specification (modelcontextprotocol.io/specification)',
draw(S){const{box,arrow,note,frame,text}=S;
 frame(30,40,500,520,{label:'Host（IDE / Agent）',lfs:27});
 const llm=box(60,260,130,100,'LLM',{c:'solid',f:'lat',fs:32});
 const cl=[0,1,2].map(i=>box(265,120+i*140,235,76,'MCP Client',{f:'lat',fs:26,c:'blueline'}));
 cl.forEach(c=>arrow([llm.r,c.l],{g2:6}));
 text(700,100,'JSON-RPC 2.0',{fs:27,f:'lat',c:C.blue,a:'middle'});
 const sv=['GitHub Server','数据库 Server','文件系统 Server'].map((s,i)=>box(860,115+i*140,270,86,s,{fs:26}));
 cl.forEach((c,i)=>arrow([c.r,sv[i].l],{both:true,c:'blue'}));
 text(700,560,'stdio 或 Streamable HTTP',{fs:22,f:'sans',c:C.muted,a:'middle'});
 frame(1200,40,370,520,{fill:C.blue,stroke:C.blue,label:'Server 暴露',lc:'#fff',lfs:28});
 [['Tools','可执行的操作'],['Resources','只读的上下文数据'],['Prompts','可复用提示模板']].forEach((t,i)=>box(1235,110+i*145,300,110,t[0],{sub:t[1],f:'lat',fs:30,sfs:19}));
 S.line([[1130,300],[1200,300]],{c:'blue',dash:true});
 const steps=['1  LLM 生成 tool_call','2  Client 调用 Server 执行','3  结果返回上下文'].map((s,i)=>box(30+i*395,640,355,72,s,{fs:21,f:'sans',c:i==2?'orangeline':'ink'}));
 arrow([steps[0].r,steps[1].l]);arrow([steps[1].r,steps[2].l]);
 note(1200,620,370,120,'启示：M × N 适配\n变成 M + N',{fs:28});
}});
D.push({n:14,ch:2,nav:'记忆与 RAG',title:'记忆与 RAG：在对的时候，把对的知识放进上下文',
src:'来源：Lewis et al. 2020 RAG (arXiv:2005.11401)；Lilian Weng 2023 “LLM Powered Autonomous Agents”',
draw(S){const{box,arrow,note,frame,text,tag}=S;
 frame(30,30,400,690,{fill:C.blue,stroke:C.blue,label:'四类记忆',lc:'#fff',lfs:30});
 [['上下文窗口','工作记忆'],['会话摘要','短期记忆'],['向量库 · 文档','长期记忆'],['规则文件 AGENTS.md','程序性记忆']].forEach((t,i)=>box(60,100+i*152,340,120,t[0],{sub:t[1],fs:27,sfs:20}));
 tag(480,62,'离线索引');
 const off=['文档','切块','Embedding','向量库'].map((t,i)=>box(480+i*275,90,215,82,t,{fs:28,f:i==2?'lat':'hand',c:i==3?'blue':'ink'}));
 for(let i=0;i<3;i++)arrow([off[i].r,off[i+1].l]);
 tag(480,302,'在线查询');
 const on=['查询','检索 top-k','重排（可选）','拼入 Prompt','LLM'].map((t,i)=>box(480+i*220,330,180,82,t,{fs:i==2?22:25,c:i==4?'solid':(i==1?'blueline':'ink'),dash:i==2}));
 for(let i=0;i<4;i++)arrow([on[i].r,on[i+1].l],{g1:4,g2:6});
 arrow([off[3].b,[off[3].b[0],250],[on[1].t[0],250],on[1].t],{c:'blue',dash:true});
 text(1010,505,'参数记忆（模型权重） + 非参数记忆（检索索引）',{fs:28,a:'middle'});
 note(560,600,900,90,'启示：RAG 让模型「开卷作答」，答案可追溯到来源',{fs:27});
}});
D.push({n:15,ch:2,nav:'多 Agent + Harness 闭环',title:'多 Agent 与 Harness：在受控闭环里迭代到验证通过',
src:'来源：Anthropic 2024 “Building effective agents”；Anthropic 2025 “How we built our multi-agent research system”',
draw(S){const{box,arrow,note,frame,text,tag}=S;
 tag(285,45,'编排者 - 工作者',{a:'middle'});
 const o=box(185,65,200,58,'编排者',{c:'blue',fs:25});
 [0,1,2].forEach(i=>{const w=box(40+i*170,170,150,58,'工作者',{fs:22});arrow([o.b,w.t],{g2:4});});
 tag(800,45,'流水线',{a:'middle'});
 const ab=['Agent A','Agent B','Agent C'].map((t,i)=>box(565+i*170,110,145,62,t,{f:'lat',fs:22}));
 arrow([ab[0].r,ab[1].l],{g1:3,g2:5});arrow([ab[1].r,ab[2].l],{g1:3,g2:5});
 tag(1370,45,'辩论 · 评审',{a:'middle'});
 const gen=box(1165,95,190,76,'生成者',{fs:25}),rev=box(1400,95,170,76,'评审者',{fs:25,c:'orange'});
 arrow([gen.at(1,0.32),rev.at(0,0.32)]);arrow([rev.at(0,0.72),gen.at(1,0.72)],{c:'orange'});
 S.line([[30,280],[1570,280]],{c:'muted',dash:true});
 tag(40,335,'Harness 闭环',{fs:32,f:'lat'});
 frame(560,365,580,180,{dash:true,stroke:C.muted});text(1135,355,'沙箱 / 受控环境',{fs:19,f:'sans',c:C.muted,a:'end'});
 const a=box(30,395,250,118,'任务 / Spec',{fs:30});
 const b=box(330,395,200,118,'规划',{fs:30,c:'blue'});
 const c=box(590,395,240,118,'工具执行',{fs:30});
 const d=box(870,395,240,118,'验证',{fs:32,c:'orange',sub:'测试 · lint · 类型'});
 const e=box(1250,395,300,118,'提交 PR',{fs:32,c:'blueline'});
 arrow([a.r,b.l]);arrow([b.r,c.l]);arrow([c.r,d.l]);arrow([d.r,e.l],{c:'blue',label:'通过',lp:[1180,440]});
 arrow([d.b,[990,600],[430,600],b.b],{c:'orange',label:'失败：报错与测试输出进上下文，重试',lp:[710,632],lfs:21});
 note(1120,640,450,120,'启示：人只在两端——\n写清 Spec，审阅结果',{fs:27});
}});
D.push({n:16,ch:2,nav:'安全护栏 + 范式决策树',title:'安全护栏 + 范式选择：能用简单方案，就别上多 Agent',
src:'来源：Anthropic 2024 “Building effective agents”；OWASP Top 10 for LLM Applications（LLM01 Prompt Injection）',
draw(S){const{box,arrow,note,frame,text,tag,dia}=S;
 tag(40,48,'范式决策树',{fs:28});
 const q1=dia(190,140,280,110,'步骤固定？',{fs:24}),q2=dia(190,330,280,110,'单 Agent 够用？',{fs:22}),q3=dia(190,520,280,110,'可并行拆分？',{fs:23});
 const r1=box(400,108,220,64,'Workflow',{f:'lat',fs:28,c:'blueline'}),r2=box(400,298,220,64,'ReAct + 工具',{fs:25,c:'blueline'}),r3=box(400,488,220,64,'多 Agent',{fs:27,c:'orange'});
 [[q1,r1],[q2,r2],[q3,r3]].forEach(([q,r])=>arrow([q.r,r.l],{label:'是',lp:[372,q.cy-12],lf:'hand',lfs:21}));
 arrow([q1.b,q2.t],{label:'否',lp:[215,248],lf:'hand',lfs:21,la:'start'});arrow([q2.b,q3.t],{label:'否',lp:[215,438],lf:'hand',lfs:21,la:'start'});
 const r4=box(90,650,200,62,'仍用单 Agent',{fs:24});
 arrow([q3.b,r4.t],{label:'否',lp:[215,618],lf:'hand',lfs:21,la:'start'});
 frame(690,30,880,590,{label:'五层护栏',lfs:30});
 S.pill(1380,46,170,40,'OWASP LLM01',{f:'lat',fs:18,c:'orange'});
 [['权限最小化','只给完成任务所需的权限'],['沙箱隔离','容器 · 网络白名单'],['人工审批','删除、发布等高风险操作'],['提示注入防护','外部内容视为数据（OWASP LLM01）'],['可观测审计','记录每次工具调用']].forEach((t,i)=>{
   S.node(()=>{const y=100+i*100;S.box(730,y,800,80,'',{static:true,c:i==3?'orange':'ink'});text(760,y+50,String(i+1),{fs:30,f:'lat',c:C.blue});text(810,y+50,t[0],{fs:28});text(1040,y+49,t[1],{fs:21,f:'sans',c:C.muted});});
 });
 note(690,660,880,84,'启示：把 Agent 当作新同事——最小权限，关键操作要审批',{fs:25});
}});

/* ===================== 03 编程的进化 ===================== */
D.push({n:17,ch:3,nav:'编程进化时间轴',title:'编程的进化：人的关注点从语法，到代码，再到任务',
src:'来源：作者整理；各语言 / 产品公开发布年份（FORTRAN 1957、Java 1995、IntelliSense 1996、Copilot 2021、Cursor 2023、Claude Code / Codex 2025）',
draw(S){const{box,arrow,note,text,ell}=S;
 const N=[['1950s','汇编','直接写机器指令'],['1957–1995','高级语言','FORTRAN · C · Java'],['1996','IDE 智能提示','IntelliSense\nEclipse · IDEA'],['2021','Copilot 补全','行内 / 函数级补全'],['2023','AI IDE','Cursor'],['2025','Coding Agent','Claude Code · Codex']];
 arrow([[40,330],[1570,330]],{sw:2.6,g1:0,g2:0});
 N.forEach((n,i)=>{const cx=150+i*262;
  text(cx,135,n[0],{fs:i==1?26:32,f:'lat',c:i>=3?(i==5?C.orange:C.blue):C.muted,a:'middle'});
  box(cx-115,160,230,124,n[1],{sub:n[2],fs:i==2?25:28,sfs:18,c:i==5?'orange':(i==4?'blue':(i==3?'blueline':'ink'))});
  S.line([[cx,286],[cx,318]],{c:'muted'});
  S.raw(`<circle cx="${cx}" cy="330" r="8" fill="${i>=3?C.blue:C.ink}"/>`);
 });
 text(40,420,'AI 自主度 ↑',{fs:26,c:C.blue});
 S.poly([[230,452],[1560,392],[1560,470],[230,470]],'',{c:'blue'});
 text(250,505,'低',{fs:22,c:C.muted});text(1555,505,'高',{fs:22,c:C.blue,a:'end'});
 text(40,570,'人的关注点',{fs:26});
 box(230,540,520,62,'语法',{fs:27});box(750,540,400,62,'代码',{fs:27,c:'blue'});box(1150,540,410,62,'任务',{fs:27,c:'orange'});
 note(470,660,660,84,'启示：每一次跃迁，都把人推到更高一层抽象',{fs:26});
}});
D.push({n:18,ch:3,nav:'传统 IDE 结构',title:'传统 IDE：工具齐全，但串联全靠人',
src:'来源：作者整理',
draw(S){const{box,arrow,note,frame,text,tag,ell}=S;
 frame(30,30,960,700,{label:'IDE',lf:'lat',lfs:34});
 const me=ell(510,385,125,70,'开发者（人）',{c:'orange',fs:26});
 const B=[box(70,95,300,100,'项目 / 工程结构',{sub:'模块 · 依赖',fs:27}),box(650,95,300,100,'代码编辑器',{sub:'高亮 · 补全 · 重构',fs:27}),
  box(70,335,280,100,'终端 / 构建',{sub:'Maven · Gradle',fs:27}),box(670,335,280,100,'调试与测试',{sub:'Debugger · JUnit',fs:27}),box(360,575,300,100,'Git',{sub:'提交 · 分支 · 合并',f:'lat',fs:32})];
 arrow([[430,335],B[0].at(0.75,1)],{both:true,dash:true,c:'muted',label:'手动切换',lp:[350,262]});
 arrow([[590,335],B[1].at(0.25,1)],{both:true,dash:true,c:'muted'});
 arrow([me.l,B[2].r],{both:true,dash:true,c:'muted'});
 arrow([me.r,B[3].l],{both:true,dash:true,c:'muted'});
 arrow([me.b,B[4].t],{both:true,dash:true,c:'muted'});
 tag(1060,62,'改一个需求，人要串起',{fs:27});
 const st=['1  找到相关文件','2  改代码','3  构建','4  跑测试 / 调试','5  提交 Git'].map((s,i)=>box(1060,90+i*104,480,70,s,{fs:25,align:'left',pad:50,c:i==3?'orangeline':'ink'}));
 for(let i=0;i<4;i++)arrow([st[i].b,st[i+1].t],{c:'orange',g1:3,g2:5});
 note(1060,640,500,100,'工作对象是「文件」，\n人负责串联一切',{fs:27});
}});
D.push({n:19,ch:3,nav:'Copilot → Cursor',title:'从补全到 AI IDE：模型先进了光标，再进了编辑器',
src:'来源：GitHub Copilot 文档 (docs.github.com/copilot)；Cursor 文档 (docs.cursor.com)；代码与 diff 为示意',
draw(S){const{box,arrow,note,frame,text,tag,pill}=S;
 tag(40,55,'01  Copilot · 2021',{fs:32,f:'lat'});
 S.node(()=>{frame(40,80,700,340,{fill:C.card});
  S.raw(`<rect x="40" y="80" width="700" height="34" fill="${C.blueT}" opacity=".7"/>`);
  [0,1,2].forEach(i=>S.raw(`<circle cx="${62+i*20}" cy="97" r="6" fill="${[C.orange,C.muted,C.blue][i]}" opacity=".7"/>`));
  text(70,170,'public User findById(Long id) {',{fs:24,f:'mono'});
  text(70,215,'    return userRepo.findById(id)',{fs:24,f:'mono',c:'#A8A8A8',it:true});
  text(70,260,'        .orElseThrow();',{fs:24,f:'mono',c:'#A8A8A8',it:true});
  text(70,305,'}',{fs:24,f:'mono',c:'#A8A8A8'});
  S.raw(`<rect x="124" y="194" width="3" height="28" fill="${C.blue}"/>`);
 });
 pill(520,345,150,46,'Tab 接受',{c:'orange',fs:21});
 arrow([[595,345],[560,232]],{c:'orange',curve:true});
 text(70,395,'灰色 = ghost text（示意）',{fs:18,f:'sans',c:C.muted});
 text(390,480,'人写代码 → AI 行内 / 函数级补全',{fs:27,a:'middle'});
 tag(820,55,'02  Cursor · 2023',{fs:32,f:'lat'});
 frame(820,80,750,340,{fill:C.card});
 S.node(()=>{frame(838,98,180,304,{fill:C.paper,stroke:C.muted});text(928,135,'代码库',{fs:22,a:'middle'});text(928,162,'索引',{fs:22,a:'middle',c:C.blue});
  ['src/','  api/','  user/','  test/'].forEach((s,i)=>text(855,210+i*42,s,{fs:20,f:'mono',c:C.muted}));});
 S.node(()=>{frame(1034,98,346,304,{stroke:C.muted});text(1050,132,'多文件 diff（示意）',{fs:19,f:'sans',c:C.muted});
  [['- findUser(id)',C.orange,'#FCE9D8'],['+ findById(id)',C.blue,'#E4ECF9'],['- UserDao',C.orange,'#FCE9D8'],['+ UserRepository',C.blue,'#E4ECF9']].forEach((r,i)=>{S.raw(`<rect x="1048" y="${158+i*56}" width="318" height="40" fill="${r[2]}"/>`);text(1060,186+i*56,r[0],{fs:21,f:'mono',c:r[1]});});});
 S.node(()=>{frame(1396,98,158,304,{fill:C.blueT,stroke:C.blue});text(1475,140,'Chat',{fs:26,f:'lat',c:C.blue,a:'middle'});
  text(1475,205,'“把 Dao 换成\nRepository”',{fs:17,f:'sans',a:'middle'});S.pill(1410,340,130,42,'Agent 模式',{fs:18});});
 text(1195,480,'代码库索引 + Chat + 多文件编辑 + Agent 模式',{fs:27,a:'middle'});
 note(300,620,1000,84,'启示：AI 越来越能干，但人仍在 IDE 里逐行审阅 diff',{fs:26});
}});
D.push({n:20,ch:3,nav:'Claude Code / Codex 循环',title:'Coding Agent：人给任务、审 PR，Agent 自己跑完闭环',
src:'来源：Claude Code 文档 (docs.anthropic.com/claude-code)；OpenAI Codex (openai.com/codex)',
draw(S){const{box,arrow,note,frame,text,tag,ell}=S;
 tag(40,45,'Claude Code（终端）· Codex（云端 / CLI）',{fs:26,f:'lat'});
 const cx=560,cy=395,rx=300,ry=225;
 ell(cx,cy,140,70,'Agent loop',{c:'blue',sub:'自主迭代',f:'lat',fs:30,sfs:19});
 const A=[-90,-18,54,126,198],L=['读代码','改代码','跑命令 / 测试','看结果','纠错'];
 const P=A.map(a=>[cx+rx*Math.cos(a*Math.PI/180),cy+ry*Math.sin(a*Math.PI/180)]);
 const Bx=P.map((p,i)=>box(p[0]-105,p[1]-34,210,68,L[i],{fs:26,c:i==2?'orangeline':(i==4?'orange':'ink')}));
 for(let i=0;i<5;i++){const a0=A[i]+20,a1=A[(i+1)%5]+(i==4?360:0)-20,m=(a0+a1)/2;
  const pt=a=>[cx+(rx+8)*Math.cos(a*Math.PI/180),cy+(ry+8)*Math.sin(a*Math.PI/180)];
  arrow([pt(a0),pt(m),pt(a1)],{curve:true,smooth:true,c:'blue',sw:2.6,g1:0,g2:0});}
 const inn=box(60,95,230,64,'人：给任务',{fs:25,c:'blueline'});
 arrow([inn.r,Bx[0].l],{c:'blue'});
 const outb=box(60,700,320,64,'通过 → PR，人审阅',{fs:24,c:'blueline'});
 arrow([Bx[3].b,[Bx[3].b[0],outb.t[1]]],{c:'blue',g2:7});
 frame(1150,40,420,540,{fill:C.blue,stroke:C.blue,label:'Harness =',lc:'#fff',lf:'lat',lfs:34,ly:56});
 [['权限','能执行哪些命令、改哪些文件'],['工具','shell · 编辑 · 搜索'],['上下文','代码库 + CLAUDE.md / AGENTS.md'],['验证','测试 · lint · 类型检查']].forEach((t,i)=>{
   S.box(1180,100+i*116,360,98,t[0],{sub:t[1],fs:28,sfs:18,c:i==3?'orange':'ink'});});
 note(1150,620,420,110,'启示：模型相近时，\nHarness 决定 Agent 好不好用',{fs:26});
}});
D.push({n:21,ch:3,nav:'四代工具对比矩阵',title:'四代工具对比：自主度越高，越依赖自动验证',
src:'来源：作者整理',
draw(S){const{note,text}=S;
 const X=[50,380,580,960,1260,1550],Y=[40,120,220,320,420,520];
 const rows=[['手写 / IDE','○○○','当前文件','人跑测试','写每一行'],['Copilot','●○○','光标附近 + 打开的文件','人审每条补全','写 + 挑选'],['Cursor','●●○','代码库索引','人审 diff','指挥 + 审阅'],['Claude Code · Codex','●●●','全仓库 + 命令输出','Agent 自跑测试','定任务 + 审 PR']];
 S.raw(`<path d="M${X[0]} ${Y[0]}H${X[5]}V${Y[1]}H${X[0]}Z" fill="${C.blueT}"/>`);
 ['工具','自主度','上下文','验证','人的角色'].forEach((h,i)=>text((X[i]+X[i+1])/2,Y[0]+52,h,{fs:30,c:C.blue,a:'middle'}));
 rows.forEach((r,j)=>S.node(()=>{const y=Y[j+1];
   S.raw(`<rect class="hl" x="${X[0]+3}" y="${y+3}" width="${X[5]-X[0]-6}" height="94" fill="${j==3?C.orangeT:'#EFF3FA'}" opacity="${j==3?1:0}"/>`);
   r.forEach((c,i)=>text((X[i]+X[i+1])/2,y+60,c,{fs:i==1?34:(i==0?27:24),f:i==1?'sans':(i==0?'lat':'hand'),c:i==1?C.blue:C.ink,a:'middle'}));},'node row'));
 X.forEach(x=>S.line([[x,Y[0]],[x,Y[5]]],{passes:2}));Y.forEach(y=>S.line([[X[0],y],[X[5],y]],{passes:2}));
 S.line([[X[0]-4,Y[4]],[X[5]+4,Y[4]],[X[5]+4,Y[5]],[X[0]-4,Y[5]]],{closed:true,c:'orange',sw:2.6,passes:2});
 text(50,575,'● 表示自主度（定性比较）',{fs:19,f:'sans',c:C.muted});
 note(470,640,660,90,'启示：工作对象从「文件」变成「任务」',{fs:28});
}});
/* ===================== 04 当前如何做 AI 编程 ===================== */
D.push({n:22,ch:4,nav:'阿姆达尔定律',title:'阿姆达尔定律：只加速编码，整体收益有上限',
src:'来源：《AI Native 研发范式实践手册》（kejun.github.io/ai-native-dev-handbook）；公式为阿姆达尔定律推算',
draw(S){const{box,arrow,note,frame,text,tag}=S;
 text(50,170,'20–30%',{fs:130,f:'lat',c:C.blue});
 text(55,230,'生成代码占整个研发链路的比例',{fs:28});
 text(55,268,'（阿里团队内部粗略统计，“甚至更低”）',{fs:20,f:'sans',c:C.muted});
 S.node(()=>{frame(820,40,750,240,{stroke:C.blue});
  text(1195,118,'S = 1 / ((1 − p) + p / k)',{fs:42,f:'lat',c:C.blue,a:'middle'});
  text(1195,175,'p：被加速环节的占比　　k：该环节的加速倍数',{fs:21,f:'sans',a:'middle'});
  text(1195,235,'p = 0.3，k → ∞  ⇒  S ≤ 1 / 0.7 ≈ 1.43×（推算）',{fs:23,f:'sans',c:C.orange,a:'middle'});});
 tag(50,350,'研发链路（示意，仅编码占比来自手册）',{fs:22,c:C.muted,f:'sans'});
 text(50,423,'今天',{fs:26});
 const r1=[['需求理解',240],['编码',360],['构建测试',260],['发布变更',260],['权限与环境',260]];let x=160;const top=[];
 r1.forEach((s,i)=>{top.push(box(x,385,s[1],72,s[0],{fs:26,c:i==1?'blue':'ink',single:false}));x+=s[1];});
 const r2=[['需求理解',290,'orange'],['编码≈0',100,'blue'],['构建测试',330,'orange'],['发布变更',330,'orange'],['权限与环境',330,'orange']];x=160;const bot=[];
 r2.forEach((s,i)=>{bot.push(box(x,530,s[1],72,s[0],{fs:i==1?20:26,c:s[2]}));x+=s[1];});
 arrow([top[1].b,bot[1].t],{c:'blue'});
 text(1560,640,'其余环节成为新瓶颈',{fs:25,c:C.orange,a:'end'});
 note(50,670,920,84,'启示：下一阶段要解决的，是代码写完之后的那 70%',{fs:26});
}});
D.push({n:23,ch:4,nav:'上下文工程',title:'上下文工程：0→1 靠生成能力，1→N 靠上下文',
src:'来源：AI Native 研发范式实践手册；@CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)；@huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)',
draw(S){const{box,arrow,note,frame,text,ell}=S;
 [['AGENTS.md','项目地图'],['Rules','团队经验 → 约束'],['Code Docs + Code Graph','为什么 / 在哪里']].forEach((h,i)=>{const x=30+i*525;frame(x,25,495,575,{stroke:i==1?C.blue:C.ink});
  text(x+247,85,h[0],{fs:i==2?30:36,f:i==0?'mono':'lat',c:C.blue,a:'middle'});text(x+247,122,h[1],{fs:22,c:C.muted,a:'middle'});});
 S.node(()=>{frame(70,150,415,250,{fill:C.card,stroke:C.ink});S.raw(`<path d="M445 150 L485 190 L445 190 Z" fill="${C.blueT}"/>`);
  ['## 目录结构','## 启动 / 测试命令','## 代码规范','## 禁区'].forEach((s,i)=>text(100,205+i*52,s,{fs:23,f:'mono',c:i==3?C.orange:C.ink}));});
 text(277,470,'提交进 Git，新 worktree 才读得到',{fs:20,f:'sans',a:'middle'});
 text(277,515,'同类错误反复出现，再补一条',{fs:20,f:'sans',a:'middle'});
 [['✓  已有测试只许新增','blueline'],['✓  高危操作先停下来问人','blueline'],['✗  引入新的界面库','orange']].forEach((r,i)=>box(600,155+i*88,415,68,r[0],{fs:24,f:'sans',c:r[1],align:'left',pad:44}));
 text(808,440,'（规则示例）',{fs:18,f:'sans',c:C.muted,a:'middle'});
 text(808,480,'每次失败，回写一条规则',{fs:20,f:'sans',a:'middle'});
 text(808,522,'模型变强后，定期做减法',{fs:20,f:'sans',a:'middle',c:C.orange});
 const o=ell(1332,200,95,44,'Order',{f:'lat',fs:26,c:'blue'}),p=ell(1190,345,80,40,'Pay',{f:'lat',fs:25}),s=ell(1475,345,80,40,'Stock',{f:'lat',fs:25});
 arrow([[1290,238],[1215,305]]);arrow([[1375,238],[1450,305]]);
 text(1332,420,'调用关系（示意）',{fs:18,f:'sans',c:C.muted,a:'middle'});
 text(1332,480,'Docs：模块职责、设计背景',{fs:20,f:'sans',a:'middle'});
 text(1332,522,'Graph：谁调用谁、影响范围',{fs:20,f:'sans',a:'middle'});
 note(200,645,1200,84,'自检：新会话打开仓库，Agent 能在 1 分钟内找到入口和测试命令吗？',{fs:25});
}});
D.push({n:24,ch:4,nav:'Spec 驱动',title:'Spec 驱动：先澄清再动手，约束与假设分开写',
src:'来源：AI Native 研发范式实践手册；@huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)',
draw(S){const{box,arrow,note,frame,text}=S;
 const F=[box(30,60,240,110,'需求材料',{sub:'PRD · 纪要 · 聊天',fs:28}),box(330,60,270,110,'追问澄清',{sub:'AI 主动问隐含决策',fs:28,c:'blue'}),box(660,60,230,110,'Spec',{sub:'范围 · 决策 · 验收',f:'lat',fs:34,c:'orange'}),
  box(950,75,160,80,'Plan',{f:'lat',fs:28}),box(1170,60,190,110,'Tasks',{sub:'可独立验收',f:'lat',fs:28}),box(1420,75,150,80,'Code',{f:'lat',fs:28,c:'blueline'})];
 for(let i=0;i<5;i++)arrow([F[i].r,F[i+1].l]);
 text(30,232,'例：“生成公开分享链接” → 撤销机制 · 访问控制 · 数据一致性',{fs:19,f:'sans',c:C.muted});
 arrow([F[2].b,[775,280],[410,280],[410,330]],{c:'blue'});arrow([F[2].b,[775,280],[1190,280],[1190,330]],{c:'orange'});
 S.node(()=>{S.box(60,330,700,250,'',{static:true,c:'blue'});text(100,390,'01  约束',{fs:34,c:C.blue});
  text(100,450,'硬性要求：长期保留，最好能自动检查',{fs:23,f:'sans'});text(100,510,'例：数据不能出域 · 接口必须向后兼容',{fs:21,f:'sans',c:C.muted});});
 S.node(()=>{S.box(840,330,700,250,'',{static:true,c:'orange'});text(880,390,'02  假设',{fs:34,c:C.orange});
  text(880,450,'实现选择：允许按运行反馈调整',{fs:23,f:'sans'});text(880,510,'例：用什么缓存 · 怎么拆服务',{fs:21,f:'sans',c:C.muted});});
 note(260,640,1080,84,'启示：剩下的问题不再改变实现方向和验收结果，就可以开工',{fs:26});
}});
D.push({n:25,ch:4,nav:'分层验证金字塔',title:'分层验证：让 Agent 先过机器的关，再来找人',
src:'来源：AI Native 研发范式实践手册；@huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)',
draw(S){const{box,arrow,note,frame,text}=S;
 const hw=y=>60+(y-60)/540*300, cx=420, Y=[60,225,410,600];
 const L=[['人工','业务价值 · 用户体验','orange'],['分钟级','集成 · 契约测试 · 浏览器自动化','blueline'],['秒级','编译 · 类型检查 · 单元测试','blue']];
 L.forEach((l,i)=>{const a=Y[i],b=Y[i+1];S.poly([[cx-hw(a),a],[cx+hw(a),a],[cx+hw(b),b],[cx-hw(b),b]],l[0],{c:l[2],sub:l[1],fs:i?32:30,sfs:i==1?18:19,tw:i?460:260,cy:(a+b)/2+8});});
 arrow([[840,600],[840,70]],{c:'orange',sw:2.6});
 text(870,330,'↑ 机器裁决之后，\n才轮到人',{fs:22,c:C.orange,f:'sans'});
 frame(1060,40,510,450,{label:'环境即代码',lfs:30,dash:true});
 ['容器 / 沙箱声明依赖、配置、测试数据','一键起环境：干净复现与复验','Agent 能查库表（只读）、日志与 Trace','从真实入口跑到用户要的结果'].forEach((s,i)=>box(1090,105+i*92,450,74,s,{fs:19,f:'sans',c:i==3?'blueline':'ink'}));
 note(1040,560,530,120,'Agent 老在等你确认？\n多半缺了秒级和分钟级验证',{fs:25});
}});
D.push({n:26,ch:4,nav:'排障证据链',title:'排障证据链：先收集证据，再推断根因',
src:'来源：AI Native 研发范式实践手册；@huangtongxueh (x.com/huangtongxueh/status/2108577165306687938)',
draw(S){const{box,arrow,note,frame,text,tag}=S;
 tag(60,60,'证据（事实）',{fs:28});
 const E=[['TraceId','串起整条请求链','blue'],['结构化日志','','ink'],['上下游状态','','ink'],['代码位置 · 调用关系','','ink']].map((e,i)=>box(60,90+i*112,340,88,e[0],{sub:e[1]||undefined,f:i?'hand':'lat',fs:i?26:30,c:e[2]}));
 const ag=box(530,290,250,110,'诊断 Agent',{c:'blue',fs:30});
 E.forEach(e=>arrow([e.r,[470,e.cy],[470,345],ag.l],{g2:6,c:'muted'}));
 const con=box(990,110,290,110,'结论',{sub:'根因 + 修复',c:'solid',fs:32,sfs:19});
 const up=box(960,470,350,100,'完整代码上下文的 Agent',{c:'orange',fs:25});
 arrow([ag.at(1,0.3),[880,323],[880,165],con.l],{c:'blue',label:'证据充分 → 直接定位',lp:[895,250],la:'start'});
 arrow([ag.at(1,0.7),[880,367],[880,520],up.l],{c:'orange',label:'证据不足 / 矛盾 → 升级',lp:[895,450],la:'start'});
 arrow([up.t,con.b],{c:'orange'});
 S.node(()=>{frame(1350,110,220,170,{dash:true,stroke:C.blue});text(1460,165,'固定输出格式',{fs:25,c:C.blue,a:'middle'});text(1460,215,'先列证据，\n再给结论',{fs:20,f:'sans',a:'middle'});});
 note(300,650,1000,84,'工具帮助获取证据，而不是替我们定义正确答案',{fs:27});
}});
D.push({n:27,ch:4,nav:'三层度量',title:'度量：看交付结果，不看 AI 代码占比',
src:'来源：AI Native 研发范式实践手册（L1/L2/L3 三层指标；千问用增案例）',
draw(S){const{box,arrow,note,text,tag}=S;
 const L=[['L1','效能层','AI 是否真正进入了研发过程','blueline'],['L2','质量层','缺陷、回滚、返工是否可控','blue'],['L3','价值层','交付周期、发布频率有没有改善','orange']].map((l,i)=>S.node(()=>{const x=60+i*510,y=140-i*40;
   S.box(x,y,450,170+i*40,'',{static:true,c:l[3]});text(x+30,y+62,l[0],{fs:46,f:'lat',c:i==2?C.orange:C.blue});text(x+120,y+60,l[1],{fs:32});text(x+30,y+120,l[2],{fs:21,f:'sans'});}));
 arrow([[510,240],[570,215]],{c:'blue'});arrow([[1020,210],[1080,185]],{c:'orange'});
 tag(60,395,'先打通关联链，再做报表',{fs:25});
 const ch=[['会话','Session'],['提交','Commit'],['变更','Change'],['需求','Workitem']].map((c,i)=>box(60+i*380,420,300,92,c[0],{sub:c[1],sf:'lat',fs:28,sfs:21}));
 for(let i=0;i<3;i++)arrow([ch[i].r,ch[i+1].l]);
 box(60,550,700,66,'✗  AI 代码占比：会鼓励无效生成',{fs:23,f:'sans',c:'orangeline'});
 box(840,550,700,66,'✓  Skill、Spec、runbook 也纳入度量',{fs:23,f:'sans',c:'blueline'});
 note(250,660,1100,84,'启示：质量指标改善大于速度指标，收益主要来自验证机制',{fs:26});
}});
D.push({n:28,ch:4,nav:'7 天落地路线图',title:'7 天落地路线图：个人 / 小团队这周就能开始',
src:'来源：作者整理，基于《AI Native 研发范式实践手册》（kejun.github.io/ai-native-dev-handbook）',
draw(S){const{arrow,text}=S;
 const C8=[['Day 1','写项目地图','AGENTS.md：结构、命令、禁区'],['Day 2','需求先澄清','Spec 分开写约束与假设'],['Day 3','一键起环境','容器 / 沙箱声明依赖与数据'],['Day 4','建验证闭环','先写失败的测试，再实现'],
  ['Day 5','排障证据链','日志统一带 TraceId'],['Day 6','知识对 Agent 友好','runbook + Skill，失败补规则'],['Day 7','度量复盘','交付周期 · 变更失败率 · 人工干预'],['目标','','Agent 能自己构建、启动、测试、看日志']];
 const pos=[];
 C8.forEach((c,i)=>{const col=i%4,row=Math.floor(i/4),x=40+col*390,y=40+row*360;pos.push([x,y]);
  S.node(()=>{const last=i==7;S.box(x,y,340,280,'',{static:true,c:last?'solid':(i==3?'orange':'ink')});
   text(x+30,y+62,c[0],{fs:last?40:34,f:last?'hand':'lat',c:last?'#fff':C.blue});
   if(c[1])text(x+30,y+130,c[1],{fs:30});
   text(x+30,y+(last?140:185),c[2],{fs:last?28:21,f:last?'hand':'sans',c:last?'#fff':C.muted,w:285,lh:1.4});});});
 for(let i=0;i<7;i++){if(i==3)arrow([[pos[3][0]+170,320],[pos[3][0]+170,340],[pos[4][0]+170,340],[pos[4][0]+170,400]],{dash:true,c:'muted',g1:0});
  else{const [x,y]=pos[i];arrow([[x+340,y+140],[x+390,y+140]],{c:i>=6?'blue':'ink',g1:2,g2:4});}}
}});

/* ===================== 05 多 Agent 编程 ===================== */
D.push({n:29,ch:5,nav:'为什么多 Agent',title:'为什么多 Agent：用并行换时间，代价是 token 与审阅',
src:'来源：@CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)；code.claude.com/docs/en/sub-agents；developers.openai.com/codex/subagents',
draw(S){const{box,arrow,note,frame,text}=S;
 const B=[['并行','互不依赖的任务同时推进'],['多解对比','不同 Agent 犯不同的错，分歧处就是难点'],['专业分工','修复 · 写测试 · 评审各司其职'],['上下文隔离','子 Agent 独立上下文，只回传摘要']];
 B.forEach((b,i)=>{const x=40+(i%2)*555,y=40+Math.floor(i/2)*295;
  S.node(()=>{S.box(x,y,520,260,'',{static:true,c:i==3?'blueline':'ink'});text(x+32,y+62,b[0],{fs:34,c:C.blue});text(x+32,y+225,b[1],{fs:20,f:'sans',c:C.muted});});
 });
 [0,1,2].forEach(k=>arrow([[80,150+k*30],[520,150+k*30]],{c:k==1?'orange':'blue'}));
 [0,1,2].forEach(k=>S.ell(700+k*120,165,42,34,['A','B','C'][k],{f:'lat',fs:24,c:k==2?'orange':'ink'}));
 S.line([[742,160],[778,160]],{c:'muted'});S.line([[862,160],[898,160]],{c:'orange',dash:true});
 ['修复','写测试','评审'].forEach((t,k)=>S.box(80+k*150,435,130,58,t,{fs:22,c:k==2?'orange':'ink'}));
 S.node(()=>{S.box(640,415,200,100,'主会话',{static:true,c:'blue',fs:24});S.box(890,415,200,100,'子 Agent',{static:true,c:'ink',fs:24,dash:true});});
 arrow([[890,480],[842,480]],{c:'blue',label:'摘要',lp:[866,463]});
 frame(1170,40,400,555,{fill:C.orangeT,stroke:C.orange,label:'代价',lc:C.orange,lfs:34,ly:58});
 [['token ×N','三个 Agent 并行 = 三份额度'],['合并冲突','各自的副本不会自动合到一起'],['审阅负担','省下的时间，会在验收时还回去']].forEach((t,i)=>box(1200,115+i*158,340,130,t[0],{sub:t[1],fs:30,f:i?'hand':'lat',sfs:18}));
 note(250,650,1100,84,'启示：只在任务能干净拆开、验收成本可控时并行',{fs:27});
}});
D.push({n:30,ch:5,nav:'Orca worktree 架构',title:'Orca：一个任务一个 worktree，一个 worktree 一个 Agent',
src:'来源：Orca 官方文档 (onorca.dev/docs)；github.com/stablyai/orca',
draw(S){const{box,arrow,note,frame,text}=S;
 const repo=box(40,295,250,120,'仓库',{sub:'base ref：origin/main',fs:32,sfs:18});
 const wt=['A','B','C'].map((k,i)=>box(380,120+i*175,280,110,'worktree '+k,{sub:'分支 fix-'+k.toLowerCase(),f:'lat',fs:28,c:'blue',sfs:18}));
 const ag=['Claude Code','Codex','Cursor CLI'].map((k,i)=>box(730,120+i*175,270,110,k,{sub:'Agent 终端',f:'lat',fs:28,sfs:18}));
 wt.forEach((w,i)=>{arrow([repo.r,w.l],{g2:6});arrow([w.r,ag[i].l]);});
 const df=box(1080,295,250,120,'diff 审阅',{sub:'逐行批注 → Send to agent',c:'orange',fs:32,sfs:17});
 ag.forEach(a=>arrow([a.r,df.l],{g2:6}));
 const cm=box(1390,295,180,120,'Commit',{sub:'Push → PR',f:'lat',fs:32,sfs:18});
 arrow([df.r,cm.l]);
 text(1330,460,'无 Accept & Merge，走正常 Git 流程',{fs:19,f:'sans',c:C.muted,a:'middle'});
 S.node(()=>{frame(40,620,730,96,{dash:true,stroke:C.muted});text(70,677,'<tspan fill="#1F63C9" font-family="IBM Plex Mono,monospace">.worktreeinclude</tspan> 复制 .env　<tspan fill="#1F63C9" font-family="IBM Plex Mono,monospace">orca.yaml</tspan> 共享 node_modules',{fs:22,f:'sans',raw:true});});
 S.node(()=>{frame(820,620,750,96,{stroke:C.orange,fill:C.card});text(850,677,'⚠ 只隔离文件与分支，不隔离端口、数据库与密钥',{fs:23,f:'sans'});});
}});
D.push({n:31,ch:5,nav:'赛跑 vs 流水线',title:'两种打法：赛跑挑最优，流水线分工协作',
src:'来源：Orca 官方文档 (onorca.dev/docs)；@CopperForgeAI (x.com/CopperForgeAI/status/2108830306014998719)',
draw(S){const{box,arrow,note,frame,text}=S;
 frame(30,30,750,600,{stroke:C.blue,label:'赛跑模式：同一任务 × 3',lfs:30,ly:50});
 const rq=box(290,90,230,70,'同一段需求',{fs:26});
 const ag=['Claude Code','Codex','第三个 Agent'].map((k,i)=>box(60+i*240,240,210,82,k,{f:i<2?'lat':'hand',fs:i<2?26:25,c:'blueline'}));
 ag.forEach(a=>arrow([rq.b,a.t],{g2:6}));
 const best=box(200,410,410,82,'挑最优 + 批注再修一轮',{fs:27,c:'orange'});
 ag.forEach(a=>arrow([a.b,best.t],{c:'orange',g2:6}));
 text(405,550,'三处一致，大概率对；分歧处，就是难点',{fs:22,a:'middle'});
 text(405,592,'三份额度：只用于支付、权限、迁移这类改错代价大的地方',{fs:18,f:'sans',c:C.orange,a:'middle'});
 frame(820,30,750,600,{stroke:C.ink,label:'分工流水线',lfs:30,ly:50});
 const A=box(870,140,290,100,'A 修复',{sub:'Claude Code',sf:'lat',fs:30,c:'blue',sfs:19});
 const B=box(870,380,290,100,'B 写测试',{sub:'Codex · 同一起点',fs:30,sfs:19});
 const Cc=box(1240,255,300,110,'C 评审',{sub:'起点：A 的分支 + B 的测试',fs:30,sfs:17,c:'orange'});
 arrow([A.at(1,0.7),Cc.at(0,0.3)],{label:'C 等 A 完成后再开始',lp:[1015,272],lfs:17});
 arrow([B.r,Cc.at(0,0.75)]);
 arrow([Cc.t,[1390,150],A.at(1,0.25)],{dash:true,c:'orange',curve:true});
 text(1195,560,'“必须改” → 批注发给 A → 再跑测试 → PR',{fs:22,c:C.orange,a:'middle'});
 note(400,665,800,84,'判断哪份代码能上线，永远是人的事',{fs:28});
}});
D.push({n:32,ch:5,nav:'编排层 + 同类工具',title:'编排层：一个 Agent 当项目经理，人只守关卡',
src:'来源：@CopperForgeAI；onorca.dev/docs；code.claude.com/docs/en/sub-agents；developers.openai.com/codex/subagents；cursor.com/docs/subagents',
draw(S){const{box,arrow,note,frame,text,tag,ell}=S;
 const me=ell(130,200,80,56,'人',{fs:34,c:'orange'});
 const co=box(290,135,400,130,'协调者 Agent',{sub:'项目经理：拆任务 · 派活 · 验收',fs:32,sfs:19,c:'blue'});
 arrow([me.r,co.l],{both:true});
 const wa=box(790,95,200,70,'Worker A',{f:'lat',fs:26}),wb=box(790,235,200,70,'Worker B',{f:'lat',fs:26});
 arrow([co.r,wa.l]);arrow([co.r,wb.l]);
 const g=box(1080,140,180,120,'Gate',{sub:'人工决策',f:'lat',fs:34,c:'orange'});
 arrow([wa.r,g.l],{c:'muted'});arrow([wb.r,g.l],{c:'muted'});
 arrow([g.t,[1170,60],[130,60],me.t],{dash:true,c:'orange'});
 S.node(()=>{text(1300,160,'Task 工单　Run 一次执行',{fs:22,c:C.blue});text(1300,200,'失败只重开 Run，记录保留；连续失败 3 次即停止',{fs:19,f:'sans',w:265,lh:1.45});});
 text(60,345,'Gate：如“是否执行已审阅的迁移” → 批准执行 / 继续调研；审批权要写明归人',{fs:20,f:'sans',c:C.muted});
 tag(60,420,'同类工具（定性对比）',{fs:26});
 [['Orca','每任务独立 git worktree','多家 Agent 并排 · diff 批注 · Gate'],['Claude Code 子 Agent','独立上下文窗口','同一会话内委派，只回传摘要'],['Codex 子 Agent','显式要求才派生','并行后汇总；继承沙箱策略'],['Cursor 云端 Agent','独立 VM 与分支','本地 / 云端切换；子 Agent 独立上下文']].forEach((t,i)=>
   S.node(()=>{const x=60+i*380;S.box(x,445,350,160,'',{static:true,c:i==0?'blue':'ink'});text(x+24,492,t[0],{fs:i==0?32:25,f:'lat',c:C.blue});text(x+24,535,t[1],{fs:21});text(x+24,575,t[2],{fs:16.5,f:'sans',c:C.muted});}));
 note(220,655,1160,84,'启示：需求没想清楚，别上编排——三个 Agent 只会得到三份误解',{fs:26});
}});
D.push({n:33,ch:5,nav:'多人 + 多 Agent 协作',title:'多人 + 多 Agent：人定义与审阅，数字员工执行',
src:'来源：AI Native 研发范式实践手册（挑战 4 数字员工自主性；AIDC 数字投手案例）',
draw(S){const{box,arrow,note,text,tag}=S;
 const h=box(40,90,380,140,'人',{sub:'定义需求 · 维护验证闭环 · 审阅',fs:36,sfs:19,c:'orange'});
 const a=box(580,90,440,140,'Agent 数字员工',{sub:'名称 · 负责人 · 职责 · 权限边界 · 任务记录',fs:34,sfs:18,c:'blue'});
 const r=box(1180,90,380,140,'共享仓库 / Issue / CI',{sub:'协作与验证的共同底座',fs:28,sfs:19});
 arrow([h.r,a.l],{label:'任务 / 审批',lp:[500,140]});arrow([a.r,r.l],{label:'提交 / 结果',lp:[1100,140]});
 tag(40,320,'自主性三步走',{fs:28});
 const st=[['可见','独立身份，留下任务记录','blueline'],['可控','短期凭证 + 最小权限','blue'],['自主','高风险操作触发人工审批','orange']].map((s,i)=>box(40+i*520,400-i*35,440,105+i*35,s[0],{sub:s[1],fs:34,sfs:20,c:s[2]}));
 arrow([st[0].r,st[1].at(0,0.6)]);arrow([st[1].r,st[2].at(0,0.6)]);
 text(800,585,'护栏要机器可执行，不能写在提示词里当君子协定',{fs:25,c:C.orange,a:'middle'});
 text(800,630,'案例演进：超级个体 → 数字员工 → 云上 Scrum',{fs:20,f:'sans',c:C.muted,a:'middle'});
 note(180,670,1240,84,'启示：到这一步，人主要只做两件事——维护验证闭环、找出有价值的需求',{fs:25});
}});
/* ===================== 06 AI 改变研发流程 ===================== */
D.push({n:34,ch:6,nav:'图1 传统 CI/CD DevOps',title:'图1 传统 CI/CD：流水线自动跑，判断仍在人',
src:'来源：作者整理；Google SRE Book (sre.google/sre-book)',
draw(S){const{box,arrow,note,frame,text,tag}=S;
 const cx=540,cy=245,a=440,ky=1.12;
 const lem=(t)=>{const s=Math.sin(t),c=Math.cos(t),d=1+s*s;return [cx+a*c/d,cy+ky*a*s*c/d];};
 const L=[],R=[];for(let i=0;i<=40;i++){L.push(lem(Math.PI*0.5+0.06+i*(Math.PI-0.12)/40));R.push(lem(-Math.PI*0.5+0.06+i*(Math.PI-0.12)/40));}
 arrow(L,{curve:true,smooth:true,c:'blue',sw:3.4,g1:0,g2:0});arrow(R,{curve:true,smooth:true,c:'orange',sw:3.4,g1:0,g2:0});
 text(340,245,'开发',{fs:32,c:C.blue,a:'middle'});text(740,245,'运维',{fs:32,c:C.orange,a:'middle'});
 [['Code',170,52],['Plan',400,52],['Build',170,460],['Test',400,460]].forEach(l=>text(l[1],l[2],l[0],{fs:24,f:'lat',c:C.blue,a:'middle',it:true}));
 [['Release',680,52],['Deploy',910,52],['Monitor',680,460],['Operate',910,460]].forEach(l=>text(l[1],l[2],l[0],{fs:24,f:'lat',c:C.orange,a:'middle',it:true}));
 S.node(()=>{frame(1120,40,450,360,{dash:true,stroke:C.ink});text(1150,100,'人仍在这些地方拍板',{fs:28});
  ['发布时机与灰度范围','告警是真是假','根因在哪一层','回滚，还是向前修复'].forEach((s,i)=>text(1160,160+i*55,'•  '+s,{fs:21,f:'sans'}));});
 tag(40,495,'典型流水线（示意）',{fs:20,c:C.muted,f:'sans'});
 const P=[['Git push','','lat'],['CI','编译 · 单测 · 扫描','lat'],['制品库','',''],['CD','灰度 · 蓝绿','lat'],['生产','',''],['监控告警','',''],['人工排障','','']].map((p,i)=>box(40+i*218,515,190,100,p[0],{sub:p[1]||undefined,f:p[2]||'hand',fs:p[2]?28:26,sfs:16,c:i==6?'orange':'ink'}));
 for(let i=0;i<6;i++)arrow([P[i].r,P[i+1].l],{g1:3,g2:5});
 note(400,670,800,80,'启示：自动化的是流水线，判断仍靠人',{fs:27});
}});
D.push({n:35,ch:6,nav:'图2 AIOps 自修复闭环',title:'图2 AIOps 自修复闭环：低风险自动，高风险过人',
src:'来源：作者整理；AI Native 研发范式实践手册（排障证据链）',
draw(S){const{box,arrow,note,text}=S;
 const T=[box(40,50,330,125,'告警 / 异常检测',{sub:'指标阈值 · 异常模式',fs:29,sfs:18}),box(430,50,330,125,'根因分析 Agent',{sub:'日志 · Trace · 指标 · 变更记录',fs:29,sfs:17,c:'blue'}),
  box(820,50,330,125,'生成修复',{sub:'回滚 · 扩容 · 代码 PR',fs:29,sfs:18,c:'blue'}),box(1210,50,340,125,'沙箱验证',{sub:'复现 + 跑测试',fs:29,sfs:18,c:'blue'})];
 for(let i=0;i<3;i++)arrow([T[i].r,T[i+1].l]);
 const ap=box(1190,250,290,115,'人工审批关卡',{sub:'高风险变更',fs:28,sfs:18,c:'orange'});
 const B=[box(1210,450,340,120,'灰度发布',{sub:'小流量先行',fs:29,sfs:18}),box(820,450,330,120,'观测确认',{sub:'指标恢复?',fs:29,sfs:18}),box(430,450,330,120,'沉淀 Runbook / 规则',{sub:'下次同类更快',fs:27,sfs:18})];
 arrow([[1335,175],[1335,250]],{c:'orange'});arrow([[1335,365],[1335,450]],{c:'orange'});
 arrow([[1525,175],[1525,450]],{dash:true,c:'blue'});text(1505,398,'低风险\n自动放行',{fs:18,f:'sans',c:C.blue,a:'end'});
 arrow([B[0].l,B[1].r]);arrow([B[1].l,B[2].r]);
 arrow([B[2].l,[205,510],[205,175]],{c:'muted'});
 text(300,290,'<tspan font-weight="700">证据先于结论：</tspan>Agent 先收集日志、Trace、指标与变更记录，再给修复方案',{fs:21,f:'sans',raw:true});
 text(300,340,`<tspan fill="${C.blue}">■</tspan> 自动路径　<tspan fill="${C.orange}">■</tspan> 人工关卡　（流程为示意）`,{fs:19,f:'sans',c:C.muted,raw:true});
 note(300,650,1000,84,'启示：自动的是取证与执行，风险分级与拍板仍归人',{fs:26});
}});
D.push({n:36,ch:6,nav:'图3 未来形态',title:'图3 未来形态：人定目标与验收，Agent 团队交付',
src:'来源：作者观点（趋势判断），延伸自本讲第 4–5 章',
draw(S){const{box,arrow,note,text,pill}=S;
 pill(1290,25,270,48,'趋势判断（作者观点）',{c:'orange',fs:21});
 const h=box(40,265,230,150,'人',{sub:'目标 · 约束\n验收标准',fs:36,sfs:19,c:'orange'});
 const o=box(400,275,280,130,'编排 Agent',{sub:'拆解 · 派发 · 汇总',fs:30,sfs:19,c:'solid'});
 arrow([h.r,o.l],{c:'orange'});
 text(335,322,'Gate①',{fs:22,f:'lat',c:C.orange,a:'middle'});text(335,375,'人确认 Spec',{fs:17,f:'sans',c:C.orange,a:'middle'});
 const ag=['需求 Agent','设计 Agent','编码 Agent','测试 Agent','运维 Agent'].map((s,i)=>box(790,90+i*105,250,72,s,{fs:25,c:i==2?'blueline':'ink'}));
 ag.forEach(a=>arrow([o.r,a.l],{c:'blue',g2:6}));
 const g=box(1130,280,180,120,'Gate②',{sub:'人批准发布',f:'lat',fs:32,c:'orange'});
 ag.forEach(a=>arrow([a.r,g.l],{c:'muted',g2:6}));
 const cd=box(1380,280,180,120,'持续交付',{sub:'生产运行',fs:28,c:'blue'});
 arrow([g.r,cd.l]);
 arrow([cd.b,[1470,650],[540,650],o.b],{dash:true,c:'blue',label:'生产反馈 → 自动变成新需求',lp:[1000,635],lfs:21});
 note(300,690,1000,80,'启示：人不再逐行写代码，而是定目标、守两道关',{fs:26});
}});
D.push({n:37,ch:6,nav:'角色与组织变化',title:'角色与组织：从写代码，到定义问题与设计验证',
src:'来源：作者观点；AI Native 研发范式实践手册（超级个体期）',
draw(S){const{box,arrow,note,frame,text,tag}=S;
 text(40,70,'01',{fs:40,f:'lat',c:C.muted});text(100,70,'过去：写代码为主',{fs:30});
 const p=['读需求','写代码','调试','提交'].map((s,i)=>box(40+i*235,100,190,80,s,{fs:27,c:i==1?'orange':'ink'}));
 for(let i=0;i<3;i++)arrow([p[i].r,p[i+1].l]);
 text(40,230,'时间大头在实现',{fs:21,f:'sans',c:C.muted});
 arrow([[470,250],[470,320]],{c:'blue',sw:3});
 text(40,370,'02',{fs:40,f:'lat',c:C.blue});text(100,370,'未来：定义问题 + 设计验证 + 审阅',{fs:30,c:C.blue});
 const f=['写 Spec','搭验证','审 diff','守 Gate'].map((s,i)=>box(40+i*235,400,190,80,s,{fs:27,c:'blue'}));
 for(let i=0;i<3;i++)arrow([f[i].r,f[i+1].l],{c:'blue'});
 text(40,530,'时间大头在“问对”与“验准”',{fs:21,f:'sans',c:C.blue});
 frame(1000,40,570,560,{label:'组织随之变化',lfs:30,ly:52});
 [['团队更小','少数人 + 一组 Agent','ink'],['超级个体','一人同时开 3～5 个会话','orangeline'],['架构师 → Harness / 平台工程','设计上下文、环境与验证底座','blue']].forEach((t,i)=>box(1030,112+i*160,510,130,t[0],{sub:t[1],fs:i==2?26:30,sfs:19,c:t[2]}));
 note(250,650,1100,84,'启示：价值从“写得快”转向“问得对、验得准”',{fs:27});
}});
D.push({n:38,ch:6,nav:'未解问题 + 明天 5 件事',title:'未解问题，和明天就能做的 5 件事',
src:'来源：作者整理；AI Native 研发范式实践手册；@huangtongxueh（审阅是瓶颈，x.com/huangtongxueh/status/2108577165306687938）',
draw(S){const{box,note,frame,text}=S;
 [['审阅成瓶颈','Agent 产出快，人审不过来','orange'],['安全与权限','凭证、数据、高危操作的边界','ink'],['成本与度量','token 开销 vs 交付结果','ink'],['遗留系统上下文','文档缺失、隐性约定多','ink']].forEach((q,i)=>{const x=40+(i%2)*480,y=40+Math.floor(i/2)*285;
   S.node(()=>{S.box(x,y,440,250,'',{static:true,c:q[2]});text(x+390,y+80,'?',{fs:70,f:'lat',c:i?C.blue:C.orange,a:'middle'});text(x+32,y+120,q[0],{fs:32});text(x+32,y+180,q[1],{fs:20,f:'sans',c:C.muted});});});
 frame(1010,40,560,560,{fill:C.blue,stroke:C.blue,label:'明天就能做的 5 件事',lc:'#fff',lfs:30,ly:52});
 [['写一份 AGENTS.md','结构 · 命令 · 禁区'],['补可自动跑的测试','让 Agent 自己判对错'],['一键起环境','干净复现'],['选一个小需求，用 Agent 端到端做','从 Spec 到 PR'],['记录度量','交付周期 · 返工']].forEach((t,i)=>
   S.node(()=>{const y=106+i*97;S.box(1035,y,510,80,'',{static:true});text(1062,y+53,String(i+1),{fs:34,f:'lat',c:C.blue});text(1105,y+38,t[0],{fs:i==3?21:24});text(1105,y+68,t[1],{fs:17,f:'sans',c:C.muted});}));
 note(40,655,920,84,'启示：先把验证闭环搭起来，再谈更多 Agent',{fs:27});
}});

const CH=[[1,'大模型如何训练'],[2,'Agent 设计原理与范式'],[3,'编程的进化'],[4,'当前如何做 AI 编程'],[5,'多 Agent 编程'],[6,'AI 改变研发流程']];
D.sort((a,b)=>a.n-b.n);
/* 章节页：每章前一页，参与翻页；图号与 #n 链接不变，章节页用 #ch1…#ch6 */
const SUB={1:'数据、预训练、后训练与部署',2:'组成、范式、工具、记忆与护栏',3:'从汇编、IDE、Copilot 到 Coding Agent',4:'上下文、Spec、验证与度量',5:'并行、隔离、编排与协作',6:'从 CI/CD 到 AIOps 到未来'};
const NDIAG=D.length;
const P=[];
CH.forEach(([c,name])=>{
  P.push({div:true,ch:c,key:'ch'+c,nav:'章节页',title:name,sub:SUB[c],
    draw(S){const t=S.text,x=150;
      const name0=name;name=tr(name);t(x,283,'0'+c,{fs:150,f:'lat',c:C.blue});
      S.raw(`<text x="${x}" y="417" font-family="${FONTS.hand.replace(/'/g,'&apos;')}" font-size="78" fill="${C.ink}" stroke="${C.ink}" stroke-width="1.6" paint-order="stroke" letter-spacing="3">${LANG==='en'?esc(name):hui(esc(name),FH)}</text>`);
      const w=Math.min(tw(name,78)+name.length*3,1300);
      S.arrow([[x-6,451],[x+w*0.35,446],[x+w*0.7,454],[x+w+10,448]],{curve:true,nohead:true,c:'orange',sw:4,g1:0,g2:0});
      t(x,533,SUB[c],{fs:40,f:'sans',c:C.muted});
    }});
  D.forEach(d=>{if(d.ch===c)P.push(d);});
});
const pid=d=>d.div?d.key:String(d.n);
const findHash=h=>{h=decodeURIComponent(h.replace(/^#/,''));return P.findIndex(p=>pid(p)===h);};
const H=s=>LANG==='en'?esc(tr(s)):esc(s).replace(/回/g,'<span class="noto">回</span>');
const cache={};
function render(d){const k=pid(d); if(!cache[k]){const S=Sketch(d.div?7000+d.ch*131:d.n*977+13);d.draw(S);cache[k]=S.svg();} return cache[k]; }
const $=id=>document.getElementById(id);
let cur=0;
function buildNav(){
  const nav=$('nav');
  nav.innerHTML=CH.map(([c,name])=>`<div class="ch" data-ch="${c}"><button><b>0${c}</b>${H(name)}</button><ul>${
    P.map((d,i)=>d.ch===c&&!d.div?`<li data-i="${i}"><i>${String(d.n).padStart(2,'0')}</i><span>${H(d.nav)}</span></li>`:'').join('')}</ul></div>`).join('');
  nav.querySelectorAll('li').forEach(li=>li.onclick=()=>go(+li.dataset.i));
  nav.querySelectorAll('.ch>button').forEach(b=>b.onclick=()=>{const ch=+b.parentNode.dataset.ch;const i=P.findIndex(d=>d.div&&d.ch===ch);
    if(cur===i)b.parentNode.classList.toggle('fold');else go(i);});
}
function go(i,push=true){
  cur=(i+P.length)%P.length; const d=P[cur];
  $('kick').innerHTML=`0${d.ch} ${H(CH[d.ch-1][1])}`;
  $('pg').textContent=d.div?(LANG==='en'?`Chapter 0${d.ch}`:`第 0${d.ch} 章`):String(d.n).padStart(2,'0');
  $('title').innerHTML=d.div?'':H(d.title);
  $('stage').innerHTML=render(d);
  $('src').innerHTML=d.div?'':H(d.src);
  document.body.classList.toggle('ondiv',!!d.div);
  document.querySelectorAll('#nav .ch>button').forEach(b=>b.classList.toggle('on',d.div&&+b.parentNode.dataset.ch===d.ch));
  document.querySelectorAll('#nav li').forEach(li=>li.classList.toggle('on',+li.dataset.i===cur));
  document.querySelectorAll('#nav .ch').forEach(c=>{const on=+c.dataset.ch===d.ch;c.classList.toggle('cur',on);if(on)c.classList.remove('fold');});
  const li=document.querySelector('#nav li.on'); if(li&&li.scrollIntoView)li.scrollIntoView({block:'nearest'});
  $('prev').disabled=false;$('next').disabled=false;
  $('count').textContent=`${cur+1} / ${P.length}`;
  if(push)history.replaceState(null,'','#'+pid(d));
  if(!$('zoomer').hidden)openZoom();
}
/* 放大 / 平移 */
let z={s:1,x:0,y:0};
function applyZ(){$('zinner').style.transform=`translate(${z.x}px,${z.y}px) scale(${z.s})`;}
function fitZ(){const v=$('zview').getBoundingClientRect();const W=1600,Hh=800;const s=Math.min(v.width/W,v.height/Hh)*0.96;z={s,x:(v.width-W*s)/2,y:(v.height-Hh*s)/2};applyZ();}
function openZoom(){const d=P[cur];$('zoomer').hidden=false;$('zt').innerHTML=d.div?`<b>0${d.ch}</b>${H(d.title)}`:`<b>${String(d.n).padStart(2,'0')}</b>${H(d.title)}`;
  $('zinner').innerHTML=render(d).replace('<svg ','<svg width="1600" height="800" ');requestAnimationFrame(fitZ);}
function closeZoom(){$('zoomer').hidden=true;}
function zoomAt(f,cx,cy){const v=$('zview').getBoundingClientRect();cx??=v.width/2;cy??=v.height/2;const ns=Math.max(0.2,Math.min(8,z.s*f));
  z.x=cx-(cx-z.x)*ns/z.s;z.y=cy-(cy-z.y)*ns/z.s;z.s=ns;applyZ();}
function toggleFS(el){ if(document.fullscreenElement)document.exitFullscreen(); else (el||$('main')).requestFullscreen?.().catch(()=>openZoom()); }
function overview(show){
  const o=$('overview'); if(show===undefined)show=o.hidden; o.hidden=!show; if(!show)return;
  if(!o.dataset.built){
    o.innerHTML=`<div style="display:flex;align-items:center;gap:12px"><div style="font-family:var(--fh);font-size:30px;margin-right:auto">${LANG==='en'?`Overview · ${NDIAG} diagrams + 6 chapter pages`:`总览 · ${NDIAG} 张图 + 6 个章节页`}</div><button class="btn" id="ovx">${LANG==='en'?'Back':'返回'} <kbd>Esc</kbd></button></div>`+
      CH.map(([c,name])=>`<h3><b>0${c}</b>${H(name)}</h3><div class="og static">${P.map((d,i)=>d.ch===c?`<div class="oc${d.div?' od':''}" data-i="${i}">${render(d)}<div class="ot"><i>${d.div?'0'+d.ch:String(d.n).padStart(2,'0')}</i>${(d.div?(LANG==='en'?'Chapter · ':'章节页 · ')+H(d.sub):H(d.nav))}</div></div>`:'').join('')}</div>`).join('');
    o.querySelectorAll('.oc').forEach(c=>c.onclick=()=>{overview(false);go(+c.dataset.i);});
    $('ovx').onclick=()=>overview(false); o.dataset.built=1;
  }
}
function replay(){ $('stage').innerHTML=render(P[cur]); }
window.addEventListener('DOMContentLoaded',()=>{
  buildNav();
  $('prev').onclick=()=>go(cur-1);$('next').onclick=()=>go(cur+1);
  $('zoom').onclick=openZoom;$('fs').onclick=()=>toggleFS();$('ov').onclick=()=>overview(true);$('replay').onclick=replay;
  $('stage').onclick=()=>{if(P[cur].div)go(cur+1);else openZoom();};
  $('zx').onclick=closeZoom;$('zp').onclick=()=>zoomAt(1.25);$('zm').onclick=()=>zoomAt(0.8);$('zf').onclick=fitZ;$('zfs').onclick=()=>toggleFS($('zoomer'));
  $('zprev').onclick=()=>go(cur-1);$('znext').onclick=()=>go(cur+1);
  const zv=$('zview');
  zv.addEventListener('wheel',e=>{e.preventDefault();const r=zv.getBoundingClientRect();zoomAt(e.deltaY<0?1.12:1/1.12,e.clientX-r.left,e.clientY-r.top);},{passive:false});
  let dr=null;
  zv.addEventListener('pointerdown',e=>{dr={x:e.clientX,y:e.clientY,ox:z.x,oy:z.y};zv.classList.add('drag');zv.setPointerCapture(e.pointerId);});
  zv.addEventListener('pointermove',e=>{if(!dr)return;z.x=dr.ox+e.clientX-dr.x;z.y=dr.oy+e.clientY-dr.y;applyZ();});
  zv.addEventListener('pointerup',()=>{dr=null;zv.classList.remove('drag');});
  zv.addEventListener('dblclick',e=>{const r=zv.getBoundingClientRect();zoomAt(1.6,e.clientX-r.left,e.clientY-r.top);});
  window.addEventListener('resize',()=>{if(!$('zoomer').hidden)fitZ();});
  document.addEventListener('keydown',e=>{
    if(e.target.tagName==='INPUT')return;
    if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();if(!$('overview').hidden)return;go(cur+1);}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();if(!$('overview').hidden)return;go(cur-1);}
    else if(e.key==='Escape'){if(!$('overview').hidden)overview(false);else if(!$('zoomer').hidden)closeZoom();}
    else if(e.key==='Enter'||e.key==='z'||e.key==='Z'){if($('zoomer').hidden)openZoom();else closeZoom();}
    else if(e.key==='f'||e.key==='F')toggleFS($('zoomer').hidden?$('main'):$('zoomer'));
    else if(e.key==='g'||e.key==='G')overview();
    else if(e.key==='r'||e.key==='R')replay();
    else if(!$('zoomer').hidden&&(e.key==='+'||e.key==='='))zoomAt(1.25);
    else if(!$('zoomer').hidden&&e.key==='-')zoomAt(0.8);
    else if(e.key==='Home')go(0);else if(e.key==='End')go(P.length-1);
  });
  window.addEventListener('hashchange',()=>{const k=findHash(location.hash);if(k>=0&&k!==cur)go(k,false);});
  const i=findHash(location.hash);
  go(i>=0?i:0,false);
  if(/[?&]view=zoom/.test(location.search))openZoom();
  if(/[?&]view=overview/.test(location.search))overview(true);
  if(/[?&]static/.test(location.search))document.body.classList.add('static');
});

/* ---- i18n: language switch ---- */
const META={zh:{title:'AI 原生研发图集 · 从 Copilot 到 Agent Harness',desc:'手绘风 AI 原生研发图集：36 张图讲清大模型训练、Agent 设计、编程进化、AI 编程实践、多 Agent 编程与研发流程变革。'},
 en:{title:'AI-Native Engineering Atlas · From Copilot to Agent Harness',desc:'A hand-drawn atlas of AI-native software engineering: 36 diagrams on LLM training, agent design, the evolution of programming, AI coding practice, multi-agent workflows and the changing dev lifecycle.'}};
function detectLang(){const q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='zh')return q;
  try{const s=localStorage.getItem('atlas-lang');if(s==='en'||s==='zh')return s;}catch(e){}
  return /^zh/i.test(navigator.language||'')?'zh':'en';}
function setLang(l,init){
  LANG=l;FONTS.hand=l==='en'?FL:FH;
  for(const k in cache)delete cache[k];
  document.documentElement.lang=l==='en'?'en':'zh-CN';
  document.title=META[l].title;document.querySelector('meta[name=description]').content=META[l].desc;
  document.querySelectorAll('[data-en]').forEach(e=>{if(e.dataset.zh===undefined)e.dataset.zh=e.innerHTML;e.innerHTML=l==='en'?e.dataset.en:e.dataset.zh;});
  document.querySelectorAll('[data-en-title]').forEach(e=>{if(e.dataset.zhTitle===undefined)e.dataset.zhTitle=e.title;e.title=l==='en'?e.dataset.enTitle:e.dataset.zhTitle;});
  document.querySelectorAll('.lang button').forEach(b=>{b.classList.toggle('on',b.dataset.lang===l);b.setAttribute('aria-pressed',b.dataset.lang===l);});
  try{localStorage.setItem('atlas-lang',l);}catch(e){}
  const u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState(null,'',u.pathname+u.search+u.hash);
  if(!init){buildNav();go(cur,false);const o=$('overview');delete o.dataset.built;if(!o.hidden){o.hidden=true;overview(true);}}
}
setLang(detectLang(),true);
window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));});

/* ---- mobile: drawer, swipe, pinch ---- */
window.addEventListener('DOMContentLoaded',()=>{
  const mq=matchMedia('(max-width:1023px)'),body=document.body;
  const m=$('menu');m.onclick=()=>body.classList.toggle('drawer');
  $('backdrop').onclick=()=>body.classList.remove('drawer');
  $('nav').addEventListener('click',e=>{if(mq.matches&&e.target.closest('li,.ch>button'))setTimeout(()=>body.classList.remove('drawer'),60);});
  const sw=(el,fn)=>{let s=null;el.addEventListener('touchstart',e=>{s=e.touches.length===1?{x:e.touches[0].clientX,y:e.touches[0].clientY,t:Date.now()}:null;},{passive:true});
    el.addEventListener('touchend',e=>{if(!s)return;const t=e.changedTouches[0],dx=t.clientX-s.x,dy=t.clientY-s.y;
      if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5&&Date.now()-s.t<800){fn(dx<0?1:-1);el.dataset.swiped=Date.now();}s=null;},{passive:true});};
  sw($('main'),d=>{if(mq.matches)go(cur+d);});
  const st=$('stage'),oc=st.onclick;st.onclick=e=>{if(Date.now()-(+$('main').dataset.swiped||0)<400)return;oc&&oc(e);};
  new MutationObserver(()=>body.classList.toggle('zopen',!$('zoomer').hidden)).observe($('zoomer'),{attributes:true});
  const pq=matchMedia('(max-width:600px) and (orientation:portrait)');
  const pn=document.createElement('div');pn.id='pnote';$('stage').after(pn);
  const fixCover=()=>{const s=$('stage').querySelector('svg');if(!s)return;if(!s.dataset.p)pn.textContent='';body.classList.toggle('portrait',pq.matches);
    if(P[cur].div){if(!mq.matches){s.setAttribute('viewBox','0 0 1600 800');return;}
      if(pq.matches){document.fonts.ready.then(()=>{const b=s.getBBox();s.setAttribute('viewBox',`${b.x-30} ${b.y-30} ${b.width+60} ${b.height+60}`);});}
      else s.setAttribute('viewBox','110 140 1400 440');return;}
    if(pq.matches&&!s.dataset.p)document.fonts.ready.then(()=>{if(s.isConnected&&!s.dataset.p)portraitize(s);});};
  new MutationObserver(fixCover).observe($('stage'),{childList:true});fixCover();
  const reflow=()=>{go(cur,false);};mq.addEventListener('change',reflow);pq.addEventListener('change',reflow);
  const AR={prev:['上一张','Previous'],next:['下一张','Next'],replay:['重播动画','Replay animation'],zoom:['放大','Zoom'],ov:['总览','Overview']};
  const aria=()=>{for(const k in AR){const e=$(k);e.setAttribute('aria-label',AR[k][LANG==='en'?1:0]);e.title=AR[k][LANG==='en'?1:0];}};
  aria();document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',aria));
  /* pinch zoom in zoom layer */
  const zv=$('zview'),pts=new Map();let pinch=null;
  zv.addEventListener('pointerdown',e=>{pts.set(e.pointerId,[e.clientX,e.clientY]);if(pts.size===2){const[a,b]=[...pts.values()];pinch={d:Math.hypot(a[0]-b[0],a[1]-b[1])};}},true);
  zv.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,[e.clientX,e.clientY]);
    if(pts.size===2&&pinch){e.stopImmediatePropagation();const[a,b]=[...pts.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]),r=zv.getBoundingClientRect();
      zoomAt(d/pinch.d,(a[0]+b[0])/2-r.left,(a[1]+b[1])/2-r.top);pinch.d=d;}},true);
  const fitS=()=>{const v=zv.getBoundingClientRect();return Math.min(v.width/1600,v.height/800)*0.96;};
  const _apply=applyZ;applyZ=function(){if(mq.matches){const v=zv.getBoundingClientRect(),w=1600*z.s,h=800*z.s,m=60;
      z.x=w<=v.width?(v.width-w)/2:Math.min(m,Math.max(v.width-w-m,z.x));z.y=h<=v.height?(v.height-h)/2:Math.min(m,Math.max(v.height-h-m,z.y));}_apply();};
  const toggle=(cx,cy)=>{if(z.s>fitS()*1.05)fitZ();else zoomAt(2.5,cx,cy);};
  let lastTap=0,tapPos=null,lastToggle=0;
  zv.addEventListener('pointerup',e=>{if(!mq.matches||e.pointerType==='mouse')return;const now=Date.now(),r=zv.getBoundingClientRect(),p=[e.clientX-r.left,e.clientY-r.top];
    if(now-lastTap<320&&tapPos&&Math.hypot(p[0]-tapPos[0],p[1]-tapPos[1])<30){toggle(p[0],p[1]);lastToggle=now;lastTap=0;}else{lastTap=now;tapPos=p;}},true);
  zv.addEventListener('dblclick',e=>{if(!mq.matches)return;e.stopImmediatePropagation();if(Date.now()-lastToggle<500)return;const r=zv.getBoundingClientRect();toggle(e.clientX-r.left,e.clientY-r.top);},true);
  $('zr').onclick=()=>fitZ();
  const _close=closeZoom;closeZoom=function(){_close();if(mq.matches)fitZ();};
  $('zx').onclick=closeZoom;
  document.addEventListener('gesturestart',e=>{if(mq.matches&&!e.target.closest('#zview'))e.preventDefault();});
  const up=e=>{pts.delete(e.pointerId);if(pts.size<2){if(pinch&&mq.matches&&z.s<fitS())fitZ();pinch=null;}};
  zv.addEventListener('pointerup',up,true);zv.addEventListener('pointercancel',up,true);
});

/* ---- portrait reflow: guillotine-cut the diagram into tiles and stack them ---- */
function portraitize(svg){
  const W=520,PAD=12,GAP=22;
  const notes=[...svg.querySelectorAll(':scope>g.note')];
  const pn=document.getElementById('pnote');
  pn.textContent=notes.map(n=>[...n.querySelectorAll('text')].map(t=>t.textContent).join(LANG==='en'?' ':'')).join('\n');
  notes.forEach(n=>n.remove());
  const kids=[...svg.children];const atoms=[];
  kids.forEach((el,ki)=>{
    if(el.classList.contains('arr')||el.tagName==='path'||el.tagName==='line')return;
    const add=(e,blocker)=>{let b;try{b=e.getBBox();}catch(_){return;}if(!b.width&&!b.height)return;
      if(!blocker&&b.width>700)return;atoms.push({i:atoms.length,k:ki,node:!!blocker,x:b.x,y:b.y,w:b.width,h:b.height});};
    if(el.classList.contains('frame')){el.querySelectorAll('text').forEach(t=>add(t,false));return;}
    add(el,el.classList.contains('node'));
  });
  if(!atoms.length)return;
  const ext=a=>{const x=Math.min(...a.map(t=>t.x)),y=Math.min(...a.map(t=>t.y));return{x,y,w:Math.max(...a.map(t=>t.x+t.w))-x,h:Math.max(...a.map(t=>t.y+t.h))-y};};
  const gaps=(a,k,s)=>{const iv=a.map(t=>[t[k],t[k]+t[s]]).sort((p,q)=>p[0]-q[0]);const g=[];let e=iv[0][1];
    for(const[p,q]of iv.slice(1)){if(p>e+6)g.push((p+e)/2);e=Math.max(e,q);}return g;};
  const mk=a=>{const E=ext(a);E.ids=a.map(t=>t.i);return E;};
  const cost=ts=>{const seq=ts.flatMap(t=>t.ids.slice().sort((p,q)=>p-q));let inv=0;for(let i=1;i<seq.length;i++)if(seq[i]<seq[i-1])inv++;
    return inv*1.5+ts.length+ts.reduce((s,t)=>s+(t.w>W?(t.w/W-1)*8:0),0);};
  function split(a,depth=0){const E=ext(a);if(E.w<=W||depth>8)return[mk(a)];
    const opts=[];
    const vg=gaps(a,'x','w').filter(c=>c-E.x<=W);
    if(vg.length){const c=vg[vg.length-1];opts.push([...split(a.filter(t=>t.x+t.w/2<c),depth+1),...split(a.filter(t=>t.x+t.w/2>=c),depth+1)]);}
    const hg=gaps(a,'y','h');
    if(hg.length){const cuts=[-1e9,...hg,1e9],out=[];for(let i=0;i<cuts.length-1;i++){const r=a.filter(t=>t.y+t.h/2>=cuts[i]&&t.y+t.h/2<cuts[i+1]);if(r.length)out.push(...split(r,depth+1));}opts.push(out);}
    if(!opts.length){const vg2=gaps(a,'x','w');if(vg2.length){const c=vg2[0];opts.push([...split(a.filter(t=>t.x+t.w/2<c),depth+1),...split(a.filter(t=>t.x+t.w/2>=c),depth+1)]);}}
    if(!opts.length)return[mk(a)];
    return opts.reduce((p,q)=>cost(q)<cost(p)?q:p);}
  const tiles=split(atoms).map(t=>({x:t.x-PAD,y:t.y-PAD,w:t.w+2*PAD,h:t.h+2*PAD,ids:t.ids,arrs:[]}));
  /* edges: assign arrows to tiles, or re-route across tiles */
  const tileOf={};tiles.forEach((t,ti)=>t.ids.forEach(i=>tileOf[i]=ti));
  const nearest=(pt)=>{let best=null,bd=1e9;atoms.forEach(a=>{const dx=Math.max(a.x-pt[0],0,pt[0]-a.x-a.w),dy=Math.max(a.y-pt[1],0,pt[1]-a.y-a.h);const d=Math.hypot(dx,dy)-(a.node?6:0);if(d<bd){bd=d;best=a;}});return bd<45?best:null;};
  const ends=d=>{const n=(d.match(/-?\d+(?:\.\d+)?/g)||[]).map(Number);return n.length>=4?[[n[0],n[1]],[n[n.length-2],n[n.length-1]]]:null;};
  const cross=[];const base=[];
  kids.forEach(el=>{if(!el.classList.contains('arr')){base.push(el.outerHTML);return;}
    const ln=el.querySelector('.ln');const e=ln&&ends(ln.getAttribute('d'));let bb;try{bb=el.getBBox();}catch(_){bb=null;}
    const A=e&&nearest(e[0]),B=e&&nearest(e[1]);
    const ta=A?tileOf[A.i]:undefined,tb=B?tileOf[B.i]:undefined;
    if(ta!==undefined&&ta===tb){tiles[ta].arrs.push(el.outerHTML);if(bb){const t=tiles[ta];const x2=Math.max(t.x+t.w,bb.x+bb.width+4),y2=Math.max(t.y+t.h,bb.y+bb.height+4);t.x=Math.min(t.x,bb.x-4);t.y=Math.min(t.y,bb.y-4);t.w=x2-t.x;t.h=y2-t.y;}}
    else if(A&&B&&A!==B)cross.push({A,B,col:ln.getAttribute('stroke')||'#2B2B2B',dash:el.classList.contains('dashed'),both:el.querySelectorAll('.hd').length>1});
    else if(bb){const mid=nearest([bb.x+bb.width/2,bb.y+bb.height/2]);const tt=mid?tileOf[mid.i]:(ta??tb);if(tt!==undefined)tiles[tt].arrs.push(el.outerHTML);}
  });
  tiles.forEach(t=>{t.s=Math.min(1,W/t.w);t.dw=t.w*t.s;t.dh=t.h*t.s;});
  const rows=[];let row=[];
  tiles.forEach(t=>{const sw=row.reduce((s,q)=>s+q.dw,0)+GAP*row.length;if(row.length&&sw+t.dw<=W)row.push(t);else{if(row.length)rows.push(row);row=[t];}});
  if(row.length)rows.push(row);
  const baseHTML=base.join('');let y=0,out='',defs='',k=0;const uid='p'+Math.random().toString(36).slice(2,7);
  rows.forEach((r,ri)=>{const rw=r.reduce((s,q)=>s+q.dw,0)+GAP*(r.length-1),rh=Math.max(...r.map(q=>q.dh));let x=(W-rw)/2;
    if(ri)out+=`<path d="M40 ${y-GAP/2}H${W-40}" stroke="#2B2B2B" stroke-opacity=".15" stroke-width="1.5" stroke-dasharray="6 6"/>`;
    r.forEach(t=>{const id=uid+(k++);t.ox=x;t.oy=y+(rh-t.dh)/2;defs+=`<clipPath id="${id}" clipPathUnits="userSpaceOnUse"><rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}"/></clipPath>`;
      out+=`<g transform="translate(${t.ox} ${t.oy}) scale(${t.s}) translate(${-t.x} ${-t.y})" data-s="${t.s}"><g clip-path="url(#${id})">${baseHTML}${t.arrs.join('')}</g></g>`;x+=t.dw+GAP;});
    y+=rh+GAP;});
  /* re-routed connectors in portrait space */
  const map=a=>{const t=tiles[tileOf[a.i]];return{x:t.ox+(a.x-t.x)*t.s,y:t.oy+(a.y-t.y)*t.s,w:a.w*t.s,h:a.h*t.s};};
  const f1=v=>Math.round(v*10)/10;let rail=0,lrail=0;const MR=atoms.map(a=>Object.assign(map(a),{a}));
  const head=(tip,dx,dy,col)=>{const L=Math.hypot(dx,dy)||1;dx/=L;dy/=L;const h=10,sp=0.45,c=Math.cos(sp),s=Math.sin(sp);
    const a1=[tip[0]-h*(dx*c-dy*s),tip[1]-h*(dy*c+dx*s)],a2=[tip[0]-h*(dx*c+dy*s),tip[1]-h*(dy*c-dx*s)];
    return `<path class="hd" d="M${f1(a1[0])} ${f1(a1[1])}L${f1(tip[0])} ${f1(tip[1])}L${f1(a2[0])} ${f1(a2[1])}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;};
  cross.forEach((c,ci)=>{const S=map(c.A),T=map(c.B);let d,tip,dir,st,sdir;
    const blocked=(x1,x2,y1,y2)=>MR.some(m=>m.a!==c.A&&m.a!==c.B&&m.x<x2&&m.x+m.w>x1&&m.y<y2&&m.y+m.h>y1);
    const sx=S.x+S.w/2,tx=T.x+T.w/2;
    if(T.y>=S.y+S.h-2&&blocked(Math.min(sx,tx)-4,Math.max(sx,tx)+4,S.y+S.h+1,T.y-1)){const lx=6+(lrail++%3)*5;st=[S.x,S.y+S.h/2];tip=[T.x,T.y+T.h/2];
      d=`M${f1(st[0])} ${f1(st[1])}H${f1(lx+6)}Q${f1(lx)} ${f1(st[1])} ${f1(lx)} ${f1(st[1]+6)}V${f1(tip[1]-6)}Q${f1(lx)} ${f1(tip[1])} ${f1(lx+6)} ${f1(tip[1])}H${f1(tip[0])}`;dir=[1,0];sdir=[-1,0];}
    else if(T.y>=S.y+S.h-2){st=[S.x+S.w/2,S.y+S.h];tip=[T.x+T.w/2,T.y];const m=Math.max(18,(tip[1]-st[1])/2);d=`M${f1(st[0])} ${f1(st[1])}C${f1(st[0])} ${f1(st[1]+m)} ${f1(tip[0])} ${f1(tip[1]-m)} ${f1(tip[0])} ${f1(tip[1])}`;dir=[0,1];sdir=[0,-1];}
    else if(T.x>=S.x+S.w-2&&Math.abs((T.y+T.h/2)-(S.y+S.h/2))<Math.max(S.h,T.h)){st=[S.x+S.w,S.y+S.h/2];tip=[T.x,T.y+T.h/2];const m=(tip[0]-st[0])/2;d=`M${f1(st[0])} ${f1(st[1])}C${f1(st[0]+m)} ${f1(st[1])} ${f1(tip[0]-m)} ${f1(tip[1])} ${f1(tip[0])} ${f1(tip[1])}`;dir=[1,0];sdir=[-1,0];}
    else{const rx=W-6-(rail++%3)*5;st=[S.x+S.w,S.y+S.h/2];tip=[T.x+T.w,T.y+T.h/2];d=`M${f1(st[0])} ${f1(st[1])}H${f1(rx-6)}Q${f1(rx)} ${f1(st[1])} ${f1(rx)} ${f1(st[1]-6)}V${f1(tip[1]+6)}Q${f1(rx)} ${f1(tip[1])} ${f1(rx-6)} ${f1(tip[1])}H${f1(tip[0])}`;dir=[-1,0];sdir=[1,0];}
    out+=`<g class="arr pr${c.dash?' dashed':''}" style="--d:${(0.3+ci*0.08).toFixed(2)}s"><path class="ln" d="${d}" pathLength="1" fill="none" stroke="${c.col}" stroke-width="2" stroke-linecap="round"${c.dash?' stroke-dasharray="0.018 0.014"':''}/>${head(tip,dir[0],dir[1],c.col)}${c.both?head(st,sdir[0],sdir[1],c.col):''}</g>`;});
  svg.dataset.p=1;svg.setAttribute('viewBox',`0 0 ${W} ${y-GAP}`);svg.innerHTML=`<defs>${defs}</defs>`+out;
}
