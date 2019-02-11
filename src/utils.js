function stringRemoveFirstOccurrences(strings, target) {
    return strings.reduce((res, string) => res.replace(string, ''), target)
}

module.exports = {stringRemoveFirstOccurrences}
