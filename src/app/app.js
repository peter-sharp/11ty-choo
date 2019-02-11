const Choo = require('choo')

const pageStore = require('./page/store.js')
const pageView = require('./page/view.js')

const app = Choo()

if (process.env.NODE_ENV !== 'production') {
    app.use(require('choo-devtools')())
}

console.log(process.env.NODE_ENV)

// Stores
app.use(pageStore)

// Routes
app.route('/*', pageView)


module.exports = app.mount('#app')