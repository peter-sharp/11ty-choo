const raw = require('choo/html/raw')
const html = require('choo/html')

module.exports = function(state, emit) {

    if(state.params && state.params.page != state.page.fileSlug) {
        emit(state.events.LOAD_PAGE, state.params.page)
    }

    return html`<div id="app">
        <nav>
            <ul>
            ${state.menuItems.map(item => html`<li><a href=${item.url}>${item.title}</a></li>`)}
            </ul>
        </nav>
        <header>
        <h1>${state.title}</h1>
        </header>
        <main>${raw(state.content)}</main>
    </div>`
}