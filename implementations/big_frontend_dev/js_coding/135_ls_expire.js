window.myLocalStorage = {
    getItem(key) {
        const item = JSON.parse(localStorage.getItem(key));
        if (!item) return null;

        if (item.maxAge && item.expiredAt <= Date.now()) {
            localStorage.removeItem(key);
            return null;
        }

        return item.value;
    },

    setItem(key, value, maxAge) {
        if (maxAge <= 0) return;

        localStorage.setItem(key, JSON.stringify({
            value,
            expiredAt: Date.now() + maxAge,
            maxAge,
        }));
    },

    removeItem(key) {
        return localStorage.removeItem(key);
    },

    clear() {
        localStorage.clear();
    }
}
