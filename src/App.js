import React, { Component } from 'react';
import Form from './component/Form';
import WeatherResult from './component/WeatherResult'
import './App.css';
import About from './component/About'
const API='edc4f81c0159a33ecc7cf8035853c740';

class App extends Component {
  state={

   temperature:'',
   city:'',
   country:'',
   humidity:'',
   description:'',
   error:''


  }
  getWeather =(props)=>{
if(props.country && props.city){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&appid=${API}&units=metric`)
  .then(response => response.json())
  .then(data =>
   this.setState({
   
    temperature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].main,
    error:''
   })).catch(()=>{
   this.setState({
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
     error:'Wrong value...'
   })
  })
  
}
else{
  this.setState({
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'All fields must be entered...'
  })
}
  
  }
  render() {

    return (
      <div className="container weather-app">
   
    <div className=" weather-image"><About/></div>
<div className=" weather-content"><Form getWeather={this.getWeather} /><WeatherResult result={this.state}/></div>
    
    

       
      
      </div>
    );
  }
}

export default App;