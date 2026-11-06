# CDM 2027 Website

Official website for **Controllable Data Memorization for Trustworthy AI (CDM 2027)**. Co-located with ACM TRUST 2027, Washington DC, USA.

Website: <https://cdm27.github.io/>

纯 HTML + CSS 静态网站。没有框架、JavaScript、包管理器、外部字体或构建依赖，可以直接编辑和部署到 GitHub Pages。

## 文件与修改位置

| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页：以研究主题为主标题，直接介绍 workshop；附重要日期和联系邮箱 |
| `cfp.html` | Call for Papers：征稿主题、重要日期、出版声明和投稿页入口 |
| `submission.html` | Paper Submission：投稿入口、论文要求、评审流程和投稿咨询 |
| `organization.html` | Committees：General Chairs、Web and Publicity Chair、Program Committee |
| `program.html` | Technical Program：当前为 To be announced，确认后再加入具体安排 |
| `venue.html` | Venue：会议地点、住宿交通和注册参会信息 |
| `assets/style.css` | 所有页面共用的样式、配色和手机布局 |
| `assets/favicon.svg` | 浏览器标签页上的 CDM 图标 |
| `assets/washington-dc.jpg` | 首页标题区背景照片 |
| `.nojekyll` | 让 GitHub Pages 直接发布静态文件 |

用文本编辑器打开对应 HTML，搜索需要修改的英文，直接替换文字即可。常见更新位置留有 HTML 注释。

- **日期**：同步修改 `index.html` 与 `cfp.html`，以及首页横幅和 `venue.html` 中的日期和地点。当前投稿日期为 **December 17, 2026**，录用通知日期为 **January 15, 2027**。修改 `<time>` 标签时也更新 `datetime` 属性。2 月 1 日是组织者提交 workshop summary 的终稿时间，不能用作作者论文终稿截止日期。
- **首页背景**：替换 `assets/washington-dc.jpg` 即可；裁切位置和深色遮罩在 `assets/style.css` 的 `.hero` 中调整。图片随仓库发布，无需外部图片服务。
- **投稿**：在 `submission.html` 的 Submission Portal 中加入确认后的 CDM 投稿链接，在 Manuscript Requirements 中补充页数、模板和匿名政策。不要将主会投稿系统地址或 9 页规则直接当作 workshop 要求。首页和 CFP 均链接到该页面。
- **委员会**：在 `organization.html` 编辑 `people-list`，每个 `<div>` 是一人。可以给姓名添加已核实的个人主页链接。
- **日程**：在 `program.html` 的 `main` 区域替换 To be announced。按实际收稿及邀请情况填写，不必沿用 Proposal 的具体场次和时长；正式安排需注明当地时区。
- **会场**：在 `venue.html` 补充确认后的具体会场、会议室、酒店、交通及注册信息。
- **联系邮箱**：网站统一使用 `cdm27.tpc@gmail.com`。更换时在六个 HTML 文件中全局替换，保留链接的 `mailto:` 前缀。
- **颜色**：修改 `assets/style.css` 顶部 `:root` 内的颜色变量即可。
- **导航**：六个页面的导航是普通 HTML；增加或重命名页面时同步修改六处。`aria-current="page"` 只放在当前页面的链接上。为保留旧链接，Committees 和 Technical Program 仍使用 `organization.html`、`program.html`。
- **样式缓存**：当前六页共用 `assets/style.css?v=20261107`。修改 CSS 后可同步更新版本参数，帮助浏览器获取新样式。

添加人员示例：

```html
<div>
  <dt><a href="https://example.edu/">Name</a></dt>
  <dd>University, Country</dd>
</div>
```

添加投稿链接示例（用实际投稿地址替换示例 URL）：

```html
<a href="https://example.com/submission">Submit a paper</a>
```

使用相对路径，例如 `assets/style.css` 或 `program.html`，以便网站在本地和 GitHub Pages 上都能正常打开。

## 本地预览

可以直接双击 `index.html`，然后点击导航查看其他页面。

也可以在仓库目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

浏览器访问 <http://127.0.0.1:8000/>。修改后刷新页面即可。终端按 Ctrl+C 停止服务。

## GitHub Pages 发布

仓库 **Settings → Pages → Build and deployment**：

