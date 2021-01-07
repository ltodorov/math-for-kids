import { Expression } from "@scripts/types";
import { getOperator } from "./get-operator";
import { getMaxNumber } from "./get-max-number";
import { getRandomNumber } from "./get-random-number";

interface TermProps {
    firstTerm?: number;
    secondTerm?: number;
}

interface GetExpressionProps extends TermProps {
    operatorIndex?: number;
    maxNumber?: number;
}

/**
 * Get a random expression
 * @param {Object} props
 * @param {number} [operatorIndex] Index of the operator ["+", "-", "*"]
 * @param {number} [maxNumber] The maximum number that can be generated
 * @param {number} [firstTerm] The constant for the first term
 * @param {number} [secondTerm] The constant for the second term
 * @returns {Expression}
 */
function getExpression(props: GetExpressionProps = {}): Expression {
    const operator = getOperator(props.operatorIndex);
    const isSubstraction = operator === "-";
    const max = getMaxNumber(props.maxNumber);
    const term1 = getFirstTerm({
        max,
        firstTerm: props.firstTerm,
        secondTerm: props.secondTerm
    });
    const term2 = getSecondTerm({
        max,
        firstTerm: props.firstTerm,
        secondTerm: props.secondTerm
    });

    if (isSubstraction && term1 < term2) {
        return getExpression(props);
    }

    return {
        term1,
        term2,
        operator
    };
}

interface GetFirstTermProps extends TermProps {
    max: number;
}

function getFirstTerm(props: GetFirstTermProps): number {
    return typeof props.secondTerm === "undefined" && props.firstTerm
        || getRandomNumber(props.max);
}

interface GetSecondTermProps extends TermProps {
    max: number;
}

function getSecondTerm(props: GetSecondTermProps): number {
    return props.secondTerm || getRandomNumber(props.max);
}

export {
    GetExpressionProps,
    getExpression
};