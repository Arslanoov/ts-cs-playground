type LinkedListValue = any;

interface SinglyLinkedListNodeInterface<T = LinkedListValue> {
    value: T;
    next?: SinglyLinkedListNodeInterface;
}

interface SinglyLinkedListInterface<T = LinkedListValue> {
    append(value: SinglyLinkedListNodeInterface): void;
    appendValue(value: T): void;
    prepend(value: SinglyLinkedListNodeInterface): void;
    prependValue(value: T): void;
    pop(): void;
    shift(): void;
    findByIndex(index: number): SinglyLinkedListNodeInterface | null;
    set(index: number, value?: T): void;
    remove(index: number): void;
    reverse(): void;

    getLength(): number;
    toArray(): SinglyLinkedListNodeInterface<T>[];
}

export class SinglyLinkedListNode<T = LinkedListValue> implements SinglyLinkedListNodeInterface<T> {
    public value: T;
    public next: SinglyLinkedListNode | null;

    constructor(value: T, next: SinglyLinkedListNode = null) {
        this.value = value;
        this.next = next;
    }
}

export class SinglyLinkedList<T> implements SinglyLinkedListInterface<T> {
    public head: SinglyLinkedListNodeInterface;

    append(value: SinglyLinkedListNodeInterface<T>) {
        if (!this.head) {
            this.head = value;
            return;
        }

        let current = this.head;

        while (current?.next) {
            current = current.next;
        }

        current.next = value;
    }

    appendValue(value: LinkedListValue) {
        this.append({
            value,
        });
    }

    prepend(value: SinglyLinkedListNodeInterface) {
        if (!this.head) {
            this.head = value;
            return;
        }

        value.next = this.head;
        this.head = value;
    }

    prependValue(value: T) {
        this.prepend({
            value
        });
    }

    pop() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
        }

        let current = this.head;
        let prev = null;

        while (current?.next) {
            prev = current;
            current = current.next;
        }

        if (prev) {
            prev.next = null;
        }
    }

    shift() {
        this.head = this.head?.next;
    }

    findByIndex(index: number) {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (index > 0) {
            current = current?.next;
            index--;
        }

        return current || null;
    }

    set(index: number, value?: T) {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex !== index) {
            if (!current.next) {
                return;
            }

            current = current.next;
            currentIndex++;
        }

        current.value = value;
    }

    remove(index: number) {
        if (!this.head || index < 0) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let currentIndex = 0;
        let current = this.head;

        while (currentIndex + 1 !== index) {
            if (!current.next || currentIndex + 1 > index) {
                return;
            }

            current = current.next;
            currentIndex++;
        }

        current.next = current.next.next;
    }

    reverse() {
        let prevNode = null;
        let nextNode = null;
        let current = this.head;

        while (current) {
            nextNode = current.next;
            current.next = prevNode;

            prevNode = current;
            current = nextNode;
        }

        this.head = prevNode;
    }

    getLength() {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let current = this.head;

        while (current?.next) {
            current = current.next;
            length++;
        }

        return length;
    }

    toArray() {
        if (!this.head) {
            return [];
        }

        const arr: SinglyLinkedListNodeInterface[] = [];
        let current = this.head;

        arr.push(current.value);

        while (current?.next) {
            arr.push(current.next.value);
            current = current.next;
        }

        return arr;
    }
}