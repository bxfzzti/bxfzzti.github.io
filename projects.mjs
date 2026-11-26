// Only reviewed public descriptions and authorized de-identified summaries.
export const projects = [
  {
    "id": "home-ledger",
    "name": "买房小账本",
    "kind": "tool",
    "status": "在线工具",
    "tag": "生活决策",
    "audience": "准备买房 / 对比首付与月供",
    "repo": "family-freedom-planner",
    "url": "https://bxfzzti.github.io/family-freedom-planner/",
    "symbol": "⌂",
    "tone": "blue",
    "headline": "算清房子，\n也算清生活。",
    "summary": "首付多一点，还是手里多留一点？把月供、买后现金和收入变化放在一起看。",
    "features": [
      [
        "房贷算清楚",
        "商业贷、公积金和组合贷，支持等额本息与等额本金。"
      ],
      [
        "首付一起比较",
        "并列查看不同首付对应的月供、全期利息和剩余现金。"
      ],
      [
        "为变化留余地",
        "用三种收入情景查看未来36个月的现金变化。"
      ]
    ],
    "steps": [
      "打开计算器，把虚构示例替换成自己的数据。",
      "填写实际贷款条件和买后其他支出。",
      "比较首付与现金变化，下载测算摘要。"
    ],
    "boundary": "网页按输入条件计算，不自动决定是否买房。银行审批、利率和当地规则需要另行确认。",
    "privacy": "家庭金额仅在当前浏览器计算，不上传、不自动保存。",
    "visual": "<div class='mini-label'>首月还款 · 虚构示例</div><strong class='mini-number'>8,327<small>元</small></strong><div class='mini-stats'><span>首付 <b>100 万</b></span><span>买后现金 <b>24 万</b></span></div><div class='bars'><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>"
  },
  {
    "id": "team-lottery",
    "name": "团队抽签",
    "kind": "tool",
    "status": "在线工具",
    "tag": "团队协作",
    "audience": "开会抽发言 / 任务分配 / 分组",
    "repo": "team-lottery-web",
    "url": "https://bxfzzti.github.io/team-lottery-web/",
    "symbol": "✦",
    "tone": "green",
    "headline": "下一位，\n交给随机。",
    "summary": "会议发言、任务分配、小组汇报。录入名单，一次抽人、抽组，或排出完整顺序。",
    "features": [
      [
        "五种抽取方式",
        "全员、指定组、抽小组、先组后人，以及完整排序。"
      ],
      [
        "同一轮不重复",
        "保留本轮记录，可暂停缺席成员，也可开启允许重复。"
      ],
      [
        "为现场准备",
        "粘贴两列表格导入名单，下载CSV备份，切换投屏显示。"
      ]
    ],
    "steps": [
      "录入小组和成员，或粘贴表格中的两列名单。",
      "选择抽取方式、人数和是否允许重复。",
      "开始抽签，按需展示结果、复制或生成完整顺序。"
    ],
    "boundary": "使用浏览器Web Crypto随机源。不同模式的抽样单位不同：先抽组再抽人时，各有效小组机会相同。",
    "privacy": "名单和本轮状态保存在当前浏览器localStorage，不上传服务器。清除站点数据会清空记录。",
    "visual": "<div class='mini-label'>让每个人都有机会</div><div class='lottery-orbs'><b>01</b><b>02</b><b>03</b></div><div class='mini-action'>下一位，会是谁？ <span>↗</span></div>"
  },
  {
    "id": "home-network",
    "name": "家庭网络排障",
    "kind": "skill",
    "status": "Agent Skill",
    "tag": "网络排障",
    "audience": "千兆宽带慢 / Mesh粘连 / NAS与远程卡",
    "repo": "home-network-troubleshooter-skill",
    "url": "https://github.com/bxfzzti/home-network-troubleshooter-skill",
    "symbol": "◈",
    "tone": "teal",
    "headline": "千兆宽带跑不满？\n按步骤查出真病根。",
    "summary": "系统排查家庭千兆宽带慢、Mesh 跨房粘连、NAS 传输卡顿与局域网远程掉帧。先定位再调优，不盲目折腾。",
    "features": [
      [
        "先查全局再动手",
        "先看主路由峰值、实时抢带宽设备和跨房粘连，避免盲目调参走弯路。"
      ],
      [
        "分段测延迟定界",
        "用一键脚本逐段测量本机、子路由、主路由与公网延迟，一眼锁死卡顿段。"
      ],
      [
        "避开常见软硬件坑",
        "覆盖4芯百兆线、双频Mesh粘连改无线中继、80MHz vs 160MHz 与代理分流。"
      ]
    ],
    "steps": [
      "复制右侧提示词，发给支持 Skill 的 AI 助手（如 Antigravity / Claude Code / Codex）。",
      "按 AI 引导检查主路由状态、本机网口协商和分段 Ping 延迟。",
      "每次只改一个变量并复测对比，变差立即回退，稳步把网速和抖动调到最佳。"
    ],
    "prompt": "请安装或读取 https://github.com/bxfzzti/home-network-troubleshooter-skill 的家庭网络排障 Skill（入口为 skills/home-network-troubleshooter/SKILL.md）。请严格按照其中的 5 步排障漏斗，先帮我检查主路由全局状态、本机物理层协商和分段 Ping 延迟，定位出真正的卡顿瓶颈后再给优化建议；不要盲目切换光猫拨号模式导致断网。",
    "boundary": "本页提供 Skill 说明与一键提示词，不会远程访问你的路由器或电脑。涉及光猫桥接/PPPoE 切换或解除 Mesh 子节点时，请遵循安全提示避免中途断网。",
    "privacy": "所有诊断命令均在你自己的电脑与局域网内运行；公开仓库已完全脱敏，不含任何真实账号、密码或 IP。",
    "visual": "<div class='net-hops'><div><span>Mac → 子路由</span><b>0.5 ms</b></div><div><span>子路由 → 主路由</span><b>4.4 ms</b></div><div class='ok'><span>外网测速 · 抖动 2ms</span><b>488 Mbps</b></div></div><p class='mini-label'>分段定界，不盲猜。</p>"
  },
  {
    "id": "resume",
    "name": "一页纸简历",
    "kind": "skill",
    "status": "Agent Skill",
    "tag": "求职表达",
    "audience": "5年以上求职者 / 简历诊断与JD定制",
    "repo": "one-page-resume-editor-skill",
    "url": "https://bxfzzti.github.io/one-page-resume-editor-skill/",
    "symbol": "▤",
    "tone": "sand",
    "headline": "把重要的经历，\n写到一页里。",
    "summary": "面向5年以上中高阶求职者。梳理定位、整理经历、按JD定制，让事实和个人贡献更清楚。",
    "features": [
      [
        "先诊断再改写",
        "找出定位、结构、时间线和证据中最值得修改的问题。"
      ],
      [
        "围绕岗位组织",
        "同一份事实底稿可分别适配多个JD，明确真实缺口。"
      ],
      [
        "保留事实边界",
        "不改数字、公司和岗位，不把协作写成主导。"
      ]
    ],
    "steps": [
      "把右侧提示词发给支持 Skill 的 AI 助手，加载根目录 SKILL.md。",
      "提供自己的简历，选择诊断、整理、JD定制或面试检查。",
      "确认内容后，再明确要求生成Word/PDF。"
    ],
    "prompt": "请安装或加载 https://github.com/bxfzzti/one-page-resume-editor-skill 的一页纸简历 Skill，入口是根目录 SKILL.md。先说明是否持久安装。请先诊断我的简历，列出最重要的三个问题和待补信息，暂时不要重写；不要编造经历、数字或个人贡献。",
    "boundary": "本页提供Skill介绍和安装入口，不接收简历、不在线调用模型。仓库web/为开发原型，包含积分和测试支付等历史设计，未在此部署。缺少JD时不能完成岗位匹配；一页会损害内容时应保留两页。",
    "privacy": "简历在你选择的Agent环境中处理；上传前请自行决定是否去除姓名、联系方式和敏感业务信息。",
    "visual": "<div class='resume-paper'><b>你的经历</b><span>定位清楚 · 贡献具体</span><hr><h4>工作经历</h4><p class='skeleton'></p><p class='skeleton short'></p><h4>事实与成果</h4><p class='skeleton'></p><p class='skeleton short'></p></div>"
  },
  {
    "id": "content",
    "name": "内容创作流",
    "kind": "skill",
    "status": "Agent 工作流",
    "tag": "内容创作",
    "audience": "自媒体 / 公众号与经验长文选题写作",
    "repo": "content-pipeline",
    "url": "https://bxfzzti.github.io/content-pipeline/",
    "symbol": "↗",
    "tone": "peach",
    "headline": "从今天写什么，\n到一篇有依据的内容。",
    "summary": "把素材、选题、角度、写作和质检连起来。每一步都有输入、产物和确认点。",
    "features": [
      [
        "先找到值得写的题",
        "热点与产品体验分开整理，保留来源与数据状态。"
      ],
      [
        "把判断放在写作前",
        "代码预筛和模型判断分工，在选题、角度、定调处确认。"
      ],
      [
        "写完也能回看",
        "质检、内容适配、飞书沉淀与可选知识库组成后续链路。"
      ]
    ],
    "steps": [
      "复制右侧提示词发给 AI，读取 article-pipeline/SKILL.md 总入口。",
      "告诉 AI 本次方向，先看候选题及原文来源。",
      "确认选题、角度和定调后，再推进正文与发布。"
    ],
    "prompt": "请读取 https://github.com/bxfzzti/content-pipeline 的 article-pipeline/SKILL.md 及当前阶段引用。先检查可用的数据源和依赖；帮我整理今天值得写的选题，保留来源、数据时间和不可用项，等待我确认，不要直接写稿或发布。",
    "boundary": "这是需Agent与数据源配合的工作流，不是打开网页就能自动出稿的服务。来源可能实时不可用；缓存必须标注。飞书发布和本地知识库需单独配置。",
    "privacy": "公开介绍页不连接任何个人账号。实际流程禁止借用个人小红书登录态，发布前保留确认。",
    "visual": "<div class='flow-board'><div>素材 <span>→</span> 选题</div><div>角度 <span>→</span> 定调</div><div>写作 <span>→</span> 质检</div></div><p class='mini-label'>先判断，再动笔。</p>"
  },
  {
    "id": "search",
    "name": "搜索路由",
    "kind": "skill",
    "status": "环境配置型 Skill",
    "tag": "Agent 工具",
    "audience": "想让 AI 选对搜索与网页抓取工具的人",
    "repo": "web-search-router",
    "url": "https://bxfzzti.github.io/web-search-router/",
    "symbol": "⌕",
    "tone": "lilac",
    "headline": "找到合适的工具，\n再去找答案。",
    "summary": "为Agent整理搜索与网页读取的工具选择规则。根据任务、站点和已有工具决定下一步。",
    "features": [
      [
        "区分搜索与阅读",
        "先判断是在找信息，还是已经有一个要读取的URL。"
      ],
      [
        "按来源选工具",
        "通用搜索、平台工具、正文提取与浏览器分工。"
      ],
      [
        "把环境说清楚",
        "检查工具是否存在、端点是否可用，失败时明确说明。"
      ]
    ],
    "steps": [
      "完整读取根目录SKILL.md，先检查其中的环境假设。",
      "将浏览器端点、工具名称和可用性调整为自己的环境。",
      "用一个公开网页验证路由；需要权限或验证时由用户处理。"
    ],
    "prompt": "请阅读 https://github.com/bxfzzti/web-search-router 的 SKILL.md，先检查它假设的工具与浏览器端点在我环境中是否存在，列出缺项和需要调整的配置。不要直接执行文档中的安装命令，不绕过访问权限或验证码，不把读取失败说成已读取。",
    "boundary": "原始规则包含特定本地端口、工具和历史站点行为，必须按环境核验。它不保证读取所有网页，也不提供绕过访问控制的能力。本介绍页不代用户发起搜索或抓取。",
    "privacy": "只展示工具路由思路；真实调用遵守所用工具的权限与数据规则。",
    "visual": "<div class='search-pill'>⌕ <span>搜索，还是读取网页？</span></div><div class='route-lines'><span>搜索引擎</span><span>正文提取</span><span>平台工具</span></div><p class='mini-label'>把每一步交给合适的工具。</p>"
  },
  {
    "id": "content-desk",
    "name": "内容驾驶舱",
    "kind": "private",
    "status": "私有项目 · 介绍",
    "tag": "内容工作台",
    "audience": "仅展示工作台结构与思路",
    "symbol": "▦",
    "tone": "slate",
    "headline": "让内容进度，\n一眼看得见。",
    "summary": "本地内容工作台，把候选题、内容线和流程进度放在同一个界面中。",
    "features": [
      [
        "集中查看候选",
        "把不同来源的候选题整理到一处，方便浏览与确认。"
      ],
      [
        "看清内容方向",
        "区分热点观点、消费决策与经验沉淀，帮助选择后续流程。"
      ],
      [
        "保留过程记录",
        "将确认动作和运行记录集中呈现，便于回看。"
      ]
    ],
    "steps": [
      "本项目仅展示经过脱敏的功能概述。",
      "不提供公共登录、在线演示或源码下载。",
      "下方图形是结构示意，不包含真实选题或运行数据。"
    ],
    "boundary": "私有本地项目。此页面不公开源码、内部配置、接口、账户信息、运行路径或实际工作内容。",
    "privacy": "展示内容仅为用户授权的概括性介绍；没有私有仓库链接或真实数据截图。",
    "visual": "<div class='desk-board'><div><b>候选</b><i></i><i></i><i></i></div><div><b>确认</b><i></i><i></i></div><div><b>推进</b><i></i></div></div><p class='mini-label'>结构示意 · 不含真实数据</p>"
  }
];
