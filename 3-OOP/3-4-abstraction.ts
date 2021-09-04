{
  /**
   * Interface
   * 여러 인터페이스를 구현하도록 지정할 수 있다.
   */
  type Coffee = {
    name: string
    shots: number
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee
    refillCoffee(beans: number): void
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): Coffee
    refillCoffee(beans: number): void
    clear(): void
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7

    private constructor(private name: string, private coffeeBeans: number) {
      this.name = name
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine("커피머신", coffeeBeans)
    }

    grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`)
      }
      console.log(`Grinding beans for ${shots}`)
    }

    preheat() {
      console.log(`Heating up...`)
    }

    extract(shots: number): Coffee {
      console.log(`Extracting ${shots}shots of coffee☕`)
      return {
        name: "에스프레소",
        shots,
      }
    }

    makeCoffee(shots: number): Coffee {
      this.grindBeans(shots)
      this.preheat()
      return this.extract(shots)
    }

    refillCoffee(beans: number) {
      if (beans <= 0) {
        throw new Error("value for beans should be greater than 0")
      }
      this.coffeeBeans += beans
      console.log(`남은 원두 양: ${this.coffeeBeans}`)
    }

    clear() {
      console.log(`Cleaning the machine`)
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
    }
  }

  class Pro {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots)
      console.log(coffee)
      this.machine.clear()
    }
  }

  // 클래스를 타입으로 지정한 경우
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(100)
  // 접근 가능 함수: makeCoffee, refillCoffee, grindBeans, preheat, extract

  // 인터페이스를 타입으로 지정한 경우
  // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(100)
  // 접근 가능 함수: makeCoffee, refillCoffee

  // 동일한 기계라도, 유저에 따라 다른 기능을 구현할 수도 있다.
  const ama = new AmateurUser(maker)
  ama.makeCoffee()
  const pro = new Pro(maker)
  pro.makeCoffee(3)
}
