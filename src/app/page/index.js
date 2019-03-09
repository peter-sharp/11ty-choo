const pageStore = require('./store.js')
const pageView = require('./view.js')
const wrapper = require('../wrapper.js')
const forEachMenuItem = require('./forEachMenuItem.js')

function pagePlugin(state, events, app) {
    state.menuItems = state.menuItems || []
    // Stores
    pageStore(state, events)
    
    console.info('adding page routes')
    loadPageRoutes(app, state.menuItems)
}

pagePlugin.storeName = 'pagePlugin'

module.exports = pagePlugin

function loadPageRoutes(app, routes) {
    forEachMenuItem((item) => {
        // Routes
        const route = removeTrailingSlash(item.url)
        console.info(`- ${route}`)
        app.route(route, wrapper(pageView))
    }, routes)
}

function removeTrailingSlash(url) {
    let urlParts = url.split('/').filter(identity)
    return '/'+ urlParts.join('/')
}

const identity = x => x