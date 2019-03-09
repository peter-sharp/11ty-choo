module.exports = function contactStore(state, events) {
    state.events.CONTACT = 'contact'

    state.contact = {
        contacted: false,
        name: ''
    }


    events.on(state.events.CONTACT, function updateContacted(name){
        state.contact.contacted = true
        state.contact.name = name
        events.emit(state.events.RENDER)
    })
}