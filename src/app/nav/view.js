const html = require('choo/html')

const curry = require('ramda/src/curry')

module.exports = function(state) {
    return html`<nav class="menu-bar">
            <ul class="main-nav">
            ${state.menuItems.map(createNavItem( state.href+'/'))}
            </ul>
    </nav>`
}

const createNavItem = curry(function (active, item) {
    const i = createNavItem.lastIndex
    createNavItem.lastIndex += 1
    return html`<li id="navitem_${i}" class="nav-item ${active == item.url ? 'nav-item--active' : ''}">
        ${item.children ? withChildren(active, item) : itemLink(item)}
    </li>`
})

createNavItem.lastIndex = 0

const withChildren = function(active, item) {
    return html`<details class="nav-item__toggler">
    <summary>
        ${itemLink(item)}
    </summary>
    <ul class="nav-item__children">
        ${item.children.map(createNavItem(active))}
    </ul>
</details>`
}

const itemLink = function(item) {
    return html`<a href=${item.url}>${item.title}</a>`
}