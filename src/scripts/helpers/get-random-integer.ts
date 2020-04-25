const MAX_TWO_DIGITS = 99;

/**
 * Get a random integer between 0 and the lowest-valued number
 * among max and MAX_TWO_DIGITS
 * @param {number} max The largest number passed in by the user
 */
export function getRandomInteger(max: number): number {
    return Math.ceil(Math.random() * Math.min(max, MAX_TWO_DIGITS));
}