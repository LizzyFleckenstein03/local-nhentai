const fzf = require("./fzf")
const info = require("./info")

;(async _ => {
	const criteria = await info.criteria()
	let stage = 0
	let crt, val, dou

	while (true) {
		try {
			switch (stage) {
				case 0:
					crt = await fzf.fzf(Object.keys(criteria).sort()); break
				case 1:
					val = await fzf.fzf(Object.keys(criteria[crt]).sort()); break
				case 2:
					dou = await fzf.doujin(Object.values(criteria[crt][val]).sort()); break
				default:
					return
			}

			stage++
		} catch {
			stage--
		}
	}
})()
