
module.exports = class Page {
    open() {
        return browser.url("https://www.amazon.in/");
    }
}
