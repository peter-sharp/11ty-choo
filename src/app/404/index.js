const store = require('./store.js')
const view = require('./view.js')
const wrapper = require('../wrapper.js')

module.exports = function(state, events, app){
   
    store(state, events)
    // Routes
    app.route('/404', wrapper(view))
    app.route('/*', wrapper(view))

}