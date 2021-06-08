import Weather from './modules/weather';
import UI from './modules/ui';

const weather = new Weather('london');

const ui = new UI();

const getWeather = () => {
  weather.getweather()
    .then((res) => {
      ui.content(res);
    })
    .catch((err) => {
      const error = document.querySelector('#error');
      error.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
      error.setAttribute('role', 'alert');
      error.textContent = err;
      setTimeout(() =>{
        error.remove()
      }, 3000)
    });
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('search').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  getWeather();
});
