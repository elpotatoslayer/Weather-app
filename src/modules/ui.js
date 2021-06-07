export default class UI {
  constractor() {
    const location = document.getElementById('w-location');
          desc = document.getElementById('w-description');
          string = document.getElementById('w-string');
          details = document.getElementById('w-details');
          icon = document.getElementById('w-icon');
          humidity = document.getElementById('w-humidity');
          feelsLike = document.getElementById('w-feels-like');
          dewpoint = document.getElementById('w-dewpoint');
          wind = document.getElementById('w-wind');

    this.location = location;
    this.desc = desc;
    this.string = string;
    this.details = details;
    this.icon = icon;
    this.humidity = humidity;
    this.feelsLike = this.feelsLike;
  }
}