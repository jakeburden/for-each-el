module.exports = function forEachEl(el, cb) {
    [].forEach.call(document.querySelectorAll(el), cb)
}
