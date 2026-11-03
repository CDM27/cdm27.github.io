# CDM 2027 Website

Official website for **Controllable Data Memorization for Trustworthy AI (CDM 2027)**, in conjunction with ACM TRUST 2027.

Website: <https://cdm27.github.io/>

纯 HTML + CSS 静态网站。没有框架、JavaScript、包管理器、外部字体或构建依赖，可以直接编辑和部署到 GitHub Pages。

## 文件与修改位置

| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页：介绍、研究范围、活动形式、重要日期和联系邮箱 |
| `cfp.html` | 征稿：完整主题、重要日期、投稿要求、评审与出版政策 |
| `organization.html` | Organizers、Web Chair、Program Committee 和联系方式 |
| `program.html` | 暂定日程、邀请报告、录用论文和会场信息 |
| `assets/style.css` | 所有页面共用的样式、配色和手机布局 |
| `assets/favicon.svg` | 浏览器标签页上的 CDM 图标 |
| `.nojekyll` | 让 GitHub Pages 直接发布静态文件 |

用文本编辑器打开对应 HTML，搜索需要修改的英文，直接替换文字即可。常见更新位置留有 HTML 注释。

- **日期**：同步修改 `index.html` 与 `cfp.html`，以及首页横幅中的日期和地点。
- **投稿**：在 `cfp.html` 的 `id="submission"` 区域加入投稿链接、页数、模板和匿名政策；同步修改首页的 Submission 区域。
- **委员会**：在 `organization.html` 编辑 `people-list`，每个 `<div>` 是一人。可以给姓名添加已核实的个人主页链接。
- **日程**：在 `program.html` 修改表格。正式日程确认后，将 Tentative Program 改为 Program，Duration 改为 Time，并注明当地时区。
- **联系邮箱**：当前使用 `cdm27.tpc@gmail.com`。更换时在四个 HTML 文件中全局替换，保留链接的 `mailto:` 前缀。
- **颜色**：修改 `assets/style.css` 顶部 `:root` 内的颜色变量即可。
- **导航**：四个页面的导航是普通 HTML；增加或重命名页面时同步修改四处。`aria-current="page"` 只放在当前页面的链接上。

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
git add index.html cfp.html organization.html program.html assets README.md .nojekyll .gitignore
git commit -m "Update CDM 2027 website"
git push origin main
```

在 GitHub 的 **Actions** 页面查看部署结果，成功后访问网站。也可以直接在 GitHub 网页编辑单个 HTML 并提交，触发同样的发布流程。

## 当前内容与待确认事项

第一版的学术介绍、征稿主题、组织者信息、暂定活动形式及出版声明来自本项目的 workshop proposal。提案文件没有放入网站仓库。

以下信息尚未在 Proposal 中确定，因此网站使用 TBA 或明确的待公布说明；上线或发出正式 CFP 前按会议最终要求补齐：

- Workshop 日期、会场及 ACM TRUST 2027 官方链接。
- 投稿、通知及 camera-ready 日期与时区。
- 投稿系统链接、论文类别、页数、格式和匿名政策。
- 最终出版政策及 proceedings 信息。
- 确认的 Program Committee、邀请嘉宾、个人主页链接。
- 正式日程、录用论文和注册信息。

Workshop 邮箱使用创建组织时指定的 `cdm27.tpc@gmail.com`；Proposal 中的 primary contact 也保留在 Organization 页面。

第一版只写入本地工作区，是否已经发布请以 GitHub Pages 的实际部署状态为准。
