# CDM 2027 Website

Controllable Data Memorization for Trustworthy AI (CDM 2027) 的静态网站项目。

网站地址：<https://cdm27.github.io/>

项目使用 HTML 和 CSS，无需安装依赖或执行构建，可以直接用于 GitHub Pages。请使用 UTF-8 编码编辑文件。

## 页面分工

| 文件 | 内容 |
| --- | --- |
| `index.html` | Workshop 简介、objectives、重要日期及联系入口 |
| `cfp.html` | 完整研究范围、重要日期、投稿入口及 publication statement |
| `submission.html` | 投稿指南、关键日期、CMT 入口、稿件要求、审稿流程及出版与报告说明 |
| `organization.html` | 主席、Web and Publicity Chair、Program Committee |
| `program.html` | Technical Program，当前保留待公布状态 |
| `venue.html` | 地点、会议日期、旅行及参会信息 |
| `assets/style.css` | 六页共用的配色、排版、响应式及打印样式 |
| `assets/site.js` | 导航高度同步、CFP 目录的当前位置标记及小屏折叠 |
| `assets/washington-dc.jpg` | 最新版项目提供的 Washington, DC 照片 |

## 已采用的内容约定

- 六位组织者的职务为 **Program and Organisational Chairs**，按姓氏字母顺序排列。
- Chairs and Program Committee members use the same plain list: one name and affiliation per line.
- Congwei Zhang 的职务为 **Web and Publicity Chair**。
- 所有对外咨询统一使用 **cdm27.tpc@gmail.com**，只在首页底部的普通页脚显示。正文不再单独设置 Contact 区块或目录入口，也不另列组织者个人邮箱。
- Technical Program 当前保留待公布状态，不将 proposal 中的暂定议程当作正式日程发布。
- 首页聚焦 CDM 自身的信息，只展示 workshop 日期状态；主会信息通过会议链接访问。
- 首页背景保留最新版原图，通过 CSS 放大裁切避开扫描黑边，并调整叠加层。原始照片文件未改动。
- 六页统一引用 CSS 版本 `e73c64de600d` 和共享脚本版本 `b43b7b5dd278`。
- 顶部导航滚动时保持可见。浏览器放大或视口宽度不超过 1020px 时，导航收为 Menu 按钮，展开为纵向列表，支持再次点击、Escape 和点击外部收起。
- 五个内页均使用页内目录。桌面端目录保持在侧栏，小屏幕上收为导航下方的可展开目录。
- 正文统一为 18px，首页日期为 19–20px。顶部导航和页内目录为 14px，目录分组为 13px；手机和放大后的布局不缩小正文。
- Organising Chairs、Web and Publicity Chair 和 Program Committee 统一使用逐行人员名单，姓名和单位在同一行展示。
- Technical Program 页面只保留 CDM 自身的日期状态，不展示主会时间。
- 页脚仅在首页显示，随正文滚动，使用白底细分隔线，显示 CDM 2027、workshop 名称、所属会议、地点及统一咨询邮箱。手机端压缩重复的长标题；内页不再显示页脚，也不预留页脚空间。共享脚本只同步顶部导航高度。
- 单位显示使用 UMass Boston、MBZUAI、University of Ottawa、TU Berlin、KAUST、RMIT University 和 CityUHK。完整名称保留在悬停提示中。
- 委员会按 Program and Organisational Chairs、Program Committee、Web and Publicity Chair 排列。后续 PC 使用相同的 people-list 样式。

PC 成员卡片沿用以下结构，加入已确认的姓名、单位和主页即可：

```html
<ul class="people-list">
  <li><a class="person-name" href="https://example.edu/">Member Name</a><span class="affiliation" title="Full Institution Name">, Institution</span></li>
</ul>
```
- 首页 About 使用一致字号；Objectives 围绕 Mechanistic Understanding、Principled Methods 和 Rigorous Validation and Fundamental Limits。

投稿入口为 <https://cmt3.research.microsoft.com/TRUST2027/>，已同步到首页、CFP 和 Paper Submission 页面。时区参考 [TRUST 2027 Authors Guidelines](https://eigtrust.acm.org/trust2027/authors-guidelines/)。用户已确认 workshop 采用与主会相同的稿件要求：ACM SIGCONF 双栏模板、最多 9 页（含附录，参考文献和 GenAI Usage Disclosure 不计入）、双盲审稿、PDF 投稿。Submission Guidelines 已据此更新，未设置单独的 short、SoK 或 position paper 类别。主会日期不适用于 CDM。

