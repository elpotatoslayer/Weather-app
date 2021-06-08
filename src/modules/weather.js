export default class Weather {
  constructor(city) {
    this.api = '1bf7ab913a3e3c155665a70688f42c53';
    this.city = city;
  }

  async getweather() {
    const responseData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.api}`);

    if(responseData.status !== 200) {
      throw new Error('Enter Valid city name.')
    }

    const response = await responseData.json();

    return response;
  }

  changeLocation(city) {
    this.city = city;
  }
}
