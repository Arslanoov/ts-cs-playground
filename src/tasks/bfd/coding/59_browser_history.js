class BrowserHistory {
    index = 0;

    /**
     * @param {string} url
     * if url is set, it means new tab with url
     * otherwise, it is empty new tab
     */
    constructor(url) {
        this.history = [url];
    }
    /**
     * @param { string } url
     */
    visit(url) {
        this.index++;
        this.history[this.index] = url;
    }

    /**
     * @return {string} current url
     */
    get current() {
        return this.history[this.index];
    }

    // go to previous entry
    goBack() {
        this.index = Math.max(0, this.index - 1);
    }

    // go to next visited url
    forward() {
        this.index = Math.min(this.history.length - 1, this.index + 1);
    }
}
