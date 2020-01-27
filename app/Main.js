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
        <div className='container'>
          <div className="middleColumn">
            <h2>CAN I SEE STARS TONIGHT?</h2>
            <div className="formAndButton">
              <form id="form1">
              ZIP CODE: <input type="text" name="zip" onChange={this.handleChange} /><br></br>
              </form><br/>
              <button onClick={() => this.props.getLocationKey(this.state.zipCode)}>FIND OUT</button>
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
// [{"Version":1,"Key":"3700_PC","Type":"PostalCode","Rank":15,"LocalizedName":"New York","EnglishName":"New York","PrimaryPostalCode":"10004","Region":{"ID":"NAM","LocalizedName":"North America","EnglishName":"North America"},"Country":{"ID":"US","LocalizedName":"United States","EnglishName":"United States"},"AdministrativeArea":{"ID":"NY","LocalizedName":"New York","EnglishName":"New York","Level":1,"LocalizedType":"State","EnglishType":"State","CountryID":"US"},"TimeZone":{"Code":"EST","Name":"America/New_York","GmtOffset":-5.0,"IsDaylightSaving":false,"NextOffsetChange":"2020-03-08T07:00:00Z"},"GeoPosition":{"Latitude":40.694,"Longitude":-74.016,"Elevation":{"Metric":{"Value":4.0,"Unit":"m","UnitType":5},"Imperial":{"Value":14.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"ParentCity":{"Key":"349727","LocalizedName":"New York","EnglishName":"New York"},"SupplementalAdminAreas":[{"Level":2,"LocalizedName":"New York","EnglishName":"New York"}],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","Alerts","DailyAirQualityForecast","DailyPollenForecast","ForecastConfidence","MinuteCast","Radar"]},{"Version":1,"Key":"70861_PC","Type":"PostalCode","Rank":500,"LocalizedName":"Caceres","EnglishName":"Caceres","PrimaryPostalCode":"10004","Region":{"ID":"EUR","LocalizedName":"Europe","EnglishName":"Europe"},"Country":{"ID":"ES","LocalizedName":"Spain","EnglishName":"Spain"},"AdministrativeArea":{"ID":"EX","LocalizedName":"Extremadura","EnglishName":"Extremadura","Level":1,"LocalizedType":"Autonomous Community","EnglishType":"Autonomous Community","CountryID":"ES"},"TimeZone":{"Code":"CET","Name":"Europe/Madrid","GmtOffset":1.0,"IsDaylightSaving":false,"NextOffsetChange":"2020-03-29T01:00:00Z"},"GeoPosition":{"Latitude":39.474,"Longitude":-6.374,"Elevation":{"Metric":{"Value":454.0,"Unit":"m","UnitType":5},"Imperial":{"Value":1490.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","Alerts","ForecastConfidence","MinuteCast","Radar"]},{"Version":1,"Key":"141779_PC","Type":"PostalCode","Rank":500,"LocalizedName":"Troyes","EnglishName":"Troyes","PrimaryPostalCode":"10004","Region":{"ID":"EUR","LocalizedName":"Europe","EnglishName":"Europe"},"Country":{"ID":"FR","LocalizedName":"France","EnglishName":"France"},"AdministrativeArea":{"ID":"10","LocalizedName":"Aube","EnglishName":"Aube","Level":1,"LocalizedType":"Department","EnglishType":"Department","CountryID":"FR"},"TimeZone":{"Code":"CET","Name":"Europe/Paris","GmtOffset":1.0,"IsDaylightSaving":false,"NextOffsetChange":"2020-03-29T01:00:00Z"},"GeoPosition":{"Latitude":48.3,"Longitude":4.083,"Elevation":{"Metric":{"Value":105.0,"Unit":"m","UnitType":5},"Imperial":{"Value":346.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts","Alerts","ForecastConfidence","MinuteCast","Radar"]},{"Version":1,"Key":"523769_PC","Type":"PostalCode","Rank":500,"LocalizedName":"San Bernardino","EnglishName":"San Bernardino","PrimaryPostalCode":"10004","Region":{"ID":"CAC","LocalizedName":"Central America","EnglishName":"Central America"},"Country":{"ID":"GT","LocalizedName":"Guatemala","EnglishName":"Guatemala"},"AdministrativeArea":{"ID":"SU","LocalizedName":"Suchitepéquez","EnglishName":"Suchitepéquez","Level":1,"LocalizedType":"Department","EnglishType":"Department","CountryID":"GT"},"TimeZone":{"Code":"CST","Name":"America/Guatemala","GmtOffset":-6.0,"IsDaylightSaving":false,"NextOffsetChange":null},"GeoPosition":{"Latitude":14.533,"Longitude":-91.45,"Elevation":{"Metric":{"Value":406.0,"Unit":"m","UnitType":5},"Imperial":{"Value":1332.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[],"DataSets":["AirQualityCurrentConditions","AirQualityForecasts"]}]