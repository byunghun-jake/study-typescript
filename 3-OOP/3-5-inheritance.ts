{
  /**
   * Inheritance
   * constructor가 private인 경우에는 상속할 수 없다.
   * 자식 클래스에서 constructor를 정의하는 경우에는 반드시 super()를 사용해야 한다.
   * super ==> 부모 클래스의 constructor
   * 자식 클래스에서 메서드를 따로 선언할 수 있음
   * 부모 클래스의 함수를 overriding 할 때, 부모 클래스의 함수를 사용하고 싶다면, super.method()를 사용한다.
   */
  type Coffee = {
    name: string
    shots: number
    hasMilk: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): Coffee
    refillCoffee(beans: number): void
  }

  // class CaffeLatteMachine {
  //   private static BEANS_GRAMM_PER_SHOT: number = 7
  //   private constructor(private coffeeBeans: number) {}

  //   static makeMachine(coffeeBeans: number): CaffeLatteMachine {
  //     return new CaffeLatteMachine(coffeeBeans)
  //   }

  //   grindBeans(shots: number) {
  //     if (this.coffeeBeans < shots * CaffeLatteMachine.BEANS_GRAMM_PER_SHOT) {
  //       throw new Error(`Not enough coffee beans!`)
  //     }
  //     console.log(`Grinding beans for ${shots}`)
  //   }

  //   preheat() {
  //     console.log(`Heating up...`)
  //   }

  //   extract(shots: number): Coffee {
  //     console.log(`Extracting ${shots}shots of coffee☕`)
  //     return {
  //       name: "에스프레소",
  //       shots,
  //       hasMilk: false,
  //     }
  //   }

  //   makeCoffee(shots: number): Coffee {
  //     this.grindBeans(shots)
  //     this.preheat()
  //     const coffee = this.extract(shots)
  //     return {
  //       ...coffee,
  //       name: "카페라떼",
  //       hasMilk: true,
  //     }
  //   }

  //   refillCoffee(beans: number) {
  //     if (beans <= 0) {
  //       throw new Error("value for beans should be greater than 0")
  //     }
  //     this.coffeeBeans += beans
  //     console.log(`남은 원두 양: ${this.coffeeBeans}`)
  //   }

  //   clear() {
  //     console.log(`Cleaning the machine`)
  //   }
  // }

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

  const coffeeMachine = new CoffeeMachine(100)
  const latteMachine = new CaffeLatteMachine(100)
  console.log(coffeeMachine)
  console.log(latteMachine)
  const coffee = latteMachine.makeCoffee(2)
  console.log(coffee)
}
