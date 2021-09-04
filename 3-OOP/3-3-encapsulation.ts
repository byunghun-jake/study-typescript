{
  /**
   * maker.coffeeBeans = -100과 같이 유효하지 않은 값을 넣을 수 있다.
   * Encapsulation을 통해 외부에서 접근이 불가능하도록 만들어 줄 수 있다.
   * public: 기본값
   * private: 외부에서 확인할 수 없도록 함
   * protected: 상속받은 자식 클래스에서만 접근할 수 있다.
   *
   * Getter, Setter
   * 변경된 값이 반영된 결과를 리턴받을 수 있다.
   * Computed와 비슷한 것 같다.
   * setter를 사용해서, 그 값을 인스턴스에 담을 때 특정한 로직을 따로 수행하게 할 수 있을 것 같다. (분리)
   */
  type Coffee = {
    name: string
    shots: number
  }

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7
    private coffeeBeans: number
    name: string

    private constructor(name: string, coffeeBeans: number) {
      this.name = name
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine("커피머신", coffeeBeans)
    }

    makeCoffee(shots: number): Coffee {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("머신에 원두가 부족합니다.")
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
      console.log(`에스프레소 ${shots}샷 추출이 완료되었습니다.`)
      console.log(`남은 원두 양: ${this.coffeeBeans}`)
      return {
        name: "에스프레소",
        shots,
      }
    }

    refillCoffee(beans: number) {
      if (beans <= 0) {
        throw new Error("value for beans should be greater than 0")
      }
      this.coffeeBeans += beans
      console.log(`남은 원두 양: ${this.coffeeBeans}`)
    }
  }

  // 가능
  const maker = CoffeeMachine.makeMachine(200)
  // 불가: private constructor로 인하여 사용불가 처리
  // const maker = new CoffeeMachine("내 첫 커피머신", 20)

  // maker.coffeeBeans = -34
  // invalid
  // maker.refillCoffee(10)
  // valid

  class User {
    firstName: string
    private lastName: string

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      // this.fullName = `${this.firstName} ${this.lastName}`
    }
  }

  class User2 {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge: number = 4
    get age(): number {
      return this.internalAge
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("value for age should be greater than 0")
      }
    }

    constructor(public firstName: string, private lastName: string) {}
  }

  const user = new User2("병훈", "김")
  console.log(user)
  user.firstName = "두둥"
  // setter
  user.age = 6
  console.log(user)
}
