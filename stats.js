require("./info").criteria()
	.then(crits => crits[process.argv[2]])
	.then(crit => Object.entries(crit)
		.sort((a, b) => b[1].length - a[1].length)
		.forEach(elem => console.log(elem[1].length, elem[0]))
	)
	.then(_ => {})