export default function todoReducer(state = [], action) {
  let _state = Object.assign({}, state);

  switch (action.type) {
    case "LIST_TODO_USER":
      _state = action.todos;
      return _state.reverse();
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        if (todo.id === Number.parseInt(action.idTodo)) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case "ADD_TODO":
      _state = [...state, action.todo];
      return _state;
    case "DELETE_TODO":
      _state = state.filter((todo, index) => {
        if (todo.id !== Number.parseInt(action.id)) {
          return todo;
        }
      });
      return _state;
    default:
      return state;
  }
}
