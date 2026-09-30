# 物理分享 · 个人站点模板

一个基于 GitHub Pages 的纯静态个人站点模板（HTML + CSS + 原生 JS，无需构建工具）。

## 目录结构

```
physics-site/
├── index.html      # 首页：Hero + 最新分享 + 关注话题
├── posts.html      # 文章列表页
├── about.html      # 关于页
├── assets/
│   ├── style.css   # 样式（含深/浅色主题变量）
│   └── main.js     # 主题切换、移动端菜单、年份
└── README.md
```

## 本地预览

在目录下起一个静态服务器即可：

```bash
python -m http.server 8000
# 打开 http://localhost:8000
```

## 发布到 GitHub Pages

1. 在 GitHub 上新建一个仓库（例如 `physics-site`）
2. 推送本目录的代码到 `main` 分支
3. 进入仓库 **Settings → Pages**
4. **Source** 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`
5. 保存后等待约 1 分钟，访问 `https://<用户名>.github.io/<仓库名>/`

## 换成你自己的内容

- 站点名：三个 HTML 里的 `<title>` 和 `.brand-text`
- 首页文案：`index.html` 的 hero 区块
- 文章卡片 / 列表：替换为真实标题、摘要、日期
- 关于页：`about.html` 的自我介绍和联系方式
- 配色：修改 `assets/style.css` 顶部的 `--accent` 等变量

## 主题

默认是浅色，右上角按钮可切换深浅色，选择会保存在浏览器 localStorage 中。
