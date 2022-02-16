interface ArithmeticOperation {
    addition: "+";
    subtraction: "-";
    multiplication: "*";
    division: "/";
}

interface ExerciseProps {
    /**
     * Arithmetic operation
     */
    operation: string;

    /**
     * Constant value of the second term
     */
    term?: number;

    /**
     * Terms maximum value
     */
    max?: number;
}

interface Exercise {
    /**
     * Arithmetic operation
     */
    operation: keyof ArithmeticOperation;

    /**
     * Arithmetic operator
     */
    operator: ArithmeticOperation[keyof ArithmeticOperation];

    /**
     * First number of the expression
     */
    term1: number;

    /**
     * Second number of the expression
     */
    term2: number;

    /**
     * Result of the expression
     */
    result: number;
}

type Formula = (term1: number, term2: number) => number;

export type {
    ArithmeticOperation,
    ExerciseProps,
    Exercise,
    Formula,
};
