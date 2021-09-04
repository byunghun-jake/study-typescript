{
  type Coffee = {
    name: string
    shots: number
  }

  class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT: number = 7
    // class level
    // : Object마다 만들어지지 않는다. (클래스 차원에서 관리)

    // BEANS_GRAMM_PER_SHOT: number = 7
    // instance(object) level
    // :

    // type 선언
    name: string
    coffeeBeans: number

    constructor(name: string, coffeeBeans: number) {
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

    refillCoffee(gram: number) {
      this.coffeeBeans += gram
      console.log(`남은 원두 양: ${this.coffeeBeans}`)
    }
  }

  const makerByClass = new CoffeeMachine("내 첫 커피머신", 20)
  const makerByStatic = CoffeeMachine.makeMachine(200)
  console.log(makerByClass)
  console.log(makerByStatic)
}
