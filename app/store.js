import {createStore} from 'redux'

// Still need:
//  - action type
//  - action creator
//  - initial state
//  - reducer

const initialState = {
  // what should be on our initial state?
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
