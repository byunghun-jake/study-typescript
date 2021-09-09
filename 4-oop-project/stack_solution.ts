{
  // Stack에 들어오는 Data의 Type 정의
  type Data = string | number

  // // 노드 클래스의 설계도 만들기
  // interface Node {
  //   readonly prev?: Node
  //   readonly value: Data
  // }

  // class NodeImpl implements Node {
  //   constructor(public value: Data, public prev?: Node) {}
  // }
  type StackNode = {
    readonly value: Data
    readonly next?: StackNode
  }

  // 스택 클래스의 설계도 만들기
  interface Stack {
    readonly size: number
    push(value: Data): void
    pop(): Data
  }

  class StackImpl implements Stack {
    // readonly를 구현하는 방법
    private _size: number = 0
    get size() {
      return this._size
    }

    private head?: StackNode
    push(value: Data) {
      const node: StackNode = {
        value,
        next: this.head,
      }
      this.head = node
      this._size += 1
    }

    pop(): Data {
      // 의도적으로 얕은 null 체크를 하였다.
      if (this.head == null) {
        throw new Error("내부에 값이 없으요")
      } else {
        const node = this.head
        this.head = node.next
        this._size -= 1
        return node.value
      }
    }
  }

  const stack = new StackImpl()
  stack.push("하")
  stack.push("히")
  stack.push("호")
  while (true) {
    console.log(stack.pop())
  }
}
