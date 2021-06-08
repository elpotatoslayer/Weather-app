import Weather from './modules/weather';
import UI from './modules/ui';

const weather = new Weather('london');

const ui = new UI();

const getWeather = () => {
  weather.getweather()
    .then((res) => {
      ui.content(res);
    })
    .catch(() => {
      const h1 = document.getElementById('w-location').textContent;
      const error = document.querySelector('#error');
      error.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
      error.setAttribute('role', 'alert');
      error.textContent = 'SEARCH FOR A VALID CITY OR COUNTRY';
      const x = document.createElement('BUTTON');
      x.setAttribute('type', 'button');
      x.setAttribute('data-dismiss', 'alert');
      x.setAttribute('class', 'close');
      x.innerHTML = '&times;';
      error.appendChild(x);
      if (!h1 === 'undefined') {
        error.remove();
      }
    });
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('search').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  getWeather();
});
