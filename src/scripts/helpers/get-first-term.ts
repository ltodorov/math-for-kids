import { TermProps } from "@scripts/types";
import { getRandomNumber } from "./get-random-number";

interface GetFirstTermProps extends TermProps {
    max: number;
}

function getFirstTerm(props: GetFirstTermProps): number {
    return typeof props.secondTerm === "undefined" && props.firstTerm
        || getRandomNumber(props.max);
}

export {
    GetFirstTermProps,
    getFirstTerm
};