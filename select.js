const child = require("child_process")
const fzf = require("./fzf")
const info = require("./info")

;(async _ => {
	const doujins = await info.doujins()
	const tags = await info.tags()

	let doujin, tag
	while (!doujin) {
		try { tag    = await fzf(Object.keys(tags).sort()) } catch { return }
		try { doujin = await fzf(Object.values(tags[tag]).sort(), __dirname + "/fzf-previews") } catch {}
	}

	child.spawn("firefox", [`file://${process.cwd()}/${doujin}/index.html`])
})()
