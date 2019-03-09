const html = require('choo/html')
const raw = require('choo/html/raw')


module.exports = function view404(state) {
    return html`
        <header class="page-404">
        <h1>${state.page404.title}</h1>
        </header>
        <main>${raw(state.page404.content)}</main>`
}