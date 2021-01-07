/**
 * Get the maximum two digits number that can be used in an expression
 * @param {number} [max=10] The max number to be used
 * @returns {number}
 */
function getMaxNumber(max: number = 10): number {
    return Math.min(max, 99);
}

export {
    getMaxNumber
};