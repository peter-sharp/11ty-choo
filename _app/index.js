const Choo = require('choo')

const pageStore = require('./page/store.js')
const pageView = require('./page/view.js')

const app = Choo()

if (process.env.NODE_ENV !== 'production') {
    app.use(require('choo-devtools')())
}

app.use(pageStore)
app.route(':page', pageView)

if (typeof window !== 'undefined') {  // 1.
    app.mount('#app')
}

module.exports = app