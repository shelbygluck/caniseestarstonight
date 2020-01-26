import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Axios from 'axios'
const GOT_LOCATION_KEY = 'GOT_LOCATION_KEY'

const gotLocationKey = (locationKey) => ({type: GOT_LOCATION_KEY, locationKey})

const initialState = {
  locationKey: '',
}

export const getLocationKey = () => async dispatch => {
    try {
        const data = await Axios.get('https://dataservice.accuweather.com/locations/v1/search?q=10004&apikey=LtaVZV9fRcYsvz1uRBGlIFhX2hFMrqNQ')
        const locationKey = data[0]['Key']
        return dispatch(gotLocationKey(locationKey))
    } catch(error) {
        console.error(error)
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_LOCATION_KEY:
        return {...state, locationKey: action.locationKey}
    default:
      return state
  }
}


const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store