{
  /**
   * 함수를 제네릭하게!
   * 1. checkNotNull을 Number외에 String이나 Array 등 타입별로 다 만드는 건 힘든 일일 것이다.
   */

  // 입력받은 값이 number인지 null인지 체크하는 함수 💩
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid Number!")
    }
    return arg
  }

  // 입력받은 값이 any인지 null인지 체크하는 함수
  // 타입을 특정할 수 없으니, 타입 측면에서 안전하지 않다. 💩
  function checkNotNullAnyBad(arg: any | null): number {
    if (arg == null) {
      throw new Error("not valid Number!")
    }
    return arg
  }

  // 들어온 값에 따라 그때그때 타입이 결정됨 (동적 타입과 동일하지 않나?) ✅
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid Number!")
    }
    return arg
  }

  const num: number = checkNotNull(20)
  const boal: boolean = checkNotNull(true)
  // Error 🚫
  // const boal: string = checkNotNull(true)
  console.log(num)
  console.log(boal)
}
