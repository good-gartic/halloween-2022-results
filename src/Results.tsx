import { FC } from "react";
import { AbsoluteFill, Audio, Sequence, Series } from "remotion";
import { Result } from "./Result";
import { Score } from "./types";
import music from "./assets/music.mp3";

export interface ResultsProps {
  results: Array<Score>
}

export const Results: FC<ResultsProps> = ({ results }: ResultsProps) => {
  const sorted = results.sort((a, b) => a.points - b.points);

  return (
    <>
      <AbsoluteFill style={{ background: "#222222" }}>
        <Sequence>
          <Series>
            {
              sorted.map((score, i) => (
                <Series.Sequence key={i} durationInFrames={150}>
                  <Result score={score} place={sorted.length - i} />
                </Series.Sequence>
              ))
            }
          </Series>
        </Sequence>
      </AbsoluteFill>
      <Audio src={music} startFrom={100} />
    </>
  )
};