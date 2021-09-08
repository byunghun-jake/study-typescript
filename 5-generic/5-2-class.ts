{
  /**
   * 클래스를 제네릭하게!
   */

  interface Either<L, R> {
    left: () => L
    right: () => R
  }

  class EitherImpl<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left() {
      return this.leftValue
    }
    right() {
      return this.rightValue
    }
  }

  const either = new EitherImpl("asdf", true)
  console.log(either.left()) // "asdf"
  console.log(either.right()) // true
}
