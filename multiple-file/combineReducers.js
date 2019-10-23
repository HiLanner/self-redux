const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer
});

function combineReducers(reducers) {
  const keys = Object.keys(reducers)
  return function (state={}, action) {
    let newState = {}
    for(let i = 0; i < keys; i++) {
      const reducer = reducers[i]
      const newStateWithKey = reducer(state[keys[i]], action)
      newState[keys[i]] = newStateWithKey
    }
    return newState
  }
}
