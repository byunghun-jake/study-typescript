{
  // JavaScript ❌
  function jsAdd(num1, num2) {
    return num1 + num2
  }

  // TypeScript ✅
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2
  }

  // JavaScript ❌
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100)
    })
  }

  // TypeScript ✅
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100)
    })
  }

  // JavaScript => TypeScript
  // 1. Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName)
    console.log(lastName)
  }
  printName("병훈", "김")
  printName("병훈")
  
  function printName2(firstName: string, lastName: string | undefined) {
    console.log(firstName)
    console.log(lastName)
  }
  // printName2("병훈")               // 에러 발생
  printName2("병훈", undefined)       // undefined 반드시 2개의 인자를 넣어주어야 한다.

  // 2. Default parameter
  function printMessage(message: string = "메세지를 입력하세요") {
    console.log(message)
  }
  printMessage()

  // 3. Rest parameter
  function addNumbers(...numbers: number[]): number {
    let answer: number = 0
    numbers.forEach((num: number) => answer += num)
    return answer
  }
  console.log(addNumbers(1, 2, 3, 4))
  console.log(addNumbers(1, 2, 3, 4, 100, 123))
  // console.log(addNumbers(1, 2, "3")) // 다른 타입의 값을 전달하려고 하면 에러가 발생한다.
}