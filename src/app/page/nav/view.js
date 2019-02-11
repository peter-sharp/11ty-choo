const html = require('choo/html')

module.exports = function(state) {
    return html`<nav class="menu-bar">
            <ul class="main-nav">
            ${state.menuItems.map(createNavItem)}
            </ul>
    </nav>`
}

function createNavItem (item) {
    return html`<li class="nav-item">
    <a href=${item.url}>${item.title}</a>
    ${item.children ? html`<ul class="nav-item__children">${item.children.map(createNavItem)}</ul>` : ''}
    </li>`
}