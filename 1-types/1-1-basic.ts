{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, arry ...
   */

  // number
  const num:number = 0.04
  
  // string
  const str:string = "하하 나는 문자"

  // boolean
  const boal:boolean = true

  // undefined: 값이 있는지, 없는지 모른다.
  let age: number | undefined
  age = undefined
  age = 1
  function find(): number | undefined {
    return undefined
  }

  // null: 비어있다는 것을 명시적으로 나타내는 용도
  let person: string | null
  person = "하하"

  // unknown 👎
  let notSure: unknown = 0
  notSure = "하"
  notSure = true

  // any 👎
  let anything: any = 0
  anything = "이것도 된다고?"
  anything = false

  // void: 함수의 리턴값이 존재하지 않을 때
  function print(): void {
    console.log("hello")
    // return
  }
  let unusable: void = undefined  // 👎

  // never: 리턴하지 않는 함수임을 명시하기 위해
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message)
    // while (true) {
    //    ...
    // }
  }

  // object 👎
  let obj: object
  function acceptSomeObject(obj: object) {
    return obj
  }
  acceptSomeObject({ name: "김병훈" })
  acceptSomeObject([1, 2, 3])
}