const fetchPage = require('./fetchPage.js')

module.exports = function(state, events) {

    state.title = state.title || ''
    state.content = state.content || '<!-- no content -->'
    state.menuItems = state.menuItems || []
    state.page = state.page || {}
    state.page.state = state.page.state || 'loaded'

    state.page404 = state.page404 || {}
    state.page404.page = state.page404.page || {}
    
    state.events.LOAD_PAGE = 'load-page'

    events.on(state.events.LOAD_PAGE, function(page) {
        state.page.fileSlug = page
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
                
            state.title = state.page404.title
            state.content = state.page404.content
            state.page = state.page404.page
            state.page.state = 'loaded'
         
            events.emit(state.events.RENDER)
        })
    })
}