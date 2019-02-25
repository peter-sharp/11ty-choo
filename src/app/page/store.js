const fetchPage = require('./fetchPage.js')

module.exports = function(state, events) {

    state.title = state.title || ''
    state.content = state.content || '<!-- no content -->'
    state.menuItems = state.menuItems || []
    state.page = state.page || {}
    state.page.state = state.page.state || 'loaded'
    
    state.events.LOAD_PAGE = 'load-page'

    events.on(state.events.LOAD_PAGE, function(page) {
        state.page.url = page
        state.page.state = 'loading'
        events.emit(state.events.RENDER)
        
        fetchPage(page)
            .then((data) => {
                
                state.title = data.title
                state.content = data.content
                state.page = state.page
                state.page.state = 'loaded'

                events.emit(state.events.RENDER)
        })
        .catch((err) => {
            events.emit(state.events.SHOW_404)
        })
    })
}