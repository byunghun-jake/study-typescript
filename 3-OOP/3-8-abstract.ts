{
  /**
   * Abstract(추상화)
   * 1. 여러 자식 컴포넌트를 만들 계획이고, 공통된 내용을 부모 클래스에서 관리하려고 할 때 사용
   * 2. 자식 클래스에서 오버라이딩을 통해 함수를 변경해야 할 때, 실수를 방지할 수 있다. (super를 빼먹는 경우)
   * abstract로 정의된 컴포넌트는 직접 인스턴스를 생성할 수 없다.
   * 자식 컴포넌트마다 변경될 요소는 abstract를 붙여, 추상화한다.
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

  // Abstract 클래스
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7
    constructor(private coffeeBeans: number) {}

    grindBeans(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`)
      }
      console.log(`Grinding beans for ${shots}`)
    }

    preheat() {
      console.log(`Heating up...`)
    }

    // 자식 클래스마다 달라질 메서드 지정
    protected abstract extract(shots: number): Coffee

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

    protected extract(shots: number) {
      console.log(`Extracting ${shots}shots of coffee☕`)
      return {
        name: "에스프레소",
        shots,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(100),
    new CaffeLatteMachine(100),
  ]

  machines.forEach((machine) => {
    console.log("-----------------------------------")
    machine.makeCoffee(3)
  })
}
