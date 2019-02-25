module.exports = function forEachMenuItem(fn, menuItems = []) {
    menuItems.forEach((item) => {
        fn(item)
        if(item.children) forEachMenuItem(fn, item.children)
    })
}