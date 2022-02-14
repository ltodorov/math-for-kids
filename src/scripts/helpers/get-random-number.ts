/**
 * Gets a random number between 1 and the max number
 * @param {number} [max=9] The largest number that might be returned
 * @returns {number} Random number
 */
function getRandomNumber(max = 9): number {
    return Math.floor(Math.random() * max) + 1;
}

export {
    getRandomNumber,
};