/**
 * Let's make a calculator 🧮
 * 1. UNION 사용
 */

type Operator = "add" | "substract" | "multiply" | "divide" | "remainder"

/**
 * Calculate two numbers
 * @param op 연산자
 * @param a 피연산자 1
 * @param b 피연산자 2
 * @returns Results of the calculated number
 *
 * @example
 * ```typescript
 * calculate('add', 1, 2)
 * >>> 3
 * ```
 *
 * ```typescript
 * calculate('divide', 2, 0);
 * >>> Error: zeroDivisionError
 * ```
 */
function calculate(op: Operator, a: number, b: number): number {
  switch (op) {
    case "add": {
      return a + b
    }
    case "divide": {
      if (b === 0) {
        throw Error("zeroDivisionError")
      }
      return a / b
    }
    case "multiply": {
      return a * b
    }
    case "remainder": {
      return a % b
    }
    case "substract": {
      return a - b
    }
    default: {
      throw Error("unknown operator")
    }
  }
}

console.log(calculate("add", 1, 3)) // 4
console.log(calculate("substract", 3, 1)) // 2
console.log(calculate("multiply", 4, 2)) // 8
console.log(calculate("divide", 4, 2)) // 2
console.log(calculate("remainder", 5, 2)) // 1