## 需要后续确认的内容

| 项目 | 当前状态 | 更新位置 |
| --- | --- | --- |
| Paper camera-ready deadline | 待公布 | 首页、CFP 和 Submission |
| Workshop 具体日期、时段、会场和会议室 | 待公布 | 首页 Hero、日期区域、Program 和 Venue |
| Program Committee | 待公布 | `organization.html` |
| Technical Program、讲者和论文名单 | 待公布 | `program.html` |
| 注册、交通、酒店和参会方式 | 待公布 | `venue.html` |

当前保留原项目设定的投稿截止日期 **December 17, 2026** 和通知日期 **January 15, 2027**。投稿截止时间按 TRUST 主会作者指南采用 **23:59 Pacific Standard Time (PST, UTC−8)**，对应 HTML `datetime="2026-12-17T23:59:00-08:00"`。修改时请同步首页、CFP 和 Submission。**February 5, 2027** 是 Program and Materials 日期。会议方的 **February 1** workshop-summary 截止日期属于组织者提交材料的节点，不能代替论文 camera-ready 日期。

CFP 中的 publication statement 按 proposal 和会议要求保留：录用论文将被考虑收入 proceedings，不应改写成所有录用论文均保证发表。

## 本地查看

可以直接双击 `index.html`，也可以在项目根目录运行：

```bash
python -m http.server 8000 --bind 127.0.0.1
```

访问 <http://127.0.0.1:8000/>。检查桌面、平板和手机宽度下的六页显示，包括导航、标题换行、图片裁切、卡片、表格和链接焦点。

## 维护方式

- 每页独立保存 HTML；共用导航需要在六页同步维护，页脚仅维护 `index.html`。
- 每页导航只保留一个 `aria-current="page"`。
- 保留被其他页面引用的 section IDs，例如 CFP 的 `important-dates` 和五类研究主题。
- 普通日期用 `<time datetime="YYYY-MM-DD">` 标记；投稿截止时间使用包含时间及 UTC 偏移的 `datetime`，同时维护时区说明。
- 配色、宽度、间距和响应式断点集中在 `assets/style.css`。
- 更新共享资源后，同步六页的版本参数。只有照片文件变更时才需要更新 CSS 中的照片版本参数。
- 背景图片的裁切和遮罩在 `.hero::before` 与 `.hero::after` 中调整。

## GitHub Pages

在仓库 **Settings → Pages → Build and deployment** 中设置：

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

更新压缩包包含网站文件，不含 `.git` 历史。将文件覆盖到现有 checkout 中，检查 diff 后再 commit 和 push。推送到配置的 Pages 分支会更新线上网站。

## 内容与图片来源

研究范围、objectives、组织者和审稿安排参考用户提供的 **CDM_Proposal___TRUST_2027.pdf**；六页结构及图片采用用户提供的最新版项目。

- [ACM TRUST 2027](https://eigtrust.acm.org/trust2027/)
- [Call for Workshop Proposals](https://eigtrust.acm.org/trust2027/call-for-workshop-proposals/)
- [National Mall, Washington D.C. — NPS](https://npgallery.nps.gov/AssetDetail/d1a228f0-88be-4142-9f99-5264e049cf33)

图片来源记录沿用最新版项目 README：作者 NPS staff，Public domain。文件位于 `assets/washington-dc.jpg`。


## Shared visual system (November 8, 2026)

- All six pages use one shared Arial-based font stack, header, stylesheet version, and script version. Only the homepage includes a footer.
- Body text remains 18px. The header is 64px tall with 14px navigation links. Page-section links are 14px with 13px topic links and a small section label.
- The homepage footer contains the workshop identity, host conference, location, and one enquiry address. It follows the page content and does not reserve or cover viewport space.
- Stable scrollbar space keeps the header aligned when moving between short and long pages.
- Publish all six HTML files and the complete assets directory together. Do not upload only index.html. Each shared-resource change requires updating its version on every page.

- Committee listings use plain text rows without cards or borders. The Committees page title carries one inline note `(alphabetical order)`, which applies to names within every group.

- Topics of Interest is one continuous list. Its page index contains only the parent Topics of Interest link.
