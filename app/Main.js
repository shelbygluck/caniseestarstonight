import React from 'react'
import {fetchLocationKey} from './store'
import {connect} from 'react-redux'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      zipCode: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      this.setState({
          zipCode: event.target.value
      })
  }

  render () {
    return (
      <div id="main">
          {console.log('local state zip', this.state.zipCode)}
          {console.log('stored location key', this.props.locationKey)}
          {console.log('stored visibility', this.props.finalVis)}
        <div className='container'>
          <div className="middleColumn">
            <h2>CAN I SEE STARS TONIGHT?</h2>
            <div className="formAndButton">
              <form id="form1">
                   ZIP CODE: <input type="text" name="zip" onChange={this.handleChange} /><br></br>
              </form><br/>
              <p onClick={() => this.props.getLocationKey(this.state.zipCode)}>▷</p>
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


const mapStateToProps = state => {
  return {
    locationKey: state.locationKey,
    finalVis: state.finalVis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLocationKey: (zipCode) => dispatch(fetchLocationKey(zipCode)),
  }
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main)
export default ConnectedMain

// const apiKey = 'LtaVZV9fRcYsvz1uRBGlIFhX2hFMrqNQ'