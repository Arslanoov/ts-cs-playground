class Subscriber {
    isUnsubscribed = false;

    constructor(sub) {
        this.sub = sub instanceof Function ? {
            next: sub
        } : sub;
    }

    next(...args) {
        if (this.isUnsubscribed) return;

        if (this.sub.next) {
            try {
                this.sub.next(...args);
            } catch (e) {
                this.error(e);
            }
        }
    }

    error(e) {
        if (this.isUnsubscribed) return;

        this.sub.error && this.sub.error(e);
        this.unsubscribe();
    }

    complete() {
        if (this.isUnsubscribed) return;

        this.sub.complete && this.sub.complete();
        this.unsubscribe();
    }

    unsubscribe() {
        this.isUnsubscribed = true;
    }
}

class Observable {
    constructor(setup) {
        this.setup = setup;
    }

    subscribe(subscriber) {
        const sub = new Subscriber(subscriber);
        this.setup(sub);

        return {
            unsubscribe() {
                sub.unsubscribe();
            }
        };
    }
}
