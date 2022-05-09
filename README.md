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

`node symlinks.js`: Updates symlinks. Must be run whenever new doujins have been added, otherwise they will not be seen by the other scripts.

`node select.js`: Open fzf/überzug menu to select a doujin. Shows a list of tags first. When a tag is selected, shows all doujins with that tag and lets the user select one, displaying the thumbnails of the doujins at the side. The "\*" tag can be used to search/select from all doujins.

`node multiple-tags.js <tag1> <tag2> ...`: Open fzf/überzug menu with doujins that match all given tags (tags separated by whitespace).

`node stats-doujins.js`: Displays number of downloaded doujins, total size and average size per doujin

`node stats-tags.js`: Displays tags sorted by how many doujins are available for each tag. May produce long output, you might want to pipe it into `head`, `grep` or `less`.

`node wholesome.js`: Scrapes [wholesome hentais](https://wholesomelist.com/list). This takes a long time since it's about 2700 hentais in total (may consume 50GB of disk space), but you can abort it any time (and resume it later).

Note: you might want to create a subdirectory and put the doujins into there, they will all be put into the current working directory. (Run the scripts from a different directory to prevent spamming this directory)
Of course, you can also run these scripts in a directory where you already downloaded doujins using the `nhentai` tool, but make sure to run the symlinks script to "register" them all in the system.

# Notes

`./fzf-previews` taken from [fzf-ueberzogen](https://github.com/seebye/fzf-ueberzogen) with slight modifications.

Happy scraping and jerking!