- Source：**Deploy from a branch**
- Branch：**main**
- Folder：**/(root)**

保存后，推送到 `main` 的内容将自动部署。无需自己配置工作流。

日常更新前，先确认没有尚未保存或提交的本地修改，再运行：

```bash
git pull --ff-only
```

修改并本地检查后：

```bash
git add index.html cfp.html submission.html organization.html program.html venue.html assets README.md .nojekyll .gitignore
git commit -m "Update CDM 2027 website"
git push origin main
```

在 GitHub 的 **Actions** 页面查看部署结果，成功后访问网站。也可以直接在 GitHub 网页编辑单个 HTML 并提交，触发同样的发布流程。

## 当前内容与待确认事项

学术介绍、征稿主题、组织者信息、活动形式及出版声明来自本项目的 workshop proposal。提案文件没有放入网站仓库。首页集中介绍 workshop，CFP 列出征稿主题、日期和出版声明，投稿细节单独放在 Paper Submission。

2026-11-05 根据 [TRUST 官方 workshop timeline](https://eigtrust.acm.org/trust2027/call-for-workshop-proposals/) 更新：

| 事项 | 官方时间 | 页面处理 |
| --- | --- | --- |
| Workshop paper submission | December 12–31, 2026 | CDM 选定 December 17, 2026 |
| Workshop paper notification | January 15–31, 2027 | CDM 选定最早的 January 15, 2027 |
| Camera-ready workshop summary | February 1, 2027 | 组织者提交 summary，非作者论文终稿 |
| Program and materials available | February 5, 2027 | 首页与 CFP |
| ACM TRUST 2027 | March 7–9, 2027 | 会议日期；CDM 具体日期仍待确认 |

以下信息尚未在 Proposal 中确定，因此网站使用 TBA 或明确的待公布说明；上线或发出正式 CFP 前按会议最终要求补齐：

- CDM 具体日期和会议室（会议地点 Washington DC 和官方链接已补充）。
- 投稿截止时区及作者论文 camera-ready 日期。
- 投稿系统链接、论文类别、页数、格式和匿名政策。
- 最终出版政策及 proceedings 信息。
- 确认的 Program Committee、邀请嘉宾、个人主页链接。
- 正式日程、录用论文和注册信息。

Workshop 邮箱统一使用创建组织时指定的 `cdm27.tpc@gmail.com`，不再单列 primary contact。

## 2026-11-06 会议决议落实

已在网页落实：

- 导航改为 Home / Call for Papers / Paper Submission / Committees / Technical Program / Venue。
- 简化 CFP 引导句，保留完整 Topics of Interest；投稿说明移到独立页面。
- 移除具体暂定日程与时长，Technical Program 先显示 To be announced。
- 六位 Workshop Organizers 改称 General Chairs；Congwei Zhang 改称 Web and Publicity Chair。
- 移除 Primary contact 标记和单列的个人邮箱，统一指向公共邮箱。
- 清理 CFP 中孤立的 2 月 1 日 summary 截止解释。

后续跟进（不作为已确认内容发布）：

| 事项 | 跟进 |
| --- | --- |
| Workshop 页数、模板、匿名规则与投稿入口 | 陶又铭向主会 chairs 确认后更新 Paper Submission |
| Best Paper Award 数量和其他奖项 | 待陶又铭确认；如最终有 poster，再考虑 Best Poster Award |
| 公共邮箱自动转发 | 另行配置转发给陶又铭；本次网页修改不涉及邮箱设置 |
| GitHub 协作 | 邀请陶又铭加入现有仓库并接受邀请；需要其 GitHub 账号 |
| Keynote | 双方寻找候选人；暂考虑两位、每位约 30 分钟，可视收稿情况调整 |

修改后按上面的步骤 commit 和 push，是否已经发布请以 GitHub Pages 的实际部署状态为准。

## 背景照片来源

首页使用 Duane Lempke 拍摄的华盛顿 DC National Mall 实景照片，来自 [Wikimedia Commons: NationalMall.jpg](https://commons.wikimedia.org/wiki/File:NationalMall.jpg)，采用 [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) 许可。原图保存在 `assets/washington-dc.jpg`；页面仅使用 CSS 裁切和深色遮罩。
