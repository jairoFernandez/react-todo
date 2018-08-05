export default function userReducer(
  state = {
    users: [],
    todos: [],
    user: {}
  },
  action
) {
  let _state = Object.assign({}, state);

  switch (action.type) {
    case "CREATE_USER":
      return [...state, Object.assign({}, action.user)];
    case "LIST_USERS":
      _state.users = action.users;
      return _state;
    case "LIST_USERS_TODOS":
      _state.todos = action.todos;
      return _state;
    case "INFO_USER":
        _state.user = action.user;
        return _state;
    default:
      return state;
  }
}
