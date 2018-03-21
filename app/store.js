import {createStore} from 'redux'

// Still need:
//  - action type
//  - action creator
//  - initial state
//  - reducer

const initialState = {
  // what should initialState.count be?
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
