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
    this.scrollToVis = this.scrollToVis.bind(this)
  }

  handleChange(event) {
      this.setState({
          zipCode: event.target.value
      })
  }

  scrollToVis() {
    const element = document.getElementById(`${this.props.finalVis}`);
    element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }

  render () {
    return (
      <div id="main">
         {this.props.finalVis != '' ? this.scrollToVis() : console.log('empty')}
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
          <h4 id="no">NO VISIBILITY</h4>
        </div>
        <div className='container2'>
          <h4 id="low">LOW VISIBILITY</h4>
        </div>
        <div className='container'>
          <h4 id="medium">MEDIUM VISIBILITY</h4>
        </div>
        <div className='container2'>
          <h4 id="high">HIGH VISIBILITY</h4>
        </div>
        <div className='container'>
          <h4 id="super">SUPER VISIBILITY</h4>
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