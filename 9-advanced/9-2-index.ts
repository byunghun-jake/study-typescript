{
  const obj = {
    name: "김병훈",
  }
  // key를 통해 접근
  console.log(obj.name)
  // index를 통해 접근
  console.log(obj["name"])

  type Animal = {
    name: string
    age: 30
    gender: "maie" | "female"
  }
  // ✅ Type을 가져다가 쓸 수 있다.
  type Name = Animal["name"] // string
  // const text: Name = 10 // Error
  const text: Name = "홀리"
  type Gender = Animal["gender"] // 'male' | 'female'

  // ✅ Keys
  type Keys = keyof Animal
  // const key: Keys = "age"

  type Person = {
    name: string
    gender: Animal["gender"]
  }
  const person: Person = {
    gender: "female",
    name: "ㅎ?",
  }
}
