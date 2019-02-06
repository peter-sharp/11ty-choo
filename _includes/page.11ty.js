const app = require('../_app/index.js')
const eleventyHelper = require('../_app/eleventy.js')

let pageDataToState = require('../pageDataToState.js')

module.exports = class Page {
    data() {
        return {
            layout: 'base.pug',
            // pagination: {
            //     data: 'collections.page',
            //     size: -1,
            //     alias: 'menuItems'
            // }
        }
    }

    render(data) {
        const state = pageDataToState(data, data.layoutContent)

        state.menuItems = data.collections.page.map(item => ({title: item.data.title, url: item.url}))
        
        const {page} = state
        return `${eleventyHelper(app, page.url, state)}
        <script>
        var initialState = ${JSON.stringify(state, null, ' ')}
        </script>`
    }
}