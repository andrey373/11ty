module.exports = function(eleventyConfig){
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/css');
    // eleventyConfig.addWatchTarget('./src/css/');
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk"],

        dir: {
            input: 'src',
            output: 'public',
            include: 'includes'
        }

    }
}