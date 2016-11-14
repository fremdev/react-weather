var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onNewLocation(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search wether by city" ref="location"/>
          <button className="hollow button expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;

// http://api.openweathermap.org/data/2.5/weather?q=Toretsk,UA&units=metric&appid=74ab00f9f5d6f488185edff7e764b725
