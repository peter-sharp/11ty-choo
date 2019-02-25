const withPageState = require('./withPageState.js')
const pageView = require('./view.js')

module.exports = function(state, events, app){
    state.events.SHOW_404 = 'show-404'

    state.page404 = state.page404 || {}
    state.page404.page = state.page404.page || {}

    events.on(state.events.SHOW_404, function(){
        state.title = state.page404.title
        state.content = state.page404.content
        state.page = state.page404.page
        state.page.state = 'loaded'

        events.emit(state.events.RENDER)
    })

    // Routes
    app.route('*', withPageState(state.page404, pageView))
}