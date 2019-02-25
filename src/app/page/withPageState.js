module.exports = function(newState, view) {
    return function(state, emit) {
        // state.title = newState.title
        // state.content = newState.content
        // state.page = Object.assign({}, state.page || {}, newState.page)
        
        return view(state, emit)
    }
}