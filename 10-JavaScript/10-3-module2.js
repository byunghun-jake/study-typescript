// export default로 선언하였다면, 호출 이름을 반드시 일치시킬 필요는 없다.
// export default는 한 파일에 하나만 가능하다.
// export로 선언하였다면, 이름을 일치시켜야 한다.
// export로 선언한 것을 다른 이름으로 가져오고 싶다면, as를 사용하면 된다.
import summmmmm, { print as printMyMyMy } from "./10-3-module1.js"

console.log(summmmmm(2, 3))

// 전체를 하나의 객체에 담아 import하는 방법
// export default는 가져올 수 없다.
import * as module1 from "./10-3-module1.js"
module1.print()
