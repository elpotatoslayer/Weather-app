import Weather from './modules/weather'
import UI from './modules/ui'

const weather = new Weather('london');

const ui = new UI();

const getWeather = () => {
  weather.getweather()
  .then(res => ui.content(res))
  .catch(err => err)
}


document.addEventListener('DOMContentLoaded', getWeather);
