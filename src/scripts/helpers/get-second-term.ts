import { TermProps } from "@scripts/types";
import { getRandomNumber } from "./get-random-number";

interface GetSecondTermProps extends TermProps {
    max: number;
}

function getSecondTerm(props: GetSecondTermProps): number {
    return props.secondTerm || getRandomNumber(props.max);
}

export {
    GetSecondTermProps,
    getSecondTerm
};