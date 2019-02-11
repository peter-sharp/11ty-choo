const raw = require('choo/html/raw')
const html = require('choo/html')
const isBrowser = require('../isBrowser.js')

const nav = require('./nav/view.js')

module.exports = function(state, emit) {

    if(canLoadPage(state)) {
        emit(state.events.LOAD_PAGE, state.params.wildcard)
    }

    return html`<div id="app">
        ${nav(state)}
        <header>
        <h1>${loader(state.page.state == 'loading', state.title)}</h1>
        </header>
        <main>${loader(state.page.state == 'loading', raw(state.content))}</main>
    </div>`
}

function loader(toggle, el) {
    return !toggle ? el : html`<span>...</span>`
}

function canLoadPage(state) {
    return isBrowser() && state.params && state.params.wildcard != state.page.fileSlug
}