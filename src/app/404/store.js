
function store404(state, events, app){
    state.events.SHOW_404 = 'show-404'

    state.page404 = state.page404 || {}
    state.page404.title = state.page404.title || ''
    state.page404.content = state.page404.content || '<!-- no content -->'
    state.page404.page = state.page404.page || {}

    events.on(state.events.SHOW_404, function(){
        events.emit(state.events.PUSHSTATE, '/404')
    })
}

store404.storeName = 'store404'

module.exports = store404