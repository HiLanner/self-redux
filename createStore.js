const createStore = function (initState) {
  let state = initState
  let listeners = []
  function subscribe(listener) {
    listeners.push(listener)
  }
  function getState() {
    return state
  }
  function changeState(action) {
    state = plan(initState, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  return {
    subscribe,
    getState,
    changeState
  }
}

// let initState = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: '',
//     description: ''
//   }
// }
 
// let store = createStore(initState)

// const getCounterChange = function () {
//   console.log(store.getState().counter)
// }

// store.subscribe(getCounterChange)

// store.changeState({
//   counter: {
//     count: 1
//   },
//   info: {
//     name: '',
//     description: ''
//   }
// })

// console.log(store.getState())


let initState = {
  count: 0
}

function plan(state, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

let store = createStore(initState)

store.subscribe(function() {
  console.log(store.getState().count)
})

store.changeState({
  count: store.getState().count + 1
})

store.changeState({
  count: store.getState().count - 1
})