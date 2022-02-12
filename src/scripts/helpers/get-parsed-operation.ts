import { ArithmeticOperation } from "@scripts/models/exercise";
import { isArithmeticOperation } from "./is-arithmetic-operation";

function getParsedOperation(location: Location): keyof ArithmeticOperation {
    const parsedOperation = location.hash.slice(1);
    return isArithmeticOperation(parsedOperation) ? parsedOperation : "addition";
}

export {
    getParsedOperation,
};