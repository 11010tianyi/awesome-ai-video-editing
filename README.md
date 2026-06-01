# Awesome AI Video Editing

> 从「AI 剪辑提效」到「程序化视频生成」，双轨并行的视频生产力工具全景图谱

---

## 项目简介

本项目面向有 1 年以上剪辑基础的视频创作者和技术开发者，系统整理 **AI 视频剪辑提效** 与 **程序化视频生成** 两大赛道的高相关工具，覆盖：

- **AI 剪辑提效**：自动剪辑、字幕生成、批量处理、画质增强、特效合成等——用 AI 更快地处理「已有素材」
- **程序化视频生成**：用代码、数据、模板从零生成视频帧与成片——让开发者和 AI Agent 直接生产视频
- **AI Coding 适配度**：评估每个工具是否适合被 AI coding 工具（Codex / Cursor / Claude Code 等）二次开发或自动化串联

**目标**：帮助不同背景的用户找到适合自己工作流程的视频生产工具，实现从「手动剪辑」到「智能协作」或「代码驱动」的效率跃升。

---

## 两条赛道的本质区别

| 维度 | AI 剪辑提效 | 程序化视频生成 |
|:---|:---|:---|
| **原料** | 已有视频、图片、音频、素材库 | 代码、数据、JSON、组件、模板、状态机 |
| **操作对象** | 时间轴、片段、字幕、素材 | 帧、组件、场景、动画函数、渲染任务 |
| **典型用户** | 剪辑师、短视频创作者、运营人员 | 开发者、技术内容创作者、自动化团队、设计工程师 |
| **输出逻辑** | 更快剪、修、拼、增强现有素材 | 从零生成、参数化生成、批量生成 |
| **代表工具** | 剪映、AutoCut、FunClip、Descript、Video2X | Remotion、Motion Canvas、Revideo、Hyperframes、Manim |

> **交界地带**：FFmpeg 是两个赛道共同依赖的底层基础设施；MoviePy 处在中间层，既能脚本化剪辑已有素材，也能通过文本、图形、图片序列合成新视频。

---

## 适用人群

| 用户类型 | 典型需求 | 推荐方向 |
|:---|:---|:---|
| **生活 Vlog 创作者** | 快速出片、自动字幕、智能配乐 | 剪映 AI、度加剪辑、AutoCut |
| **短视频矩阵运营** | 批量混剪、模板化生产、多平台适配 | 二剪助手、MoneyPrinterTurbo、随心剪 |
| **知识类/教程博主** | 口播剪辑、字幕生成、内容结构化 | Descript、FunClip、Video-subtitle-master |
| **影视后期爱好者** | 画质增强、风格迁移、特效合成 | Video2X、Runway、DaVinci Resolve AI |
| **开发者/技术创作者** | 数据视频、技术动画、批量生成、Agent 自动化 | Remotion、Motion Canvas、Hyperframes、Manim |
| **自动化/运营团队** | API 批量出片、模板化生产、CI 集成 | Revideo、Shotstack、Creatomate、FFmpeg |

---

## 项目全景图

```
视频生产力工具生态
│
├── AI 剪辑提效（已有素材 → 更快剪/修/拼/增强）
│   ├── 智能剪辑生成（端到端）
│   ├── 剪辑辅助提效（单点增强）
│   ├── 画质增强与修复
│   ├── AI 特效与合成
│   └── 工作流与效率
│
├── 程序化视频生成（代码/数据/模板 → 从零生成视频）
│   ├── 代码生成视频核心框架
│   ├── AI/Agent 辅助生成视频代码
│   ├── 技术动画与可视化
│   ├── 设计侧动效转程序化资产
│   └── API / SaaS 模板化批量生成
│
└── 底层基础设施（两个赛道共用）
    ├── FFmpeg / ffmpeg.wasm
    ├── MoviePy
    └── 编码/转码/封装
```

---

## 精选工具速览

### 一、AI 剪辑提效

#### 智能剪辑生成（端到端）

