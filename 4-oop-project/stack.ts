{
  type Data = string | number

  interface Inode {
    prevNode: Inode | null
    data: Data
  }
  class Node implements Inode {
    constructor(public data: Data, public prevNode: Inode | null = null) {}
  }

  interface Istack {
    push(item: Data): void
    pop(): Data | null
    peak(): Inode | null
  }

  class Stack implements Istack {
    private size: number = 0
    private head: Inode | null = null
    constructor(data: Data) {
      this.head = new Node(data)
      this.size += 1
    }

    peak(): Inode | null {
      return this.head
    }

    private isEmpty(): boolean {
      return this.size === 0
    }

    push(data: Data) {
      const prevNode = this.head
      this.head = new Node(data, prevNode)
      this.size += 1
    }

    pop(): Data | null {
      if (this.isEmpty()) {
        throw new Error("빈 배열에서 값을 뺄 수 없습니다.")
      }
      const data = this.head?.data || null
      this.head = this.head?.prevNode || null
      this.size -= 1
      return data
    }
  }

  const stack = new Stack("data1")
  console.log(stack)
  stack.push("data2")
  console.log(stack)
  stack.push("data3")
  console.log(stack)
  console.log(stack.pop())
  console.log(stack)
  console.log(stack.pop())
  console.log(stack)
  console.log(stack.pop())
  console.log(stack)
  console.log(stack.pop())
  console.log(stack)
}
