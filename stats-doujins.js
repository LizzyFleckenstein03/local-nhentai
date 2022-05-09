const info = require("./info")
const du = require("./du")

const fmt = (num, size) => 
`Number of doujins:       ${num}
Total size:              ${(size       / 1e9).toFixed(2)}GB
Average size per doujin: ${(size / num / 1e6).toFixed(2)}MB`

info.doujins()
	.then(doujins => Object.keys(doujins))
	.then(doujins => du(doujins)
		.then(total => console.log(fmt(doujins.length, total))))
