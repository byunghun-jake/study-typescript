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

  // ๐ฉ๐ฉ๐ฉ๐ฉ
  // ์ธ๋ถ์ ์ธ ํ์์ ์ธ์๋ก ๋ฐ์์ ์ถ์์ ์ธ ํ์์ผ๋ก ๋ค์ ๋ฆฌํดํจ
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
  // pay ํจ์๋ฅผ ๊ฑฐ์น๊ณ ๋ ๋ค workFullTime์ด ์ฌ๋ผ์ก๋ค.
  // interface์ ๋ช์๋์ง ์์ ๋ฉ์๋๊ฐ ์ฌ๋ผ์ง ๊ฒ!!!
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
   * ํ์์ ๋ณด์ฅํ๋ฉฐ, ๋ฒ์ฉ์ ์ธ ํจ์ ๋ง๋ค๊ธฐ
   */

  const obj = {
    name: "๊น๋ณํ",
    age: 30,
  }

  const obj2 = {
    name: "์ํธํ",
    age: 24,
  }

  function getValue<T, K extends keyof T>(o: T, key: K): T[K] {
    return o[key]
  }

  console.log(getValue(obj, "name"))
  console.log(getValue(obj2, "age"))
}
