import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import ConnectedMain from './Main'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedMain />
  </Provider>,
  document.getElementById('main')
)