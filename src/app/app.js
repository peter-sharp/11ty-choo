const Choo = require('choo')

const pagePlugin = require('./page/index.js')
const notFoundPlugin = require('./404/index.js')
const contactStore = require('./contact/store.js')
const contactView = require('./contact/view.js')
const wrapper = require('./wrapper.js')


const app = Choo()

if (process.env.NODE_ENV !== 'production') {
    app.use(require('choo-devtools')())
}

// plugins

// handles all 11ty page routes
app.use(pagePlugin)

// handles 404 page routing and logic
app.use(notFoundPlugin)


// Stores
app.use(contactStore)

// Routes
app.route('/contact', wrapper(contactView))

module.exports = app.mount('#app')
