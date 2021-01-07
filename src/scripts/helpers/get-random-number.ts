/**
 * Get a random number between 1 and the max number
 * @param {number} max The largest number passed in by the user
 */
function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
}

export {
    getRandomNumber
};