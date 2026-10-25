module.exports = async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('style.css');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('documents');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('CNAME');

    eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.core.ruler.after("inline", "dash_substitution", removeDashes);
	});
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
