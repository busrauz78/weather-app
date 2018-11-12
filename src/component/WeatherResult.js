import React from 'react'

const WeatherResult=({result})=> {
  
  
  return (
   
      <ul class="list-group list-group-flush result">
     {result.error!==""?<div class="alert alert-danger">{result.error}</div>:null}
     {result.city!=="" && result.country!==""?<li class="list-group-item">Location:<span>{result.city+','+result.country}</span></li>:null}
     {result.temperature!==""?<li class="list-group-item">Temperature:<span>{result.temperature}</span></li>:null}
     {result.description!==""?<li class="list-group-item">Conditions:<span>{result.description}</span></li>:null}
     {result.humidity!==""?<li class="list-group-item">Humidity:<span>{result.humidity}</span></li>:null}
 
</ul>
 
  )
}
export default WeatherResult;