| 工具 | 类型 | 核心能力 | 平台 | 价格 | 相关性 |
|:---|:---|:---|:---|:---|:---:|
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 开源 | 一键生成高清短视频（53k+ Stars），AI 脚本+配音+字幕+素材全自动 | Win/Mac/Linux | 免费 | 10/10 |
| [剪映/CapCut](https://www.capcut.com/) | 桌面+移动 | 字节出品，AI 图文成片、智能字幕、一键成片，国内短视频生态标配 | 全平台 | 免费 | 10/10 |
| [度加剪辑](https://www.dujiajia.com/) | 桌面+移动 | 百度出品，文字生成视频、智能素材匹配、AI 字幕 | Win/Mac/手机 | 免费 | 9/10 |
| [二剪助手](https://github.com/harry0703/MoneyPrinterTurbo) | 桌面+小程序 | 多视频混剪、批量组合、单视频重组，矩阵运营利器 | Win/Mac/网页 | 免费+付费 | 7.5/10 |
| [随心剪](https://www.suixinjian.com/) | 桌面 | 批量剪辑、AI 文案、智能分镜，商业化剪辑工具 | Win/Mac | 付费 | 7.5/10 |

#### 剪辑辅助提效（单点增强）

| 工具 | 类型 | 核心能力 | 平台 | 价格 | 相关性 |
|:---|:---|:---|:---|:---|:---:|
| [AutoCut](https://github.com/mli/autocut) | 开源 | 李沐出品，通过字幕自动剪辑视频，文本编辑即视频编辑 | Win/Mac/Linux | 免费 | 10/10 |
| [FunClip](https://github.com/alibaba-damo-academy/FunClip) | 开源 | 阿里巴巴达摩院开源，语音识别+视频剪辑一体化工具 | Win/Mac/Linux | 免费 | 9.5/10 |
| [Video-subtitle-master](https://github.com/buxuku/video-subtitle-master) | 开源 | 批量字幕生成+AI 翻译，基于 Whisper，GUI 操作便捷 | Win/Mac/Linux | 免费 | 9.5/10 |
| [Descript](https://www.descript.com/) | 桌面+网页 | 文本编辑视频标杆，语音克隆 Overdub，播客/口播剪辑神器 | Win/Mac/网页 | 免费+付费 | 9.5/10 |
| [Video-subtitle-remover](https://github.com/YaoFANGUK/video-subtitle-remover) | 开源 | AI 去除视频硬字幕，无损分辨率处理 | Win/Mac/Linux | 免费 | 8/10 |

#### 画质增强与修复

| 工具 | 类型 | 核心能力 | 平台 | 价格 | 相关性 |
|:---|:---|:---|:---|:---|:---:|
| [Video2X](https://github.com/k4yt3x/video2x) | 开源 | AI 视频超分辨率增强，2024 升级版提速 40%，画质修复首选 | Win/Mac/Linux | 免费 | 9/10 |
| [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) | 桌面 | 专业级免费剪辑软件，NeuralCut AI 剪辑、调色行业标杆，支持 8K/HDR | Win/Mac/Linux | 免费+付费 | 8.5/10 |
| [Topaz Video AI](https://www.topazlabs.com/topaz-video-ai) | 桌面 | 专业级视频增强、去模糊、慢动作补帧 | Win/Mac | 付费 | 7/10 |

#### AI 特效与合成

| 工具 | 类型 | 核心能力 | 平台 | 价格 | 相关性 |
|:---|:---|:---|:---|:---|:---:|
| [FaceFusion](https://github.com/facefusion/facefusion) | 开源 | AI 换脸+人脸增强，效果惊艳，支持图片/视频换脸 | Win/Mac/Linux | 免费 | 9/10 |
| [Roop](https://github.com/s0md3v/roop) | 开源 | 单图换脸工具，操作简单，效果自然 | Win/Mac/Linux | 免费 | 8/10 |
| [Runway Gen-2/3](https://runwayml.com/) | 网页 | AI 视频生成与编辑标杆，文本生成视频、绿幕抠像、视频延长 | 网页 | 付费 | 8.5/10 |
| [Pika Labs](https://pika.art/) | 网页 | 视频生成、风格转换、视频延长，创意特效 | 网页 | 免费+付费 | 8.5/10 |
| [可灵 AI](https://klingai.com/) | 网页+移动 | 快手可灵，国产视频生成强者，图生视频、视频编辑 | 网页/手机 | 免费+付费 | 8/10 |
| [即梦 AI](https://jimeng.jianying.com/) | 网页+移动 | 字节出品，视频生成与编辑，与剪映生态联动 | 网页/手机 | 免费+付费 | 7.5/10 |

#### 工作流与效率工具

| 工具 | 类型 | 核心能力 | 平台 | 价格 | 相关性 |
|:---|:---|:---|:---|:---|:---:|
| [FFmpeg](https://ffmpeg.org/) | 开源 | 视频处理底层工具之王，批量转换/压缩/处理 | 全平台 | 免费 | 7/10 |
| [LosslessCut](https://github.com/mifi/lossless-cut) | 开源 | 无损视频剪切，快速剪辑，保留原始画质 | Win/Mac/Linux | 免费 | 7/10 |
| [HandBrake](https://handbrake.fr/) | 开源 | 视频压缩、格式转换，开源免费 | 全平台 | 免费 | 6.5/10 |

---

### 二、程序化视频生成

#### 代码生成视频核心框架（强烈推荐）

| 工具 | 类型 | 核心能力 | 技术栈 | 相关性 |
|:---|:---|:---|:---|:---:|
| [Remotion](https://github.com/remotion-dev/remotion) | 开源+云渲染 | 用 React 写视频，程序化视频生成最成熟标杆，支持 Lambda 云渲染 | TypeScript, React | 10/10 |
| [Motion Canvas](https://github.com/motion-canvas/motion-canvas) | 开源 | TypeScript + Canvas 动画引擎，适合技术动画、可视化讲解、工程演示 | TypeScript | 10/10 |
| [Revideo](https://github.com/midrender/revideo) | 开源 | 面向自动化与服务端批量渲染的视频代码框架，适合规模化生成 | TypeScript | 9.5/10 |

#### AI/Agent 辅助生成视频代码

| 工具 | 类型 | 核心能力 | 技术栈 | 相关性 |
|:---|:---|:---|:---|:---:|
| [Hyperframes](https://github.com/heygen-com/hyperframes) | 开源+AI 辅助 | 写 HTML、渲染视频，定位 Agent 友好的 AI 视频代码生成框架 | TypeScript, HTML/CSS | 8.5/10 |

#### 技术动画与可视化

| 工具 | 类型 | 核心能力 | 技术栈 | 相关性 |
|:---|:---|:---|:---|:---:|
| [Manim Community](https://github.com/ManimCommunity/manim) | 开源 | Python 数学/技术动画框架，适合公式、图形、算法讲解视频 | Python | 8.5/10 |
| [Blender Python](https://www.blender.org/) | 开源桌面+脚本 | 用 Python 控制 3D 场景、镜头、材质与渲染，适合复杂 3D 程序化视频 | Python, C/C++ | 8/10 |
| [Three.js](https://github.com/mrdoob/three.js) | 开源 | 程序化 3D 场景生成核心生态，可与 Remotion/FFmpeg 组合出片 | JavaScript | 7.5/10 |
| [React Three Fiber](https://github.com/pmndrs/react-three-fiber) | 开源 | React 化 Three.js 场景，适合与 Remotion 组合 | TypeScript, React | 7.5/10 |
| [PixiJS](https://github.com/pixijs/pixijs) | 开源 | 高性能 2D WebGL 渲染器，适合游戏化、粒子、动态图形类视频 | TypeScript, WebGL | 7.5/10 |
| [p5.js](https://github.com/processing/p5.js) | 开源 | 创意编程入门生态，适合生成艺术、音乐可视化、教学类短视频 | JavaScript | 6.5/10 |

#### 设计侧动效转程序化资产

| 工具 | 类型 | 核心能力 | 技术栈 | 相关性 |
|:---|:---|:---|:---|:---:|
| [Rive](https://rive.app/) | 设计工具+运行时 | 交互式矢量动画工具，可导出/录制为视频动效资产 | 设计工具+多端 runtime | 8.5/10 |
| [Lottie / LottieFiles](https://lottiefiles.com/) | 动效格式+SaaS | JSON 动画转 Web/App/视频，轻量程序化内容与模板化动效方案 | JSON 动效 | 8.5/10 |
| [Theatre.js](https://github.com/theatre-js/theatre) | 开源 | Web 端 motion design editor，可给 Three.js/React 场景做关键帧编排 | TypeScript | 8/10 |
| [GSAP](https://github.com/greensock/GSAP) | 开源/商业友好 | Web 动画事实标准之一，可配合截图/录屏/渲染管线生成短视频 | JavaScript | 8/10 |

#### API / SaaS：模板化批量视频生成

| 工具 | 类型 | 核心能力 | 价格 | 相关性 |
|:---|:---|:---|:---|:---:|
| [Shotstack](https://shotstack.io/) | 视频 API | 基于 JSON 时间轴的云端视频编辑与批量渲染 API | 免费额度+付费 | 7/10 |
| [Creatomate](https://creatomate.com/) | 视频 API+模板 | 模板化批量生成视频，适合营销素材、个性化广告、社媒自动化 | 免费试用+付费 | 7/10 |
| [JSON2Video](https://json2video.com/) | 视频 API | 用 JSON 描述场景并生成视频，适合低代码批量出片 | 免费试用+付费 | 7/10 |

#### 底层基础设施

| 工具 | 类型 | 核心能力 | 技术栈 | 相关性 |
|:---|:---|:---|:---|:---:|
| [FFmpeg](https://ffmpeg.org/) | 开源 | 程序化视频生成的底层编码、转码、拼接、抽帧、封装基础设施 | C | 7.5/10 |
| [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) | 开源 | 浏览器端 FFmpeg，适合本地 Web 工具中的轻量视频导出与转码 | C, WebAssembly | 6.5/10 |
| [MoviePy](https://github.com/Zulko/moviepy) | 开源 | Python 视频合成与剪辑库，适合脚本化拼接、字幕、转场与批量生成 | Python | 7.5/10 |
| [Fabric.js](https://github.com/fabricjs/fabric.js) | 开源 | Canvas 对象模型与 SVG/Canvas 转换，适合自研轻量编辑器或模板引擎 | TypeScript, Canvas | 6.5/10 |
| [Konva](https://github.com/konvajs/konva) | 开源 | 2D Canvas 场景图框架，适合搭建可视化视频模板编辑器 | TypeScript, Canvas | 6.5/10 |

---

## AI Coding 适配度

> 衡量工具是否适合被 Codex / Cursor / Claude Code 等 AI coding 工具通过源码、CLI、API、脚本、配置文件进行二次开发、自动化串联或批量任务编排。

### 优先尝试清单

| 优先级 | 工具 | AI Coding 适配度 | 推荐指数 | 为什么适合 AI Coding | 建议切入方式 |
|:---:|:---|:---:|:---:|:---|:---|
| P0 | **FFmpeg** | 10/10 | 9.5/10 | CLI 稳定、参数化能力极强，几乎所有视频自动化流程都能接入 | 先做转码、抽帧、拼接、压缩、字幕烧录脚本 |
| P0 | **Remotion** | 10/10 | 10/10 | React/TypeScript 结构清晰，AI 容易生成组件、动画和数据模板 | 从数据驱动短视频模板、图表视频、产品演示开始 |
| P0 | **Motion Canvas** | 9.5/10 | 9.5/10 | TypeScript 动画语义强，适合 AI 生成技术动画和讲解镜头 | 从架构图、算法过程、课程动画样片开始 |
| P0 | **AutoCut** | 9.5/10 | 9/10 | 字幕驱动剪辑逻辑清晰，适合让 AI 修改剪辑规则和批处理流程 | 改造为「识别 → 文本筛选 → 自动裁剪」流水线 |
| P0 | **MoneyPrinterTurbo** | 9/10 | 9.5/10 | Python 全链路项目，脚本、配音、字幕、素材、渲染模块都可拆解 | 先跑通端到端，再替换文案、素材检索、配音或模板模块 |
| P0 | **Hyperframes** | 10/10 | 8.5/10 | 明确面向 Agent，用 HTML/CSS 描述视频，降低代码生成门槛 | 用 LLM 生成 HTML 视频片段，再验证渲染稳定性 |
| P1 | **Revideo** | 9.5/10 | 9/10 | 服务端/批量渲染定位清楚，适合接入后端任务队列 | 做参数化短视频、批量广告、自动化运营素材 |
| P1 | **Manim** | 9.5/10 | 9/10 | Python API 明确，AI 很适合生成公式、图形和动画脚本 | 做数学、算法、知识科普类解释动画 |
| P1 | **FunClip** | 9/10 | 8.5/10 | ASR + 视频剪辑链路明确，适合接入本地模型和批量任务 | 做知识类/口播视频的自动粗剪与字幕生成 |
| P1 | **Video-subtitle-master** | 8.5/10 | 8/10 | Whisper 字幕与翻译场景明确，适合批量自动化 | 先做批量字幕生成、翻译、SRT/VTT 工作流 |
| P1 | **Video2X** | 8.5/10 | 8/10 | 画质增强任务天然适合队列化与参数调优 | 封装成批量超分、修复、补帧处理节点 |
| P1 | **MoviePy** | 9/10 | 8/10 | Python 脚本化合成简单直接，适合快速拼装 MVP | 做字幕、转场、图片序列、音视频合成原型 |
| P2 | **FaceFusion** | 8/10 | 7/10 | 推理流程可脚本化，但涉及肖像、版权与合规风险 | 仅在授权素材和内部测试场景中验证 |
| P2 | **Lottie/LottieFiles** | 8/10 | 8/10 | JSON 动效适合被 AI 修改颜色、文案、节奏和组合方式 | 用作片头、贴纸、品牌动效、模板组件 |

### 不优先做 AI Coding 深改的强产品

| 工具 | AI Coding 适配度 | 推荐指数 | 更适合的使用方式 |
|:---|:---:|:---:|:---|
| 剪映/CapCut | 4/10 | 9/10 | 直接作为消费级/运营级 AI 剪辑工具使用 |
| Descript | 5/10 | 8.5/10 | 适合口播、播客、文本编辑视频，不适合深度源码改造 |
| Runway / Pika / 可灵 / 即梦 | 4/10 | 8/10 | 作为生成素材或创意特效上游，不作为本地自动化核心 |
| DaVinci Resolve | 5.5/10 | 8/10 | 专业后期与调色强，但 AI coding 改造门槛高 |

### AI Coding 选型优先级（程序化视频生成）

| 目标 | 第一选择 | 备选 | 原因 |
|:---|:---|:---|:---|
| 让 AI 直接写视频代码 | Remotion | Hyperframes | React/HTML 结构最容易被 AI 生成和迭代 |
| 做技术动画 | Motion Canvas | Manim | 动画语义强，镜头和时间控制清晰 |
| 做服务端批量生成 | Revideo | Remotion + 队列系统 | 更贴近后端自动化与批处理 |
| 做数学/算法解释视频 | Manim | Motion Canvas | Python 图形与公式表达稳定 |
| 做最终编码与交付 | FFmpeg | MoviePy | 工业级底层能力，适合封装为自动化节点 |
| 做设计动效资产 | LottieFiles | Rive | 更适合作为模板组件，而不是完整生成框架 |

---

## 按场景选择工具

| 场景 | 推荐工具组合 |
|:---|:---|
| **生活 Vlog 快速出片** | 剪映 AI（图文成片）+ AutoCut（精剪） |
| **短视频矩阵批量生产** | MoneyPrinterTurbo（生成）+ 二剪助手（混剪） |
| **知识类/口播内容** | Descript（文本剪辑）+ Video-subtitle-master（字幕） |
| **影视后期/画质修复** | DaVinci Resolve（剪辑调色）+ Video2X（画质增强） |
| **创意特效/换脸** | FaceFusion/Roop（换脸）+ Runway（特效合成） |
| **React 开发者做数据视频/广告模板** | Remotion + FFmpeg + Lambda/队列渲染 |
| **技术动画、架构演示、算法讲解** | Motion Canvas 或 Manim Community |
| **服务端批量生成短视频** | Revideo / Remotion + 队列系统 + 对象存储 |
| **AI Agent 自动写视频页面并导出** | Hyperframes + LLM + HTML/CSS 模板库 |
| **营销素材模板化批量出片** | Creatomate / Shotstack / JSON2Video |

---

## 学习路径建议

### AI 剪辑提效路线

1. **入门阶段**：深度使用剪映 AI 功能，熟悉 AI 剪辑的基本范式
2. **进阶阶段**：尝试 AutoCut/FunClip，体验字幕驱动剪辑的工作流
3. **批量阶段**：探索 MoneyPrinterTurbo，理解自动化内容生产
4. **专业阶段**：学习 DaVinci Resolve + Video2X，掌握专业级后期流程
5. **定制阶段**：研究开源项目源码，根据需求二次开发

### 程序化视频生成路线

1. **入门阶段**：先试 Remotion，理解「React 组件 = 视频帧」的基本范式
2. **动画阶段**：尝试 Motion Canvas，学习时间轴、插值、镜头、文字和图形动画
3. **批量阶段**：用 JSON/CSV 数据驱动 Remotion 或 Revideo，生成一批参数化视频
4. **AI 阶段**：让 LLM 生成 Remotion/Hyperframes 模板，再人工校验视觉与渲染结果
5. **生产阶段**：接入队列、对象存储、FFmpeg 后处理、云渲染和失败重试

---

## 目录结构

```
awesome-ai-video-editing/
├── README.md                                    # 本文件：项目总览与双轨全景图
├── 相关性资源集/
│   ├── AI剪辑提效_全网高相关性项目清单.md        # AI 剪辑提效详细项目清单（38 个工具）
│   ├── 程序化视频生成_全网高相关性项目清单.md    # 代码/数据驱动视频生成独立分类（25 个工具）
│   ├── AI剪辑提效vs程序化视频生成.md            # 两条赛道的本质区别与选型对比
│   └── AI剪辑提效vs程序化视频生成.png           # 对比可视化图
```

---

## 快速开始

### 新手推荐路径

```
第 1 步：熟悉现有工具
└── 深度使用剪映 AI 功能（图文成片、智能字幕）

第 2 步：单点提效
└── 尝试 AutoCut 或 FunClip 进行字幕驱动剪辑

第 3 步：批量生产
└── 探索 MoneyPrinterTurbo 或二剪助手的自动化能力

第 4 步：画质升级
└── 使用 Video2X 或 DaVinci Resolve 提升成片质量
```

### 进阶探索

- **想深入了解技术原理** → 查看开源项目的 GitHub 仓库
- **需要特定场景解决方案** → 查阅按场景选择工具表格
- **寻找最新工具动态** → 关注「相关性资源集」中的持续更新
- **想让 AI 参与视频开发** → 查看 AI Coding 适配度章节

---

## 贡献指南

欢迎提交 PR 补充新工具、修正信息或分享使用心得！

**提交格式**：
```markdown
### 工具名称
- **链接**：
- **类型**：开源/在线/桌面/移动
- **核心能力**：一句话描述
- **适用场景**：
- **价格**：免费/付费/freemium
- **AI Coding 适配度**：X/10
- **推荐理由**：
```

---

## 免责声明

- 本清单基于公开信息整理，工具功能、价格可能随时变化，请以官方信息为准
- 部分 AI 工具涉及版权、隐私等问题，请遵守当地法律法规使用
- 开源工具使用需遵循各自许可证要求

---

## 联系与交流

- 发现遗漏的好工具？欢迎提交 Issue
- 有使用心得想分享？欢迎提交 PR
- 需要特定场景的建议？欢迎开 Discussion

---

*最后更新：2026 年 6 月*
*整理者：AI 视频剪辑提效工具全景图谱项目*
