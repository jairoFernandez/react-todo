export function actionToggleTodo(idTodo) {
  return {
    type: "TOGGLE_TODO",
    idTodo
  };
}

export function actionObtainTodosByUser(todos) {
  return { type: "LIST_TODO_USER", todos };
}

export function actionAddTodo(todo) {
  return { type: "ADD_TODO", todo };
}

export function actionDeleteTodo(id){
    return { type: "DELETE_TODO", id}
}