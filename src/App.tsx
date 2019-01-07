import * as React from 'react';
import AddLocation from './Components/AddLocation/AddLocation';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form/Form';
import WeatherList from './Components/Weather/WeatherList';
import { any } from 'prop-types';
import DateAndTime from './Components/DateAndTime/DateAndTime';
import  AutoSuggest from './Components/Shared/AutoComp/AutoSuggest';
import AutoComp from './Components/Shared/AutoComp/AutoComp';

const API_KEY = "ae5e37db2d45a69f977d060ebc13045d";

export interface IWeatherState {
  temperature?: number;
  city?: string;
  country?: string;
  humidity?: number;
  description?: string;
  error?: string;
}
class App extends React.Component<IWeatherState, {}>{

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
  
      return (
        <div>
          <HeaderContent />
          <AddLocation />
          <Form onSubmit={this.getWeather} />

          <WeatherList
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            error={this.state.error} />
        <AutoSuggest />
        </div>
        
      );
    }


    }


  



export default App;
