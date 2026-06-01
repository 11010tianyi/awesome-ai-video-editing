import type { VideoData } from "./src/MainVideo";

// 示例数据 1：GitHub Star 增长
export const dataGitHub: VideoData = {
  title: "GitHub Star 增长趋势",
  data: [
    { label: "Jan", value: 120, color: "#e94560" },
    { label: "Feb", value: 280, color: "#0f3460" },
    { label: "Mar", value: 450, color: "#533483" },
    { label: "Apr", value: 620, color: "#e94560" },
    { label: "May", value: 890, color: "#0f3460" },
  ],
};

// 示例数据 2：用户增长
export const dataUsers: VideoData = {
  title: "月活用户增长",
  data: [
    { label: "Q1", value: 1500, color: "#00b4d8" },
    { label: "Q2", value: 3200, color: "#0077b6" },
    { label: "Q3", value: 5800, color: "#023e8a" },
    { label: "Q4", value: 9100, color: "#0096c7" },
  ],
};

// 示例数据 3：销售数据
export const dataSales: VideoData = {
  title: "产品销售额 (万元)",
  data: [
    { label: "产品A", value: 340, color: "#f72585" },
    { label: "产品B", value: 520, color: "#7209b7" },
    { label: "产品C", value: 280, color: "#3a0ca3" },
    { label: "产品D", value: 610, color: "#4361ee" },
    { label: "产品E", value: 450, color: "#4cc9f0" },
  ],
};
