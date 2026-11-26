# bxfzzti · 个人项目与 AI Skills

把生活和工作中的具体问题，做成用得上的工具与 AI Skills。

访问：https://bxfzzti.github.io/

展示站收录 6 个公开项目（2 个在线工具 + 4 个 AI Skills）与 1 个经授权脱敏介绍的私有项目；按「点开就能用 / 复制给 AI 用 / 私有介绍」清晰分组，Fork 单列并注明上游，空的历史仓库不作为产品展示。

## 本地预览

```bash
node build.mjs
node verify.mjs
python3 -m http.server 8780 --directory dist
```

内容源为 `projects.mjs`，模板在 `build.mjs`，样式和交互在 `assets/`。生成的 `dist/` 由 GitHub Actions 自动部署。无第三方运行依赖、账号、统计追踪或数据上传。

私有项目仅保留概括性文字与独立制作的结构示意，不含真实截图、源码链接、账户、接口或运行数据。
