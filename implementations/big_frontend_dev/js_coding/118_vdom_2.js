/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
    const el = document.createElement(type);

    for (let key in props) {
        el.setAttribute(
            key === 'className' ? 'class' : key,
            props[key]
        );
    }

    for (let child of children) {
        el.append(child instanceof String ? document.createTextNode(child) : child);
    }

    return el;
}


/**
 * @param { MyElement }
 * @returns { HTMLElement }
 */
function render(myElement) {
    return myElement;
}
