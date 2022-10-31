import { Composition } from 'remotion';
import { Results } from './Results';
import data from "./data.json";

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="results"
				component={Results}
				durationInFrames={data.length * 150 + 230}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{ results: data }}
			/>
		</>
	);
};
