import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
  Series,
} from "remotion";

// ==================== 场景 1：标题 ====================
const TitleScene: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 20], [-80, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          color: "#ffffff",
          fontSize: 80,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        {title}
      </div>
      <div
        style={{
          opacity: interpolate(frame, [15, 35], [0, 0.6], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: "#e94560",
          fontSize: 28,
          fontFamily: "sans-serif",
          marginTop: 20,
        }}
      >
        Powered by Remotion
      </div>
    </AbsoluteFill>
  );
};

// ==================== 场景 2：数据动画 ====================
const DataScene: React.FC<{
  data: { label: string; value: number; color: string }[];
}> = ({ data }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const barMaxHeight = height * 0.5;
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#16213e",
        padding: 80,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          fontSize: 48,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          marginBottom: 60,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        数据增长
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          height: barMaxHeight + 80,
        }}
      >
        {data.map((item, index) => {
          const barDelay = index * 8;
          const barHeight = interpolate(
            frame,
            [barDelay, barDelay + 30],
            [0, (item.value / maxValue) * barMaxHeight],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          const numberValue = interpolate(
            frame,
            [barDelay, barDelay + 30],
            [0, item.value],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  fontSize: 24,
                  fontFamily: "sans-serif",
                  opacity: interpolate(
                    frame,
                    [barDelay + 20, barDelay + 30],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  ),
                }}
              >
                {Math.round(numberValue)}
              </div>
              <div
                style={{
                  width: 120,
                  height: barHeight,
                  backgroundColor: item.color,
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <div
                style={{
                  color: "#aaaaaa",
                  fontSize: 20,
                  fontFamily: "sans-serif",
                }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ==================== 场景 3：结尾 ====================
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 20], [1.2, 1], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [50, 60], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f3460",
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#e94560",
            fontSize: 72,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          今日数据报告
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 32,
            fontFamily: "sans-serif",
            marginTop: 20,
            opacity: interpolate(frame, [20, 35], [0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          用 Remotion + React 构建
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==================== 主视频 ====================
export type VideoData = {
  title: string;
  data: { label: string; value: number; color: string }[];
};

export const MainVideo: React.FC<VideoData> = ({ title, data }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a2e" }}>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <TitleScene title={title} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <DataScene data={data} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <OutroScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
