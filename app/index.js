import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
    // this.initalReq = this.initialReq.bind(this)
  }

  // async initialReq () {
  //   // await
  // }

  render () {
    return (
      <div id='container'>
        <h4>can i see stars tonight?</h4>
        <div id='counter'>

        <form id="form1">
         zip code: <input type="text" name="zip"/><br></br>
        </form>
        <button 
        // onClick={this.initialReq(zip)}
         form="form1">submit</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
