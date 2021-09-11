{
  /**
   * 스택에 어떤 데이터든지 받을 수 있도록 제네릭을 사용해보자!
   */

  // 스택 클래스의 설계도 만들기
  interface Stack<T> {
    readonly size: number
    push: (value: T) => void
    pop: () => T
  }

  type StackNode<T> = {
    readonly value: T
    readonly next?: StackNode<T>
  }

  class StackImpl<T> implements Stack<T> {
    // readonly를 구현하는 방법
    private _size: number = 0
    get size() {
      return this._size
    }
    private head?: StackNode<T>

    push(value: T) {
      const node = {
        value,
        next: this.head,
      }
      this.head = node
      this._size += 1
    }

    pop(): T {
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

  const stack = new StackImpl<string>()
  stack.push("하")
  stack.push("히")
  stack.push("호")
  while (stack.size !== 0) {
    console.log(stack.pop())
  }

  const stack2 = new StackImpl<number>()
  stack2.push(1)
  stack2.push(2)
  stack2.push(3)
  while (stack2.size !== 0) {
    console.log(stack2.pop())
  }
}
