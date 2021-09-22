// const x = {}
// const y = {}
// console.log(x)
// console.log(y)
// console.log(y.toString())
// console.log(x.__proto__ === y.__proto__) // true

// const array = []
// console.log(array)
// console.log(array.__proto__)
// console.log(array.__proto__.__proto__ == x.__proto__) // true
// // array => Array(Proto) => Object(Proto)

function CoffeeMachine(beans) {
  // Instance member level
  // beans, makeCoffee
  this.beans = beans
  // this.makeCoffee = (shots) => {
  //   console.log(`making... ${shots}`)
  // }
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log(`업데이트 된 makeCoffee`)
}

const machine1 = new CoffeeMachine(10)
const machine2 = new CoffeeMachine(20)
console.log(machine1)
console.log(machine2)

function LatteMachine(milk) {
  this.milk = milk
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype)

const lm = new LatteMachine(123)
console.log(lm)
// lm => LatteMachine(Proto) => CoffeeMachine(Proto) => Object(Proto)
