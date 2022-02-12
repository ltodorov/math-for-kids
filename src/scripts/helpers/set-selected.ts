import { ArithmeticOperation } from "@scripts/models/exercise";

const selectedClassName = "nav__item--selected";

function setSelected(operation: keyof ArithmeticOperation = "addition") {
    document.querySelector(`.${selectedClassName}`)?.classList.remove(selectedClassName);
    document.querySelector(`[href="#${operation}"]`)?.classList.add(selectedClassName);
}

export {
    setSelected,
};