import * as React from 'react';
import { async } from 'q';
import WeatherList from './WeatherList';

const API_KEY = "ae5e37db2d45a69f977d060ebc13045d";

export interface IWeatherState {
  temperature?: number;
  city?: string;
  country?: string;
  humidity?: number;
  description?: string;
  error?: string;
}
class Weather extends React.Component<IWeatherState, {}>{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => { //e is referred as event handler in js
    e.preventDefault(); // it will prevent whole page refresh
    const city = e.target.elements.city.value; // here we are targeting elements in form tag
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

    const data = await api_call.json(); //getting inputs from json
    if (city && country) { //if the inputs are valid 
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {

      //if the inputs are not valid
      this.setState({

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value."
      });
    }


  }

  render() { //rendering inputs from different components and here passing props
    if (this.state.city && this.state.country) {
      return (
        <div>


          <WeatherList
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />



        </div>


      );
    }
    else {
      return (
        <div>

          <WeatherList
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error}
          />

        </div>
      );
    }
  }
};

export default Weather;
