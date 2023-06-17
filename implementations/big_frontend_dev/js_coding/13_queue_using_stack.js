/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.firstStack = new Stack()
    this.secondStack = new Stack()
  }

  enqueue(element) {
    this.firstStack.push(element)
  }

  peek() {
    if (this.secondStack.size() > 0) {
      return this.secondStack.peek()
    }

    if (this.firstStack.size() > 0) {
      while (this.firstStack.size() > 0) {
        this.secondStack.push(this.firstStack.pop())
      }
      return this.secondStack.peek()
    }
  }

  size() {
    return this.firstStack.size() + this.secondStack.size()
  }

  dequeue() {
    if (this.secondStack.size() > 0) {
      return this.secondStack.pop()
    }

    if (this.firstStack.size() > 0) {
      while (this.firstStack.size() > 0) {
        this.secondStack.push(this.firstStack.pop())
      }
      return this.secondStack.pop()
    }
  }
}