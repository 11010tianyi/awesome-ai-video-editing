# Remotion 程序化视频 Demo

> 基于 React/TypeScript 的数据驱动视频模板，使用 [Remotion](https://www.remotion.dev/) 构建。

## 快速开始

### 安装依赖

```bash
npm install
```

### 预览视频

```bash
npm run preview
```

浏览器会打开 Remotion Studio，实时预览视频效果。

### 渲染单个视频

```bash
npm run render
```

输出 `output.mp4`（1080p, 30fps）。

### 批量渲染（3 个示例数据集）

```bash
npm run render-all
```

输出：
- `output-github-stars.mp4` — GitHub Star 增长趋势
- `output-user-growth.mp4` — 月活用户增长
- `output-sales.mp4` — 产品销售额

## 项目结构

```
demo/remotion/
├── src/
│   ├── index.ts          # Remotion 入口
│   ├── Root.tsx           # Composition 注册
│   ├── MainVideo.tsx      # 主视频组件（3 个场景）
│   └── data.ts            # 示例数据集
├── render-all.ts          # 批量渲染脚本
├── package.json
├── tsconfig.json
└── remotion.config.ts
```

## 自定义数据

编辑 `src/data.ts`，修改或添加数据集：

```typescript
export const myData: VideoData = {
  title: "我的数据报告",
  data: [
    { label: "类别A", value: 100, color: "#e94560" },
    { label: "类别B", value: 250, color: "#0f3460" },
  ],
};
```

然后在 `render-all.ts` 中添加配置即可。

## 学习手册

详见 [最小知识集学习手册.md](./最小知识集学习手册.md)。
