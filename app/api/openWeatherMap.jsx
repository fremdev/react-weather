const axios = require('axios');

function getTemperature(location) {
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=74ab00f9f5d6f488185edff7e764b725&q=${encodedLocation}`;
  return axios.get(requestUrl)
    .then(function (res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        console.log(res.data.main.temp);
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
}

module.exports = getTemperature;
