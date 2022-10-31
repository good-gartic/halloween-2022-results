const fs = require("fs");
const discord = require("discord.js");

const token = process.env.DISCORD_TOKEN;
const source = fs.readFileSync("data.tsv");

if (!token) {
  console.error("The DISCORD_TOKEN variable was not set properly!");
  process.exit(1);
}


(async () => {
  const client = new discord.Client({
    intents: [
      discord.IntentsBitField.Flags.Guilds,
      discord.IntentsBitField.Flags.GuildMembers
    ]
  });

  await client.login(token);

  const guild = await client.guilds.fetch("683633975838769192");
  const data = await Promise.all(
    source.toString()
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(async line => {
        const [_, id, points, collection] = line.split("\t");
        const member = await guild.members.fetch(id);

        const username = member.nickname ?? member.user.username;
        const avatar = member.displayAvatarURL({ extension: "png" });

        return {
          username,
          avatar,
          points: Number(points),
          items: collection.split(/\s+/g).filter(item => item.trim().length > 0)
        };
      })
  );

  process.stdout.write(JSON.stringify(data));
})();
