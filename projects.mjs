// Only reviewed public descriptions and authorized de-identified summaries.
export const projects = [
  {
    "id": "home-ledger",
    "name": "买房小账本",
    "kind": "tool",
    "status": "打开即用",
    "tag": "买房算账",
    "pain": "首付怎么掏、月供扛不扛得住？",
    "repo": "family-freedom-planner",
    "url": "https://bxfzzti.github.io/family-freedom-planner/",
    "symbol": "⌂",
    "tone": "blue",
    "headline": "首付多掏还是手里留钱？\n算完再决定。",
    "summary": "输入房价、首付和贷款利率，直接算出每月还多少、买完手里还剩多少现金，帮你对比不同方案的真实压力。",
    "features": [
      [
        "房贷一笔算清",
        "支持商贷、公积金和组合贷，等额本息与等额本金直接对比。"
      ],
      [
        "不同首付同屏比",
        "一眼看清多付首付省了多少利息、手里又少留了多少备用金。"
      ],
      [
        "提前算好抗风险能力",
        "模拟未来 36 个月收入变化，看看万一降薪现金流撑不撑得住。"
      ]
    ],
    "steps": [
      "点右侧按钮直接打开网页，把里面的示例数字换成你的真实情况。",
      "填好贷款方式、利率以及装修/税费等额外开支。",
      "对比几组首付方案，觉得合适可以直接导出测算结果留底。"
    ],
    "boundary": "结果按你输入的条件测算，仅供家庭决策参考；具体利率、税费和贷款额度请以银行与当地政策为准。",
    "privacy": "所有金额仅在你当前浏览器本地计算，不会上传服务器，也不会自动保存。",
    "visual": "<div class='mini-label'>首月还款 · 示例</div><strong class='mini-number'>8,327<small>元</small></strong><div class='mini-stats'><span>首付 <b>100 万</b></span><span>买后现金 <b>24 万</b></span></div><div class='bars'><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>"
  },
  {
    "id": "team-lottery",
    "name": "团队抽签",
    "kind": "tool",
    "status": "打开即用",
    "tag": "开会抽签",
    "pain": "开会谁先讲、任务怎么分？直接抽。",
    "repo": "team-lottery-web",
    "url": "https://bxfzzti.github.io/team-lottery-web/",
    "symbol": "✦",
    "tone": "green",
    "headline": "开会发言、分组抽人，\n3 秒公平搞定。",
    "summary": "把名单直接粘贴进去，一键随机抽人、抽小组或排出完整发言顺序。支持现场投屏，抽过的自动跳过不重复。",
    "features": [
      [
        "常见抽法全都有",
        "全员抽、指定小组抽、先抽组再抽人，或者一键排出完整顺序。"
      ],
      [
        "同一轮绝不重复",
        "自动记录已经抽过的人，有人请假可以临时跳过，也能随时重置。"
      ],
      [
        "直接从表格粘名单",
        "支持从 Excel/飞书复制两列名单直接导入，支持投屏大字展示。"
      ]
    ],
    "steps": [
      "点右侧按钮打开网页，手动输入或直接从表格粘贴人员名单。",
      "选好抽取方式（抽人/抽组/排顺序）和每次抽取人数。",
      "点击开始抽签，结果可直接投屏展示或一键复制发群里。"
    ],
    "boundary": "基于浏览器标准加密随机源抽取，保证公平随机。",
    "privacy": "名单和抽签记录只存在你当前浏览器的本地存储中，不上传服务器。",
    "visual": "<div class='mini-label'>公平随机 · 支持投屏</div><div class='lottery-orbs'><b>01</b><b>02</b><b>03</b></div><div class='mini-action'>下一位发言的是？ <span>↗</span></div>"
  },
  {
    "id": "home-network",
    "name": "家庭网络排障",
    "kind": "skill",
    "status": "发给 AI 用",
    "tag": "查网速慢",
    "pain": "千兆宽带跑不满、NAS 和远程桌面卡？",
    "repo": "home-network-troubleshooter-skill",
    "url": "https://github.com/bxfzzti/home-network-troubleshooter-skill",
    "symbol": "◈",
    "tone": "teal",
    "headline": "家里网速慢、总掉帧？\n让 AI 按步骤揪出真病根。",
    "summary": "复制给 AI，它会先查有没有设备在偷跑带宽、有没有买错百兆网线、路由器有没有穿墙粘连，再一步步帮你调快。",
    "features": [
      [
        "不再盲目瞎重启",
        "先查主路由总流量、设备粘连和网线规格，几分钟锁定真正卡在哪一段。"
      ],
      [
        "自带一键测延迟脚本",
        "分段测出本机、子路由、主路由和公网延迟，一眼看穿是宽带问题还是 Wi-Fi 问题。"
      ],
      [
        "避开常见花冤枉钱的坑",
        "避开 4 芯百兆线、盲目开 160MHz 掉速、买错单只三频路由等常见大坑。"
      ]
    ],
    "steps": [
      "点右侧「复制这段话」，直接粘贴发给你的 AI 助手（如 Antigravity / Claude / Codex）。",
      "告诉 AI 你遇到的现象（比如“千兆宽带只有100M”或“NAS传文件很卡”），跟着它排查。",
      "每改一个设置就复测一次，变快保留、变慢回退，安全不踩断网坑。"
    ],
    "prompt": "请安装或读取 https://github.com/bxfzzti/home-network-troubleshooter-skill 的家庭网络排障 Skill（入口为 skills/home-network-troubleshooter/SKILL.md）。请严格按照其中的 5 步排障漏斗，先帮我检查主路由全局状态、本机物理层协商和分段 Ping 延迟，定位出真正的卡顿瓶颈后再给优化建议；不要盲目切换光猫拨号模式导致断网。",
    "boundary": "本页只提供发给 AI 的操作指令，不会远程动你的电脑或路由器。修改光猫拨号或重置子路由前，AI 会先提醒你避免断网。",
    "privacy": "所有检测命令都在你自己的电脑和局域网内执行，不上传任何账号密码或隐私信息。",
    "visual": "<div class='net-hops'><div><span>电脑 → 书房路由</span><b>0.5 ms</b></div><div><span>书房 → 客厅主路由</span><b>4.4 ms</b></div><div class='ok'><span>优化后测速 · 抖动 2ms</span><b>488 Mbps</b></div></div><p class='mini-label'>先定位卡顿段，再对症优化</p>"
  },
  {
    "id": "resume",
    "name": "一页纸简历",
    "kind": "skill",
    "status": "发给 AI 用",
    "tag": "改简历",
    "pain": "工作 5 年以上，简历又长又没重点？",
    "repo": "one-page-resume-editor-skill",
    "url": "https://bxfzzti.github.io/one-page-resume-editor-skill/",
    "symbol": "▤",
    "tone": "sand",
    "headline": "把你的核心经历，\n漂亮地装进一页里。",
    "summary": "复制给 AI，它会先帮你找出简历最致命的 3 个硬伤，再照着目标岗位要求精简改写，只放大你的真实贡献、绝不瞎编。",
    "features": [
      [
        "先挑毛病，再动笔改",
        "不直接套模板重写，而是先指出你简历里定位模糊、重点不突出的 3 个关键问题。"
      ],
      [
        "照着岗位 JD 精准定制",
        "投不同岗位时，用同一份真实经历自动调整侧重点，并提醒你和岗位的真实差距。"
      ],
      [
        "严守真实底线",
        "绝不篡改你的数据、公司名和职级，不把团队协作吹成个人主导，面试不怕被问穿。"
      ]
    ],
    "steps": [
      "点右侧「复制这段话」，发给你的 AI 助手。",
      "把你现有的简历和想投的岗位介绍（JD）发给 AI，先看它的诊断报告。",
      "确认修改方向没问题后，再让 AI 帮你精简改写并导出 Word 或 PDF。"
    ],
    "prompt": "请安装或加载 https://github.com/bxfzzti/one-page-resume-editor-skill 的一页纸简历 Skill，入口是根目录 SKILL.md。先说明是否持久安装。请先诊断我的简历，列出最重要的三个问题和待补信息，暂时不要重写；不要编造经历、数字或个人贡献。",
    "boundary": "本页不接收你的简历文件；如果经历极多硬塞一页会丢失核心优势，AI 会建议保留两页。",
    "privacy": "你的简历只会在你自己选择的 AI 工具里处理；发送前可以自行隐藏姓名、手机号等敏感信息。",
    "visual": "<div class='resume-paper'><b>一页搞定核心经历</b><span>重点突出 · 拒绝瞎编</span><hr><h4>核心工作成果</h4><p class='skeleton'></p><p class='skeleton short'></p><h4>岗位匹配亮点</h4><p class='skeleton'></p><p class='skeleton short'></p></div>"
  },
  {
    "id": "content",
    "name": "内容创作流",
    "kind": "skill",
    "status": "发给 AI 用",
    "tag": "写文章找选题",
    "pain": "每天不知道写什么？写完又像水文？",
    "repo": "content-pipeline",
    "url": "https://bxfzzti.github.io/content-pipeline/",
    "symbol": "↗",
    "tone": "peach",
    "headline": "从不知道写什么，\n到发出一篇有干货的文章。",
    "summary": "复制给 AI，帮你把找素材、挑选题、定角度、写正文和最后质检串成一条线，每一步都先给你把关，不再写出空洞 AI 味。",
    "features": [
      [
        "先帮你挑出值得写的题",
        "把热点和真实体验分开整理，每个候选题都带原文来源，不凭空编造。"
      ],
      [
        "动笔前先对齐角度和风格",
        "先跟你确认写什么、怎么切入、用什么语气，满意了再写正文，避免整篇返工。"
      ],
      [
        "写完自动做质量体检",
        "检查有没有事实漏洞和空话套话，还可以按不同平台习惯改写成对应版本。"
      ]
    ],
    "steps": [
      "点右侧「复制这段话」，发给你的 AI 助手。",
      "告诉 AI 你今天想写的领域或素材，先让它列出几个候选题和出处。",
      "挑中满意的选题和角度后，再让 AI 推进正文写作与检查。"
    ],
    "prompt": "请读取 https://github.com/bxfzzti/content-pipeline 的 article-pipeline/SKILL.md 及当前阶段引用。先检查可用的数据源和依赖；帮我整理今天值得写的选题，保留来源、数据时间和不可用项，等待我确认，不要直接写稿或发布。",
    "boundary": "需要配合你的 AI 助手和可用数据源运行，不是点开网页就能全自动发文的工具。",
    "privacy": "公开页面不连接任何个人社交账号，所有发布动作都由你自己最终确认。",
    "visual": "<div class='flow-board'><div>找素材 <span>→</span> 挑选题</div><div>定角度 <span>→</span> 写正文</div><div>查漏洞 <span>→</span> 改平台版</div></div><p class='mini-label'>先对齐方向，再动笔写</p>"
  },
  {
    "id": "search",
    "name": "搜索路由",
    "kind": "skill",
    "status": "发给 AI 用",
    "tag": "让AI查资料更准",
    "pain": "AI 查资料老是瞎搜、网页打不开？",
    "repo": "web-search-router",
    "url": "https://bxfzzti.github.io/web-search-router/",
    "symbol": "⌕",
    "tone": "lilac",
    "headline": "教 AI 选对搜索工具，\n查资料更快更准。",
    "summary": "复制给 AI，帮它理清什么时候该用搜索引擎、什么时候该直接读网页正文、什么时候该用浏览器，减少瞎编和读取失败。",
    "features": [
      [
        "分清「搜信息」和「读网页」",
        "有明确网址直接抓正文，没网址先精准搜索，不绕弯路。"
      ],
      [
        "按网站类型自动挑工具",
        "普通网页、特定平台和动态页面分别交给最合适的工具去读。"
      ],
      [
        "读不到就直说，绝不瞎编",
        "先检查你电脑里装了哪些工具，遇到需要登录或失败时如实告诉你。"
      ]
    ],
    "steps": [
      "点右侧「复制这段话」，发给你的 AI 助手。",
      "让 AI 先扫描你当前环境里有哪些搜索和网页读取工具，列出需要微调的地方。",
      "找一个公开网页试跑一次，确认能正常读取就配置完成了。"
    ],
    "prompt": "请阅读 https://github.com/bxfzzti/web-search-router 的 SKILL.md，先检查它假设的工具与浏览器端点在我环境中是否存在，列出缺项和需要调整的配置。不要直接执行文档中的安装命令，不绕过访问权限或验证码，不把读取失败说成已读取。",
    "boundary": "不同电脑装的工具不同，AI 会先核验你的本地环境；不会绕过网站登录限制或验证码。",
    "privacy": "只是一套教 AI 选工具的规则文档，不代发请求，也不收集数据。",
    "visual": "<div class='search-pill'>⌕ <span>查资料，该用哪个工具？</span></div><div class='route-lines'><span>搜索引擎</span><span>正文提取</span><span>浏览器读取</span></div><p class='mini-label'>用对工具，减少 AI 瞎编</p>"
  },
  {
    "id": "content-desk",
    "name": "内容驾驶舱",
    "kind": "private",
    "status": "仅思路展示",
    "tag": "私有工作台",
    "pain": "内部自用内容看板（不对外开放）",
    "symbol": "▦",
    "tone": "slate",
    "headline": "让内容进度，\n一眼看得见。",
    "summary": "自用的本地内容管理看板，把候选题、内容方向和写作进度集中在一个界面里查看。",
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
