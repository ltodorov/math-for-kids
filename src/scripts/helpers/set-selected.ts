import { ArithmeticOperation } from "@scripts/models/exercise";

const selectedClassName = "nav__item--selected";

/**
 * Changes the selected nav item
 * @param {string} [operation="addition"] Arithmeric operation name
 */
function setSelected(operation: keyof ArithmeticOperation = "addition"): void {
    document.querySelector(`.${selectedClassName}`)?.classList.remove(selectedClassName);
    document.querySelector(`[href="#${operation}"]`)?.classList.add(selectedClassName);
}

export {
    setSelected,
};
