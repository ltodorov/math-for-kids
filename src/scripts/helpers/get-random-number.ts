/**
 * Get a random number between 1 and the max number
 * @param {number} [max=9] The largest number that might be returned
 */
function getRandomNumber(max = 9): number {
    return Math.floor(Math.random() * max) + 1;
}

export {
    getRandomNumber,
};