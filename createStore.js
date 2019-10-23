
function redecer(state, action) {
  switch(action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const createStore = function (redecer, initState) {
  let state = initState
  let listeners = []
  function subscribe(listener) {
    listeners.push(listener)
  }
  function getState() {
    return state
  }
  function dispatch(action) {
    state = redecer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  return {
    subscribe,
    getState,
    dispatch
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

// store.dispatch({
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


let store = createStore(redecer, initState)

store.subscribe(function() {
  console.log(store.getState().count)
})

store.dispatch({type: 'INCREMENT'})

store.dispatch({type: 'INCREMENT'})

store.dispatch({type: 'DECREMENT'})

store.dispatch({type: 'DECREMENT'})