var React = require('react');

var WeatherMessage = require('./WeatherMessage');
var WeatherForm = require('./WeatherForm');
var getTemperature = require('../api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleNewLocation: function(location) {
    var that = this;

    this.setState({isLoading: true});
    getTemperature(location).then(function(temp) {
      that.setState({
        temp: temp,
        location: location,
        isLoading: false
      });
    }, function(err) {
      that.setState({
        isLoading: false
      });
      alert(err);
    });

  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if(temp && location){
        return (
          <WeatherMessage temp={temp} location={location}/>
        );
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onNewLocation={this.handleNewLocation}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
