import { FC } from "react";
import { AbsoluteFill, Img, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";
import { Score } from "./types";

export interface ResultProps {
  place: number,
  score: Score
}

const Items: FC<{ seed: string, items: Array<string> }> = ({ seed, items }) => {
  const { width, height } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <div style={{ fontSize: 30, color: "#ffffff" }}>{frame}</div>
      {
        items.map((emoji, i) => {
          const base = `${seed}${i}`;
          const size = random(base + "size") * 30 + 20;
          const offset = ((random(seed + i.toString() + "y") * height) + (frame * size * 0.25) * 0.25) % height;
          const opacity = interpolate(offset, [0, height / 4, height / 2, height / 4 * 3, height], [0, 0.1, 0.5, 0.1, 0]);

          return (
            <div key={i}
              style={{
                position: "absolute",
                fontSize: size + "px",
                opacity: opacity,
                transform: `rotate(${random(base + "rotate") * 20 - 10}deg)`,
                left: (random(base + "x") * width) + "px",
                top: offset + "px"
              }}
            >{emoji}</div>
          );
        })
      }
    </AbsoluteFill>
  )
};

const User: FC<{ score: Score, place: number }> = ({ score, place }) => {
  const frame = useCurrentFrame();
  const points = interpolate(frame, [0, 25], [0, score.points], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ display: "flex", flexFlow: "column nowrap", justifyContent: "center", alignItems: "center" }}>
      <div style={{ fontSize: 30, color: "#ffaa00" }}>#{place}</div>
      <div style={{ fontSize: 50, color: "#ffffff" }}>{Math.floor(points)} points</div>

      <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
        <Img src={score.avatar} style={{ width: 150, height: 150, borderRadius: "50%" }}></Img>
        <div style={{ fontSize: 50, color: "#ffffff", marginLeft: 30 }}>{score.username}</div>
      </div>
    </AbsoluteFill>
  )
};

export const Result: FC<ResultProps> = ({ place, score }: ResultProps) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 90, 100], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ opacity: opacity }}>
      <Items seed={place.toString()} items={score.items} />
      <User score={score} place={place} />
    </AbsoluteFill>
  );
};