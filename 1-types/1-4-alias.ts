{
  /**
   * Type Aliases
   */
  type Text = string
  const name: Text = "김병훈"
  const address: Text = "군포"
  type Num = number

  type Student = {
    name: string
    age: number
  }
  const student: Student = {
    name: "김병훈",
    age: 30,
  }

  /**
   * String Literal Types
   */
  type Name = "name"
  let ellieName: Name
  // ellieName = "asdf"   // error
  ellieName = "name" // 동일한 내용이 들어가야 한다.

  type JSON = "json"
  const json: JSON = "json"

  type Boal = true
  // const isCat: Boal = false
}
