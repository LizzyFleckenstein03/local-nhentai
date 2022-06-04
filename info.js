const fs = require("fs").promises
const criteriaKeys = ["tag", "group", "artist", "character", "parody"]

module.exports.doujins = shortNames => fs.readdir(".", {encoding: "utf8", withFileTypes: true})
	.then(doujins => doujins
		.map(dirent => fs.readFile(`${dirent.name}/metadata.json`)
			.then(data => JSON.parse(data.toString()))
			.then(data => {data.title = dirent.name; return data})
			.then(data => [dirent.name, data])
			.catch(_ => [])))
	.then(promises => Promise.all(promises))
	.then(doujins => doujins
		.filter(([title, data]) => title && data))
		//.filter(([title, data]) => (title == data.title) == !shortNames))
	.then(doujins => Object.fromEntries(doujins))

module.exports.criteria = _ => {
	const criteria = Object.fromEntries(criteriaKeys.map(key => [key, {["*"]: []}]))

	return module.exports.doujins()
		.then(doujins => Object.values(doujins))
		.then(doujins => doujins
			.forEach(doujin =>
				criteriaKeys.forEach(crit => {
					criteria[crit]["*"].push(doujin.title)

					doujin[crit] && doujin[crit].forEach(val => {
						criteria[crit][val] = criteria[crit][val] || []
						criteria[crit][val].push(doujin.title)
					})
				})
			))
		.then(_ => criteria)
}
