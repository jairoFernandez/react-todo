export function actionToggleTodo(idTodo) {
  return {
    type: "TOGGLE_TODO",
    idTodo
  };
}

export function actionObtainTodosByUser(todos) {
  return { type: "LIST_TODO_USER", todos };
}
