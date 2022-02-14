import { Accent } from "@scripts/models/accent";
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

const accents: Accent[] = [
    [i0, "#ed9a69"], // #e56c25
    [i1, "#ffd05e"], // #ffba11
    [i2, "#eed8c5"], // #e2bd9e
    [i3, "#b1bc56"], // #848d38
    [i4, "#d36664"], // #b63734
    [i5, "#be99b5"], // #744a6a
    [i6, "#adafa8"], // #878a80
    [i7, "#b5ba53"], // #858937
    [i8, "#ea9368"], // #e06325
    [i9, "#f1b363"], // #eb911d
];
const accentsLen: number = accents.length;

/**
 * Returns an infinite iterator for getting the accent image and color
 * @yields The next tuple with values for accent image and color
 */
function* getAccent(): Generator<Accent, Accent, Accent> {
    let index = 1;
    while (true) {
        index = index < accentsLen - 1 ? index + 1 : 0;
        yield accents[index];
    }
}

export {
    getAccent,
};