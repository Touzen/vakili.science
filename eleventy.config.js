const { execSync } = require("child_process");
const fs = require("fs");

module.exports = async function(eleventyConfig) {
    eleventyConfig.ignores.add("temp-daisy-dump.html");
    eleventyConfig.addPassthroughCopy('style.css');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('documents');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('CNAME');

    eleventyConfig.addFilter("lastmod", getLastMod);

    eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.core.ruler.after("inline", "dash_substitution", removeDashes);
	});
};

const lastModCache = new Map();

const getLastMod = (filePath) => {
    if (!filePath) return new Date().toISOString().split("T")[0];
    const cleanPath = filePath.replace(/^\.\//, "");
    if (lastModCache.has(cleanPath)) {
        return lastModCache.get(cleanPath);
    }
    let resultDate = null;
    try {
        const status = execSync(`git status --porcelain -- "${cleanPath}"`, { encoding: "utf-8" }).trim();
        if (status) {
            resultDate = fs.statSync(cleanPath).mtime.toISOString().split("T")[0];
        } else {
            const gitDate = execSync(`git log -1 --format="%cs" -- "${cleanPath}"`, { encoding: "utf-8" }).trim();
            if (gitDate) {
                resultDate = gitDate;
            }
        }
    } catch (e) {}

    if (!resultDate) {
        try {
            resultDate = fs.statSync(cleanPath).mtime.toISOString().split("T")[0];
        } catch (e) {
            resultDate = new Date().toISOString().split("T")[0];
        }
    }

    lastModCache.set(cleanPath, resultDate);
    return resultDate;
};

const convertDashes = (text) => {
	if (typeof text !== "string") {
		return text;
	}

	return text
		.replace(/---/g, "—")
		.replace(/--/g, "–");
};

const removeDashes = (state) => {
	for (const token of state.tokens) {
		if (token.type !== "inline" || !token.children) {
			continue;
		}
		for (const child of token.children) {
			if (child.type !== "text") {
				continue;
			}
			child.content = child.content
				.replace(/---/g, "—")
				.replace(/--/g, "–");
		}
	}
};
