const child = require("child_process")

module.exports = dirs => {
	let res, rej
	const prom = new Promise((rs, rj) => [res, rej] = [rs, rj])

	const proc = child.spawn("du", ["-b", "-L", "-c", ...dirs])

	let data = ""
	proc.stdout.on("data", chunk => {
		data += chunk
	})

	proc.on("close", code => {
		if (code == 0)
			res(parseInt(data.split("\n").at(-2)))
		else
			rej(code)
	})

	return prom
}
