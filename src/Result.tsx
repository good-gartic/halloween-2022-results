import { CSSProperties, FC } from "react";
import { AbsoluteFill, Easing, Img, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";
import { Score } from "./types";
import styled from "@emotion/styled";

export interface ResultProps {
  place: number,
  score: Score
}

const Items: FC<{ seed: string, items: Array<string> }> = ({ seed, items }) => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ opacity: 0.25 }}>
      {
        items.map((emoji, i) => {
          const base = `${seed}${i}`;
          const size = (random(base + "size") * 30 + 20) * Math.max(1, 4 - Math.log10(items.length));

          const left = (random(base + "~y") * (width - size));
          const top = (random(base + "~x") * (height - size));

          const style: CSSProperties = {
            left: left + "px",
            top: top + "px",
            position: "absolute",
            fontSize: size + "px",
            transform: `rotate(${random(base + "rotate") * 20 - 10}deg)`,
            zIndex: Math.floor(size),
          };

          return <div key={i} style={style}>{emoji}</div>;
        })
      }
    </AbsoluteFill>
  )
};

const Place = styled.div`
  font-family: 'JetBrains Mono';
  font-size: 60px;
  font-weight: bold;
  color: #ffaa00;
`;

const Points = styled.div`
  font-family: 'JetBrains Mono';
  font-size: 100px;
  font-weight: bold;
  color: #ffffff;
`;

const Member = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Username = styled.div`
  color: #ffffff;
  font-size: 60px;
  font-weight: bold;
  font-family: 'JetBrains Mono';
  margin-left: 50px;
`;

const User: FC<{ score: Score, place: number }> = ({ score, place }) => {
  const frame = useCurrentFrame();
  const points = interpolate(frame, [0, 10, 80], [0, 0, score.points], { extrapolateRight: "clamp", easing: Easing.out(Easing.ease) });

  return (
    <AbsoluteFill style={{ display: "flex", flexFlow: "column nowrap", justifyContent: "center", alignItems: "center" }}>
      <Place>#{place}</Place>
      <Points>{Math.floor(points)} point{Math.floor(points) === 1 ? "" : "s"}</Points>

      <Member>
        <Img src={score.avatar} style={{ width: 150, height: 150, borderRadius: "50%" }}></Img>
        <Username>{score.username}</Username>
      </Member>
    </AbsoluteFill>
  )
};

export const Result: FC<ResultProps> = ({ place, score }: ResultProps) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 90, 100, 120], [0, 1, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ opacity: opacity }}>
      <Items seed={place.toString()} items={score.items} />
      <User score={score} place={place} />
    </AbsoluteFill>
  );
};