{
  type PositionType = {
    x: number
    y: number
  }

  interface PositionInterface {
    x: number
    y: number
  }

  // ✅ type과 interface 둘 다 할 수 있는 것
  // 1. object를 정의하고 타입을 할당할 수 있다.
  const objByType: PositionType = {
    x: 0,
    y: 0,
  }
  const objByInterface: PositionInterface = {
    x: 0,
    y: 0,
  }

  // 2. class
  class Pos1 implements PositionType {
    x: number
    y: number
  }
  class Pos2 implements PositionInterface {
    x: number
    y: number
  }

  // 3. Extends
  type ZPositionType = PositionType & { z: number }
  interface ZPositionInterface extends PositionInterface {
    z: number
  }

  // ✅ OnlyInterface
  // 1. Merge
  // type은 중복해서 선언할 수 없다.
  interface student {
    name: string
    age: number
  }
  interface student {
    sex: string
  }
  const student1: student = {
    age: 30,
    name: "김병훈",
    sex: "남",
  }

  // ✅ Only Type
  // Type aliases can use computed properties
  type Person = {
    name: string
    age: number
  }
  type Name = Person["name"]
  type NumberType = number
  // Union
  type Direction = "right" | "left"
}
