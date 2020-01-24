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
      <div id="app">
        <div className='container'>
          <div className="middleColumn">
            <h2>CAN I SEE STARS TONIGHT?</h2>
            <div className="formAndButton">
              <form id="form1">
              ZIP CODE: <input type="text" name="zip"/><br></br>
              </form><br/>
              <button onClick={() => this.initialReq()} form="form1">FIND OUT</button>
            </div>
          </div>
        </div>
        <div className='container2'>
        </div>
        <div className='container'>
          <h4 id="noVisAnchor">NO VISIBILITY</h4>
        </div>
        <div className='container2'>
          <h4 id="lowVisAnchor">LOW VISIBILITY</h4>
        </div>
        <div className='container'>
          <h4 id="medVisAnchor">MEDIUM VISIBILITY</h4>
        </div>
        <div className='container2'>
          <h4 id="highVisAnchor">HIGH VISIBILITY</h4>
        </div>
        <div className='container'>
          <h4 id="superVisAnchor">SUPER VISIBILITY</h4>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
