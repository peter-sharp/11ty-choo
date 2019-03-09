const Choo = require('choo')

const pageModule = require('./page/index.js')
const notFoundModule = require('./404/index.js');

const app = Choo()

if (process.env.NODE_ENV !== 'production') {
    app.use(require('choo-devtools')())
}

// Stores
app.use(pageModule)
app.use(notFoundModule)

module.exports = app.mount('#app')
