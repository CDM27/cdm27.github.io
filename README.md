# CDM 2027 Website

Controllable Data Memorization for Trustworthy AI (CDM 2027) 的静态网站项目。

网站地址：<https://cdm27.github.io/>

项目使用 HTML 和 CSS，无需安装依赖或执行构建，可以直接用于 GitHub Pages。请使用 UTF-8 编码编辑文件。

## 页面分工

| 文件 | 内容 |
| --- | --- |
| `index.html` | Workshop 简介、重要日期、征稿主题、投稿及联系入口 |
| `cfp.html` | 完整研究范围、重要日期、投稿入口、出版说明和一页 CFP 下载 |
| `submission.html` | CMT 入口、投稿截止时间、稿件要求、审稿流程及出版与报告说明 |
| `organization.html` | Workshop Organizers、Web and Publicity Chair、Program Committee |
| `program.html` | Technical Program，当前保留待公布状态 |
| `venue.html` | 地点、会议日期、旅行及参会信息 |
| `assets/style.css` | 六页共用的配色、排版、响应式及打印样式 |
| `assets/site.js` | 导航高度同步、CFP 目录的当前位置标记及小屏折叠 |
| `assets/washington-dc.jpg` | 最新版项目提供的 Washington, DC 照片 |
| `assets/CDM-2027-Call-for-Papers.pdf` | CFP 页提供的一页打印版 |

## 已采用的内容约定

- **Workshop Organizers** 下的六位组织者按姓氏字母顺序排列。
- Congwei Zhang 的职务为 **Web and Publicity Chair**。
- 投稿咨询使用 **cdm27.tpc@gmail.com**，工作坊一般咨询由 **Youming Tao（tao@ccs-labs.org）** 处理。首页列出两类联系方式，投稿页展示投稿咨询邮箱。
- Technical Program 显示议程和材料的预计公布日期，以及工作坊日期的待公布状态。
- 首页首屏居中显示工作坊标题和投稿截止时间。简介和下方链接共用居中的内容栏。Important Dates 从投稿截止时间到 ACM TRUST 2027 主会列出五个节点，宽屏横排、窄屏竖排。
- 首页背景保留最新版原图，通过 CSS 放大裁切避开扫描黑边，并调整叠加层。原始照片文件未改动。
- 六页统一引用 CSS 版本 `f814e3cf049d` 和共享脚本版本 `4deeda9ff2f8`。
- 顶部导航滚动时保持可见。浏览器放大或视口宽度不超过 1020px 时，导航收为 Menu 按钮，展开为纵向列表，支持再次点击、Escape 和点击外部收起。
- CFP、Submission 和 Committees 使用页内目录。桌面端目录保持在侧栏，小屏幕上收为导航下方的可展开目录。
- 正文统一为 18px，首页日期为 19px。顶部导航和页内目录为 14px，目录分组为 13px；手机和放大后的布局不缩小正文。
- 组织者、Program Committee 和 Web and Publicity Chair 使用同一人员网格。姓名和单位分行展示，桌面三列，较窄屏幕依次收为两列和一列。
- Technical Program 页面只保留 CDM 自身的日期状态，不展示主会时间。
- 成员单位后标注所在国家或地区，单位的完整名称保留在悬停提示中。
- 委员会按 Workshop Organizers、Program Committee、Web and Publicity Chair 排列。后续 PC 使用相同的 people-list 样式。

PC 名单公布后，使用以下结构填写姓名、单位和主页：

```html
<ul class="people-list" role="list">
  <li>
    <a class="person-name" href="https://example.edu/">Member Name</a>
    <span class="affiliation" title="Full Institution Name">Institution, Country or Region</span>
  </li>
</ul>
```

投稿入口为 <https://cmt3.research.microsoft.com/TRUST2027/>，已同步到首页、CFP 和 Paper Submission 页面。时区参考 [TRUST 2027 Authors Guidelines](https://eigtrust.acm.org/trust2027/authors-guidelines/)。用户已确认 workshop 采用与主会相同的稿件要求：ACM SIGCONF 双栏模板、最多 9 页（含附录，参考文献和 GenAI Usage Disclosure 不计入）、双盲审稿、PDF 投稿。Submission Guidelines 已据此更新，未设置单独的 short、SoK 或 position paper 类别。主会日期不适用于 CDM。

## 需要后续确认的内容

| 项目 | 当前状态 | 更新位置 |
| --- | --- | --- |
| Workshop 具体日期、时段、会场和会议室 | 待公布 | Program 和 Venue |
| Program Committee | 待公布 | `organization.html` |
| Technical Program、讲者和论文名单 | 待公布 | `program.html` |
| 注册、交通、酒店和参会方式 | 待公布 | `venue.html` |

CDM 投稿截止日期为 **December 24, 2026**，录用通知日期为 **January 15, 2027**，论文终稿截止日期为 **January 31, 2027**，议程及材料发布日期为 **February 5, 2027**。投稿截止时间为 **23:59 Pacific Standard Time (PST, UTC−8)**，对应 HTML `datetime="2026-12-24T23:59:00-08:00"`。更新投稿截止时间时请同步首页、CFP、Submission 和一页 PDF。**March 7–9, 2027** 是 ACM TRUST 2027 主会日期，列在首页、CFP、Venue 和一页 PDF 上。

CFP 中的 publication statement 按 proposal 和会议要求保留：录用论文将被考虑收入 proceedings，不应改写成所有录用论文均保证发表。

## 本地查看

可以直接双击 `index.html`，也可以在项目根目录运行：

```bash
python -m http.server 8000 --bind 127.0.0.1
```

访问 <http://127.0.0.1:8000/>。检查桌面、平板和手机宽度下的六页显示，包括导航、标题换行、图片裁切、卡片、表格和链接焦点。

## 维护方式

- 每页独立保存 HTML，共用导航需要在六页同步维护。
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

- All six pages use one shared Arial-based font stack, header, stylesheet version, and script version.
- Body text remains 18px. The header is 64px tall with 14px navigation links. Page-section links are 14px with 13px topic links and a small section label.
- The homepage centers the workshop title and deadline. Submission instructions, the CMT link, and both enquiry contacts sit below the workshop introduction.
- Stable scrollbar space keeps the header aligned when moving between short and long pages.
- Publish all six HTML files and the complete assets directory together. Do not upload only index.html. Each shared-resource change requires updating its version on every page.

- Committee entries use a three-column grid on wide screens, with the affiliation below each name. The chair roster notes that names are listed alphabetically by surname.

- Topics of Interest groups examples under five thematic headings. The page index links to the overall Topics of Interest section.
