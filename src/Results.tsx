import { FC } from "react";
import { AbsoluteFill, Sequence } from "remotion";

export interface ResultsProps {

}

export const Results: FC<ResultsProps> = ({ }: ResultsProps) => {
  return (
    <AbsoluteFill style={{ background: "#222222" }}>
      <Sequence from={0}>
        <h1>Good Gartic's Halloween</h1>
      </Sequence>
    </AbsoluteFill>
  )
};