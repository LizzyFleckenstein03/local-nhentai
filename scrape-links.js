const fetch = require("node-fetch")
const child = require("child_process")

module.exports = async (page, link) => {
	let data

	try {
		data = await (await fetch(page)).text()
	} catch {}

	if (!data)
		return false

	const ids = []

	while (true) {
		const pos = data.search(link)

		if (pos == -1)
			break;

		data = data.slice(pos + link.length)
		const id = parseInt(data)
		if (id)
			ids.push(id)
	}

	if (ids.length < 1)
		return false

	child.spawnSync("nhentai", ["--id", ids.join(",")], { stdio: "inherit" })
	return true
}
