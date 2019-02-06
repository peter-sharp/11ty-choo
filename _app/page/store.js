module.exports = function(state, events) {

    state.title = state.title || ''
    state.content = state.content || '<!-- no content -->'
    state.menuItems = state.menuItems || []
    
    state.events.LOAD_PAGE = 'load-page'

    events.on(state.events.LOAD_PAGE, function(page) {
        state.page.fileSlug = page
        let datafile = page === '' ? 'index' : page 
        fetch(`/api/pages/${datafile}.json`)
            .then(res => res.json())
            .then((data) => {
                state.title = data.title
                state.content = data.content
                state.page = state.page
                events.emit(state.events.RENDER)
        })
    })
}