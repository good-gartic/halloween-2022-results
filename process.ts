#! /usr/bin/env -S deno run --allow-read

const input = Deno.readTextFileSync('./source.txt');
const lines = input
	.split('\n')
	.map((line) => line.trim())
	.filter((line) => line.length > 0)
	.map((line) => line.split('|').map((i) => i.trim()))
	.map(([_id, username, avatar, points, collection]) => {
		return {
			username,
			avatar,
			points: Number(points),
			items: collection.split(/\s+/g).map(item => item.trim()),
		};
	});

const serialized = JSON.stringify(lines);
const encoder = new TextEncoder();

Deno.stdout.write(encoder.encode(serialized));
