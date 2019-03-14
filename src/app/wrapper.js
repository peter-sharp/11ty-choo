const html = require('choo/html')

const nav = require('./nav/view.js')

const curry = require('ramda/src/curry')

module.exports = curry(function wrapper(view, state, emit) {
    return html`<div id="app">
    <header class="page-header page-padding">
        ${nav(state)}
    </header>
    ${view(state, emit)}
    </div>`
})