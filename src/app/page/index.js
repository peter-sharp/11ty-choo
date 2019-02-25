const pageStore = require('./store.js')
const pageView = require('./view.js')
const forEachMenuItem = require('./forEachMenuItem.js')
const notFoundModule = require('./404.js');

module.exports = function(state, events, app) {
    // Stores
    pageStore(state, events)
    
    forEachMenuItem((item) => {
        console.log(item.url)
        // Routes
        app.route(item.url, pageView)
    }, state.menuItems)
    
    notFoundModule(state, events, app)
}