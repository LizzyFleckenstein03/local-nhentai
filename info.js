const fs = require("fs").promises

module.exports.doujins = shortNames => fs.readdir(".", {encoding: "utf8", withFileTypes: true})
	.then(doujins => doujins
		.map(dirent => fs.readFile(`${dirent.name}/metadata.json`)
			.then(data => JSON.parse(data.toString()))
			.then(data => [dirent.name, data])
			.catch(_ => [])))
	.then(promises => Promise.all(promises))
	.then(doujins => doujins
		.filter(([title, data]) => title && data)
		.filter(([title, data]) => (title == data.title) == !shortNames))
	.then(doujins => Object.fromEntries(doujins))

module.exports.tags = _ => {
	const tags = {"*": []}

	return module.exports.doujins()
		.then(doujins => Object.values(doujins))
		.then(doujins => doujins
			.forEach(doujin => {
				tags["*"].push(doujin.title)	

				doujin.tag && doujin.tag.forEach(tag => {
					tags[tag] = tags[tag] || []
					tags[tag].push(doujin.title)
				})
			}))
		.then(_ => tags)
}
