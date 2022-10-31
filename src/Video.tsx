import { Composition } from 'remotion';
import { Results } from './Results';
import { Score } from './types';

const data: Array<Score> = [
	{
		avatar: "https://cdn.discordapp.com/avatars/238728915647070209/01ebfa0fecc4720c1f9e621cca93bf03.png",
		username: "Hex",
		points: 69,
		items: "🍭 🕷️ 🍭 🕯️ 🍫 ⚰️ 👻 💀 🌠 🦢 🍫 💣 🌠 😈 🗡️  📜 🍭 🗡️  🎫 🕷️  🤡 🍕 🪲 🤠 🤠 🤠 🔮 🤠 🤠 🤠 🎩 🪳 🪳 🐈 💃 🤠 🐢 🥀 🎩 🔮 🐺 🧦 🤠 🍫 🦗 🪫 😡 🌠 🍭 🤠 🧟 🤠"
			.split(" ")
			.filter(emoji => emoji.trim().length > 0)
	},
	{
		avatar: "https://cdn.discordapp.com/avatars/730621821178871828/42c8b314c0e9b659af9c2b54f6aa6ad9.png",
		username: "Vyeko",
		points: 200,
		items: "🪲 👑 ✨ 🫀 🍫 🪲 🍫  🦄 🦢 🐈 👻 🎃 🪲 🫀 😈 🦢 💀 🎃 💣 🍭 🌠 🍍 🕵️  📜 🎃 🍭 🪔 🪔 ⛓️  🦷 🍍 ⛓️  ✨ 🦢 🍭 🫀 🍬 🐈 💣 💀 🪲 🦇 🐈 ⛓️  ⛓️  🍵 ⚰️ 🎫 🍭 🍍 🍵 🕵️  🕯️  🍬 🍬 🕯️  🍭 ⚰️ 💀 🍫 🍵 🕷️  ⚰️ 🦷 🍍 🍵 ⛓️  🍭 🍫 🕷️  🐈 🗡️  💀 🍫 🌠 👽 🍭 🌠 ⛓️  🍫 🪳 🥀 💀 🕯️  ✨ 🫀 🍵 🍫 🐺 🍹 🕯️  🕯️  🐈 🐈 🍭 🫀 🍍 🦗 ✨ ✨ 🌠 🫀 🦇 🌠 🌠 🍭 🦄 🍭 🤡 🧦 🦢 🪫 🎃 🗡️  🎫 🍬 🍬 🗡️  🗡️  🕵️  🌠 🍕 🍵 💣 💣 💣 🍭 🔮 🍬 🦇 🐈 🕯️  🍹 🍵 🕵️  🤡 👻 💀 🍵 🫀 🧟 🐙 💩 🍭 🪫 🍬 🪲 🕷️  🪳 🍬 🐺 🫀 🫀 🍕 ✨ 🪲 🎫 🔮 🗡️  🦷 🤡 🪱 ⚰️ 🍬 💀 👻 ✨ 🦢 💣 🍹 💣 ✨ 📜 🍕 🦄 🌠 💩 🪔 🍬 🍫 ⚰️ 🎫 💀 🍭 🍬 💀 🍫 🧟 🌠 🦷 🎃 🍵 🍕 🌠 🫀 📜 ⛓️  🫀 🦇 🧟 🥀 🪱 🪱 🪫 🗡️  🕵️  🐺 ⛓️  🌠 👽 🏓 ⛓️  ✨ 🤠 🎃 🍬 👸 🤠 🐈 💣 🎃 💩 😡 🐈 🐙 💩 💩 ♊ 🍵 🍫 🌠 🍫 🤠 🐢 🐈 👻 🎨 🤠 🌠 🪳 🤠 🎨 🎃 🍕 🐈 ♐ 💀 🤠 🍫 🐈 🍍 🦺 👻 🕯️  🐈 🍵 🪱 💀 🍕 🎨 🎨 🦔 💃 🎩 🏓 🕵️  🦷 🪱 🦷 🦇 🌠 🪔 🏓 🐈 👽 🍍 🍹 🧦 🪳 💩 ⛓️  🕵️  💃 🍬 🦔 🎖️ 🎖️ ♋ 🎨 🫀 🪱 🕯️  🐈 🪳 🦗 🐢 🎨 🗡️  🕯️  ✨ 🤠 🌠 🍍 👒 🍹 🎩 🐢 🪫 🦇 🏓 ♐ 🐺 🫀 ✨ 🍭 ✨ 🦄 🌠 🔮 🍭 ♍ ♈ 💩 ♌ 💃 🦄 🕷️  🐺 🤠 🤠 ♌ ♈ ✨ 🦔 🏓 🕷️  🤠 🎫 🪳 🐺 🪫 🍵 🐢 💣 🪱 ⚰️ 🤠 ✨ 🎨 ⛓️  🐈 🤠 🤠 🎫 🧟 🕵️  🪔 🧦 👒 🎫 ♋ 🧟 🤠 🪲 🦇 🦢 🕯️  🍕 🍫 🪱 🦇 🤠 🐈 🦇 🎃 ⛓️  ♉ 🐈 ♌ 🌠 🤡 🎫 🪳 🫀 ♈ 🫀 🤠 🐈 ♏ 🤡 🎖️ 🪳 😈 👒 🧟 🍍 🍬 🧟 ⛓️  📜 🧦 🦷 🦗 🐈 ♒ 🤠 ♒ 🧟 ⛓️  🤡 🐈 👻 🎨 🧟 🍕 🕵️  🐺 ♊ ♋ 🎫 🐙 🪲 🍹 ♋ 🦗 🪫 😡 ♉ 🍹 🪫 🦷 🦇 🔮 🪔 👻 ♎ 🕵️  😈 🐈 🤡 🕯️  🪔 🏓 ♐ ♓ 🤠 💀 🦔 ♈ 🕯️  💩 💩 🤠 🎩 🍕 🎨 🪔 🪫 🦷 🪔 🦢 👸 🔮 👒 🤡 ♒ ♑ 💩 🦗 ✨ 👒 🪱 🎖️ 🤠 🐙 🤠 🤠 🤠 ⚰️ ♌ 🤠 🤠 🦗 🤠 🤠 🤠 🤠 🥀 🤠 🐺 🗡️  ⛓️  ♋ 🪱 🍍 🫀 🍍 😈 🕯️  🤠 📜 🤠 🎨 🪲 🍫 🔮 🤠 ♏ 🎨 🗡️  🌠 🍹 🕷️  👽 ♋ 🤠 👒 🗡️  🍭 🍹 🍕 ♌ 🗡️  🤠 🍹 💀 🍵 🤠 🍹 🤠 ♒ 🔮 🦷 💃 🪔 👻 🤠 ♈ ✨ 🪳 🤠 🐙 🤡 🏓 🪲 🍭 🤡 🏓 ♌ 🤠 🍹 🤠 🎨 🪱 ✨ 🎨 🍵 🫀 🍍 🍹 🐈 🪔 💃 🦇 🦇 🐢 😈 ♊ 🦇 🦢 🪲 🎃 🕯️  🥀 🕯️  🎫 🍫 🪔 🍫 🦄 🪫 📜 🍵 💩 🦔 🪫 👻 🤠 🍬 🧦 🪱 🔮 🕷️  😈 🎩 ♈ ♐ 🦄 🦢 💀 ♎ 🪲 ♉ 🤠 🪳 💀 🤠 🤠 💃 🦺 🦺 🍭 🦇 🍫 🍍 👽 🍬 👽 🐈 💃 ♐ 🎖️ 🦔 🍭 ✨ 🦔 🍕 💀 🧟 ♍ 🦇 🕯️  🏓 ♍ 💣 ♓ ♊ 🪔 🍹 ♓ 🤡 ⚰️ ♎ 😈 ⛓️  🧟 ♓ 🪔 🎃 🍕 ♒ 💣 🎩 🌠 🪱 🪱 👻 🍭 👒 ⛓️  💩 🧦 🍵 🕯️  💣 💀 💣 🦔 ✨ 🦄 🪲 🏓 🎃 🦢 ✨ 🍵 🍫 🫀 🪲 🔮 💩 🍍 🪳 🎃 🦔 ♏ ♏ ⚰️ 🦷 🏓 💃 ♉ 💀 🕵️  🍵 ♒ 🪲 ♒ ⛓️  ♓ 🤡 🕷️  🎫 🦢 👒 ⛓️  🎫 🕵️  💣 🪲 💃 ♑ 🎨 🦷 🤠"
			.split(" ")
			.filter(emoji => emoji.trim().length > 0)
	}
]

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="results"
				component={Results}
				durationInFrames={1000}
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
