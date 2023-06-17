/**
 * cancel all timer from window.setTimeout
 */

const timeouts = [];

const originalSetTimeout = window.setTimeout;

window.setTimeout = (callback, delay, ...args) => {
    const id = originalSetTimeout(callback, delay, ...args);
    timeouts.push(id);
    return id;
}

function clearAllTimeout() {
    timeouts.forEach((id) => clearTimeout(id));
}