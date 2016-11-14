var React = require('react');

var WeatherMessage = require('./WeatherMessage');
var WeatherForm = require('./WeatherForm');
var getTemperature = require('../api/openWeatherMap');
var ErrorModal = require('./ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleNewLocation: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    getTemperature(location).then(function(temp) {
      that.setState({
        temp: temp,
        location: location,
        isLoading: false
      });
    }, function(err) {
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });

  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if(temp && location){
        return (
          <WeatherMessage temp={temp} location={location}/>
        );
      }
    }

    function renderErrorMessage() {
      if(errorMessage) {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onNewLocation={this.handleNewLocation}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
