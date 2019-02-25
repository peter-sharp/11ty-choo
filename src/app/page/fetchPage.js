const isBrowser = require('../isBrowser.js')

module.exports = function fetchPage(page) {
    page = page.split('/').filter(x => x).join('/')
    let datafile = page === '' ? 'index' : page
    
    if(isBrowser()) {
        return fetch(`/api/pages/${datafile}.json`)
                .then((res) => {
                    if(!res.ok) {
                        throw Error(res.statusText)
                    }
                    return res.json()
                })
    } else {
        return Promise.resolve({})
    }
}