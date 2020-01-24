import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      zip: 10004,
      apiKey: 'LtaVZV9fRcYsvz1uRBGlIFhX2hFMrqNQ'
    }
    this.initialReq = this.initialReq.bind(this)
  }

  async initialReq () {
    const locationKey = await Axios.get(`http://dataservice.accuweather.com/locations/v1/search?q=10004&apikey=LtaVZV9fRcYsvz1uRBGlIFhX2hFMrqNQ`)
    // const data = locationKey[0]['Key']
    console.log(locationKey.data)
  }




  render () {
    return (
      <div id='container'>
        <h4>can i see stars tonight?</h4>
        <div id='counter'>

        <form id="form1">
         zip code: <input type="text" name="zip"/><br></br>
        </form>
        <button onClick={() => this.initialReq()} form="form1">submit</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
