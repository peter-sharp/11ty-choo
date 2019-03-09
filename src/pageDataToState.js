module.exports = function (data, content) {
    let json = Object.assign({}, data, {content});
    if(json.page) json.page = Object.assign({}, json.page)
    if(json.inputPath) delete json.inputPath;
    if(json.outputPath) delete json.outputPath;
    if(json.page && json.page.inputPath) delete json.page.inputPath;
    if(json.page && json.page.outputPath) delete json.page.outputPath;
    if(json.collections) delete json.collections;
    if(json.pkg) delete json.pkg;
    if(json.layout) delete json.layout;
    if(json.permalink) delete json.permalink;
    if(json.layoutContent) delete json.layoutContent;
    if(json._layoutContent) delete json._layoutContent;
    
    return json;
}