import { Expression, TermProps } from "@scripts/types";
import { getOperator } from "./get-operator";
import { getMaxNumber } from "./get-max-number";
import { getFirstTerm } from "./get-first-term";
import { getSecondTerm } from "./get-second-term";

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

export {
    GetExpressionProps,
    getExpression
};