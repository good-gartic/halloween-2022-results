import { FC } from "react";
import { AbsoluteFill, Sequence, Series } from "remotion";
import { Result } from "./Result";
import { Score } from "./types";

export interface ResultsProps {
  results: Array<Score>
}

export const Results: FC<ResultsProps> = ({ results }: ResultsProps) => {
  const sorted = results.sort((a, b) => a.points - b.points);

  return (
    <AbsoluteFill style={{ background: "#222222" }}>
      <Series>
        <Series.Sequence durationInFrames={100}>
          <h1>Good Gartic's Halloween</h1>
        </Series.Sequence>
        {
          sorted.map((score, i) => (
            <Series.Sequence key={i} durationInFrames={100}>
              <Result score={score} place={sorted.length - i} />
            </Series.Sequence>
          ))
        }
      </Series>
    </AbsoluteFill>
  )
};