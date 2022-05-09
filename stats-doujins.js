const info = require("./info")
const du = require("./du")

const fmt = (num, size) => 
`Number of doujins:       ${num}
Total size:              ${(size       / 1e9).toFixed(2)}GB
Average size per doujin: ${(size / num / 1e6).toFixed(2)}MB`

info.doujins()
	.then(doujins => Object.keys(doujins))
	.then(doujins => Promise.all(doujins.map(du))
		.then(sizes => sizes.reduce((a, b) => a + b, 0))
		.then(total => console.log(fmt(doujins.length, total)))
	)
