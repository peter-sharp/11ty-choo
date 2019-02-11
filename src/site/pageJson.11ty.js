const pageDataToState = require('../pageDataToState.js')
const {stringRemoveFirstOccurrences} = require('../utils.js')

module.exports = class PageJson {
    data() {
        return {
            pagination: {
                data: 'collections.page',
                size: 1,
                alias: 'pageData'
            },
            permalink: data => `api/pages/${urlToJsonPath(data.pageData.data.page.url)}.json`
        }
    }

    render({pageData}) {
        let json = pageDataToState(pageData.data, pageData.templateContent)

        return JSON.stringify( json, null, ' ')
    }
}

function urlToJsonPath(url) {
    return (stringRemoveFirstOccurrences(['pages', 'src'], url)).replace(/\/$/, '') || 'index'
}