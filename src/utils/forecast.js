const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=b303846e6a6638860cb9c6d28c9f1c93&query=' + latitude + ',' + longitude + '&units=m';
  const wrongURL = 'http://api.weatherstack.com/current?access_key=b303846e6a6638860cb9c6d28c9f1c93&query=&units=f';

  // http://api.weatherstack.com/current?access_key=b303846e6a6638860cb9c6d28c9f1c93&query=46.7712,23.6236&units=f
  // http://api.weatherstack.com/current?access_key=b303846e6a6638860cb9c6d28c9f1c93&query=-75.7088,44.1545&units=f

  request({ url, json: true}, (error, { body }) => {
  
      if (error) {
        callback('Unable to connect to weather service', undefined);
      } else if (body.error) {
        callback(body.error.info, undefined);
      } else {
          const weatherData = body.current;
          callback(undefined, weatherData.weather_descriptions[0] + '. It is currently ' + weatherData.temperature + ' degress out. It feels like ' + weatherData.feelslike + ' degress out');
      }
  });
}


module.exports = forecast;