{
  type ToDo = {
    title: string
    description: string
    label: string
    priority: "high" | "low"
  }

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fieldsToUpdate,
    }
  }

  const todo: ToDo = {
    title: "Learn TypeScript",
    description: "SH",
    label: "study",
    priority: "low",
  }

  const updatedTodo = updateTodo(todo, { priority: "high" })
  console.log(updatedTodo)
}
