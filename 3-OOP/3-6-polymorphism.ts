{
  /**
   * Polymorphism
   * optional type(?:)
   * 하나의 부모 클래스를 가지고, 다양한 자식 클래스를 만들 수 있음
   * 공통된 메서드를 통해 작업을 수행할 수 있음
   */
  type Coffee = {
    name: string
    shots: number
    hasMilk?: boolean
    hasSugar?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee
    refillCoffee(beans: number): void
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7
    constructor(private coffeeBeans: number) {}

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
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
        hasMilk: false,
        hasSugar: false,
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

  // 상속을 이용하여 카페라떼머신 만들기
  class CaffeLatteMachine extends CoffeeMachine {
    // 자식 클래스에서 선언한 별도의 메서드
    private steamMilk(): void {
      console.log("Steaming some milk...")
    }

    makeCoffee(shots: number): Coffee {
      // 부모에서 만든 작동방식을 사용하고 싶다면?
      const coffee = super.makeCoffee(shots)
      this.steamMilk()
      return {
        ...coffee,
        name: "카페라떼",
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): Coffee {
      const coffee = super.makeCoffee(shots)
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(100),
    new CaffeLatteMachine(100),
    new SweetCoffeeMaker(100),
    new CoffeeMachine(100),
    new CaffeLatteMachine(100),
    new SweetCoffeeMaker(100),
  ]

  machines.forEach((machine) => {
    console.log("-----------------------------------")
    machine.makeCoffee(3)
  })
}
