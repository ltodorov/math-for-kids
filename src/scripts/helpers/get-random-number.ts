/**
 * Get a random number between 1 and the max number
 * @param {number} [max=10] The largest number passed in by the user
 */
function getRandomNumber(max = 10): number {
    return Math.floor(Math.random() * max) + 1;
}

export {
    getRandomNumber
};