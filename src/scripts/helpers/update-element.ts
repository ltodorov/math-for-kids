type Callback<T> = (el: T) => void;

/**
 * Update an element if it exists in the DOM
 * @param element {HTMLElement|null} The element which should be updated
 * @param cb {Function} Callback to be called if the element exists in the DOM
 */
function updateElement<T extends HTMLElement>(element: T | null, cb: Callback<T>) {
    if (element) {
        cb.call(null, element);
    }
}

export default updateElement;