const pageDataToState = require('./pageDataToState.js')

module.exports = class PageJson {
    data() {
        return {
            pagination: {
                data: 'collections.page',
                size: 1,
                alias: 'pageData'
            },
            permalink: data => `api/pages/${data.pageData.data.page.fileSlug.replace('pages', '') || 'index' }.json`
        }
    }

    render({pageData}) {
        let json = pageDataToState(pageData.data, pageData.templateContent)

        return JSON.stringify( json, null, ' ')
    }
}