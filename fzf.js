const child = require("child_process")

module.exports.fzf = (options, binary = "fzf") => {
	let res, rej
	const prom = new Promise((rs, rj) => [res, rej] = [rs, rj])

	const proc = child.spawn(binary)
	options.forEach(opt => proc.stdin.write(opt + "\n"))

	let data = ""
	proc.stdout.on("data", chunk => {
		data += chunk
	})
	proc.stderr.pipe(process.stderr)

	proc.on("close", code => {
		if (code == 0)
			res(data.trim())
		else
			rej(code)
	})

	return prom
}

module.exports.doujin = doujins => module.exports.fzf(doujins.sort(), __dirname + "/fzf-previews")
	.then(doujin => child.spawn("firefox", [`file://${process.cwd()}/${doujin}/index.html`]))
