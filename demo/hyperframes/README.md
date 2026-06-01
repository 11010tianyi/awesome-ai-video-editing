# HyperFrames Demo

> 基于 HTML + GSAP + Puppeteer 的视频生成方案

## 快速开始

```bash
# 安装依赖
npm install

# 预览
npx hyperframes preview

# 渲染 MP4
npx hyperframes render
```

## 项目结构

```
hyperframes/
├── src/
│   ├── index.html          # 主合成（动画视频）
│   ├── assets/
│   │   └── fonts/          # 字体文件
│   └── ...
├── 最小知识集学习手册.md
├── package.json
└── README.md
```

## Composition 说明

`src/index.html` 是一个数据可视化视频合成，包含：

- 标题动画：文字淡入 + 位移
- 数据展示：柱状图 + 动画
- 结尾：Logo + Slogan

## 渲染设置

- **分辨率**: 1920×1080
- **帧率**: 30fps
- **时长**: 10 秒
- **输出**: MP4

## Hywen 的 7 步 Skill

参考 `最小知识集学习手册.md` 中的 Hywen 7 步 Skill 详解。

## 相关链接

- [HyperFrames 官网](https://hyperframes.com)
- [GitHub](https://github.com/heygen-com/hyperframes)
- [GSAP](https://greensock.com/gsap/)
