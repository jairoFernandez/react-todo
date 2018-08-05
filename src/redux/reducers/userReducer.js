export default function userReducer(
  state = {
    users: [],
    user: {}
  },
  action
) {
  let _state = Object.assign({}, state);

  switch (action.type) {
    case "CREATE_USER":
      _state.users = state.users.concat([action.user]); //[...state, Object.assign({}, action.user)];
      return _state;
    case "LIST_USERS":
      _state.users = action.users;
      return _state;    
    case "INFO_USER":
      _state.user = action.user;
      return _state;
    default:
      return state;
  }
}
