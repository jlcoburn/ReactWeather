var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ac9c294f7c09a3e94a680669d20a60d6&units=imperial';

//ac9c294f7c09a3e94a680669d20a60d6


module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(err.res.data.message) 
      } else {
        return res.data.main.temp;
      }
    }, function(err) {
      throw new Error('Unable to fetch weather for that location.');
    })
  }
}