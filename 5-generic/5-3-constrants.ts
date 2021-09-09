{
  interface Employee {
    pay(): void
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("Pay for FullTimeEmployee")
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("Pay for PartTimeEmployee")
    }

    workPartTime() {}
  }

  // 💩💩💩💩
  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴함
  function payBad(employee: Employee): Employee {
    employee.pay()
    return employee
  }

  const puppy = new FullTimeEmployee()
  const bunny = new PartTimeEmployee()
  puppy.workFullTime()
  bunny.workPartTime()
  const puppyAfterPay = payBad(puppy)
  const bunnyAfterPay = payBad(bunny)
  // pay 함수를 거치고난 뒤 workFullTime이 사라졌다.
  // interface에 명시되지 않은 메서드가 사라진 것!!!
  // puppyAfterPay.workFullTime()

  // function pay<E extends Employee>(employee: E): E {
  //   employee.pay()
  //   return employee
  // }
  const pay = <E extends Employee>(employee: E): E => {
    employee.pay()
    return employee
  }

  const p = new FullTimeEmployee()
  const pAfterPay = pay(p)
  pAfterPay.workFullTime()

  /**
   * 타입을 보장하며, 범용적인 함수 만들기
   */

  const obj = {
    name: "김병훈",
    age: 30,
  }

  const obj2 = {
    name: "요호홍",
    age: 24,
  }

  function getValue<T, K extends keyof T>(o: T, key: K): T[K] {
    return o[key]
  }

  console.log(getValue(obj, "name"))
  console.log(getValue(obj2, "age"))
}
