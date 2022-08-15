class EventEmitter {
    subscribers = new Map();
    index = 0;

    subscribe(eventName, callback) {
        if (!this.subscribers.has(eventName)) {
            this.subscribers.set(eventName, new Map());
        }

        const i = this.index;
        this.index++;

        const sub = {
            cb: callback,
            release: () => {
                this.subscribers.get(eventName).delete(i);
            }
        };

        this.subscribers.get(eventName).set(i, sub);

        return sub;
    }

    emit(eventName, ...args) {
        const events = this.subscribers.get(eventName);
        if (!events) return;

        events.forEach((event) => event.cb(...args));
    }
}
