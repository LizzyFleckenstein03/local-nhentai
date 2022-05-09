const fetch = require("node-fetch")
const child = require("child_process")

const link = "https://nhentai.net/g/"
const ids = []

fetch("https://wholesomelist.com/list")
	.then(data => data.text())
	.then(data => {
		while (true) {
			const pos = data.search(link)

			if (pos == -1)
				break;

			data = data.slice(pos + link.length)
			const id = parseInt(data)
			if (id)
				ids.push(id)
		}

		child.spawn("nhentai", ["--id", ids.join(",")], { stdio: "inherit" })
	})
	
