const html = require('choo/html')
const raw = require('choo/html/raw')
const app = require('../../app/app.js')

const pageDataToState = require('../../pageDataToState.js')
const createSubmenuItems = require('../../createSubmenuItems.js')

module.exports = class Page {
    data() {
        return {
            layout: 'index.11ty.js'
        }
    }

    render(data) {
        const state = pageDataToState(data, data.layoutContent)
        state.menuItems = createSubmenuItems(getMenuItems(data.collections.page))
        state.page404 = get404Page(data.collections.notFound)

        const {page} = state
        console.log(page.url)
        let pageContents;
        try {
            pageContents =  app.toString(page.url, state)
        } catch (e) {
            pageContents = ''
        }
        return html`${raw(pageContents)}
        <script>
        var initialState = ${raw(JSON.stringify(state, null, ' '))}
        </script>`.toString()
    }
}

function getMenuItems(pages) {
    return pages.filter(item => item.data.tags.indexOf('notFound') === -1).map(toMenuItem)
}

function toMenuItem(item) {
    const {data} = item
    return {
        title: data.title || '', 
        url: item.url,
        createRoute: 'createRoute' in data ? data.createRoute : true
    }
}

function get404Page(notFound) {
    if(!notFound) return null
    let item = notFound[0]
    
    return {
        title: item.data.title,
        content: item.templateContent,
        page: item.data.page
    }
}