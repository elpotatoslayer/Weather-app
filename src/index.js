import Weather from './modules/weather'

const weather = new Weather('london');

const getWeather = () => {
  weather.getweather()
  .then(res => console.log(res))
  .catch(err => err)
}


document.addEventListener('DOMContentLoaded', getWeather);