const fs = require("fs").promises
const info = require("./info")

info.doujins(true)
	.then(doujins => Object.entries(doujins))
	.then(doujins => doujins
		.map(([dirname, data]) =>
			fs.symlink(dirname, data.title, "dir")
				.then(_ => console.log(data.title))
				.catch(_ => {})))
