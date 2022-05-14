const scrapeLinks = require("./scrape-links")
const page = `https://nhentai.net/${process.argv[2]}/${process.argv[3]}/popular?page=`

;(async _ => {
	for (let i = 1; await scrapeLinks(page + i, "/g/"); i++)
		;
})();

