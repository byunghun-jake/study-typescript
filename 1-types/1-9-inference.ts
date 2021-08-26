{
  /**
   * Type Interference
   *
   * 타입스크립트가 알아서 타입을 추론해주지만, 사람이 보기에 명확하지 않기 때문에
   * 정확히 명시하는 것이 좋을 것이라고 생각함
   */

  let text = "hello"
  // 값이 할당되면서, 타입 정의를 생략해도 되는 경우
  // text = 1 // Error가 발생한다.

  function printMessage(message = "") {
    console.log(message)
  }
  printMessage("10)")

  function add(x: number, y: number): number {
    return x + y
  }

  const result: number = add(1, 2)
}
