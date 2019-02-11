const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function (data) {
    return html`
    <!doctype html>
    <html class="no-js" lang="en">
        <head>
            <meta charset="utf-8">
            <title>${data.title} | ${data.siteMetadata.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="/assets/style.css"/>
        </head>
        <body>
            ${raw(data.content)}
            
            <script src="/assets/no-js.js"></script>
            <script src="/assets/app.js"></script>
        </body>
    </html>`.toString()
}