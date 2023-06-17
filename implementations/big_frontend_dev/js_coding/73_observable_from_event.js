/**
 * @param {HTMLElement} element
 * @param {string} eventName
 * @param {boolean} capture
 * @return {Observable}
 */
function fromEvent(element, eventName, capture = false) {
    return new Observable((sub) => {
        element.addEventListener(eventName, (e) => sub.next(e), capture);
    });
}
