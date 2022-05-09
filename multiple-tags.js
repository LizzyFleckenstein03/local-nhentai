const fzf = require("./fzf")
const info = require("./info")

const tags = process.argv.slice(2)

info.doujins()
	.then(doujins => Object.values(doujins))
	.then(doujins => doujins.filter(doujin =>
		tags.every(tag => doujin.tag && doujin.tag.includes(tag))))
	.then(doujins => doujins.map(doujin => doujin.title))
	.then(doujins => fzf.doujin(doujins))
