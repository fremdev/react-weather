var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4>It is {temp} degrees in {location}</h4>
  );
}

module.exports = WeatherMessage;
