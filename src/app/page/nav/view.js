const html = require('choo/html')

module.exports = function(state) {
    return html`<nav class="menu-bar">
            <ul class="main-nav">
            ${state.menuItems.map(createNavItem.bind(null, state.href+'/'))}
            </ul>
    </nav>`
}

function createNavItem (active, item, i) {
    return html`<li id="navitem_${i}" class="nav-item ${active == item.url ? 'nav-item--active' : ''}">
    <a href=${item.url}>${item.title}</a>
    ${item.children ? html`<ul class="nav-item__children">${item.children.map(createNavItem)}</ul>` : ''}
    </li>`
}