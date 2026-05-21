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
