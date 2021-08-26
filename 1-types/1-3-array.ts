{
  // Array
  // 배열을 정의하는 방식에는 2가지가 있다.
  const fruits: string[] = ["토마토", "바나나"]
  const scores: Array<number> = [1, 2, 3, 4]
  // 차이점
  // - readonly 사용 가능
  function printArray(fruits: readonly string[]) {
    // fruits.push("딸기")    // 'readonly'에 의해 읽기만 가능하다.
    console.log(fruits)
  }
  // - readonly 사용 불가
  // function printArray2(fruits: readonly Array<string>) {   // 'readonly' 형식 한정자는 배열 및 튜플 리터럴 형식에서만 사용 가능
  //   console.log(fruits)
  // }

  // Tuple 💩
  // 서로 다른 타입을 함께 가질 수 있는 배열
  let student: [string, number]
  student = ["김병훈", 123]
  console.log(student[0])   // 김병훈
  console.log(student[1])   // 123
  // 인덱스를 사용하여 접근하기 때문에 권장하지 않음
  // 대체: interface, type alias, class
}