import React, { Component } from 'react';
import logo from '../logo.svg';
import TimeFormat from 'hh-mm-ss'; // possible uninstall
import Button from './Button.js';
import Display from './Display.js';
import Power from './Power.js';
import Time from './Time.js';
import Title from './Title.js';
import FormErrors from './FormErrors.js';

const convertToSeconds = require('../utils/convertToSeconds.js').convertToSeconds
// uninstall react-time-input

class App extends Component {
  constructor() {
    super();
    this.state = {
      originalPower: '',
      yourPower: '',
      minutes: '',
      seconds: '',
      display: '',
      originalPowerValid: true,
      yourPowerValid: true,
      minutesValid: true,
      secondsValid: true, 
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    const toValidate = event.target.id + 'Valid'

    this.setState({[id]: value},
                  () => { this.validateField([toValidate], value) });
  }


  handleSubmit(event) {
    this.setState({
      display: convertToSeconds(this.state.minutes, this.state.seconds)
    }) 
    event.preventDefault();
  }

  validateField(name, value) {   
      if (value.match(/^(\s*|\d+)$/)) {
          this.setState({ [name]: true
        }, this.validateForm);  
      } else {
          this.setState({ [name]: false},
           this.validateForm);
      }
  }

  validateForm() {
    this.setState({formValid: this.state.originalPowerValid && this.state.yourPowerValid && this.state.minutesValid && this.state.secondsValid});
  }



  render() {
    return (
      <div>
        <div className="container center">
          <Title />

          <Power 
            value={this.state.originalPower}
            onChange={this.handleChange}
            id='originalPower'
            isValid={this.state.originalPowerValid}
          >
              What wattage is specified on the back of the package?
          </Power>
          
          <Power 
            value={this.state.yourPower}
            onChange={this.handleChange}
            id='yourPower'
            isValid={this.state.yourPowerValid}
          >
            What is the wattage of your microwave?
          </Power>

          <Time
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            onChange={this.handleChange}
            formErrors={this.state.formErrors}
            isSecondsValid={this.state.minutesValid}
            isMinutesValid={this.state.secondsValid}
          />  
          <Button 
            onSubmit={this.handleSubmit}
            isDisabled={this.state.formValid}
          />  

          <Display 
            value={this.state.display}
          /> 
        </div>
      </div>  
    )      
  }
}

export default App;
