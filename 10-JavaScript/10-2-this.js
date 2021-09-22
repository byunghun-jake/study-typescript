console.log(this)
// this => Global(Window)

function simpleFunc() {
  console.log(this)
  // this => Global(Window)
}

simpleFunc()

class Counter {
  count = 0
  increase() {
    console.log(this)
  }
}

const counter = new Counter()
counter.increase()
// this => Counter

// this가 변경되는 경우
const caller = counter.increase
caller()
// this => undefined
// 원래 this가 가리키고 있던 객체를 유지하려면?
// 1. bind를 사용하는 방법
const callerBind = counter.increase.bind(counter)
callerBind() // this => Counter
// 2. ArrowFunction을 사용하는 방법
class Counter2 {
  count = 0
  increase = () => {
    console.log(this)
  }
}
const counter2 = new Counter2()
const caller2 = counter2.increase
caller2() // this => Counter2
// 처음 선언되었을 당시에 this에 담기는 객체를 유지한다.

// 최상위에서 선언한 함수는 글로벌 객체에 등록된다.
function helloWorld() {
  console.log("Hello")
}
window.helloWorld()

// 변수는 최상위에서 선언했다고 하더라도 글로벌 객체에 등록되지 않는다.
const myName = "김병훈"
console.log(window.myName)
// 단, var로 선언한 값은 글로벌 객체에 등록된다.
var myAge = 30
console.log(window.myAge)

class Bob {}
const bob = new Bob()
bob.run = counter.increase
bob.run()
// this => Bob
// increase는 this를 출력하는 함수라는 것에 집중하자.
// 어느 자리에 있던 역할을 충실히 수행하기에 Bob을 this로 갖는 것이다.

//
