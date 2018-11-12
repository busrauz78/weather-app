import React, { Component } from 'react'

export default class Form extends Component {
    state={
        city:'',
        country:''
      }
      handleChange=(e)=>{
this.setState({
              [e.target.id]:e.target.value
          })
      }
      handleSubmit=(e)=>{
          e.preventDefault();
        this.props.getWeather(this.state);
    }
  render() {
     
    return (
      <form className="form-content" onSubmit={this.handleSubmit}>
          <input type="text" id="city" placeholder="City"  onChange={this.handleChange} />
          <input type="text" id="country" placeholder="Country" onChange={this.handleChange}/>
          <button>Get Weather</button>
      </form>
    )
  }
}
