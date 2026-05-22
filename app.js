const tools = [
  // === 编码 Agent ===
  {
    name: "Claude Code",
    category: "coding",
    stars: "122K+",
    repo: "anthropics/claude-code",
    url: "https://github.com/anthropics/claude-code",
    pain: "复杂多文件代码重构、理解大型代码库",
    desc: "终端优先的自主编码 Agent，1M token 上下文窗口，SWE-bench 80%+ 得分。可直接操作 git、运行测试、多文件修改。",
    tags: ["CLI", "Agent", "多文件编辑", "Git集成"]
  },
  {
    name: "Cursor",
    category: "coding",
    stars: "50K+",
    repo: "getcursor/cursor",
    url: "https://www.cursor.com",
    pain: "IDE 中与 AI 无缝协作编码",
    desc: "AI-first 代码编辑器，基于 VS Code。Composer 模式支持多文件 Agent 编辑，Tab 补全极快，支持 Claude/GPT/Gemini 多模型切换。",
    tags: ["IDE", "多模型", "Agent模式", "Tab补全"]
  },
  {
    name: "OpenAI Codex CLI",
    category: "coding",
    stars: "41K+",
    repo: "openai/codex",
    url: "https://github.com/openai/codex",
    pain: "终端内快速完成编码任务",
    desc: "OpenAI 官方轻量终端编码 Agent，支持 GPT-5-Codex 模型，自动执行命令、编辑文件、运行测试。适合终端重度用户。",
    tags: ["CLI", "GPT-5", "轻量", "终端"]
  },
  {
    name: "Aider",
    category: "coding",
    stars: "30K+",
    repo: "paul-gauthier/aider",
    url: "https://github.com/paul-gauthier/aider",
    pain: "终端里 pair programming、自动 git commit",
    desc: "最佳开源终端 AI 编码助手，支持多模型(Claude/GPT/本地)，自动 git 集成，多文件编辑，免费无限使用。",
    tags: ["开源", "CLI", "Git集成", "多模型"]
  },
  {
    name: "GitHub Copilot",
    category: "coding",
    stars: "内置",
    repo: "github/copilot",
    url: "https://github.com/features/copilot",
    pain: "日常编码补全和快速生成",
    desc: "最普及的 AI 编码助手，Copilot Workspace 支持全流程 Agent 开发，从 Issue 到 PR 自动化。Agent 模式支持多文件修改。",
    tags: ["IDE插件", "Agent模式", "Workspace", "企业级"]
  },
  {
    name: "OpenHands (ex-OpenDevin)",
    category: "coding",
    stars: "45K+",
    repo: "All-Hands-AI/OpenHands",
    url: "https://github.com/All-Hands-AI/OpenHands",
    pain: "让 AI 像真正的开发者一样工作",
    desc: "开源的 AI 软件工程师平台，能浏览网页、写代码、执行命令。支持沙盒环境，SWE-bench 顶级表现。",
    tags: ["开源", "自主Agent", "沙盒", "SWE-bench"]
  },
  {
    name: "Devin",
    category: "coding",
    stars: "商业",
    repo: "cognition-ai/devin",
    url: "https://devin.ai",
    pain: "完全自主完成软件工程任务",
    desc: "第一个全自主 AI 软件工程师，能独立完成从需求理解到部署的完整流程。适合委派独立任务。$500/月。",
    tags: ["自主Agent", "全流程", "商业"]
  },

  // === 工作流/自动化 ===
  {
    name: "n8n",
    category: "workflow",
    stars: "150K+",
    repo: "n8n-io/n8n",
    url: "https://github.com/n8n-io/n8n",
    pain: "构建 AI 驱动的自动化工作流",
    desc: "最火的开源工作流自动化平台，fair-code 协议。原生支持 AI Agent 节点、LangChain 集成、400+ 连接器。可自托管，数据隐私有保障。",
    tags: ["开源", "自托管", "低代码", "400+集成"]
  },
  {
    name: "Dify",
    category: "workflow",
    stars: "90K+",
    repo: "langgenius/dify",
    url: "https://github.com/langgenius/dify",
    pain: "快速构建生产级 AI 应用",
    desc: "开源 LLMOps 平台，可视化编排 AI 工作流、RAG 管道、Agent。支持多模型、知识库管理、API 即发布。从原型到生产一站式。",
    tags: ["开源", "LLMOps", "RAG", "可视化"]
  },
  {
    name: "Flowise",
    category: "workflow",
    stars: "35K+",
    repo: "FlowiseAI/Flowise",
    url: "https://github.com/FlowiseAI/Flowise",
    pain: "拖拽式构建 LLM 应用链",
    desc: "基于 LangChain 的拖拽式 UI，可视化构建 LLM 流程。支持自定义 Agent、RAG、对话记忆。比直接写 LangChain 代码快 10 倍。",
    tags: ["开源", "拖拽式", "LangChain", "RAG"]
  },
  {
    name: "Zapier + AI",
    category: "workflow",
    stars: "商业",
    repo: "zapier",
    url: "https://zapier.com/ai",
    pain: "非技术人员自动化重复工作",
    desc: "7000+ 应用集成 + AI Agent，自然语言创建自动化。Central 功能可创建自主 Agent 处理业务流程。最适合非技术团队。",
    tags: ["商业", "无代码", "7000+集成", "Agent"]
  },

  // === 本地部署 ===
  {
    name: "Ollama",
    category: "local",
    stars: "130K+",
    repo: "ollama/ollama",
    url: "https://github.com/ollama/ollama",
    pain: "一条命令本地运行大模型",
    desc: "本地 LLM 运行神器。`ollama run llama3` 即跑，支持 DeepSeek/Qwen/Gemma/Llama 等主流模型。极简 API，Mac/Linux/Win 全平台。",
    tags: ["开源", "本地部署", "极简", "全平台"]
  },
  {
    name: "Open WebUI",
    category: "local",
    stars: "80K+",
    repo: "open-webui/open-webui",
    url: "https://github.com/open-webui/open-webui",
    pain: "本地模型需要好用的聊天界面",
    desc: "最佳本地 LLM 前端，ChatGPT 风格 UI。支持 Ollama/OpenAI API，多用户、RAG、插件、语音。Docker 一键部署，完全私有。",
    tags: ["开源", "ChatGPT风格", "RAG", "多用户"]
  },
  {
    name: "LocalAI",
    category: "local",
    stars: "30K+",
    repo: "mudler/LocalAI",
    url: "https://github.com/mudler/LocalAI",
    pain: "需要 OpenAI API 兼容的本地推理",
    desc: "OpenAI API 的本地替代品，无需 GPU 即可运行。支持文本/图像/音频生成，兼容现有 OpenAI SDK 代码，零改动切换到本地。",
    tags: ["开源", "API兼容", "无需GPU", "多模态"]
  },
  {
    name: "LM Studio",
    category: "local",
    stars: "商业/免费",
    repo: "lmstudio-ai",
    url: "https://lmstudio.ai",
    pain: "图形界面管理和运行本地模型",
    desc: "最友好的本地模型管理 GUI，一键下载/运行 GGUF 模型。内置 Chat UI + 本地 API Server。个人免费，适合不想碰命令行的用户。",
    tags: ["GUI", "免费", "GGUF", "API Server"]
  },
  {
    name: "PrivateGPT",
    category: "local",
    stars: "55K+",
    repo: "zylon-ai/private-gpt",
    url: "https://github.com/zylon-ai/private-gpt",
    pain: "私密文档问答，数据不出本地",
    desc: "100% 私有的文档 AI 问答系统，支持上传 PDF/DOCX/TXT，本地向量化+LLM 回答。企业敏感数据场景的首选。",
    tags: ["开源", "RAG", "隐私", "文档问答"]
  },

  // === MCP 生态 ===
  {
    name: "MCP Servers (官方)",
    category: "mcp",
    stars: "15K+",
    repo: "modelcontextprotocol/servers",
    url: "https://github.com/modelcontextprotocol/servers",
    pain: "AI 模型需要连接外部数据和工具",
    desc: "Anthropic 官方 MCP Server 实现集合。包含 Filesystem、GitHub、Slack、PostgreSQL、Google Drive 等核心连接器。AI Agent 能力扩展必备。",
    tags: ["官方", "协议标准", "数据连接"]
  },
  {
    name: "Awesome MCP Servers",
    category: "mcp",
    stars: "35K+",
    repo: "wong2/awesome-mcp-servers",
    url: "https://github.com/wong2/awesome-mcp-servers",
    pain: "找不到好用的 MCP Server",
    desc: "最全的 MCP Server 策展列表，按类别整理（数据库/搜索/开发/生产力等）。选 MCP Server 先看这个列表。",
    tags: ["策展列表", "分类整理", "社区维护"]
  },
  {
    name: "Smithery.ai",
    category: "mcp",
    stars: "平台",
    repo: "smithery-ai",
    url: "https://smithery.ai",
    pain: "MCP Server 发现和一键安装",
    desc: "MCP Server 的 npm/应用商店，一键安装配置。按使用量排名，有质量保障。支持 Claude/Cursor/Windsurf 等客户端直接安装。",
    tags: ["平台", "一键安装", "质量排名"]
  },

  // === 应用构建 ===
  {
    name: "bolt.new",
    category: "builder",
    stars: "25K+",
    repo: "stackblitz/bolt.new",
    url: "https://github.com/stackblitz/bolt.new",
    pain: "自然语言直接生成全栈 Web 应用",
    desc: "StackBlitz 出品，提示词即全栈应用。浏览器内运行，实时预览，一键部署。支持 React/Vue/Node 等技术栈，非技术人员也能用。",
    tags: ["全栈生成", "浏览器内", "一键部署"]
  },
  {
    name: "v0.dev",
    category: "builder",
    stars: "商业",
    repo: "vercel/v0",
    url: "https://v0.dev",
    pain: "快速生成高质量 UI 组件",
    desc: "Vercel 出品的 AI UI 生成器，描述需求即生成 React + Tailwind 组件。生成质量极高，支持 shadcn/ui，可直接复制到项目。",
    tags: ["UI生成", "React", "Tailwind", "高质量"]
  },
  {
    name: "Lovable (ex-GPT Engineer)",
    category: "builder",
    stars: "55K+",
    repo: "lovable-dev/lovable",
    url: "https://lovable.dev",
    pain: "从想法到部署的全栈应用生成",
    desc: "AI 全栈应用生成器，对话式开发。支持认证、数据库、支付等完整功能。从 GPT-Engineer 演变而来，更注重生产可用性。",
    tags: ["全栈", "对话式开发", "生产级"]
  },
  {
    name: "Dyad",
    category: "builder",
    stars: "8K+",
    repo: "dyad-sh/dyad",
    url: "https://github.com/dyad-sh/dyad",
    pain: "本地、隐私优先的应用构建",
    desc: "开源本地 AI 应用构建器，v0/Bolt 的本地替代品。支持 Ollama 本地模型，代码完全本地生成，隐私有保障。Power User 向。",
    tags: ["开源", "本地", "隐私", "替代品"]
  },

  // === Agent 框架 ===
  {
    name: "LangChain",
    category: "framework",
    stars: "100K+",
    repo: "langchain-ai/langchain",
    url: "https://github.com/langchain-ai/langchain",
    pain: "构建 LLM 应用的基础设施",
    desc: "最流行的 LLM 应用开发框架。提供 Chain/Agent/Tool/Memory 等抽象。生态最大，文档最全。LangGraph 子项目支持复杂有状态工作流。",
    tags: ["开源", "Python/JS", "生态最大", "LangGraph"]
  },
  {
    name: "CrewAI",
    category: "framework",
    stars: "28K+",
    repo: "crewAIInc/crewAI",
    url: "https://github.com/crewAIInc/crewAI",
    pain: "多 Agent 协作完成复杂任务",
    desc: "最直觉的多 Agent 框架，角色扮演范式。定义 Agent 角色+目标+工具，自动协作。3 小时出原型，89% 任务成功率。月下载 500 万+。",
    tags: ["开源", "多Agent", "角色扮演", "简单直觉"]
  },
  {
    name: "AutoGen (Microsoft)",
    category: "framework",
    stars: "40K+",
    repo: "microsoft/autogen",
    url: "https://github.com/microsoft/autogen",
    pain: "企业级多 Agent 系统",
    desc: "微软出品的多 Agent 对话框架。支持 Agent 间自主对话、人机协同、代码执行。企业场景首选，与 Azure 生态深度集成。",
    tags: ["微软", "企业级", "多Agent对话", "Azure"]
  },
  {
    name: "LangGraph",
    category: "framework",
    stars: "10K+",
    repo: "langchain-ai/langgraph",
    url: "https://github.com/langchain-ai/langgraph",
    pain: "需要精细控制 Agent 工作流状态",
    desc: "LangChain 团队出品，图状态机驱动的 Agent 框架。支持循环、分支、持久化、人机交互节点。最适合需要精确控制流程的场景。",
    tags: ["状态图", "精细控制", "持久化", "循环"]
  },
  {
    name: "Agno (ex-Phidata)",
    category: "framework",
    stars: "20K+",
    repo: "agno-agi/agno",
    url: "https://github.com/agno-agi/agno",
    pain: "快速构建带工具和记忆的 Agent",
    desc: "极简 Agent 构建框架，几行代码创建带工具调用、知识库、记忆的 Agent。内置 Web 搜索/计算/文件等工具。上手最快的框架之一。",
    tags: ["极简", "快速上手", "内置工具", "知识库"]
  },

  // === 更多痛点工具 ===
  {
    name: "Perplexity",
    category: "workflow",
    stars: "商业",
    repo: "perplexity-ai",
    url: "https://perplexity.ai",
    pain: "AI 搜索替代 Google，答案带来源",
    desc: "AI 原生搜索引擎，回答问题直接给结论+来源链接。Deep Research 功能可自主研究复杂课题，生成完整报告。研究效率 10x。",
    tags: ["AI搜索", "带来源", "深度研究"]
  },
  {
    name: "NotebookLM",
    category: "workflow",
    stars: "Google",
    repo: "google",
    url: "https://notebooklm.google.com",
    pain: "大量文档/论文需要快速理解和问答",
    desc: "Google 出品的 AI 笔记本，上传文档后可对话、提问、生成摘要。支持 PDF/网页/YouTube。播客生成功能把文档变成对话式音频。",
    tags: ["文档理解", "多来源", "播客生成"]
  },
  {
    name: "Whisper + faster-whisper",
    category: "local",
    stars: "75K+",
    repo: "openai/whisper",
    url: "https://github.com/openai/whisper",
    pain: "音频/视频转文字",
    desc: "OpenAI 开源语音识别模型，支持 99 种语言。faster-whisper 用 CTranslate2 加速 4x。会议录音、字幕生成、播客转录必备。",
    tags: ["开源", "多语言", "语音转文字", "本地"]
  },
  {
    name: "ComfyUI",
    category: "local",
    stars: "70K+",
    repo: "comfyanonymous/ComfyUI",
    url: "https://github.com/comfyanonymous/ComfyUI",
    pain: "AI 图像生成的精细工作流控制",
    desc: "节点式 AI 图像生成工作流引擎。比 WebUI 更灵活，支持复杂管线(ControlNet/IP-Adapter/视频)。专业用户和批量生产首选。",
    tags: ["开源", "节点式", "Stable Diffusion", "专业级"]
  },
  {
    name: "Markitdown",
    category: "workflow",
    stars: "40K+",
    repo: "microsoft/markitdown",
    url: "https://github.com/microsoft/markitdown",
    pain: "各种文档格式转 Markdown 给 LLM 使用",
    desc: "微软出品，将 PDF/DOCX/PPTX/HTML/图片等转为 Markdown 文本。LLM/RAG 管道的预处理利器，保留结构和格式信息。",
    tags: ["微软", "格式转换", "RAG预处理", "多格式"]
  },

  // === 浏览器自动化 ===
  {
    name: "Browser Use",
    category: "browser",
    stars: "20K+",
    repo: "browser-use/browser-use",
    url: "https://github.com/browser-use/browser-use",
    pain: "让 AI Agent 像人一样操作浏览器",
    desc: "AI 浏览器自动化框架，Agent 可以看到网页、点击、填写表单、导航。支持 Claude/GPT 视觉模型驱动，复杂网页任务自动化。",
    tags: ["开源", "浏览器Agent", "视觉驱动", "自动化"]
  },
  {
    name: "Stagehand",
    category: "browser",
    stars: "12K+",
    repo: "browserbase/stagehand",
    url: "https://github.com/browserbase/stagehand",
    pain: "AI 网页抓取和自动化测试",
    desc: "Browserbase 出品的 AI Web Agent SDK，基于 Playwright。用自然语言描述网页操作，自动找到元素并执行。比传统选择器维护成本低 10x。",
    tags: ["SDK", "Playwright", "自然语言", "测试"]
  },
  {
    name: "Playwright MCP",
    category: "browser",
    stars: "8K+",
    repo: "microsoft/playwright-mcp",
    url: "https://github.com/microsoft/playwright-mcp",
    pain: "AI Agent 需要可控的浏览器访问",
    desc: "微软官方 Playwright MCP Server，让 Claude/Cursor 等 AI 可以打开浏览器、截图、执行操作。安全可控的浏览器自动化方案。",
    tags: ["微软", "MCP", "Playwright", "安全"]
  },

  // === 数据分析 ===
  {
    name: "PandasAI",
    category: "data",
    stars: "14K+",
    repo: "sinaptik-ai/pandas-ai",
    url: "https://github.com/sinaptik-ai/pandas-ai",
    pain: "用自然语言查询和分析数据",
    desc: "对话式数据分析库，用自然语言对 SQL/CSV/DataFrame 提问。自动生成查询、可视化图表。数据分析师效率提升利器。",
    tags: ["开源", "Python", "SQL", "可视化"]
  },
  {
    name: "Open Interpreter",
    category: "data",
    stars: "55K+",
    repo: "OpenInterpreter/open-interpreter",
    url: "https://github.com/OpenInterpreter/open-interpreter",
    pain: "让 AI 在本地执行代码完成任务",
    desc: "自然语言计算机接口，LLM 可以在本地运行 Python/JS/Shell 代码。处理文件、分析数据、控制系统。Code Interpreter 的本地开源替代。",
    tags: ["开源", "本地执行", "多语言", "系统控制"]
  },
  {
    name: "Julius AI",
    category: "data",
    stars: "商业",
    repo: "julius-ai",
    url: "https://julius.ai",
    pain: "上传数据即得分析报告和图表",
    desc: "最简单的 AI 数据分析工具，上传 CSV/Excel 即可对话式分析。自动生成图表、统计报告、回归分析。零代码门槛，适合非技术用户。",
    tags: ["商业", "零代码", "可视化", "Excel"]
  },

  // === DevOps/运维 ===
  {
    name: "K8sGPT",
    category: "devops",
    stars: "6K+",
    repo: "k8sgpt-ai/k8sgpt",
    url: "https://github.com/k8sgpt-ai/k8sgpt",
    pain: "Kubernetes 问题诊断太复杂",
    desc: "AI 驱动的 K8s 诊断工具，自动扫描集群问题并用自然语言解释根因和修复建议。支持多种 LLM 后端，运维必备。",
    tags: ["开源", "K8s", "诊断", "运维"]
  },
  {
    name: "PR-Agent (Qodo)",
    category: "devops",
    stars: "7K+",
    repo: "qodo-ai/pr-agent",
    url: "https://github.com/qodo-ai/pr-agent",
    pain: "PR Review 耗时且容易遗漏",
    desc: "AI 驱动的 PR 自动分析工具。自动生成 PR 描述、代码审查、改进建议、安全扫描。支持 GitHub/GitLab/Bitbucket。",
    tags: ["开源", "Code Review", "自动化", "CI/CD"]
  },
  {
    name: "Warp",
    category: "devops",
    stars: "21K+",
    repo: "warpdotdev/warp",
    url: "https://github.com/warpdotdev/warp",
    pain: "终端效率低下，命令记不住",
    desc: "AI 原生终端，Rust 构建。内置 AI 命令搜索/补全/解释，块状输出，协作共享。Agent 模式可自动执行多步骤任务。",
    tags: ["Rust", "终端", "AI补全", "Agent模式"]
  },
  {
    name: "Atuin",
    category: "devops",
    stars: "22K+",
    repo: "atuinsh/atuin",
    url: "https://github.com/atuinsh/atuin",
    pain: "Shell 历史命令搜索不够智能",
    desc: "神奇的 Shell 历史记录工具，用 SQLite 替代原始 history。全文搜索、跨机器同步、统计分析。支持 Bash/Zsh/Fish。",
    tags: ["开源", "Rust", "Shell历史", "同步"]
  },

  // === AI 写作/知识 ===
  {
    name: "Notion AI",
    category: "writing",
    stars: "商业",
    repo: "notion",
    url: "https://notion.so/product/ai",
    pain: "文档写作、笔记整理效率",
    desc: "Notion 内置 AI 助手，可写作、改写、摘要、翻译、头脑风暴。跨 workspace 问答，连接所有文档的知识库。最适合 Notion 用户。",
    tags: ["商业", "笔记", "知识库", "Workspace"]
  },
  {
    name: "Obsidian + Copilot",
    category: "writing",
    stars: "3K+ 插件",
    repo: "logancyang/obsidian-copilot",
    url: "https://github.com/logancyang/obsidian-copilot",
    pain: "本地知识库需要 AI 问答",
    desc: "Obsidian AI 插件，让你的 Markdown 笔记库变成可对话的知识库。支持 RAG 搜索、写作辅助、摘要。数据完全本地。",
    tags: ["插件", "本地", "RAG", "Markdown"]
  },
  {
    name: "Grammarly",
    category: "writing",
    stars: "商业",
    repo: "grammarly",
    url: "https://grammarly.com",
    pain: "英文写作语法和表达优化",
    desc: "最成熟的 AI 写作助手，语法纠错 + 风格改写 + 语气调整。支持全平台(浏览器/Office/IDE)。GrammarlyGO 支持 AI 生成和改写。",
    tags: ["商业", "语法", "全平台", "英文"]
  },
  {
    name: "Cursor Rules / AGENTS.md",
    category: "writing",
    stars: "策略",
    repo: "cursor/agents-md",
    url: "https://github.com/PatrickJS/awesome-cursorrules",
    pain: "AI 编码工具缺乏项目上下文",
    desc: "通过 .cursorrules / AGENTS.md 文件定义项目规范、技术栈、编码风格。让 AI 工具理解你的项目。awesome-cursorrules 收集了大量模板。",
    tags: ["模板", "规范", "上下文", "Prompt"]
  },

  // === AI 视频/音频/创意 ===
  {
    name: "Open-Sora",
    category: "creative",
    stars: "28K+",
    repo: "hpcaitech/Open-Sora",
    url: "https://github.com/hpcaitech/Open-Sora",
    pain: "开源视频生成",
    desc: "开源视频生成模型，目标民主化视频创作。支持文本到视频、图片到视频、视频续写。可本地部署，质量接近商业方案。",
    tags: ["开源", "视频生成", "本地部署"]
  },
  {
    name: "Stable Diffusion WebUI",
    category: "creative",
    stars: "145K+",
    repo: "AUTOMATIC1111/stable-diffusion-webui",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    pain: "AI 图像生成的全功能界面",
    desc: "最流行的 AI 图像生成 Web UI，支持 txt2img/img2img/inpainting/ControlNet/LoRA 等全部功能。插件生态丰富，本地完全免费。",
    tags: ["开源", "图像生成", "插件生态", "本地"]
  },
  {
    name: "ElevenLabs",
    category: "creative",
    stars: "商业",
    repo: "elevenlabs",
    url: "https://elevenlabs.io",
    pain: "高质量 AI 语音合成和克隆",
    desc: "最逼真的 AI 语音合成，支持 29 种语言，情感丰富。语音克隆只需几分钟音频。播客/有声书/配音/视频旁白首选。",
    tags: ["商业", "TTS", "语音克隆", "多语言"]
  },
  {
    name: "HunyuanVideo",
    category: "creative",
    stars: "12K+",
    repo: "Tencent/HunyuanVideo",
    url: "https://github.com/Tencent/HunyuanVideo",
    pain: "需要开源可控的视频生成",
    desc: "腾讯开源视频生成模型，720p/1080p 质量。文本到视频、图片到视频。开源可商用，支持本地部署。",
    tags: ["开源", "腾讯", "视频生成", "商用"]
  },

  // === RAG / 知识库 ===
  {
    name: "RAGFlow",
    category: "rag",
    stars: "35K+",
    repo: "infiniflow/ragflow",
    url: "https://github.com/infiniflow/ragflow",
    pain: "企业文档问答准确率不够",
    desc: "深度文档理解的 RAG 引擎，支持复杂文档(表格/图片/公式)解析。Chunk 策略智能，幻觉率低。比简单向量搜索准确率高 30%+。",
    tags: ["开源", "深度解析", "企业级", "低幻觉"]
  },
  {
    name: "AnythingLLM",
    category: "rag",
    stars: "35K+",
    repo: "Mintplex-Labs/anything-llm",
    url: "https://github.com/Mintplex-Labs/anything-llm",
    pain: "想快速搭建私有知识库问答系统",
    desc: "全栈 AI 应用，支持任何 LLM + 任何文档 = 可对话的知识库。Docker 一键部署，支持多用户、多 workspace。最简单的 RAG 方案。",
    tags: ["开源", "全栈", "Docker", "多用户"]
  },
  {
    name: "Haystack",
    category: "rag",
    stars: "18K+",
    repo: "deepset-ai/haystack",
    url: "https://github.com/deepset-ai/haystack",
    pain: "构建生产级 RAG 管道",
    desc: "企业级 RAG 框架，组件化设计。支持文档预处理、向量存储、Retriever、Reader 全链路。适合需要定制化 RAG 管道的团队。",
    tags: ["开源", "企业级", "管道化", "可定制"]
  },

  // === AI 搜索/研究 ===
  {
    name: "SearXNG",
    category: "search",
    stars: "15K+",
    repo: "searxng/searxng",
    url: "https://github.com/searxng/searxng",
    pain: "隐私搜索 + AI 集成",
    desc: "开源隐私元搜索引擎，聚合 70+ 搜索源。无追踪、无广告。可作为 LLM 的搜索后端，完美搭配 Open WebUI 或 n8n。",
    tags: ["开源", "隐私", "元搜索", "自托管"]
  },
  {
    name: "Firecrawl",
    category: "search",
    stars: "25K+",
    repo: "mendableai/firecrawl",
    url: "https://github.com/mendableai/firecrawl",
    pain: "网页抓取后清洗给 LLM 使用",
    desc: "AI 友好的网页抓取 API，自动将网页转为干净 Markdown/结构化数据。支持 JavaScript 渲染、反爬绕过。RAG/Agent 的数据源首选。",
    tags: ["API", "爬虫", "Markdown", "RAG"]
  },
  {
    name: "Tavily",
    category: "search",
    stars: "5K+",
    repo: "tavily-ai/tavily-python",
    url: "https://github.com/tavily-ai/tavily-python",
    pain: "AI Agent 需要实时搜索能力",
    desc: "专为 AI Agent 设计的搜索 API，返回结构化、相关性高的结果。LangChain/CrewAI/AutoGen 官方推荐搜索工具。免费额度慷慨。",
    tags: ["API", "Agent搜索", "结构化", "免费额度"]
  },

  // === AI 安全 ===
  {
    name: "Semgrep",
    category: "security",
    stars: "11K+",
    repo: "semgrep/semgrep",
    url: "https://github.com/semgrep/semgrep",
    pain: "代码安全漏洞自动检测",
    desc: "静态分析工具，支持 30+ 语言。AI 辅助规则编写，自动检测 OWASP Top 10、注入、XSS 等漏洞。比传统 SAST 快 10x，误报率低。",
    tags: ["开源", "SAST", "多语言", "CI集成"]
  },
  {
    name: "Socket.dev",
    category: "security",
    stars: "商业",
    repo: "socketdev",
    url: "https://socket.dev",
    pain: "供应链攻击检测(npm/pip恶意包)",
    desc: "AI 驱动的供应链安全，实时检测恶意 npm/pip/gem 包。分析包行为而非仅看 CVE。在你安装前发现风险，阻止供应链攻击。",
    tags: ["商业", "供应链", "包安全", "实时"]
  },
  {
    name: "PentAGI",
    category: "security",
    stars: "3K+",
    repo: "vxcontrol/pentagi",
    url: "https://github.com/vxcontrol/pentagi",
    pain: "自动化渗透测试",
    desc: "AI 自主渗透测试系统，能自动发现漏洞、选择攻击路径、执行利用。支持多 Agent 协作，报告自动生成。安全团队效率倍增。",
    tags: ["开源", "渗透测试", "自主Agent", "报告"]
  },

  // === 部署/基础设施 ===
  {
    name: "Vercel",
    category: "deploy",
    stars: "平台",
    repo: "vercel/vercel",
    url: "https://vercel.com",
    pain: "前端项目一键部署和预览",
    desc: "最简单的前端部署平台，Git push 即部署。自动 Preview URL、Edge Function、AI SDK 集成。Next.js/React/Vue 项目首选。",
    tags: ["平台", "零配置", "Edge", "预览"]
  },
  {
    name: "Coolify",
    category: "deploy",
    stars: "38K+",
    repo: "coollabsio/coolify",
    url: "https://github.com/coollabsio/coolify",
    pain: "自托管 PaaS，不想用 Heroku/Vercel",
    desc: "开源的 Heroku/Netlify/Vercel 替代品。一键部署任何应用/数据库到自己的服务器。Docker 底层，UI 好用，完全掌控数据。",
    tags: ["开源", "自托管", "PaaS", "Docker"]
  },
  {
    name: "Supabase",
    category: "deploy",
    stars: "78K+",
    repo: "supabase/supabase",
    url: "https://github.com/supabase/supabase",
    pain: "快速搭建后端(数据库+认证+API)",
    desc: "开源 Firebase 替代品。PostgreSQL + 认证 + 实时订阅 + 存储 + Edge Functions。AI 应用的后端首选，与 bolt.new/Lovable 深度集成。",
    tags: ["开源", "BaaS", "PostgreSQL", "实时"]
  },

  // === 模型训练/微调 ===
  {
    name: "Unsloth",
    category: "training",
    stars: "25K+",
    repo: "unslothai/unsloth",
    url: "https://github.com/unslothai/unsloth",
    pain: "LLM 微调太慢太贵",
    desc: "2-5x 加速 LLM 微调，显存减少 80%。支持 Llama/Mistral/Qwen 等。Consumer GPU 也能跑。Hugging Face 生态完全兼容。",
    tags: ["开源", "微调加速", "低显存", "Hugging Face"]
  },
  {
    name: "LLaMA-Factory",
    category: "training",
    stars: "45K+",
    repo: "hiyouga/LLaMA-Factory",
    url: "https://github.com/hiyouga/LLaMA-Factory",
    pain: "LLM 微调流程太复杂",
    desc: "一站式 LLM 微调框架，Web UI + CLI。支持 100+ 模型、全参/LoRA/QLoRA 等方法。从数据准备到部署全覆盖。中文社区最活跃。",
    tags: ["开源", "一站式", "WebUI", "中文"]
  },
  {
    name: "vLLM",
    category: "training",
    stars: "45K+",
    repo: "vllm-project/vllm",
    url: "https://github.com/vllm-project/vllm",
    pain: "LLM 推理服务吞吐量太低",
    desc: "最快的 LLM 推理引擎，PagedAttention 技术。比 HuggingFace 快 24x。OpenAI 兼容 API，生产级部署。大规模服务的事实标准。",
    tags: ["开源", "推理", "高吞吐", "生产级"]
  },

  // === 对话/聊天 ===
  {
    name: "LibreChat",
    category: "chat",
    stars: "22K+",
    repo: "danny-avila/LibreChat",
    url: "https://github.com/danny-avila/LibreChat",
    pain: "多模型统一聊天界面",
    desc: "开源的 ChatGPT UI 克隆，支持 OpenAI/Claude/Gemini/本地模型。多用户、插件、文件上传、Agent。自托管的多模型聊天首选。",
    tags: ["开源", "多模型", "自托管", "插件"]
  },
  {
    name: "LobeChat",
    category: "chat",
    stars: "55K+",
    repo: "lobehub/lobe-chat",
    url: "https://github.com/lobehub/lobe-chat",
    pain: "需要美观可扩展的 AI 聊天前端",
    desc: "现代化 AI 聊天框架，UI 极美。支持 TTS/STT、视觉识别、插件市场、Knowledge Base。PWA 支持，可作为桌面 App 使用。",
    tags: ["开源", "美观", "PWA", "插件市场"]
  },
  {
    name: "ChatBox",
    category: "chat",
    stars: "25K+",
    repo: "Bin-Huang/chatbox",
    url: "https://github.com/Bin-Huang/chatbox",
    pain: "桌面 AI 聊天客户端",
    desc: "跨平台 AI 桌面客户端，支持 GPT/Claude/Gemini/Ollama。离线使用、Prompt 管理、会话历史。比网页版更稳定，适合重度用户。",
    tags: ["开源", "桌面", "跨平台", "Prompt管理"]
  }
];

