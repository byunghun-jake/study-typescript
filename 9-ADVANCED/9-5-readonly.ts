{
  type ToDo = {
    title: string
    description: string
  }

  function display1(todo: ToDo) {
    todo.title = "이건 바꿔도 문제가 생기지 않아"
  }

  function display(todo: Readonly<ToDo>) {
    todo.title = "이름을 막 바꾸면 안돼!"
  }
}
