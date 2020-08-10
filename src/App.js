import React from 'react';
import Info from "./Components/info";
import Form from "./Components/form";
import Weather from "./Components/weather";
import "./App.css";


const KEY_API = "32f3238edc69b501beb7b5f5127d4719";

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    speed: undefined,
    sunset: undefined,
    error: undefined
  }

  initWeather = async(event) => {

    event.preventDefault();
    const city = event.target.elements.city.value;
 
    if(city){
      const url_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}`);
      const date = await url_api.json();
  
    let sunset = date.sys.sunset;
    let date_new = new Date();
    date_new.setTime(sunset)
    let sunset_date = date_new.getHours() + ":" + date_new.getMinutes() + ":" + date_new.getSeconds();

    this.setState({
      temp: date.main.temp,
      city: date.name,
      country: date.sys.country,
      speed: date.wind.speed,
      sunset: sunset_date,
      error: undefined
    });
   }else{
     this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      speed: undefined,
      sunset: undefined,
      error: "Вкажіть місто!!"
     });
   }
  }

  render(){
    return (

          <div className = "conteiner">
            <div className = "info">
              <Info />
            </div>
            <div className= "forms">
              <Form dataWeather = {this.initWeather}/>
              <Weather 
              temp = {this.state.temp}
              city = {this.state.city}
              country = {this.state.country}
              speed = {this.state.speed}
              sunset = {this.state.sunset}
              error = {this.state.error}
              />
          </div>
        </div> 
        
    );
  }
}

export default App;