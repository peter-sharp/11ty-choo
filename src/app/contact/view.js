const html = require('choo/html')

module.exports = function contactView(state, emit) {
    return html`<form onsubmit=${handleContact} class="page-padding">
        <header class="content-header">
            <h1>Contact</h1>
        </header>
        <main>
            ${feedBack(state)}
            <!-- an example of an app-only page -->
            <p class="form-group">
                <label>name</label>
                <input type="text" name="name"/>
            </p>
            <p class="form-group">
                <label>message</label>
                <textarea></textarea>
            </p>
            <button>Send message</button>
        </main>
    </form>`

    function handleContact(ev) {
        ev.preventDefault()
        emit(state.events.CONTACT, ev.target.name.value)
    }
}

function feedBack(state) {
    return state.contact.contacted ? html`<div>Thanks for getting in contact, ${state.contact.name}!</div>` : ''
}