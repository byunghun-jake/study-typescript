{
  // Map
  // 기본 틀을 유지한 채로 내부 속성을 변화하고 싶을 떄 사용한다.
  // ReadOnly or Optional

  type Video = {
    title: string
    author: string
  }

  type Animal = {
    name: string
    age: number
  }

  // Optional
  // 새로운 배열을 만들어내는 map 메서드와 마찬가지
  // T의 key => P
  // T[P] => P에 대응하는 value
  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
  }

  type VideoOptional = Optional<Video>
  const video1: VideoOptional = {
    author: "김병훈",
    title: "하하",
  }

  const animal1: Optional<Animal> = {
    age: 4,
    name: "히히",
  }

  const animal2: Optional<Animal> = {
    name: "이름만 있어도 된다",
  }

  // type VideoOptional = {
  //   title?: string
  //   author?: string
  // }

  // ReadOnly
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
  }
  type VideoReadOnly = ReadOnly<Video>

  const video2: VideoReadOnly = {
    author: "읽기만 해",
    title: "읽기만 하라고",
  }
  // type VideoReadOnly = {
  //   readonly title: string
  //   readonly author: string
  // }

  // ✅ 예제
  // 값(value)으로 null을 허용
  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  }
  const videoNullable: Nullable<Video> = {
    author: null,
    title: null,
  }

  type Proxy<T> = {
    get(): T
    set(value: T): void
  }

  // 값을 Proxy Type으로 감싸준다.
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  }
}
