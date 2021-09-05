{
  /**
   * Composition(구성요소 / 구성)
   * Favor Composition over inheritance
   * 상속의 문제점을 해결하기 위한 방안
   * 별도의 클래스를 통해 의존성 주입하여 결과물을 만들어 내는 방식
   *
   * 상속의 문제점
   * 1. 관계가 수직적이고, 상속을 받을 때 오직 한 클래스에서만 상속을 받을 수 있다.
   * 2. 부모 클래스의 수정사항이 모든 자식 클래스에게 영향을 미칠 수 있다.
   *
   * Composition의 문제점
   * 1. 기능을 위한 클래스와 너무 견고하게 연결이 되어있다는 것 (커플링)
   * 커플링이 되어있으면 뭐가 문제일까?
   * 두 개 이상의 클래스에 사용하는 경우, 내부 값이 공유될 수 있음
   *
   * 디커플링하려면?
   * 두 클래스가 소통하는 방식을 인터페이스로 정의한다.
   * 1. 기능 클래스를 정의할 때, 인터페이스 적용 (implements)
   * 2. 기능 클래스를 불러올 때, 클래스 자체를 불러오는 것이 아닌 인터페이스를 불러온다.
   *
   * 상속 없이 Composition만으로 여러 인스턴스를 생성할 수 있었다.
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

  interface MilkFronther {
    addMilk(coffee: Coffee): Coffee
  }

  interface SugarProvider {
    addSugar(coffee: Coffee): Coffee
  }

  // 우유 관련 일을 하는 클래스 생성
  class NoMilk implements MilkFronther {
    addMilk(coffee: Coffee): Coffee {
      return coffee
    }
  }

  class CheapMilkSteamer implements MilkFronther {
    private steamMilk(): void {
      console.log("Steaming some milk...")
    }

    addMilk(coffee: Coffee): Coffee {
      this.steamMilk()
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class FancyMilkSteamer implements MilkFronther {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...")
    }

    addMilk(coffee: Coffee): Coffee {
      this.steamMilk()
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFronther {
    private steamMilk(): void {
      console.log("Cold Steaming some milk...")
    }

    addMilk(coffee: Coffee): Coffee {
      this.steamMilk()
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  // 설탕 관련 일을 하는 클래스 생성
  class NoSugar implements SugarProvider {
    addSugar(coffee: Coffee): Coffee {
      return coffee
    }
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log("Getting some sugar from candy")
      return true
    }

    addSugar(coffee: Coffee): Coffee {
      const sugar = this.getSugar()
      return {
        ...coffee,
        hasSugar: sugar,
      }
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log("Getting some sugar from jar")
      return true
    }

    addSugar(coffee: Coffee): Coffee {
      const sugar = this.getSugar()
      return {
        ...coffee,
        hasSugar: sugar,
      }
    }
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7
    constructor(
      private coffeeBeans: number,
      private milk: MilkFronther,
      private sugar: SugarProvider,
    ) {}

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
      const coffee = this.extract(shots)
      const sweetCoffee = this.sugar.addSugar(coffee)
      return this.milk.addMilk(coffee)
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

  // 기능 클래스
  // Milk
  const noMilkMaker = new NoMilk()
  const cheapMilkMaker = new CheapMilkSteamer()
  const fancyMilkMaker = new FancyMilkSteamer()
  const coldMilkMaker = new ColdMilkSteamer()
  // Sugar
  const noSugar = new NoSugar()
  const candySugar = new CandySugarMixer()
  const sugar = new SugarMixer()

  // 머신 클래스
  const basicCoffeeMachine = new CoffeeMachine(50, noMilkMaker, noSugar)
  const sweetCoffeeMachine = new CoffeeMachine(50, noMilkMaker, sugar)
  const basicLatteMachine = new CoffeeMachine(50, coldMilkMaker, noSugar)
  const sweetLatteMachine = new CoffeeMachine(100, coldMilkMaker, sugar)
}
