module.exports = function(menuItems) {
    let res = menuItems.reduce(addSubmenuItems, {})
    return arrayifyChildren(res)
}

function addSubmenuItems(items, item) {
    let urlParts = item.url.split('/').filter(x => x)

    if(urlParts.length > 1) {

        items = addChild(urlParts, item, items)
    } else {
        items[urlParts[0]] = item
    }
    return items
}

function addChild(parts, item, children) {
    let part = parts.shift()
    if(!parts.length) {
        children[part] = item
    } else {
        if(!children[part]) children[part] = {}
        if(!children[part].children) {
            children[part].children = {}
        }

        children[part].children = addChild(parts, item, children[part].children)
    }
    return children
}

function arrayifyChildren(children) {
    return Object.values(children).map(item => {
        if(item.children) item.children = arrayifyChildren(item.children)
        return item
    })

}