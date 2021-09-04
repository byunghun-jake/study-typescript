{
  type CoffeeMachine = {
    name: string
    restCoffeeBeans: number
  }

  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  const coffeeMachine: CoffeeMachine = {
    name: "커피머신",
    restCoffeeBeans: 0,
  }

  const BEANS_GRAMM_PER_SHOT: number = 7

  function refillCoffee(machine: CoffeeMachine, beanGramm: number) {
    machine.restCoffeeBeans += beanGramm
    console.log(`커피원두가 채워졌습니다. 남은 양: ${machine.restCoffeeBeans}g`)
  }

  function makeCoffee(machine: CoffeeMachine, shots: number): CoffeeCup {
    if (machine.restCoffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error(
        `원두 양이 부족합니다. 남은 원두 양: ${machine.restCoffeeBeans}g`,
      )
    }
    machine.restCoffeeBeans -= shots * BEANS_GRAMM_PER_SHOT
    console.log(`${shots}샷 에스프레소 추출이 완료되었습니다`)
    console.log(`남은 원두 양: ${machine.restCoffeeBeans}g`)
    return {
      shots,
      hasMilk: false,
    }
  }

  refillCoffee(coffeeMachine, 14)
  makeCoffee(coffeeMachine, 2)
}
