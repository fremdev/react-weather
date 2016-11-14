var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to about page!</p>
      <p>This app is built using <a href="https://facebook.github.io/react/" target="_blank">React.js</a> framework and <a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap API</a></p>
      <p>You can check source code of the project: <a href="https://github.com/fremdev/react-weather" target="_blank">React Weather App on GitHub</a></p>
    </div>
  );
};

module.exports = About;
