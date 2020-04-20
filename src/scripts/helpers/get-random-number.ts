const MAX_TWO_DIGITS = 99;

/**
 * Get a random number between 0 and
 * the lowest-valued number among max and MAX_TWO_DIGITS
 * @param max {number} The largest number passed in by the user
 */
function getRandomNumber(max: number): number {
    return Math.ceil(Math.random() * Math.min(max, MAX_TWO_DIGITS));
}

export default getRandomNumber;