// Render
function renderTools(filter = 'all') {
  const grid = document.getElementById('tools-grid');
  const filtered = filter === 'all' ? tools : tools.filter(t => t.category === filter);
  document.getElementById('total-count').textContent = tools.length;

  grid.innerHTML = filtered.map(tool => `
    <div class="tool-card" data-category="${tool.category}">
      <div class="card-header">
        <h3>${tool.name}</h3>
        <span class="stars">${tool.stars} &#11088;</span>
      </div>
      <div class="pain-point">&#128293; 解决痛点: ${tool.pain}</div>
      <p class="desc">${tool.desc}</p>
      <div class="tags">${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a href="${tool.url}" target="_blank" class="card-link">&#128279; ${tool.url.includes('github.com') ? 'GitHub' : '官网'}</a>
    </div>
  `).join('');
}

// Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTools(btn.dataset.filter);
  });
});

// Init
renderTools();

// Add more tools dynamically (Agent Skills + Video Editing ecosystem)
tools.push(
  // === Agent Skills 生态 ===
  {
    name: "AgentSkillsHub",
    category: "skills",
    stars: "70K+ Skills",
    repo: "agentskillshub",
    url: "https://agentskillshub.top",
    pain: "发现和搜索高质量 AI Agent Skills",
    desc: "最大的开源 Agent Skills 目录，收录 70K+ Claude Skills / MCP Servers / Codex Skills。质量评分系统，每 8 小时自动更新。分类覆盖编码/视频/设计/运维等。",
    tags: ["目录", "70K+ Skills", "质量评分", "自动更新"]
  },
  {
    name: "OpenClaw Skills",
    category: "skills",
    stars: "生态",
    repo: "openclaw/skills",
    url: "https://github.com/openclaw/skills",
    pain: "给 AI Agent 安装专业技能",
    desc: "开放 Agent Skills 标准和注册表。Skills 是教 Agent 如何使用工具/API/工作流的 Markdown 文件。覆盖编码、视频、DevOps、数据分析等领域。",
    tags: ["开源", "标准", "注册表", "Markdown"]
  },
  {
    name: "Skills Hub (桌面管理器)",
    category: "skills",
    stars: "1K+",
    repo: "qufei1993/skills-hub",
    url: "https://github.com/qufei1993/skills-hub",
    pain: "管理和同步 Agent Skills 到多个工具",
    desc: "跨平台桌面应用，集中管理 Agent Skills 并一键同步到 Claude Code / Cursor / Copilot 等多个 AI 工具的 Skills 目录。安装一次，处处同步。",
    tags: ["桌面App", "同步", "多工具", "管理"]
  },
  {
    name: "ClawHub / AgentSkill.sh",
    category: "skills",
    stars: "114K+ Skills",
    repo: "agentskill-sh",
    url: "https://agentskill.sh",
    pain: "Claude/Cursor/Copilot 的技能商店",
    desc: "Agent Skills 市场和 CLI 工具，可搜索安装 114K+ 技能。支持一键安装到本地，MCP Server 集成。通过 CLI 命令 `agentskill install` 安装。",
    tags: ["市场", "CLI", "一键安装", "MCP"]
  },
  {
    name: "Awesome OpenClaw Skills",
    category: "skills",
    stars: "策展",
    repo: "VoltAgent/awesome-openclaw-skills",
    url: "https://github.com/VoltAgent/awesome-openclaw-skills",
    pain: "OpenClaw 生态中哪些 Skills 值得装",
    desc: "OpenClaw Skills 精选列表，按类别推荐高质量技能（编码/图像视频/运维/商业等）。帮你从海量 Skills 中筛选真正有用的。",
    tags: ["策展", "分类推荐", "质量筛选"]
  },

  // === 视频编辑 AI 工具 ===
  {
    name: "Runway",
    category: "video",
    stars: "商业",
    repo: "runwayml",
    url: "https://runwayml.com",
    pain: "专业级 AI 视频编辑和生成",
    desc: "Gen-4.5 模型支持文本/图像/视频到视频。AI 遮罩、运动追踪、背景移除、风格迁移。好莱坞级特效在浏览器内完成。创意团队首选。",
    tags: ["商业", "Gen-4.5", "专业级", "特效"]
  },
  {
    name: "Descript",
    category: "video",
    stars: "商业",
    repo: "descript",
    url: "https://descript.com",
    pain: "像编辑文档一样编辑视频",
    desc: "文本式视频编辑器，编辑转录文字即编辑视频。Underlord AI 自动去除填充词/静音。支持屏幕录制、播客编辑、AI 配音。播客/教程创作者必备。",
    tags: ["商业", "文本编辑", "播客", "AI配音"]
  },
  {
    name: "CapCut",
    category: "video",
    stars: "商业/免费",
    repo: "capcut",
    url: "https://capcut.com",
    pain: "快速制作社交媒体短视频",
    desc: "字节跳动出品的免费视频编辑器，AI 自动字幕、智能抠图、节拍对齐、文字转语音。模板丰富，TikTok/Reels 创作者最爱。桌面+移动全平台。",
    tags: ["免费", "短视频", "自动字幕", "模板"]
  },
  {
    name: "OpusClip",
    category: "video",
    stars: "商业",
    repo: "opusclip",
    url: "https://opus.pro",
    pain: "长视频自动切成短视频爆款",
    desc: "AI 自动将长视频(播客/访谈/讲座)切割为多个短视频。智能识别高光时刻，自动加字幕/排版。4 分钟产出 12 个 viral-ready 短片。",
    tags: ["商业", "长转短", "自动剪辑", "字幕"]
  },
  {
    name: "Remotion",
    category: "video",
    stars: "21K+",
    repo: "remotion-dev/remotion",
    url: "https://github.com/remotion-dev/remotion",
    pain: "用 React 代码生成视频",
    desc: "程序化视频制作框架，用 React/TypeScript 编写视频。适合批量生成、数据驱动视频、自动化视频流水线。Agent Skill 生态中视频生成核心。",
    tags: ["开源", "React", "程序化", "批量生成"]
  },
  {
    name: "FFmpeg (AI Skills)",
    category: "video",
    stars: "47K+",
    repo: "FFmpeg/FFmpeg",
    url: "https://github.com/FFmpeg/FFmpeg",
    pain: "命令行视频处理(剪切/转码/合并)",
    desc: "视频处理瑞士军刀，几乎所有视频工具的底层。AI Agent 通过 FFmpeg Skill 可执行精确剪辑/转码/拼接/添加字幕。Agent 视频编辑的基础能力。",
    tags: ["开源", "CLI", "底层工具", "Agent基础"]
  },
  {
    name: "Topaz Video AI",
    category: "video",
    stars: "商业",
    repo: "topaz",
    url: "https://topazlabs.com/topaz-video-ai",
    pain: "视频超分辨率/去噪/补帧",
    desc: "AI 视频增强工具，老视频转 4K、去噪点、60fps 补帧、去抖动。本地 GPU 推理，效果业界顶级。修复老素材/监控画面首选。",
    tags: ["商业", "超分", "补帧", "去噪"]
  },
  {
    name: "Kling AI",
    category: "video",
    stars: "商业",
    repo: "kling",
    url: "https://klingai.com",
    pain: "高质量 AI 视频生成(中国版 Sora)",
    desc: "快手出品的 AI 视频生成工具，文本/图片生成视频。运动控制好、人物一致性高、支持 1080p。免费额度慷慨，国内可用。",
    tags: ["商业", "视频生成", "国内可用", "免费额度"]
  },
  {
    name: "Video-Editing Skill (Claude)",
    category: "skills",
    stars: "Skill",
    repo: "affaan-m/everything-claude-code-skills",
    url: "https://skillsmp.com/skills/affaan-m-everything-claude-code-skills-video-editing-skill-md",
    pain: "让 Claude Code 具备视频编辑能力",
    desc: "Claude Code 视频编辑 Skill，覆盖从原始素材到最终发布的全流程：FFmpeg 剪辑→Remotion 合成→ElevenLabs 配音→Descript/CapCut 精修。",
    tags: ["Skill", "全流程", "Claude Code", "FFmpeg"]
  }
);

// Re-render after adding
renderTools();
