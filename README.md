# Local nHentai
This is a collection of Node.js scripts that can be used to manage a local nhentai library.

# Install instructions
Dependencies:

- `fzf`: [repo](https://github.com/junegunn/fzf), or `sudo apt install fzf`
- `ueberzug`: [repo](https://github.com/seebye/ueberzug), or `pip3 install ueberzug`
- `nhentai`: [repo](https://github.com/RicterZ/nhentai)
- `npm`
- `firefox`

Remember to install NPM deps: `npm install`

# Usage

`nhentai --id ${id}`: Download a doujin.

`node select.js`: Open fzf/überzug menu to select a doujin.

`node multiple-tags.js <tag1> <tag2> ...`: Open fzf/überzug menu with doujins that match all given tags (tags separated by whitespace).

`node stats-doujins.js`: Displays number of downloaded doujins, total size and average size per doujin

`node stats.js <criterium>`: Displays tags, artists, characters, parodies or groups sorted by how many doujins are available for each. May produce long output, you might want to pipe it into `head`, `grep` or `less`.

`node scrape-wholesome.js`: Scrapes [wholesome hentais](https://wholesomelist.com/list). This takes a long time since it's about 2700 hentais in total (consumes about 32GB of disk space), but you can abort it any time (and resume it later).

`node scrape-links.js <criterium> <value>`: Scrapes doujins by criterium, where criterium can be tag, artist, character, parody or group and value is the value. E.g. `node scrape-links.js tag full-color` scrapes fully colored doujins.

Note: you might want to create a subdirectory and put the doujins into there, they will all be put into the current working directory. (Run the scripts from a different directory to prevent spamming this directory)
Of course, you can also run these scripts in a directory where you already downloaded doujins using the `nhentai` tool.
# Notes

`./fzf-previews` taken from [fzf-ueberzogen](https://github.com/seebye/fzf-ueberzogen) with slight modifications.

Happy scraping!
