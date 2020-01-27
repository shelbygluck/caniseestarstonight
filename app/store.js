import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Axios from 'axios'
import lune from 'lune'
const GOT_LOCATION_KEY = 'GOT_LOCATION_KEY'

const gotLocationKey = (locationKey) => ({type: GOT_LOCATION_KEY, locationKey})

const initialState = {
  locationKey: '',
  stargazeIndex: 0
}

export const fetchLocationKey = (zipCode) => async dispatch => {
    try {
        const response = await Axios.get(`https://dataservice.accuweather.com/locations/v1/search?q=${zipCode}&apikey=LtaVZV9fRcYsvz1uRBGlIFhX2hFMrqNQ`)
        const locationKey = response.data[0]['Key']
       const secondResponse = await Axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=LtaVZV9fRcYsvz1uRBGlIFhX2hFMrqNQ`)
       const cloudForecast = secondResponse.data['DailyForecasts'][0]['Night']['IconPhrase']
       const hasPrecipiation = secondResponse.data['DailyForecasts'][0]['Night']['HasPrecipitation']
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