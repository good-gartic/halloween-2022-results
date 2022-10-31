import { FC } from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Score } from "./types";

export interface ResultsProps {
  results: Array<Score>
}

export const Results: FC<ResultsProps> = ({ results }: ResultsProps) => {
  return (
    <AbsoluteFill style={{ background: "#222222" }}>
      <Sequence from={0}>
        <h1>Good Gartic's Halloween</h1>
        {JSON.stringify(results)}
      </Sequence>
    </AbsoluteFill>
  )
};