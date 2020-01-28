import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Axios from 'axios'
import {getStargazeIndex} from './stargazeFunc.js'

const ADDED_DATA = 'ADDED_DATA'

const addData = (locationKey, finalVis) => ({type: ADDED_DATA, locationKey, finalVis})

const initialState = {
  locationKey: '',
  finalVis: {},
}

export const fetchLocationKey = (zipCode) => async dispatch => {
    try {
       const response = await Axios.get(`https://dataservice.accuweather.com/locations/v1/search?q=${zipCode}&apikey=ATtTSfqDwl8ydkGnpcFsXQ0jgevBeZDu`)
       const locationKey = response.data[0]['Key']
       const secondResponse = await Axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=ATtTSfqDwl8ydkGnpcFsXQ0jgevBeZDu&details=true`)
       const cloudIndex = secondResponse.data['DailyForecasts'][0]['Night']['CloudCover']
       const hasPrecipitation = secondResponse.data['DailyForecasts'][0]['Night']['HasPrecipitation']
       console.log(cloudIndex)
       const finalVis = getStargazeIndex(cloudIndex, hasPrecipitation)
       console.log(finalVis)
       return dispatch(addData(locationKey, finalVis))
    } catch(error) {
        console.error(error)
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_DATA:
        return {...state, locationKey: action.locationKey, finalVis: action.finalVis}
    default:
      return state
  }
}

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store