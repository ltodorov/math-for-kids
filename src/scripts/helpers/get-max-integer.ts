const DEFAULT_MAX_INT: number = 10;
const MAX_TWO_DIGITS = 99;

/**
 * Get the maximum two digits integer that can be used in an expression
 * @param {number} [max=10] The max integer
 */
function getMaxInteger(max: number = DEFAULT_MAX_INT): number {
    return Math.min(max, MAX_TWO_DIGITS);
}

export {
    getMaxInteger
};