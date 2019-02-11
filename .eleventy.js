const {stringRemoveFirstOccurrences} = require('./src/utils.js')

const fs = require('fs')

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/site/assets")


    eleventyConfig.addFilter('getPagePermalink', getPagePermalink)

    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: show404
        }
    })
    
    return {
        dir: {
            input: "./src/site/",
            output: "./dist/"
        },
        templateFormats: [
            "md",
            "11ty.js",
            "json"
          ],
        passthroughFileCopy: true
    }
}

function getPagePermalink(page) {
    let path = page.inputPath || page.fileSlug

    return stringRemoveFirstOccurrences(['src', 'index', 'site','pages','.md'], path) + '/index.html'
}

function show404(err, bs) {
    if(err) {
        console.error(err)
        return
    }

    const content404 = fs.readFileSync('dist/404.html')

    bs.addMiddleware("*", (req, res) => {
        // provides the 404 content without redirect.
        res.statusCode = 404
        res.write(content404)
        res.end()
    })
}