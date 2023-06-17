const leftChild = (i) => i * 2 + 1;
const rightChild = (i) => i * 2 + 2;
const parent = (i) => Math.floor((i - 1) / 2);

// complete the implementation
class PriorityQueue {
    /**
     * @param {(a: any, b: any) => -1 | 0 | 1} compare -
     * compare function, similar to parameter of Array.prototype.sort
     */
    constructor(compare = (a, b) => a - b) {
        this.compare = (a, b) => compare(a, b) > 0;
        this.heap = [];
    }

    /**
     * return {number} amount of items
     */
    size() {
        return this.heap.length;
    }

    /**
     * returns the head element
     */
    peek() {
        return this.heap[0];
    }

    /**
     * @param {any} element - new element to add
     */
    add(element) {
        this.heap.push(element);
        if (this.heap.length > 1) {
            this.moveUp(this.heap.length - 1);
        }
    }

    moveUp(i) {
        if (i === 0) return;

        const parentIndex = parent(i);
        if (this.compare(this.heap[parentIndex], this.heap[i])) {
            this.swap(parentIndex, i);
            this.moveUp(parentIndex);
        }
    }

    /**
     * remove the head element
     * @return {any} the head element
     */
    poll() {
        const root = this.heap.shift();
        const endElement = this.heap[this.heap.length - 1];

        this.heap.unshift(endElement);
        this.heap.pop();

        this.heapify(0);

        return root;
    }

    heapify(i) {
        const childIndex = this.getChildIndex(i);

        if (i !== childIndex) {
            this.swap(i, childIndex);
            this.heapify(childIndex);
        }
    }

    getChildIndex(i) {
        const leftIndex = leftChild(i);
        const rightIndex = rightChild(i);

        if (leftIndex < this.heap.length && this.compare(this.heap[i], this.heap[leftIndex])) {
            i = leftIndex;
        }

        if (rightIndex < this.heap.length && this.compare(this.heap[i], this.heap[rightIndex])) {
            i = rightIndex;
        }

        return i;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
