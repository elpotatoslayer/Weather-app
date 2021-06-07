import Weather from './modules/weather'

const weather = new Weather('london');

const getWeather = () => {
  weather.getweather()
  .then(res => ui.content(res))
  .catch(err => err)
}


document.addEventListener('DOMContentLoaded', getWeather);