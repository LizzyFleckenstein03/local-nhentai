const fzf = require("./fzf")
const info = require("./info")

;(async _ => {
	const tags = await info.tags()

	do {
		try {
			tag = await fzf.fzf(Object.keys(tags).sort())
		} catch {
			return
		}
	} while (!await fzf.doujin(Object.values(tags[tag]).sort()))
})()
