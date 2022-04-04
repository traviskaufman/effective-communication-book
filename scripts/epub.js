const fs = require("fs");
const path = require("path");
const { EPub } = require("@lesjoursfr/html-to-epub");
const cheerio = require("cheerio");

const runningWithinScriptsFolder = path.basename(process.cwd()) === "scripts";
// NOTE: Assumes we only ever run from scripts/ or the root. Safe assumption I think.
const rootDirLocation = runningWithinScriptsFolder ? ".." : ".";

const epub = new EPub(
  {
    title:
      "Effective Communication: 50 Specific Ways to Write Clean Code Given Messy Requirements",
    author: "Travis Kaufman",
    content: getContent(),
    verbose: true,
  },
  path.join(rootDirLocation, "effective-communication.epub")
);
epub
  .render()
  .then(() => {
    console.log("Ebook Generated Successfully!");
  })
  .catch((err) => {
    console.error("Failed to generate Ebook because of ", err);
  });

function getContent() {
  const bookPath = path.join(rootDirLocation, "book");
  const html = fs.readFileSync(path.join(bookPath, "print.html"), "utf-8");
  const $ = cheerio.load(html);
  const content = parseHtml($);
  return content;
}

// <h1 id="...">{title}
// ...then content nodes
function parseHtml($) {
  const contentBlock = $("main");
  let output = [];
  let currentChapter = null;

  contentBlock.children().each((i, elem) => {
    const isNewChapter = elem.tagName === "h1";
    if (isNewChapter) {
      if (currentChapter) {
        output.push(currentChapter);
      }
      currentChapter = {
        title: $(elem).text().trim(),
        data: "",
      };
    } else {
      currentChapter.data += $.html($(elem));
    }
  });

  return output;
}
