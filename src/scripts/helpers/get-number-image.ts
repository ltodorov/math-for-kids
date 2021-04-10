import i0 from "@images/numbers/0.svg";
import i1 from "@images/numbers/1.svg";
import i2 from "@images/numbers/2.svg";
import i3 from "@images/numbers/3.svg";
import i4 from "@images/numbers/4.svg";
import i5 from "@images/numbers/5.svg";
import i6 from "@images/numbers/6.svg";
import i7 from "@images/numbers/7.svg";
import i8 from "@images/numbers/8.svg";
import i9 from "@images/numbers/9.svg";

const images: string[] = [i0, i1, i2, i3, i4, i5, i6, i7, i8, i9];
const imagesLen: number = images.length;

/**
 * Get a random number image
 * @returns {string} path to the image
 */
function getNumberImage(): string {
    return images[Math.floor(Math.random() * imagesLen)];
}

export {
    getNumberImage
};