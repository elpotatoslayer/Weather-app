import Weather from './modules/weather';
import UI from './modules/ui';
import './style/main.css';

const weather = new Weather('london');

const ui = new UI();

const getWeather = () => {
  weather.getweather()
    .then((res) => {
      ui.content(res);
      const temp = document.getElementById('w-string');
      const x = (temp) => {
        const tempC = parseFloat(res.main.temp - 273.15).toFixed(1);
        temp.innerHTML = `${tempC}°C`;
      };
      x(temp);
    })
    .catch((err) => {
      const error = document.querySelector('#error');
      error.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
      error.setAttribute('role', 'alert');
      error.textContent = err;
      setTimeout(() => {
        error.remove();
      }, 3000);
    });
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('search').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  getWeather();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  document.querySelector('body').style.backgroundColor = getRandomColor();
});
